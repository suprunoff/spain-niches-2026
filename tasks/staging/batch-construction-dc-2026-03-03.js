// Construction + DC niches — batch 2026-03-03
// Based on: ConTech Spain research + DC Construction Ecosystem research

const niches = [
  {
    name: "DC Subcontractor Coordination Platform Spain",
    sub: "CAE compliance + MEP/electrical sub discovery для DC megaprojects (ACS, Ferrovial)",
    type: "B2B SaaS / Marketplace",
    d: 7, g: 9, r: 8, s: 9, m: 7, a: 6, f: 7, t: 9,
    mi: 10, mx: 16,
    tam: "50-100 DC projects × €30-80K/project coordination fee = €3-8M direct; broader CAE market €50M+",
    cac: 5000, ltv: 60000, churn: 15,
    y1: "€200-500K (3-5 GC contracts)",
    gap: "2,300+ MW pipeline, 50-100 subcontractors per DC project. NO Spain-specific DC coordination SaaS. ACS/Ferrovial use generic Procore or bespoke tools. CAE mandatory but not integrated with DC-specific trade scheduling. ALAN COMMISSIONING = only local commissioning specialist in Aragón.",
    risks: "Small number of GC buyers (ACS, Ferrovial, Acciona = <10 targets); must get on approved vendor list; enterprise sales cycle 6-12 months; Procore could add DC vertical",
    gtm: "Direct to ACS/Ferrovial procurement + Aragón DC ecosystem (ALAN COMMISSIONING, local MEP firms) → case study → expand to other GCs. Entry via commissioning tracking module (fastest adoption).",
    mvpScope: "Subcontractor directory (MEP/electrical/HVAC DC-certified in Spain) + CAE document tracker + commissioning status dashboard (Level 0-6) + trade dependency timeline",
    status: "idea"
  },
  {
    name: "BIM-as-a-Service para PYMEs constructoras",
    sub: "Managed BIM compliance para pequeñas constructoras — BIM mandatario desde abril 2024 en contratos públicos",
    type: "B2B SaaS / ConTech",
    d: 8, g: 8, r: 9, s: 6, m: 7, a: 7, f: 7, t: 8,
    mi: 8, mx: 14,
    tam: "~300K constructoras en España; 440+ licitaciones con BIM (€752M). SME TAM: €20-40M",
    cac: 800, ltv: 9600, churn: 12,
    y1: "€120-400K",
    gap: "BIM mandatario para contratos públicos desde abril 2024 (Oct 2025 = intermediate level). Autodesk BIM 360 = €500+/mes, fuera de alcance de PYME. Herramientas locales (AEC-ON, BrickControl) no son BIM-native. Estándar IFC obligatorio para independencia tecnológica. 2,600+ contratos públicos con requisitos BIM ya activos.",
    risks: "Autodesk puede hacer push-down de precios; largo ciclo de ventas en construcción española; competidores europeos (Archicad, Vectorworks) con planes SME",
    gtm: "Colegios de Arquitectos + Asociaciones Constructoras + licitaciones públicas como lead source. Freemium: 1 proyecto gratis → €99/mes. BIM compliance checklist como lead magnet.",
    mvpScope: "IFC file viewer + BIM compliance checker (vs. CTE requirements) + public tender BIM requirements scanner + team collaboration (subcontractors upload models)",
    status: "idea"
  },
  {
    name: "Construction Fintech — Pagos Adelantados para Subcontratistas",
    sub: "Supply-chain financing para subcontratistas de construcción: adelanto de facturas, 0-30 días vs 60-90 actuales",
    type: "Fintech / ConTech",
    d: 8, g: 7, r: 6, s: 7, m: 9, a: 6, f: 5, t: 7,
    mi: 16, mx: 28,
    tam: "Construcción España €83.5B; subcontratistas ~40% = €33B flujo facturas. TAM addressable: €5-15M (1-3% fee on €500M facilitated)",
    cac: 2000, ltv: 15000, churn: 10,
    y1: "€100-300K (depends on lending capital)",
    gap: "82% de contratistas enfrentan retrasos >30 días (vs 49% hace 2 años). Ley 15/2010 no se cumple efectivamente. NINGÚN fintech especializado en stройка en España. Hokodo/Pipe = genérico B2B, no construction-specific. Subcontratistas suben precios 75% para compensar riesgo de delay.",
    risks: "Regulación financiera (Banco de España): requiere licencia de entidad de pago o colaboración con banco. Necesita capital de crédito significativo. Ciclo ventas largo. Riesgo de crédito en sector con muchas quiebras.",
    gtm: "Partnership con CAE platforms (Nalanda, CTAIMA) como distribution channel → acceso a 50-100K subcontratistas registrados. También via asociaciones sectoriales (CNC, SEOPAN).",
    mvpScope: "Invoice upload + VeriFactu integration + creditworthiness check + 48h payment advance + fee calculation + GC confirmation portal",
    status: "idea"
  },
  {
    name: "DC Commissioning SaaS — Puesta en Marcha Centros de Datos",
    sub: "Software de commissioning Level 0-6 (ISO/IEC 22237 + EN50600) para proyectos DC en España",
    type: "B2B SaaS / ConTech",
    d: 6, g: 9, r: 8, s: 9, m: 8, a: 5, f: 6, t: 8,
    mi: 12, mx: 20,
    tam: "51 DC facilities anunciadas × €50-150K commissioning software/consultoría = €2.5-7.5M directo. Expandible a EU.",
    cac: 8000, ltv: 80000, churn: 10,
    y1: "€100-250K (2-3 DC projects)",
    gap: "Ninguna herramienta SaaS española para commissioning DC. ALAN COMMISSIONING (Aragón) = único especialista local, con capacidad limitada. Meta Toledo = 840 constructores + commissioning 2027. Estándares EN50600/ISO 22237 requieren documentación Level 0-6 pero proceso actual = Excel + email. TÜV SÜD certifica pero no provee software.",
    risks: "TAM pequeño si solo España; necesita expansión EU. Ventas muy enterprise (CAPEX decisions). Requiere profundo conocimiento técnico DC para ganar credibilidad. Posible competencia de Procore con módulo vertical.",
    gtm: "Entrada via ALAN COMMISSIONING como partner/co-founder → acceso a AWS/Microsoft/Meta projects en Aragón. Luego expand a GCs europeos via EN50600 certification bodies.",
    mvpScope: "Commissioning checklist builder (Level 0-6 per system type) + test protocol library (HVAC, electrical, cooling, UPS) + deficiency tracking + sign-off workflow + handover package generator",
    status: "idea"
  }
];

module.exports = niches;
