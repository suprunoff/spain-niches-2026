# VUD Compliance Tracker — 6-Week MVP Plan

## Executive Summary

**Проблема:** Хосты краткосрочной аренды в Испании сталкиваются с дедлайном VUD (Ventanilla Única Digital) в феврале-марте 2026. Airbnb удаляет нелицензированные объявления (86K в феврале), штраф до €60K, но нет инструмента отслеживания лицензий по регионам.

**Решение:** Веб-приложение для трекинга статуса VUD-лицензии с предупреждениями об истечении, интеграцией с 17 региональными реестрами и SES.Hospedajes для регистрации гостей.

**Размер рынка:** €50-100M (330K+ активных VUT-объектов × €100-200/год)

**Y1 Revenue Target:** €300K-600K (консервативно 3-5K хостов)

**Launch:** Март 2026 (окно 12-18 месяцев до встроенного Airbnb-решения)

---

## MVP Feature List (6 недель)

### Must-Have (неделя 1-4)
- [ ] **License Status Dashboard** — текущее состояние VUD для каждого объекта
- [ ] **VUD Registry API Integration** — парсинг статуса из 10 крупных регионов (Мадрид, Каталония, Валенсия, Андалусия, Балеары, Асту, Басков, Арагон, Наварра, Кастилия)
- [ ] **Expiry Alerts** — Telegram/Email уведомления за 30/7/1 день до истечения
- [ ] **Regional Compliance Checker** — показывает штрафы и требования по регионам
- [ ] **SES.Hospedajes Integration** — одна кнопка для регистрации гостей (Real Decreto 933/2021)
- [ ] **User Authentication** — базовый login (email + password, or WhatsApp)

### Nice-to-Have (неделя 5-6)
- [ ] **Multi-Property Dashboard** — управление 5+ объектами в одном аккаунте
- [ ] **Certification File Storage** — загрузка документов VUD в облако
- [ ] **Compliance Checklist** — пошаговая инструкция по регистрации в VUD
- [ ] **Analytics** — число активных объектов, истечения, невыполнения по регионам
- [ ] **Team Management** — несколько пользователей на аккаунт (для PM-компаний)

### Out of Scope (Phase 2)
- BIM интеграция
- Energy certificate management
- Full PMS (property management system)
- Advanced analytics

---

## Tech Stack (быстрый и дешёвый)

### Frontend
- **Framework:** Next.js + TypeScript (SSR для SEO)
- **UI Components:** Shadcn/ui (бесплатно, красиво)
- **Mobile:** Responsive web (PWA, можно установить как приложение)

### Backend
- **Runtime:** Node.js (Express или Fastify)
- **Database:** PostgreSQL (на Vercel или railway.app)
- **API Gateway:** Fastify + CORS

### Integrations
- **VUD API:** REST API для каждого региона (документировано)
- **SES.Hospedajes API:** Open API (Real Decreto 933/2021)
- **Notifications:** Telegram Bot API (бесплатно, надёжно) + SendGrid для email
- **Auth:** NextAuth.js (OAuth + email magic links)

### Hosting & DevOps
- **Frontend:** Vercel (бесплатно)
- **Backend:** Railway.app или Render (€10-20/мес)
- **Database:** PostgreSQL on Railway (€12-15/мес)
- **DNS:** Cloudflare (бесплатно)

### Total Monthly Cost: €25-40/мес (до выручки)

---

## Week-by-Week Breakdown

### Week 1: Infrastructure & Auth

**Goal:** Запустить приложение, залогиниться, видеть пустой dashboard

**Tasks:**
- [ ] Создать Next.js проект, TypeScript настройка
- [ ] PostgreSQL БД setup (таблицы: users, properties, vud_status)
- [ ] NextAuth.js интеграция (email magic link)
- [ ] Vercel deployment (фронтенд)
- [ ] Railway setup (backend + DB)
- [ ] HTTPS/DNS настройка (вуд-трекер.es)

**Deliverables:**
- Работающее приложение на https://vud-tracker.es
- Возможность зарегистрироваться через email
- Пустой dashboard

**Metrics:**
- App loads <2 sec
- Zero errors in console

---

### Week 2: VUD API Integration (Madrid + Barcelona)

**Goal:** Парсить статус VUD из Мадрида и Каталонии

**Tasks:**
- [ ] Анализ API документации (минимум 2 региона)
- [ ] REST клиент для VUD запросов
- [ ] Парсинг ответов, нормализация данных
- [ ] Storage в БД (vud_status таблица)
- [ ] Refresh job (раз в день, раз в неделю)

**Deliverables:**
- Форма ввода VUD-ID и региона
- Парсинг статуса (Active/Expired/Pending)
- Dashboard показывает статус

**Metrics:**
- 90%+ успешный парсинг
- Обновления за <10 сек

---

### Week 3: Additional Regions + Regional Rules

**Goal:** Поддержка 10 регионов, показ штрафов

**Tasks:**
- [ ] Интеграция оставшихся 8 регионов (Валенсия, Андалусия, Балеары, Асту, Басков, Арагон, Наварра, Кастилия)
- [ ] Таблица региональных требований (штрафы, сроки, особенности)
- [ ] UI показывает конкретный штраф для каждого региона
- [ ] Обновление refresh job для всех 10 регионов

**Deliverables:**
- Мульти-региональный dashboard
- Штрафы отображаются по регионам

**Metrics:**
- 10 регионов поддерживаются
- Корректность штрафов: 95%+

---

### Week 4: Alerts & Notifications

**Goal:** Уведомления об истечении лицензии

**Tasks:**
- [ ] Telegram Bot integration (User ID + auth)
- [ ] SendGrid email setup (backup уведомления)
- [ ] Логика: 30/7/1 день перед истечением
- [ ] UI для выбора каналов уведомлений (Telegram, email)
- [ ] Тестирование alerts

**Deliverables:**
- Включение/отключение алертов
- Выбор каналов (Telegram, email)
- Отправка тестовых уведомлений

**Metrics:**
- Alert отправляется правильно
- Latency <5 сек

---

### Week 5: SES.Hospedajes Integration + Checklist

**Goal:** Интеграция с SES для регистрации гостей + инструкция

**Tasks:**
- [ ] SES.Hospedajes API документация
- [ ] OAuth/API ключ setup для интеграции
- [ ] "Register guests" кнопка → redirect на SES
- [ ] Compliance Checklist (10 шагов регистрации в VUD)
- [ ] Видео-туториал (YouTube embed)

**Deliverables:**
- Кнопка для регистрации гостей
- Пошаговая инструкция в UI
- Ссылка на SES.Hospedajes

**Metrics:**
- Checklist 90%+ понятна для non-technical хостов

---

### Week 6: Beta Testing + Polish

**Goal:** Лаунч с 50 бета-тестерами

**Tasks:**
- [ ] Исправление багов, UX polish
- [ ] Performance optimization (Lighthouse >90)
- [ ] Mobile testing (iOS + Android)
- [ ] Рекрут 50 бета-тестеров (Facebook-группы хостов)
- [ ] Feedback collection и итерация
- [ ] Финальный деплой

**Deliverables:**
- Продакшн-версия
- 50 активных бета-пользователей
- Feedback loop open

**Metrics:**
- Lighthouse >90
- Mobile CTR >80%
- User satisfaction >4/5

---

## Go-to-Market Strategy

### Phase 1: Launch (Неделя 6-8)

**Channels:**
1. **Facebook Groups** (50+ групп хостов)
   - Пост с problem + solution
   - Сообщение модераторам (pitch)
   - Приглашение на бета (бесплатно)

2. **Reddit r/spain + r/airbnb**
   - Пост "I built a tool for VUD tracking"
   - Ссылка на бету

3. **Google Ads** (начало недели 7)
   - Keywords: "VUD compliance", "VUD España", "traquear licencia VUD"
   - Budget: €5/день (€35/неделю)
   - CPC ожидаемый: €0.30-1.00
   - Target: 50-100 clicks → 5-10 sign-ups

4. **Email Outreach**
   - Поиск 20 хостов на Airbnb (verified reviews)
   - Direct message + pitch
   - Conversion ожидаемая: 2-3 бета-юзера

### Phase 2: Validation (Неделя 9-12)

**Goal:** 500+ sign-ups, first €1K revenue

**Metrics:**
- CAC: <€50
- Conversion (trial → paid): >3%
- LTV: >€500

**Channels:**
- Expand Google Ads (€500/месяц бюджет)
- LinkedIn ads (tagging property managers)
- YouTube video "VUD Compliance Guide" (SEO)

### Phase 3: Scale (Месяц 4-6)

**Goal:** 3K-5K хостов, €25K MRR

**Channels:**
- Partnerships с platform-агентами (management companies)
- Influencer collaboration (YouTube/TikTok хосты)
- Native advertising (blogs про Airbnb в Испании)

---

## Pricing Strategy

### Tier 1: Free (Trial)
- 1 property
- 7-день trial alerts
- Basic VUD status
- **Goal:** Low friction entry

### Tier 2: Starter (€8/мес или €80/год)
- 3 properties
- Unlimited alerts
- Regional compliance guide
- Email + Telegram notifications
- **Target:** Small hosts (1-3 properties)

### Tier 3: Pro (€19/мес или €190/год)
- Unlimited properties
- Team management (3 users)
- SES.Hospedajes integration
- Priority support
- Advanced analytics
- **Target:** Property managers (10+ properties)

### Tier 4: Enterprise (€99/мес, custom)
- API access for platforms
- White-label option
- Dedicated support
- **Target:** Airbnb-like platforms, booking aggregators

### Expected CAC & LTV
- **CAC:** €20-50 (через Facebook-группы)
- **LTV:** €300-500 (€8-19/мес × 20 месяцев, 80% retention)
- **Ratio:** 10-15x (healthy)

---

## Competitive Analysis

### Direct Competitors
- **Chekin** (€30-100/мес)
  - Strength: SES API встроен, гостевая регистрация
  - Weakness: Нет VUD-трекера, нет expiry alerts, переусложнено
  - Price: 3-4x выше нашего

- **Hostaway** (€100-300/мес)
  - Strength: Channel manager, powerful integrals
  - Weakness: Очень дорого для одного хоста, не VUD-специфичный
  - Market: Enterprise

### Indirect Competitors
- **Lodgify** (€29-149/мес) — PMS, нет compliance focus
- **Guesty/Octorate** — Generic PMS, no VUD integration
- **Airbnb Native** (in development) — встроенная VUD-проверка, launched 2027-2028

### Competitive Advantages
1. **VUD-специфичный** (не generic PMS)
2. **Дешев** (€8-19/мес vs €30-100)
3. **Локализован** (17 регионов, испанские штрафы)
4. **Срочно** (дедлайн февраль 2026, нет конкурента)

---

## Risk Analysis

### High Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| **API changes** (VUD регионы обновляют API) | Medium | High | Monitor 2-3 региональных API, fallback на manual check |
| **Airbnb встроит VUD проверку раньше** (2027 вместо 2028) | Medium | Medium | Pivot на другие платформы (Booking, Vrbo) |
| **Low conversion trial→paid** (<1%) | Medium | High | A/B test pricing, improve UX |

### Medium Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| **API доступ закрывается** (регионы ограничивают) | Low | Medium | White-label Chekin, создать partnerships |
| **Customer support overload** | Medium | Low | Chatbot + FAQ, hire support после €50K ARR |
| **Масштабирование Infrastructure** | Low | Medium | Infrastructure budget 5% от revenue |

### Low Risks
- Regulatory changes (VUD закон стабилен)
- Payment failures (Stripe + Redsys handle)

---

## Financial Projections (Y1)

### Conservative Case (2K хостов)
- ASP (Average Selling Price): €100/год
- Sign-ups: 2K (CAC €30 × €5K маркетинг)
- Conversion trial→paid: 50%
- **Y1 Revenue:** €100K
- **Gross Margin:** 80% (низкие costs)
- **Profit:** €60K

### Base Case (3.5K хостов)
- ASP: €110/год (mix Starter + Pro)
- Sign-ups: 3.5K (€7K маркетинг + referral)
- Conversion: 60%
- **Y1 Revenue:** €231K
- **Gross Margin:** 80%
- **Profit:** €165K

### Optimistic Case (5K хостов)
- ASP: €120/год
- Sign-ups: 5K
- Conversion: 70%
- **Y1 Revenue:** €420K
- **Gross Margin:** 80%
- **Profit:** €300K

### Burn Rate (until revenue)
- Development: €5K (freelance) + €1K (tools)
- Infrastructure: €0.5K/месяц × 3 месяца = €1.5K
- Marketing: €5K (ads)
- **Total Burn:** €12.5K (safe for solopreneur with savings)

---

## Success Metrics (North Star)

### Week 6 (Launch)
- [ ] 50 beta users sign-up
- [ ] 90%+ successfully integrated with region

### Month 1
- [ ] 200 sign-ups
- [ ] 10-15 paid conversions
- [ ] User satisfaction >4.2/5

### Month 3
- [ ] 1K sign-ups
- [ ] 150-200 paid users (15% conversion)
- [ ] €2-3K MRR
- [ ] NPS >40

### Month 6
- [ ] 3K+ sign-ups
- [ ] 500+ paid users
- [ ] €5-8K MRR
- [ ] CAC payback <6 months

### Month 12
- [ ] 5K+ sign-ups
- [ ] 2-3K paid users
- [ ] €20-30K MRR
- [ ] Profitability

---

## Team & Hiring (for scale)

### MVP Phase (Months 1-3): Solo
- 1 founder (full-stack dev + GTM)

### Growth Phase (Months 4-6): +1
- 1 Customer success manager (PT) — €800/мес
- Handle support, feedback loops

### Scale Phase (Months 7-12): +2
- 1 Backend engineer (FT) — €2K/мес (for API integrations)
- 1 Marketing/Growth hacker (PT) — €1K/мес

### Total Team Cost Y1: ~€3-4K (vs €30K+ в типичной startup)

---

## Appendix: Regional VUD Requirements

### Top 5 Regions (80% рынка)

| Регион | VUT License | Max Штраф | API Status | Сложность |
|--------|-----------|-----------|-----------|-----------|
| **Мадрид** | VUT | €60K | Documented, REST | Low |
| **Каталония** | HUT | €600K | Complex, SOAP | High |
| **Валенсия** | VUT | €300K | REST, Good docs | Medium |
| **Андалусия** | VUT | €600K | Slow API | High |
| **Балеары** | VUT | €600K | Restricted access | High |

### Integration Priority (MVP focus)
1. **Week 2:** Madrid + Barcelona (30% рынка)
2. **Week 3:** Valencia + Andalusia + Balearic (50% рынка)
3. **Phase 2:** Asturias, Basque, Aragon, Navarre, Castilla (remaining 20%)

---

## Next Steps

### Immediate (этот день)
- [ ] Criar GitHub репо (private)
- [ ] Зарегистрировать домен vud-tracker.es
- [ ] Зарегистрировать Telegram Bot
- [ ] Составить список 20 Facebook-групп хостов

### This Week
- [ ] Запустить Next.js + Vercel setup
- [ ] PostgreSQL на Railway
- [ ] First API prototype (Madrid)

### Week 2
- [ ] Alpha test с 5 хостами
- [ ] Feedback loop open

---

**Status:** Ready to code
**Target Launch:** Март 2026
**Burn Budget:** €12.5K
**Expected Y1 Revenue:** €100K-420K (3 scenarios)
