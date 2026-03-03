# Funerarias Platform Spain — Complete Research Index

**Deep Dive Completed:** March 2, 2026
**Status:** Ready for CustDev + Legal Validation
**Files:** 4 research documents + 1 staging file

---

## DOCUMENTS

### 1. **DEEP-DIVE-FUNERARIAS.md** (MAIN RESEARCH)
**Type:** Comprehensive analysis
**Length:** ~15 KB (8,000 words)
**Best For:** Understanding the full market, all 3 business models, risks, GTM

**What's Inside:**
- Market TAM (€1.5B-2B, 433K deaths/year, €4,430 avg funeral)
- 3 business models with detailed unit economics
- Competitive landscape (Funos, Cofune, Mémora, international players)
- Regulatory deep dive (licensing, RGPD, insurance regulations)
- 18-month financial projections (3 scenarios)
- Go/No-Go metrics and validation plan
- Risk matrix with mitigations
- Detailed roadmap (Phase 1-3)

**Read This If:** You want 360° understanding before validation starts.

---

### 2. **FUNERARIAS-QUICK-REFERENCE.md** (EXECUTIVE SUMMARY)
**Type:** Quick reference guide
**Length:** ~3 KB (1,500 words)
**Best For:** Fast decision-making, team alignment, KPI tracking

**What's Inside:**
- 3 models compared (one-page table)
- Go/No-Go checklist (30 seconds to evaluate)
- Competitive status matrix (who's winning what)
- Quick wins for month 1-2 (execution steps)
- Risk matrix with probabilities
- Financial projections (simplified)
- Customer acquisition cost by channel
- Key metrics for each model (dashboard)
- Next steps (weekly plan)

**Read This If:** You need 5-minute briefing or daily execution plan.

---

### 3. **FUNERARIAS-MODELS-COMPARISON.md** (DECISION FRAMEWORK)
**Type:** Strategy document
**Length:** ~4 KB (2,000 words)
**Best For:** Choosing between 3 business models, understanding tradeoffs

**What's Inside:**
- Lead Gen model: structure, financials, pros/cons, PMF signals
- Pre-Planning Subscription model: structure, financials, pros/cons, PMF signals
- White-Label B2B model: structure, financials, pros/cons, PMF signals
- Hybrid strategy (recommended)
- Decision matrix (5 questions to choose your path)
- Recommendation: White-Label Primary + Lead Gen Secondary
- 12-month execution plan for recommended path
- Final comparison table (all metrics)

**Read This If:** You're deciding which path to pursue.

---

### 4. **Staging File: funerarias_platform_batch.js**
**Type:** Data import file
**Length:** ~2 KB (JavaScript array)
**Best For:** Adding 4 niches to SQLite database

**What's Inside:**
- 4 niche variants:
  1. Funerarias Comparison Platform (Lead Gen)
  2. Funerarias Pre-Planning Subscription
  3. Funerarias White-Label for Insurance (B2B SaaS)
  4. Funerarias AI Memorial + Grief Support
- Full scoring matrix (D, G, R, S, M, A, F, T)
- Unit economics for each variant
- Validation notes and metrics

**How to Use:**
```bash
python3 scripts/add_niches.py tasks/staging/funerarias_platform_batch.js
```

Then:
```bash
python3 scripts/export_json.py
```

---

## QUICK NAVIGATION

### "Я в спешке. Дайте мне 5 минут."
→ **FUNERARIAS-QUICK-REFERENCE.md** (Quick Wins + Go/No-Go Checklist)

### "Мне нужно выбрать путь (Lead Gen vs. White-Label vs. Pre-Planning)."
→ **FUNERARIAS-MODELS-COMPARISON.md** (Decision Matrix)

### "Я хочу понять рынок полностью перед инвестированием."
→ **DEEP-DIVE-FUNERARIAS.md** (Full analysis)

### "Дайте мне эту нишу в базу данных."
→ **funerarias_platform_batch.js** → `python3 scripts/add_niches.py ...`

### "Какие метрики мне отслеживать?"
→ **FUNERARIAS-QUICK-REFERENCE.md** (Key Metrics section)

### "Какие риски я должен знать?"
→ **DEEP-DIVE-FUNERARIAS.md** (Risk Matrix) или **FUNERARIAS-MODELS-COMPARISON.md** (Minuses section)

---

## KEY FINDINGS (TL;DR)

### Market Size
- **TAM:** €1.5B-2B (433K deaths/year × €4,430 avg)
- **Growth:** +1.5% CAGR (demographic tailwind)
- **Trend:** Digital adoption 5-7% CAGR (vs. 1.5% market)

### Opportunity
- **Lead Gen:** Funos validated, room for #2 player (but competitive)
- **Pre-Planning:** Emerging trend (85% trial first), low competition
- **White-Label:** **UNCONTESTED** (22.3M insured, zero digital solution for insurers)

### Competitive Status
- **Funos:** Leads (B2C lead gen), ~5K-20K monthly traffic
- **Cofune, Funeonline:** Weak players
- **Mémora:** Offline monopoly, not threat yet
- **Your White-Label:** First-mover in enterprise space

### Unit Economics (Best Case)
| Model | Year 1 Revenue | Year 1 Margin | Payback |
|-------|----------------|---------------|---------|
| Lead Gen | €270K | 83% | 5 months |
| Pre-Planning | €75K | 55% | 8 months |
| **White-Label** | **€500K+** | **77%** | **5 months** |

### Recommendation
**GO** with **White-Label + Lead Gen Hybrid** strategy:
- White-label primary (high margin, uncontested, 22.3M TAM)
- Lead gen secondary (fast cash flow, proven model)
- Decision point: End of Week 2 (after legal + Mapfre meeting)

### Go/No-Go Criteria
✅ Юридическая консультация: "go"
✅ CustDev: ≥40% families say "yes, I'd pay"
✅ Funeral homes: ≥50% say "yes, I'd pay €80+"
✅ Insurers: ≥1 meeting with positive signal
✅ Funos analysis: Not 100% dominant (room for #2)

If ≥4/5 pass → **GO**
If ≤2/5 pass → **PIVOT**

---

## VALIDATION PLAN (WEEK 1-2)

### Parallel Workstreams

**Legal (Day 1):**
- [ ] Book юридической консультации (€200-300)
- [ ] Main question: "Нужна ли лицензия для lead gen / white-label?"

**CustDev (Day 1-5):**
- [ ] Email 15 family candidates (post-funeral, willing to speak)
- [ ] Target: 40%+ say "yes, would pay €50-100 for help"

**Sales (Day 1-5):**
- [ ] Call 10 funeral homes in Madrid (top-10 list)
- [ ] Ask: "Would you pay €80 per qualified lead?"
- [ ] Target: 50%+ say "yes"

**Enterprise Sales (Day 2-7):**
- [ ] LinkedIn: Warm intros to Mapfre/Caser digital teams
- [ ] Message: "Have innovation idea for funeral planning experience"
- [ ] Target: ≥2 positive responses

**Competitive (Day 3-7):**
- [ ] Similarweb/SEMrush: Analyze Funos traffic
- [ ] Question: "Is there room for #2 player?"

### Decision Meeting (End of Week 2)
**Outputs:**
- Go/No-Go decision (binay)
- If GO: Which path (Lead Gen, Pre-Planning, White-Label, or Hybrid)?
- If PIVOT: Which niche next (have backups)?

---

## EXECUTION TIMELINE (12 MONTHS)

### Months 1-2: Validation + MVP
- Week 1-2: Validation (legal, CustDev, sales calls)
- Week 3-4: Tech spec (MVP architecture)
- Decision: Path selection (Week 3)
- Month 2: MVP launch (simple)

### Months 3-6: Early Traction
- First customers acquired (funeral homes or insurer)
- Revenue: €20K-50K/month (depending on model)
- Iterate based on feedback

### Months 7-12: Scale
- Expand to new cities (lead gen) or acquire 2nd insurer (white-label)
- Revenue: €100K-200K/month
- Build team (1-2 full-time, freelancers)

### Year 2: Consolidation
- Reach €500K-1M annual recurring revenue
- Build defensible moat
- Attract investor interest or acquisition offers

---

## FUNDING NEEDS

### Bootstrap (Months 1-6)
**Required:** €15K-30K
- MVP development: €10K
- Validation/sales: €3K
- Legal/compliance: €2K
- Runway (3 months): €5K

### Series A (Months 7-12)
**Optional:** €100K-300K (if pursuing white-label aggressively)
- Product: €30K
- Sales team: €50K
- Marketing: €20K
- Operations: €20K

### Without Funding (Lean Path)
**Viable:** Lead gen path can bootstrap to €50K/month profitability without external capital
- Use early revenue to fund growth
- Hire freelancers instead of full-time
- Slow & steady approach

---

## RELATED RESEARCH

### Spain Market Context
- [DEEP-DIVE-FUNERARIAS.md](DEEP-DIVE-FUNERARIAS.md): Full market analysis
- `/02-research/spain-national/`: Spanish business culture, psychology, payment methods
- `/02-research/spain-macro/`: Economic indicators, digital adoption

### Similar Niches (Benchmarks)
- **Habitissimo (Services Comparison):** Spain, founded 2009, €20M+ revenue
- **Beyond.life (Funeral Comparison, UK):** Model, lessons learned
- **Aura (Funeral/Cremation, UK):** Emotional positioning angle

### Related Regulatory
- VeriFactu (invoice digitalization): Similar B2B SaaS to government
- Insurance regulations (RGPD, seguro compliance): Relevant for white-label

---

## TEAM / ADVISOR NOTES

### Founder Requirements
**Lead Gen Path:**
- Growth hacker (SEO/PPC expertise)
- Data analyst (unit economics optimization)
- Solo founder possible (less ideal)

**White-Label Path:**
- Enterprise sales (3-6 month cycles, warm intros)
- Technical co-founder (API design, integration)
- 2-person minimum team

**Hybrid Path:**
- Growth + Sales + Technical (ideal: 3-person founding team)
- Or: 2 founders + freelance dev for MVP

### Advisor Slots
1. **Spanish funeral industry expert** (understand Mémora/local players)
2. **Insurance company insider** (warm intro to Mapfre/Caser)
3. **B2B SaaS founder** (white-label playbook)
4. **Spanish legal expert** (licensing/compliance)

### Partnerships to Pursue
- Fintech partner (escrow for pre-planning model)
- Insurance broker (warm intros to insurers)
- Funeral home association (PANASEF) for credibility

---

## APPENDIX: SOURCE DATA

| Source | Data | Date |
|--------|------|------|
| INE | 433K deaths/year in Spain | 2024 |
| Modelos Plan de Negocios | TAM €1.7B, 1.5% CAGR | 2025 |
| MAPFRE | 22.3M with seguro de deceso | 2025 |
| Panasef | Funeral industry structure | 2025 |
| Beyond.life | UK funeral platform model | 2016+ |
| Funos | Lead gen model, traffic | 2026 |
| Selectra | Average funeral costs (€4,430) | 2025-2026 |
| DBK | Sector employment (13K), revenue | 2024 |

---

## NEXT MEETING AGENDA

**Duration:** 60 minutes
**Participants:** Founder, Tech co-founder (optional), Advisor (optional)

### Sections (15 min each)
1. **Market validation** (Findings from CustDev, sales calls, legal)
2. **Model selection** (Which path based on validation data?)
3. **MVP scope** (What to build in 4-12 weeks?)
4. **Resource plan** (Founder time, budget, team)
5. **Timeline & milestones** (What's critical path?)

### Decisions Needed
- [ ] **Go or Pivot?** (Binary decision)
- [ ] **Which path?** (Lead Gen / Pre-Planning / White-Label / Hybrid)
- [ ] **Funding?** (Bootstrap or raise?)
- [ ] **Timeline?** (Start date for MVP?)

---

**Document Version:** 1.0
**Last Updated:** March 2, 2026
**Author:** Deep Research Analysis
**Status:** ✅ Ready for validation phase

---

## How to Use These Documents

### Week 1 (Planning)
1. Read: **FUNERARIAS-MODELS-COMPARISON.md** (decide path)
2. Read: **DEEP-DIVE-FUNERARIAS.md** (context)
3. Plan: Validation workstreams (legal, CustDev, sales)

### Week 2-3 (Validation)
1. Execute: Go/No-Go checklist from **FUNERARIAS-QUICK-REFERENCE.md**
2. Track: Metrics from same document
3. Refer: Deep dive for specific Q&As during calls

### Month 1-2 (MVP)
1. Reference: **FUNERARIAS-QUICK-REFERENCE.md** (Quick Wins section)
2. Execute: Roadmap from **DEEP-DIVE-FUNERARIAS.md** (Phase 1-2)
3. Update: This index with actual results

### Month 3+ (Scaling)
1. Dashboard: Key metrics from **FUNERARIAS-QUICK-REFERENCE.md**
2. Expand: Follow Phase 2-3 from deep dive
3. Fundraise: Use financial projections as pitch deck data

---

**Ready to start validation? Go read FUNERARIAS-MODELS-COMPARISON.md and pick your path.**
