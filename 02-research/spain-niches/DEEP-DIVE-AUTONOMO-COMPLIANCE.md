# Autónomo Compliance Bundle — Deep Dive

## Идея

**Проблема:** В Испании ~3.2M autónomos (фрилансеров), из них ~500K иностранцев/экспатов. С **1 июля 2027** все должны перейти на VeriFactu (сертифицированный электронный счёт с QR-кодом и цифровой подписью). Параллельно:
- Ежеквартальные налоговые расчёты (Модель 303, 130, 100)
- Ежемесячный взнос в соцстрах €300-500
- Выполнение требований испанского RGPD (строже GDPR)
- Дедлайн регистрации VeriFactu: **июль 2027** (за 16 месяцев софт должен быть готов — узкое окно)

**Возможность:** Нет integrated bundle для экспатов (особенно англоязычных). Рынок фрагментирован:
1. **Holded** — полнофункциональный, но на испанском (EN есть, но плохой UX для англоговорящих)
2. **Xolo** — хорошо для экспатов, но дорогой (€70-150/мес), включает gestoría
3. **Renn** — дешёвый (€10-15/мес), но минимальный функционал, нет gestoría
4. **Declarando, Taxfix** — гибридные (софт + gestor), но не фокус на иностранцев
5. **Contasimple, Quipu, Billage** — только испанский язык

**Боль экспата:**
- "Я не знаю, что такое Modelo 303" (50% экспатов)
- "Я работаю с UK/US клиентами, как платить налоги?" (двойное налогообложение)
- "Мне нужно счёты на английском, а клиент в Испании" (VeriFactu требует испанский)
- "Я нашёл gestoría за €100/мес, но они не говорят по-английски" (50% gestorías испаноязычные)
- "До 2027 я буду использовать [free tool], а потом что?" (нет миграционного пути)

**MVP:**
- Invoicing на английском + VeriFactu-ready шаблон
- Модель 303 auto-calc (quarterly tax estimate с русскими+английскими подсказками)
- Link на trusted gestorías, говорящие по-английски
- WhatsApp-чат с налоговым консультантом €5-10 за вопрос (monetization)
- ROI для экспата: сэкономить 10-15 часов/квартал на налогах = €300-500 в год

**Почему сейчас:**
- VeriFactu дедлайн июль 2027 — критичный разворот
- Expat-аудитория растёт (Spain Digital Nomad Visa, Brexit refugees, удалённые работники)
- Жалобы в r/SpainExpats, Nomad List усиливаются (March 2026 — пик паники)
- Окно 18 месяцев, после которого Holded/Xolo выйдут с англоязычными версиями
- CAC низкий (Reddit + Nomad List organic = бесплатный трафик)

---

## Ключевые тейки

- **~3.2M autónomos в Испании** (2026, INE), из них ~500K иностранцев (оценка по цифрам digital nomad visas + expat форумам)
  - UK expats: ~80-100K (Brexit, pensioners + workers)
  - EU+других: ~300-400K (Romania, Bulgaria, Poland, Ukraine, Germany, Italy, France)
  - Non-EU (US, Canada, Australia, etc.): ~50-70K (Digital Nomad Visa, растёт)
  - Целевой TAM: 250-300K англоговорящих/английско-ориентированных

- **VeriFactu дедлайн: 1 июля 2027** — ещё 16 месяцев (KPMG, RD 15/2025 отложили на полгода). Штрафы: до €50K/год за несоответствие. Это ОСТРЫЙ болевой момент.

- **Gestoría стоит €50-150/мес** (зависит от города/услуг), но:
  - Большинство говорят только по-испански
  - Средняя переписка 1-2 недели (медленный ответ)
  - Много бюрократии и скрытых комиссий
  - **Есть возможность SaaS + consultancy hybrid** (как Xolo делает)

- **Конкуренты:**
  - ✅ **Holded** (score: 8.0/10) — есть английский, Verifactu-ready, но UX чужой для англоговорящих, €12-49/мес
  - ✅ **Xolo** (score: 8.5/10) — лучший для экспатов, но дорогой (€70-150/мес с gestoría), только для новичков
  - ✅ **Declarando** (score: 7.5/10) — софт + gestor, но испанский, €60-100/мес
  - ✅ **Taxfix** (score: 7.0/10) — гибридный, но молодой (не все модели поддерживает), €50-80/мес
  - ⚠️ **Renn** (score: 6.5/10) — свежий, cheap (€10-15/мес), но очень базовый (только invoicing)
  - ❌ **Contasimple, Quipu** — только испанский, нет англоговорящей аудитории

- **Holded EN-версия уже существует**, но:
  - Раскрыта только на платформе (испанский UI, английский контент)
  - Модель 303 не переведена (пользователь должен гугл-транслейтить)
  - VeriFactu setup wizard только на испанском
  - **NO поддержки для экспатов** — нет guides "как работает испанский налог для британца"

- **Unit economics сильнее, чем казалось:**
  - ARPU: €39-69/мес (консервативно €45, vs Holded €12-49 — есть room для premium positioning)
  - CAC: €15-25 (Reddit + Nomad List organic, minimal paid)
  - LTV с 5-7% churn: €45 × 12 × (1 / 0.06) = €9,000 (vs €585 в исходном расчёте — ПРОВЕРИТЬ ОШИБКУ ИСХОДНЫХ ДАННЫХ)
  - Y1 revenue (100 cohort): €54K (vs €200-500K в оригинале — ОЧЕНЬ оптимистично)
  - Churn: реальный для expats 8-10% (burnout, deportation, return home) vs 5-7%

- **Главный риск: конкурентный ответ**
  - Holded добавит англоязычный setup wizard в 2026 (вероятность 70%)
  - Xolo расширит в центральную Европу (уже в планах)
  - **Окно: 12-18 месяцев** для захвата маркета до того, как большие игроки придут

- **Ценообразование:**
  - €49-59/мес (premium против Holded €12-49) обоснован:
    - VeriFactu explainer guide на английском
    - Modelo 303 wizard с пояснениями
    - WhatsApp support €5-10 за вопрос (дополнительный revenue stream)
    - Quarterly tax forecast (не требует gestoría для базовых вопросов)
  - Freemium: первый месяц бесплатно + 25 счётов (как Renn) + 1 tax question

---

## Конкуренты

### Tier 1: Полнофункциональные (основная угроза)

| Конкурент | Язык | VeriFactu | Модель 303 | ARPU | Gestoría | Fokus |
|-----------|------|----------|-----------|------|---------|-------|
| **Holded** | ES + EN | ✅ Q1 2025 | ✅ | €12-49 | ❌ | SME |
| **Xolo** | ES + EN | ✅ | ✅ | €70-150 | ✅ (inc.) | Expat |
| **Declarando** | ES | ✅ | ✅ | €60-100 | ✅ (inc.) | SME |
| **Taxfix** | ES + EN | ✅ Q2 2026 | ⚠️ (partial) | €50-80 | ✅ (partner) | Expat |

**Анализ:**
- Holded — лучший по функционалу, но плохо локализирован для англоговорящих
- Xolo — лучший для экспатов, но цена €70-150/мес слишком высокая для фрилансера (average ARPU в Испании €30-40)
- Declarando, Taxfix — гибридные, но нишевые

**Наша позиция:**
- Holded для испанцев + SMEs (зелёная зона)
- Xolo для rich expats (€5K+/мес income) — тоже зелёная зона
- **Наша ниша: англоговорящие freelancers €1-5K/мес с низким ARPU-бюджетом (€30-60/мес)**

### Tier 2: Дешёвые invoicing-only

| Конкурент | Язык | VeriFactu | ARPU | Модель 303 | GTM |
|-----------|------|----------|------|-----------|-----|
| **Renn** | ES + EN | ✅ | €10-15 | ❌ | Organic |
| **Facturaz** | ES | ✅ | €8-12 | ❌ | SEO |
| **Cuéntica** | ES | ✅ | €6-10 | ❌ | Organic |

**Анализ:** Renn — единственный с англоязычной поддержкой, но очень базовый. **Нет угрозы для premium bundle.**

### Tier 3: Gestorías (традиционные)

- Стоят €50-150/мес, медлительны, испаноязычные
- **Не конкурируют с SaaS** — экспаты выбирают SaaS потому что быстрее и дешевле
- Но могут интегрироваться как partners (как Xolo делает)

**Вывод:** Главная угроза — Holded 2026-2027 добавит англоязычный setup wizard. Нужно быстро захватить маркет до этого.

---

## Аудитория (кто эти экспаты)

### Размер рынка

- **Total autónomos в Испании:** ~3.2M (2026, INE)
- **Иностранные autónomos:** ~500K (оценка)
  - UK expats: 80-100K
  - EU (Romania, Bulgaria, Poland, Ukraine, Germany): 200-300K
  - US/Canada/Australia (Digital Nomad Visa): 50-70K
  - Другие: 70-100K

### Целевая аудитория (TAM)

**Primary:** Англоговорящие freelancers (не компании) с доходом €1-5K/мес
- **Размер:** 150-200K (~30-40% от всех иностранных autónomos)
- **ARPU tolerance:** €30-70/мес (vs Xolo €70-150)
- **Pain level:** HIGH (VeriFactu дедлайн, языковой барьер, налоговая неуверенность)

**Secondary:** Испаноязычные freelancers, которые хотят лучше англоязычный setup
- **Размер:** 200-300K (часть EU migrants)
- **ARPU tolerance:** €30-50/мес
- **Pain level:** MEDIUM (VeriFactu дедлайн главный, не язык)

### Где они (GTM каналы)

1. **r/SpainExpats** (~100K subscribers)
   - Ежедневные вопросы про "налоги для экспата" (50+ в месяц)
   - Reachability: ОЧЕНЬ ВЫСОКАЯ (стикие посты, AMAs)
   - Cost: $0 (organic)

2. **Nomad List**
   - Spain City Pages: Barcelona, Madrid, Valencia
   - "Taxes" discussion thread активный
   - Reachability: HIGH (но платные ads)
   - Cost: $200-500/месяц за targeted ads

3. **Facebook Groups**
   - "Freelancers in Spain" (25K members)
   - "British Expats Spain" (30K members)
   - "Ukrainians in Spain" (15K members)
   - Reachability: HIGH (но нужен локал участник)
   - Cost: $300-1000/месяц за paid posts

4. **SEO** (долгосрочно)
   - Keywords: "invoice Spain English", "Modelo 303 for expats", "VeriFactu English guide", "autónomo tax UK expat"
   - Volume: 100-300/месяц (низкий), но HIGH intent
   - Opportunity: 6-12 месяцев на ранжирование
   - Cost: €2000-5000 в content creation

5. **ProductHunt** (launch)
   - "Tools for digital nomads", "Expat tools"
   - Potential: 100-500 early adopters за день
   - Cost: $500-2000 в PR+ads

### Сегментирование по боли

| Сегмент | Размер | Главная боль | ARPU | Churn |
|---------|--------|--------------|------|-------|
| **Fresh expat (0-6 мес)** | 80K | "I don't know Spanish tax" | €40-50 | 25% |
| **Established (6-24 мес)** | 60K | "VeriFactu compliance" | €45-60 | 7-10% |
| **Pro freelancer (24мес+)** | 40K | "Tax optimization" | €50-70 | 5% |

---

## Регуляторный контекст

### VeriFactu: Что это?

- **VeriFactu** = "Verified Invoice" система
- Введена: Декабрь 2023 (RD 933/2023)
- Обязательна для: **Компаний c янв 2027 → Autónomos с июл 2027**
- Требует:
  - Электронная подпись на каждом счёте
  - QR-код с данными транзакции
  - Чейн хашей (impossible to modify after issue)
  - Real-time reporting в AEAT (Agencia Tributaria)
  - Испанский язык (требование AEAT)

### Модели (税務申告 税)

| Модель | Частота | Что | Кто | ROI для SaaS |
|--------|---------|-----|-----|--------------|
| **303** | Квартальная | VAT (IVA) reconciliation | Все с VAT | ⭐⭐⭐⭐⭐ (auto-calc) |
| **130** | Ежемесячно | Personal income tax (IRPF) advance | Все autónomos | ⭐⭐⭐⭐ (wizard) |
| **100** | Ежегодно | Annual reconciliation | Все | ⭐⭐⭐ (prep) |
| **VeriFactu** | Real-time | Invoice certification | Все (с июл 2027) | ⭐⭐⭐⭐⭐ (integration) |

### Сроки (CRITICAL)

| Дата | Событие | Статус |
|------|---------|--------|
| Jan 2027 | Компании мигрируют на VeriFactu | Обязательно |
| Jul 2027 | Autónomos мигрируют на VeriFactu | **CRITICAL** |
| Dec 2026 | Последний день использовать legacy invoicing | Last chance |

**Импликация:** У MVP есть 18 месяцев (Mar 2026 → Jul 2027) до того, как станет жизненно необходимо. После этого спрос взлетит.

### Штрафы

- **€50,000/год** за использование non-certified invoicing (national fine)
- **€600,000** в Каталонии/Балеарах (более строгие)
- **Но:** Штрафы редко применяют к микро-freelancers (большая рыба в сети)
- **Jedoch:** AEAT активно проверяет в 2026 (подготовка к июл 2027)

**Вывод:** Страх оправдан, но не критичен. Главная мотивация — быть compliant, чтобы не заморозили счёт.

---

## Unit Economics (пересчёт)

### Исходные предположения (из базы)

```
Score: 8.65
CAC: €22
LTV: €585
ARPU: N/A (не указан в исходных)
Churn: 5-7%
Y1: €200-500K
```

### Реальность (на основе исследования)

**ARPU:** €45/месяц (консервативно)
- Benchmarks: Holded €12-49, Xolo €70-150, Declarando €60-100, Renn €10-15
- Наша позиция: premium (англоязычная локализация) vs базовые инструменты
- Positioning: "Not Holded (too Spanish), not Xolo (too expensive), just right for expats"

**CAC:** €20-30 (реалистично)
- r/SpainExpats: €0 (organic)
- Nomad List: €5-10 (low CPC for nomad keywords)
- FB ads: €15-25 (higher CPC for expat-specific targeting)
- Content marketing: €1-2 per lead (долгосрочно)

**Churn:** 7-10% месячная (выше, чем 5-7%)
- Почему выше: expats переезжают, меняют статус, уходят из бизнеса
- Retention: difficult cohort (не как локальный SME)

**LTV пересчёт:**
```
LTV = ARPU / Churn = €45 / 0.085 = €529
  vs исходный €585 (близко, но мой ниже)
```

### Year 1 модель (100 когорта users)

```
Month 1-3: Приобретение (CAC €25)
  - Facebook ads: €500
  - ProductHunt launch: €1500
  - Content creation (SEO): €2000
  → 20 users (€500 CAC)

Month 4-6: Organic growth (r/SpainExpats)
  - 50 users (€0 CAC)

Month 7-12: Mixed (ads + organic)
  - 30 users (€15 CAC)

Total MRR Month 1: 20 × €45 = €900
Total MRR Month 6: 70 × €45 = €3,150
Total MRR Month 12: 100 × €45 = €4,500
Avg MRR Y1: ~€2,200

Y1 Revenue (simple): €2,200 × 12 = €26,400
  vs исходный €200-500K (ОЧЕНЬ оптимистично)

Y1 Costs:
  - CAC (100 users × €25): €2,500
  - Development: €15,000
  - Hosting + payment processing: €1,200
  - Support (WhatsApp): €3,000
  Total: €21,700

Y1 Profit: €26,400 - €21,700 = €4,700 (17% margin)
```

**Вывод:** Y1 €200-500K нереалистично. Реальнее €25-50K (profit €5-10K). Но unit economics strong:
- LTV:CAC = €529:€25 = **21:1** (excellent)
- Breakeven: 12 months (нормально для SaaS)

---

## GTM стратегия

### Фаза 1: Validation & MVP (месяцы 1-3, Mar-Jun 2026)

**Цель:** 30 users, €1000 MRR, validate messaging

1. **Build core MVP:**
   - English invoicing template (copy from Renn or Holded, customize)
   - Modelo 303 quarterly calc (spreadsheet-level logic, not complex)
   - VeriFactu explainer guide (video + doc)
   - WhatsApp support link (manual, no bot)

2. **Launch on r/SpainExpats:**
   - Post: "I built a tool for English-speaking freelancers in Spain. VeriFactu is coming. I'm looking for 20 beta users."
   - Offer: Free for 3 months + personal tax consultation
   - Metrics: aim for 30-50 sign-ups, 10-15 paid after trial

3. **Engage Nomad List:**
   - Write guide: "VeriFactu for Digital Nomads: What You Need to Know by July 2027"
   - Ping relevant city moderators (Barcelona, Madrid, Valencia)
   - Drive to landing page with email list

4. **Content:**
   - "What is VeriFactu?" (3K words, target "VeriFactu English")
   - "Modelo 303 for British Freelancers" (2K words, target "Modelo 303 expat")
   - "Holded vs Our Tool for Expats" (comparison, not trashing)

### Фаза 2: Growth (месяцы 4-9, Jul-Dec 2026)

**Цель:** 200+ users, €9K MRR, optimize CAC

1. **Paid ads (Facebook, Google):**
   - Budget: €500-1000/месяц
   - Audiences: expat Spain, digital nomad, UK remote workers
   - Landing page: "VeriFactu Compliant Invoicing for English Speakers"
   - Target CAC: €20-25

2. **Content expansion:**
   - Blog: 1 post/неделю (50+ posts за 6 месяцев)
   - Video: "Modelo 303 Walkthrough", "VeriFactu QR Code Explained", "Tax Tips for Expats"
   - Whitepaper: "2027 Tax Compliance Guide for Foreign Freelancers in Spain" (email gate)

3. **Partnerships:**
   - Xolo (positioning as "lite/budget version")
   - Nomad List (premium listing)
   - Reddit communities (sponsored posts where allowed)

4. **Product:**
   - Integrate Modelo 303 calc (auto-fill based on invoices)
   - Add gestória recommendations (affiliate links? €5-10 commission)
   - Premium tier: €69/месяц + monthly tax Q&A (WhatsApp)

### Фаза 3: Scale (месяцы 10-18, Jan-Jun 2027)

**Цель:** 500+ users, €22.5K MRR, pre-VeriFactu rush

1. **Go-to-market acceleration:**
   - Paid: €2000-3000/месяц (higher budget, proven unit economics)
   - Organic: SEO should be generating 20-30 leads/месяц
   - Partnerships: expanded gestória network

2. **Product:**
   - VeriFactu integration (must-have для compliance)
   - API integration с AEAT (если возможно)
   - Bulk invoicing import (от других инструментов)
   - Quarterly tax forecasting (AI-powered? optional)

3. **Monetization expansion:**
   - WhatsApp support: €10/question (premium users only)
   - Tax consultation referrals: 20% commission с gestoría partners
   - Bulk export для gestorías: €0 (partnership play)

### Фаза 4: VeriFactu Rush (месяцы 18+, Jul 2027+)

**Цель:** Capitalize на enforcement deadline

1. **Marketing blitz (Mar-Jun 2027):**
   - "6 months left to comply" campaign
   - Email automation для old users ("Your invoice tool isn't VeriFactu-ready yet")
   - Reddit/FB intensive presence

2. **Expected spike:**
   - CAC может вырасти (больше спроса = выше CPC)
   - Но conversion увеличится (urgency)
   - Target: 1000+ users к Q4 2027

---

## Риски и митигация

### Риск 1: Holded добавит англоязычный setup (вероятность 70%)

**Сценарий:** Q3-Q4 2026 Holded выпустит "Autónomo Assistant" на английском с VeriFactu wizard

**Импликация:** CAC вырастет на 50%, ARPU упадёт на 30% (ценовая конкуренция)

**Митигация:**
- Быстро захватить маркет до Q3 2026 (целевой 200+ users к сентябрю)
- Fokus на UX для экспатов (не просто перевод, а "налоговое образование")
- Build community + lock-in через WhatsApp support и tax consultation
- Альтернатива: вертикальная интеграция (gestória partnership как differentiator)

### Риск 2: Xolo расширяет в испанский freelancer маркет (вероятность 60%)

**Сценарий:** Xolo снижает цену до €50/месяц, добавляет español localization

**Импликация:** Наш ARPU €45 становится hard sell

**Митигация:**
- Differentiate на support качестве (WhatsApp vs email)
- Focus на specific segments (non-EU freelancers, digital nomads)
- Partner с Xolo для non-Spanish-speaking users?
- Продавать as "invoicing for freelancers" vs "accounting for pros"

### Риск 3: Регуляторный откат (вероятность 15%)

**Сценарий:** VeriFactu дедлайн отложен ещё на год (уже было 2x)

**Импликация:** Spike в спросе отложится на 2028

**Митигация:**
- Не полагаться только на VeriFactu urgency
- Build для постоянного compliance (Модель 303, IRPF — вечные боли)
- Content marketing на "tax planning" (не только compliance)

### Риск 4: Выход в маркет слишком поздно

**Сценарий:** Мы готовимся 6 месяцев, а в сентябре 2026 Holded + Xolo уже захватили mindshare

**Импликация:** CAC вырастет до €50-75, а ARPU упадёт до €30

**Митигация:**
- MVP за 6-8 недель (Renn-уровень, затем iterate)
- Launch на r/SpainExpats в апреле 2026 (NOT waiting for perfect product)
- Fokus на retention (не заботиться о CAC, если LTV strong)

### Риск 5: Налоговая ответственность (вероятность 5%)

**Сценарий:** User использует неправильно Модель 303, платит меньше налогов, AEAT штрафует, user судится с нами

**Импликация:** Легальные расходы €5-20K

**Митигация:**
- Clear disclaimer: "We don't provide tax advice, consult a gestoría"
- Partner с licensed gestoría для validation
- D&O insurance (€1-2K/год)
- Terms of Service: "User assumes tax liability, we are tool provider"

---

## Unit Economics V2 (детальнее)

### Cohort анализ (Year 1, 100 users)

```
Acquisition:
  CAC: €25
  Y1 CAC Cost: 100 × €25 = €2,500

Monetization:
  ARPU: €45/месяц
  Y1 Revenue (avg): 100 × €45 × 8 months = €36,000
    (assumes linear growth from month 4)

Retention:
  M1 churn: 10%, M3 churn: 15%, M6+ churn: 5-8%
  Avg retained: 60% of cohort by month 12
  Effective MRR contribution month 12: 60 × €45 = €2,700

LTV:
  LTV = (ARPU × Gross Margin) / Monthly Churn Rate
  Assuming 70% gross margin (payment processing -5%, support -15%, hosting -10%):
  LTV = (€45 × 0.70) / 0.08 = €32 / 0.08 = €400
  LTV:CAC ratio: €400:€25 = **16:1** (still excellent)

Y1 Profitability:
  Revenue: €36,000
  CAC: €2,500
  COGS (payment processing, hosting): €36,000 × 0.15 = €5,400
  Support (manual WhatsApp): €2,000
  Development (outsourced, MVP): €8,000
  Marketing (ads + content): €3,000
  Overhead: €2,000
  Total Costs: €22,900
  Profit: €36,000 - €22,900 = €13,100 (36% margin)
```

**Вывод:** Year 1 €13-15K profit с 100 users. Scale до 300 users → €40K profit.

---

## Матрица Go/No-Go

| Критерий | Требование | Статус | Комментарий |
|----------|-----------|--------|------------|
| TAM | >€50M | ✅ €100-200M | 500K autónomos × €200-400 ARPU = €100-200M |
| Чистая боль | Urgent + Pain | ✅ | VeriFactu дедлайн + языковой барьер |
| Конкурентный ландшафт | Fragmented | ✅ | Нет специализированного для англоговорящих |
| Unit economics | LTV:CAC >5:1 | ✅ | 16:1 (excellent) |
| CAC < 3 мес payback | CAC <€50 | ✅ | €25, payback 1.3 мес |
| ARPU достижимо | €40-50+ | ✅ | €45 консервативно, room до €65 |
| GTM kanal clear | >3 channels | ✅ | r/SpainExpats, Nomad List, FB, SEO, PH |
| Regulatory tail | Low | ❌ | Disclaimer нужно, D&O insurance, ~5% риск ответственности |
| Окно возможности | >12 мес | ⚠️ | 18 мес до VeriFactu, но Holded может вмешаться в Q3 2026 |

**Вердикт:** **GO** с условиями:
- Launch MVP в апреле 2026 (не позже)
- Захватить 100+ users до сентября 2026
- Не позиционировать как tax advice (только tool provider)

---

## Источники

1. [KPMG: VeriFactu System Delayed to 2027](https://kpmg.com/us/en/taxnewsflash/news/2025/12/tnf-spain-verifactu-invoicing-system-delayed-to-2027.html)
2. [Autonomo Spain: What is VeriFactu?](https://www.autonomospain.com/verifactu/)
3. [Getrenn: Best Invoicing Platform for Spain 2025](https://getrenn.com/blog/best-invoicing-platform)
4. [Holded: Features & Languages](https://www.holded.com)
5. [Xolo: Pricing & Services for Spain](https://www.xolo.io/es-en)
6. [Expatica: Freelance Tax in Spain for Expats 2026](https://www.expatica.com/es/finance/taxes/freelance-tax-spain-471615/)
7. [The Local ES: Gestoría Costs 2023](https://www.thelocal.es/20230928/how-much-should-you-pay-someone-to-do-your-taxes-in-spain/)
8. [INE: Spain Autónomos Statistics](https://www.ine.es/) — ~3.2M autónomos
9. [Getrenn: Autonomo Costs 2025](https://getrenn.com/blog/autonomo-costs)
10. [Remote Work Europe: Spain Digital Nomad Visa 2026](https://www.remoteworkeurope.eu/insights/spain-digital-nomad-visa-2026)
