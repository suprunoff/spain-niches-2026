// US→Spain arbitrage niches — batch 2026-03-03
// Based on: US B2C/B2B breakout startups research (3 agents)

const niches = [
  {
    name: "Field Service SaaS Spain — ServiceTitan для HVAC/fontaneros/electricistas",
    sub: "Gestión de trabajos, despacho, facturación y pagos integrados para técnicos de HVAC, fontanería y electricidad",
    type: "Vertical SaaS",
    d: 8, g: 8, r: 5, s: 7, m: 8, a: 7, f: 7, t: 8,
    mi: 10, mx: 18,
    tam: "400K+ empresas HVAC/fontanería/electricidad en España. ServiceTitan = $772M ARR en US. SAM España: €50-150M",
    cac: 800, ltv: 12000, churn: 8,
    y1: "€200-600K",
    gap: "ServiceTitan IPO dic 2024 ($772M ARR, 95% retention). España: HVAC/fontanería = Excel + WhatsApp + papel. Sin scheduling integrado, sin pagos integrados, sin historial de cliente. Habitissimo = directorio, no gestión de obras. 0 jugador dominante.",
    risks: "Competencia de Jobber (UK-based, ya en España), ServiceTitan puede localizar. Ciclo ventas largo para instaladores tradicionales. Requiere onboarding presencial.",
    gtm: "Asociaciones gremiales (CONAIF, AEFyC) + YouTube tutoriales para fontaneros → freemium (3 trabajos gratis) → €49-149/mes. Referral entre gremios.",
    mvpScope: "Job scheduling calendar + customer CRM + invoice generator + WhatsApp notifications + Redsys/Bizum payments + GPS tracking del técnico",
    status: "idea"
  },
  {
    name: "Newsletter Platform Spain — Beehiiv para creadores en español",
    sub: "Plataforma de newsletters con monetización integrada: ad network, suscripciones de pago, Boosts — todo para creadores hispanohablantes",
    type: "Creator Economy / SaaS",
    d: 6, g: 9, r: 4, s: 8, m: 7, a: 8, f: 8, t: 7,
    mi: 8, mx: 14,
    tam: "125+ newsletters españoles activos en plataformas globales. Mercado hispanohablante total: 500M personas. Beehiiv = $30M ARR. SAM España + LatAm: €20-60M",
    cac: 50, ltv: 2400, churn: 15,
    y1: "€80-250K",
    gap: "Beehiiv $30M ARR (15.6B emails/año 2024, +3.5x vs 2023). 3,112 newsletters monetizados via Boosts. España: 125+ newsletters en Substack/Beehiiv globales SIN localización fiscal (IVA español, modelo 303, retenciones). Sin ad network en español. Sin comunidad de creadores hispanohablante. Gap: tax-native + español-first + red publicitaria local.",
    risks: "Beehiiv puede añadir localización española. Mercado de creadores en España pequeño vs US. Monetización requiere masa crítica de anunciantes españoles.",
    gtm: "Twitter/X creadores en español + comunidades de periodismo digital + Domestika creadores → free tier (500 suscriptores gratis) → €29-99/mes. Hook: facturación española automática (IVA, retenciones).",
    mvpScope: "Newsletter editor + subscriber management + Bizum/Stripe pago suscriptores + integración fiscal española (generador facturas con IVA) + ad placements básicos para anunciantes españoles",
    status: "idea"
  },
  {
    name: "Industrial Maintenance SaaS Spain — MaintainX para fábricas y DC",
    sub: "CMMS (gestión de mantenimiento) para plantas industriales, data centers y flotas — reemplaza Excel y papel",
    type: "Vertical SaaS / Industrial",
    d: 7, g: 9, r: 6, s: 8, m: 7, a: 6, f: 7, t: 9,
    mi: 10, mx: 18,
    tam: "España: 230K empresas industriales. DC boom = 51 nuevos centros de datos anunciados. MaintainX = $2.5B valuation. SAM España: €30-80M",
    cac: 2000, ltv: 24000, churn: 8,
    y1: "€150-400K",
    gap: "MaintainX: $2.5B valuation, 10K clientes, 17M work orders/año, Deloitte Tech Fast 500 #48. España: mantenimiento industrial = reactivo, en papel, sin digitalización. DC boom (AWS €33.7B + Microsoft + Meta) = 50-100 técnicos de mantenimiento por site. CERO SaaS español de CMMS con tracción. Oportunidad doble: fábricas clásicas + nuevo ecosistema DC.",
    risks: "MaintainX ya vende en Europa (inglés). Ciclo ventas industrial largo (3-6 meses). Requiere integraciones con ERPs (SAP, Navision). Enterprise = difícil sin equipo de ventas.",
    gtm: "DC ecosystem en Aragón/Madrid (ALAN COMMISSIONING, subcontratistas MEP) → proof of concept en 1-2 DC projects → referencias para industria manufacturera (Zaragoza, Bilbao, Valencia).",
    mvpScope: "Work order management + asset register + preventive maintenance schedules + mobile app para técnicos + QR codes en equipos + PDF reports para auditorías",
    status: "idea"
  },
  {
    name: "Beauty & Wellness Booking Spain — Goldie/Mindbody killer",
    sub: "App de reservas para peluquerías, centros de estética y salones de uñas — sin comisiones, pagos Bizum integrados",
    type: "Vertical SaaS / Marketplace",
    d: 8, g: 7, r: 4, s: 6, m: 8, a: 8, f: 7, t: 7,
    mi: 6, mx: 12,
    tam: "España: 80,000+ peluquerías y centros de estética. Goldie = 150K+ users $19-99/mo. Mindbody apunta a IPO ~$500M revenue. SAM España: €40-100M",
    cac: 200, ltv: 3600, churn: 12,
    y1: "€150-500K",
    gap: "Goldie (US) 150K+ salones, $19-99/mes, crece 30%+ anual. Mindbody rumores IPO con $500M revenue. España: salones usan Fresha (gratuito pero comisiones) o papel. Fresha = 0% comisión pero cobran por marketing. Oportunidad: Bizum-native (30.6M usuarios) + español-first + sin comisiones + WhatsApp recordatorios automáticos.",
    risks: "Fresha ya opera en España con modelo freemium agresivo. Competencia de Treatwell (UK). Peluqueros conservadores en adopción digital. CAC alto si presencial.",
    gtm: "Instagram peluqueros + ferias profesionales (Salón Look Madrid) → freemium (reservas ilimitadas gratis) → €19-49/mes por funciones premium (pagos, recordatorios, fidelización).",
    mvpScope: "Booking calendar + WhatsApp recordatorios automáticos + Bizum/Redsys pagos online + perfil público con reseñas Google importadas + gestión de servicios/precios",
    status: "idea"
  },
  {
    name: "Earned Wage Access Spain — Anticipo de nómina para empleados",
    sub: "Los empleados acceden a su salario ganado antes del día de pago — EWA/salario bajo demanda para empresas con nóminas regulares",
    type: "Fintech / HRTech",
    d: 7, g: 8, r: 6, m: 9, s: 9, a: 6, f: 5, t: 8,
    mi: 12, mx: 24,
    tam: "España: 13M+ asalariados. US EWA market: $6.1B (2024) → $23.9B (2034), CAGR 14.8%. SAM España: €200-500M (fee-based)",
    cac: 500, ltv: 8000, churn: 10,
    y1: "€100-300K",
    gap: "EWA = $6.1B mercado US, CERO jugadores establecidos en España. DailyPay, Branch, Clair (US) → ninguno en España. Empleados españoles esperan 30-60 días para cobrar (fin de mes). 45% de trabajadores tienen tensión de tesorería mensual. Pain point claro: 'necesito dinero antes del 30'. Modelo: empresa paga 0, empleado paga €1-3/anticipo o suscripción mensual.",
    risks: "Requiere integración con sistemas de nómina (A3nom, Sage Nómina, Meta4). Regulación: ¿producto de crédito o servicio de liquidez? Banco de España puede clasificar como préstamo. Necesita partnerships con empresas (B2B2C go-to-market).",
    gtm: "Venta directa a depts RRHH de empresas 100+ empleados → ofrecen EWA como beneficio sin coste → empleados usan voluntariamente. Verticales prioritarias: retail, hostelería, logística (sectores con mayor tensión de liquidez).",
    mvpScope: "Integración nómina (API o archivo Excel) + cálculo salario ganado en tiempo real + solicitud anticipo en app + transferencia SEPA 24h + dashboard RRHH + reporting",
    status: "idea"
  },
  {
    name: "Partiful Spain — App de invitaciones para eventos Gen Z",
    sub: "SMS/WhatsApp-first party invites con RSVP tracking, listas de invitados y recordatorios — reemplaza grupos de WhatsApp para fiestas y eventos",
    type: "Consumer App / Social",
    d: 7, g: 8, r: 3, s: 8, m: 5, a: 9, f: 8, t: 8,
    mi: 4, mx: 10,
    tam: "España: 7M usuarios Gen Z (16-28 años). Partiful = 500K MAU, +400% YoY, Google Best App 2024. Monetización: premium features, brand events, ticketing. SAM: €10-30M",
    cac: 2, ltv: 150, churn: 40,
    y1: "€30-100K (advertising/premium)",
    gap: "Partiful: 500K MAU en US, +400% YoY, $27.3M funding, Google Best App 2024. España Gen Z = grupos de WhatsApp + Facebook Events (experiencia horrible). Pain: sin RSVP claro, sin contador de asistentes, sin lista de invitados, sin recordatorios automáticos, sin mapa del evento. WhatsApp-first = fit cultural perfecto para España.",
    risks: "Monetización difícil (usuarios no pagan por invitaciones). Partiful puede expandir a España. Competencia de Facebook Events + Luma. TAM pequeño vs otros.",
    gtm: "TikTok/Instagram Gen Z → referral viral (cada invitación lleva al invitado a la app) → freemium (básico gratis, €4.99/mes para eventos ilimitados + personalización premium).",
    mvpScope: "Crear evento + WhatsApp share link + RSVP (sí/no/quizás) + lista de invitados en tiempo real + recordatorios automáticos + mapa Google Maps + galería fotos post-evento",
    status: "idea"
  }
];

module.exports = niches;
