# Finiquito Calculator Deep Dive — Executive Summary

**Date:** March 2, 2026
**Research Time:** 6 hours
**Documents Created:** 3 (deep-dive, execution template, this summary)
**Status:** READY TO BUILD

---

## The Opportunity in 3 Sentences

Spain loses 100K+ workers per month to dismissals/contract end. All of them need to verify if their finiquito (severance/settlement) is correct. 8+ free calculators exist, but NONE have monetization, affiliate networks, or AI document analysis. This is a white-space opportunity to build a profitable finiquito empire.

---

## Market Size & Demand

| Metric | Value | Source |
|--------|-------|--------|
| Dismissals/month | 100K+ | Ministerio de Trabajo 2025 |
| Annual dismissals | ~2.4M | Official statistics |
| Users seeking calculator | 500K-600K/year (25%) | Estimated organic demand |
| Affiliate market | 15K laboralistas in Spain | CGAE census |
| Avg finiquito value | €9,500 | Civica Abogados 2026 |
| **TAM (if 10% monetize)** | **€2.4B** | Bottom-up calculation |

**In plain language:** Every month, roughly 1M people in Spain face a dismissal or contract end. A quarter of them will Google "how much finiquito should I get". You'll capture 50-100 of them in month 1, 500+ by month 3, 2000+ by month 6.

---

## The Competitive White Space

**8+ Free Calculators Exist:**
1. finiquitocalculadora.es
2. Finiqueitor.com
3. calcularfiniquito.es
4. INEAF
5. Euroinnova
6. Taclia
7. Mobile app (Google Play)
8. economistjurist.es

**Their Fatal Flaw:** All 100% free, zero monetization, zero premium features.

**Your Advantage:**
- ✅ Free calculator (same as competitors) = SEO traffic
- ✅ Affiliate network (NONE have this) = lead gen to lawyers
- ✅ Premium AI analysis (NONE have this) = €9.99 upsell
- ✅ B2B SaaS for lawyers (NONE have this) = recurring revenue

---

## Business Model (Freemium → Affiliate → SaaS)

```
User Flow:
┌─────────────────────────────────────┐
│ Lands on site (Google search)        │
│ "Calcular finiquito"                 │
└──────────────────┬──────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ Free Calculator      │
        │ Input: Salary, Days  │
        │ Output: €9,500       │
        └──────────┬───────────┘
                   │
        ┌──────────┴───────────┐
        │                      │
        ▼                      ▼
   Affiliate Click         Premium Gate
   "Lawyer advice?"        "AI Analysis?"
   €75 commission          €9.99 payment
                                │
                                ▼
                      Stripe → Feature Unlock
                      + Document analysis
                      + Legal red flags
                      + Export PDF
```

---

## Unit Economics (Conservative)

### Year 1 Revenue Projection

```
Organic Traffic (SEO):
- Months 1-3: 2,000 users/month
- Months 4-12: 5,000 users/month
- Total Y1: 42,000 users

Affiliate Monetization (€50-200 per conversion):
- Click-through rate: 12% (4,500 clicks)
- Affiliate conversion: 25% (1,125 conversions)
- Avg commission: €75
- Affiliate revenue: €84,375

Premium Revenue (€9.99 per user, 5% adoption):
- Premium users: 2,100 (5% of 42K)
- Premium revenue: €20,979

Total Y1 Revenue: €105,354
Less costs (hosting, tools, support): ~€12K
Net Profit Y1: ~€93K (for solo founder)
```

### Affiliate Program Economics

**Cost to acquire laboralista partnership:** €0 (outbound recruiting)
**Lawyer commission per lead:** €50-150 (depending on firm size)
**Your margin:** 100% (zero COGS)

Example:
- Recruit 20 lawyers as partners
- Each gets 5 qualified leads/month
- 20 × 5 = 100 conversions/month
- 100 × €75 = €7,500/month recurring (month 6+)

---

## 8-Week MVP Timeline

| Week | Deliverable | Effort | Tech |
|------|-------------|--------|------|
| 1-2 | Validation (customer + lawyer interviews) | 40h | Interviews, research |
| 3-4 | Core calculator + backend | 60h | React + FastAPI |
| 5-6 | Affiliate + Stripe integration | 40h | Stripe API, UTM tracking |
| 7-8 | SEO setup + blog outline | 30h | Next.js, Google Console |
| **9-10** | **Launch + paid ads test** | 20h | Google Ads, analytics |
| **11-12** | **Monitor + Go/No-Go decision** | TBD | Dashboard tracking |

**Total investment:** ~200 hours solo = 5 weeks FTE
**Cost:** ~€6K (hosting, tools, Stripe fees first month)

---

## Go/No-Go Checkpoints

### Week 2 (After validation interviews)
✅ **GO if:** 8+ dismissed workers say "I'd pay for premium", 4+ lawyers want leads
❌ **NO-GO if:** <5 workers interested, 0 lawyers

### Week 12 (After launch)
✅ **GO if:** 2K+ organic users/month, 10%+ affiliate CTR, 15%+ conversion
⚠️ **PIVOT if:** Traffic works, but affiliate conversion <10% (change to B2B SaaS focus)
❌ **NO-GO if:** <1K organic users/month

---

## Documents You Need to Read

### 1. **DEEP-DIVE-LEGALTECH-FINIQUITO.md** (Required)
- Full market analysis (100% read)
- Competitor breakdown (8 tools analyzed)
- 10 risks + mitigations
- Legal disclaimers needed
- **Time:** 40 minutes

### 2. **FINIQUITO-EXECUTION-TEMPLATE.md** (Before Building)
- Week-by-week checklist
- Code samples (calculator algorithm)
- Interview scripts for validation
- Testing plan
- **Time:** 25 minutes

### 3. **This Summary** (Optional, Reference)
- High-level overview
- Key metrics
- Timeline

---

## Action Items (This Week)

### Day 1-2: Research Validation
- [ ] Read DEEP-DIVE-LEGALTECH-FINIQUITO.md (40 min)
- [ ] Validate search volume for "calcular finiquito" on Google Trends (10 min)
- [ ] Review all 8 existing calculators (30 min)
- [ ] Check Debify + other affiliate programs (15 min)

### Day 3-4: Customer Development Setup
- [ ] Prepare interview script (see FINIQUITO-EXECUTION-TEMPLATE.md)
- [ ] Create list of 15 dismissed workers (LinkedIn, Reddit, Facebook groups)
- [ ] Create list of 10 laboralistas (Google search, directories)
- [ ] Schedule 10 interviews (aim for week 1-2)

### Day 5: Go/No-Go Preliminary Decision
- [ ] Review validation criteria
- [ ] Decide: Build or not?
- [ ] If YES → assign resources, schedule kickoff

---

## Why This Works (Competitive Advantages)

1. **CAC = 0** (organic SEO traffic from high-intent searches)
2. **No moat (yet), but first-mover advantage** in monetization
3. **Affiliate model scales without hiring** (partners do the selling)
4. **ERTE + regulation pressure** (Jan 2027 VeriFactu) creates urgent need
5. **B2B expansion path** (SaaS for lawyers worth €10K+/month later)

---

## Red Flags to Watch

### Technical
- [ ] Calculator formula wrong → validate with 3 lawyers first
- [ ] AI doc analysis hallucinating → use fine-tuned model, not raw GPT-4
- [ ] Payment processing fails → test Stripe thoroughly

### Business
- [ ] Lawyers don't want leads → pivot to B2C premium courses
- [ ] Affiliate conversion <10% → test messaging, CTA placement
- [ ] Low organic traffic → boost with paid ads, try content differently

### Legal
- [ ] User sues if calculation wrong → big disclaimer required
- [ ] GDPR violations → no data storage >30 days unless explicit consent

---

## Next Week Goals

✅ **Complete validation interviews** (10 users + 5 lawyers)
✅ **Search volume + CPC confirmation**
✅ **Architecture diagram for MVP**
✅ **Go/No-Go decision on building**

---

## Key Metrics Dashboard (Week 12 Target)

```
Organic traffic:        ≥2,000 users/month ✓
Affiliate CTR:          ≥10% ✓
Affiliate conversion:   ≥15% ✓
Premium adoption:       ≥3% ✓
Lawyer NPS:             ≥40 ✓
Revenue:                ≥€8,000/month ✓
```

If all 6 checkmarks → scale aggressively (hire, expand, B2B)
If 4-5 checkmarks → continue, optimize messaging
If <4 checkmarks → pivot or kill

---

## Resources

### Files in This Research
- `/02-research/spain-niches/DEEP-DIVE-LEGALTECH-FINIQUITO.md` — Full analysis
- `/02-research/spain-niches/FINIQUITO-EXECUTION-TEMPLATE.md` — Build guide
- `/02-research/spain-niches/LEGALTECH-INDEX.md` — Navigation + broader context
- `/tasks/staging/batch_finiquito.js` — SQLite import (once built)

### External Tools to Start
- Google Trends (search volume)
- SEMrush free tier (CPC, competition)
- Stripe dashboard (payment testing)
- Segment or Mixpanel (analytics)

### External Partner Programs
- [Debify affiliate](https://debify.es/afiliados/) — €50-100 per lead
- [Rocket Lawyer Spain](https://www.rocketlawyer.com/es/es/socios) — commission model
- [LEGALPROD](https://www.legalprod.com/en/affiliation/) — 25% lifetime

---

## Final Recommendation

### Score: 7.75/10
- ✅ High demand (100K+ dismissals/month)
- ✅ White space (no monetization yet)
- ✅ Clear path to €100K+/year revenue
- ✅ Buildable MVP (8 weeks)
- ⚠️ Legal liability risk (manageable with disclaimers)
- ⚠️ Affiliate network needs to be built from scratch

### Verdict: BUILD ✅

This is a high-confidence opportunity with clear unit economics, no technical moat needed, and a proven market (all existing calculators prove demand). Start validation immediately.

---

**Ready to start?** → Read FINIQUITO-EXECUTION-TEMPLATE.md and schedule kickoff.

**Have questions?** → Check DEEP-DIVE-LEGALTECH-FINIQUITO.md section by section.

---

*Research completed: March 2, 2026*
*Next review: April 2, 2026 (after validation phase)*
