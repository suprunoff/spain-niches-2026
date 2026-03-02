// EU Grants & Subsidies Automation Niche
// Scoring: d=8, g=8, r=7, s=6, m=8, a=6, f=7, t=9 → score 7.2

export const niches = [
  {
    name: "EU Grants & Subsidies Automation",
    sub: "GrantsAI / SubsidiaAI",
    type: "SaaS / Compliance Tech",
    d: 8,  // demand: €27B unused + 77% pain points
    g: 8,  // gap: FANDIT generic, no automation, no consultant network
    r: 7,  // retention: SaaS model, consulting partners recurring
    s: 6,  // seasonality: deadline Aug 31 2026, then pivot needed
    m: 8,  // market: €162M long-term TAM, €19.4M realistic SAM
    a: 6,  // acquisition: B2B via consultants (not fast), low CAC €150
    f: 7,  // founder fit: technical (scraping, API, AI), needs backend
    t: 9,  // timing: Aug 31 2026 deadline = maximum urgency
    score: 7.2,
    mi: 3000,
    mx: 29000,
    tam: "€162M (long-term SAM from 4% of €4.05B consultant comissions) / €27B+ unused Next Generation funds in Spain",
    cac: 150,
    ltv: 19000,
    churn: "15% annual (consulting retention model)",
    y1: "€120K–500K MRR within 12 months",
    y1n: 500,
    gap: "AI-automation (auto-filling docs) + compliance checker + consultant marketplace. Competitors either generic search (FANDIT/BDNS) OR manual consultants (Eurosubvenciones 15-25% fee). NO ONE does all 3.",
    risks: "BDNS API closure (low prob) | FANDIT monopoly expansion (medium) | Low organic search volume (solve via consultant partnerships)",
    gtm: "B2B via consultant partnerships (Eurosubvenciones, ECSA, MOVA, Rubvex) + freemium to SME (WhatsApp alerts native to Spain) + reseller program for agents",
    mvpScope: "Phase 1 (4 weeks): BDNS scraper + AI questionnaire (5-10 Q) + email/WhatsApp alerts. Phase 2 (8 weeks): auto-fill documents + compliance validator. Phase 3 (12 weeks): consultant marketplace + revenue share model (3-5% of consultant success fees)",
    dd: 1,
    status: "tier-2-deep-dive"
  }
];

export const competitors = [
  {
    name: "FANDIT",
    url: "https://fandit.es/subvenciones",
    type: "SaaS",
    funding: null,
    weakness: "Generic grant database (47K), no automation for filling forms, no consultant network integration, treats all grant types equally (no AI prioritization)",
    pricing: "Freemium + Premium",
    notes: "Market leader in search, 10-50K users (est), but no workflow automation. Low switching cost from user POV."
  },
  {
    name: "Infosubvenciones.es",
    url: "https://www.infosubvenciones.es/",
    type: "Government Portal",
    funding: "Public",
    weakness: "BDNS official interface frozen in 2000s, no UX improvements, no AI-powered search, requires deep government knowledge to navigate, no alerts system",
    pricing: "Free",
    notes: "Mandatory compliance, but users hate it. Perfect niche for displacement."
  },
  {
    name: "Infoayudas.com",
    url: "https://www.infoayudas.com/",
    type: "Portal",
    funding: null,
    weakness: "1.3K active subsidies only, historical data weak, no real-time updates, no compliance checker, minimal scale",
    pricing: "Free",
    notes: "Underfunded, minimal adoption"
  },
  {
    name: "Eurosubvenciones",
    url: "https://eurosubvenciones.net/",
    type: "Consulting Firm",
    funding: "Private",
    weakness: "100% manual work (lawyers + accountants read apps), 15-25% success fee, 2-3 month typical turnaround, no tech scalability, limited to 2000+ projects/year",
    pricing: "Success fee (15-25% of grant amount)",
    notes: "Trusted but expensive and slow. PEAK OPPORTUNITY: automate their workflows via SaaS → win them as white-label partner."
  },
  {
    name: "ECSA Consultores",
    url: "https://ecsaconsultores.com/",
    type: "Consulting Firm",
    funding: "Private",
    weakness: "2000+ clients managed manually, no AI tools for compliance screening, high operational cost per client, limited to consulting hours available",
    pricing: "Success fee (varies, est 12-20%)",
    notes: "Mid-market player. Same as above: automation is their bottleneck."
  }
];

export const insights = [
  {
    source: "El Confidencial Digital",
    url: "https://www.elconfidencialdigital.com/articulo/dinero/ayuda-publica-que-millones-podrian-pedir-espana-devuelve-europa-usar/20250625200754970194.html",
    title: "El dinero público que millones podrían pedir pero España devuelve a Europa sin usar",
    sentiment: "bearish",
    relevance: 0.95,
    notes: "Core insight: €27B+ unused, structural problem not capex"
  },
  {
    source: "El Independiente",
    url: "https://www.elindependiente.com/economia/2025/07/07/58-subvenciones-convocadas-fondos-europeos-sin-conceder/",
    title: "El 58% de las subvenciones convocadas con fondos europeos están sin conceder",
    sentiment: "bullish",
    relevance: 0.92,
    notes: "Validates problem: majority of grants never awarded due to application barriers"
  },
  {
    source: "El Diario de Madrid",
    url: "https://www.eldiariodemadrid.es/articulo/economia/espana-27000-millones-fondos-europeos-pendientes-ejecucion-next-generation-2026/20260227080844122656.html",
    title: "España tiene pendientes 27.000 millones de los fondos europeos Next Generation",
    sentiment: "bullish",
    relevance: 0.94,
    notes: "Updated figures: €27B pending as of Feb 2026, deadline Aug 31 2026 = 6 months urgency window"
  },
  {
    source: "Directivos y Empresas",
    url: "https://www.directivosyempresas.com/pymes/burocracia-y-desconocimiento-las-barreras-en-la-gestion-de-subvenciones-de-los-fondos-europeos-para-las-pymes/",
    title: "Burocracia y desconocimiento: las barreras en la gestión de subvenciones",
    sentiment: "bullish",
    relevance: 0.91,
    notes: "77% complain about bureaucracy, 30% struggle to define eligible projects → AI questionnaire solves this"
  },
  {
    source: "Emprendedores.es",
    url: "https://emprendedores.es/ayudas/pymes-fondos-europeos/",
    title: "Las pymes sólo han recibido el 10% de los fondos europeos",
    sentiment: "bullish",
    relevance: 0.90,
    notes: "Only 10% of available funds reach SMEs = massive gap. Your product fills this gap."
  }
];
