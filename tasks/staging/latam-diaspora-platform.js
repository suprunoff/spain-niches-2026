// LATAM Diaspora Platform Spain — Directory + Services + Remittances Hub
// Scoring: d=9, g=8.5, r=8, s=7, m=8.5, a=8, f=8, t=8.5 → score 8.2

export const niches = [
  {
    name: "LATAM Diaspora Platform Spain",
    sub: "Directory + Services + Remittances Hub",
    type: "SaaS / Marketplace",
    d: 9,  // demand: 4.7M people, 50K businesses, €2B/year remittances
    g: 8.5, // gap: No dedicated platform for LATAM-specific needs (language, culture, trust)
    r: 8,  // retention: Multi-sided marketplace (sticky, network effects)
    s: 7,  // seasonality: Remittances stable year-round, business growth seasonal
    m: 8.5, // market: €235M TAM, €2-5M realistic SAM
    a: 8,  // acquisition: WhatsApp groups (organic), SEO (directory keywords), viral loop
    f: 8,  // founder fit: Product + community building, needs marketing + partnerships
    t: 8.5, // timing: VeriFactu deadline (2027) creates compliance pain, wave of LATAM entrepreneurs
    score: 8.2,
    mi: 1500,
    mx: 32000,
    tam: "€235M/year (4.7M LATAM × €50 ARPU) / €10.7B remittances market opportunity",
    cac: 10,
    ltv: 480,
    churn: "20% annual (directory), 35% (job seekers), high for remittances partners (switching)",
    y1: "€500K–1.2M MRR within 12 months (directory 30%, services 10%, remittances 50%)",
    y1n: 1000,
    gap: "No LATAM-specific directory (culture, language, trust) | No job board for Spanish + LATAM cultural needs | No remittances aggregator (Wise, Remitly fragmented) | Services marketplace missing (compliance help for VeriFactu, NIE, registrations)",
    risks: "Network effects critical (chicken-egg problem) | Remittances affiliate war (Wise, Remitly margins shrinking) | Regulatory (PSD2, AML/KYC if handling money) | Cultural (trust hard to build in marketplace)",
    gtm: "Phase 1 (Week 1-4): Seed 1K businesses via Facebook/WhatsApp groups ('Venezolanos en Madrid', 'Colombianos Barcelona'). Phase 2 (Week 5-12): SEO for 'electricistas venezolanos Madrid', 'abogados colombianos España'. Phase 3 (Month 4+): Paid (Google Ads €5K/month, Instagram €3K/month), partnerships with consulates + NGOs. Phase 4 (Month 6+): Expansion to Barcelona, Valencia, other EU cities.",
    mvpScope: "Phase 1 (4 weeks, 2 eng): Directory (search, profiles, reviews, WhatsApp), Remittances aggregator (Wise API). Phase 2 (8 weeks): Services marketplace (freelancers + small firms), job board (employer posting). Phase 3 (12 weeks): Analytics for businesses, email campaigns, B2B SaaS features (VeriFactu helper).",
    dd: 0,
    status: "scored"
  }
];

export const competitors = [
  {
    name: "Directorio Latinos",
    url: "https://www.directoriolatinos.com/",
    type: "Directory",
    funding: null,
    weakness: "Old interface (pre-2020), no mobile optimization, no WhatsApp integration, no review system (only listings), no monetization beyond simple ads, very low engagement",
    pricing: "Free listings (ads pay model?)",
    notes: "Market exists but product is stale. Easy displacement with modern UX + WhatsApp."
  },
  {
    name: "Conexión de Negocios Latinos (CNL)",
    url: "https://conexiondenegocioslatinos.com/",
    type: "Directory + Events",
    funding: "Private",
    weakness: "Event-driven (physical networking), not online-first, slow scalability, relies on monthly meetups (hard to grow remotely), no job board, no services marketplace",
    pricing: "Membership + event fees",
    notes: "Community builder, not tech platform. Vulnerable to online competitor."
  },
  {
    name: "La Red de Hispanos",
    url: "https://lareddehispanos.com/",
    type: "Directory",
    funding: null,
    weakness: "5K businesses only (tiny), no mobile app, poor SEO, no reviews, no WhatsApp, very low traffic",
    pricing: "Free",
    notes: "Dormant project. Easy space to own."
  },
  {
    name: "Wise (remittances)",
    url: "https://wise.com/es/",
    type: "Fintech / Remittances",
    funding: "Public (IPO £12.2B valuation)",
    weakness: "Not LATAM-specific, no directory, no services, no job board, generic experience, high fees (0.4-0.7% + fixed) vs. competitors",
    pricing: "0.4-0.7% + fixed fee",
    notes: "Dominant but not exclusive. Opportunity: aggregate Wise + Remitly + WorldRemit to show best rate per country."
  },
  {
    name: "Remitly",
    url: "https://www.remitly.com/",
    type: "Fintech / Remittances",
    funding: "Public (NASDAQ: RMTL, $1.5B market cap)",
    weakness: "Not LATAM-specific, no directory, high mobile app fees (2-3% + fixed), slow transfers (2-3 days), no platform ecosystem",
    pricing: "2-3% + fixed (mobile), 1-2% (bank transfer)",
    notes: "Strong on LATAM corridors but not aggregated. Opportunity: partner API."
  },
  {
    name: "WorldRemit",
    url: "https://www.worldremit.com/",
    type: "Fintech / Remittances",
    funding: "Private (backed by TCV, Accel, others; est. $1.5B valuation)",
    weakness: "Not LATAM-specific, no directory, no platform, cash pickup model limits urban appeal (people want bank deposits)",
    pricing: "1-5% + fixed (varies by corridor)",
    notes: "Good for rural LATAM (M-Pesa), but urban Spain → LATAM wants bank deposits. Differentiation: partner with all 3."
  },
  {
    name: "Indeed (job board for Spain)",
    url: "https://es.indeed.com/",
    type: "Job Board",
    funding: "Subsidiary of Recruit Holdings",
    weakness: "Not LATAM-specific, no cultural context (languages, visa help), generic job board, no marketplace for LATAM skills",
    pricing: "Employer posting fees vary",
    notes: "General player. Opportunity: LATAM-specific job board (language screening, visa context)."
  },
  {
    name: "InfoJobs",
    url: "https://www.infojobs.net/",
    type: "Job Board",
    funding: "Private",
    weakness: "Spain-centric (not LATAM aware), no LATAM cultural positioning, generic experience",
    pricing: "Employer posting",
    notes: "Competitor but not specialized. Can own the segment."
  }
];

export const insights = [
  {
    source: "INE (Instituto Nacional de Estadística)",
    url: "https://www.ine.es/dyngs/Prensa/ECP2T25.htm",
    title: "Estadística Continua de Población (ECP). 1 de julio de 2025.",
    sentiment: "bullish",
    relevance: 0.95,
    notes: "4.7M latinoamericanos en España (60% of foreign population), growing 15-20% annually"
  },
  {
    source: "CNN España",
    url: "https://cnnespanol.cnn.com/2025/08/07/espana/espana-maximo-poblacion-impulsada-inmigrantes-orix",
    title: "La inmigración lleva a España a un nuevo máximo de población, impulsada por inmigrantes de Colombia y Venezuela",
    sentiment: "bullish",
    relevance: 0.93,
    notes: "Colombianos +36.1K (Q2 2025), Venezolanos +21.6K (Q2 2025) — highest growth rates"
  },
  {
    source: "Banco de España",
    url: "https://www.bde.es/wbe/en/publicaciones/analisis-economico-investigacion/boletin-economico/2025t2-articulo-01-las-remesas-enviadas-desde-espana-hacia-america-latina-algunas-cifras-basicas.html",
    title: "Remittances from Spain to Latin America: some key figures",
    sentiment: "bullish",
    relevance: 0.94,
    notes: "€10.7B/year remittances, 60% of Spain's total remittances go to LATAM. Spain = 2nd largest sender after USA."
  },
  {
    source: "Autonomos y Emprendedor",
    url: "https://www.autonomosyemprendedor.es/articulo/autonomos/es-realidad-autonomos-extranjeros-que-abren-negocios-espana/20250627141420043659.html",
    title: "La realidad de los autónomos extranjeros que abren negocios en España",
    sentiment: "bullish",
    relevance: 0.92,
    notes: "23-30% of LATAM are self-employed, 88.3% of growth in RETA (self-employed registry) is foreigners (2025)"
  },
  {
    source: "Infomigrante",
    url: "https://infomigrante.es/2025/08/10/conozca-cuales-son-las-comunidades-latinas-que-mas-crecen-y-viven-en-espana-en-2025/",
    title: "Conozca cuáles son las comunidades latinas que más crecen y viven en España en 2025",
    sentiment: "bullish",
    relevance: 0.89,
    notes: "Top 5: Colombia (857K), Venezuela (600K), Ecuador (449K), Argentina (416K), Peru (200K). Madrid 1M+, Barcelona 350K+"
  },
  {
    source: "Emprendedores.es",
    url: "https://emprendedores.es/casos-de-exito/emprendedores-latinos/",
    title: "Ejemplos de emprendedores latinos de éxito",
    sentiment: "bullish",
    relevance: 0.85,
    notes: "600+ Latin American companies registered in Spain. Profile: avg 10.7 years in Spain, 52% women, 52% higher education"
  },
  {
    source: "Ministerio de Inclusión Seguridad Social y Migraciones",
    url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/inclusion/paginas/2025/091025-regularizacion-arraigo-latinoamericanos.aspx",
    title: "Dos de cada tres personas que se regularizan vía arraigo son latinoamericanas",
    sentiment: "bullish",
    relevance: 0.88,
    notes: "2/3 of regulatory pathways used by LATAM → high legal engagement, ready for compliance platforms"
  }
];
