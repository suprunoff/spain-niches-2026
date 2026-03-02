# Research HQ — Niche Hunter & Market Capture

## Миссия
Исследовательский центр для поиска прибыльных онлайн-ниш в Испании, анализа конкурентов и быстрого захвата рынка через MVP.

## Принцип
**Найти → Проанализировать → Захватить → Масштабировать**

Испания отстаёт от US/CIS на 3-7 лет в digital adoption. Это окно возможностей.

## Структура проекта

```
research/
├── CLAUDE.md                          # Этот файл — устав проекта
├── README.md                          # Навигация по документам
│
├── 01-frameworks/                     # Методологии анализа
│   ├── NICHE_ANALYSIS_FRAMEWORKS.md   # 12 фреймворков (TAM, JTBD, Porter, Blue Ocean...)
│   ├── NICHE_SCORING_TEMPLATES.md     # Шаблоны скоринга (copy-paste)
│   └── QUICK_REFERENCE.md            # Быстрая справка, red flags, метрики
│
├── 02-research/                       # Исследования рынков
│   ├── spain-macro/                   # Макро: экономика, регуляторика, digital adoption
│   ├── spain-niches/                  # Скоринг ниш, ТОП-35
│   ├── spain-proptech/                # PropTech deep dive
│   ├── spain-tourism/                 # Tourism tech deep dive
│   └── spain-national/                # Национальные особенности (бизнес-культура, психология)
│
├── 03-competitors/                    # Конкурентный анализ по нишам
│   └── {niche-name}/                  # Одна папка на нишу
│
├── 04-mvp/                            # MVP-планы для выбранных ниш
│   └── {niche-name}/                  # Спеки, wireframes, tech stack
│
├── 05-validation/                     # Результаты валидации
│   ├── interviews/                    # CustDev интервью
│   ├── landing-pages/                 # А/Б тесты лендингов
│   └── ads-tests/                     # Тесты рекламы
│
├── skills/                            # Claude Code skills для этого проекта
│   ├── niche-scorer.md                # Скилл автоматического скоринга ниш
│   ├── competitor-mapper.md           # Скилл маппинга конкурентов
│   └── spain-context.md              # Контекст Испании для всех анализов
│
├── case-studies/                      # Кейсы (Duolingo, Airbnb, ConvertKit...)
│
└── tasks/                             # Текущие задачи
    └── todo.md
```

## Рабочий процесс

### Фаза 1: Discovery (где деньги?)
1. Макро-скан отрасли → список 20-50 ниш
2. Quick scoring каждой ниши (20 мин) → отсев до ТОП-10
3. Deep dive ТОП-5 → конкуренты, TAM, gaps

### Фаза 2: Validation (реально ли?)
4. CustDev: 10-20 интервью на нишу
5. Landing page + ads test (€50-100 бюджет)
6. Pre-sales или waitlist → Go/No-Go

### Фаза 3: Capture (быстрый MVP)
7. MVP за 2-6 недель (одна core feature)
8. Запуск на 100 юзеров
9. Iterate или pivot

### Фаза 4: Scale
10. GTM: content + paid + partnerships
11. Расширение на регионы/фичи
12. Monetization optimization

## Национальные особенности Испании

> ⚡ Детальный ресерч: `02-research/spain-national/`

### Бизнес-культура
- **Личные связи > всего** — warm intro = 8-10x лучше cold. WhatsApp reply rate 40-60% vs cold email 0.5-1.5%
- **WhatsApp = деловой мессенджер** — B2B outreach + support + sales follow-up
- **Медленные решения** — SMB 2-4 нед, corp 3-6 мес. Август = ноль решений
- **Регионы:** Мадрид (быстро, EN ок), Барселона (SaaS-hub, каталанский +20% CR), Страна Басков (industrial), Андалусия (очень медленно)

### Платёжные привычки (верифицировано Q1 2026)
- **Bizum** — 30.6M юзеров → 32.5M цель, €67.7B объём (+53% за 2025), e-com +82%. **Обязателен для consumer**
- **Tarjeta/Redsys** — карты для онлайн. Stripe работает, но Redsys часто требуют
- **Transferencia SEPA** — B2B, крупные чеки
- **Подписки** — 45% churn за 3 мес если нет ценности. Freemium конвертирует в 3-5x лучше платной

### Регуляторика (актуальные дедлайны 2026-2027)
- **VeriFactu**: SL → **янв 2027**, autónomos → июл 2027 (сдвинуто RD 15/2025!)
- **Ley Atención al Cliente (Ley 10/2025)**: дек 2026, **только 250+ сотр / €50M+ выручка**
- **Tourist rental (VUD)**: compliance июл 2025 (прошёл)
- **RGPD/LSSI**: постоянно, строже чем GDPR

### Психология потребителя
- **Цена важнее бренда** для 60%+ населения, 72% используют промокоды
- **Mobile-first** — 80%+ трафика с мобильных, mobile-first обязателен
- **Доверие через отзывы** — 92% проверяют отзывы перед покупкой. Google Reviews ≥4.0 критичны
- **Локальный язык** — испанский ОБЯЗАТЕЛЕН. Каталанский +20% CR в Барселоне
- **85% пробуют бесплатно** — free trial/freemium не опция, а необходимость

## Инструменты и скиллы

### Claude Code skills (установлены)
- `niche-scorer` — автоскоринг ниш по 7 критериям с учётом Испании
- `competitor-mapper` — маппинг конкурентов + gap analysis
- `spain-context` — чеклист испанской специфики для любого анализа
- `market-research` — TAM/SAM/SOM, SWOT
- `niche-finder` — gap analysis между US/CIS и Испанией
- `deep-research` — 7-phase research с верификацией
- `research-external` — web research
- `perplexity-search` — быстрый поиск
- `ads-competitor` — конкурентная разведка
- `reddit-insights` — валидация боли аудитории
- `positioning-basics` — позиционирование продукта

### Метрики Go/No-Go для ниши
- Search volume: 500-5K/мес
- Конкурентов: 5-30 (не 0 и не 100+)
- CPC > €1.00 (люди платят за рекламу = есть деньги)
- 70%+ интервьюируемых говорят "urgent"
- 50%+ готовы платить конкретную цену
- Niche score >= 6.0/10

## Агентная схема

```
Задача → researcher (Sonnet) → собирает данные
                ↓
         analyst (Opus) → анализирует, скорит, решает
```

| Агент | Модель | Назначение | Запускать когда |
|-------|--------|-----------|-----------------|
| `researcher` | **Sonnet** | Веб-поиск, сбор данных, конкуренты, статистика | Нужны факты/данные |
| `analyst` | **Opus** | Скоринг, GAP, TAM, JTBD, Go/No-Go | Нужен анализ/решение |

**Правило:** researcher собирает → analyst думает. Не смешивать роли.

## Логирование

- **Артефакты и прогресс:** `tasks/artifacts.log` — автоматически через хуки
- **Детальный лог сессий:** `CHANGELOG.md`
- **Контекст для новой сессии:** `.claude/session-context.md`

## Правила проекта
- Все выводы подкреплены данными (ссылки обязательны)
- Не придумывать TAM — считать bottom-up + top-down
- Один файл = одна тема. Не мешать ниши
- Скоринг всегда по единой методологии (`01-frameworks/NICHE_SCORING_TEMPLATES.md`)
- Каждую нишу оценивать через призму "как это работает В ИСПАНИИ", не абстрактно
- Spain-context обязателен перед любым анализом: `02-research/spain-national/`
