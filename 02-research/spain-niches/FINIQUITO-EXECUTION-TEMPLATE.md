# Finiquito Calculator — Execution Checklist

**Start date:** [DATE]
**MVP deadline:** Week 8
**Go/No-Go decision:** Week 12

---

## Phase 0: Validation (Week 1-2) — BEFORE building

### Customer Development

**Task 0.1: Interview 10 dismissed workers**
```
Template: 30-min Zoom call or WhatsApp
Questions:
1. When were you dismissed? Type?
2. Did you check if finiquito was correct?
3. Would you have paid €9.99 for AI analysis of your contract?
4. How long would you wait for premium feature? (immediately, 1 week, 1 month?)
5. Would you trust an AI tool or need lawyer verification?
6. What was the biggest fear in finiquito process?

Recruiting:
- LinkedIn: connect with recently unemployed
- Reddit r/derechos, r/trabajadores
- Facebook groups: "Despido en España", "Derechos Laborales"
- Partner with 1-2 labor unions (UGT, CCOO) for referral
- Compensation: €10-15 gift card per interview

Success criteria:
- 8+ say "yes, would pay for premium"
- 7+ say "my finiquito was wrong or unclear"
```

**Task 0.2: Interview 5 labor lawyers (laboralistas)**
```
Template: 15-min phone call
Questions:
1. How many finiquito consultations per month?
2. Average fee for consultation? (€50, €100, €150?)
3. What % of leads are from referral vs. inbound search?
4. Would you use a calculator tool to pre-screen clients?
5. Would you pay €50-150 per qualified lead?
6. What's your biggest challenge in client acquisition?

Recruiting:
- LinkedIn: search "laboralista Madrid", "abogado laboral Barcelona"
- DirectMail: email to law firms via contact@[firma].es
- Cold call: tuabogadolaboralista.com directory
- Compensation: offer free premium for 3 months

Success criteria:
- 4+ say "yes, would buy leads at €50+"
- 3+ say "currently spending €200+ per month on acquisition"
- 5+ have >5 consultations per month (market validation)
```

**Task 0.3: Google Trends + Search volume check**
```
Tools: Ahrefs, SEMrush (free tier), Google Trends
Keywords to check:
- "calcular finiquito" (main)
- "indemnización despido"
- "calculadora finiquito españa"
- "despido improcedente cuánto recibo"
- "erte calculadora"

Success criteria:
- Main keyword: ≥5,000 searches/month (⚠️ if <2000, reconsider)
- Combined long-tail: ≥15,000 searches/month
- CPC ≥€1.50 (people with money searching)
```

**Task 0.4: Competitive landscape deep dive**
```
Map: 8+ existing calculators
For each, rate on:
1. SEO strength (Domain Authority, ranking on target keywords)
2. Monetization (any? no if all say "free")
3. User experience (UX score 1-5)
4. Mobile (responsive? yes/no)
5. Premium features (yes/no)

Spreadsheet columns:
| Name | DA | Rankings | UX | Mobile | Premium | Monetization | Weakness |
| --- | --- | --- | --- | --- | --- | --- | --- |

Success criteria:
- All competitors = "no monetization"
- 5+ have poor mobile UX
- No one has AI doc analysis
```

---

## Phase 1: Build MVP (Week 3-8)

### Week 3-4: Core calculator (React frontend + Backend API)

**Task 1.1: Frontend scaffold**
```
npm create next-app@latest finiquito-calc --typescript --tailwind

Components needed:
├── <Calculator />              # Main form
│   ├── <SalaryInput />        # EUR input with validation
│   ├── <DaysWorkedInput />    # Integer input
│   ├── <DismissalTypeSelect />  # Dropdown: procedente, improcedente, renuncia, ERTE
│   ├── <ExtraDaysInput />     # Unused vacation days
│   └── <Button "Calculate" />
├── <Result />                  # Output display
│   ├── <Amount />             # €9,500 in big font
│   ├── <Breakdown />          # Salary × Days × Type = Amount
│   ├── <CTA "Consult lawyer" />
│   └── <PremiumGate />        # "Want AI analysis?" €9.99
└── <LandingPage />            # Landing + SEO

Scoring algorithm (TypeScript):
```
export function calculateFiniquito(
  monthlySalary: number,
  daysWorked: number,
  dismissalType: 'procedente' | 'improcedente' | 'renuncia' | 'erte',
  unusedDays: number = 0
): FiniquitoResult {
  // Formula: días × (salario_mensual / 30) × factor
  // procedente: 20 días × factor
  // improcedente: 33 días × factor
  // renuncia: 0 días
  // ERTE: 70% of average 180 days

  const dailySalary = monthlySalary / 30;
  let indemnizationDays = 0;

  if (dismissalType === 'procedente') indemnizationDays = 20;
  else if (dismissalType === 'improcedente') indemnizationDays = 33;
  else if (dismissalType === 'renuncia') indemnizationDays = 0;

  const yearsFraction = daysWorked / 365;
  const indemnization = indemnizationDays * dailySalary * yearsFraction;

  // Add extra months (pagas extra): 2 per year
  const extraMonths = (daysWorked / 365) * 2;
  const extraAmount = monthlySalary * extraMonths;

  // Unused vacation: daily_salary × days
  const vacationAmount = dailySalary * unusedDays;

  const total = indemnization + extraAmount + vacationAmount;

  return {
    indemnization,
    extraMonths,
    vacationAmount,
    total,
    breakdown: {
      indemnizationDays,
      yearsFraction,
      dailySalary
    }
  };
}
```

**Task 1.2: Backend API**
```
Tech: FastAPI (Python)
Endpoint: POST /api/calculate

Request:
{
  "monthly_salary": 1600,
  "days_worked": 2920,  // 8 years
  "dismissal_type": "improcedente",
  "unused_days": 10
}

Response:
{
  "indemnization": 12480,
  "extra_months_amount": 3200,
  "vacation_amount": 533,
  "total": 16213,
  "breakdown": {...},
  "confidence": 0.85  // algo is unsure due to collective agreement
}

Code (FastAPI):
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class FiniquitoRequest(BaseModel):
    monthly_salary: float
    days_worked: int
    dismissal_type: str
    unused_days: int = 0

@app.post("/api/calculate")
def calculate(req: FiniquitoRequest):
    # Call calculation logic
    result = calc_finiquito(...)
    return result
```

**Task 1.3: Pages & SEO**
```
Key pages:
- / (Landing page)
  - Hero: "Calcula tu finiquito en 2 minutos"
  - Benefits: "100% gratuito, basado en ley española"
  - Calculator embed
  - FAQ: "¿Qué es finiquito?", "¿Se puede impugnar?"

- /blog (Landing for SEO)
  - Articles list (20-30 titles, stubs for now)
  - Each article links to → Calculator

- /resultado (Result page)
  - Dynamic: shows calculation
  - Social share button ("Mi finiquito es €9,500")
  - CTA: Affiliate, Premium

Meta tags:
- Title: "Calculadora Finiquito España 2026 — Gratis y Legal"
- Description: "Calcula tu indemnización por despido en España. Fórmula legal de 33 días. Resultado en segundos."
- OG image: screenshot of result
```

### Week 5-6: Monetization integration

**Task 2.1: Affiliate link integration**
```
After calculation, show:
"¿Crees que te están engañando?
👉 Habla con un abogado laboralista (gratis, 15 min)"
[Button "Consultar con especialista"]

Tracking:
- UTM parameters: ?utm_source=calc&utm_medium=organic&utm_campaign=finiquito
- Webhook: store click event → analytics
- Partner list: auto-pull available time slots (if partner has booking API)

Partners to integrate:
1. Debify (affiliate program confirmed)
   - €50-100 per qualified lead
   - Link: https://debify.es/afiliados/ [referral_id]

2. Consultorio Jurídico (affiliate)
   - PayPal payouts
   - Link: https://www.consultoriojuridico.es/programa-de-afiliados/

3. MiDespacho
   - €150 per user signup
```

**Task 2.2: Premium gate (Stripe)**
```
Modal after result:
"Quieres saber si es legal tu despido?"
[Upgrade to Premium — €9.99]

Premium features:
- Upload contract (PDF)
- AI analysis
- Red flag scorecard
- Export report (PDF)

Stripe integration:
1. Create Product (Premium Access)
2. Payment link or embedded checkout
3. Webhook: payment.success → unlock features
4. User dashboard: manage subscription
```

### Week 7-8: Polish + QA

**Task 3.1: Testing**
```
Unit tests (Jest):
- calculateFiniquito() function
  - Test: 1 year, €1600/mo, procedente → expect €533
  - Test: 8 years, €1600/mo, improcedente → expect €16,213
  - Test: ERTE logic

E2E tests (Playwright):
- User journey: Land → Fill form → See result → Click affiliate link
- Mobile: form responsive? buttons clickable?
- Affiliate link: UTM params present? tracking fires?

Manual QA:
- Test on iPhone (iOS Safari, Chrome)
- Test on Android
- Test all dismissal types
- Test edge cases (< 1 year employed, 0 days vacation, ERTE)
- Check legal disclaimer display
```

**Task 3.2: SEO setup**
```
- sitemap.xml
- robots.txt
- Google Search Console (verify ownership)
- Google Analytics 4 (track calc usage)
- Meta tags (OG, Twitter cards)
- Heading hierarchy (H1, H2)
- Structured data (FAQSchema, BreadcrumbSchema)
```

---

## Phase 2: Validation & Launch (Week 9-12)

### Week 9: Limited launch (50 users via ads)

**Task 4.1: Google Ads campaign**
```
Budget: €500/month (test spend)
Keywords:
- "calcular finiquito" (high-intent)
- "finiquito cuánto recibo"
- "despido improcedente"

Ads (3 variants):
1. "Calcula tu finiquito gratis en 2 min — Basado en ley española"
2. "¿Es legal tu despido? Descubre qué deberías recibir"
3. "Finiquito calculator España — Resultado inmediato"

Landing page: /calculator

Metrics to track:
- CPC (cost per click)
- CTR (click-through rate)
- Conversion (user completes calculation)
- Add-to-cart (premium click)
- Affiliate click rate
```

**Task 4.2: Affiliate performance tracking**
```
Dashboard:
- Total users: 50
- Affiliate clicks: 5 (10% CTR) ✓
- Affiliate conversions: 1 (20% of clicks)
- Revenue: €75 (1 conversion × €75)
- Premium signups: 2 (4% adoption)
- Premium revenue: €19.98

Go/No-Go check:
☑ Affiliate CTR > 8%? → 10% ✓
☑ Premium adoption > 2%? → 4% ✓
☐ Affiliate conversion > 10%? → 20% ✓✓

Decision: CONTINUE
```

### Week 10-11: Organic SEO ramp-up

**Task 5.1: Blog content blitz**
```
20 articles (2-3K words each), target low-hanging keywords:

1. "Cómo calcular tu finiquito" (target keyword)
2. "Despido procedente vs improcedente"
3. "ERTE: ¿Cuánto te toca de paro?"
4. "7 red flags en tu contrato laboral"
5. "Indemnización por despido improcedente 2026"
6. "Preguntas frecuentes sobre finiquito"
... + 14 more

Format: Every article ends with:
"⬇️ Usa nuestra calculadora para estimar tu finiquito"
[Button → Calculator]

Distribution:
- Publish on schedule (3x per week)
- Cross-post to LinkedIn (laboralistas network)
- Share in Reddit r/derechos, r/trabajadores
- Slack communities for Spanish professionals
```

**Task 5.2: Backlink building**
```
1. Outreach to laboralista directories
   Email: "We built a free finiquito calculator. Would you link?"
   Targets: tuabogadolaboralista.com, derecho.es, legal directories

2. Outreach to labor law bloggers
   Email: "New finiquito research + tool, thought you might link"

3. Create linkbait assets:
   - "Finiquito Statistics 2026" infographic
   - "100+ Common Finiquito Mistakes" guide (PDF)

4. Local directory listings:
   - Google My Business (if location-based)
   - Local labor law directories
```

### Week 12: Go/No-Go decision

**Metrics to evaluate:**

```
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Organic traffic (mo 2-3 avg) | ≥2K | ??? | TBD |
| Affiliate click-through | ≥10% | ??? | TBD |
| Affiliate conversion | ≥15% | ??? | TBD |
| Premium adoption | ≥3% | ??? | TBD |
| Affiliate revenue (mo 3) | ≥€8K | ??? | TBD |
| Repeat users | ≥15% | ??? | TBD |
| Mobile CTR | ≥80% of desktop | ??? | TBD |
| Lawyer satisfaction (NPS) | ≥40 | ??? | TBD |

Decision matrix:
If ALL green → GO (scale SEO, hire content writer)
If 2-3 red → PIVOT (adjust monetization or messaging)
If 4+ red → NO-GO (kill or restart with B2B focus)
```

---

## Phase 3: Scale (Month 4-12, if GO)

### Month 4-6: SEO domination
- 100+ blog articles
- Ranking #1-3 for main keywords
- 10K+ organic users/month
- €10K+ affiliate revenue/month

### Month 7-8: B2B SaaS launch
- Laboralista SaaS product (€100/mo)
- Recruit 50 law firms
- €5K/mo recurring revenue

### Month 9-12: Premium features expansion
- AI document analysis (premium €19.99)
- Contract generator (B2B, €29.99)
- Mobile app launch (iOS + Android)

---

## Key Documents

- Deep dive: `DEEP-DIVE-LEGALTECH-FINIQUITO.md`
- Legal disclaimer template: `[TBD]`
- Blog outline (20 articles): `[TBD]`
- Affiliate agreement template: `[TBD]`

---

## Success Metrics (OKR)

### Q1 OKR
- **Objective:** Launch calculator, prove product-market fit
- **KR1:** 1K organic users by end of month 3
- **KR2:** 10% affiliate click-through rate
- **KR3:** 5 lawyer partnership agreements signed

### Q2 OKR
- **Objective:** Establish market leadership in finiquito niche
- **KR1:** 10K organic monthly users
- **KR2:** €20K monthly affiliate revenue
- **KR3:** #1-2 ranking for "calcular finiquito"
