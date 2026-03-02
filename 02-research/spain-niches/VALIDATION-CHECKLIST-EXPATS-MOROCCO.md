# Validation Checklist: British Expats + Spain-Morocco

## PHASE 1: British Expats (Start immediately)

### Week 1-2: Customer Discovery (CustDev Interviews)

**Goal:** Validate pain severity and willingness to pay

**Sample targets:** 20 interviews
- 10× Brits in Málaga/Costa del Sol (retirees, investors)
- 5× Brits in Alicante/Valencia (mixed ages)
- 5× Brits in Canary Islands (digital nomads, expats)

**Interview script (30 min):**
```
1. Background: "How long have you lived in Spain? Which region?"

2. Residencia pain:
   - "Did you exchange your residencia documents? How long did it take?"
   - "What was confusing about the process?"
   - Rate pain (1-10): ___
   - "Would a step-by-step checklist help?" YES/NO

3. Tax/pension:
   - "Do you have UK pension income in Spain?"
   - "Did you need help understanding tax implications?"
   - Rate confusion (1-10): ___
   - "Would a pension tax calculator be useful?" YES/NO

4. Healthcare setup:
   - "How did you access Spanish healthcare?"
   - "How long did it take to get tarjeta sanitaria?"
   - Rate difficulty (1-10): ___

5. Driving license:
   - "Did you exchange UK license to Spanish?"
   - "Pain level (1-10):" ___

6. WTP (Willingness to Pay):
   - "If there was a platform with all this info + tools, would you pay?"
   - Monthly price: "I'd pay €0-5 / €5-10 / €10-15 / €15-20 / €20+"
   - "Would you refer friends?"

7. Other needs:
   - "What else frustrates you about being a UK expat in Spain?"
   - Open text...
```

**Success criteria:**
- ✅ 70%+ say residencia/taxes are painful (7+/10)
- ✅ 50%+ would pay €10-20/month
- ✅ 40%+ mention 2+ pain points
- ✅ Identify #1 pain (probably residencia or taxes)

**Output:**
- Spreadsheet with interview notes
- Pain ranking (residencia > pension > healthcare > driving > property)
- Pricing validation

**Where to find:**
- Facebook groups: "British Expats Spain", "Brits in Málaga", "British Expats Alicante"
- WhatsApp groups (through Facebook admins)
- Expat forums: BritishExpats.com/forum, SpainExpat.com
- Cold outreach: LinkedIn "British expat Spain" + DMs

---

### Week 2-3: Landing Page + Ad Test

**Goal:** Validate demand signal + measure CAC

**Landing page (simple, Webflow/Carrd):**
```
Headline: "Stop Struggling with UK Expat Paperwork in Spain"
Subheading: "Your Step-by-Step Guide to Residencia, Taxes, Healthcare & More"

CTA: "Join the Waiting List" → email capture
Social proof: (after launch) "400+ British Expats Already Signed Up"

Sections:
1. Hero (headline + CTA)
2. Pain points (residencia chaos, tax confusion, healthcare frustration)
3. How it works (checklist → calculator → advisor)
4. Features preview (residencia tracker, pension calc, healthcare guide)
5. Testimonial (from CustDev interviews)
6. CTA again
```

**Facebook ads setup:**
- Budget: €100 total
- Audience: "British expats Spain" interests + lookalikes
- Duration: 7-10 days
- Tracking: UTM + pixel for email conversions

**Success criteria:**
- ✅ CTR > 2% (British expat audience is engaged)
- ✅ CPC < €0.80 (good for targeting niche)
- ✅ Email conversions: 50+ (from €100 spend = CAC €2)
- ✅ Newsletter WTP survey (ask: "Would you pay X/month?")

**Output:**
- Landing page data: clicks, conversions, CTR, CPC
- Email list: 50-100 prospects
- WTP feedback from newsletter survey

---

### Week 3-4: MVP Build & Soft Launch

**MVP Scope (Striped down for speed):**

1. **Residencia Tracker** (Core feature #1)
   - Questionnaire: "When did you become a resident?" → calculates deadline
   - Checklist: NIE, passport photocopy, TIE appointment, medical exam, documents
   - Location finder: Jefatura Provincial de Tráfico in your region
   - Estimated timeline: 6-8 weeks to plastic card

2. **Pension Tax Calculator** (Core feature #2)
   - Input: pension type (State/occupational/personal/government), monthly amount
   - Output: "You'll pay €X/month in Spain, €Y in UK, net €Z"
   - Scenario toggle: "What if I earn €500 more from work?"

3. **Healthcare Decision Tree** (Core feature #3)
   - Q1: "Are you over 65?"
   - Q2: "Are you receiving UK pension?"
   - Output: "Use S1 form (free) → Steps: 1, 2, 3"
   - OR: "Pay Convenio Especial €60/mo → Steps: 1, 2, 3"
   - OR: "Get private insurance €50/mo → Steps: 1, 2, 3"

4. **Resource Hub** (Beta)
   - Links to official documents (INE, Spanish tax authority)
   - Verified lawyer/accountant list (10-15) with ratings

**Tech Stack (MVP, no complex backend):**
- Frontend: React (TypeScript), Tailwind
- Hosting: Vercel (free tier)
- Database: Supabase (simple PostgreSQL, free tier)
- Payments: Stripe (for future Pro tier)
- Auth: Supabase Auth (free)

**Timeline:**
- Day 1-3: Wireframe + design (Figma)
- Day 4-10: Frontend + basic data
- Day 11-14: Integration + testing

**Soft launch targets:**
- Facebook group posts: "Announcing ExpatsOS..." (ask for beta feedback)
- Newsletter email: to 50-100 signups from landing page
- Reddit: r/BritishExpats, r/Spain
- Hacker News: maybe not here, but try Show HN if you build in public

**Success criteria:**
- ✅ 500+ email signups by end of week
- ✅ 100+ people try MVP
- ✅ 10+ feedback submissions (via Typeform)
- ✅ 1-2 testimonials ("This saved me weeks of confusion!")
- ✅ 20+ upgrade to waitlist for Pro tier

---

### Week 4: Iterate + Growth Planning

**Feedback analysis:**
- Q: "What feature helped most?" → prioritize
- Q: "What's still missing?" → roadmap
- Q: "Would you pay €10/month?" → track conversion

**Growth planning:**
- Double down on CAC channel (Facebook ads if <€0.80, organic if high)
- Launch on Product Hunt (if momentum)
- Pitch to Expatica for partnership (co-marketing)
- Start SEO content: "How to exchange UK driving license Spain", "UK pension tax Spain"

---

## PHASE 2: Spain-Morocco B2B (Weeks 6-8, if time/resources)

### Quick Validation Interviews

**Goal:** Confirm B2B pain + estimate TAM more precisely

**Spanish exporters (10 interviews):**
- Target: mid-market (5-50 employees) exporting to Morocco
- Pain areas: customs docs, payment delays, compliance

**Moroccan importers (10 interviews):**
- Target: mid-market importing from Spain
- Pain areas: cost of doing business, documentation, payment risk

**Interview questions:**
1. "How many shipments/month to Morocco/from Spain?"
2. "What takes longest in the process?" (docs? payment? customs?)
3. "How much do you lose to delays/inefficiency? (estimate €/month)"
4. "Would a platform that automates docs + payments save you money?" YES/NO
5. "How much would you pay/month?" (€0-50 / €50-100 / €100-200 / €200+)

**Success criteria:**
- ✅ 70%+ cite customs docs or payment delays as top pain
- ✅ 50%+ say they lose €100+/month to inefficiency
- ✅ 40%+ would use platform (even in beta)
- ✅ 30%+ would pay €50+/month

**If validation passes:** Proceed to MVP build in Phase 2B (after British Expats launch)

---

## Decision Tree

```
British Expats Validation Results:
├─ Pain confirmed (70%+ rate 7+/10) → BUILD MVP ✅
├─ WTP confirmed (50%+ say €10-20/month) → BUILD MVP ✅
├─ CAC validated (€100 spend → 50+ signups) → BUILD MVP ✅
└─ All three pass? → FULL SPEED TO MVP ✅✅✅

Spain-Morocco Validation:
├─ SME pain confirmed → Proceed to MVP (Phase 2B)
├─ WTP weak → Pivot to remittance-only or pause
└─ Market size smaller than expected → Explore adjacent niches
```

---

## Timeline Summary

| Week | British Expats | Spain-Morocco |
|------|---|---|
| **1-2** | CustDev interviews (20) | - |
| **2-3** | Landing page + ads (€100) | - |
| **3-4** | MVP build (residencia + pension + healthcare) | - |
| **4** | Soft launch + iterate | - |
| **5-6** | Growth momentum + Pro tier launch | - |
| **6-8** | - | Quick validation (10+10 interviews) |
| **9-12** | Optimize + scale CAC | Spain-Morocco MVP (if green light) |

---

## Metrics to Track (British Expats)

- Landing page: CTR, CPC, Email conversion rate
- MVP: Daily Active Users (DAU), feature usage heatmap
- Email list: open rate, click rate, unsubscribe
- Monetization: signups for Pro tier, affiliate clicks (Wise, lawyers)
- Retention: 30-day retention rate (target >60%)

---

## Files to Create

1. ✅ Interview spreadsheet (Google Sheets): participant, pain scores, WTP, quotes
2. ✅ Landing page copy (Notion)
3. ✅ MVP wireframes (Figma)
4. ✅ Feedback form (Typeform)
5. ✅ Growth tracker (Google Analytics + Sheets)

---

**Ready?** Start interviews this week. You'll have clear validation signals in 2 weeks.
