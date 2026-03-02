# Research HQ — План проекта

## Цель
Найти 2-3 прибыльные онлайн-ниши в Испании и запустить MVP за 4-8 недель.

---

## ФАЗА 0: Инфраструктура [IN PROGRESS]
- [x] Собрать фреймворки анализа ниш (12 шт.)
- [x] Найти Claude Code skills на GitHub (24 repo)
- [x] Исследовать методы с Reddit/HN/Indie Hackers
- [x] Создать структуру проекта
- [x] Написать CLAUDE.md (устав проекта)
- [x] Установить топ skills с GitHub (pm-ba, marketing, deep-research)
- [x] Создать кастомный skill `niche-scorer` (автоскоринг ниш)
- [x] Создать skill `spain-context` (национальные особенности для промптов)

## ФАЗА 1: Discovery — Поиск ниш [NEXT]

### 1A. Макро-анализ Испании
- [x] Digital economy overview (сделано: 02-research/spain-macro/)
- [ ] Обновить макро-данные на март 2026
- [ ] Регуляторные изменения Q1 2026 (VeriFactu старт, новые законы)
- [ ] Трендовые запросы Google Trends ES (что растёт прямо сейчас)

### 1B. Нишевый скан
- [x] Первый скан: 35 ниш (сделано: 02-research/spain-niches/)
- [x] Второй скан: 20 ниш из CIS-модели (GetCourse, инфобиз, Telegram) → spain-cis-adapted-niches-2026.md
- [x] Третий скан: глубокий поиск по 7 направлениям (eldercare, solar, fertility, pet, gestoría, construction, cleaning) → NEW-NICHES-SCAN-2026.md
- [ ] Четвёртый скан: регуляторно-обусловленные (VeriFactu, Customer Service Law) — частично покрыто в CIS-сканах
- [x] Финальный скоринг 55+ ниш по единой методологии (ТОП-20 CIS + 35 базовых)

### 1C. Национальные особенности
- [x] Бизнес-культура Испании (deep research) → spain-national-characteristics-2026.md
- [x] Платёжные привычки (Bizum, Redsys, BNPL) → spain-national-characteristics-2026.md
- [x] Digital adoption по регионам (Madrid vs Barcelona vs Valencia vs Andalusia) → spain-regional-b2b-culture-2026.md
- [x] Языковые нюансы (castellano vs catalán vs региональные) → spain-regional-b2b-culture-2026.md

## ФАЗА 2: Deep Dive ТОП-5

### По каждой нише:
- [ ] Конкурентный анализ (кто, что, сколько, слабости)
- [ ] Ad Library scan (Meta, Google — кто рекламируется)
- [ ] TAM/SAM/SOM (bottom-up расчёт)
- [ ] JTBD analysis (что клиент хочет "нанять")
- [ ] Gap map (где дыры в текущих решениях)
- [ ] Unit economics (CAC, LTV, margin, payback)
- [ ] Feasibility check (MVP за сколько недель, какой стек)

## ФАЗА 3: Validation ТОП-3
- [ ] CustDev: 10-20 интервью на нишу
- [ ] Landing page + waitlist
- [ ] Ads test (€50-100 на нишу)
- [ ] Go/No-Go решение

## ФАЗА 4: MVP & Launch
- [ ] Выбрать 1 нишу
- [ ] Спека MVP (1 core feature)
- [ ] Билд (2-6 недель)
- [ ] Launch на 100 юзеров
- [ ] Iterate

---

## Приоритеты на СЕЙЧАС

1. ~~Установить топ skills~~ ✅ — niche-scorer, competitor-mapper, spain-context, market-research
2. ~~Обновить Spain context~~ ✅ — spain-national-characteristics-2026.md + spain-regional-b2b-culture-2026.md
3. ~~Нишевый скан #2 (CIS-модели)~~ ✅ — 20 ниш в spain-cis-adapted-niches-2026.md (Telegram, инфобиз, WhatsApp, coaching, etc.)
4. ~~Нишевый скан #3 (новые направления)~~ ✅ — 5 ниш в NEW-NICHES-SCAN-2026.md (Elderly Care, Solar, Gestoría SaaS, Fertility, Pet Care)
5. **NEXT: Add Batch 8 to SQLite + Validate ТОП-3**:
   - [ ] `python3 scripts/add_niches.py tasks/staging/batch-8-new-niches.js`
   - [ ] `python3 scripts/export_json.py`
   - [ ] Verify в дашборде
   - **ТОП-3 для validation (Week 1-2):**
     - Solar Energy Marketplace (8.4/10) — best timing (INEA/INCEA Q1-Q2 2026)
     - Elderly Care Platform (8.1/10) — highest urgency (200K дефицит cuidadores)
     - Modern Gestoría SaaS (8.1/10) — deadline-driven (VeriFactu янв 2027)
   - **Validation includes:**
     - 10-15 customer interviews per niche
     - Landing page + email waitlist test
     - €30-50 ad test (Google/Meta) per niche
     - Ad Library competitor scan
     - Go/No-Go decision (recommend: Solar Energy first)

---

## KPI проекта

| Метрика | Цель | Текущее | Update |
|---------|------|---------|--------|
| Ниш проскорено | 50+ | 55+ (35 + 20 CIS) | ✅ Цель достигнута |
| Deep dives сделано | 5 | 0 | Next phase |
| CustDev интервью | 30+ | 0 | Deep dive фаза |
| Landing pages | 3 | 0 | Validation фаза |
| MVP запущен | 1 | 0 | MVP фаза |
| Первый платящий клиент | 1 | 0 | Launch фаза |
