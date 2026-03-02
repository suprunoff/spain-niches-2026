// Funerarias Platform Spain — Deep Dive Research
// Research: /02-research/spain-niches/DEEP-DIVE-FUNERARIAS.md
// Дата: Март 2026

const funerariasPlatformNiches = [
  {
    name: "Funerarias Comparison Platform (Lead Gen Model)",
    category: "MarketplaceFinance",
    subcategory: "Comparison Engine",
    market: "Spain",
    description: "Lead generation platform for funeral services: family inputs location → platform shows 3-5 funeral homes + prices → family contacts directly. Funeral homes pay €50-150 per qualified lead. Market: 433K deaths/year, avg funeral cost €4,430, 3,000+ fragmented funeral providers, zero digital aggregator outside Funos.",
    searchVolume: 850,
    monthlySearches: 850,
    competitionLevel: "Medium",
    monthlyTraffic: 8500,
    avgCPC: 2.50,
    productType: "Marketplace (B2C + B2B)",
    demandScore: 8,
    supplyScore: 3,
    monetizationScore: 8,
    implementationScore: 8,
    businessModel: "Revenue per lead €50-150 from funeral homes + commission on ancillary services (insurance, financing)",
    monthlyPotentialRevenue: 75000,
    mvpWeeks: 4,
    painPoints: [
      "Moment of death = no time to compare = max overspend (avg €2,500-3,000 overpay)",
      "3,000+ funeral homes, zero transparency (prices hidden until death)",
      "Family emotional vulnerability = zero negotiation power",
      "Manual process (phone calls, in-person) = slow + inefficient",
      "Ancillary services (financing, insurance) scattered across providers"
    ],
    marketSize: "€1.5B-2B annual funeral services market in Spain (433K deaths × €4,430 avg)",
    customerProfile: "Families in moment of crisis (urgent decision) + funeral home managers (looking for qualified leads)",
    ltv: 5400,
    cac: 150,
    unitEconomics: "Lead value €100 (avg), CAC €25-30 (paid), margin €70-75, 60-90 leads/month = €4,200-6,750/month per city segment",
    competitorWeaknesses: {
      funos: "Clinical, transactional tone. No emotional journey. Limited insurance integration. No white-label for insurers.",
      cofune: "Smaller platform, weak SEO, minimal features beyond comparison",
      funeonline: "Outdated UI, no mobile optimization, low trust indicators",
      traditional_funeral_homes: "Offline-only, no digital presence, manually-driven sales"
    },
    opportunitySize: "€50K-100K/month potential (Madrid alone: 30K deaths/year). Spain total: €300K-700K/month at scale",
    internationalPotential: "Portugal, Italy (funeral market similar opacity). UK/USA models prove traction.",
    validationNotes: "CustDev: 10 families post-funeral (willing to pay €50-100 for simplification). 10 funeral home calls (pricing acceptance). Legal check: license requirements for lead gen vs. funeral operator."
  },
  {
    name: "Funerarias Pre-Planning Subscription Platform",
    category: "FinanceInsurance",
    subcategory: "Prepaid Services",
    market: "Spain",
    description: "Subscription platform for pre-planning funerals in-life: customers choose services + price + plan payment (€10-20/month). Platform holds funds in escrow → releases to funeral home upon death + takes 5-10% commission. Includes digital memorial, document management, family notifications.",
    searchVolume: 320,
    monthlySearches: 320,
    competitionLevel: "Low",
    monthlyTraffic: 2800,
    avgCPC: 1.80,
    productType: "SaaS Subscription + Escrow",
    demandScore: 7,
    supplyScore: 2,
    monetizationScore: 7,
    implementationScore: 6,
    businessModel: "Subscription €10-20/month + escrow commission 5-10% on funeral amount (avg €3,000 = €150-300 one-time)",
    monthlyPotentialRevenue: 45000,
    mvpWeeks: 10,
    painPoints: [
      "Planning funeral in-life is taboo in Spain (adoption lag vs. US/UK)",
      "No central place to store funeral preferences (scattered across family conversations)",
      "Unexpected costs pile up (not just funeral, but documents, inheritance, etc.)",
      "Families unprepared = panic + bad decisions when death occurs",
      "Digital legacy = forgotten after death (no platform to store memories)"
    ],
    marketSize: "€1.5B-2B funeral market + emerging pre-planning segment (est. 5-10% penetration = €75M-200M addressable)",
    customerProfile: "Adults 55-75 (planning their own), millennial children (planning parents). Target: 3M+ potential planners in Spain",
    ltv: 1800,
    cac: 40,
    unitEconomics: "LTV €180 (10 years × €12/month + €1,500 escrow commission once). CAC €30-50 (content + ads). Payback: 3-5 months. Very high margin (80%+) after escrow handled.",
    competitorWeaknesses: {
      funos: "No pre-planning focus, lead-gen only",
      traditional_funeral_homes: "No digital, no subscriptions, analog-only",
      international_platforms: "Ever Loved (US), Aura (UK) not in Spain yet"
    },
    opportunitySize: "€15K-30K/month early stage (1000-2000 subscribers). Scale: €100K-200K/month (10K+ subscribers)",
    internationalPotential: "Portugal, Italy (similar demographics + digital gap). Replicate US pre-planning model (50M+ pre-plans in US).",
    validationNotes: "CustDev: 15 adults 55-75 (willingness to pay €10-15/month for peace of mind). Legal: escrow regulations (must partner with bank or licensed institution). PMF test: 100 beta users, measure 6-month retention."
  },
  {
    name: "Funerarias White-Label Platform for Insurance (B2B SaaS)",
    category: "InsurTech",
    subcategory: "BenefitsTech",
    market: "Spain",
    description: "White-label funeral comparison + planning platform embedded in insurance company portals (Mapfre, Caser, Mutua). 22.3M Spaniards have 'seguro de deceso' (death insurance) → insurer customers get 10-minute comparison tool + digital documents + family support. Revenue: €2K-10K/month per insurer contract.",
    searchVolume: 0,
    monthlySearches: 0,
    competitionLevel: "None",
    monthlyTraffic: 0,
    avgCPC: 0,
    productType: "B2B SaaS + API Integration",
    demandScore: 9,
    supplyScore: 1,
    monetizationScore: 9,
    implementationScore: 7,
    businessModel: "Per-contract revenue (€2K-10K/month per insurer) + revenue share on leads generated",
    monthlyPotentialRevenue: 200000,
    mvpWeeks: 12,
    painPoints: [
      "22.3M Spaniards have seguro de deceso but experience = phone call to call center (1990s experience)",
      "Insurers use legacy systems (no digital funeral planning tool for customers)",
      "Customer friction = 5+ manual touchpoints to arrange funeral through insurer",
      "No transparency = families don't know what coverage includes vs. actual costs",
      "Insurer staff overwhelmed with death calls (no self-service option)"
    ],
    marketSize: "22.3M insured customers × 30% funeral trigger = 6.7M potential users. Insurer willingness to pay: €2K-10K/month per 1M customers = market cap €30M-100M annually",
    customerProfile: "Insurance companies (B2B buyers): Mapfre (31M insured), Caser, Mutua, Ocaso, etc. Also: their customers (families with 'seguro de deceso')",
    ltv: 240000,
    cac: 30000,
    unitEconomics: "LTV per contract €20K-120K (3-5 year contracts, 2 customers × 5 years × €2K-10K/month). CAC: sales team effort €10-30K. Payback: 2-6 months. Margin: 70-80% (SaaS-like).",
    competitorWeaknesses: {
      funos: "B2C lead gen, not enterprise B2B",
      legacy_insurance_systems: "No digital UX, customers stuck with 1980s phone-based experience",
      no_competitors_in_white_label_space: "First-mover advantage"
    },
    opportunitySize: "€50K-150K/month potential (2-5 insurance contracts). Mapfre alone: €30K-100K/month (1 contract with 31M insured).",
    internationalPotential: "Portugal (Multirrisco, Fidelidade), Italy (Generali, Allianz), France (AXA, MAAF)",
    validationNotes: "Meetings with Mapfre/Caser digital teams (LinkedIn warm intro, via insurance brokers). Deck: 'Digital Mortality Experience for Your Customers'. MVP: embedded form + 50 funeral homes + basic recommendations. Deployment timeline: 3-4 months implementation."
  },
  {
    name: "Funerarias AI-Powered Personal Memorial & Grief Support Platform",
    category: "HealthWellness",
    subcategory: "GriefTech",
    market: "Spain",
    description: "Emotional angle: platform for families to create digital memorials (photos, videos, stories) + AI-generated obituaries + grief support chatbot. Premium: €2-5/month. Community: families share stories. Tangential revenue: donations to charity (platform takes 5-10%), premium memorial designs (€20-50).",
    searchVolume: 180,
    monthlySearches: 180,
    competitionLevel: "Low",
    monthlyTraffic: 1500,
    avgCPC: 0.80,
    productType: "SaaS Subscription + Community",
    demandScore: 6,
    supplyScore: 4,
    monetizationScore: 5,
    implementationScore: 7,
    businessModel: "Freemium (basic memorial free) + premium subscription (€3/month) + premium designs (€20-50) + charity donations (5-10% take)",
    monthlyPotentialRevenue: 12000,
    mvpWeeks: 6,
    painPoints: [
      "Grief is isolating (no digital space for families to process together)",
      "Obituaries are cold, formal (don't capture person's story)",
      "Photos/videos scattered across phones, WhatsApp (lost memories)",
      "No way to leave messages for living family (legacy planning)",
      "Monetization of grief is sensitive but families want quality memorials"
    ],
    marketSize: "433K deaths/year in Spain. Target: 5-10% create digital memorials = 22K-43K potential annual customers. At €3/month × 20K = €60K/month ARR potential",
    customerProfile: "Millennial + Gen X families (tech-savvy, want to honor death digitally). Ages 35-65. Urban (Barcelona, Madrid).",
    ltv: 360,
    cac: 25,
    unitEconomics: "LTV €36 (10 years × €3/month average). CAC €15-30 (social + word-of-mouth). Payback: 6 months. Low revenue/user but viral + emotional stickiness.",
    competitorWeaknesses: {
      international_memorial_sites: "1000memories (US) is outdated, no active development",
      social_media: "Facebook Memorials generic, not designed for grief support",
      legacy_funeral_homes: "No digital memorial option"
    },
    opportunitySize: "€12K-25K/month early stage (4K-8K premium users). Limited to €60K-100K/month at scale (emotional ceiling).",
    internationalPotential: "US (1M+ annual deaths), UK, France — strong demand but saturation risk from international players.",
    validationNotes: "Emotional validation: 10 interviews with families post-funeral (NPM question: would you have paid €3-5/month for digital memorial?). PMF test: 500 beta users, measure 12-month retention (emotional products have high churn). Consider: partnership with funeral homes (co-marketing)."
  }
];

// Export for add_niches.py
module.exports = { funerariasPlatformNiches };
