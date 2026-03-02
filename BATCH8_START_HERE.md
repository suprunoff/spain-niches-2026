# BATCH 8: START HERE
## Quick Onboarding Guide (5-10 minutes)

---

## TL;DR — What Happened?

**Found 5 new Spanish market niches worth €200M-6B+ each. TOP-3 are ready for immediate validation.**

```
✅ Analyzed:      8 niches (7 deep, 1 eliminated)
✅ Recommended:   5 niches (score > 7.5)
✅ Ready now:     3 niches (score > 8.0, validation-ready)
✅ Time spent:    1.5 hours research
✅ Created:       7 documents + 1 staging file
```

---

## TOP-3 Quick Summary (60 seconds)

### 1️⃣ Solar Energy Marketplace (SolarMatch.es)
- **Score:** 8.4/10
- **Market:** €800M-1.2B
- **Why Now:** Gov subsidies Q1-Q2 2026 (60% funding available)
- **MVP:** 3-4 weeks
- **Key Number:** 1.5M potential customers
- **Risk:** Medium (gov dependency)

### 2️⃣ Elderly Care Platform (Cuidadores.es)
- **Score:** 8.1/10
- **Market:** €4-6B
- **Why Now:** 200K caregiver shortage + gov subsidies started March 2026
- **MVP:** 4-6 weeks
- **Key Number:** 8.2M people 65+ in Spain
- **Risk:** Medium-High (liability, economic sensitivity)

### 3️⃣ Gestoría SaaS (GestoriaHub.es)
- **Score:** 8.1/10
- **Market:** €200-400M
- **Why Now:** VeriFactu deadline January 2027 (deadline-driven urgency)
- **MVP:** 4-6 weeks
- **Key Number:** 50K accounting firms in Spain
- **Risk:** Medium-High (regulatory compliance)

---

## Which File to Read First?

- **5 minutes:** `/Users/sprnff/Projects/research/02-research/spain-niches/BATCH-8-QUICK-FACTS.md` (one-pager)
- **15 minutes:** `/Users/sprnff/Projects/research/BATCH8_FINAL_REPORT.md` (executive summary + rationale)
- **60 minutes:** `/Users/sprnff/Projects/research/02-research/spain-niches/NEW-NICHES-SCAN-2026.md` (full analysis)
- **Navigation:** `/Users/sprnff/Projects/research/02-research/spain-niches/README-BATCH8.md` (file guide)

---

## Immediate Actions (Pick One)

### Option A: Just Load to Database (5 min)
```bash
python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js --dry-run
# Review output

python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js
python3 scripts/export_json.py

# Verify in index.html — should show 127 niches now
```

### Option B: Deep Dive One Niche (30-60 min)
1. Read BATCH-8-QUICK-FACTS.md
2. Pick niche that interests you
3. Read full section in NEW-NICHES-SCAN-2026.md
4. Skim BATCH-8-INDEX.md (competitive landscape)

### Option C: Validation Ready (Ongoing)
See "Next Week" section below

---

## File Structure (Created This Session)

```
research/
├── BATCH8_FINAL_REPORT.md                    ← Executive summary (this session)
├── BATCH8_START_HERE.md                      ← This file
├── 02-research/spain-niches/
│   ├── NEW-NICHES-SCAN-2026.md              ← Full analysis (8 niches)
│   ├── BATCH-8-QUICK-FACTS.md               ← One-pager (TOP-3)
│   ├── BATCH-8-INDEX.md                     ← Navigation + tables
│   ├── README-BATCH8.md                     ← File guide
│   └── ... (other niche files)
│
├── tasks/
│   ├── NEW-NICHES-BATCH8-SUMMARY.md         ← 1-page summary
│   ├── staging/
│   │   └── batch-8-new-niches.js            ← Ready to load to SQLite
│   └── todo.md                              ← Updated with Batch 8
│
└── .claude/
    └── session-context-batch8.md            ← Context for next session
```

---

## Key Metrics at a Glance

| Niche | TAM | MVP | CAC | LTV | Payback | Best For |
|-------|-----|-----|-----|-----|---------|----------|
| **Solar** | €800M-1.2B | 3-4w | €85 | €520 | 9mo | Speed |
| **Elderly** | €4-6B | 4-6w | €45 | €480 | 10-12mo | Huge TAM |
| **Gestoría** | €200-400M | 4-6w | €55 | €620 | 9-11mo | Recurring |

---

## Why These 3?

✅ **Score > 8.0** (well above 6.0 threshold)
✅ **Huge TAM** (€200M-6B each)
✅ **White Space** (competitors fragmented/weak)
✅ **Clear Timing** (gov programs, deadlines, emergencies)
✅ **MVP Feasible** (3-6 weeks build)
✅ **España Advantage** (3-7 years behind US = first-mover opportunity)

---

## Next Week: Validation Roadmap

### Pick 1 Niche (Recommend: Solar Energy)

**Why Solar?**
- Fastest MVP (3-4 weeks)
- Best timing window (Q1-Q2 2026 subsidies)
- Clearest metrics (Google Ads CAC measurable)
- Lowest regulatory risk

### Week 1-2: Do This

1. **Landing Page** (30 min)
   - Use Carrd or Webflow free trial
   - Headline: "Find your solar installer + financing"
   - CTA: Email signup

2. **Google Ads Test** (€30-50)
   - Keywords: "placas solares España coste", "autoconsumo solar"
   - Goal: 20-50 visits, 5-10 email signups

3. **Customer Interviews** (10+ target)
   - Facebook groups: "Sostenibilidad España", "Energía Renovable"
   - Google Reviews: Comment threads on installer sites
   - Reddit: r/spain "solar" discussions
   - Question: "What's your biggest pain finding a solar installer?"

4. **Success Criteria**
   - ✅ 70%+ say "urgent"
   - ✅ 50%+ willing to pay €100-300/lead
   - ✅ Ad CAC under €150
   - ✅ Email list > 20 qualified

### Week 2-3: Decide

Based on interviews:
- **Go:** Build MVP
- **No-Go:** Pivot to Elderly Care or Gestoría SaaS
- **Maybe:** Iterate landing page, run bigger ads test

---

## Common Questions

**Q: Can I pick a different niche?**
A: Yes. All TOP-3 equally strong (pick your interest). Elderly Care is backup if Solar fails (highest TAM). Gestoría SaaS is backup if both fail (most predictable B2B).

**Q: How much budget needed?**
A: €150-200 total (€30-50 ads per niche, landing page free). Low-risk test.

**Q: What if validation fails?**
A: You learn fast (€30 spent vs 6 months building). Then pivot to next niche. Expected outcome: 1-2 win, 1-2 learn, 1-2 skip.

**Q: When should I build MVP?**
A: After validation (Week 2-3). Only build if 70%+ customer urgency confirmed.

**Q: Can I do all 3 in parallel?**
A: Yes, if you have time. But recommend: Master 1 first, then parallel-track the other 2.

---

## Red Flags to Watch

### Solar Energy
- ⚠️ Gov subsidies get cut or delayed
- ⚠️ Sunwatt/Autosolar add marketplace feature
- ⚠️ CAC stays above €150 (ads too expensive)

### Elderly Care
- ⚠️ Liability insurance cost too high
- ⚠️ Qida (€37M funded) expands to marketplace
- ⚠️ Economic recession (first thing families cut)

### Gestoría SaaS
- ⚠️ VeriFactu deadline gets extended
- ⚠️ Holled/Anfix add multi-client management
- ⚠️ Regulatory compliance more complex than expected

**Plan B:** If warning signs appear → switch to secondary niche early.

---

## Confidence Assessment

| Aspect | Confidence | Why |
|--------|-----------|-----|
| Market exists | 99% | Gov programs + government data confirmed |
| TAM sizing | 90% | Bottom-up + top-down estimates, market reports |
| Competition gaps | 85% | Analyzed 5-30 competitors per niche |
| MVP feasibility | 90% | Tech is straightforward, integrations exist |
| Unit economics | 75% | Estimates based on comparable startups (Qida, YC) |
| Timing windows | 85% | Gov deadlines/subsidies from official sources |

**Overall:** HIGH confidence to pursue validation. Go/No-Go = determined by customer feedback, not assumptions.

---

## Success Checklist (4 Weeks)

### Week 1
- [ ] Read BATCH-8-QUICK-FACTS.md
- [ ] Decide on niche (recommend: Solar)
- [ ] Load Batch 8 to SQLite (`add_niches.py`)
- [ ] Verify in dashboard

### Week 1-2
- [ ] Create landing page
- [ ] Run €30-50 Google Ads test
- [ ] Do 10+ customer interviews
- [ ] Track: email signups, urgency signals, willingness to pay

### Week 2-3
- [ ] Analyze feedback
- [ ] Calculate real CAC/LTV
- [ ] Make Go/No-Go decision
- [ ] If Go: Define MVP scope

### Week 3-4
- [ ] If Go: Start MVP build
- [ ] If No-Go: Pivot to niche #2
- [ ] Target: 2-6 week build timeline

---

## Next Session Preparation

**For next session, have ready:**
- [ ] Customer interview notes (10+ interviews)
- [ ] Ad test results (€spent, clicks, signups, CAC)
- [ ] Email list (subscribers from landing page)
- [ ] Decision: Go/No-Go per niche

**Then we'll:**
1. Analyze customer feedback
2. Refine scoring based on real data
3. Pick winner for MVP build
4. Create 2-week development plan

---

## Files You Actually Need

**Start with these 3:**
1. ✅ BATCH-8-QUICK-FACTS.md (5 min read)
2. ✅ BATCH8_FINAL_REPORT.md (15 min read)
3. ✅ batch-8-new-niches.js (load to DB)

**Keep handy:**
4. NEW-NICHES-SCAN-2026.md (reference during validation)
5. BATCH-8-INDEX.md (validation roadmap)
6. session-context-batch8.md (for next session)

**Skip unless you want deep dive:**
7. README-BATCH8.md (file navigation)

---

## One-Line Summary

**Three €200M-6B markets identified with white space, timing windows open (now-Jan 2027), ready for 3-6 week MVP validation starting Week 1.**

---

## Go/No-Go Timeline

```
Week 1:    Load DB + pick niche + start validation
Week 1-2:  Customer discovery + ads test
Week 2-3:  Analyze + decide Go/No-Go
Week 3-4:  Build MVP (if Go) or pivot (if No-Go)
Week 5-8:  Launch MVP to 100 beta users
Week 9-12: Iterate + find first paying customers
```

**Critical Path:** Customer validation (Week 1-2) determines everything. Build only if 70%+ urgency confirmed.

---

## Questions?

See:
- **How does scoring work?** → `01-frameworks/NICHE_SCORING_TEMPLATES.md`
- **What's the validation process?** → `BATCH-8-INDEX.md` (Validation Roadmap)
- **What's the business model?** → `NEW-NICHES-SCAN-2026.md` (Monetization section per niche)
- **What are Spain-specific tips?** → `CLAUDE.md` (Business culture, payment habits)

---

## Bottom Line

✅ **Ready to validate 3 Tier-1 opportunities**
✅ **Pick 1, spend €150-200, validate in 2 weeks**
✅ **70%+ customer urgency = build MVP**
✅ **MVP in 3-6 weeks = launch to 100 users**
✅ **6-month timeline from now to product-market fit potential**

**Recommended next action: Start with Solar Energy validation (best timing), fallback to Elderly Care if needed.**

---

*Created: March 2, 2026*
*Status: Ready to execute*
*Confidence: HIGH*

**Read BATCH-8-QUICK-FACTS.md next (5 min) →**
