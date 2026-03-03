# Session Context — 2026-03-03
# Research HQ — Spain Niches Intelligence

## Состояние проекта

### База данных
- **165 ниш** в `niches.db` (было 122 в начале сессии)
- **5 таблиц:** niches, competitors, insights, score_history, validation
- **Данные:** `data/niches.json` → Vercel дашборд

### Дашборд
- **URL:** https://github.com/suprunoff/spain-niches-2026 (Vercel auto-deploy)
- **Стек:** index.html (статика) + fetch('./data/niches.json')
- **Дизайн:** Apollo.io style — тёмный sidebar (#0F1928), белый контент, Inter + IBM Plex Mono
- **Фичи:** sidebar nav по тирам, звёздочки (localStorage), тултипы, коллапс чартов, сортировка

### Формула скоринга
```
Факторы: D·G·R·S·M·A·F·T
Веса: d=1.0, g=1.5, r=1.2, s=1.3, m=1.0, a=1.2, f=1.5, t=1.0
F (Founder fit) повышен с 0.8→1.5 в этой сессии
Тиры: T1≥8.0, T2≥7.5, T3≥6.5, T4<6.5
```

---

## Что сделано за сессию

### UI/UX
- Редизайн: тёмная тема → светлая editorial (Plus Jakarta Sans)
- Полный редизайн под Apollo.io (sidebar + compact table)
- Исправлен критический JS-баг: переменная `tc` затирала функцию `tc()` → пустая таблица
- Добавлены тултипы с методологией на каждом факторе и колонке
- Чарты → collapsible "Analytics" в сайдбаре
- Tier-фильтры → dropdown select
- Исправлено дёрганье строк при hover (border-left: 2px transparent always-on)
- Звёздочки/Shortlist через localStorage + "⭐ Shortlist" в сайдбаре
- Факторные метки D·G·R·S·M·A·F·T → 🔥🎯⚖️🇪🇸💰🚀🧑‍💻⏰
- Исправлен settings.json (trailing comma сломал statusLine)

### Данные (165 ниш, было 122)
Добавлены батчи: padel (5), новые ниши (10), EU grants (6), hospitality (5), legaltech (8), funerarias (4), LATAM diaspora (9), finiquito (1)

### Deep Dives выполнены
Все файлы в `02-research/spain-niches/DEEP-DIVE-*.md`

**Регуляторные:**
- VUD Compliance — Y1 пересчитан €1.1M (было €16-23K), прямых конкурентов нет
- E-Commerce Seller Compliance — A2X угроза в Q2 2026
- Autónomo Compliance — churn expats выше, Y1 реально €25-50K
- Crypto Tax + MiCA — B2B-first стратегия
- Ley Atención al Cliente — partner через gestoras, Y1 €50-100K
- Modelo 721 Crypto — LTV:CAC 31.5x, payback 1.3 мес

**Directories:**
- Home Services — LTV/CAC supply 259x, Habitissimo берёт €12-50/лид
- Physiotherapists — ADESLAS €15-30/реферал, Y1 €3.54M
- Psychologists — Ifeel €5.5M benchmark, B2C маркетплейс открыт
- Wedding Vendors — Zankyou мертва, commission 6% → Y1 €155K

**Новые вертикали:**
- FUNDAE SaaS — 80% компаний теряют кредит, €400-600M сгорает/год
- Comunidades de Vecinos — 1.5M ТСЖ (не 300K!), TAM €4.5B, Ley 1/2025
- Padel Club Ops — Playtomic берёт 5-10%, LTV/CAC 25x
- Solar Marketplace — Y1 €735K, субсидии до 60% = killer lead gen
- Hotel AI Pricing — 15K отелей, нет испанского решения, LTV/CAC 76x
- Review & Reputation — TAM 175K, WhatsApp review requests = cultural fit
- EU Grants SaaS — €27B дедлайн август 2026, partner модель LTV/CAC 24-160x
- British Expats — 400K, LTV:CAC 275x, payback <1 мес, blue ocean
- Funerarias — €1.5B, 0 конкурентов, white-label для страховых (22.3M insured)
- LATAM Diaspora — 4.7M, LTV:CAC 48x, Y1 profit €1.15M
- PAC Subsidy Automation — 622K фермеров, €932M TAM, 0 SaaS
- Wine Label QR — EU закон с 2023, штраф €50K, MVP 3-4 нед
- Finiquito Calculator — CAC €0 (SEO), ROI 12x на €8K

---

## Текущий ТОП по score (после пересчёта весов)

```
#1  9.08 VUD Compliance (RegTech, 4-6w, DD✓)
#2  8.85 Crypto Tax Modelo 721 (RegTech, 4-8w)
#3  8.55 EU Grants SaaS (new)
#4  8.43 Autónomo Compliance (RegTech, 10-14w, DD✓)
#5  8.41 Ley Atención al Cliente (RegTech, 6-8w, DD✓)
#6  8.40 Home Services Bundle (Directory, 6-8w)
#7  8.31 Telegram Media ES (Content, 1-2w, DD✓)
#8  8.30 Digital Due Diligence (LegalTech, DD✓)
#9  8.29 FUNDAE SaaS (EdTech, 6-8w, DD✓)
#10 8.20 LATAM Diaspora Platform (new)
```

---

## Ключевые открытия сессии

### Самые неожиданные gaps
1. **Funerarias** — никто не смотрит, Beyond UK = $100M exit
2. **PAC Subsidy** — 622K фермеров платят gestoras вручную, нет SaaS
3. **EU Grants** — €27B сгорит август 2026
4. **Comunidades de Vecinos** — рынок в 5x больше чем думали
5. **VUD Y1** — пересчитан с €16K → €1.1M

### Лучшие unit economics
- British Expats: LTV:CAC 275x
- Hotel AI Pricing: LTV:CAC 76x
- LATAM Diaspora: LTV:CAC 48x
- Modelo 721: LTV:CAC 31.5x
- Padel Club Ops: LTV:CAC 25x

### Быстрые к запуску (≤4 нед)
- Wine Label QR Compliance (3-4w, EU закон уже в силе)
- Finiquito Calculator (4w, CAC=0)
- Telegram Media ES (1-2w)
- VUD Compliance (4-6w, самая срочная)

### NO-GO вердикты
- EV Charging Fleet — TAM слишком мал, Monta входит
- Precision Agriculture — Agroptima доминирует

---

## Файловая структура (ключевые)

```
research/
├── CLAUDE.md                 # Устав проекта
├── index.html                # Дашборд (Apollo.io стиль)
├── niches.db                 # SQLite, 165 ниш
├── data/niches.json          # Экспорт для дашборда
│
├── scripts/
│   ├── db.py                 # Веса F=1.5 (изменено!)
│   ├── export_json.py
│   ├── add_niches.py
│   ├── update_score.py
│   └── query.py
│
├── 02-research/spain-niches/
│   ├── DEEP-DIVE-VUD-COMPLIANCE.md
│   ├── DEEP-DIVE-HOME-SERVICES.md
│   ├── DEEP-DIVE-TELEGRAM-MEDIA.md
│   ├── DEEP-DIVE-ECOMMERCE-COMPLIANCE.md
│   ├── DEEP-DIVE-PHYSIO-DIRECTORY.md
│   ├── DEEP-DIVE-AUTONOMO-COMPLIANCE.md
│   ├── DEEP-DIVE-CRYPTO-TAX.md
│   ├── DEEP-DIVE-PSYCHOLOGISTS-DIRECTORY.md
│   ├── DEEP-DIVE-LEY-ATENCION-CLIENTE.md
│   ├── DEEP-DIVE-WEDDING-VENDORS.md
│   ├── DEEP-DIVE-MODELO-721-CRYPTO.md
│   ├── DEEP-DIVE-FUNDAE-SAAS.md
│   ├── DEEP-DIVE-COMUNIDADES-VECINOS.md
│   ├── PADEL-MARKET-SPAIN.md
│   ├── DEEP-DIVE-SOLAR-MARKETPLACE.md
│   ├── DEEP-DIVE-HOTEL-PRICING-AI.md
│   ├── DEEP-DIVE-REVIEW-REPUTATION.md
│   ├── DEEP-DIVE-EU-GRANTS-SAAS.md
│   ├── DEEP-DIVE-BRITISH-EXPATS-SPAIN.md
│   ├── DEEP-DIVE-FUNERARIAS.md
│   ├── DEEP-DIVE-LATAM-DIASPORA.md
│   ├── DEEP-DIVE-LEGALTECH-FINIQUITO.md
│   ├── CONSTRUCTION-MARKET-SPAIN.md
│   ├── AGRITECH-FOOD-TECH-SPAIN-2026.md
│   ├── FINTECH-GAPS-SPAIN.md
│   ├── LEGALTECH-SPAIN.md
│   └── BORING-MARKETS-SPAIN.md
│
└── tasks/
    ├── todo.md
    └── SESSION-CONTEXT-2026-03-03.md  # Этот файл
```

---

## Следующие приоритеты

### Phase 2 — Validation (рекомендуется начать)
1. **VUD Compliance** — CustDev 10 интервью + landing page + €50 FB test
2. **Wine Label QR** — 15 интервью бодег, порог 50% "да"
3. **British Expats** — 20 интервью, FB groups "Brits in Spain"
4. **Finiquito** — просто запустить, CAC=0

### Дальнейший ресёрч
- Нотариусы digital (deep dive не сделан)
- Spain-Morocco corridor (deep dive не сделан)
- Rental Insurance comparador (fintech, Score 8.5)
- Non-Resident Mortgage (fintech, Score 8.2)

### Дашборд улучшения
- Статус валидации в таблице (Idea/Researched/CustDev/Go/No-Go)
- Ссылки на Deep Dive MD файлы из строки
- Export CSV
- Compare mode (2-3 ниши side-by-side)

---

## CLI команды (быстрая справка)

```bash
# Запросы
python3 scripts/query.py --min-score 8.0
python3 scripts/query.py --niche-id 1 --full
python3 scripts/query.py --type RegTech

# Обновление
python3 scripts/update_score.py --niche-id 1 --reason "..."
python3 scripts/add_niches.py tasks/staging/batchN.js

# Экспорт (авто при update_score/add_niches)
python3 scripts/export_json.py
```
