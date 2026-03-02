# AI Dynamic Pricing for Hotels — Executive Summary

**One-page quick reference for the deep dive**

---

## The Opportunity

**Independent hotels in Spain lose €50-80K/year to bad pricing. Total market: €500M+ (15K hotels × €30K+ potential revenue).**

---

## Market Validation ✅

| Metric | Value | Status |
|--------|-------|--------|
| Independent hotels in Spain | 15,000 (73% of market) | ✅ Large TAM |
| Avg occupancy | 75.5% | ✅ Stable |
| Avg ADR | €166.1 | ✅ Healthy margin |
| Revenue loss (bad pricing) | 6% annual (€3K-5.4K/hotel) | ✅ Big pain point |
| Proven uplift (dynamic pricing) | 19-22% | ✅ Strong ROI |

---

## Why Now?

1. **No Spanish competitor** — RoomPriceGenie, Duetto, Atomize exist, but NO Spanish-language version
2. **API access improving** — Booking.com, Airbnb, Cloudbeds all have developer APIs
3. **Adoption trend** — Independent hotels starting to adopt SaaS (PMS, channel managers)
4. **Trade shows ready** — FITUR (Jan) and HIP (Feb) are prime channels

---

## Business Model (SaaS)

```
Price: €99/месяц per property
Unit economics:
├── CAC: €250 (trade shows, association partnerships)
├── ARPU: €99/мес
├── LTV: €19,008 (at 5% annual churn)
├── LTV/CAC: 76:1 ✅ (target: 3:1)
├── Payback: 3.2 months
└── Gross margin: 57.6%

Year 1 revenue: €80K (70 customers)
Breakeven: 18 months (212 customers)
```

---

## MVP (8-10 weeks)

**Core features:**
- Connect to Cloudbeds (PMS)
- Fetch Booking.com & Airbnb prices
- LSTM occupancy forecast
- AI price recommendations
- Dashboard + email alerts

**Stack:** FastAPI + Next.js + PostgreSQL + TensorFlow

**Cost:** €29-38K dev (or €19-28K with low-code)

---

## Go-To-Market

| Channel | Timeline | CAC | Leads/mo |
|---------|----------|-----|----------|
| **HIP 2026** (Feb, Madrid) | Month 3 | €500 | 30-80 |
| **CEHAT partnership** | Month 4-5 | €0 | 100-200/yr |
| **LinkedIn + WhatsApp outreach** | Month 1+ | €150-300 | 5-10 |
| **Content (blog SEO)** | Month 4+ | €0 | 10-20/mo (slow) |

**Target Q1 2026:** 10-15 customers (soft launch)
**Target Q2 2026:** 30-50 customers (post-HIP)

---

## Competitive Advantage

| Product | Price | Spanish | Easy setup | Target |
|---------|-------|---------|-----------|--------|
| IDeaS | €500+ | ❌ | ❌ | Enterprise |
| Duetto | €500+ | ❌ | ❌ | Mid-market |
| Atomize | ? | ❌ | ✅ | Mid/small |
| RoomPriceGenie | €119 | ❌ | ✅ | Small |
| **Our MVP** | **€99** | **✅** | **✅** | **Small (10-20)** |

**Green Ocean:** Spanish language + affordability + ease = first-mover win

---

## Unit Economics (1,000 customers at scale)

```
Revenue: €1,188K/year (1,000 × €99 × 12)
COGS: €500K (hosting, support, data)
Gross profit: €688K (58% margin)
OpEx: €300K (dev, marketing, ops)
EBITDA: €388K (33% margin)
```

---

## Risks & Mitigations

| Risk | Likelihood | Fix |
|------|-----------|-----|
| Booking.com API blocked | Medium | Partnership deal or scraping fallback |
| Airbnb scraping legal issues | Medium | Focus on Booking + official SDK |
| High churn (>10%) | Low | Sticky product; feature releases |
| Competitors enter | Low | First-mover + Spanish language |

---

## Decision: GO or NO-GO?

**RECOMMENDATION: GO** ✅

**Score: 8.05/10**

**Why:**
- TAM: €500M+
- Proven uplift: 19-22%
- Zero Spanish competition
- Healthy unit economics (76:1 LTV/CAC)
- Fast MVP (8-10 weeks)
- Accessible GTM (trade shows, associations)

**Success criteria Year 1:**
- 70+ paying customers
- €80K+ ARR
- 15%+ verified revenue uplift
- NPS 40+

---

## Next Steps (If GO)

1. **Week 1-2:** Validate with 3-5 beta hotels (warm outreach, free)
2. **Week 3-8:** Build MVP (Cloudbeds + Booking.com + basic LSTM)
3. **Week 9-10:** Polish, Spanish UX, documentation
4. **Month 2:** Soft launch (10-15 customers, case studies)
5. **Month 3:** HIP 2026 booth + launch
6. **Month 4+:** CEHAT partnership + scale

---

**Full analysis:** `DEEP-DIVE-HOTEL-PRICING-AI.md`

