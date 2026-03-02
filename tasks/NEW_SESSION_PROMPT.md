# Промпт для новой сессии — Spain Niches 2026

Вставь это в начало новой сессии:

---

## Контекст проекта

Проект: **Research HQ** — поиск прибыльных онлайн-ниш в Испании для быстрого MVP.
Путь: `/Users/sprnff/Projects/research/`
GitHub: `https://github.com/suprunoff/spain-niches-2026`
Vercel: дашборд задеплоен (автодеплой при git push)

**Текущий статус дашборда:**
- 122 ниши | T1 (≥8.0): 19 | T2 (7.5-7.9): 27 | Avg score: 7.24
- Цель: 200 ниш. Осталось добавить ~78.
- Дашборд: `index.html` (single HTML file, data в `const D = [...]`)

## Ключевые файлы

```
index.html                                    # Дашборд (НЕ читать в контекст — только скрипт)
scripts/add_niches.py                         # Assembler: вставляет staging → index.html
tasks/staging/                                # Агенты пишут JS сюда
tasks/AGENT_PROMPT_TEMPLATE.md                # Шаблон промпта для агентов (200 слов)
tasks/HOW_TO_EXPAND_EFFICIENTLY.md            # Гайд по экономии токенов
01-frameworks/BEST_PRACTICES_AND_NICHE_SOURCES.md  # Источники ниш + best practices
02-research/spain-niches/                     # Все исследовательские файлы
CLAUDE.md                                     # Устав проекта (Spain context)
```

## Уже покрытые ниши (не дублировать)

RegTech: VeriFactu, autónomo bundle, Ley Atención al Cliente, VUD tourist rental, MiCA/DAC8, Crypto Tax Modelo 721
AI/Vertical SaaS: AI content gen, WhatsApp chatbot, padel club SaaS, private clinic SaaS, hostelería SaaS, EV fleet, agritech CAP subsidy, vet clinic SaaS, salon SaaS, dental clinic SaaS, pharmacy SaaS, ghost kitchen SaaS, padel court booking, private academy SaaS, STR revenue management, construction PM
Directories: home services, physio, psychologists, pets, auto repair, wedding vendors, legal pros, moving, construction trades, beauty/wellness, tutoring, aesthetic medicine
EdTech: GetCourse ES (infobiz), FUNDAE corporate L&D, bootcamp aggregator, coaching marketplace, tutoring marketplace, language school B2B, oposiciones prep
Crypto: Modelo 721 tax SaaS, MiCA CASPs compliance, crypto education community
PropTech: comunidades de vecinos SaaS
FinTech: payroll SaaS, gestoría SaaS, expense+VeriFactu, cross-border e-comm VAT, energy tariff comparator, insurance autónomos bundle
Marketplaces: language teaching, wedding marketplace, farm-to-restaurant, wine tourism, UGC creators, influencer matching, WhatsApp commerce, pharmacy delivery, MICE venues, dental tourism, boat charter
CleanTech: carbon CSRD SaaS, CEE energy certificate, cold chain monitoring, solar+battery marketplace, EV home charging
GovTech: municipal SaaS, parking fine management, public procurement LCSP
Logistics: last-mile delivery SaaS, returns management
Other: corporate travel SMB, coliving marketplace, loyalty program SMB, agri cooperative export, RGPD compliance SaaS, podcast monetization, contract generation, sports club management, construction PM

## Что НЕ покрыто (следующие батчи)

- **FinTech**: ипотечный comparador, crowdfunding (Verkami/Goteo), seguro salud comparison, digital broker platform, SMB lending/factoring, rent guarantee (seguro alquiler)
- **K-12**: school communication app (ClassDojo ES), private academy — НЕТ (уже покрыто), tutoring K-12 specific
- **Retail/Commerce**: pop-up store marketplace, social commerce B2B, franchise management SaaS
- **Maritime**: marina SaaS (есть в батче 4), boat maintenance directory, nautical school aggregator
- **HealthTech**: telemedicine specialist platform, mental health app B2C, occupational health (PRL) — уже есть в батче 4
- **Food**: restaurant procurement marketplace (Choco ES), artisan food D2C, allergen management SaaS
- **Legal**: immigration SaaS (NIE/TIE beyond DNV), digital signature (Signaturit vs DocuSign), company formation SaaS
- **Circular Economy**: industrial surplus marketplace, green building cert SaaS
- **HR**: remote work compliance (Ley trabajo a distancia), outplacement/recruitment SMB

## Как работать (ОБЯЗАТЕЛЬНО читай)

### Добавить новые ниши

```bash
# 1. Запусти агентов с коротким промптом (из шаблона ~200 слов)
# Агент пишет ТОЛЬКО в: tasks/staging/batchN.js

# 2. Вставить в дашборд (0 токенов LLM):
python3 scripts/add_niches.py tasks/staging/batch8.js --label "BATCH 8: Finance, K-12"

# 3. Проверка:
python3 -c "html=open('index.html').read(); print(html.count('{rank:'), 'niches')"

# 4. Пуш:
git add index.html tasks/staging/batch8.js && git commit -m "feat: add N niches (Batch 8)" && git push
```

### Формат staging файла

```javascript
// BATCH 8: описание
[
  {rank:1,name:"Mortgage Comparator",sub:"Independent hipoteca comparison — iAhorro gap",type:"FinTech",d:8,g:8,r:7,s:8,m:7,a:7,f:6,t:6,score:7.35,mi:6,mx:8,tam:"€30M",gap:"iAhorro conflict of interest; 500K mortgages/yr",cac:50,ltv:600,churn:"N/A",y1:"€300K",y1n:300,risks:"iAhorro competition; bank API restrictions",gtm:"SEO 'mejor hipoteca España' + notary partnerships",mvpScope:"Mortgage comparison, eligibility quiz, bank API, Bizum consultation"}
]
```

**Критические правила:**
- `rank:1` всегда — скрипт перенумерует
- `y1n` = тысячи EUR (€85K→85; €1.5M→1500)
- `mi`/`mx` = НЕДЕЛИ
- Только score ≥ 6.5
- Summary агента: только `"Done. N niches. Top: X.XX (Name)"`

## Spain Context (всегда актуально)

- Bizum: 30.6M users, €67.7B/год, обязателен для consumer
- WhatsApp: primary B2B channel, 40-60% reply rate
- VeriFactu: SL→янв 2027, autónomos→июл 2027 (forced demand)
- Август = мёртвая зона (0 продаж)
- Mobile-first: 80%+ трафик
- 85% пробуют бесплатно → freemium обязателен
- Madird (быстро) > Barcelona (SaaS hub) > Valencia > Andalusia (медленно)

## Скоринг формула

```
Score = (D×20 + G×20 + R×15 + S×15 + M×10 + A×10 + F×5 + T×5) / 100
T1 ≥8.0 | T2 7.5-7.9 | T3 6.5-7.4 | T4 <6.5 skip
```

## Что делать в этой сессии

Прочитай `tasks/HOW_TO_EXPAND_EFFICIENTLY.md` и `tasks/AGENT_PROMPT_TEMPLATE.md`.
Затем реши: расширяем до 200 ниш, или уже выбираем нишу для валидации?
