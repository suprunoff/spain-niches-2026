#!/usr/bin/env python3
"""Update score factors for a niche. Recalculates score, logs history, auto-exports JSON.

Usage:
  python3 scripts/update_score.py --niche-id 42 --g 8 --reason "New competitor data"
  python3 scripts/update_score.py --niche-id 42 --g 8 --d 7 --reason "test" --dry-run
"""

import argparse
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from db import connect, calc_score
from export_json import export

FACTORS = ['d', 'g', 'r', 's', 'm', 'a', 'f', 't']


def main():
    parser = argparse.ArgumentParser(description='Update niche score factors')
    parser.add_argument('--niche-id', type=int, required=True)
    for f in FACTORS:
        parser.add_argument(f'--{f}', type=int)
    parser.add_argument('--reason', type=str, default='manual update')
    parser.add_argument('--changed-by', type=str, default='cli')
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()

    conn = connect()
    row = conn.execute("SELECT * FROM niches WHERE id = ?", (args.niche_id,)).fetchone()
    if not row:
        print(f"ERROR: Niche id={args.niche_id} not found")
        sys.exit(1)

    print(f"Niche: {row['name']} (rank {row['rank']})")
    print(f"Current score: {row['score']}")

    # Apply factor changes
    new_factors = {}
    changes = []
    for f in FACTORS:
        val = getattr(args, f)
        if val is not None:
            old = row[f]
            new_factors[f] = val
            changes.append(f"{f}: {old} → {val}")
            print(f"  {f}: {old} → {val}")
        else:
            new_factors[f] = row[f]

    if not changes:
        print("No changes specified.")
        sys.exit(0)

    new_score = calc_score(**new_factors)
    print(f"New score: {new_score} (was {row['score']})")

    if args.dry_run:
        print("[DRY RUN] No changes written.")
        conn.close()
        return

    # Update factors + score
    sets = [f"{f} = ?" for f in FACTORS if getattr(args, f) is not None]
    sets.append("score = ?")
    sets.append("updated_at = CURRENT_TIMESTAMP")
    vals = [getattr(args, f) for f in FACTORS if getattr(args, f) is not None]
    vals.append(new_score)
    vals.append(args.niche_id)

    conn.execute(f"UPDATE niches SET {', '.join(sets)} WHERE id = ?", vals)

    # Log to score_history
    conn.execute(
        "INSERT INTO score_history (niche_id, old_score, new_score, reason, changed_by) VALUES (?, ?, ?, ?, ?)",
        (args.niche_id, row['score'], new_score, args.reason, args.changed_by)
    )

    conn.commit()
    conn.close()

    print("Score updated. Exporting JSON...")
    export()


if __name__ == '__main__':
    main()
