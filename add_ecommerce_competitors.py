#!/usr/bin/env python3
"""Add detailed competitors for E-Commerce Seller Compliance niche."""

import sys
import os
import json

sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'scripts'))
from db import connect

# Find niche ID
conn = connect()
niche = conn.execute("SELECT id, name FROM niches WHERE name LIKE ?", ("%E-Commerce Seller%",)).fetchone()
if not niche:
    print("ERROR: E-Commerce Seller Compliance niche not found")
    conn.close()
    sys.exit(1)

niche_id = niche['id']
print(f"Found niche: {niche['name']} (id={niche_id})")

# Clear existing competitors for this niche
conn.execute("DELETE FROM competitors WHERE niche_id = ?", (niche_id,))

# Add competitors
competitors = [
    {
        "name": "A2X Accounting",
        "url": "https://www.a2xaccounting.com/",
        "type": "direct",
        "funding": "Series B (~$10M)",
        "weakness": "No VeriFactu (planned Q2 2026); Accounting-first, not sellers-first; No RGPD/DAC7 features",
        "pricing": "$19-899/mес ($29-49 typical for Spain)",
        "notes": "Main competitor. 12K+ users. SP-API integration strong. VeriFactu coming but will delay GTM. Price increase expected when launching VeriFactu."
    },
    {
        "name": "Quaderno",
        "url": "https://quaderno.io/",
        "type": "adjacent",
        "funding": "Unknown",
        "weakness": "Shopify/WooCommerce focus; Limited Amazon integration (orders only); Certified for VeriFactu but not sales-integrated",
        "pricing": "€29-99/mес",
        "notes": "Certified VeriFactu. But lacks Amazon SP-API automation. Appeals to Shopify sellers, not Amazon sellers primarily."
    },
    {
        "name": "Holded",
        "url": "https://www.holded.com/",
        "type": "adjacent",
        "funding": "Series A",
        "weakness": "Spain-only; Invoicing + inventory focus; VeriFactu certified but weak on ecommerce-specific features",
        "pricing": "€12-79/mес",
        "notes": "Spanish player. Has Amazon integration (order sync). But lacks automated invoice submission to AEAT."
    },
    {
        "name": "Billage",
        "url": "https://www.billage.com/",
        "type": "low_threat",
        "funding": "Bootstrap/SMB",
        "weakness": "VeriFactu not ready; No Amazon integration; Generic invoicing tool",
        "pricing": "€10-40/mес",
        "notes": "Spanish invoicing tool. Low threat. Too basic for compliance SaaS."
    },
    {
        "name": "Contasimple",
        "url": "https://contasimple.com/",
        "type": "low_threat",
        "funding": "Bootstrap",
        "weakness": "No Amazon integration; No VeriFactu; Invoice generation only",
        "pricing": "€10-30/mес",
        "notes": "Generic invoice generator. No ecommerce focus. Low threat."
    },
    {
        "name": "Amazon (native VeriFactu)",
        "url": "https://sellercentral.amazon.es/",
        "type": "existential",
        "funding": "Built-in (infinite)",
        "weakness": "Currently not integrated. But could launch end-2026/2027. If free or €10/mес → game over for SaaS.",
        "pricing": "Unknown (likely free or freemium)",
        "notes": "Existential threat (40% probability). Already integrated TicketBAI (Portugal). VeriFactu is logical next. If launches: pivot to multi-marketplace or advisory."
    },
    {
        "name": "TaxJar / Avalara",
        "url": "https://www.taxjar.com/ / https://www.avalara.com/",
        "type": "low_threat",
        "funding": "Series D / Public",
        "weakness": "US sales tax focus; No Spain presence; No VeriFactu; Complex for SMB sellers",
        "pricing": "$15-249/mес",
        "notes": "US/UK focus. Expensive. No expansion to Spain planned (as of 2026). Not a threat."
    },
]

for comp in competitors:
    cols = ['niche_id', 'name', 'url', 'type', 'funding', 'weakness', 'pricing', 'notes']
    vals = [niche_id, comp.get('name'), comp.get('url'), comp.get('type'),
            comp.get('funding'), comp.get('weakness'), comp.get('pricing'), comp.get('notes')]
    conn.execute(
        f"INSERT INTO competitors ({', '.join(cols)}) VALUES ({', '.join(['?'] * len(cols))})",
        vals
    )

conn.commit()
total = conn.execute("SELECT COUNT(*) FROM competitors WHERE niche_id = ?", (niche_id,)).fetchone()[0]
print(f"✅ Added {len(competitors)} competitors. Total for niche: {total}")

# Now add insights
insights = [
    {
        "source": "Deep Dive Research",
        "url": "/02-research/spain-niches/DEEP-DIVE-ECOMMERCE-COMPLIANCE.md",
        "title": "VeriFactu Deadline: Jan 2027 for SL, Jul 2027 for autónomos",
        "content": "Real Decreto 1007/2023 mandates all invoices in Spain must use VeriFactu-certified software. Penalties: €3K-600K. This is a hard regulatory deadline driving immediate customer need.",
        "sentiment": "positive",
        "relevance_score": 0.95
    },
    {
        "source": "Research — Amazon Sellers Stats",
        "url": "https://redstagfulfillment.com/how-many-third-party-sellers-are-on-amazon/",
        "title": "Amazon.es has 60K-120K active sellers in 2026",
        "content": "Multiple sources confirm Spain has 60K-120K active sellers on Amazon. This is the addressable market. Not all are obligated (small resellers exempt), but 30-40% are high-value SMB.",
        "sentiment": "positive",
        "relevance_score": 0.90
    },
    {
        "source": "Research — Marketplace Growth",
        "url": "https://www.linnworks.com/blog/top-marketplaces-in-spain/",
        "title": "Miravia, El Corte Inglés, Carrefour expanding marketplace programs",
        "content": "Beyond Amazon, Miravia (Alibaba, growing), El Corte Inglés (5K sellers target), Carrefour (3-5K sellers), and Leroy Merlin all expanding. Market is fragmenting — opportunity for multi-marketplace compliance SaaS.",
        "sentiment": "positive",
        "relevance_score": 0.85
    },
    {
        "source": "Research — RGPD 2026",
        "url": "https://geotargetly.com/blog/gdpr-cookie-consent-a-complete-guide-for-compliance-optimization",
        "title": "GDPR enforcement tightens in 2026 (SHEIN €150M fine in Sept 2025)",
        "content": "EU regulators aggressively enforcing GDPR. CNIL fined SHEIN €150M for cookie consent. Sellers on EU marketplaces face increasing GDPR liability. This creates demand for compliance tools.",
        "sentiment": "positive",
        "relevance_score": 0.80
    },
    {
        "source": "Research — Unit Economics",
        "url": "/02-research/spain-niches/DEEP-DIVE-ECOMMERCE-COMPLIANCE.md",
        "title": "LTV:CAC = 21.5x, Payback = 3-4 weeks, Y1 ARR = €1.18M",
        "content": "Solid unit economics: CAC €35, ARPU €49/mес, LTV €754. Payback in 3-4 weeks due to low COGS (€10/mес). This supports aggressive GTM spending.",
        "sentiment": "positive",
        "relevance_score": 0.95
    },
    {
        "source": "Research — A2X Threat",
        "url": "https://www.a2xaccounting.com/",
        "title": "A2X Accounting (main competitor) planning VeriFactu for Q2 2026",
        "content": "A2X, with 12K+ users and Series B funding, is planning VeriFactu integration. If launches before us, market advantage is theirs. Must launch MVP by Feb-Mar 2026 to secure early adopters.",
        "sentiment": "negative",
        "relevance_score": 0.90
    },
    {
        "source": "Research — Amazon API Complexity",
        "url": "https://www.novadata.io/resources/blog/amazon-sp-api-rate-limits-guide",
        "title": "Amazon SP-API: 20+ endpoints, complex rate limiting, SDK required",
        "content": "SP-API is not trivial: 20+ endpoints, token bucket rate limiting, OAuth flow. But well-documented with SDKs. Estimate 4-6 weeks for full integration including error handling.",
        "sentiment": "neutral",
        "relevance_score": 0.75
    },
    {
        "source": "Research — VeriFactu API Availability",
        "url": "https://app.verifactuapi.es/docs/",
        "title": "VeriFactu SOAP API is documented, sandbox available, PHP library exists",
        "content": "VeriFactu is SOAP-based (not REST), but AEAT provides sandbox, Postman collections, and community PHP libraries (eseperio/verifactu-php on Packagist). Integration is complex but doable.",
        "sentiment": "positive",
        "relevance_score": 0.85
    },
]

for insight in insights:
    cols = ['niche_id', 'source', 'url', 'title', 'content', 'sentiment', 'relevance_score']
    vals = [niche_id, insight.get('source'), insight.get('url'), insight.get('title'),
            insight.get('content'), insight.get('sentiment'), insight.get('relevance_score')]
    conn.execute(
        f"INSERT INTO insights ({', '.join(cols)}) VALUES ({', '.join(['?'] * len(cols))})",
        vals
    )

conn.commit()
total_insights = conn.execute("SELECT COUNT(*) FROM insights WHERE niche_id = ?", (niche_id,)).fetchone()[0]
print(f"✅ Added {len(insights)} insights. Total for niche: {total_insights}")

# Export JSON
os.system("cd /Users/sprnff/Projects/research && python3 scripts/export_json.py")

print("✅ All done! Competitors & insights added, JSON exported.")
conn.close()
