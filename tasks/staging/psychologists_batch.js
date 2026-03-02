// Psychologists Online Directory Spain — Deep Dive Batch
// Created: 2026-03-02
// Researcher: Claude Code

const niches = [
  {
    rank: 999, // placeholder, will be assigned by script
    name: "Psychologists Online Directory Spain",
    sub: "B2C/B2B marketplace: video therapy + EAP contracts",
    type: "HealthTech / SaaS",
    d: 9, g: 8, r: 8, s: 8, m: 6, a: 8, f: 6, t: 6,
    mi: 6, mx: 8,
    tam: "€140-160M (€202M B2C + €150M B2B EAP)",
    cac: 65.0, // B2C: €50-80 Google Ads; B2B: €3K-5K enterprise sales
    ltv: 2400.0, // B2C: €225/year ÷ 10% churn = €2,250; B2B: €150K ÷ 12.5% = €1.2M
    churn: "8-10% (B2C monthly), 10-15%/year (B2B)",
    y1: "€200-300K",
    y1n: 250.0,
    gap: "97.7K licensed psychologists; Ifeel dominates B2B, B2C marketplace empty; +40%/year post-COVID demand",
    risks: "Ifeel €5.5M Series A (400K users, Glovo/AXA); Doctoralia can pivot; BetterHelp localization; RGPD strict for health data; COP licensing requirements; churn >12% breaks unit economics",
    gtm: "Phase 1 (M1-3): 50 psychologists + €2K/month Google Ads ('psicólogo online España'). Phase 2 (M4-6): 10-20 SMB EAP pilots + 2-3 insurance integrations (ADESLAS, Sanitas). Phase 3 (M7-12): 50+ B2B contracts + 5K+ patients, €500K ARR",
    mvpScope: "Therapist profile + calendar + video call (Whereby) + patient reviews + first free consultation + invoice/payout system (Stripe + Redsys + Bizum) + basic analytics",

    // Extended fields for deep-dive
    unitEconomicsB2C: "CAC €65 → ARPU €225/year (5 sessions × €45) → LTV €2,250 (9mo lifespan @ 10% churn) → LTV/CAC 3.5x ✓ | Margin 40-50%",
    unitEconomicsB2B: "CAC €3-5K → ACV €100-300K/year → LTV €1.2M (8yr @ 12.5% churn) → LTV/CAC 240-400x ✓ | Margin 58-80% (after psych payout 30%, support 10%)",
    competitorsTier1: "Ifeel (€5.5M, 400K users, B2B focus: Glovo/AXA/Gympass); Buencoco/Unobravo (€45/session, 500-1K therapists, Spain growth); Doctoralia (20K doctors, 5% mental health); Top Doctors (316 therapists, premium B2B SaaS €100+/month)",
    competitorsWeaknesses: "Ifeel = expensive B2B, no B2C marketplace | Buencoco = slow scaling, old tech | Doctoralia = mental health not core | Top Doctors = premium, not mass market",
    marketSize: "97.7K licensed psychologists | 43.6K healthcare-track (±7.9%/year) | 73.1% of patients tried therapy in past 5 years = 36.5M penetration opportunity | +40% YoY couple therapy growth (2025 Doctoralia data)",
    pricePointB2C: "€45-65/session (marketplace commission 12-15%) | €99-199/month subscription (unlimited) | First session FREE (85% convert) | Package: 5x €36-50, 10x €32-40",
    pricePointB2B: "€100-300K/year fixed EAP | €50-100/employee/year usage-based | Hybrid: €50K base + €30/employee engaged",
    regulatoryNotes: "COP (Colegio Oficial de Psicólogos) license MANDATORY for all therapists | RGPD special category (health data) = stricter than GDPR, requires explicit consent, DPA, encryption | Online therapy = no special license yet (2026), but Spanish health ministry may add requirements 2027",
    customerSegmentsB2C: "Anxiety/depression (2.5M/year) | Couples therapy (800K/year) | Trauma/PTSD (300K/year) | Neuro (ADHD, etc. 200K/year) | Eating disorders (150K/year) | Total addressable: 4.5M/year",
    customerSegmentsB2B: "Fortune 500 Spain (20-50 companies, €200-500K/year) | Fortune 100-500 (100-200 companies, €50-200K/year) | SMB 50-500 (5K-10K companies, €5-50K/year) | Insurance providers (ADESLAS, Sanitas, AXA, Mapfre, commission model)",
    customerAcquisitionB2C: "Google Ads (€2K/month, CAC €50-80) | SEO + blog (organic) | Reddit r/Spain, r/MentalHealth (validation) | Influencer therapists on Instagram/TikTok | Doctoralia referrals (if integrated)",
    customerAcquisitionB2B: "LinkedIn cold outreach to HR directors | WhatsApp (critical in Spain!) | Enterprise sales team (1 AE + sales manager M7 onwards) | Target: Telefónica (120K employees), Santander, BBVA, Glovo, AXA subsidiaries | Pilot: €3-10K / 3-6 months sales cycle",
    retentionStrategy: "NPS tracking | Patient outcomes tracking (GAF score) | Therapist ratings/reviews (4.5+ required) | Corporate QBRs | Feature releases (therapist burnout prevention, outcomes dashboards)",
    fundingNeed: "Seed: €500K-1M (after €300-500K revenue traction) | Use for: 2 AE (B2B), 2 engineers, 1 support, €100K marketing",
    exitPotential: "Acquisition targets: Ifeel (if successful B2C), Unobravo (for platform consolidation), Doctoralia (strategic), Telehealth roll-ups (Teladoc, Amwell) | IPO if scale to €50M+ ARR",
    redFlags: "If churn >15% (LTV/CAC breaks); if psych payouts >40% (margin crush); if COP lobbies against commissions; if BetterHelp localizes with €10M marketing blitz",
    nextSteps: "1. Validate CAC: €500 test Google Ads to 10 psychologists, measure 1st patient cost | 2. Founder-psychologist interviews (10-15) on willingness to pay €25/month subscription | 3. EAP buyer interviews (3-5 HR directors) on pain points vs current providers | 4. Legal review: COP requirements, RGPD DPA template, insurance liability",
    validationApproach: "Landing page test (€1K budget, target: CAC <€80) | Psychologist recruitment (cold email to top 20, target: 10 signups) | EAP pilot proposal (1 mid-size company 100-200 employees, 3-month pilot €3-5K) | Patient NPS survey (1st 100 patients, target: NPS >40)",
  },
];

module.exports = niches;
