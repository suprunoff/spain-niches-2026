"""Shared DB module: schema, connection, score formula, constants."""

import sqlite3
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, 'niches.db')
JSON_PATH = os.path.join(BASE_DIR, 'data', 'niches.json')

SCHEMA = """
CREATE TABLE IF NOT EXISTS niches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rank INTEGER UNIQUE NOT NULL,
    name TEXT NOT NULL,
    sub TEXT,
    type TEXT,
    d INTEGER, g INTEGER, r INTEGER, s INTEGER,
    m INTEGER, a INTEGER, f INTEGER, t INTEGER,
    score REAL,
    mi INTEGER, mx INTEGER,
    tam TEXT, cac REAL, ltv REAL, churn TEXT,
    y1 TEXT, y1n REAL,
    gap TEXT, risks TEXT, gtm TEXT, mvpScope TEXT,
    dd INTEGER DEFAULT 0,
    status TEXT DEFAULT 'scored',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS competitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    niche_id INTEGER NOT NULL REFERENCES niches(id),
    name TEXT NOT NULL,
    url TEXT,
    type TEXT,
    funding TEXT,
    weakness TEXT,
    pricing TEXT,
    notes TEXT,
    scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS insights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    niche_id INTEGER NOT NULL REFERENCES niches(id),
    source TEXT,
    url TEXT,
    title TEXT,
    content TEXT,
    sentiment TEXT,
    relevance_score REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS score_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    niche_id INTEGER NOT NULL REFERENCES niches(id),
    old_score REAL,
    new_score REAL,
    reason TEXT,
    changed_by TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS validation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    niche_id INTEGER NOT NULL REFERENCES niches(id),
    type TEXT,
    status TEXT,
    result TEXT,
    go_no_go TEXT,
    data_json TEXT,
    spend_eur REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"""

# Weights: d=1, g=1.5, r=1.2, s=1.3, m=1, a=1.2, f=0.8, t=1
WEIGHTS = {'d': 1.0, 'g': 1.5, 'r': 1.2, 's': 1.3, 'm': 1.0, 'a': 1.2, 'f': 0.8, 't': 1.0}
WEIGHT_SUM = sum(WEIGHTS.values())


def calc_score(d: int, g: int, r: int, s: int,
               m: int, a: int, f: int, t: int) -> float:
    raw = (d * WEIGHTS['d'] + g * WEIGHTS['g'] + r * WEIGHTS['r'] +
           s * WEIGHTS['s'] + m * WEIGHTS['m'] + a * WEIGHTS['a'] +
           f * WEIGHTS['f'] + t * WEIGHTS['t'])
    return round(raw / WEIGHT_SUM, 2)


def connect() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db() -> None:
    conn = connect()
    conn.executescript(SCHEMA)
    conn.close()
