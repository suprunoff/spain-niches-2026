# LATAM Diaspora Platform Spain — Next Actions

**Date:** March 2, 2026
**Status:** Discovery complete → Validation phase
**Owner:** You
**Timeline:** 2–3 weeks

---

## Immediate (This Week)

### Research & Learning (4 hours)

- [ ] Read DEEP-DIVE-LATAM-DIASPORA.md (sections 1–8) — 1.5 hours
  - Understand market size, unit economics, competitors

- [ ] Explore competitors (online, 30 min each)
  - [ ] Create account on Directorio Latinos, CNL, La Red de Hispanos
  - [ ] Test UX, pricing, search functionality
  - [ ] Screenshot key pain points

- [ ] Search for LATAM groups on Facebook (1 hour)
  - [ ] "Venezolanos en Madrid" (100K+ members)
  - [ ] "Colombianos Barcelona" (50K+ members)
  - [ ] "Ecuatorianos en España" (20K+ members)
  - [ ] Join 2–3 largest groups (lurk, don't spam)
  - [ ] Screenshot common questions/pain points

- [ ] VeriFactu research (1 hour)
  - [ ] Google: "VeriFactu compliance SaaS España"
  - [ ] What are SMBs actually struggling with?
  - [ ] Could this be a feature in LATAM platform?

### Outreach (5 hours)

- [ ] Find 20 LATAM businesspeople to interview (LinkedIn + referrals)
  - Target: Madrid, own business, self-employed, 30–50 years old
  - Message template (below)
  - Aim for 5 interviews booked by end of week

- [ ] Draft interview guide (30 min)
  - See LATAM-DIASPORA-QUICK-REFERENCE.md (Validation Criteria section)

---

## This Week — Interview Outreach Template

**Subject:** 15-min discovery call about LATAM businesses in Spain

**Message:**

> Hola [Name],
>
> Estoy investigando las necesidades de empresarios latinoamericanos en España. ¿Tendrías 15 minutos para una llamada? Me gustaría entender:
>
> 1. Cómo encontraste tus primeros clientes
> 2. Dónde envías dinero a tu país
> 3. Tu mayor dolor como empresario latino en España
> 4. Si un directorio + job board te sería útil
>
> No es venta, es pura investigación. Café ☕ or Zoom?
>
> Gracias,
> [Your name]

---

## Week 2: Validation Interviews (10 hours)

### Interview Execution
- [ ] Conduct 5 interviews (2 hours total)
  - Record (if permission) or take detailed notes
  - Ask all 5 critical questions (see Quick Reference)
  - Ask for referrals at end ("Know 2 other business owners I should talk to?")

- [ ] Transcribe/summarize learnings (1.5 hours)
  - Document pricing willingness
  - Document pain points by frequency
  - Document remittance behaviors
  - Document job board demand

- [ ] Debrief (1 hour)
  - Combine insights from 5 interviews
  - Update VALIDATION-SUMMARY.md (create new file)

### Competitive Testing (3 hours)
- [ ] Use Directorio Latinos for 1 week
  - Note what works, what doesn't
  - Screenshot UX issues

- [ ] Contact Wise/Remitly API team
  - Can you get affiliate/API access?
  - What's the onboarding process?

- [ ] Find 3 remittances providers + costs
  - How much does it cost to send €300 to Colombia? Venezuela? Ecuador?
  - Create comparison table

---

## Week 3: Analysis & Decision (5 hours)

### Synthesize Validation Data
- [ ] Create VALIDATION-INTERVIEW-SUMMARY.md
  - 20 interview notes (or 5 if only 5 conducted)
  - Aggregated insights (pricing, pain, demand)
  - Go/No-Go decision matrix

- [ ] Go/No-Go Decision
  - Does data support 8.2/10 score?
  - Are thresholds met? (1K organically, 4.2+ rating, etc.)
  - **Recommend:** GO if >70% validation hits, NO-GO if <50%

### If GO Decision:
- [ ] Define MVP feature set (narrow scope)
  - See MVP section in DEEP-DIVE
  - Pick: Directory OR Job Board OR Remittances (not all 3)

- [ ] Rough tech architecture
  - Stack: Next.js? Firebase? Supabase?
  - Wireframe 3–4 key pages (Figma)

- [ ] Timeline to MVP
  - Week 1–2: Design + database
  - Week 3–4: Core build
  - Week 5: Soft launch (500 testers)

### If NO-GO Decision:
- [ ] Document learnings in LATAM-DIASPORA-DEEP-DIVE.md (update)
- [ ] Pivot hypothesis (what would make this work?)
- [ ] Archive in research/rejected-niches/

---

## Ongoing (Throughout 3 weeks)

### Monitor & Document
- [ ] Check WhatsApp groups daily (5 min)
  - What problems are people posting about?
  - What complaints about current services?
  - Document 3–5 best quotes

- [ ] Reddit search: r/spain + "latinoamericanos" or "venezolanos" (daily, 5 min)
  - Pain points mentioned?
  - Sentiment about current services?

- [ ] Google Trends
  - Search volume for "directorio negocios latinos España"?
  - Trending queries?

---

## Deliverables (Output)

By end of Week 3, you should have:

1. **VALIDATION-INTERVIEW-SUMMARY.md** (new file)
   - 5–20 interview transcripts/notes
   - Aggregated insights
   - Go/No-Go decision

2. **Updated DEEP-DIVE-LATAM-DIASPORA.md**
   - Add "Validation Results" section
   - Update unit economics if needed
   - Document key learning

3. **Decision email**
   - "GO: proceeding to MVP" OR "NO-GO: pivoting to [other niche]"
   - 3 reasons why

4. **If GO:**
   - MVP spec (Figma wireframes)
   - Tech stack doc
   - Team/budget needed

---

## Success Metrics

**End of Week 3:**
- [ ] 5+ interviews completed (aim for 20)
- [ ] Pricing hypothesis validated (>50% willing to pay €20?)
- [ ] Remittances pain identified (current providers rated <3.5?)
- [ ] Competitor UX issues documented (3+ pain points)
- [ ] Go/No-Go decision made
- [ ] Next phase clear (MVP spec or pivot decision)

---

## Resources

**Files created for this niche:**
- `/Users/sprnff/Projects/research/02-research/spain-niches/DEEP-DIVE-LATAM-DIASPORA.md` ← Primary (2,000 words)
- `/Users/sprnff/Projects/research/02-research/spain-niches/INDEX-LATAM-DIASPORA-2026.md` ← Navigation
- `/Users/sprnff/Projects/research/02-research/spain-niches/LATAM-DIASPORA-QUICK-REFERENCE.md` ← 2-min summary
- `tasks/staging/latam-diaspora-platform.js` ← Data for DB import

**Supporting research:**
- Spain macro context: `02-research/spain-national/`
- Related niches: `02-research/spain-niches/DIRECTORY*.md` (directory deep dives)
- Tools: `01-frameworks/NICHE_ANALYSIS_FRAMEWORKS.md` (JTBD, TAM calculations)

---

## Notes for Next Session

- **If pivoting from LATAM:** Update DEEP-DIVE with why (key learnings), archive as rejected
- **If proceeding:** MVP builds starts Week 4, expect 6–8 week timeline to soft launch
- **Budget needed:** €50K (MVP) + €200K (Year 1 ops) if validation succeeds
- **Team:** 2 engineers + 1 PM minimum (can be founder as PM)

---

**Owner action:** Book 5 interviews by Friday. Slack/email results by end of Week 3.
