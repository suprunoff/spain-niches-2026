// Batch: Finiquito Calculator + Spanish LegalTech
// Date: 2026-03-02
// Deep dive: DEEP-DIVE-LEGALTECH-FINIQUITO.md

{
  name: "Finiquito Calculator",
  sub: "B2C + Affiliate",
  type: "LegalTech",

  // Scoring (1-10 scale)
  d: 9,  // Demand: 100K+ dismissals/month, high-intent SEO searches
  g: 8,  // Growth: finiquito requests spike end-of-month, ERTE expansion
  r: 7,  // Revenue: affiliate €50-200/conversion, premium €9.99, eventual B2B SaaS
  s: 7,  // Seasonality: peaks Q4 (restructuring), lows Q2 (hiring season)
  m: 7,  // Market size: 2.4M annual dismissals → TAM €50M+ (if 10% convert)
  a: 8,  // Addressability: 100% online, all Spanish workers
  f: 8,  // Founder fit: technical feasible (calc engine, simple AI integration)
  t: 7,  // Timing: ERTE tracker, VeriFactu (2027) create urgency for compliance tools

  score: 7.75,
  mi: 1000,  // min annual revenue (first month)
  mx: 150000, // max year1 (conservative estimate)

  tam: "€2.4B (2.4M dismissals × avg €1K consultation-to-resolution)",
  cac: 0,    // organic SEO
  ltv: 150,  // €2-8 per user × 10-20 repeat rate
  churn: "15-20% monthly (users don't need finiquito calc again unless fired again)",

  y1: "Freemium + Affiliate: €131K revenue (SEO 5K/mo, 10% click-through, 25% affiliate conversion, €75/commission). Costs: ~€12K (hosting, tools, basics). Net: ~€120K for solo founder.",
  y1n: 131000,

  gap: "All 8+ existing calculators are free with zero monetization. No one has integrated affiliate network with laboralistas. No AI document analysis. No vertical SaaS for labor lawyers. This is white space.",

  risks: "1) Legal liability (wrong calculation = lawsuit) → mitigate with disclaimer + insurance. 2) Affiliate network collapse (if partners don't convert) → test with paid ads first. 3) Low organic adoption (if SEO doesn't work) → backup with paid ads (Google Ads). 4) Partner churn (adv leave for competitor) → exclusive deals. 5) AI hallucinations (doc analysis wrong) → fine-tuned model + manual review for premium.",

  gtm: "Phase 1 (m1-3): SEO + blog 20-30 articles targeting 'calcular finiquito', 'despido improcedente', 'indemnización'. Phase 2 (m1-2): Google Ads €500-1K/mo (test CAC). Phase 3 (m2-6): Partner with laboralista directories, HR platforms (Factorial), Reddit. Phase 4 (m3+): Affiliate recruitment, email.",

  mvpScope: "Week 1-2: React calculator (input: salary, days, dismissal type → output: finiquito amount). Week 3-4: Monetization gate (after calc → affiliate CTA). Week 5-8: AI doc analysis (optional premium). Tech: Next.js + FastAPI + PostgreSQL + OpenAI API. Hosting: Vercel + Render.",

  dd: 1
}
