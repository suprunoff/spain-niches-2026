# Modelo 721 Crypto SaaS — 30-60-90 Day Action Plan

**Timeline:** March 2026 — December 2026
**Goal:** Launch MVP by Jan 2026, capture 20K+ customers by EOY

---

## PHASE 1: Validation (Week 1-2 of Implementation) — BEFORE DEVELOPMENT

### Goal
Validate that 70%+ of target audience would pay €149/year for Modelo 721 solution.

### Deliverables

**1. Landing Page (Day 1-3)**
- Design: "Modelo 721 Made Easy" (1 page, mobile-first)
- Copy: 5 pain points → 3 benefits → one CTA ("Get Early Access")
- Lead magnet: Free PDF checklist "Modelo 721 in 10 steps"
- Tech: Webflow or Carrd (< 1 day)
- Expected: 500+ visits/week by week 2

**2. Email Sequence (Day 4-7)**
- Launch email: "Join 10K+ Spanish crypto investors"
- Nurture 1: "DAC8 vs. Modelo 721 — What's the difference?"
- Nurture 2: "I made 3 mistakes filing Modelo 721 — here's how to avoid them"
- Nurture 3: "Limited-time launch offer: 50% off for first 100 subscribers"
- Tool: Substack or ConvertKit (free tier is fine)

**3. Survey (Day 7-14)**
- Send to landing page subscribers + r/CryptoES + Twitter
- 5 questions:
  1. Do you have >€50K in crypto? (screening)
  2. How stressful is Modelo 721 for you? (1-10)
  3. Would you pay €149/year for automated filing? (Y/N)
  4. What's your biggest pain point? (open-ended)
  5. Would you try a free beta? (Y/N)
- Target: 100+ responses
- Analysis: 70%+ should say "Y" to question 3

**4. Competitor Testing (Day 7-14)**
- Sign up for Koinly, CoinTracking, TaxDown
- Test their Modelo 721 workflow
- Document: Is it easy? Does it work? What's missing?
- Create comparison matrix

**5. Tax Lawyer Consultation (Day 7-14)**
- Find Spanish tax lawyer specializing in crypto (€200-300 per hour)
- Ask: "Is my Modelo 721 generation approach compliant with AEAT?"
- Document: Their validation
- Budget: €500-1000 (2-3 hours)

### Success Metrics
- [ ] Landing page: 1K+ email subscribers
- [ ] Survey response: 100+ (70%+ would pay €149)
- [ ] Lawyer validation: "Your approach is compliant"
- [ ] Competitor analysis: Document all gaps vs. Koinly/TaxDown

---

## PHASE 2: MVP Development (Week 3-8) — BUILD

### Goal
Ship bare minimum: Binance sync + Modelo 721 PDF generation + payments

### Team Allocation
- **Dev 1:** Backend (Binance API, portfolio valuation, payment integration)
- **Dev 2:** Frontend (landing, auth, form, PDF preview)
- **Tax Specialist (0.5):** Validate Modelo 721 template, edge cases
- **You:** Project management + marketing prep

### Deliverables

**Week 1-2: Backend (Dev 1)**
- [ ] Binance OAuth integration (using official API)
- [ ] Transaction history download (all trades, transfers, deposits)
- [ ] Portfolio valuation engine (price snapshot on Dec 31 for EUR)
- [ ] PostgreSQL schema (users, wallets, transactions, valuations)
- [ ] Error handling (bad API keys, network issues)
- Estimate: 10-12 days

**Week 1-2: Frontend (Dev 2)**
- [ ] Landing page redesign (not "Coming Soon", but signup flow)
- [ ] Email + password auth
- [ ] Binance OAuth flow (redirect → approve → success page)
- [ ] Simple dashboard (show wallet balance)
- [ ] Mobile-first design (Tailwind)
- Estimate: 10-12 days

**Week 2-3: Modelo 721 PDF (Dev 1 + Specialist)**
- [ ] AEAT Modelo 721 template (download from AEAT website)
- [ ] Template mapping (portfolio data → PDF fields)
- [ ] PDF generation (ReportLab or Puppeteer)
- [ ] Test with 10+ scenarios (single asset, multi-asset, edge cases)
- [ ] Validation: Lawyer reviews PDF output
- Estimate: 8-10 days

**Week 3: Payments (Dev 1)**
- [ ] Stripe integration (checkout page, webhook handling)
- [ ] Plan setup: €149/year, €199/year
- [ ] Email receipt (order confirmation)
- [ ] Access control (lock PDF download until paid)
- Estimate: 3-4 days

**Week 4: Deployment (Dev 1 + Dev 2)**
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway / DigitalOcean
- [ ] SSL certificates, domain setup
- [ ] Monitoring (Sentry for errors, basic analytics)
- [ ] Database backups
- Estimate: 2-3 days

**Week 4: WhatsApp Setup (You)**
- [ ] Twilio account (WhatsApp Business API)
- [ ] Response templates ("Thank you for using Modelo 721...")
- [ ] Queue management (human takes messages during peak hours)
- [ ] FAQ automation (chatbot for common questions)
- Estimate: 1 day + ongoing

### Tech Stack (Recommended)
```
Frontend:
  - Next.js + React (mobile-first)
  - Tailwind CSS
  - Stripe React library
  - Vercel hosting

Backend:
  - FastAPI (Python) or Express.js
  - PostgreSQL (database)
  - Redis (sessions)
  - AWS S3 (PDF storage)
  - Railway or DigitalOcean App Platform (hosting)

External:
  - Stripe (payments)
  - Binance API (wallet sync)
  - CoinGecko API (price data, free tier)
  - Twilio (WhatsApp)
  - Sendgrid (email)
```

### Success Metrics
- [ ] Binance sync works (test with 5 accounts)
- [ ] Modelo 721 PDF generated correctly (lawyer approves)
- [ ] Payments processed (test with €1 charge)
- [ ] Pages load in <3 seconds (mobile)
- [ ] 0 crashes in first 24 hours of beta

---

## PHASE 3: Beta Testing (Week 9-10) — VALIDATE & ITERATE

### Goal
Get real feedback from 100-200 beta users before public launch.

### Deliverables

**1. Beta User Recruitment (Day 1-2)**
- [ ] Send email to waitlist subscribers (5K expected, 2% signup = 100 users)
- [ ] Post on r/CryptoES, r/Spain (offer free access in exchange for feedback)
- [ ] Invite Twitter followers (use link)
- Target: 100-150 beta testers

**2. Beta Testing Phases (Day 3-7)**
- **Phase A (Day 3-4):** Internal testing (QA team + 5 friend users)
- **Phase B (Day 5-6):** Limited beta (50 users, watch for errors)
- **Phase C (Day 7):** Full beta (150 users, gather feedback)

**3. Feedback Collection (Ongoing)**
- [ ] Post-signup survey (3 questions, 2 min)
- [ ] Typeform: "What worked? What broke? Would you pay?"
- [ ] WhatsApp group: Direct feedback channel
- [ ] NPS: "Would you recommend to a friend?" (target: 40+)

**4. Bug Fixing (Day 5-10)**
- [ ] Track all bug reports in Trello/Linear
- [ ] Fix critical bugs (crashes, payment errors) immediately
- [ ] Schedule non-critical bugs for post-launch
- [ ] Document workarounds for users
- Expected bugs: 10-20 (normal for MVP)

**5. Pricing Validation (Day 5-7)**
- [ ] Ask beta users: "Would you pay €149/year?"
- [ ] Offer discount codes (€99/year for 10 people, track conversion)
- [ ] A/B test messaging ("Tax peace of mind" vs. "Avoid fines")
- Success: 40%+ say "yes" to €149/year

### Success Metrics
- [ ] 150+ beta users recruited
- [ ] <5% critical bugs (crashes, data loss)
- [ ] 50%+ complete signup → PDF generation flow
- [ ] NPS > 40 (would recommend to friend)
- [ ] 40%+ willing to pay €149/year

---

## PHASE 4: Pre-Launch Marketing (Week 11, Dec 2025) — BUILD MOMENTUM

### Goal
Build awareness and waitlist momentum for Jan 2026 launch.

### Deliverables

**1. Content Strategy (Week 11)**
- [ ] YouTube channel created (10-15 videos, 5-10 min each)
  - "Modelo 721 Explained for Crypto Investors"
  - "DAC8 vs. Modelo 721: What's the difference?"
  - "Common Modelo 721 Mistakes (and how to avoid them)"
  - "Tax Fines in Spain: How much do you risk?"
  - "Binance Data: How to export for tax filing"
  - Target: 20K-30K views by Dec 31
- [ ] Blog posts (5-10, SEO-optimized)
  - "Modelo 721 2026: Complete guide for Spanish crypto investors"
  - "DAC8 implementation: What accountants need to know"
  - Keywords: Modelo 721, DAC8, crypto tax Spain
  - Target: 10K organic views by Jan 1

**2. Press/PR (Week 11)**
- [ ] Write press release: "New SaaS solves Spain's Modelo 721 crisis"
- [ ] Send to: Cointelegraph ES, TreceBits, Cripto Noticias
- [ ] Include: Problem statement, solution, pricing, launch date
- [ ] Target journalists: 10-15 outlets
- Expected reach: 50K-100K impressions

**3. Community Building (Week 11, Ongoing)**
- [ ] Join r/CryptoES, r/Spain, r/SpainExpats (post helpfully, not spammy)
- [ ] WhatsApp groups (Crypto Madrid, Bitcoin Barcelona) — answer questions
- [ ] Twitter: Follow #CryptoES, #DAC8Spain accounts, engage daily
- [ ] Reddit: 2-3 helpful comments/week that naturally mention your upcoming tool
- Target: 1K-2K organic leads by launch

**4. Influencer Outreach (Week 11)**
- [ ] Find 5-10 micro-influencers (10K-100K followers) in crypto/finance niche
  - Focus on Spanish creators
  - Look at engagement (not just follower count)
- [ ] Offer: Free access + €200-500 fee for demo video
- [ ] Video format: TikTok, YouTube Shorts (demo + review)
- [ ] Timeline: Videos publish 1-2 weeks before launch
- Budget: €1K-2.5K
- Expected reach: 200K-500K impressions

**5. Landing Page Upgrade (Week 11)**
- [ ] Change from "Coming Soon" → "Launch January 2026"
- [ ] Add: Feature showcase, customer testimonials (from beta), pricing
- [ ] Add: Countdown timer (Jan 1 launch)
- [ ] Add: "Join 5K+ waiting for launch" social proof
- [ ] Add: Early-bird offer (50% off if you sign up by Dec 31)

### Success Metrics
- [ ] YouTube: 20K+ views, 500+ subscribers by Dec 31
- [ ] Blog: 10K+ organic visits by Dec 31
- [ ] Press: 2-3 major outlets mention (aim for Cointelegraph)
- [ ] Community: 2K-3K engaged followers on Twitter/Reddit
- [ ] Email list: 10K subscribers by launch

---

## PHASE 5: Launch (January 2026) — GO LIVE

### Goal
Acquire 1-1.5K customers in Jan 2026 (peak Modelo 721 season).

### Timeline

**Week 1 (Jan 1-7)**
- [ ] Flip landing page to "Live" (not "Coming Soon")
- [ ] Send launch email to 10K subscribers (expect 5-10% click, 2-3% convert = 200-300 customers)
- [ ] Start Google Ads campaign (€500-1000/day budget)
  - Keywords: "Modelo 721", "DAC8 Spain", "crypto tax Spain", "Hacienda crypto"
  - Bid: €1.50-2.50 per click (high-intent keywords)
  - Landing: Direct to signup/payment page
- [ ] Post on Reddit (r/CryptoES, r/Spain) — organic post, not ad
- [ ] Tweet announcement + thread explaining DAC8/Modelo 721
- [ ] WhatsApp: Send message to all confirmed beta testers + ask for testimonials
- Expected: 500-800 customers, €90-150K revenue

**Week 2-3 (Jan 8-21)**
- [ ] Maintain Google Ads at €500-1000/day
- [ ] Press blitz: Send press releases to all outlets again
- [ ] Influencer videos start rolling out (coordinated with them)
- [ ] Email sequence: Nurture non-converters (3 emails: pain, solution, offer)
- [ ] Monitor: Track all metrics (CAC, conversion, churn, support load)
- [ ] Bug fixes: Daily fixes for any issues reported
- Expected: 1K additional customers (1.5K total), €270-400K revenue by Jan 21

**Week 4 (Jan 22-31)**
- [ ] Scale Google Ads if ROAS > 5x (increase budget)
- [ ] Referral program launch (€15 credit per referral)
- [ ] Early-bird discount ends (create urgency)
- [ ] Customer testimonials: Collect 5-10 for social proof
- [ ] Support: Be available 10 AM - 8 PM Spanish time (WhatsApp + email)
- Expected: 500-800 more customers (2K total), additional €90-150K revenue

**Total Jan: 2K-2.5K customers, €450-700K revenue, €90-140K profit (at 85% margin)**

### Metrics to Track (Daily)
- Website traffic (target: 10K-20K/day)
- Conversion rate (target: 5-10% signup, 2-3% purchase)
- CAC (target: keep < €25)
- ROAS (Google Ads, target: 5-7x)
- Customer acquisition cost (track blended across channels)
- Churn rate (should be low in Jan, monitor)
- Support response time (target: <2 hours WhatsApp)
- NPS (target: >45)

### Success Metrics
- [ ] 1.5K-2K customers acquired in Jan
- [ ] €450-700K revenue in Jan
- [ ] CAC < €25 (blended)
- [ ] ROAS 5-7x (on Google Ads)
- [ ] NPS > 45 (would recommend)
- [ ] <1% critical bugs (crashes, data loss)
- [ ] 90%+ customer support satisfaction

---

## PHASE 6: Retention (Feb-Mar 2026) — MAXIMIZE TAX SEASON

### Goal
Keep momentum through peak season, maximize revenue, prepare for valley (Apr-Dec).

### Deliverables

**Feb-Mar Actions:**
- [ ] Email sequence: Monthly value-add content (tax tips, portfolio insights)
- [ ] Support excellence: Be super responsive (WhatsApp 24/7 if possible, via team rotation)
- [ ] Upsell: Offer annual plan with 25% discount (€199 vs. €149/year) — locked renewal
- [ ] Referral push: Incentivize users to refer (€15 credit per friend)
- [ ] Content: Weekly blog posts on tax-related topics
- [ ] Testimonials: Collect 20-30 customer success stories for social proof

**Expected outcomes:**
- Maintain €400-500K MRR (Feb), €300-400K MRR (Mar, as season winds down)
- 70% of revenue should be annual plans (locked for 12 months)
- 30-40% churn in Apr-May (expected, seasonality)

### Success Metrics
- [ ] Retain 60%+ of Jan-Feb customers into Mar
- [ ] 70% annual plan adoption
- [ ] Referral rate 10-15% of new customers
- [ ] NPS sustained > 45
- [ ] Support satisfaction > 90%

---

## PHASE 7: Off-Season Strategy (Apr-Dec 2026) — FIGHT CHURN

### Goal
Prevent 50%+ churn, build off-season revenue streams, plan Year 2.

### Deliverables

**Apr 1: Portfolio Tracking Addon Launch**
- [ ] New feature: Real-time portfolio monitoring (price alerts, rebalancing suggestions)
- [ ] Pricing: €10/month or €99/year (included in premium annual plan)
- [ ] Target: 40-50% of active users
- [ ] Expected: €10K-12K/month additional revenue

**Apr-Jun: Retention Campaigns**
- [ ] Email: "Your 2026 Modelo 721 is filed. Here's how to manage your portfolio."
- [ ] Feature education: 3-5 video tutorials on portfolio tracking
- [ ] Community: Monthly webinar (live Q&A, portfolio tips)
- [ ] Gameification: Leaderboard for "smart portfolio rebalancers"

**Jul 2026: MiCA Compliance Spike**
- [ ] Leverage MiCA launch (Jul 1) to re-engage users ("New regulations — here's what you need to know")
- [ ] Content: MiCA explainer, compliance checklist
- [ ] Expected: Spike in awareness, 5-10% re-engagement

**Aug-Dec: B2B Pivot**
- [ ] Accountant referral program: 15-20% commission per customer
- [ ] White-label offering: CPAs can resell to their clients
- [ ] Target: 200-300 accountant partners by Dec
- [ ] Expected: €5-10K/month from accountant referrals

**Ongoing:**
- [ ] Monthly newsletter (tax updates, portfolio insights, product updates)
- [ ] Content marketing (1 blog post/week, target SEO for "Modelo 721 2027")
- [ ] Community engagement (Reddit, Twitter, WhatsApp groups)
- [ ] Product improvements (UX polish, feature requests)

### Success Metrics
- [ ] Portfolio addon attach: 40%+
- [ ] Monthly churn (Apr-Dec): <5% (vs. 40% in Mar)
- [ ] Accountant partners: 200+ by Dec
- [ ] Off-season revenue: €50-100K/month (portfolio + accountant referrals)
- [ ] User engagement: 30%+ DAU (daily active users)

---

## PHASE 8: Year 2 Planning (Oct 2026 onwards) — SCALE

### Deliverables

**Q4 2026: Plan Expansion**
- [ ] EU Expansion: Portugal, Italy, France (each has similar tax filings)
- [ ] Feature roadmap: Advanced tax reporting, integration with accounting software
- [ ] Team hiring: Sales person (accountant outreach), support specialist

**Q1 2027: Modelo 721 Season 2**
- [ ] Repeat launch strategy (but with existing brand + community)
- [ ] Target: 3-5x growth (5K-7.5K new customers)
- [ ] Expected revenue: €1.5-2M (repeat + retention from Y1)

**Q2 2027+: Accountant Focus**
- [ ] Launch accountant dashboard (manage multiple clients)
- [ ] Pricing: €500-1000/month for CPAs/gestorías
- [ ] Target: 300-500 accountant accounts = €150-500K/month revenue

---

## Budget Summary

| Phase | Activity | Cost |
|-------|----------|------|
| **Validation** | Landing page, surveys, lawyer | €1K |
| **Development** | Salaries (2 devs, 0.5 spec, 8 weeks) | €30-50K |
| **Beta** | Hosting, tools (Typeform, Trello) | €2K |
| **Pre-launch** | Content creation (YouTube, blog) | €3K |
| **Launch (Jan)** | Google Ads (€15K/mo × 1) | €15K |
| **Launch (Jan)** | Press, influencers | €5K |
| **Feb-Mar** | Google Ads (€10K/mo × 2) | €20K |
| **Apr-Dec** | Ads + content + ops (€5K/mo × 9) | €45K |
| **Support** | WhatsApp, email team (part-time) | €10K |
| **Hosting** | AWS, Vercel, Stripe fees | €5K |
| **Ops** | Management, tools, misc | €5K |
| **TOTAL YEAR 1** | | **€141-161K** |

### Revenue Forecast

| Period | Customers | MRR | Margin | Profit |
|--------|-----------|-----|--------|--------|
| Jan 2026 | 2K-2.5K | €360-450K | 85% | €306-382K |
| Feb 2026 | 3K-3.5K | €540-630K | 85% | €459-535K |
| Mar 2026 | 2.5K | €450K | 85% | €382K |
| Apr-Jun 2026 | -40% churn, +addon | €190K avg | 85% | €161K avg |
| Jul-Dec 2026 | +MiCA spike, addon growth | €228K avg | 85% | €193K avg |
| **Y1 Total** | **25K** | **€2.95M ARR** | **85%** | **€2.51M** |

**After costs (€141K):** €2.37M EBITDA (79% margin)

---

## Success Criteria

### Absolute (Must Hit)
- [ ] 1.5K+ customers by Jan 31
- [ ] €2-3M ARR by Dec 31
- [ ] CAC < €25
- [ ] Payback period < 2 months
- [ ] NPS > 40

### Stretch (Nice to Have)
- [ ] 50K+ customers by Dec 31 (if retention works)
- [ ] €4-5M ARR by Dec 31
- [ ] Profitable by month 3 (break-even by Feb)
- [ ] 300+ accountant partners
- [ ] Expand to 1-2 new countries

---

## Key Risks & Contingencies

| Risk | Probability | Impact | Contingency |
|------|-------------|--------|-------------|
| CAC > €25 | Medium | Revenue delay | Diversify to organic (Reddit, YouTube) |
| Churn > 50% | Medium | Cash burn | Annual plans + portfolio addon (designed for this) |
| No product-market fit | Low | Pivot needed | Validate with survey before build (Phase 1) |
| Competitor fast-follow | Medium | Market share | Move fast, build brand/community |
| Regulatory change | Low | Compliance | Tax lawyer on retainer monitors AEAT |
| Payment issues | Low | Revenue loss | Multiple payment methods (Stripe + Bizum + Redsys) |
| Team burnout | Medium | Delays | Hire support contractor for Apr-Dec valley |

---

## Success Indicators (Track Weekly)

```
[ ] Acquisition
    - Website visitors: 10K-20K/week (Jan), 5K/week (Apr-Dec)
    - Email subscribers: +300/week (Jan-Mar), +50/week (Apr-Dec)
    - Conversion rate: 2-3% (checkout → paid)
    - CAC: €20-25 average

[ ] Retention
    - Monthly churn: <4% (Jan-Mar), 5-8% (Apr-Dec)
    - Annual plan adoption: 70%+
    - Portfolio addon attach: 40%+
    - NPS: 40+

[ ] Finance
    - MRR: €360-450K (Jan), €190-230K (Apr-Dec)
    - Gross margin: 85%+
    - Payback period: <2 months
    - EBITDA: Positive by Feb

[ ] Support
    - Response time: <2 hours (WhatsApp)
    - Satisfaction: 90%+
    - Support volume: Manageable (<50 tickets/day)

[ ] Product
    - Bug count: <5 critical per week
    - Feature requests: Document for Y2 roadmap
    - User feedback: NPS + surveys (monthly)
```

---

## Final Notes

This is aggressive but achievable if you:
1. **Validate demand FIRST** (Week 1-2, don't skip)
2. **Build fast** (Week 3-8, stay focused on MVP)
3. **Launch on time** (Jan 2026, window is critical)
4. **Execute GTM flawlessly** (Jan-Mar, maximum effort)
5. **Plan retention** (Apr-Dec, prevent churn bleeding)

Good luck!
