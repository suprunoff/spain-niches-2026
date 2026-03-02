#!/usr/bin/env python3
"""One-time migration: parse const D from index.html → INSERT into niches.db."""

import json
import re
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import DB_PATH, init_db, connect

DASHBOARD = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'index.html')

NICHE_FIELDS = [
    'rank', 'name', 'sub', 'type',
    'd', 'g', 'r', 's', 'm', 'a', 'f', 't',
    'score', 'mi', 'mx', 'tam', 'cac', 'ltv', 'churn',
    'y1', 'y1n', 'gap', 'risks', 'gtm', 'mvpScope', 'dd',
]


def extract_d_array(html: str) -> str:
    """Extract the content between const D = [ ... ];"""
    start = html.find('const D = [')
    if start == -1:
        raise ValueError("'const D = [' not found")
    arr_start = html.find('[', start)
    depth = 0
    for i in range(arr_start, len(html)):
        if html[i] == '[':
            depth += 1
        elif html[i] == ']':
            depth -= 1
            if depth == 0:
                return html[arr_start + 1:i]
    raise ValueError("Could not find closing ] of D array")


def js_objects_to_dicts(js_text: str) -> list[dict]:
    """Parse JS objects with unquoted keys into Python dicts."""
    # Remove JS comments
    js_text = re.sub(r'//[^\n]*', '', js_text)
    js_text = re.sub(r'/\*.*?\*/', '', js_text, flags=re.DOTALL)

    # Find all {...} objects
    objects = []
    depth = 0
    start = -1
    for i, ch in enumerate(js_text):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start >= 0:
                objects.append(js_text[start:i + 1])
                start = -1

    dicts = []
    for obj_str in objects:
        d = parse_js_object(obj_str)
        if d and 'rank' in d:
            dicts.append(d)
    return dicts


def parse_js_object(s: str) -> dict:
    """Convert a single JS object string to Python dict."""
    s = s.strip().strip('{}')
    result = {}
    # Match key:value pairs, handling quoted strings with commas inside
    i = 0
    while i < len(s):
        # Skip whitespace
        while i < len(s) and s[i] in ' \t\n\r':
            i += 1
        if i >= len(s):
            break

        # Find key
        key_match = re.match(r'(\w+)\s*:', s[i:])
        if not key_match:
            i += 1
            continue
        key = key_match.group(1)
        i += key_match.end()

        # Skip whitespace
        while i < len(s) and s[i] in ' \t\n\r':
            i += 1

        # Parse value
        if i >= len(s):
            break

        if s[i] == '"':
            # Quoted string — find matching close quote
            end = i + 1
            while end < len(s):
                if s[end] == '\\':
                    end += 2
                    continue
                if s[end] == '"':
                    break
                end += 1
            value = s[i + 1:end]
            i = end + 1
        elif s[i:i + 4] == 'true':
            value = True
            i += 4
        elif s[i:i + 5] == 'false':
            value = False
            i += 5
        else:
            # Number or unquoted
            m = re.match(r'([^,}\s]+)', s[i:])
            if m:
                raw = m.group(1)
                i += len(raw)
                try:
                    value = int(raw)
                except ValueError:
                    try:
                        value = float(raw)
                    except ValueError:
                        value = raw
            else:
                i += 1
                continue

        result[key] = value

        # Skip comma
        while i < len(s) and s[i] in ' \t\n\r,':
            i += 1

    return result


def migrate():
    with open(DASHBOARD) as f:
        html = f.read()

    js_arr = extract_d_array(html)
    niches = js_objects_to_dicts(js_arr)
    print(f"Parsed {len(niches)} niches from index.html")

    if not niches:
        print("ERROR: No niches parsed!")
        sys.exit(1)

    init_db()
    conn = connect()

    cols = ['rank', 'name', 'sub', 'type',
            'd', 'g', 'r', 's', 'm', 'a', 'f', 't',
            'score', 'mi', 'mx', 'tam', 'cac', 'ltv', 'churn',
            'y1', 'y1n', 'gap', 'risks', 'gtm', 'mvpScope', 'dd']

    placeholders = ', '.join(['?'] * len(cols))
    col_names = ', '.join(cols)
    sql = f"INSERT OR REPLACE INTO niches ({col_names}) VALUES ({placeholders})"

    for n in niches:
        values = []
        for col in cols:
            v = n.get(col)
            if col == 'dd':
                v = 1 if v else 0
            values.append(v)
        conn.execute(sql, values)

    conn.commit()

    count = conn.execute("SELECT COUNT(*) FROM niches").fetchone()[0]
    print(f"Inserted {count} niches into {DB_PATH}")

    # Verify first and last
    first = conn.execute("SELECT rank, name, score FROM niches ORDER BY rank LIMIT 1").fetchone()
    last = conn.execute("SELECT rank, name, score FROM niches ORDER BY rank DESC LIMIT 1").fetchone()
    print(f"First: rank={first[0]}, {first[1]}, score={first[2]}")
    print(f"Last:  rank={last[0]}, {last[1]}, score={last[2]}")

    conn.close()


if __name__ == '__main__':
    migrate()
