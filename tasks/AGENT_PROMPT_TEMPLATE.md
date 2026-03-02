# Agent Prompt Template — Spain Niches Research
# Копируй этот шаблон для новых агентов. Меняй только секцию [CATEGORIES].

## Правила вывода (ОБЯЗАТЕЛЬНО)
1. **ТОЛЬКО JS-объекты** — никакого markdown, никаких объяснений, никаких таблиц
2. Сохраняй ТОЛЬКО в `/Users/sprnff/Projects/research/tasks/staging/batchN.js`
3. Формат файла — массив JS объектов (см. ниже)
4. Максимум 5KB на файл
5. В task-notification summary — только: "Done. N niches, top score X.XX (NicheName)"

## Staging файл формат
```javascript
// BATCH N: описание
[
  {rank:1,name:"Название",sub:"Одна строка — ключевой gap",type:"TYPE",d:X,g:X,r:X,s:X,m:X,a:X,f:X,t:X,score:X.XX,mi:X,mx:X,tam:"€XM",gap:"Gap короткий",cac:XXX,ltv:XXXX,churn:"X%",y1:"€XXK",y1n:XX,risks:"Risk1; Risk2",gtm:"GTM кратко",mvpScope:"MVP scope кратко"},
  {...}
]
```

## Правила скоринга
- Score = (D×20 + G×20 + R×15 + S×15 + M×10 + A×10 + F×5 + T×5) / 100
- G: 0 конкурентов=10, 1-2 слабых=8, 3-5=6, сильный=3
- M: MVP weeks: 1-4→10, 5-8→8, 9-12→6, 13+→4
- y1n: Y1 ARR в тысячах EUR (€85K → y1n:85; €1.5M → y1n:1500)
- mi/mx: MVP в НЕДЕЛЯХ (не EUR, не месяцах)
- Добавлять только ниши с score ≥ 6.5

## Типы (type field)
RegTech / AI / Content / Platform / Marketplace / Vertical / Directory / EdTech /
FinTech / HRTech / PropTech / HealthTech / AgriTech / CleanTech / GovTech /
InsurTech / TravelTech / CreatorTech / LegalTech / RetailTech / LogisticsTech

## Уже покрыто (не дублировать)
RegTech: VeriFactu, autónomo bundle, Ley Atención, VUD tourist rental, MiCA/DAC8
AI/SaaS: AI content gen, WhatsApp chatbot, padel club SaaS, private clinic, hostelería, EV fleet, agritech CAP
Directories: home services, physio, psychologists, pets, auto repair, wedding vendors, legal, moving, construction trades, beauty, tutoring, aesthetic medicine
EdTech: GetCourse ES, FUNDAE SaaS, bootcamp, coaching, tutoring marketplace, language school B2B, oposiciones
Crypto: Modelo 721 tax, MiCA CASPs, crypto education
PropTech: comunidades de vecinos SaaS
FinTech: payroll SaaS, gestoría SaaS, expense+VeriFactu, cross-border e-comm, energy comparator, insurance autónomos
Content: Telegram media, AI content generator
Marketplace: language teaching, wedding marketplace
Vertical SaaS: vet clinic, salon, dental clinic, pharmacy, sports club, ghost kitchen, padel court, private academy, STR revenue mgmt, construction PM
CleanTech: carbon CSRD, CEE energy cert, cold chain monitoring, solar marketplace
GovTech: municipal SaaS, parking fines, public procurement
Other: farm-to-restaurant, wine tourism, dental tourism, UGC marketplace, influencer marketplace, WhatsApp commerce, loyalty SaaS, last-mile delivery, coliving marketplace

## Spain Context (вставляй в каждый промпт)
- Bizum: 30.6M users, €67.7B/год — ОБЯЗАТЕЛЕН для consumer
- WhatsApp: primary B2B канал, 40-60% reply rate
- VeriFactu дедлайн: SL янв 2027, autónomos июл 2027
- Август = мёртвая зона для продаж
- Mobile-first: 80%+ трафик с mobile
- 85% пробуют бесплатно — freemium необходим
- Bizum = differentiator vs global SaaS

## [CATEGORIES] — ЗАМЕНИТЬ НА АКТУАЛЬНЫЕ КАТЕГОРИИ
Исследуй ниши в следующих категориях:
- Категория A: ...
- Категория B: ...
