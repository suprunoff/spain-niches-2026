#!/usr/bin/env python3
"""Export niches.db → data/niches.json (dashboard-compatible format)."""

import json
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from db import JSON_PATH, connect

# Fields the dashboard expects (no id/created_at/updated_at/status)
EXPORT_FIELDS = [
    'rank', 'name', 'sub', 'type',
    'd', 'g', 'r', 's', 'm', 'a', 'f', 't',
    'score', 'mi', 'mx', 'tam', 'cac', 'ltv', 'churn',
    'y1', 'y1n', 'gap', 'risks', 'gtm', 'mvpScope', 'dd',
]


def export():
    conn = connect()
    rows = conn.execute("SELECT * FROM niches ORDER BY rank").fetchall()
    conn.close()

    niches = []
    for row in rows:
        d = {}
        for field in EXPORT_FIELDS:
            val = row[field]
            if val is None:
                continue
            if field == 'dd':
                val = bool(val)
            d[field] = val
        niches.append(d)

    os.makedirs(os.path.dirname(JSON_PATH), exist_ok=True)
    with open(JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(niches, f, ensure_ascii=False, separators=(',', ':'))

    print(f"Exported {len(niches)} niches → {JSON_PATH}")
    return len(niches)


if __name__ == '__main__':
    export()
