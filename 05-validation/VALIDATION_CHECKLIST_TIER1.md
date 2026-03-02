# TIER 1 Validation Checklist — Before Building MVP

**Date:** 2026-03-02
**Purpose:** De-risk niches before writing a single line of code
**Target:** Complete by 2026-03-21 (3 weeks)

---

## NICHE 1: TOURIST RENTAL VUD COMPLIANCE SAAS

### Pre-Build Validation (Go/No-Go Criteria)

#### Customer Research
- [ ] **Interview 5+ Airbnb hosts** (€50–500K annual rental income)
  - Question 1: "How did you handle VUD registration?"
  - Question 2: "How much time did it take?"
  - Question 3: "Would you pay €22/mo to automate this?"
  - Question 4: "What's your biggest fear about VUD?"
  - **Go/No-Go:** 4/5 say "yes, would pay" → GO

- [ ] **Interview 3+ property managers** (10+ properties each)
  - Question 1: "How do you handle VUD for clients?"
  - Question 2: "What's the biggest pain point?"
  - Question 3: "Would this tool save you time?"
  - Question 4: "Would you recommend it to hosts?"
  - **Go/No-Go:** 2/3 positive → GO

- [ ] **Interview 2+ Airbnb community moderators**
  - Question 1: "How many VUD-related questions per week?"
  - Question 2: "How many hosts are non-compliant?"
  - Question 3: "Would a tool solve this problem?"
  - **Go/No-Go:** Clear pain signal → GO

#### Market Research
- [ ] **Validate TAM:** 330K–650K properties addressable
  - Source Airbnb public data (transparency report)
  - Check INE accommodation surveys
  - Review Booking.com investor docs
  - **Threshold:** Confirm 300K+ properties exist → GO

- [ ] **Check regulatory enforcement**
  - Confirm €60K fine amount (official AEAT/regional sources)
  - Verify Airbnb delisting enforcement (ask hosts)
  - Check if regional governments still actively enforcing (post-July 2025)
  - **Threshold:** Enforcement still active → GO

- [ ] **Estimate non-compliance rate**
  - Survey 10 Airbnb hosts: "Are you VUD compliant?"
  - Check Facebook groups for compliance posts
  - **Threshold:** 40%+ report non-compliance or don't know → GO

#### Competitive Intelligence
- [ ] **Search for existing solutions**
  - Google: "herramienta VUD registro", "software cumplimiento VUD"
  - Check Producthunt, Appsumo, IndieHackers (Spain-focused)
  - Ask property managers: "Do you use any VUD software?"
  - **Threshold:** Zero purpose-built tools found → GO

- [ ] **Test competitor products**
  - Sign up for Holded free trial (any VUD module?)
  - Test Billin (any host-specific VUD feature?)
  - Check Airbnb host center (any compliance tools?)
  - **Threshold:** No direct competitors → GO

#### GTM & Demand Validation
- [ ] **Landing page A/B test**
  - Create 2 headlines:
    - Option A: "Avoid €60K Fine — Register VUD in 15 Minutes"
    - Option B: "Keep Your Airbnb Listing Active — VUD Compliance Made Easy"
  - Budget: €50–100 on Google Ads
  - Keywords: "registrar VUD", "VUD cumplimiento", "compliance Airbnb"
  - **Go/No-Go:** CTR > 2% OR conversion > 1% → GO

- [ ] **Facebook group validation**
  - Post in 5 Airbnb host groups: "I'm solving [VUD problem]. Interested?"
  - Measure: # positive replies, # ready to pay, # requests for demo
  - **Go/No-Go:** 5+ positive replies OR 3+ pre-sales → GO

- [ ] **Reddit sentiment check**
  - Search r/SpainExpats + r/airbnb_hosts_spain for VUD mentions
  - Count posts about VUD frustration (last 3 months)
  - **Go/No-Go:** 10+ posts showing pain → GO

#### Financial Assumptions Validation
- [ ] **Validate ARPU (€22/mo)**
  - Ask 5 property managers: "What would you pay?"
  - Ask 5 hosts: "Max monthly price?"
  - Compare to: Gestor fees (€30–60/mo), lawyer (€500–1500 one-time)
  - **Go/No-Go:** 3/5 say "€20–30/mo is fair" → GO

- [ ] **Validate CAC assumption (€45–85)**
  - Run €50 Google Ads test, measure CAC
  - Post 3 Facebook posts, measure engagement
  - **Go/No-Go:** Organic + paid CAC < €100 → GO

#### Technical Feasibility
- [ ] **Request Hacienda regional APIs**
  - Contact 3 regional tourism offices (largest regions)
  - Ask: "Do you have an API for VUD registration?"
  - Estimate: How many require API vs manual portal
  - **Go/No-Go:** 3+ regions have API-like access → GO

- [ ] **Map regional systems**
  - List all 17 regional VUD portals
  - Categorize: "API available", "Manual form", "Complex"
  - **Go/No-Go:** 5+ can be automated → GO

- [ ] **Assess integration complexity**
  - Review 3 portal UIs (can you scrape/API?)
  - Estimate MVP build time: ___ weeks
  - **Go/No-Go:** MVP achievable in 4–6 weeks → GO

---

### Success Metrics (Track During MVP)

| Metric | Target | Threshold |
|--------|--------|-----------|
| Customer interviews completed | 10–15 | 5+ |
| % saying "would pay" | 70%+ | 50%+ |
| Landing page conversion | 1.5%+ | >0.5% |
| CAC in first 10 customers | <€100 | <€150 |
| NPS (beta) | 40+ | 30+ |
| Churn rate (first 3 months) | <5% | <8% |
| Willingness to renew (month 4) | 80%+ | 60%+ |

---

## NICHE 2: VERIFACTU SAAS — EXPAT AUTÓNOMOS

### Pre-Build Validation (Go/No-Go Criteria)

#### Customer Research
- [ ] **Interview 5+ foreign autónomos**
  - Question 1: "How do you currently invoice in Spain?"
  - Question 2: "Have you heard of VeriFactu?"
  - Question 3: "Do you use invoicing software?"
  - Question 4: "Would you pay €18/mo for English-language invoicing?"
  - Question 5: "What's your biggest pain with Spanish taxes?"
  - **Go/No-Go:** 4/5 say "yes, would buy" → GO

- [ ] **Interview 2+ tax professionals** (serving expat clients)
  - Question 1: "How many foreign autónomos do you advise?"
  - Question 2: "What's the biggest pain point?"
  - Question 3: "Would an English invoicing tool help?"
  - Question 4: "Would you refer customers to this product?"
  - **Go/No-Go:** 1/2 positive → GO

- [ ] **Interview 2+ visa/relocation agency staff**
  - Question 1: "How many clients ask about invoicing/taxes?"
  - Question 2: "Do you recommend any tools?"
  - Question 3: "Would you partner with an invoicing tool?"
  - **Go/No-Go:** 1/2 interested in partnership → GO

#### Market Research
- [ ] **Validate TAM: 8K–12K foreign autónomos**
  - Check INE data (autónomos registered, % foreign)
  - Review Digital Nomad Visa stats (visas issued)
  - Ask Reddit r/SpainExpats: "How many of you are autónomos?" (sample)
  - **Threshold:** Confirm 6K+ addressable market → GO

- [ ] **Validate income levels**
  - Ask 5 expat autónomos: "What's your monthly income?"
  - Research digital nomad earning (Nomad List, InterNations)
  - **Threshold:** 80%+ earn €2K+/mo (willing to pay SaaS) → GO

- [ ] **Check language preference**
  - Ask 5 expat autónomos: "Do you use English or Spanish for work?"
  - Check expat forums: Do they ask for English-language tools?
  - **Threshold:** 70%+ prefer English or bilingual → GO

#### Competitive Intelligence
- [ ] **Test Spanish invoicing tools in English**
  - Sign up for Billin (is there English UI?)
  - Test Holded (English available?)
  - Test Quipu (any English?)
  - **Threshold:** All Spanish-only → GO (confirmed gap)

- [ ] **Check if Holded/others have EN plans**
  - Email support: "Do you have English planned?"
  - Check their roadmap or announcements
  - Monitor their social media
  - **Go/No-Go:** No imminent EN release < 6 months → GO

- [ ] **Search for English invoicing solutions in Spain**
  - Google: "invoice Spain English", "Spanish VAT invoicing English"
  - Check ProductHunt, Capterra, G2
  - Ask Reddit r/SpainExpats: "What do you use?"
  - **Threshold:** No English-language competitors found → GO

#### GTM & Demand Validation
- [ ] **Reddit validation**
  - Post in r/SpainExpats: "I'm building English invoicing for Spain autónomos — interested?"
  - Post in r/digitalnomad: Same pitch
  - Measure: # replies, # saying "yes I need this", # pre-sales
  - **Go/No-Go:** 5+ positive replies OR 3+ pre-sales → GO

- [ ] **Facebook expat group validation**
  - Post in 3–5 "Expats in Spain" groups
  - Ask: "Would you pay €18/mo for English invoicing software?"
  - Measure engagement
  - **Go/No-Go:** 5+ interested responses → GO

- [ ] **Landing page test**
  - Create landing: "Invoice in Spain Legally — In English"
  - Budget: €50 Google Ads
  - Keywords: "invoice Spain English", "autónomo English"
  - **Go/No-Go:** CTR > 1.5% OR conversion > 0.8% → GO

- [ ] **Validate partnership interest**
  - Email 3 Digital Nomad Visa agencies
  - Ask: "Would you refer customers to our invoicing tool?"
  - **Go/No-Go:** 1/3 interested → GO

#### Financial Assumptions Validation
- [ ] **Validate ARPU (€18–22/mo)**
  - Ask 5 expat autónomos: "What would you pay?"
  - Ask 5 expats with accountants: "How much does your gestor cost?"
  - **Go/No-Go:** 3/5 say "€15–25/mo is fair" → GO

- [ ] **Validate CAC (€35–60)**
  - Run €30 Reddit/Facebook ads, measure CAC
  - Track organic leads
  - **Go/No-Go:** Blended CAC < €80 in test → GO

#### Technical Feasibility
- [ ] **Request Hacienda API access**
  - Contact AEAT (Agencia Tributaria)
  - Request VeriFactu API documentation
  - Ask: Is it available for third-party developers?
  - **Go/No-Go:** API accessible (even if complex) → GO

- [ ] **Review Hacienda schema**
  - Download VeriFactu XML schema from AEAT
  - Estimate: MVP integration complexity
  - **Go/No-Go:** Can implement in 2–3 weeks → GO

- [ ] **Validate tax calculation feasibility**
  - Get sample tax returns from 5 expat autónomos (different countries)
  - Reverse-engineer modelo 303 calculation
  - Identify: Which rules are by country, which are universal?
  - **Go/No-Go:** 80%+ of rules can be templated → GO

- [ ] **Hire tax consultant (advisory)**
  - Find 1 Spanish tax lawyer/accountant
  - Cost: €2K–€5K retainer for first 3 months
  - Role: Validate tax calculations, advise on compliance
  - **Go/No-Go:** Can find + afford expert → GO

#### Churn Risk Validation
- [ ] **Ask expats about staying duration**
  - Survey 5 foreign autónomos: "How long do you plan to stay in Spain?"
  - Options: < 1 year, 1–3 years, 3–5 years, 5+ years
  - **Go/No-Go:** 60%+ staying 1+ years → GO (to justify LTV)

- [ ] **Model churn scenarios**
  - Scenario A: 5% monthly churn (transient expats) → LTV = €285
  - Scenario B: 3% monthly churn (established expats) → LTV = €475
  - **Go/No-Go:** Even at 5% churn, CAC:LTV = 1:5.7 → GO

---

### Success Metrics (Track During MVP)

| Metric | Target | Threshold |
|--------|--------|-----------|
| Customer interviews completed | 8–10 | 5+ |
| % saying "would pay" | 60%+ | 50%+ |
| Landing page conversion | 0.8%+ | >0.5% |
| CAC in first 10 customers | <€70 | <€100 |
| Tax calculation accuracy | 100% (test suite) | 95%+ |
| NPS (beta) | 35+ | 25+ |
| Churn rate (first 3 months) | 5–6% | <8% |
| Willingness to renew (month 4) | 70%+ | 50%+ |

---

## INTERVIEW SCRIPT TEMPLATES

### For VUD Hosts
```
Hi [name],

I'm researching VUD compliance for Airbnb/Booking hosts.
Would you have 15 minutes this week?

Questions:
1. How did you handle VUD registration? (time, cost, difficulty)
2. Have you heard of any tools to automate this?
3. If a tool could do it in 15 minutes for €22/mo, would you use it?
4. What's your biggest fear about VUD non-compliance?
5. How many properties do you manage?

Calendar: [link]
```

### For Expat Autónomos
```
Hi [name],

I'm building invoicing software for foreign freelancers in Spain.
Could we chat for 15 minutes?

Questions:
1. How do you currently invoice in Spain?
2. Have you heard of VeriFactu? Is it a pain point?
3. Would you pay €18/mo for English invoicing software?
4. What's your biggest challenge with Spanish taxes?
5. How long do you plan to stay in Spain?

Calendar: [link]
```

### For Property Managers
```
Hi [name],

I'm researching pain points for property managers handling VUD.
Have 20 minutes this week?

Questions:
1. How many properties do you manage?
2. How do you handle VUD compliance currently?
3. How much time does VUD registration/renewal take per property?
4. Would an automated tool save you significant time?
5. What's the biggest pain with regional differences?

Calendar: [link]
```

---

## SAMPLE SIZE & CONFIDENCE LEVELS

### Statistical Notes
- **5–10 interviews:** 70% confidence (validate demand signal)
- **10–20 interviews:** 85% confidence (strong signal)
- **20+ interviews:** 95% confidence (market ready)

**Recommendation:** Complete 10–15 interviews per niche before MVP build (2–3 weeks).

---

## DECISION TREE

### If interviews go well (70%+ say "would pay"):
→ **PROCEED TO MVP BUILD**
- Start Week 4
- Follow sprint plan in TIER1_EXECUTIVE_SUMMARY.md

### If interviews are mixed (40–70% say "would pay"):
→ **PIVOT MESSAGING & RE-TEST**
- Iterate landing page copy
- Re-run Google Ads test (different angle)
- Conduct follow-up interviews to understand objections
- Decide: Build or kill?

### If interviews are weak (<40% say "would pay"):
→ **KILL NICHE OR PIVOT**
- Option A: Kill (move on to Niche #3–#5)
- Option B: Pivot to adjacent problem (e.g., VUD → property tax, VeriFactu → full accounting)
- Option C: Bundle with complementary product (reduce solo TAM risk)

---

## VALIDATION TRACKING SHEET

### VUD Compliance

| Interview | Date | Duration | "Would Pay?" | Key Quote | Objection |
|-----------|------|----------|--------------|-----------|-----------|
| Host #1 | — | — | ? | — | — |
| Host #2 | — | — | ? | — | — |
| Manager #1 | — | — | ? | — | — |
| Manager #2 | — | — | ? | — | — |
| Moderator #1 | — | — | ? | — | — |
| **Summary** | | | **/5** | | |

### VeriFactu SaaS

| Interview | Date | Duration | "Would Pay?" | Key Quote | Churn Signal |
|-----------|------|----------|--------------|-----------|---|
| Expat #1 | — | — | ? | — | — |
| Expat #2 | — | — | ? | — | — |
| Expat #3 | — | — | ? | — | — |
| Tax Pro #1 | — | — | ? | — | — |
| Visa Agency #1 | — | — | ? | — | — |
| **Summary** | | | **/5** | | |

---

## GO/NO-GO DECISION GATE (End of Week 3)

### Required to Proceed with VUD Build
- [ ] 5+ interviews completed (4/5 say "would pay")
- [ ] Landing page test CTR > 2% OR conversion > 1%
- [ ] Facebook validation: 5+ interested
- [ ] TAM confirmed: 300K+ addressable properties
- [ ] Zero competitors found
- [ ] ARPU validated at €22/mo (3/5 agree)
- [ ] Regional APIs feasible (5+ regions available)

**VUD Go/No-Go:** _____ (Decision: GO / NO-GO / PIVOT)

### Required to Proceed with VeriFactu Build
- [ ] 5+ interviews completed (4/5 say "would pay")
- [ ] Landing page test CTR > 1.5% OR conversion > 0.8%
- [ ] Reddit/Facebook validation: 5+ interested
- [ ] TAM confirmed: 6K+ addressable market
- [ ] No English-language competitors found
- [ ] ARPU validated at €18–22/mo (3/5 agree)
- [ ] Hacienda API accessible (confirmed with documentation)
- [ ] Tax expert hired/available for advisory

**VeriFactu Go/No-Go:** _____ (Decision: GO / NO-GO / PIVOT)

---

**Validation Timeline:** 2026-03-04 → 2026-03-21 (18 days)
**Decision Gate:** 2026-03-21 EOD
**MVP Build Start:** 2026-03-24 (if GO)
