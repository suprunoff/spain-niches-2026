# Actionable Next Steps: Spain PropTech Research

---

## IF YOU WANT TO PURSUE THIS: Phased Execution Plan

### Phase 1: Validation (Week 1-2)

**Objective:** Validate market appetite before building anything.

#### Tourist Rental Compliance (HIGHEST PRIORITY)

1. **Talk to 20 Airbnb hosts**
   - Find them: Facebook groups "Airbnb España", "Alquileres turísticos Madrid", etc.
   - Questions:
     - How much time do you spend on compliance (VUT, VUD, regional taxes)?
     - Have you been delisted or warned?
     - Would you pay €10-30/month to automate this?
     - How many properties do you manage?

2. **Interview 3 property managers** (Airbnb management services)
   - How do they handle compliance across regions?
   - Would they white-label a compliance tool?
   - What's their willingness to pay (revenue share model)?

3. **Contact platforms**
   - Airbnb Spain comms team (innovation@airbnb.com)
   - Booking.com Spain (ask about partner integrations)
   - Understand their compliance verification flow

4. **Validate unit economics**
   - 500K hosts × 20% conversion rate = 100K customers Year 1
   - €150/year = €15M ARR (highly attractive)
   - CAC via organic/social: €20-30 (excellent LTV ratio)

#### Construction PM / Permitting (SECONDARY)

1. **Interview 10 contractors** (arquitectos + constructores)
   - How long does Licencia de Obra process take?
   - How much manual work is documentation?
   - Would you pay €20-50 per permit application?
   - Which regions are you active in?

2. **Talk to 3 municipal governments**
   - How is their permit system evolving?
   - Would they integrate with third-party tool?
   - Any existing digital transformation plans?

#### Rental PM (SEGMENT A: Large landlords)

1. **Interview 5 large landlords** (100+ units)
   - What compliance pain points exist?
   - How do they handle CCC, IRPF, community expenses?
   - Would they pay €500-2,000/month?

---

### Phase 2: MVP Build (Week 3-8)

**Choose ONE category to focus on.** Build minimum viable product.

#### Tourist Rental Compliance MVP (RECOMMENDED)

**What to build (4-6 weeks):**

1. **License Tracker**
   - User registers properties
   - Stores VUT (regional) + VUD (national) IDs
   - Renewal date calendar
   - Email alerts at 60/30 days before expiry

2. **Tax Calculator** (Andalusia first, expand later)
   - Auto-calculate monthly tourist tax based on region
   - Show tax remittance deadline
   - Generate simple PDF report

3. **Compliance Dashboard**
   - Visual status of each property (green/yellow/red)
   - Next action required
   - Documentation checklist

4. **Email Notifications**
   - License expiry warnings
   - Tax remittance reminders
   - Regulatory change alerts (manual email initially)

**Tech stack (fast shipping):**
- Backend: Node.js/Express + Postgres
- Frontend: React/Next.js
- Auth: Auth0 (easy social login)
- Emails: SendGrid
- Hosting: Vercel (frontend) + Railway (backend)

**Estimated effort:** 4-6 weeks for one developer

**Launch plan:**
- Beta with 100 hosts (Facebook group)
- Pricing: €9.99/month (freemium if budget allows)
- Collect feedback, iterate

---

### Phase 3: GTM & Growth (Week 9-20)

#### Tourist Rental Compliance GTM

1. **Content marketing** (€0 cost, high ROI)
   - "Complete Guide to Spanish VUT License 2025"
   - "How to Avoid €60K Fines on Airbnb Rentals in Spain"
   - Target organic search: "VUT compliance", "Spain tourist rental registration", "Airbnb legal Spain"
   - Publish on Medium, LinkedIn, own blog

2. **Paid acquisition** (low CAC)
   - Facebook ads targeting Airbnb hosts in Spain (€20-30 CAC expected)
   - Google Ads on compliance-related keywords (€30-50 CAC)
   - Lifetime value: €600-1,200 (5-year retention) → 4-20x ROAS

3. **Partnerships** (highest leverage)
   - Reach out to Airbnb management services (Friendly Rentals, Mago Homes, etc.)
   - Offer: Revenue share (20-30%) for referrals
   - Potential: 50 partners × 50 referrals = 2,500 customers from partnerships alone

4. **Platform integrations**
   - Zapier integration (trigger alerts from other tools)
   - Notion template (property tracker)
   - Google Sheets integration (export compliance data)

5. **Community building**
   - Spanish property owner associations (CEHA, etc.)
   - LinkedIn group for Spanish real estate investors
   - Monthly webinars on regulatory changes

---

### Phase 4: Scale & Expansion (Month 6+)

1. **Add more regions** (currently just core 3 regions)
   - Expand from Andalusia → Catalonia, Valencia, Madrid, Balearics
   - API integration for each regional system (if possible)
   - Hire contractor familiar with each region's process

2. **Tax automation** (higher-value product tier)
   - Integrate with accounting software (Sage, Contauno, etc.)
   - Auto-file tourist tax remittance (possible in some regions)
   - Price: €19.99/month (up from €9.99)

3. **Platform integrations** (sticky features)
   - Airbnb API integration (auto-pull listings, metadata)
   - Booking.com integration
   - iCal synchronization

4. **International expansion**
   - Portugal (VRU similar system)
   - France (short-term rental rules fragmented)
   - Italy (increasing regulation)

**Year 1 target:** 5K-10K customers × €150/year = €750K-1.5M ARR, 50%+ gross margin

---

## Research Sources to Go Deeper

### Spain-Specific Market Intelligence

1. **Statistical & Regulatory**
   - Ministerio de Transportes, Movilidad y Agenda Urbana (housing ministry)
   - Spanish tax authority (Agencia Tributaria) for tourist tax rules by region
   - Google Trends ("VUT España", "licencia de obras", etc.)

2. **PropTech Ecosystem**
   - Lanzadera (Spanish VC) — investor connections
   - Plug and Play Madrid — accelerator programs
   - CEEB (Spanish business association) — network of SMEs

3. **Industry Associations**
   - AEPVP (Asociación Española de Empresas de Servicios Inmobiliarios)
   - CEHA (Confederación Española de Hogar)
   - Regional construction associations

4. **Data Sources**
   - Idealista.com API (property prices, rentals)
   - Fotocasa API (market data)
   - notarial data (penotariado.com)
   - Regional tourism boards (occupancy data)

### Competitive Intelligence

1. **Track existing competitors**
   - Pragma (comunidad software) — what features drive stickiness?
   - Adminet (HOA) — pricing model, customer count?
   - Habitissimo (renovations) — how did they scale?

2. **Analogous markets**
   - Guesty (vacation rental PM) — how they expanded from 1 region to global
   - Stessa (US rental PM) — how they built compliance features
   - Zoocasa (Canadian RE marketplace) — unit economics

### Customer Research Checklist

**Before writing code, interview these groups:**

- [ ] 20+ Airbnb hosts (compliance pain)
- [ ] 5+ property managers (scaling problem)
- [ ] 3+ municipal governments (permit automation)
- [ ] 5+ large landlords (institutional pain)
- [ ] 2+ platforms (Airbnb, Booking) (partnership potential)
- [ ] 3+ law firms (regulatory expertise)

---

## Financial Projections (Tourist Rental Compliance Example)

### Conservative Scenario
```
Year 1:
  - Customers: 1,000
  - ARPU: €120/year
  - Revenue: €120K
  - Costs: €250K (salaries, marketing, infrastructure)
  - Loss: -€130K

Year 2:
  - Customers: 5,000 (word of mouth + paid ads)
  - ARPU: €150/year (upsell to tax features)
  - Revenue: €750K
  - Costs: €400K (2 people, marketing)
  - Profit: +€350K

Year 3:
  - Customers: 15,000 (partnerships scaling)
  - ARPU: €200/year
  - Revenue: €3M
  - Costs: €800K
  - Profit: +€2.2M
```

### Optimistic Scenario
```
Year 1:
  - Customers: 5,000 (strong launch + partnerships)
  - ARPU: €150/year
  - Revenue: €750K
  - Costs: €300K
  - Profit: +€450K

Year 2:
  - Customers: 25,000 (platform partnership)
  - ARPU: €200/year
  - Revenue: €5M
  - Costs: €1.2M
  - Profit: +€3.8M

Year 3:
  - Customers: 60,000 (international + upsells)
  - ARPU: €300/year
  - Revenue: €18M
  - Costs: €5M
  - Profit: +€13M
```

**Funding request:** €300K-500K for 18-month runway (covers salaries + marketing).

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| **Government builds better VUD portal** | Medium | High | Move fast; build partnerships; focus on enterprise (property managers) |
| **Airbnb/Booking embed compliance natively** | Medium | Medium | Establish strong user base before; focus on multi-region users; expand to Portugal/France |
| **Regional systems improve, reduce pain** | Low-Medium | Medium | Build stickier features (tax automation, scheduling) |
| **Low switching costs** | High | Low | Drive engagement through integrations (Airbnb, accounting software) |
| **Market saturation (too many tools)** | Low | Medium | Move fast; build brand early; focus on niches (property managers) |
| **Currency risk (€ volatility)** | Low | Low | Focus on EUR-based customers; price in EUR |

---

## Key Metrics to Track

### Customer Acquisition
- CAC by channel (organic, paid, partnership)
- Conversion rate (visitor → paying customer)
- Time to first paid customer

### Product
- Feature usage (which features drive engagement?)
- Churn rate (% customers who cancel monthly)
- NPS (Net Promoter Score) — target: >40

### Financial
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Gross margin (target: 70%+)
- Payback period (how long to recover CAC?)

### Market
- Market share (our users / total potential users)
- TAM expansion (launching new regions)
- Pricing elasticity (can we raise prices?)

---

## Final Recommendation

**If launching a Spain PropTech startup in 2026:**

1. **Best option:** Tourist Rental Compliance Automation
   - Clear problem statement
   - Urgent timeline (July 2025 deadline)
   - High switching costs once built
   - Founders can launch with 1 person
   - Clear path to profitability

2. **Validation timeline:** 2-3 weeks of customer interviews
3. **MVP timeline:** 4-6 weeks
4. **GTM timeline:** Start Week 7 (overlap with development)
5. **Profitability timeline:** 18-24 months with €300-500K funding

**Alternative:** If you're an engineer at Airbnb/Booking, push them to build this internally. The compliance problem is massive for their Spain user base.

---

## Resources & Contacts to Pursue

### Investor Connections
- **Plug and Play Madrid** — Stage accelerator (contact: partnerships@plugandplaytech.com)
- **Lanzadera** — Spanish VC specializing in startups (contact: http://www.lanzadera.es)
- **Encomenda VC** — Seed-stage focused (contact: info@encomendavc.com)

### Customer Connections
- **Airbnb Host Associations** — Check Facebook for "Anfitriones Airbnb España" groups
- **Property Manager Associations** — Google "Asociación de gestores de fincas Madrid", etc.
- **Tourism Boards** — Regional tourism boards may have host lists

### Legal/Regulatory Expertise
- Contact 2-3 law firms specializing in Spanish tourism/rental law
- Build advisory board for regulatory credibility

### Technical Partners
- **Outsourced backend:** Upwork (find Spanish-speaking developers, €20-30/hour)
- **Hosting:** Railway.app (easy Postgres + Node.js deployment)
- **Email infrastructure:** SendGrid (easy API)

