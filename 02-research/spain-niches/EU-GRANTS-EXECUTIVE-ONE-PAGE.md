# EU Grants Automation SaaS: One-Page Executive Summary

**Status:** GO (8.55/10) | **Timeline:** MVP 4 weeks → €35K-45K MRR by month 6 | **Doomsday:** Aug 31, 2026

---

## The Opportunity

| Metric | Value | Why It Matters |
|--------|-------|---|
| **Unused NextGenerationEU funds** | €27–31B (Spain) | Window closes Aug 31, 2026 (5 months) |
| **Why unclaimed** | 58% grants never awarded | Bureaucracy + lack of tools to find matches |
| **Consultant commissions** | €4.05B/year potential | They already pay 15–25% success fee |
| **Your TAM** | 3–5% of €4B | = €120–200M long-term |

---

## The Problem You Solve

**For SMEs:** "I need €50K grant but don't know which ones apply to me. No consultant reviews until I pay €3K upfront."
→ **Solution:** 5-minute questionnaire → list all matching grants + pre-filled forms

**For Consultants:** "60% of my time is filling repetitive forms. I need a tool, not another search engine."
→ **Solution:** Auto-fill saves them 40% time. They'll pay €300–999/month.

---

## Business Model (Pick One)

| Model | CAC | LTV | LTV/CAC | Year 1 MRR | Recommendation |
|-------|-----|-----|---------|-----------|-----------------|
| **A: Freemium B2C** | €80–150 | €230 | 1.5–3x | €120K (pessimistic) | ❌ No (low LTV, long sales) |
| **B: B2B Consultants** ⭐ | €150–300 | €7–24K | 24–160x | €35K–45K | ✅ YES (fastest to revenue) |
| **C: Success fee** | €0 | €10K+ | 100x+ | €10K–20K | ❌ No (cash burn, risky) |

**Winner: Model B** — 60+ consultant partners × €400/mth = €24K MRR by month 6, plus revenue share from grants they win.

---

## The MVP (4 Weeks)

| Week | What | Why | Tech |
|------|------|-----|------|
| 1–2 | BDNS scraper + AI questionnaire | Find & match all grants | Python/FastAPI + Claude API |
| 2 | Email/WhatsApp alerts | Spanish consultants demand WhatsApp | SendGrid + WhatsApp API |
| 3–4 | PDF autofill engine | 80% of value is here | pdfplumber + reportlab |
| 4 | Landing page + auth | Consultants need signup | Next.js + Firebase Auth |

**Team:** 1 FTE dev + 1 BD person (freelance = €3K/wk)
**Cost:** ~€12K for MVP
**Time to first revenue:** 6 weeks (4 wk dev + 2 wk sales)

---

## Go-to-Market: First 6 Months

```
Month 1:  Launch with 5 beta consultants → gather feedback
Month 2:  Close 15–20 consultant partnerships → €4.7K–6.4K MRR
Month 3:  Add revenue share model → €12.8K–18.2K MRR
Month 6:  Scale to 60–80 consultants → €35K–45K MRR
```

**How:** LinkedIn outreach to consultants + "saves you 40% time" pitch
**Cost:** €2K/mth marketing spend
**Expected close rate:** 10–15% of outreach (consultants are hungry for efficiency)

---

## Key Unit Economics (Month 6)

| Input | Value |
|-------|-------|
| Consultant partners (paying) | 60 |
| Avg subscription | €400/mth |
| SME free users (freemium traffic) | 500 |
| SME paying (2% convert) | 50 @ €39/mth |
| Revenue share from grants | €12K/mth (1–2 grants × €1.5K each) |
| **Total MRR** | **€37,950** |

| Cost | Value |
|------|-------|
| Dev (1 FTE) | €2,500 |
| BD/Sales (0.5 FTE) | €2,000 |
| Infra + APIs | €800 |
| Marketing | €1,000 |
| **Total COGS** | **€6,300** |

**Gross profit:** €31,650/mth | **Margin:** 83%

---

## Competitive Position

| Competitor | Does This | Doesn't Do This | Why You Win |
|------------|-----------|-----------------|------------|
| **FANDIT** | ✅ Find grants | ❌ Auto-fill forms, ❌ Consultant network | You eliminate manual form-filling |
| **Consultants** | ✅ Fill forms | ❌ AI matching, ❌ SaaS platform | You automate what takes them 10 hours |
| **BDNS (gov)** | ✅ Free data | ❌ Everything else | Nobody wants to use gov portals |

**Result:** Uncontested market segment (high automation + matching).

---

## Top Risks & Mitigations

| Risk | Probability | Mitigation |
|------|------------|-----------|
| BDNS closes API | Low (20%) | Fallback to web scraping (already planned) |
| FANDIT adds auto-fill | Medium (40%) | They won't move fast; you'll own consultants first |
| Low consultant uptake | Low (15%) | Validate in month 1 with 5 pilots (70%+ expected yes) |
| Post-Aug 2026 cliff | High (100%) | Expected; pivot to Horizonte Europa (2027–2030) |

---

## Decision Tree (Go/No-Go)

**Timeline: 7 days of validation**

```
Day 1–2: Interview 10 consultants
  └─ Q: "Would you pay €300/mth to save 40% time?"
     └─ If 7+/10 say YES → LAUNCH MVP
     └─ If <5/10 say YES → PIVOT to SMB freemium

Day 3–4: Landing page + beta signup
  └─ Goal: 50 early signups

Day 5–6: MVP sprint planning
  └─ Choose tech stack, hire dev

Day 7: DECISION
  └─ If consultant validation passed → BUILD
  └─ If consultant validation failed → RECONSIDER
```

---

## Financial Projections (Conservative)

| Milestone | Timeline | MRR | ARPU | Payback |
|-----------|----------|-----|------|---------|
| MVP launch | Week 4 | €0 | - | - |
| 5 beta consultants | Week 6 | €1.5K | €300 | - |
| 20 consultants | Month 2 | €8K | €400 | 2 months |
| 60 consultants | Month 6 | €24K+ | €400 | 4 months |
| With revenue share | Month 6 | €37K | €630 | **Profitable** |

**Path to €100K MRR:** 12–15 months (next NextGen cycle or expand to EU)

---

## Why NOW?

- ✅ €27B emergency fund (deadline in 5 months)
- ✅ Consultants desperate (can't handle volume)
- ✅ No competition in automation segment
- ✅ Spanish market = 3.5M SMEs (low penetration = big TAM)
- ✅ Perfect timing before market consolidates (FANDIT likely to move)

**Window closes:** August 31, 2026. After that, you have 12–24 months of ~€2B/year in other programs (Horizonte Europa, PERTE continuation), but urgency drops.

---

## FINAL CALL

**Recommendation:** **LAUNCH**

**Choose:** Model B (B2B for consultants)

**First step:** Validate with 10 consultant interviews in next 7 days

**If 70%+ say "I'd pay":** Commit to 4-week MVP build in week 2–5

**If <50% say "I'd pay":** Pivot to Model A (SMB freemium) instead

---

**Questions?** See full analysis in [DEEP-DIVE-EU-GRANTS-SAAS.md](/Users/sprnff/Projects/research/02-research/spain-niches/DEEP-DIVE-EU-GRANTS-SAAS.md)

**Created:** March 2, 2026 | **Status:** Ready for validation sprint
