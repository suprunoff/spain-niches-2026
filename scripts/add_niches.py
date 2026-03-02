#!/usr/bin/env python3
"""
Assembler: парсит JS-объекты ниш из staging файла → INSERT в SQLite → экспорт JSON.
Использование: python3 scripts/add_niches.py tasks/staging/batchN.js [--label "BATCH N: description"] [--dry-run]
"""

import re
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import connect, init_db
from export_json import export
from migrate_to_sqlite import parse_js_object


def get_niches_from_staging(path: str) -> list[str]:
    """Читает staging JS файл, возвращает список объект-строк."""
    with open(path) as f:
        content = f.read()
    content = re.sub(r'//[^\n]*', '', content)
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Find all {...} objects
    objects = []
    depth = 0
    start = -1
    for i, ch in enumerate(content):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start >= 0:
                objects.append(content[start:i + 1])
                start = -1
    return objects


def insert_niches(staging_path: str, label: str | None = None, dry_run: bool = False):
    init_db()
    conn = connect()

    max_rank = conn.execute("SELECT COALESCE(MAX(rank), 0) FROM niches").fetchone()[0]
    print(f"Current max rank: {max_rank}")

    raw_objects = get_niches_from_staging(staging_path)
    if not raw_objects:
        print(f"ERROR: No niche objects found in {staging_path}")
        sys.exit(1)

    niches = []
    for obj_str in raw_objects:
        d = parse_js_object(obj_str)
        if d and ('name' in d or 'rank' in d):
            niches.append(d)

    print(f"Found {len(niches)} niches in staging file")

    cols = ['rank', 'name', 'sub', 'type',
            'd', 'g', 'r', 's', 'm', 'a', 'f', 't',
            'score', 'mi', 'mx', 'tam', 'cac', 'ltv', 'churn',
            'y1', 'y1n', 'gap', 'risks', 'gtm', 'mvpScope', 'dd']

    for i, n in enumerate(niches):
        rank = max_rank + 1 + i
        n['rank'] = rank

        if dry_run:
            print(f"  [DRY] #{rank}: {n.get('name', '?')} (score={n.get('score', '?')})")
            continue

        values = []
        for col in cols:
            v = n.get(col)
            if col == 'dd':
                v = 1 if v else 0
            values.append(v)

        placeholders = ', '.join(['?'] * len(cols))
        col_names = ', '.join(cols)
        conn.execute(
            f"INSERT INTO niches ({col_names}) VALUES ({placeholders})",
            values
        )

    if dry_run:
        print(f"\n[DRY RUN] Would add {len(niches)} niches (ranks {max_rank+1}-{max_rank+len(niches)})")
        conn.close()
        return

    conn.commit()
    total = conn.execute("SELECT COUNT(*) FROM niches").fetchone()[0]
    conn.close()

    print(f"Inserted {len(niches)} niches. Total: {total}")
    print(f"New ranks: {max_rank+1} — {max_rank+len(niches)}")

    # Auto-export JSON
    export()


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/add_niches.py tasks/staging/batchN.js [--label 'desc'] [--dry-run]")
        sys.exit(1)

    staging = sys.argv[1]
    label = None
    dry_run = '--dry-run' in sys.argv

    if '--label' in sys.argv:
        idx = sys.argv.index('--label')
        if idx + 1 < len(sys.argv):
            label = sys.argv[idx + 1]

    insert_niches(staging, label, dry_run)
