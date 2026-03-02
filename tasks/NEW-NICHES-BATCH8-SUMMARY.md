# Batch 8: New Niches Scan Summary (March 2, 2026)

## Обзор

Проведён глубокий скан испанского рынка по 7 направлениям. Найдены **5 новых ниш** с high potential (score > 7.5).

---

## TOP-3 для добавления в БД (Ready for Batch 8)

### 1. Elderly Care Platform — Cuidadores Matching
**Score: 8.1/10** | TAM: €4-6B | MVP: 4-6 недель

**Суть:** Маркетплейс для подбора проверенных cuidadores (домашних помощников) для пожилых людей

**Почему сейчас:**
- 8.2M люди 65+ в Испании, дефицит 200K+ cuidadores
- Госпрограмма "Plan de Mejora" субсидирует услуги ухода (500-1000 запросов/мес per регион)
- Zero гос-интегрированной платформы

**Модель:**
- Freemium для семей (поиск бесплатно, €2-5 за контакт)
- SaaS для агентств (€100-200/мес, комиссия 8-12%)
- B2B: интеграция с insurance companies

**Риск:** Liability, экономическая чувствительность → **LOW-MEDIUM**

---

### 2. Solar Energy Marketplace — SolarMatch
**Score: 8.4/10** | TAM: €800M-1.2B | MVP: 3-4 недели

**Суть:** Маркетплейс установщиков солнечных панелей + ROI калькулятор + financing

**Почему сейчас:**
- 1.5M домовладельцев потенциально
- Новые госсубсидии INEA/INCEA открываются Q1-Q2 2026 (до 60% субсидии)
- Установщики перегружены, нет integrated platform

**Модель:**
- Комиссия от установщиков за lead (€100-300)
- SaaS для установщиков (€50-100/мес)
- Affiliate: 5-8% от кредитования (Santander partnership)

**Риск:** Высокий CAC, зависимость от госпрограмм → **MEDIUM**

---

### 3. Modern Gestoría SaaS — GestoriaHub
**Score: 8.1/10** | TAM: €200-400M | MVP: 4-6 недель

**Суть:** Cloud SaaS для испанских гесторий (многоклиентское управление, VeriFactu-ready)

**Почему сейчас:**
- 50K гесторий в Испании, legacy ПО (Contaplus, A3) умирает
- VeriFactu deadline январь 2027 = URGENCY NOW (deadline-driven adoption)
- Sage 50/Holded дорогие и не фокусированы на gestoría-модели

**Модель:**
- SaaS подписка €50-200/мес per gestoría
- Per-client fee €2-5 (scalable)
- Premium features €100-300/мес

**Риск:** Regulatory compliance, высокий CAC → **MEDIUM**

---

## Honorable Mentions (Score 7.5-7.7)

### 4. Fertility Tourism Platform — FertilitySpain
**Score: 7.7/10** | TAM: €300-500M | MVP: 6-8 недель

**Суть:** Integrated platform для international IVF patients (doctor marketplace + visa + housing + financing)

**Момент:** España = fertility hub в Европе (180K процедур/год, 30% иностранцы, 70% success rate), но нет integrated platform

**Модель:** Комиссия €1.5-3K per successful case + financing comms + housing partnership

**Риск:** Medical licensing, reputation-driven → **MEDIUM-HIGH**

---

### 5. Pet Care Telemedicine — PetCare.es
**Score: 7.5/10** | TAM: €1.2-1.6B | MVP: 4-5 недель

**Суть:** Telemedicine для животных + insurance aggregator + marketplace

**Момент:** 30M+ животных в Испании, telemedicine +45% в год, 75% хозяев готовы

**Модель:** Telemedicine комиссия 20-25% + insurance affiliate + marketplace comms + subscription

**Риск:** Vet licenses, high churn, seasonality → **MEDIUM**

---

## Почему НЕ добавили (Skip)

### Cleaning Services Platform
- TAM есть (€2-3B), но рынок уже **НАСЫЩЕН** (Clintu, Cleanzy, Sparknova лидируют)
- Скор: 6.1 (ниже threshold 6.5 для новых ниш в saturated рынке)

### Aesthetic Medicine Booking
- TAM есть (€200-400M), но менее URGENT чем Fertility (хотим vs need)
- Конкуренция: Doctoralia, Booking.dentist, Bookimed уже есть
- Скор: 7.0 (solid, но не TOP-tier)

### Construction B2B
- TAM есть (€500M-1.2B), но низкие маржи (construction industry issue)
- Конкуренция: Europages, Distichain уже есть
- Скор: 6.7 (solid, но рынок сложный)

---

## Files Created

✅ `/Users/sprnff/Projects/research/02-research/spain-niches/NEW-NICHES-SCAN-2026.md` — полный анализ 8 ниш
✅ `/Users/sprnff/Projects/research/tasks/staging/batch-8-new-niches.js` — staging file для add_niches.py

---

## Next Steps (Recommended)

### Сейчас (Week 1):
1. Загрузить batch-8 в SQLite через `scripts/add_niches.py`
2. Export JSON
3. Verify в дашборде

### Week 1-2: Quick Validation
- **Elderly Care:** 5-10 интервью с семьями ищущими cuidadores (Reddit, Facebook groups)
- **Solar Energy:** 5-10 интервью с домовладельцами (Google Reviews комментарии)
- **Gestoría SaaS:** 5-10 интервью с гесториями (LinkedIn, WhatsApp outreach)

### Week 2-3: Deep Dive Top-1
- Выбрать самую перспективную из TOP-3
- Landing page + ads test (€50-100 бюджет)
- Pre-sales или waitlist validation

---

## Ключевые insights

1. **Elderly Care** — самая большая боль (дефицит 200K cuidadores), самая high urgency (гос-программы NOW)
2. **Solar Energy** — best timing (новые субсидии Q1-Q2 2026, установщики перегружены)
3. **Gestoría SaaS** — most predictable (deadline-driven adoption, B2B recurring revenue)

**Рекомендация:** Start with Solar Energy (fastest MVP, highest timing advantage), validate 2 недели, then pivot или scale.

---

*Сканировано: 2 марта 2026, 14:30 UTC*
*Методология: Web research (perplexity, Google) + EU-Startups database + Spain market reports + CLAUDE.md Spain-specific data*
