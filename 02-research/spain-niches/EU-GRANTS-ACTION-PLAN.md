# EU Grants Automation SaaS — 90-Day Action Plan

**Owner:** Research Team
**Timeline:** March 2 – May 31, 2026
**Goal:** €35K–45K MRR by month 6 (Aug 31, 2026 deadline)

---

## PHASE 0: VALIDATION (Days 1–7)

### Goal
Confirm consultant willingness to pay before committing to MVP build.

### Deliverables

**[ ] Task 1: Consultant Interviews (Days 1–2)**

Target: 10 consultants (mix of large + independent)

**Priority targets (search LinkedIn + Google for contact):**
1. Eurosubvenciones (info@eurosubvenciones.net)
2. ECSA Consultores (contact form on site)
3. MOVA (check LinkedIn)
4. Rubvex (info@rubvex.es)
5. 6 independent consultants (search "consultor subvenciones Madrid" + LinkedIn)

**Script (15-min call):**
```
Hi [Name], I'm building a platform that auto-fills grant applications and cuts your form-filling time by 40%.

Q1: "How many hours do you spend preparing documents for one client?"
Q2: "What's your typical consulting fee per grant project?"
Q3: "Would you pay €300/month for a tool that saves you 40% of that time?"
Q4: "Which grant programs are hardest to fill? (Kit Digital, PERTE, Horizonte Europa?)"
Q5: "If we do success-fee revenue share (3–5% of your commission), would you use it?"

[Take notes on every answer]
```

**Success criteria:**
- 7+/10 say "Yes, I'd pay €300/month"
- At least 3 mention "auto-fill forms" as biggest pain
- At least 2 willing to do beta (free/cheap) for first 2 months

**Action log:**
- [ ] Script finalized
- [ ] 10 LinkedIn profiles identified
- [ ] 10 cold outreach emails sent
- [ ] Replies tracked in spreadsheet
- [ ] 5+ calls scheduled
- [ ] 5+ calls completed
- [ ] Results summarized

---

**[ ] Task 2: Landing Page (Day 3–4)**

**Platform:** Webflow or Wix (fast, no code needed)

**Copy:**
```
Headline: "Find All Your Grants in 5 Minutes. Fill Forms in 1 Hour."
Subheading: "€27B in European grants still unclaimed. Don't leave money on the table."

CTA: [Input email] → "Get early access"

3 benefits:
1. "Automatic matching: Answer 5 questions, get all applicable grants"
2. "Pre-filled forms: 80% of paperwork is automated"
3. "Revenue share: If you win, we win 3% of your commission"

Social proof: [Add later after beta launches]
```

**Design:** Simple, 1-page (Mobileoptimized)
**SEO keywords:** "subvenciones pyme españa", "grants españa 2026", "automatización formularios"

**Action log:**
- [ ] Copy written
- [ ] Design mockup (Figma)
- [ ] Webflow site published
- [ ] Domain: [choose subdomain or new domain]
- [ ] Analytics (Google Analytics) configured
- [ ] Email capture integrated (Mailchimp)

---

**[ ] Task 3: Social Push (Day 5)**

**Channels:**
- LinkedIn: Post on your profile + tag consultants you interviewed
  - "Just interviewed 10 grant consultants. 80% say 'form-filling is our biggest pain.' Building a solution. 🚀"
- Twitter/X: "€27B in grants go unused every year because forms take 10 hours. We're fixing this."
- Email: Send to warm network (previous clients, angel investors, advisors)

**Action log:**
- [ ] LinkedIn post published
- [ ] Twitter posts scheduled (3x week)
- [ ] Email list compiled (50+ contacts)
- [ ] Email drafted and sent

---

**[ ] Task 4: Decision Gate (Day 7)**

**If 7+/10 consultants say "I'd pay":**
- ✅ Proceed to MVP build (phase 1)
- ✅ Commit 4-week timeline
- ✅ Hire dev (freelance or FTE)

**If 5–6 consultants say "I'd pay":**
- ⚠️ Proceed with caution
- ⚠️ Add "free trial month" offer to improve conversion
- ⚠️ Focus more on value demo in beta

**If <5 consultants say "I'd pay":**
- ❌ Pivot to Model A (SMB freemium)
- ❌ Restart interviews with SMB owners instead
- ❌ Adjust landing page to "Find all your grants for €39/month"

**Decision documented:** [ ] Yes / [ ] No / [ ] Pivot

---

## PHASE 1: MVP BUILD (Weeks 2–5)

### Goal
Launch functional MVP with 5 beta consultants using it.

### Sprint Plan (4 weeks)

**Week 1–2: Data layer + AI questionnaire**

**Deliverables:**
- [ ] BDNS scraper (Python script)
  - Parse https://www.pap.hacienda.gob.es/bdnstrans
  - Extract: ID, name, budget, deadline, criteria, region
  - Test data: Should extract 5K+ grants
  - Automated daily updates

- [ ] AI questionnaire (Claude API)
  - 5 questions: employees, sector (CNAE), spending type, region, budget needed
  - System prompt: "You are a Spanish grant expert. Given this company profile, find the TOP 10 matching grants from this database."
  - API integration (FastAPI endpoint)
  - Test: Pass 3 sample businesses, validate top results make sense

**Tech stack:**
```
Backend: FastAPI (Python)
Scraping: BeautifulSoup + Selenium
AI: Claude API (claude-3-sonnet)
DB: PostgreSQL (Supabase for free tier)
```

**Acceptance criteria:**
- [ ] BDNS scraper runs daily, 0 errors
- [ ] 5K+ grants in database
- [ ] AI questionnaire returns 10 grants in <10 seconds
- [ ] Deployable to Vercel/Heroku

---

**Week 2–3: Alerts + UI**

**Deliverables:**
- [ ] Email alerts (SendGrid)
  - Cron job: daily check for new grants
  - Email template: "New grant: [name], €[budget], deadline [date]"
  - Unsubscribe link + preference center

- [ ] WhatsApp alerts (WhatsApp Cloud API)
  - Phone number verification (optional for MVP, prioritize email)
  - Message: "Nuevo subsidio: [nombre], €[presupuesto], vencimiento [fecha]"
  - Reply: "Ver más" → sends WhatsApp link to dashboard

- [ ] Landing page + dashboard UI
  - React/Next.js frontend
  - Pages:
    - Sign up page (email + password)
    - Dashboard (grants list + filters)
    - Questionnaire (5 questions)
    - Profile settings

**Tech stack:**
```
Frontend: Next.js + React
Styling: Tailwind CSS
Deployment: Vercel
```

**Acceptance criteria:**
- [ ] Landing page loads in <3 seconds
- [ ] Email alerts send correctly (test with yourself)
- [ ] Dashboard shows list of grants
- [ ] Mobile-responsive design (Tailwind)

---

**Week 3–4: PDF autofill + Deployment**

**Deliverables:**
- [ ] PDF form detection
  - Identify PDF form fields using PyPDF2
  - Support 3 grant types: Kit Digital, PERTE Automotive, Horizonte Europa
  - Manual mapping of form fields → JSON schema

- [ ] PDF autofill engine
  - Map questionnaire data → form fields
  - Generate filled PDF for download
  - Test: Fill 3 sample grants, validate output

- [ ] Deployment
  - Docker container setup
  - Environment variables (API keys)
  - Database migrations
  - Monitoring (error logging via Sentry)

**Tech stack:**
```
PDF: PyPDF2 + pdfplumber
PDF generation: reportlab
Deployment: Docker + Heroku/Fly.io
```

**Acceptance criteria:**
- [ ] Can upload PDF, detect fields automatically
- [ ] Pre-filled PDF downloads correctly
- [ ] All integrations working (BDNS, email, Claude)
- [ ] Zero unhandled errors in production logs

---

**Week 4: Testing + Beta onboarding**

**Deliverables:**
- [ ] QA testing (manual + automated)
  - Test all flows: signup → questionnaire → results → download PDF
  - Test mobile, desktop
  - Stress test: 100 concurrent users (LoadImpact or similar)

- [ ] Beta onboarding
  - Email sent to 5 beta consultants: "You're in! Here's how to use it."
  - 15-min onboarding call with each (Zoom)
  - Slack/Discord channel for feedback

**Acceptance criteria:**
- [ ] 5 beta consultants active
- [ ] <1 critical bug reported
- [ ] Uptime: 99.5% over first week

---

### Metrics to track (PHASE 1)

- [ ] BDNS data freshness (should be <24h old)
- [ ] API response time (should be <2 sec for questionnaire)
- [ ] Landing page bounce rate (should be <50%)
- [ ] Email delivery rate (should be >98%)
- [ ] Beta consultant daily active rate (should be >80%)

---

## PHASE 2: BETA + EARLY SALES (Weeks 6–8)

### Goal
Transition 5 beta consultants to paying customers. Close 10–15 new customers.

### Deliverables

**[ ] Feedback loop (Week 6)**

- [ ] Weekly feedback calls with 5 beta consultants
  - Script: "What worked? What didn't? What's missing?"
  - Prioritize feedback, build top 3 features in PHASE 2.1

- [ ] Product updates (quick wins)
  - Fix all reported bugs
  - Add 1–2 most-requested features (e.g., "bulk upload 10 PDFs")

**[ ] Sales playbook (Weeks 6–7)**

**Email sequence to warm network:**
```
Email 1 (Day 1): "We're launching an automation tool for grant consultants. Early bird: €99/month for 6 months. Interested?"
Email 2 (Day 3): "See it in action" [link to 3-min demo video]
Email 3 (Day 5): "Last chance: Price goes to €299/month next week"
Email 4 (Day 7): "Price update + customer testimonial from beta users"
```

**Cold outreach (LinkedIn):**
```
Connection message: "Hi [Name], I'm building a platform that cuts grant application time by 40%. Would you be open to a 15-min demo?"

If interested → Calendly link for 15-min call
```

**Call script (15 min):**
```
Intro: "I'm building a SaaS for grant consultants. 5 of your peers are already testing it."

Demo (5 min): Screen share of dashboard + autofill demo

Value prop (3 min): "You save 40% of form-filling time. At €60/hour, that's €5K–7K/year value. We charge €299/month."

Close (2 min): "Would you like to start a 2-week free trial?"
```

**[ ] Paid ads (Week 7–8, optional)**

**LinkedIn Ads:**
- Budget: €500
- Target: "Grant consultant" OR "consultor subvenciones" in Spain
- CTA: "Get early access"
- Expected: 50–100 clicks, 10–20 signups

**Google Ads:**
- Keywords: "software subvenciones españa", "automatización formularios"
- Budget: €200
- Expected: 30–50 clicks, 5–10 signups

---

### Sales targets (PHASE 2)

| Channel | Target | Conversion | Expected Paying |
|---------|--------|------------|-----------------|
| Warm network (50 people) | 50 | 10% | 5 |
| Cold outreach (LinkedIn) | 100 | 5% | 5 |
| Paid ads (LinkedIn + Google) | 100 | 3% | 3 |
| **TOTAL** | 250 | ~5% | **13–15** |

**Expected MRR (end of week 8):** 5 beta + 13 new = 18 customers × €300 avg = €5,400

---

## PHASE 3: PRODUCT REFINEMENT (Weeks 9–12)

### Goal
Reach 30–40 paying customers by month 6. Launch revenue share.

### Deliverables

**[ ] Feature iteration (based on customer feedback)**

**Top features to build:**
1. Multi-user accounts (team access for large consulting firms)
2. Compliance checker ("Do you meet all criteria? Y/N with reasons")
3. Bulk operations (upload 10 grants at once, fill all)
4. Integration with consultant's CRM (Salesforce, HubSpot)
5. Reports & analytics (How many grants per month? Win rate?)

**Priority order:** Features 1–2 in week 9, features 3–4 in week 10, feature 5 in week 11

---

**[ ] Revenue share program (Week 10)**

**Mechanics:**
- Offer to top 5 consultants: "We'll take 3% of your success fee"
- Example: Consultant wins €500K grant, takes €50K (10%) → you get €1,500
- Document in contract: "Platform revenue share agreement"

**Setup:**
- [ ] Contract template drafted
- [ ] 5 consultants contacted with offer
- [ ] Expected: 2–3 accept (€3K–5K/month potential)

---

**[ ] GTM expansion (Weeks 11–12)**

**Content marketing:**
- [ ] Blog posts (SEO focus)
  - "€27B in European grants: Why your SME is leaving money on the table"
  - "How to fill a PERTE grant application in 1 hour (not 10)"
  - "Kit Digital v2: Complete guide for 2026"
  - Expected: 2K organic visitors/month by week 12

- [ ] YouTube videos (demo + tutorials)
  - "Platform walkthrough (5 min)"
  - "How to get a €50K grant in Spain (step-by-step)" (15 min)
  - Expected: 500 views/month by week 12

---

### Metrics to track (PHASE 3)

- [ ] CAC (should be €150–300)
- [ ] LTV (should be €7K–12K by now)
- [ ] Churn rate (should be <5% monthly)
- [ ] NPS (Net Promoter Score, should be >50)
- [ ] Feature adoption (% of customers using autofill)

---

## PHASE 4: SCALE (Weeks 13–26, through Aug 31)

### Goal
Reach 60–80 paying consultant partners. €35K–45K MRR.

### Metrics targets

| Metric | Week 8 | Week 12 | Week 26 |
|--------|--------|---------|---------|
| Paying consultants | 18 | 30 | 60 |
| MRR | €5.4K | €9K | €24K |
| + Revenue share | €0 | €1K | €3K–5K |
| **Total MRR** | €5.4K | €10K | €27K–29K |

---

### What to do differently

**Months 4–6 (Scale phase):**

- Hire sales/BD person (0.5 FTE, €2K/month)
- Increase paid ads budget to €2K/month
- Partner with industry associations (Asociación Consultores España)
- Attend 2–3 trade shows / conferences
- Build case studies (3–5 detailed success stories)

---

## Contingency Plans

### If consultant adoption is LOW (<50% target)

**Option 1:** Pivot to SMB freemium (Model A)
- Lower landing page threshold, target individual SME owners
- Freemium: free search + 1 autofill/month
- Pro: €39/month for unlimited

**Option 2:** Focus on specific grant program (niche down)
- Focus only on Kit Digital (860K users!)
- Build tight integration with Kit Digital application process
- Grow from there

### If BDNS API closes

**Fallback:** Web scraping + caching
- Heroku scheduler: daily scrape of BDNS
- Store data in PostgreSQL
- No customer impact (transition should be <24h)

### If FANDIT adds autofill

**Competitive response:**
- You already own consultant relationships
- Build consultant network/marketplace (harder for FANDIT to replicate)
- Add more niche features (specific to PERTE, Horizonte Europa)

---

## Budget Summary (3 months)

| Item | Cost |
|------|------|
| Dev (freelance, 1 FTE × 12 weeks × €1K/wk) | €12K |
| Designer/UI (freelance, 0.5 FTE × 8 weeks) | €4K |
| Infra (AWS, Heroku, Supabase) | €1.5K |
| Domains + tools (Slack, Figma, etc.) | €500 |
| Paid ads (LinkedIn + Google) | €2K |
| **Total** | **€20K** |

**Funding needed:** €20K (can be founder investment, angel check, or pre-revenue)

---

## Weekly Checklist (Use this)

### Week 1
- [ ] 10 consultant interviews completed
- [ ] 7+/10 say "I'd pay" → decision: GO
- [ ] Landing page drafted
- [ ] Beta signup form functional

### Week 2–5
- [ ] BDNS scraper deployed
- [ ] AI questionnaire API tested
- [ ] Dashboard UI complete
- [ ] Email alerts configured
- [ ] 5 beta consultants onboarded

### Week 6–8
- [ ] Product feedback incorporated
- [ ] 15 new customers closed (€4.5K MRR)
- [ ] Blog posts published (2–3)
- [ ] YouTube videos uploaded (2–3)

### Week 9–12
- [ ] Top 2 features shipped (multi-user, compliance check)
- [ ] Revenue share program with 2–3 partners
- [ ] 30 total paying customers (€9K MRR)
- [ ] Content strategy yielding 1K+ organic visitors/month

### Week 13–26
- [ ] 60 paying consultants (€24K MRR)
- [ ] Revenue share contributing €3K–5K/month
- [ ] 3–5 case studies published
- [ ] Organic traffic: 3K+/month

---

## Decision points

**[ ] Day 7:** Consultant validation → GO / PIVOT / NO-GO

**[ ] Week 5:** MVP quality → LAUNCH BETA / DELAY / PIVOT

**[ ] Week 8:** Sales conversion → CONTINUE PHASE 2 / ADJUST GTM / PIVOT

**[ ] Week 12:** Unit economics → PROCEED TO SCALE / OPTIMIZE / PIVOT

**[ ] Week 26 (Aug 31):** Final decision on post-NextGen strategy (Horizonte Europa, pivot to other EU countries)

---

## How to use this document

1. **Copy to Trello / Asana** and assign tasks to team members
2. **Weekly check-in:** Review completed tasks every Friday
3. **Monthly review:** Assess metrics vs. targets
4. **Adjust timeline:** If behind schedule, extend or cut features

---

**Version:** 1.0
**Last updated:** March 2, 2026
**Owner:** Product team
