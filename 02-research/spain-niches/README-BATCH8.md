# Batch 8: New Niches Scan (March 2026) — Complete Index

## 📋 All Files Created This Session

### 1. Research Documents

#### Full Analysis
- **NEW-NICHES-SCAN-2026.md** (25KB)
  - Detailed analysis of 8 niches
  - TAM sizing, competition, MVP scope, monetization
  - Score breakdowns (D/G/R/S/M/A/F/T)
  - Risk analysis + timing justification
  - All sources cited

### 2. Database-Ready Files

#### Staging File
- **batch-8-new-niches.js** (JavaScript)
  - Ready to load 5 niches into SQLite
  - Command: `python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js`

### 3. Summary & Navigation

#### Executive Summaries
- **BATCH-8-QUICK-FACTS.md** — One-page cheat sheet for TOP-3
- **BATCH-8-INDEX.md** — Full navigation, scoring table, validation roadmap
- **NEW-NICHES-BATCH8-SUMMARY.md** — 1-pager for quick overview

### 4. Session Context

#### For Next Session
- **session-context-batch8.md** (in .claude/)
  - What was done this session
  - Key findings summary
  - Next immediate actions
  - Important context to remember

---

## 🎯 TOP-3 Recommendations (Ready Now)

| Rank | Niche | Score | Why Pick It |
|------|-------|-------|------------|
| 1️⃣ | **Solar Energy** (SolarMatch) | 8.4 | Best timing: Gov subsidies Q1-Q2 2026 + installers overloaded |
| 2️⃣ | **Elderly Care** (Cuidadores) | 8.1 | Highest urgency: 200K shortage + gov subsidy started NOW |
| 3️⃣ | **Gestoría SaaS** (GestoriaHub) | 8.1 | Most predictable: Deadline-driven (VeriFactu Jan 2027) + recurring B2B |

**4th & 5th:** Fertility Tourism (7.7), Pet Care (7.5) — also ready but lower priority

---

## 🚀 Quick Start

### Step 1: Load to Database (5 min)
```bash
python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js --dry-run
# Review output

python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js
python3 scripts/export_json.py

# Verify in dashboard (index.html should show 127 niches now)
```

### Step 2: Pick Validation Target
Read **BATCH-8-QUICK-FACTS.md** → choose 1 niche for Week 1-2 validation

### Step 3: Run Validation (Week 1-2)
Follow **BATCH-8-INDEX.md → Validation Roadmap** section

---

## 📊 Market Sizing (Top 3)

### Solar Energy
- **Market Size:** €800M-1.2B in Spain alone
- **Total Available:** 1.5M homeowners
- **Timing:** Government subsidies Q1-Q2 2026 (60% funding)
- **MVP Cost:** 3-4 weeks build

### Elderly Care
- **Market Size:** €4-6B in Spain alone
- **Total Available:** 8.2M people 65+ (20% of population)
- **Timing:** Gov subsidy programs started March 2026
- **MVP Cost:** 4-6 weeks build

### Gestoría SaaS
- **Market Size:** €200-400M in Spain
- **Total Available:** 50K accounting firms
- **Timing:** VeriFactu deadline January 2027 (9 months urgency)
- **MVP Cost:** 4-6 weeks build

---

## 🔍 Quick Reference

### By File Purpose

**If you want...** → **Read this file:**
- Quick 1-page overview → BATCH-8-QUICK-FACTS.md
- Full market analysis → NEW-NICHES-SCAN-2026.md
- Navigation table → BATCH-8-INDEX.md
- Summary + next steps → NEW-NICHES-BATCH8-SUMMARY.md
- Context for next session → session-context-batch8.md

### By Niche

**Solar Energy:**
- Quick: BATCH-8-QUICK-FACTS.md (section 1)
- Deep: NEW-NICHES-SCAN-2026.md (section 2)
- Index: BATCH-8-INDEX.md (competitive landscape table)

**Elderly Care:**
- Quick: BATCH-8-QUICK-FACTS.md (section 2)
- Deep: NEW-NICHES-SCAN-2026.md (section 1)
- Index: BATCH-8-INDEX.md (competitive landscape table)

**Gestoría SaaS:**
- Quick: BATCH-8-QUICK-FACTS.md (section 3)
- Deep: NEW-NICHES-SCAN-2026.md (section 5)
- Index: BATCH-8-INDEX.md (competitive landscape table)

---

## ✅ Verification Checklist

### Before Validation Starts
- [ ] batch-8-new-niches.js loaded into SQLite
- [ ] data/niches.json exported successfully
- [ ] 5 new niches visible in index.html dashboard
- [ ] Scores calculated correctly (Solar 8.4, Elderly 8.1, Gestoría 8.1, etc.)

### Before Deep Dive Starts
- [ ] Chose 1 niche for validation (recommend: Solar)
- [ ] Read BATCH-8-QUICK-FACTS.md for chosen niche
- [ ] Reviewed competitive landscape (BATCH-8-INDEX.md)
- [ ] Identified first 5-10 customer interview targets
- [ ] Set up €30-50 Google Ads test budget

---

## 📈 Success Metrics

**Goal for Week 1-2 validation:**
- 10+ customer interviews completed
- 70%+ report urgency/pain ("we need this")
- 50%+ willing to pay specific price
- Ad test: CAC under €150
- Clear Go/No-Go decision made

**Goal for Week 3+:**
- MVP scope defined
- Build started
- 2-6 week timeline confirmed

---

## 🤔 Key Questions Answered

**Q: Why these 3 over the others?**
A: Score > 8.0, timing is urgent (now, not "someday"), TAM is huge, competition is beatable.

**Q: Which one to build first?**
A: Solar Energy (fastest MVP 3-4 weeks, gov subsidy window Q1-Q2 2026 = urgency).

**Q: What if validation fails?**
A: Fallback to Elderly Care or Gestoría SaaS (both equally strong, different timelines).

**Q: How much budget needed?**
A: €150-200 total (€30-50 ads per niche, landing pages free tier).

**Q: What's the biggest risk?**
A: Solar = gov dependency, Elderly = liability, Gestoría = regulatory compliance. All manageable.

---

## 🔗 Related Documents in This Project

- **CLAUDE.md** — Project charter + Spain context
- **01-frameworks/NICHE_SCORING_TEMPLATES.md** — How scoring works
- **01-frameworks/QUICK_REFERENCE.md** — Red flags + go/no-go metrics
- **02-research/spain-national/** — Spain-specific business culture
- **scripts/add_niches.py** — Database ingestion tool
- **scripts/query.py** — Data query tool

---

## 📞 Next Steps (Copy to your Task Manager)

### Immediate (Today)
- [ ] Read BATCH-8-QUICK-FACTS.md
- [ ] Decide on 1 niche for validation
- [ ] Run `add_niches.py` to load Batch 8

### This Week
- [ ] Verify 5 new niches in dashboard
- [ ] Set up Google Ads test (€30-50)
- [ ] Create simple landing page (Carrd/Webflow)
- [ ] Identify 5-10 interview targets

### Next Week
- [ ] Run 10+ customer interviews
- [ ] Analyze interview feedback
- [ ] Calculate real CAC/LTV
- [ ] Make Go/No-Go decision

### Week 3
- [ ] Pick winner
- [ ] Define MVP scope
- [ ] Start build

---

## 📄 Files Created

✅ NEW-NICHES-SCAN-2026.md (full analysis, 8 niches)
✅ batch-8-new-niches.js (staging file, 5 niches)
✅ BATCH-8-QUICK-FACTS.md (one-pager, TOP-3)
✅ BATCH-8-INDEX.md (navigation + tables)
✅ NEW-NICHES-BATCH8-SUMMARY.md (executive summary)
✅ session-context-batch8.md (next session context)
✅ README-BATCH8.md (this file)

**Total:** 7 files created, 5 niches analyzed, 3 ready for deep validation

---

*Created: March 2, 2026*
*Status: Ready for ingestion + validation phase*
*Confidence: HIGH (well-researched, data-backed, timing-driven)*

**Next session: Execute validation roadmap, make Go/No-Go decision by Week 3**
