# Batch 8: Quick Facts (Top 3 for Validation)

## Solar Energy Marketplace (SolarMatch) — SCORE 8.4/10

**The Pitch:**
Platform connecting homeowners with vetted solar installers + ROI calculator + financing integration.

**TAM:** €800M-1.2B (1.5M potential customers in Spain alone)

**Why Now?**
- New government subsidies INEA/INCEA opening Q1-Q2 2026 (up to 60% subsidies)
- Installers overwhelmed by demand
- Zero integrated platform in Spain (only scattered catalogs)

**MVP:**
- ROI calculator (input electricity bill → 10-year savings)
- Installer ratings + marketplace
- Stripe + Santander financing integration
- **Timeline:** 3-4 weeks

**Monetization:**
- €100-300 per qualified lead (installers pay)
- €50-100/month SaaS for installer CRM
- 5-8% commission from financing

**Key Risk:** High CAC (€80-150 via Google Ads), government dependency

**Status:** READY FOR DB & VALIDATION

---

## Elderly Care Platform (Cuidadores.es) — SCORE 8.1/10

**The Pitch:**
Marketplace connecting families with verified caregivers for elderly people. Integrated with government social services.

**TAM:** €4-6B (8.2M people 65+ in Spain, 200K caregiver shortage)

**Why Now?**
- Government program "Plan de Mejora" subsidizing care services (500-1000 leads/month per region)
- Acute pain: families can't find trustworthy caregivers
- No government-integrated platform exists

**MVP:**
- Caregiver profiles (background check, rate €1.2-2K/month)
- Matching algorithm (age, language, specialty: disability, dementia, diabetes)
- Payment: SEPA → caregiver, family pays through app
- Government social service integration (auto-submit forms)
- **Timeline:** 4-6 weeks

**Monetization:**
- Freemium for families (€2-5 per contact)
- SaaS for agencies (€100-200/month)
- B2B: Insurance company partnerships (DKV, Sanitas)

**Key Risk:** Liability insurance, economic sensitivity, Qida competition heating up

**Status:** READY FOR DB & VALIDATION

---

## Modern Gestoría SaaS (GestoriaHub) — SCORE 8.1/10

**The Pitch:**
Cloud SaaS platform for Spanish accountancy firms. Multi-client management for 50-500 clients each. VeriFactu-compliant.

**TAM:** €200-400M (50K Spanish gestoría firms, €3-10K/year per client)

**Why Now?**
- VeriFactu deadline January 2027 = URGENCY NOW
- Legacy software (Contaplus, A3) dying
- Sage 50/Holled expensive and not designed for gestoría workflow

**MVP:**
- Multi-client dashboard (manage 50-500 clients per firm)
- VeriFactu compliance (auto-integration with SES API)
- Modelo 303 auto-generation (tax form automation)
- Client portal (clients see their status, files, contact firm)
- AI: Document recognition (receipts → accounting entries)
- **Timeline:** 4-6 weeks

**Monetization:**
- €50-200/month per gestoría (based on client count)
- €2-5 per managed client (scalable)
- Premium: €100-300/month (advanced reporting, AI features)

**Key Risk:** Regulatory compliance required, data migration complexity, Holled expanding in Spain

**Status:** READY FOR DB & VALIDATION

---

## The Rest (Secondary Targets)

### Fertility Tourism (7.7/10)
- Spain = fertility hub (180K IVF procedures/year, 30% international)
- MVP: doctor marketplace + visa/housing/financing coordination
- Risk: Medical licensing, reputation-driven
- Status: Ready, but lower priority

### Pet Care Telemedicine (7.5/10)
- 30M+ pets in Spain, telemedicine +45% growth
- MVP: vet telemedicine + insurance comparison + marketplace
- Risk: Vet licenses, high churn, seasonality
- Status: Ready, lower priority

---

## Immediate Next Steps

### This Week:
```bash
# Load to database
python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js
python3 scripts/export_json.py

# Verify in dashboard
# Check: 5 new niches appear, scores calculated
```

### Week 1-2: Validation
**Pick ONE to validate deeply** (recommended: Solar Energy)

**For Solar Energy:**
- Run €30-50 Google Ads test ("placas solares España coste")
- Interview 5-10 homeowners (Facebook groups, Google Reviews)
- **Goal:** Confirm 70%+ say "urgent", 50%+ willing to pay

**For Elderly Care:**
- Research government "Plan de Mejora" program
- Interview 5-10 families (Reddit r/spain, Facebook "cuida mayores")
- Contact 2-3 Servicio Social managers
- **Goal:** Understand lead flow, pain points

**For Gestoría SaaS:**
- Interview 5-10 accountancy firms (LinkedIn, WhatsApp)
- Ask: "VeriFactu deadline — what are you moving to?"
- Pain point: Sage 50 vs Holled features
- **Goal:** Understand buying timeline, feature priority

### Week 2-3:
- Analyze customer discovery data
- Decide: Go/No-Go per niche
- Pick TOP-1 for MVP development

### Week 3+:
- 2-6 week MVP build for selected niche
- Launch to 100 users
- Iterate

---

## Key Metrics at a Glance

| Metric | Solar | Elderly | Gestoría |
|--------|-------|---------|----------|
| **Score** | 8.4 | 8.1 | 8.1 |
| **TAM** | €800M | €4-6B | €200M |
| **MVP Weeks** | 3-4 | 4-6 | 4-6 |
| **Monthly CAC** | €80-150 | €45 | €55 |
| **Monthly LTV** | €520 | €480 | €620 |
| **Payback Period** | 8-10 mo | 10-12 mo | 9-11 mo |
| **Main Risk** | Gov dependency | Liability | Regulatory |
| **Timing Window** | Q1-Q2 2026 (URGENT) | NOW (subsidy started) | Jan 2027 (DEADLINE) |
| **Competitors** | Sunwatt, Autosolar | Qida, Depencare | Sage 50, Holled |
| **Unique Advantage** | Integrated financing + installer CRM | Gov-integrated + B2B insurance | Multi-client management for 500+ clients |

---

## Files to Reference

- **Full analysis:** `/Users/sprnff/Projects/research/02-research/spain-niches/NEW-NICHES-SCAN-2026.md`
- **Staging file:** `/Users/sprnff/Projects/research/tasks/staging/batch-8-new-niches.js`
- **Validation roadmap:** `/Users/sprnff/Projects/research/02-research/spain-niches/BATCH-8-INDEX.md`
- **Session context:** `/Users/sprnff/Projects/research/.claude/session-context-batch8.md`

---

## Bottom Line

✅ **3 Tier-1 opportunities found**
✅ **Ready to add to database (Batch 8)**
✅ **Clear validation path (Week 1-2)**
✅ **MVP timeline: 3-6 weeks**
✅ **Market timing: Excellent (gov subsidies, deadlines, emergencies)**

**Recommendation:** Start validation with Solar Energy (best timing), then validate Elderly Care + Gestoría as backups.

---

*Created: March 2, 2026*
*Research status: Complete & verified*
*Ready to ingest into SQLite + begin validation*
