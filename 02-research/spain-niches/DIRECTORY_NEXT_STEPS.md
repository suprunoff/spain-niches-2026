# Directory/Aggregator Models — Spain 2026 — NEXT STEPS

**Date:** 2026-03-02
**Status:** Research complete. Ready for validation phase.
**Documents:**
- `DIRECTORY_AGGREGATOR_NICHES_2026.md` (full research, 20KB)
- `DIRECTORY_NICHE_QUICK_REFERENCE.md` (quick table + heuristics)
- This file: actionable execution plan

---

## THE BIG PICTURE

Spanish markets are **highly fragmented** across home services, healthcare, events, and professional services. 90%+ of providers have **zero digital presence** — just WhatsApp or Instagram. This is a **7-year gap vs. US models** (Angie's List, Thumbtack, Zocdoc, Rover).

**Window is open for 12-24 months** before:
1. Large tech companies (Glovo, Wallapop) expand into directories
2. Spanish software companies copy US models
3. Market consolidation happens

**Best entry strategy:** Pick ONE niche, dominate it in 2-3 months, expand to adjacent niches.

---

## TIER 1 NICHES RANKED BY FOUNDER ACCESSIBILITY (EASIEST FIRST)

| Rank | Niche | Score | MVP | Founder Accessibility | First Revenue | Break-Even |
|------|-------|-------|-----|----------------------|----------------|-----------|
| 1️⃣ | Home Services Bundle | 8.9 | 6-8 weeks | ⭐⭐⭐⭐⭐ (WhatsApp cold outreach) | Week 3 | Week 8-10 |
| 2️⃣ | Physiotherapists | 8.7 | 5-6 weeks | ⭐⭐⭐⭐ (Email to 100 practices) | Week 4 | Week 10-12 |
| 3️⃣ | Pet Services | 8.4 | 6-8 weeks | ⭐⭐⭐⭐ (Google scrape + Facebook outreach) | Week 3 | Week 10-12 |
| 4️⃣ | Wedding Vendors | 8.6 | 7-9 weeks | ⭐⭐⭐ (Instagram ads to couples) | Week 5 | Week 12-14 |
| 5️⃣ | Psychologists | 8.5 | 6-8 weeks | ⭐⭐⭐ (Insurance partnership pitch) | Week 6 | Week 14-16 |

**"Easiest" = lowest CAC, fastest first customer, lowest founder skill gap**

---

## 2-WEEK VALIDATION SPRINT (BEFORE BUILDING)

### PHASE 1: Customer Research (Days 1-4)

**Objective:** Confirm demand signals + identify pain points

#### Task 1.1: Demand Validation via Search
- [ ] Google Keyword Planner: Search volume for "electricista madrid", "fisioterapeuta barcelona", "paseador perros", "fotograpo boda", "psicologa madrid"
  - Target: 5K+ monthly searches = green light
  - <2K = yellow flag (may need to re-rank)
- [ ] Reddit: Post in r/spain, r/madrid, r/barcelona, r/expats asking "How do you find [electrician/therapist/pet sitter]?"
  - Document: 10+ responses describing pain points
- [ ] Facebook groups: Join 3-5 groups (expats, pet owners, engaged couples, etc.) and observe/ask
  - Screenshot: Pain point conversations, quote frustrations

**Deliverable:** 1-page summary: "Top 5 pain points for finding [niche] in Spain"

#### Task 1.2: Provider Interviews (10 per niche)
- [ ] Pick ONE niche (e.g., electricians in Madrid)
- [ ] Find 10 electricians on Google Maps
- [ ] WhatsApp/call them (7am-10pm, Spanish): "Hola [name], soy entrepreneur. Tengo 2 preguntas rápidas sobre cómo consigues clientes?"
- [ ] Script questions:
  1. "Where do 80% of your clients come from?"
  2. "If there was a directory/app showing you to new customers, would you list yourself?"
  3. "What would you pay per month or per lead?"
  4. "What's your biggest problem finding customers right now?"

**Deliverable:** 10-question spreadsheet with responses + sentiment analysis

**Template:**
```
Electricista | Location | Google Reviews | Client Source | Pain | Pricing | Likelihood
Juan López | Madrid | 4.8/5 | 50% word-of-mouth, 40% Google, 10% Facebook | No time to respond to inquiries | €0.50 per lead? "too cheap" | Low (says he's "always busy")
María García | Barcelona | 4.5/5 | 100% word-of-mouth | Family word-of-mouth isn't growing | €3 per lead? "interested" | High
...
```

#### Task 1.3: Customer Interviews (10 per niche)
- [ ] Find customers who recently used the service (Google Maps reviews, Facebook posts)
- [ ] Contact via email/Facebook: "Hi, I saw you got [service] done. Quick survey?"
- [ ] Script questions:
  1. "How did you find the [electrician/therapist/pet sitter]?"
  2. "How long did it take you to find someone you trusted?"
  3. "Would you pay for an app to find + book [service]? How much?"
  4. "What went wrong when finding someone (bad reviews, getting scammed, etc.)?"

**Deliverable:** 10-question spreadsheet with responses

**Timeline:** 4 days (one interview per 30 mins)

---

### PHASE 2: Competitive Audit (Days 5-7)

**Objective:** Confirm "competition gap" and identify what to avoid

#### Task 2.1: Direct Competitors
- [ ] Search: "[Niche] marketplace Spain", "[Niche] directory Spain", "[Niche] app Spain"
- [ ] Record: Name, URL, funding, user count, pricing, review rating
- [ ] Analysis: Why are they failing/weak?

**Example Output:**
```
Niche: Electricians
Competitor 1: ServiClick.es — Directory of contractors
  - Founded: 2015
  - Status: Dead (last update 2022)
  - Why failed: No reviews, poor UX, no mobile app, no WhatsApp integration
  - Opportunity: Do the opposite (reviews, mobile, WhatsApp)

Competitor 2: Google Maps
  - Strength: 500K+ electrician listings
  - Weakness: Fake reviews (30-40% of 1-star reviews are fake), no verification, no pricing comparison
  - Opportunity: Verified reviews + pricing transparency

Competitor 3: Facebook Groups
  - Strength: 100K+ Spanish electricians on Facebook
  - Weakness: Unorganized, no booking system, no reviews
  - Opportunity: Organize + booking + verification
```

#### Task 2.2: Indirect Competitors (Adjacent Models)
- [ ] Angie's List competitors in EU: Otovo (Norway), Habitica (Spain — real estate only), Cleiq (Berlin, cleaning)
- [ ] Record: Pricing, features, market position, why not in Spain
- [ ] Question: "What's the gap they're not filling in Spain?"

#### Task 2.3: Crunchbase/AngelList Scan
- [ ] Search for "[Niche] marketplace" + filter by "Spain" or "Europe"
- [ ] Record: Similar businesses, funding, market size estimates, team size
- [ ] Question: "Are there VC-backed competitors I should know about?"

**Deliverable:** Competitive landscape 1-pager with positioning matrix

---

### PHASE 3: Financial Model (Days 8-10)

**Objective:** Validate unit economics (LTV > 3x CAC)

#### Task 3.1: LTV Calculation
- [ ] Identify: "What's the average deal size?"
  - Example (Electricians): €500-1000 per job, 2-4 jobs per customer per year
  - LTV = €250 per customer annually (conservative)

- [ ] Repeat rate: How many times per year does customer use service?
  - Electricians: 2-4x/year (repair, maintenance, new installation)
  - Physiotherapists: 10-30 sessions per injury cycle
  - Pet groomers: 6-12x/year

- [ ] Multiplier: How many years does customer stay active?
  - Electricians: 5+ years (long-term home owner)
  - Physiotherapists: 1-2 years (therapy cycles)
  - Pet services: 5-10 years (pet lifetime)

**Formula:** LTV = (Average Ticket × Repeat Rate × Customer Lifetime in Years) × Margin %
- Example: €750 × 2.5/year × 5 years × 20% (commission) = €1,875

#### Task 3.2: CAC Calculation
- [ ] Provider acquisition: "How much does it cost to sign up 1 service provider?"
  - WhatsApp cold outreach: €0 (your time)
  - Paid ads (Google, Facebook): €5-15 per provider signup
  - Email marketing: €1-2 per signup
  - Assumed CAC: €5-10

- [ ] Customer acquisition: "How much does it cost to sign up 1 customer?"
  - Organic (word-of-mouth): €5-15
  - Paid ads (Google, Instagram): €15-40
  - Content/SEO: €10-20 (over time)
  - Assumed CAC: €20-30

**Formula:** Total CAC = (Provider CAC × # Providers) + (Customer CAC × # Customers)

#### Task 3.3: Break-Even Analysis
- [ ] Example (Home Services, Electricians):
  - 100 electricians × €30/month = €3,000/month revenue
  - 50 electricians × €20 CAC = €1,000 (one-time)
  - Break-even: €1,000 / (€3,000 - operating costs) = ~1 month

**Deliverable:** 1-page financial model showing LTV, CAC, payback period

---

### PHASE 4: Decision (Day 11)

**Go/No-Go Criteria:**

| Criterion | Green ✅ | Yellow ⚠️ | Red ❌ |
|-----------|---------|----------|-------|
| Monthly Search Volume | 5K+ | 1-5K | <1K |
| Provider Pain Rating | 7+/10 ("urgent") | 5-6/10 | <5/10 |
| Customer Pain Rating | 7+/10 ("urgent") | 5-6/10 | <5/10 |
| Provider Willingness to Pay | 60%+ "yes" | 30-60% | <30% |
| Competitor Count | 0-1 weak | 2-3 weak | 3+ strong |
| LTV:CAC Ratio | >3:1 | 1.5-3:1 | <1.5:1 |

**Decision Matrix:**
- ✅ 5-6 green = **GO** — Start building immediately
- ⚠️ 3-4 green, 2-3 yellow = **CONDITIONAL GO** — Build MVP but validate with 20 more customers
- ❌ <3 green or 2+ red = **NO-GO** — Pick different niche

---

## 4-WEEK MVP BUILD PLAN (After Validation)

### Week 1: Design + Data Collection
- [ ] Figma wireframes: Customer journey + Provider dashboard (4 hours)
- [ ] Scrape 5K providers from Google Maps using Bright Data or manual CSV (8 hours)
- [ ] Set up Supabase database schema (providers, customers, bookings, reviews) (4 hours)
- [ ] Verify data quality: 80% valid phone numbers (4 hours)

### Week 2: MVP Core (Website + Booking)
- [ ] Next.js landing: City selector → provider list with rating/price (16 hours)
- [ ] Provider detail page: Photos, reviews, WhatsApp/email booking button (8 hours)
- [ ] Admin: Bulk provider import + status management (8 hours)

### Week 3: Booking + Reviews
- [ ] WhatsApp API integration: Customer book → message sent to provider (12 hours)
- [ ] SMS/Email confirmation: Booking status updates (4 hours)
- [ ] Review collection: Post-service SMS/email survey (8 hours)
- [ ] Display reviews on provider page (4 hours)

### Week 4: Payment + Launch
- [ ] Bizum + Stripe integration (lead gen billing or commission tracking) (12 hours)
- [ ] Admin dashboard: Revenue, provider stats, payout tracking (8 hours)
- [ ] Beta launch: 50 providers + 500 test customers (8 hours)
- [ ] Customer support: Email, WhatsApp response plan (4 hours)

**Total Time:** ~120 hours (3-4 weeks for 1-2 developers)

---

## GTM LAUNCH PLAN (Weeks 5-8)

### Provider Onboarding (Weeks 5-6)
- [ ] Outreach: WhatsApp cold messages to 500 electricians (your time, 2 hours/day × 10 days)
  - Script: "Hola [name], tengo una plataforma nueva para conectarte con clientes. ¿Quieres listar tu negocio gratis?"
  - Target: 10-15% signup rate = 50-75 electricians

- [ ] Incentive: First 100 providers get 1 month free, featured listing (€0 acquisition cost)

- [ ] Support: WhatsApp support group for providers (troubleshoot issues, collect feedback)

### Customer Acquisition (Weeks 6-8)
- [ ] Organic SEO: Blog posts "Cómo encontrar electricista confiable en Madrid" (optimize for Google)

- [ ] Paid: €500 budget split across:
  - Google Ads: Search "electricista [city]" (€2-3 per click)
  - Facebook: Target "home owner" interest (€1-2 per click)
  - Instagram: Partner with home improvement influencers

- [ ] Referral: Ask first 100 customers "Know someone who needs this? Refer them, both get 10% discount"

- [ ] Community: r/spain, r/madrid, r/barcelona — "We found a way to get verified electricians, no BS" (not paid, organic community)

**Target:** 50 providers + 500 customers by end of Week 8

---

## MEASURING SUCCESS (METRICS TO TRACK)

### Provider Metrics
- [ ] Signups per week (target: 5-10/week)
- [ ] Listing quality: % with photo + description + pricing (target: 70%+)
- [ ] Engagement: % who responded to customer inquiries (target: 80%+)
- [ ] Churn: % inactive after 30 days (target: <20%)
- [ ] NPS: Would you recommend to other electricians? (target: 7+)

### Customer Metrics
- [ ] Signups per week (target: 50-100/week)
- [ ] Booking rate: % who contact provider after browsing (target: 10-15%)
- [ ] Booking success: % who report completed service (target: 70%+)
- [ ] Repeat rate: % who book 2+ times (target: 20%+)
- [ ] NPS: Would you use again? (target: 7+)

### Business Metrics
- [ ] CAC: $ per customer acquired (target: <€20)
- [ ] Commission revenue: € per booking (target: €2-5 per booking)
- [ ] Payback period: months to recover CAC (target: <3 months)
- [ ] Monthly recurring revenue: €/month from premium listings (target: €500+)

---

## RISK MITIGATION

### Risk 1: Providers Don't Want to Pay
**Mitigation:** Start with freemium (free listing, optional premium features). Charge per lead instead. Validate pricing in CustDev.

### Risk 2: No Customer Demand
**Mitigation:** Interview 10+ customers first. If <70% say they'd use it, pivot to #2 niche (Physiotherapists have even higher demand).

### Risk 3: Competitor Emerges (Glovo/Wallapop Enters Market)
**Mitigation:** Build trust moat (reviews + verification) and network effects fast. Get to 1,000+ providers in 3 months = defensible.

### Risk 4: Regulatory Issues (Payment, Data Privacy, Liability)
**Mitigation:** Consult lawyer on RGPD (how long to store reviews), liability insurance (provider malpractice), payment compliance (Bizum, Stripe already handle). Budget: €2-5K upfront.

### Risk 5: Providers are Offline (No Smartphones)
**Mitigation:** Provide WhatsApp Business support (you respond, you send SMS reminders). Don't assume they read email.

---

## TIER 1 RANKING BY RISK (LOWEST RISK FIRST)

| Niche | Provider Age | Digital Literacy | Payment Risk | Liability Risk | Recommended |
|-------|-------------|------------------|----------------|----------------|-------------|
| Home Services | 40-55 | Medium | Low (pay customer/provider directly) | High (injury claims) | ✅ Best if low-risk tolerance for providers |
| Pet Services | 30-45 | High | Low | Medium (pet safety) | ✅ Best for ease of use |
| Wedding Vendors | 25-45 | High | Low | Low | ✅ Best for revenue/LTV |
| Physiotherapists | 35-50 | High | Medium | High (medical liability) | ⚠️ Verify insurance requirements |
| Psychologists | 35-55 | High | Medium | Very High (confidentiality, data) | ⚠️ Consult RGPD lawyer first |

---

## RECOMMENDED STARTING POINT

### For Solo Founder with 6-8 Weeks:
**Option A: Home Services Bundle (Most Profitable)**
- Why: Highest demand + lowest CAC + fastest break-even
- Timing: 6-8 weeks MVP → profitability week 8-10
- Risk: Manage liability (get insurance)

**Option B: Pet Services Hub (Easiest to Execute)**
- Why: High digital literacy among providers + fun market + loyal customers
- Timing: 6-8 weeks MVP → profitability week 10-12
- Risk: Lower (no liability concerns)

**Option C: Wedding Vendors (Highest LTV)**
- Why: €20K+ customer lifetime value → easier unit economics
- Timing: 7-9 weeks MVP → profitability week 12-16
- Risk: Longer sales cycles, but high upside

### For Founder with 10+ Weeks:
**Build 2 in Parallel:**
- **Primary:** Home Services Bundle (revenue driver)
- **Secondary:** Pet Services or Physiotherapists (validate partnerships, expand GTM)
- Reason: Learn what works, apply to third niche

---

## NEXT IMMEDIATE ACTIONS (This Week)

1. [ ] **Pick ONE niche** (recommended: Home Services Bundle)
2. [ ] **2-week validation sprint:**
   - 10 provider interviews (WhatsApp calls)
   - 10 customer interviews (recent buyers)
   - Competitive audit (Google, Facebook, Reddit)
   - Financial model (LTV/CAC/break-even)
3. [ ] **Go/No-Go decision** (document: 1-page summary)
4. [ ] **If GO: Start MVP Week 1** with this plan
5. [ ] **If NO: Pick niche #2** from Tier 1, repeat validation

---

**Document Owner:** Research HQ
**Last Updated:** 2026-03-02
**Questions?** Check `DIRECTORY_AGGREGATOR_NICHES_2026.md` (full research) or `DIRECTORY_NICHE_QUICK_REFERENCE.md` (quick table)

