#!/usr/bin/env python3
"""Query niches from SQLite.

Usage:
  python3 scripts/query.py --top 10
  python3 scripts/query.py --type RegTech --min-score 8
  python3 scripts/query.py --niche-id 42 --full
  python3 scripts/query.py --search "WhatsApp"
"""

import argparse
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import connect


def main():
    parser = argparse.ArgumentParser(description='Query niches')
    parser.add_argument('--top', type=int, default=20)
    parser.add_argument('--type', type=str)
    parser.add_argument('--min-score', type=float)
    parser.add_argument('--max-score', type=float)
    parser.add_argument('--search', type=str)
    parser.add_argument('--niche-id', type=int)
    parser.add_argument('--full', action='store_true', help='Show full details including competitors/insights')
    parser.add_argument('--status', type=str)
    args = parser.parse_args()

    conn = connect()

    if args.niche_id:
        show_niche_detail(conn, args.niche_id, args.full)
        conn.close()
        return

    where = []
    params = []

    if args.type:
        where.append("type = ?")
        params.append(args.type)
    if args.min_score:
        where.append("score >= ?")
        params.append(args.min_score)
    if args.max_score:
        where.append("score <= ?")
        params.append(args.max_score)
    if args.search:
        where.append("(name LIKE ? OR sub LIKE ? OR gap LIKE ?)")
        term = f"%{args.search}%"
        params.extend([term, term, term])
    if args.status:
        where.append("status = ?")
        params.append(args.status)

    where_clause = f"WHERE {' AND '.join(where)}" if where else ""
    params.append(args.top)

    rows = conn.execute(
        f"SELECT rank, name, type, score, mi, mx, tam, dd FROM niches {where_clause} ORDER BY score DESC LIMIT ?",
        params
    ).fetchall()

    if not rows:
        print("No niches found.")
        conn.close()
        return

    print(f"{'#':>3} {'Score':>5} {'Type':<12} {'MVP':>5} {'DD':>2} {'Name'}")
    print("-" * 70)
    for r in rows:
        dd = "+" if r['dd'] else " "
        mvp = f"{r['mi']}-{r['mx']}w" if r['mi'] else "—"
        print(f"{r['rank']:>3} {r['score']:>5.2f} {r['type']:<12} {mvp:>5} {dd:>2} {r['name']}")

    print(f"\n{len(rows)} results")
    conn.close()


def show_niche_detail(conn, niche_id: int, full: bool):
    row = conn.execute("SELECT * FROM niches WHERE id = ?", (niche_id,)).fetchone()
    if not row:
        print(f"Niche id={niche_id} not found")
        return

    print(f"#{row['rank']} {row['name']} [{row['type']}]")
    print(f"  {row['sub']}")
    print(f"  Score: {row['score']} | MVP: {row['mi']}-{row['mx']}w | TAM: {row['tam']}")
    print(f"  Factors: D={row['d']} G={row['g']} R={row['r']} S={row['s']} M={row['m']} A={row['a']} F={row['f']} T={row['t']}")
    print(f"  Gap: {row['gap']}")

    if row['cac']:
        ratio = row['ltv'] / row['cac'] if row['cac'] else 0
        print(f"  Unit: CAC €{row['cac']} / LTV €{row['ltv']} ({ratio:.1f}x) | Churn: {row['churn']}")
        print(f"  Y1: {row['y1']} | Risks: {row['risks']}")
        print(f"  GTM: {row['gtm']}")
        print(f"  MVP: {row['mvpScope']}")

    if full:
        comps = conn.execute("SELECT * FROM competitors WHERE niche_id = ?", (niche_id,)).fetchall()
        if comps:
            print(f"\n  Competitors ({len(comps)}):")
            for c in comps:
                print(f"    - {c['name']} ({c['type']}) {c['url'] or ''}")

        insights = conn.execute("SELECT * FROM insights WHERE niche_id = ? ORDER BY created_at DESC LIMIT 10", (niche_id,)).fetchall()
        if insights:
            print(f"\n  Insights ({len(insights)}):")
            for ins in insights:
                print(f"    [{ins['source']}] {ins['title'] or ''}: {(ins['content'] or '')[:80]}")

        history = conn.execute("SELECT * FROM score_history WHERE niche_id = ? ORDER BY created_at DESC LIMIT 5", (niche_id,)).fetchall()
        if history:
            print(f"\n  Score History:")
            for h in history:
                print(f"    {h['old_score']} → {h['new_score']} ({h['reason']}) [{h['created_at']}]")


if __name__ == '__main__':
    main()
