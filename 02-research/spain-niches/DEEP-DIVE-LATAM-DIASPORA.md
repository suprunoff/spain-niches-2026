# LATAM Diaspora Platform Spain — Deep Dive

**Дата анализа:** март 2026
**Статус:** Discovery фаза
**Автор:** Research Team

---

## 1. Идея

**LATAM Diaspora Platform Spain** — всё-в-одном экосистема для 4.7M латиноамериканцев в Испании:

- **Directory** — поиск латиноамериканских специалистов, услуг, бизнесов
- **Job Board** — вакансии, где ценятся латиноамериканские навыки (языки, культура)
- **Services Marketplace** — фрилансеры и компании продают услуги
- **Remittances Hub** — партнёрства с Wise, Remitly для отправки денег домой
- **Community** — события, новости, форум для сети

**Гипотеза:** Испанские диаспоры (турки, марокканцы, восточноевропейцы) уже используют закрытые WhatsApp-группы и Facebook-сообщества. Если формализовать и монетизировать их → большие деньги.

---

## 2. Рынок: портрет аудитории

### Размер и рост

| Метрика | Данные 2025 |
|---------|-----------|
| **Латиноамериканцы в Испании** | 4.2M человек |
| **% от иностранцев** | 60% от всей иммиграции |
| **% от населения Испании** | 8.5% |
| **Прирост Q2 2025** | +36.1K колумбийцы, +21.6K венесуэльцы |
| **Ежегодный прирост** | ~15-20% (венесуэльцы и колумбийцы) |

**Ключевой вывод:** Это не стабильная диаспора, это **волна** (2022-2026). Максимальная открытость к новым платформам.

### Top-5 национальности

| Страна | Количество | % от диаспоры |
|--------|-----------|---------------|
| Колумбия | 857K | 20.4% |
| Венесуэла | 600K | 14.3% |
| Эквадор | 449K | 10.7% |
| Аргентина | 416K | 9.9% |
| Перу | ~200K | ~4.8% |
| **Прочие** | ~1,700K | ~40% |

**Замечание:** Колумбийцы и венесуэльцы растут быстрее всего (экономические причины, безопасность). Они наиболее активны в бизнесе.

### Распределение по городам Испании

| Город | Латиноамериканцев | % от населения |
|-------|------------------|-----------------|
| **Мадрид (Community)** | 1,069K | 15% |
| **Мадрид (город)** | ~500K | 12% |
| **Барселона (метро)** | ~350K | 8-10% |
| **Валенсия (метро)** | ~150K | 5-7% |
| **Малага** | ~100K | 4-5% |
| **Аликанте** | ~80K | 3-4% |

**Стратегия:** Мадрид → Барселона → Валенсия (80% диаспоры) → потом остальное.

### Профиль работника

- **Возраст:** 25-45 лет (максимум 35-40)
- **Образование:** 52% имеют высшее образование
- **Пол:** 56% женщины, 44% мужчины
- **Стаж в Испании:** в среднем 10.7 лет
- **Digital fluency:** высокая (мобилк-первый, WhatsApp, Instagram)
- **Языки:** испанский (родной) + английский 40-50%, каталанский (Барселона) +20% ценности

### Платёжная способность

- **Минимальный оклад Испании 2026:** €1,476/мес (брутто)
- **Латиноамериканцы зарабатывают:** 80-90% от испанской нормы (меньше опыта)
- **Самозанятые/self-employed:** 23-30% от диаспоры → **50K+ LATAM-owned businesses**
- **Годовой оборот типичного SMB:** €80K-300K
- **Платёжные привычки:** Bizum (50% на переводы внутри страны), карта (e-commerce), SEPA (B2B)

**Вывод:** Платёжная способность есть. Проблема — они платят, но **фрагментированно** (разные платформы, в т.ч. неформальные).

---

## 3. Рынок: специфика Испании

### Факторы успеха любой LATAM-платформы

1. **WhatsApp-first** — первая точка контакта. Всё начинается с WhatsApp группы (100K+ в "Venezolanos en Madrid", "Colombianos Barcelona")
2. **Испанский язык обязателен** — 85% не готовы к английскому интерфейсу
3. **Культурная близость** — "мой люд" важнее цены. Отзывы от латиноамериканцев > отзывы от испанцев
4. **Доверие через рекомендации** — 92% проверяют отзывы, но **внутри сообщества** (LinkedIn для LATAM)
5. **Медленные решения** — SMB решает 2-4 недели, corp 3-6 месяцев. Август = ноль.
6. **Регионализм** — Мадрид быстро (EN ok), Барселона медленнее (каталанский обязателен)

### Регуляторные препятствия (2026-2027)

| Дедлайн | Закон | Влияние на платформу |
|---------|-------|---------------------|
| Янв 2027 | VeriFactu (SL) | Автоматизация счётов-фактур → может быть feature платформы (B2B) |
| Июл 2027 | VeriFactu (self-employed) | 50K LATAM самозанятых будут вынуждены за 6 мес до дедлайна искать решение → **возможность для e-signature интеграции** |
| Дек 2026 | Ley Atención al Cliente | Только для 250+ сотр / €50M+ выручка → не повлияет на SMB |
| Постоянно | RGPD | Строже чем GDPR, требует видимое согласие → обязателен clear opt-in |

**Вывод:** Нет больших барьеров. Скорее наоборот — регуляторная неопределённость толкает SMB к платформам, которые "всё делают за них".

### Психология потребителя LATAM в Испании

- **Цена важнее бренда** → freemium обязателен
- **Доверие через отзывы** → рейтинг ≥4.0 критичен, отзывы = социальный капитал
- **Мобильно-первый мир** → 80% трафика с мобильных
- **WhatsApp = деловой мессенджер** → 40-60% reply rate vs 0.5-1.5% email
- **Сообщество > отдельные люди** → они ищут "свою тусовку", не просто услугу

---

## 4. Размер рынка (TAM/SAM/SOM)

### TAM (Total Addressable Market) — теоретический

```
4.7M латиноамериканцев × €50 ARPU/год = €235M/год

Состав:
- Directory listing fees: €10-20/год × 50K businesses = €500K-1M
- Services commissions: 10-15% × €200M/год = €20-30M (biggest)
- Remittances affiliate: €2-5 per transaction × 100M transactions/год = €200-500M (но очень конкурентно)
- Job board: €50-300 per post × 10K vacancies/год = €500K-3M
- Premium membership: €5-15/мес × 200K users = €12-36M/год
```

**TAM ~€235M/год** (реалистично).

### SAM (Serviceable Available Market) — сегмент, который может быть охвачен

```
Сценарий 1: Только Directory + Jobs
- 50K businesses × €20/год listing = €1M
- 200K job seekers × €2/год = €400K
- SAM = €1.4M/год

Сценарий 2: Full suite (Directory + Jobs + Services + Remittances)
- Все выше = €1.4M (direct)
- + Services commission (10% penetration): €200M × 10% × 12% = €2.4M
- + Remittances affiliate (5% penetration): 4.7M × 5% × €10/transaction × 12 = €28M (!!!!)
- SAM = €31.8M/год

Реалистичный SAM (Year 1-2): €2-5M
```

### SOM (Serviceable Obtainable Market) — что возможно в Year 1

```
Сценарий: Стартап, полусоздан в Мадриде/Барселоне

MRR Path:
- M1-3: 0 (запуск)
- M4-6: €10K/мес (Directory listing + первые рефералы)
- M12: €50K/мес (job board + услуги)
- M18: €100K/мес (remittances + services taking off)

SOM (Year 1) = €50-100K/мес × 12 = €600K-1.2M
Realistic SOM = €500K (conservative)
```

---

## 5. Бизнес-модель: 4 варианта

### Вариант A: Directory + Premium Listings (Yelp-like)

**Структура:**

```
Бесплатная база данных:
- 50K компаний (венесуэльские парикмахеры, колумбийские юристы, эквадорские электрики)
- Отзывы, рейтинги
- Photo gallery, hours, location

Premium listing (€20-50/мес):
- Featured placement
- Verified badge
- Analytics dashboard
- WhatsApp integration (прямые заказы)
- Call button
```

**Доход:** €50K businesses × €20 (средний) = €1M/год (100% penetration = нереально)

**Реалистичный MRR:** €50K × 30% penetration × €20 = €300K/мес → €3.6M/год

**Pros:**
- Испанский Yelp (никого нет на LATAM-рынке)
- Простой MVP (directory + reviews)
- Нет compliance-проблем

**Cons:**
- Конкурирует с Directorio Latinos, CNL (уже существуют)
- Низкая маржа — нужен high volume
- Монетизация только через listing fees → sticky revenue

---

### Вариант B: Job Board (AngelList для LATAM)

**Структура:**

```
Вакансии для латиноамериканцев (преимущества):
- "Языки: испанский + родной язык"
- "Культурная чувствительность" = преимущество
- Виза/NIE + легальная помощь встроена
- Remote-friendly roles
- Career development для LATAM workers

Работодатели платят за:
- Bump up вакансии (€50-100)
- Featured jobs (€200-500)
- Pinned jobs (€1000+)
- Recruitment ATS (€100-300/мес)
```

**Доход:**

```
€100 × 5K vacancies/год × 50% conversion = €250K/год (базовый)
+ Premium tiers = €500K-1M/год realistic
```

**Pros:**
- Уникальный угол (LATAM-специфичный job board)
- RemotoList уже есть, но fokus на remote → local positioning может быть strong
- Recurring revenue from premium employers
- High engagement (job seekers + employers)

**Cons:**
- Нужна critical mass (100+ vacancies в день)
- Зависит от экономики Испании
- Конкуренция: Indeed, InfoJobs, Computrabajo

---

### Вариант C: Services Marketplace (Upwork для LATAM-экспертов)

**Структура:**

```
Фрилансеры/компании продают услуги:
- Бухгалтерия (VeriFactu compliance)
- Юридические услуги (NIE, регистрация)
- IT/дизайн (LATAM умные + дёшевые)
- Маркетинг
- Translation (испанский ↔ Portuguese, Portuguese ↔ английский)

Платформа берёт:
- 15% комиссия за транзакцию (или 10% за monthly retainers)
```

**Доход:**

```
1,000 фрилансеров × €2K average project/год = €2M GVV
15% × €2M = €300K/год (MRR ~€25K)
```

**Pros:**
- Высокая маржа (15-20%)
- Sticky users (both sides)
- Крупный рынок (VeriFactu требует услуги от 50K businesses)

**Cons:**
- Trust hard to build (фрилансеры часто scam-ят)
- Конкуренция: Upwork, Fiverr, Toptal
- Need escrow/payment processing (compliance burden)

---

### Вариант D: Remittances Hub (партнёрства с Wise/Remitly)

**Структура:**

```
Платформа = агрегатор remittance сервисов:

User выбирает лучший курс для своей страны:
- Wise (прозрачный, низкие комиссии, лучше для больших сумм)
- Remitly (мобильный, много стран, UI проще)
- WorldRemit (cash pickup, M-Pesa)
- Binance P2P (неофициально, но много юзают)

Платформа получает:
- €5-10 affiliate комиссия за транзакцию
- % от успешного трансфера
```

**Доход:**

```
TAM remittances ES → LATAM: €10.7B/год
Platform penetration: 1-2% = €107-214M/год GVV
Affiliate rate: €5-10 per transaction (average transfer €300-500)
= €107-214M × 5% average (conversion) = €5.35-10.7M potential

Realistic (Y1): 100K transactions × €7 affiliate = €700K/год = €60K/мес MRR
```

**Pros:**
- ОГРОМНЫЙ рынок (€10.7B/год)
- Низкий CAC (viral potential — "отправь деньги家 + получи скидку")
- Passive income (не нужно обслуживать)
- **Bizum недоступен для LATAM** → clear gap

**Cons:**
- Требует relationships с Wise/Remitly/WorldRemit (конкуренция Wise API уже не давит)
- Очень конкурентный рынок (Wise, Remitly, Xoom, Paysend, Instarem, WorldRemit)
- Regulatory (PSD2, AML/KYC)

---

## 6. Рекомендуемая модель: Hybrid (Directory + Services + Remittances)

### Почему не один вариант?

1. **Directory** = acquisition machine (SEO, trust)
2. **Services** = monetization (15% commission, high margin)
3. **Remittances** = scale factor (network effects, viral loop)

### MVP (Month 1-3)

```
Feature list:
- Directory search (colombianos, venezolanos, etc.)
- Business profiles + reviews (Stripe verification)
- WhatsApp integration (direct message to business)
- Remittances aggregator (Wise API + Remitly partnership)

Metrics target:
- 5K businesses
- 50K monthly searches
- 100 remittance transactions/месяц
- 70%+ businesses with ≥3.5 rating
```

### Roadmap

```
Q2 2026:
- MVP Directory + Remittances
- WhatsApp integration
- Mадrid launch
- 5K businesses, 50K users

Q3 2026:
- Services marketplace beta
- Job board launch
- Барселона expansion
- 10K businesses, 150K users

Q4 2026:
- Full services + job board
- Analytics for businesses
- Email campaigns for SMBs
- 20K businesses, 300K users, €100K MRR

2027:
- Expansion to other European cities (Paris, London)
- B2B software (accounting for self-employed)
- Platform API
- Target: €1M MRR
```

---

## 7. Конкуренты

### Прямые конкуренты (Испания)

| Конкурент | Фокус | Размер | Слабости |
|-----------|-------|--------|----------|
| **Directorio Latinos** | Directory | 20K+ businesses | Интерфейс старый, без WhatsApp, монетизация слабая |
| **Conexión de Negocios Latinos (CNL)** | Directory + networking | 10K+ businesses | Event-driven, не online-first |
| **La Red de Hispanos** | Directory | 5K+ | Очень маленькая, нет мобильного |
| **Une Americas** | B2B marketplace | 1K+ | Fokus на larger deals, not SMB |

**Вывод:** Конкурентная ландшафт **рыхлый**. Нет одного сильного игрока. Opportunity для fresh, mobile-first player.

### Косвенные конкуренты (функции)

| Функция | Конкурент | Заметки |
|---------|-----------|---------|
| Directory | Yelp, Google My Business, Tripadvisor | Но не для LATAM-specific |
| Services | Upwork, Fiverr, Toptal | Не fokus на Испанию + LATAM |
| Job board | Indeed, InfoJobs, Computrabajo | Не LATAM-specific (языки, виза помощь) |
| Remittances | Wise, Remitly, WorldRemit | Нет агрегатора (platform selection UI) |

**Стратегия:** Не конкурировать на their field, а занять свой (LATAM-специфичность).

---

## 8. Unit Economics (Year 1 Realistic)

### Сценарий: Стартап, Мадрид-базированный, 2 разработчика + 1 PM

```
Структура дохода (усреднённо):

1. Directory listing fees
   - 10K premium businesses × €20/мес = €2.4M/год
   - Conversion rate: 30% → €720K/год = €60K/мес

2. Services marketplace
   - €500K GVV/год × 15% = €75K/год = €6.25K/мес

3. Remittances affiliate
   - 50K transactions × €7 = €350K/год = €29K/мес

4. Job board
   - 2K job postings × €100 = €200K/год = €16.7K/мес

Total Y1 MRR: ~€112K → €1.34M/год

Затраты (Мадрид, 2026):
- 2 разработчика: €3K × 2 = €6K/мес = €72K/год
- 1 PM/Marketing: €2K = €24K/год
- Infra (hosting, APIs): €2K/мес = €24K/год
- Legal/accounting: €5K/год
- Marketing (ads, content): €5K/мес = €60K/год
- Contingency (10%): €13K/год

Total Cost: €198K/год = €16.5K/мес

**Profit (Year 1): €112K - €16.5K = €95.5K/мес → €1.15M/год**

Margin: 85% (amazing)
```

### CAC (Customer Acquisition Cost)

```
Directory businesses:
- Organic (WhatsApp, word-of-mouth): €0 CAC, 40% of users
- Paid (Google Ads, Instagram): €10-20 CAC, 60% of users
- Average CAC: €6-12 per business

LTV (customer lifetime value):
- Directory business: €20/мес × 24 months (2 years) = €480
- LTV/CAC ratio: €480 / €10 = 48x (excellent)

Job seekers:
- Organic: 70% (word-of-mouth, WhatsApp)
- Paid: 30% (Instagram, Google)
- CAC: €2-5
- LTV: €0 (users don't pay directly, but drive directory searches)
```

---

## 9. Go-to-Market (запуск)

### Phase 1: Community First (Week 1-4)

```
1. Identify Facebook/WhatsApp groups
   - "Venezolanos en Madrid" (100K+ members)
   - "Colombianos en Barcel0na" (50K+ members)
   - "Ecuatorianos España" (20K+ members)
   - "LATAM Negocios Madrid" (private, higher intent)

2. Seed the platform
   - Recruit 1K founder's friends + community leaders
   - 500 businesses (direct outreach to WhatsApp groups)
   - 50K users (via invite links)

3. Early monetization
   - 10K premium businesses ($2.4M MRR potential)
```

### Phase 2: Organic Growth (Week 5-12)

```
1. SEO (directory keywords)
   - "electricistas venezolanos en Madrid"
   - "abogados colombianos España"
   - "plomero ecuatoriano Barcelona"
   - "contable para autónomos latinoamericanos"

2. Viral loop
   - Business lists themselves → gets review → recommend friends → more businesses
   - Circular growth

3. Content marketing
   - Blog: "Cómo registrar tu negocio en España (VeriFactu, NIE, Hacienda)"
   - Guides for self-employed
   - Podcast (Spanish + Portuguese)
```

### Phase 3: Paid Acquisition (Week 13+)

```
1. Google Ads (search)
   - Budget: €5K/мес
   - Target: "negocios latinos España", "empleo para latinoamericanos"

2. Instagram/TikTok
   - Budget: €3K/мес
   - Influencers: micro-influencers from LATAM communities
   - Content: success stories, testimonials

3. Partnerships
   - Consulados (Colombia, Venezuela, Ecuador en España)
   - Immigrant NGOs
   - Spanish banks (BBVA, Santander) — remittances integration
```

### Phase 4: Market Expansion (Month 6+)

```
1. Barcel0na
2. Valancia
3. Malaga
4. Other European cities (Paris, London, Brussels)
```

---

## 10. Риски и смягчение

| Риск | Вероятность | Воздействие | Смягчение |
|------|-----------|-----------|----------|
| **Конкуренция от крупных игроков (Yelp, Wise)** | Medium | High | Fokus на LATAM, build community moat |
| **Низкая monetization (люди не платят)** | Medium | Medium | Freemium + affiliate model (remittances) |
| **Regulatory (PSD2 для remittances)** | Low | High | Partner с existing providers (Wise API) |
| **Дефолт платежей (chargebacks, fraud)** | Medium | Medium | Stripe Radar, KYC для businesses |
| **Оттока users (если медленный product)** | High | High | Aggressive iteration, weekly updates |
| **Правовые проблемы (marketplace liability)** | Low | Medium | T&C, dispute resolution, insurance |
| **Network effects failure (chicken-egg)** | High | Very High | Seed with founder's friends, pay early adopters |

---

## 11. Go/No-Go критерии (Validation)

Перед инвестированием $100K+:

```
✅ GO если:
- 1K+ businesses зарегистрировались (organic, в течение мес)
- 4.2+ средний рейтинг (trust)
- 50%+ engagement rate (еженедельные поиски)
- 100+ job postings в месяц (job board demand)
- 1% conversion на directory searches → paid listings
- €10K+ MRR (без paid ads) by month 6

❌ NO-GO если:
- <100 businesses after 2 months
- <3.0 средний рейтинг (people don't trust)
- <10K monthly searches
- No repeat users (frequency <50%)
- CAC > €20 (with paid ads)
```

---

## 12. Ключевые числа (Summary)

| Метрика | Значение | Замечание |
|---------|----------|----------|
| **TAM** | €235M/год | 4.7M × €50 ARPU |
| **SAM (realistic)** | €2-5M/год | Directory + services + affiliate |
| **SOM (Y1)** | €500K | Conservative forecast |
| **Target MRR (Y1)** | €60-100K | From all sources |
| **CAC (directory)** | €10 | Via paid + organic mix |
| **LTV (directory)** | €480 | 24 months × €20/мес |
| **LTV/CAC** | 48x | Excellent unit economics |
| **Team (MVP)** | 3 people | 2 eng + 1 PM/marketing |
| **Runway** | 12 months | €198K cost |
| **Profitability (Y1)** | €1.15M | 85% margin |

---

## 13. Следующие шаги

### Week 1-2: Validation
- [ ] Провести 20 интервью с LATAM businessmen в Мадриде (WhatsApp, in-person)
- [ ] Собрать 20 интервью с job seekers (потребность в job board)
- [ ] Проверить, за сколько люди платили бы за directory listing
- [ ] Интервью с Wise/Remitly партнёрами (возможность affiliate)

### Week 3-4: MVP Design
- [ ] Figma prototype (directory, job board, remittances hub)
- [ ] Technical architecture (Next.js, Supabase, Stripe)
- [ ] Database schema (businesses, jobs, transactions, reviews)
- [ ] WhatsApp integration API research

### Week 5-6: MVP Build
- [ ] Core directory (search, listings, reviews)
- [ ] WhatsApp integration (direct message)
- [ ] Remittances aggregator (Wise API)
- [ ] Analytics dashboard

### Week 7-8: Soft Launch
- [ ] 500 founder's friends + community leaders
- [ ] Collect feedback
- [ ] Iterate (weekly)
- [ ] Measure: DAU, MAU, LTV, CAC

### Month 3: Hard Launch
- [ ] Marketing campaign (Facebook, Instagram, Google)
- [ ] PR (Spanish tech press)
- [ ] Paid acquisition ($5K/мес)

---

## 14. Вывод

**LATAM Diaspora Platform Spain — это solid opportunity.**

- **Рынок:** 4.7M потребителей, быстрорастущий, готовый к платформам
- **Конкуренция:** Слабая (нет сильных игроков)
- **Unit economics:** Отличные (85% margin, 48x LTV/CAC)
- **Go-to-market:** Ясный (community-first, WhatsApp, SEO)
- **Timing:** Perfect (волна венесуэльцев/колумбийцев, VeriFactu дедлайн в 2027)

**Рекомендация:** Валидировать на 20 интервью, потом собрать MVP за 4 недели, запустить на 500 тестеров, масштабировать через SEO + paid.

**Risk:** Сложный market (много языков, культур, регуляций). Нужна фокусировка. Начать с Мадрида (1M латиноамериканцев), потом Барселона.

---

**Дата обновления:** 03.03.2026
**Статус:** Ready for validation interviews
