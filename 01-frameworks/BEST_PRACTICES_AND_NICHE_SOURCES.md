# Лучшие практики нишевого ресерча и источники новых ниш

**Дата:** 2026-03-02 | **Статус:** Live document, обновляется по мере работы

---

## ЧАСТЬ 1: ЛУЧШИЕ ПРАКТИКИ

### 1.1 Агентная оркестровка

**Паттерн: 3 параллельных агента вместо 1 последовательного**
```
Задача: найти 50+ ниш в категории X

❌ Плохо: один агент ищет 50 ниш = 2+ часа + засорение контекста
✅ Хорошо: 3 агента по 15-20 ниш каждый = 30 мин, контекст чист

Агент 1: Регуляторные ниши (compliance-driven demand)
Агент 2: Технологические ниши (CIS/US-model transplant)
Агент 3: Директорные/агрегаторные ниши (fragmented markets)
```

**Правило агентов:**
- `researcher` (Sonnet) → собирает факты, ищет данные
- `analyst` (Opus) → скорит, считает unit economics, принимает решения
- Не смешивать роли в одном агенте

**Промпт-паттерн для агентов:**
1. Дать точный формат вывода (JS-объект для дашборда)
2. Указать Spain-context явно (Bizum, WhatsApp, регуляторика)
3. Попросить WebSearch для верификации данных
4. Указать путь для сохранения файла

---

### 1.2 Скоринг ниш

**Формула v2 (8 факторов):**
```
Score = (D×20 + G×20 + R×15 + S×15 + M×10 + A×10 + F×5 + T×5) / 100
```

| Фактор | Вес | Что мерит | Как оценивать |
|--------|-----|-----------|---------------|
| D — Demand | 20% | Объём боли, поисковый спрос | SV 500-5K=7, 5K+=9, <500=4 |
| G — Gap | 20% | Отсутствие конкурентов | 0 конкурентов=10, 1-2=8, 3-5=6, 5+=3 |
| R — Revenue | 15% | LTV × retention | LTV>€1K=9, €300-1K=7, <€300=5 |
| S — Spain Tailwind | 15% | Регуляторика, культура, timing | Deadline<12мес=10, growing trend=7 |
| M — MVP Speed | 10% | Недель до запуска | 1-4=10, 5-8=8, 9-12=6, 13+=4 |
| A — Access | 10% | Простота получить первых 10 клиентов | Direct reach=9, cold email=6, enterprise=4 |
| F — Defensibility | 5% | Сетевые эффекты, данные, регуляторный барьер | Network effects=9, data moat=7, none=3 |
| T — Timing | 5% | Скорость закрытия окна | Дедлайн<6мес=10, <12мес=8, нет=5 |

**Tier-система:**
- T1 (≥8.0): GO немедленно
- T2 (7.5-7.9): 10-15 интервью перед MVP
- T3 (6.5-7.4): Landing page + €50 ad test
- T4 (<6.5): Skip

**Красные флаги (skip сразу):**
- G<4 (сильные конкуренты с деньгами)
- M>16 недель (технически сложно для соло-фаундера)
- A<4 (невозможно добраться до первых клиентов)
- TAM<€5M (слишком маленький рынок)

---

### 1.3 Unit Economics — как считать правильно

**Минимальные пороги для Go:**
```
LTV:CAC ≥ 3x        (идеал: 5-10x+)
CAC Payback < 12 мес (идеал: <6 мес)
Gross Margin ≥ 60%  (SaaS), ≥ 40% (marketplace)
Monthly Churn < 5%  (SaaS), < 15% (marketplace/creator)
```

**Формулы:**
```
LTV = ARPU / monthly_churn
CAC Payback = CAC / (ARPU × gross_margin)
Y1 ARR = avg_customers × 12 × ARPU
```

**Типичные значения по моделям (Spain 2026):**

| Модель | CAC | LTV | Churn/мес |
|--------|-----|-----|-----------|
| B2C SaaS (consumer) | €20-80 | €200-600 | 8-15% |
| B2B SMB SaaS | €100-500 | €800-3K | 3-7% |
| B2B Enterprise | €1K-5K | €10K-50K | 1-3%/год |
| Marketplace commission | €30-150 | €300-2K | 15-25% |
| Directory subscription | €50-200 | €500-5K | 5-20% |
| Content/Media | €0 (organic) | €500-5K | – |

**Ловушки:**
- Директории: y1 ARR часто €20-80K, не €1M — это нормально, зато CAC <€100
- EdTech/creator: churn 18-25% = нужен постоянный acquisition engine
- Enterprise: LTV:CAC 10x+ но payback 6-12 мес = нужен runway

---

### 1.4 Дашборд — стандарт данных

**JS-объект для index.html:**
```javascript
{
  rank: 80,                          // порядковый номер
  name: "Название ниши",             // короткое
  sub: "Подзаголовок — ключевой gap", // 1 строка
  type: "RegTech",                   // тип (см. список ниже)
  d:8, g:9, r:8, s:8, m:7, a:8, f:7, t:8,  // факторы 1-10
  score: 8.10,                       // финальный скор
  mi: 5, mx: 6,                      // MVP: min-max недель
  tam: "€117.6M",                    // TAM строкой
  gap: "Описание gap...",            // почему сейчас
  // поля для deep dive (если dd:true):
  dd: true,
  cac: 10,                           // CAC в EUR
  ltv: 240,                          // LTV в EUR
  churn: "2%",                       // churn строкой
  y1: "€45K",                        // Y1 ARR строкой
  y1n: 45,                           // Y1 ARR числом (тысячи €, для сортировки)
  risks: "Риск 1; Риск 2",
  gtm: "Как получить первых 100 клиентов",
  mvpScope: "Что входит в MVP"
}
```

**Типы (type field):**
RegTech / AI / Content / Platform / Marketplace / Vertical / Directory / EdTech / FinTech / HRTech / PropTech

**Критичная ошибка:** `mi`/`mx` — это НЕДЕЛИ MVP, не цены. Не путать.
**Критичная ошибка:** `y1n` — число в тысячах EUR (y1:"€45K" → y1n:45).

---

### 1.5 GTM-паттерны Испании

**Ранжирование каналов по эффективности:**

| Канал | Reply rate | CAC | Лучше для |
|-------|-----------|-----|-----------|
| WhatsApp (warm intro) | 60-80% | €0-20 | B2B SMB, локальные сервисы |
| WhatsApp (cold) | 40-60% | €5-30 | Трейдсмены, рестораны, салоны |
| LinkedIn DM (persona) | 20-35% | €30-100 | Корп HR, compliance, CFO |
| Facebook Groups | 15-25% | €20-50 | Экспаты, ниши-хобби |
| Reddit (r/spain, r/digitalnomad) | 10-20% | €10-30 | Expat SaaS, B2C |
| Cold email | 0.5-1.5% | €50-200 | Enterprise |
| Google SEO | долго | €5-50 | Любые, долгосрок |
| Meta Ads | зависит | €20-150 | B2C, marketplace |

**Паттерн "Colegio":**
Для ниш с профессиональными ассоциациями (gestores, abogados, fisioterapeutas, administradores de fincas) → партнёрство с Colegio Profesional = мгновенный доступ к 10K+ целевых клиентов.

**Региональный приоритет запуска:**
1. **Мадрид** — быстрые решения, EN ok, tech-forward
2. **Барселона** — SaaS-хаб, каталанский +20% CR, стартап-культура
3. **Валенсия** — дешевле, меньше конкуренции, хороший рост
4. **Андалусия** — медленнее, но огромный рынок (8.5M чел)

**Август = мёртвая зона.** Никаких продаж, запусков, рекламы.

---

## ЧАСТЬ 2: ГДЕ ИСКАТЬ НОВЫЕ НИШИ

### 2.1 Разрыв US→Испания (3-7 лет отставания)

**Логика:** Что работает в US сейчас → будет в Испании через 3-7 лет. Смотри Product Hunt, Indie Hackers, YC batches.

**Источники:**
```
YC Directory          ycombinator.com/companies
  → фильтр: B2B SaaS / Marketplace / HealthTech → ищи аналоги в ES

Product Hunt          producthunt.com
  → сортировка по неделям → что набрало 500+ upvotes → есть ли ES-аналог?

Indie Hackers         indiehackers.com/products
  → фильтр: Revenue $10K+ → это работает → есть ли в Испании?

Micro SaaS ideas      microsaas.page, indiemaker.co
  → готовые идеи с TAM → проверь Spain-fit

BetaList              betalist.com
  → новые SaaS до ProductHunt → ранние сигналы

Crunchbase            crunchbase.com
  → Spain companies + seed/pre-seed → где инвестируют = где рынок
  → US companies с $1M+ ARR в похожей нише → проверь ES
```

### 2.2 Разрыв CIS→Испания (5-10 лет отставания в infobiz)

**Логика:** GetCourse, Telegram-каналы, инфобиз, онлайн-школы — это работает в RU/UA прямо сейчас. В ES = нет.

**Источники:**
```
vc.ru / habr.com
  → статьи про стартапы с выручкой → есть ли в Испании?

CIS SaaS Reviews      capterra.com/l/ru/
  → топ по категориям → проверь spanish analogue gap

Telegram каналы
  → /channel/startupoftheday → что растёт в RU → ES-аналог?
  → @rusbase, @forklog (крипто), @vc_ru
```

### 2.3 Регуляторные дедлайны (forced demand)

**Логика:** Закон = принудительный спрос. Ниши с deadline всегда T1.

**Источники:**
```
BOE (Boletín Oficial del Estado)  boe.es
  → новые законы и регламенты → кто должен соответствовать?

EUR-Lex                           eur-lex.europa.eu
  → EU регуляция → какие директивы имплементируются в ES в 2026-2028?

CNMV (финансы)                    cnmv.es/portal/home.aspx
AEPD (RGPD/privacy)               aepd.es
AEAT (налоги)                     sede.agenciatributaria.gob.es
SEPE (трудовые отношения)         sepe.es

Ключевые дедлайны 2026-2028:
- VeriFactu: SL янв 2027, autónomos июл 2027
- CSRD sustainability reporting: крупные компании 2025, mid-size 2026
- AI Act: запрещённые практики февр 2025 (уже), GPAI авг 2025 (уже)
- MiCA: полностью дек 2024 (уже) → enforcement нарастает
- DAC8: активна янв 2026 (уже)
- Ley Atención al Cliente (Ley 10/2025): дек 2026
- EU Data Act: сент 2025 (уже)
- DORA (финансовый сектор): янв 2025 (уже)
```

### 2.4 Поисковые сигналы (Google/Ahrefs)

**Логика:** Рост поиска = рост боли = рынок формируется.

```
Google Trends ES      trends.google.es
  → сравни: "VeriFactu", "nómina online", "comunidad vecinos app"
  → смотри 12-месячный тренд, не разовый пик

Ahrefs / Semrush
  → ключевые слова с CPC > €1.5 в ES = люди платят за рекламу = деньги в нише
  → растущие ключи с низкой конкуренцией = early market

Exploding Topics      explodingtopics.com
  → трендовые темы в технологиях → Spain-fit?

Google Autocomplete (ES)
  → "software para [ниша]" → что подсказывает? → есть ли доминантный игрок?
  → "gestor de [ниша]" → те же вопросы
```

### 2.5 Боль аудитории в реальном времени

**Reddit:**
```
r/spain               → expat проблемы = niches
r/digitalnomad        → NIE/visa/banking боль
r/freelanceES (малый) → autónomo боль
r/Barcelona           → локальные проблемы
r/andalucia           → региональная специфика
r/investingES         → финансовая боль

Искать: "anyone know a good", "is there an app for", "how do you manage", "I'm frustrated with"
```

**Facebook Groups:**
```
"Expats in Spain"       → 50K+ участников
"Foreigners in Madrid"  → боль с NIE/банками
"Entrepreneurs Spain"   → SMB pain
"Autonomos Spain"       → налоговая боль
"Digital Nomads Spain"  → visa/housing боль
Grupos de bodas ES      → wedding pain
```

**LinkedIn:**
```
→ поиск: Spain + [роль] + [отрасль]
→ что HR-директора/CFO/compliance officers постят как pain?
→ trending posts в Spain по теме compliance, VeriFactu, regulación
```

### 2.6 Маркетплейсы и App Stores

**Логика:** Что продаётся, но плохо сделано = gap для лучшего решения.

```
App Store / Google Play
  → поиск по нише на испанском
  → рейтинг < 3.5 при 1000+ отзывах = плохое решение с реальным спросом
  → отзывы на 1-2 звезды = список фич для твоего MVP

Capterra ES           capterra.es
  → категории с <5 продуктами = фрагментированный рынок
  → продукты с оценкой <3.5 = можно сделать лучше

G2                    g2.com
  → фильтр: Spain region → что используют испанцы?
  → категории без явного лидера = opportunity

Amazon ES             amazon.es → категории digital products/software
  → бестселлеры в книгах по бизнесу = что изучают предприниматели?
```

### 2.7 Конкурентная разведка

**Meta Ad Library:**
```
facebook.com/ads/library → страна: Испания → категория: All ads
  → кто тратит деньги в нише? (значит рынок есть)
  → много рекламодателей + плохие объявления = нет сильного лидера

Google Ads Auction Insights (через Semrush/Ahrefs)
  → CPC > €2 = высокий LTV рынок
  → много рекламодателей = проверенный спрос
```

**Job postings:**
```
InfoJobs.es, LinkedIn Jobs Spain
  → компании нанимают compliance officer → compliance SaaS
  → нанимают "digital transformation" → устаревший процесс
  → нанимают много → рост компании → боль в управлении
```

### 2.8 Специфические Spain-ниши которые мы ещё не трогали

**Категории для следующего скана:**

| Категория | Примеры ниш | Потенциал |
|-----------|-------------|-----------|
| **Наутика / Морской** | Marina SaaS, charter marketplace, boat maintenance | Высокий (350+ марин, 200K+ лодок) |
| **Агро-сбыт** | B2B marketplace фермеров к ресторанам, export tools | Высокий (€42B агро-экспорт) |
| **Фармацевтика** | Farmacia SaaS (21K аптек), pharmacy loyalty | Средний |
| **Образование K-12** | Digitalization для colegios, parent apps | Высокий (8M учеников) |
| **Гос-сектор/Аюнтамientos** | Municipal SaaS, permit tracking | Средний (медленные продажи) |
| **Похоронные услуги** | Funeral marketplace (3.4K домов, 0 агрегаторов) | Нишевый, высокий LTV |
| **Солнечная энергия** | Solar installer marketplace, energy comparison | Высокий (EU mandates) |
| **Туризм/MICE** | Event venue marketplace, corporate travel Spain | Высокий (€93B туризм) |
| **Языковые школы** | B2B marketplace языковых школ для корпораций | Средний |
| **Здоровье/Телемедицина** | Telemedicine platform ES, mental health app | Высокий |

---

## ЧАСТЬ 3: ЧЕКЛИСТ ПЕРЕД ДОБАВЛЕНИЕМ НИШИ В ДАШБОРД

```
✅ TAM посчитан bottom-up (не просто "€1B market")
✅ G-фактор: проверено 3+ конкурента реально, не предположительно
✅ CAC реалистичен для выбранного канала (не "SEO даст бесплатный трафик")
✅ LTV считается через реальный churn, не через "будем держать вечно"
✅ Spain-context проверен: Bizum нужен? WhatsApp = primary channel? Регион?
✅ Источник данных указан (ссылка, не выдумка)
✅ MVP time: соло-фаундер может сделать MVP за указанное время?
✅ Нет дублей с существующими 83 нишами
```

---

**Документ обновлён:** 2026-03-02
**Следующий скан:** наутика / агро / телемедицина / солнечная энергия
