/**
 * Legal Tech Spain niches batch
 * Date: 2026-03-02
 * Phase: Discovery (Scoring + Validation Plan)
 *
 * Usage: python3 scripts/add_niches.py tasks/staging/legaltech_batch.js --dry-run
 */

const legalTechNiches = [
  {
    rank: 201,  // Continuing from existing 122 niches
    name: "AI Finiquito Calculator + Consulta Abogado",
    sub: "Severance pay calculator with AI + lawyer consultation network",
    type: "LegalTech",

    // Scoring dimensions (1-10)
    d: 8,  // Demand (3.5M uvollennych/year, 85% search online)
    g: 8,  // Growth (Freemium + lead gen model)
    r: 7,  // Regulatory (Labor law stable)
    s: 8,  // Supply (10+ free calcs but low-quality)
    m: 9,  // Market maturity (Ready to monetize)
    a: 8,  // Adoption (People urgently need this)
    f: 7,  // Funding potential (Easy to bootstrap)
    t: 9,  // Timing (No AI competitors yet)

    score: 8.1,
    mi: 15, mx: 30,  // ARPU estimate: €15-30 per consultation

    tam: "€50-100M/year (3.5M dismissed × 20% × €15-30 ARPU)",
    cac: 3.50,  // CAC estimate for Google Ads + organic
    ltv: 45.00, // LTV: 3 consultations × €15 = €45
    churn: "Low (one-time purchase + network effects from lawyers)",

    y1: "€100K-500K GMV (100-300 consultations × €15-30)",
    y1n: 250.00,

    gap: "No AI-powered finiquito calc in Spain; Clio (USA) doesn't serve ES market",
    risks: "Depends on lawyer network (must recruit 50-100 laboralistas); Free competitors (Finiqueitor, Calculadora Finiquito); Low ARPU",
    gtm: "SEO (finiquito calculator keywords), Google Ads, lawyer referrals, Reddit/Twitter outreach to dismissed people",
    mvpScope: "GPT fine-tune (10K finiquitos) + landing page + WhatsApp chat + billing",

    dd: 0,  // Deep dive days (0 = not started)
    status: "scored",
  },

  {
    rank: 202,
    name: "Digital Due Diligence Inmobiliaria (Nota Simple + Cargas + Plusvalía)",
    sub: "One-stop platform for real estate legal due diligence automation",
    type: "LegalTech",

    d: 9,  // Demand (400K real estate deals/year)
    g: 8,  // Growth (Automation opportunity)
    r: 7,  // Regulatory (Registry APIs stable)
    s: 8,  // Supply (100% manual; Idealista only does plusvalia)
    m: 8,  // Market maturity (Clear willingness to pay)
    a: 7,  // Adoption (Slower than finiquito; business decision)
    f: 7,  // Funding potential
    t: 8,  // Timing (No integrated solution exists)

    score: 8.3,
    mi: 200, mx: 500,  // Per transaction or monthly subscription

    tam: "€120-240M/year (400K deals × 30% using service × €200-500)",
    cac: 50.00,  // CAC: lawyer outreach + agency partnerships
    ltv: 400.00, // LTV: €200-500 per deal, 5+ deals/lawyer/year
    churn: "Very low (transactional, high stickiness for repeat buyers)",

    y1: "€250K-2M GMV (1.2K-4K transactions × €200-500)",
    y1n: 1200.00,

    gap: "No integrated solution combining nota simple + cargas + plusvalia + IAJD for all 17 regions; Idealista only sells real estate, not legal",
    risks: "Registry API access issues (need legal cover); Cargas detection requires manual verification; Plusvalia rules vary by municipio (17+ versions)",
    gtm: "B2B (Idealista, Fotocasa, Banks, Notarios as partners); Direct to lawyers; Real estate agents channel",
    mvpScope: "Nota simple scraper (3 regions: Madrid, Barcelona, Valencia) + Plusvalia calculator + Cargas risk matrix + abogado network integration",

    dd: 0,
    status: "scored",
  },

  {
    rank: 203,
    name: "AI Contract Analyzer - Arrendamientos",
    sub: "AI-powered rental contract risk analysis & recommendations (tenant & landlord)",
    type: "LegalTech",

    d: 8,  // Demand (4.2M rental units; 60% sign without lawyer review)
    g: 8,  // Growth (Contract volumes growing)
    r: 6,  // Regulatory (Some uncertainty in tenant protection laws)
    s: 9,  // Supply (No AI solution; only templates)
    m: 7,  // Market maturity (Awareness low, but growing)
    a: 7,  // Adoption (People fear changing contracts; need education)
    f: 8,  // Funding potential
    t: 8,  // Timing (No AI competitors)

    score: 7.8,
    mi: 20, mx: 49,  // Per consultation

    tam: "€80-150M/year (4.2M renters × 30% using service × €20-49)",
    cac: 5.00,  // Organic + SEO (contract analysis keywords)
    ltv: 39.00, // LTV: 1-2 consultations × €20-49
    churn: "Medium (transactional; high CAC dependency)",

    y1: "€200K-1.5M GMV (10K-75K consultations × €20-49)",
    y1n: 20000.00,

    gap: "No AI-powered contract analyzer specialized for Spanish rental law; Jotform (generic); Iweaver (templates only)",
    risks: "Low ARPU; Adoption inertia (people fear lawyer fees); Regulation changes (Ley de Arrendamientos still evolving)",
    gtm: "SEO (contrato arrendamiento analysis), Google Ads, real estate agent channel, landlord associations",
    mvpScope: "GPT fine-tune (50K Spanish rental contracts) + one-click analyzer + risk scoring + lawyer consultation booking",

    dd: 0,
    status: "scored",
  },

  {
    rank: 204,
    name: "CRM + Billing + Time Tracking para Despachos de Abogados",
    sub: "Specialized CRM for law firms with Lexnet integration, time tracking, auto-invoicing",
    type: "LegalTech",

    d: 7,  // Demand (60K despachos; 70% using Word/Email)
    g: 6,  // Growth (Slower adoption in law sector)
    r: 7,  // Regulatory (Stable)
    s: 7,  // Supply (Kleos, SuDespacho mature; Holded generic)
    m: 7,  // Market maturity
    a: 6,  // Adoption (Slow; 2-4 month sales cycle)
    f: 6,  // Funding potential (Saturated market)
    t: 4,  // Timing (Kleos + SuDespacho will add AI soon)

    score: 7.2,
    mi: 50, mx: 100,  // Monthly subscription per despacho

    tam: "€30-60M/year (60K despachos × 30% willing to upgrade × €50-100/month)",
    cac: 80.00,  // High CAC: direct sales, demos, trials
    ltv: 720.00, // LTV: €50-100 × 12 months × 1.2 retention
    churn: "Medium (switching costs exist; price sensitivity)",

    y1: "€300K-2M GMV (500-1.5K despachos × €50-100/month)",
    y1n: 750.00,

    gap: "Lexnet integration (missing from Kleos/SuDespacho); WhatsApp CRM for Spanish BizDev; Better time tracking UX",
    risks: "HIGH barrier to entry (Lexnet integration = 3-6 months); Kleos + SuDespacho have 96K+ users; Adoption slowness; Price sensitivity",
    gtm: "Direct to despachos (cold email + WhatsApp), bar associations, legal software aggregators",
    mvpScope: "Generic CRM + time tracking + invoicing (3 months); Lexnet integration in beta (months 4-6)",

    dd: 0,
    status: "scored",
  },

  {
    rank: 205,
    name: "Compliance Document Marketplace (RGPD + LAC + VeriFactu + Contracts)",
    sub: "Interactive wizard + marketplace of legal templates for SMBs (RGPD, Ley Atención Cliente, contracts)",
    type: "LegalTech",

    d: 8,  // Demand (3.2M SMBs; LAC deadline Dec 2026; VeriFactu deadline Jan 2027)
    g: 7,  // Growth (Regulatory-driven)
    r: 9,  // Regulatory (Multiple hard deadlines 2026-2027)
    s: 8,  // Supply (Facilita RGPD free but incomplete; no LAC/VeriFactu)
    m: 8,  // Market maturity (Clear need)
    a: 8,  // Adoption (Regulatory pressure)
    f: 8,  // Funding potential
    t: 9,  // Timing (Deadlines Dec 2026 - Jul 2027)

    score: 7.4,
    mi: 100, mx: 200,  // One-time or annual subscription

    tam: "€40-80M/year (3.2M SMBs × 50% needing templates × €99-199)",
    cac: 20.00,  // Low CAC: organic SEO, accountants as channel
    ltv: 150.00, // LTV: €99-199 per customer, moderate repeat/upgrade
    churn: "Low after deadline (regulatory compliance is sticky)",

    y1: "€500K-4M GMV (5K-20K SMBs × €99-199)",
    y1n: 8000.00,

    gap: "No integrated solution for RGPD + LAC + VeriFactu + contracts in one place; Facilita RGPD free but basic; Complylaw expensive (€500+)",
    risks: "Free alternatives (Facilita RGPD from AEPD); Accountants may capture value; Low awareness of LAC/VeriFactu requirements",
    gtm: "Accountants/gestorias as channel, SEO (compliance documents, VeriFactu, LAC), Google Ads targeting SMBs, LinkedIn outreach",
    mvpScope: "Interactive wizard (Typeform) + 25-30 templates (RGPD, LAC, VeriFactu, NDA, freelance contracts) + versioning + notario integration",

    dd: 0,
    status: "scored",
  },

  {
    rank: 206,
    name: "SaaS para Laboralistas (ERE/ERTE + Finiquitos + Trámites Judiciales)",
    sub: "Specialized software for labor law specialists: ERE/ERTE handling, severance calc, judicial filing",
    type: "LegalTech",

    d: 6,  // Demand (500 specialized laboralistas; ~3K ERE/ERTE/year)
    g: 5,  // Growth (Niche market)
    r: 7,  // Regulatory (Stable labor law)
    s: 8,  // Supply (Kleos, MN Program used; no specialized)
    m: 5,  // Market maturity (Very niche)
    a: 5,  // Adoption
    f: 5,  // Funding potential (Too small)
    t: 6,  // Timing (OK)

    score: 6.5,
    mi: 100, mx: 200,  // Monthly per laboralista

    tam: "€15-30M/year (500 laboralistas × 30% interested × €100-200/month)",
    cac: 150.00,  // High CAC: niche market
    ltv: 1440.00, // LTV: €100-200 × 12 months
    churn: "Medium",

    y1: "€100K-400K GMV",
    y1n: 200.00,

    gap: "Too narrow; generic CRM (Kleos) covers 80% of needs",
    risks: "Very niche (500 target customers); High CAC; Kleos/SuDespacho will add specialized features",
    gtm: "Direct to laboralistas (cold outreach), bar associations, labor law forums",
    mvpScope: "ERTE/ERE calculator + template library + judicial filing automation",

    dd: 0,
    status: "scored",
  },

  {
    rank: 207,
    name: "Nota Simple Aggregator + Cargas Detector",
    sub: "Automated scraper for nota simple from 17 regional property registries + hidden charges detection",
    type: "LegalTech",

    d: 7,  // Demand (400K real estate deals)
    g: 6,  // Growth (Incremental)
    r: 7,  // Regulatory (Stable)
    s: 8,  // Supply (100% manual; Registro API limited)
    m: 6,  // Market maturity (Overlaps with due diligence)
    a: 6,  // Adoption
    f: 6,  // Funding potential
    t: 6,  // Timing

    score: 6.8,
    mi: 50, mx: 100,  // One-time per property

    tam: "€20-40M/year (400K deals × 50% × €50-100)",
    cac: 30.00,
    ltv: 60.00,
    churn: "Very low (transactional)",

    y1: "€200K-1M GMV",
    y1n: 500.00,

    gap: "Overlaps with Digital Due Diligence (Rank 202); Should combine into single product",
    risks: "Registry API restrictions; Delayed updates (5-10 min lag); Cannibalization with due diligence product",
    gtm: "B2B (registries, notarios), direct to lawyers",
    mvpScope: "Scraper for 3 regions + carges matrix",

    dd: 0,
    status: "scored",
  },

  {
    rank: 208,
    name: "AI Mediación de Divorcios + Custodia (Online)",
    sub: "AI-powered mediation platform for divorce settlements with custody & alimony calculations",
    type: "LegalTech",

    d: 6,  // Demand (150K divorces/year in Spain)
    g: 5,  // Growth (Market saturated with traditional mediators)
    r: 8,  // Regulatory (New mediation requirements from Apr 2025)
    s: 7,  // Supply (Pactio, Divorcio Consciente, Easyabogado exist)
    m: 6,  // Market maturity (Traditional mediators still dominate)
    a: 5,  // Adoption (People prefer human mediators)
    f: 5,  // Funding potential
    t: 6,  // Timing

    score: 6.2,
    mi: 200, mx: 500,  // Per mediation session

    tam: "€30-60M/year (150K divorces × 30% × €200-500)",
    cac: 100.00,
    ltv: 300.00,
    churn: "Very low (one-time)",

    y1: "€200K-1.5M GMV",
    y1n: 500.00,

    gap: "Traditional mediators strong; AI perceived as cold for emotional issues; Pactio already dominant",
    risks: "Emotional resistance to AI; Regulatory requirement (Apr 2025) may favor human mediators; High CAC; Pactio well-entrenched",
    gtm: "SEO (divorcio mediación online), Google Ads, lawyer referrals, family associations",
    mvpScope: "AI chatbot (settlement proposal) + human mediator matching + video call integration",

    dd: 0,
    status: "scored",
  },
];

// Export for add_niches.py
module.exports = { niches: legalTechNiches };
