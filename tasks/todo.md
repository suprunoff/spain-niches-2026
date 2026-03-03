# Research HQ — План проекта

## Цель
Найти 2-3 прибыльные онлайн-ниши в Испании и запустить MVP за 4-8 недель.

---

## ФАЗА 0: Инфраструктура ✅ COMPLETE

- [x] Собрать фреймворки анализа ниш (12 шт.)
- [x] Создать структуру проекта + CLAUDE.md
- [x] Установить скиллы: niche-scorer, competitor-mapper, spain-context, market-research
- [x] SQLite pipeline: niches.db → data/niches.json → Vercel дашборд
- [x] Дашборд (Apollo.io style): тёмный sidebar, tooltips, shortlist, tier-фильтры

## ФАЗА 1: Discovery ✅ COMPLETE (191 ниша, все проскорены)

### 1A. Макро-анализ ✅
- [x] Digital economy overview → `02-research/spain-macro/`
- [x] Регуляторные изменения (VeriFactu, Ley Atención, MiCA, VUD, AI Act, EU Pay Transparency...)
- [x] Национальные особенности: Bizum, WhatsApp, регионы → `02-research/spain-national/`

### 1B. Нишевый скан ✅ (191 ниш)
- [x] Скан #1: 35 ниш (базовые)
- [x] Скан #2: 20 ниш CIS-модели (GetCourse, инфобиз, Telegram)
- [x] Скан #3: Eldercare, Solar, Fertility, Pet, Gestoría, Construction, Cleaning
- [x] Скан #4: RegTech (VeriFactu, VUD, MiCA, RGPD, Ley Atención, Modelo 721)
- [x] Скан #5: Hospitality, LegalTech, LATAM Diaspora, Funerarias, EU Grants, Padel
- [x] Скан #6: Finiquito, Fintech, British Expats, Hotel AI Pricing, Boring Markets
- [x] **Скан #7 (2026-03-03): 21 неочевидных ниш** — RegTech blind spots, DC ecosystem, flowers, healthcare boring B2B, cross-border
- [x] Финальный скоринг всех 191 ниш по единой методологии

### 1C. Deep Dives ✅ (19 ниш)
Файлы в `02-research/spain-niches/DEEP-DIVE-*.md`
- [x] VUD Compliance, Autónomo Bundle, Ley Atención, Crypto Tax, Modelo 721
- [x] Home Services, Telegram Media, FUNDAE SaaS, Comunidades de Vecinos
- [x] Solar Marketplace, Hotel AI Pricing, EU Grants, British Expats
- [x] Funerarias, LATAM Diaspora, Finiquito, Physio Directory
- [x] Psychologists Directory, Wedding Vendors

---

## ФАЗА 2: Validation ← СЕЙЧАС

### 2A. Интервью (10-15 на нишу)

**TIER 1 — запустить НЕМЕДЛЕННО:**
- [ ] **VUD Compliance** (9.08) — 10 интервью с владельцами туристических квартир
  - Скрипт: `05-validation/CUSTOMER_INTERVIEW_GUIDE.md`
  - Цель: 70%+ "urgent", 50%+ платят €20+/мес
- [ ] **DC Talent Marketplace** (8.03) — URGENCY: проекты стартуют Q3 2026
  - 10 интервью с GC Арагона/Мадрида (general contractors строящие ЦОД)
  - 5 интервью с data center техниками (HVAC, electrical)
  - Цель: confirm 30%+ talent shortage + willingness to pay 20-25% placement fee
- [ ] **Gender Pay Gap Compliance** (8.15) — дедлайн июнь 2026
  - 10 интервью с HR-директорами компаний 150+ сотрудников
  - Цель: 70%+ не имеют автоматизации, 50%+ платят €200+/мес

**TIER 2 — следующая очередь:**
- [ ] **Vet Clinic SaaS** (7.87) — интервью с 10 vet clinic directors + 3 страховые (Adeslas)
- [ ] **B2B Flower Wholesale** (7.71) — 10 флористов + 5 Mercamadrid оптовиков
- [ ] **Licitaciones Públicas** (7.70) — 15 SMEs, которые уже участвуют в тендерах

### 2B. Landing Pages + Ads test

- [ ] VUD Compliance: landing page + CTA "waitlist" + €50 FB test
- [ ] Gender Pay Gap: landing page + CTA "free checklist" + €50 LinkedIn test
- [ ] Цель CVR: >3% (>20 signups per €250 spend)

### 2C. Быстрые запуски (нет интервью, просто делать)

- [ ] **Finiquito Calculator** — запустить прямо сейчас (CAC=0, SEO, 4 нед MVP)
  - Файл: `02-research/spain-niches/DEEP-DIVE-LEGALTECH-FINIQUITO.md`
- [ ] **Wine Label QR Compliance** — EU закон в силе, 15 интервью бодег, порог 50% "да"
- [ ] **Telegram Media ES** — 1-2 нед, первый канал → монетизация через 3 мес

### 2D. Deep Dives не сделаны (требуются перед validation)

- [ ] **Нотариусы digital** — оценка 7.5+, deep dive не сделан
- [ ] **Rental Insurance comparador** — fintech, deep dive не сделан
- [ ] **Non-Resident Mortgage Spain** — fintech, нет данных
- [ ] **DC FM Coordinator** (8.02) — нужен операционный план (не SaaS)

---

## ФАЗА 3: Go/No-Go

- [ ] Анализ интервью + scoring (после Фазы 2)
- [ ] Финальный выбор 1-2 ниш
- [ ] Engineering roadmap

**Критерии Go:**
- 70%+ интервьюируемых говорят "urgent"
- 50%+ готовы платить конкретную цену
- Landing CVR >3%
- Niche score ≥ 6.0/10

---

## ФАЗА 4: MVP & Launch

- [ ] Выбрать 1 нишу
- [ ] Спека MVP (1 core feature)
- [ ] Билд (2-6 недель)
- [ ] Launch на 100 юзеров
- [ ] Iterate

---

## KPI проекта

| Метрика | Цель | Текущее |
|---------|------|---------|
| Ниш проскорено | 100+ | **191** ✅ |
| Deep dives | 10+ | **19** ✅ |
| CustDev интервью | 30+ | 0 |
| Landing pages | 3 | 0 |
| MVP запущен | 1 | 0 |
| Первый платящий клиент | 1 | 0 |

---

## Ресурсы

- **Дашборд:** https://github.com/suprunoff/spain-niches-2026 (Vercel)
- **Фреймворки:** `01-frameworks/`
- **Скоринг-шаблон:** `01-frameworks/NICHE_SCORING_TEMPLATES.md`
- **Spain context:** `02-research/spain-national/`
- **Customer interview guide:** `05-validation/CUSTOMER_INTERVIEW_GUIDE.md`
