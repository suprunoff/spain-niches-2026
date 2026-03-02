#!/usr/bin/env python3
"""Add insights (Reddit, news, interviews) to a niche.

Usage:
  python3 scripts/add_insights.py --niche-id 42 --source reddit --content "Users complain about X" --url "https://reddit.com/..."
  python3 scripts/add_insights.py --niche-id 42 --source interview --title "CustDev #3" --content "..."
"""

import argparse
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import connect


def main():
    parser = argparse.ArgumentParser(description='Add insight to a niche')
    parser.add_argument('--niche-id', type=int, required=True)
    parser.add_argument('--source', type=str, required=True, help='reddit, interview, news, etc.')
    parser.add_argument('--content', type=str, required=True)
    parser.add_argument('--url', type=str)
    parser.add_argument('--title', type=str)
    parser.add_argument('--sentiment', type=str, help='positive, negative, neutral')
    parser.add_argument('--relevance', type=float, default=0.5)
    args = parser.parse_args()

    conn = connect()
    niche = conn.execute("SELECT id, name FROM niches WHERE id = ?", (args.niche_id,)).fetchone()
    if not niche:
        print(f"ERROR: Niche id={args.niche_id} not found")
        sys.exit(1)

    conn.execute(
        "INSERT INTO insights (niche_id, source, url, title, content, sentiment, relevance_score) "
        "VALUES (?, ?, ?, ?, ?, ?, ?)",
        (args.niche_id, args.source, args.url, args.title, args.content, args.sentiment, args.relevance)
    )
    conn.commit()
    total = conn.execute("SELECT COUNT(*) FROM insights WHERE niche_id = ?", (args.niche_id,)).fetchone()[0]
    conn.close()

    print(f"Added insight to '{niche['name']}' (source: {args.source}). Total insights: {total}")


if __name__ == '__main__':
    main()
