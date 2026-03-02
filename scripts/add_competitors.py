#!/usr/bin/env python3
"""Add competitors to a niche.

Usage:
  python3 scripts/add_competitors.py --niche-id 42 --json '[{"name":"Acme","url":"https://acme.com","type":"direct"}]'
  python3 scripts/add_competitors.py --niche-id 42 --name "Acme" --url "https://acme.com" --type direct
"""

import argparse
import json
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import connect


def main():
    parser = argparse.ArgumentParser(description='Add competitors to a niche')
    parser.add_argument('--niche-id', type=int, required=True)
    parser.add_argument('--json', type=str, help='JSON array of competitors')
    parser.add_argument('--name', type=str)
    parser.add_argument('--url', type=str)
    parser.add_argument('--type', type=str)
    parser.add_argument('--funding', type=str)
    parser.add_argument('--weakness', type=str)
    parser.add_argument('--pricing', type=str)
    parser.add_argument('--notes', type=str)
    args = parser.parse_args()

    conn = connect()
    niche = conn.execute("SELECT id, name FROM niches WHERE id = ?", (args.niche_id,)).fetchone()
    if not niche:
        print(f"ERROR: Niche id={args.niche_id} not found")
        sys.exit(1)

    if args.json:
        competitors = json.loads(args.json)
    elif args.name:
        competitors = [{
            'name': args.name, 'url': args.url, 'type': args.type,
            'funding': args.funding, 'weakness': args.weakness,
            'pricing': args.pricing, 'notes': args.notes,
        }]
    else:
        print("ERROR: Provide --json or --name")
        sys.exit(1)

    cols = ['niche_id', 'name', 'url', 'type', 'funding', 'weakness', 'pricing', 'notes']
    for c in competitors:
        vals = [args.niche_id, c.get('name'), c.get('url'), c.get('type'),
                c.get('funding'), c.get('weakness'), c.get('pricing'), c.get('notes')]
        conn.execute(
            f"INSERT INTO competitors ({', '.join(cols)}) VALUES ({', '.join(['?'] * len(cols))})",
            vals
        )

    conn.commit()
    total = conn.execute("SELECT COUNT(*) FROM competitors WHERE niche_id = ?", (args.niche_id,)).fetchone()[0]
    conn.close()

    print(f"Added {len(competitors)} competitor(s) to '{niche['name']}'. Total: {total}")


if __name__ == '__main__':
    main()
