# Deep Dive: Finiquito Calculator + Spanish LegalTech

**Дата:** март 2026
**Статус:** Tier 2 (перспективная ниша, требует валидации)
**Сложность:** Средняя (нужны консультации с адвокатами)

---

## 1. Идея в одной фразе

**Бесплатный калькулятор финикито (выходного пособия) как SEO-магнит → потом affiliate-ссылки на трудовых адвокатов + премиум-анализ документов.**

Испания теряет 100K+ рабочих мест ежемесячно (данные 2025). Каждый уволенный хочет проверить, правильно ли считается его выходное пособие. Это high-intent трафик с высокой конверсией в affiliate-доход.

---

## 2. Рынок: размер и возможность

### 2.1 Объём спроса

**Увольнения в Испании (2025):**
- ~2.4 млн работников уволено/завершились контракты в 2025 году
- ~100K увольнений только в последние дни месяца (peak дни 28-31)
- Средний контракт: испанская компания делает кадровые движения в конце месяца

**SEO-поиски:**
- "calcular finiquito" → высокоинтентный поиск (уволенные, ищут срочно)
- "calculadora finiquito" → прямые запросы пользователей
- Смежные: "indemnización por despido", "calculadora ERTE", "despido improcedente"
- Примерная оценка: 10K-30K поиском в месяц по "finiquito" + производные
  - *(Google Trends прямо не показывает числа, но есть spike каждый месяц в конце)*

**Демография:**
- B2C: 500K+ уволенных в год, 60% будут гуглить "как считается финикито"
- B2B: ~15K трудовых адвокатов (laboralistas) в Испании, нуждающихся в инструментах автоматизации

### 2.2 Конкуренты (существующие калькуляторы)

Найдено **8+ бесплатных калькуляторов:**

1. **finiquitocalculadora.es** — free, мобильный, просто считает
2. **Finiqueitor.com** — free calculator 2026
3. **calcularfiniquito.es** — free с информацией о видах увольнений
4. **INEAF.es** — calculadora от школы бизнеса (контент + free tool)
5. **Euroinnova.com** — free, обучающий контент
6. **Taclia.com** — калькулятор + legal info
7. **Mobile app** "Calculadora Finiquito ES 2026" (Google Play) — есть конкурентов и в мобиле
8. **economistjurist.es** — индивидуальный расчёт + контент

**Вывод:** Рынок НЕ пустой, но все существующие решения:
- Просто считают (input: зп, дни, вид увольнения → output: сумма)
- БЕЗ монетизации (нет affiliate, нет premium)
- БЕЗ интеграции с адвокатами (no warm intro в юрфирмы)
- БЕЗ анализа документов (нет AI)

→ **Возможность:** build better + monetize

---

## 3. Бизнес-модель

### 3.1 Freemium + Affiliate (B2C Primary)

**Фаза 1: Бесплатный калькулятор** (магнит SEO, acquisition)

```
User flow:
1. Гуглит "calcular finiquito"
2. Попадает на твой сайт (SEO ranking)
3. Вводит:
   - Зарплату (net/gross)
   - Дней работал
   - Вид увольнения (despido procedente, improcedente, renuncia, ERTE)
   - Дни отпуска не использованы
4. Получает результат: "Финикито €9,500"
```

**Фаза 2: Монетизация после расчёта** (conversion → affiliate)

После того как пользователь видит сумму:

```
Сценарий A (базовая монетизация):
Result: "Ваше финикито: €9,500"
CTA: "Проверить легальность увольнения?" → link на консультацию адвоката
→ affiliate комиссия €50-150 если пользователь забронирует консультацию

Сценарий B (если расхождение):
Калькулятор показывает: "Стандартный расчёт: €9,500"
AI анализирует типовую схему для его контракта и говорит:
"⚠️ Похоже, вам занижают сумму на €1,200-2,000. Нужна проверка адвоката?"
→ Higher intent, higher conversion → €100-200 affiliate
```

**Фаза 3: Премиум (продвинутый анализ)**

```
Premium features (€9.99-19.99 one-time):
- Загружаешь контракт (PDF) → AI анализирует
- Выделяет red flags:
  - Зарплата занижена vs. sector average
  - Отпуск не дан полностью (нарушение)
  - Нет записи о болезнях/отсутствиях
  - Договор нарушает Estatuto de Trabajadores
- Выдаёт "скоринг легальности" вашего увольнения 1-10
- СTA: "Поговори с адвокатом за €X"
```

**Фаза 4: B2B SaaS (для адвокатов)**

```
Laboralista SaaS (€50-150/мес):
- Dashboard: поступающие клиенты (leads с твоего калькулятора)
- Автоматический расчёт финикито
- Интеграция с SEPE, Agencia Tributaria (испанские гос-системы)
- Шаблоны письма в суд
- Tracking case статуса
```

### 3.2 Unit Economics (B2C)

| Метрика | Значение | Расчёт |
|---------|---------|--------|
| **CAC** | €0 | Весь трафик через SEO |
| **Конверсия калькулятор → affiliate click** | 10-15% | 100 юзеров → 10-15 нажимают CTA |
| **Affiliate conversion** (click → консультация) | 20-30% | 10 clicks → 2-3 консультации |
| **Revenue per user** | €5-15 | avg commission €50 × 10% × 25% = €1.25 per user... |
| **Revenue per user (revised)** | €2-8 | Более реалистично с churn |
| **Monthly users (SEO)** | 3K-5K | Organic traffic (год 1) |
| **Monthly affiliate revenue** | €6K-15K | 5K users × 10% × 25% × €50 |
| **LTV** | €36-96 | user lifetime × repeat rate (пользователь может вернуться) |

**Вывод:** Хороший CLTV:CAC ratio (бесплатный трафик), но нужно добить конверсию.

---

## 4. Технический MVP: что строить в первую очередь

### Этап 1: Core (неделя 1-2)

```
Frontend:
- React app (или Next.js для SEO)
- Form: Зарплата → Дни → Вид увольнения
- Calculation engine (JavaScript)
  - Считает 33 дня × зп за год (основная формула)
  - Handles разные типы:
    - Despido procedente: 20 дней
    - Despido improcedente: 33 дней
    - Renuncia: 0 дней
    - ERTE: depends на расчёт SEPE
  - Extra месячные (pagas extra) — автоматически 2 в год
  - Отпуск: добавляет неиспользованные дни

Backend:
- API endpoint: /calculate-finiquito (POST)
- Логирование расчётов (анализ юзер-поведения)
- Тестовые данные для валидации формул
```

### Этап 2: Monetization (неделя 3-4)

```
Affiliate integration:
- Embed partner list (abogados, юрконсультанты)
- UTM tracking на кнопку "Консультация адвоката"
- Partner API: pull available slots (если partner есть booking system)

Premum gate:
- After calculation → modal
- "Нужна помощь адвоката?" + кнопка
- Разные партнёры для разных городов (Madrid, Barcelona, Valencia...)
```

### Этап 3: AI Document Analysis (неделя 5-8, опционально)

```
Upload contract:
- Drag-drop PDF
- Send to OpenAI API (GPT-4)
  - Prompt: "Проанализируй контракт, check vs. Estatuto de Trabajadores"
  - Extract: дата контракта, вид (indefinido/temporal), зарплата
  - Identify red flags
- Display scorecard
```

### Стек

```
Frontend: Next.js (SSR для SEO) + Tailwind
Backend: Python (FastAPI) или Node.js
Hosting: Vercel (frontend) + PlanetScale/Render (backend)
Analytics: Mixpanel, Segment (track conversions)
Affiliate tracking: Refersion или custom (UTM)
AI: OpenAI API (document analysis)
DB: PostgreSQL (user data, calc history)
```

---

## 5. GTM: как привлечь первых 10K юзеров

### Фаза 1: SEO (месяцы 1-3, primary channel)

**Keyword strategy:**
```
High-intent keywords (конверсионные):
- "calcular finiquito" (main)
- "calculadora finiquito españa" (long-tail)
- "finiquito cuánto recibo"
- "indemnización despido españa 2026"
- "despido improcedente indemnización"
- "erte calculadora"

Informational (content):
- "qué es finiquito"
- "cómo se calcula finiquito"
- "derechos si te despiden españa"
- "liquidación laboral españa"
```

**Content plan:**
```
Blog posts (20-30 articles, 3-6 мес):
1. "Guía completa: Cómo calcular tu finiquito en España" (3K words)
2. "Despido procedente vs improcedente: ¿Cuánto deberías recibir?" (2.5K)
3. "ERTE 2026: Cálculo de prestación por desempleo" (2.5K)
4. "Red flags en tu contrato laboral: Checklist" (1.5K)
5. "Indemnización por despido improcedente: Máximos 2026" (2K)
6. "¿Puede tu empresa hacer ERTE? Guía legal" (1.5K)
... + 24 more

Internal links: blog → calculator
Backlinks: ask laboralistas.com, derecho.es, abogados directories
```

**SEO metrics to track:**
- Impressions & CTR on "finiquito" keywords
- Ranking positions (target: top 3 for main keyword)
- Organic traffic growth (month-over-month)
- Calculator page bounce rate (should be <40%)

**Timeline:** Месяцы 1-3 → expect 1K-2K organic users/мес

### Фаза 2: Paid (Google Ads, месяцы 1-2)

```
Google Ads spend: €500-1000/мес (test)
CPC estimate: €1-3 (labor keywords are moderately expensive)
Landing page: calculator page (high-intent)
Conversion goal: affiliate click
Expected CAC through ads: €5-15 (vs €0 for organic)
```

**Когда отключить:** Как только ROAS < 1:2 (если каждый евро ads дает €2+ affiliate)

### Фаза 3: Partnerships (месяцы 2-6)

```
Partner with:
1. Laboralistas directories (tuabogadolaboralista.com, etc.)
   → Embed calculator on their sites (white-label)
   → You get affiliate clicks, they get tool

2. HR software (Factorial, Personio)
   → Partner with their SMB client base
   → "Free finiquito calculator for your employees"
   → Cross-promotion

3. Telegram channels (Spanish labor/entrepreneurship)
   → Share calculator in relevant groups
   → Low cost, high engagement

4. Reddit r/derechos (Spanish subreddit)
   → Answer finiquito questions with link to calc
```

### Фаза 4: Affiliate Network (месяцы 3+)

```
Recruit laboralistas directly:
- Email list (scraped from directories)
- Pitch: "Bring your referral traffic to our calculator"
- Commission: €50 per qualified consultation
- Give them unique tracking link

Affiliate platforms:
- Crehana, Udemy (если будет premium курс)
- Refersion (affiliate management)
```

---

## 6. Конкуренция: как выиграть

### Текущие игроки и их слабости

| Конкурент | Сильные стороны | Слабости | Наша стратегия |
|-----------|-----------------|----------|-----------------|
| finiquitocalculadora.es | Simple, мобильный | No monetization, no premium | Add premium, affiliate network |
| Finiqueitor.com | Clean UI | No premium, no document analysis | AI document analysis |
| INEAF | Trust (от школы бизнеса) | Гвоздь, не калькулятор | Better UX + affiliate |
| Euroinnova | Edtech credibility | No calculator, just courses | Free calc → paid courses |

### Наше конкурентное преимущество

1. **AI Document Analysis** — уникальное (нет у конкурентов)
2. **Affiliate network** — первая, кто интегрирует адвокатов
3. **Mobile-first** — responsive design (испанцы = мобильный-first)
4. **Localization** — каждый регион (Мадрид, Барселона, Страна Басков) имеет свои коллективные договоры
5. **Blockchain-verified** — опционально: сохранять расчёты на blockchain (доказательство даты)

---

## 7. Риски и как их миtigировать

| Риск | Вероятность | Воздействие | Mitigation |
|------|------------|-----------|-----------|
| Affiliate program collapse (партнёры не конвертируют) | HIGH | MEDIUM | Start with small partner set, test CR first |
| Правовая ответственность (user suует if calc is wrong) | MEDIUM | HIGH | Disclaimer: "Estimate only, consult lawyer" + insurance |
| Конкурент копирует модель | MEDIUM | LOW | First-mover advantage, network effects |
| Low organic traffic (SEO не работает) | LOW | HIGH | Paid ads backup, PR, partnerships |
| Churn партнёров (адвокаты уходят к другому сервису) | MEDIUM | MEDIUM | Exclusive deals, better margins |
| AI hallucinations в document analysis | MEDIUM | HIGH | Manual review for premium users, fine-tuned model |
| GDPR/compliance (handle user data) | LOW | HIGH | Encrypt, no storage >30 дней, transparency |

---

## 8. Unit Economics: детальный расчёт

### Сценарий: Year 1 (conservative)

```
Assumptions:
- SEO traffic: 2K users/мес (месяцы 1-3), 5K user/мес (месяцы 4-12)
- Affiliate click-through: 12%
- Affiliate conversion (click → consultation): 25%
- Average affiliate commission: €75 per converted user
- Premium adoption: 5% of users (€9.99)

Month 1-3:
  Users: 2K × 3 = 6K
  Affiliate clicks: 6K × 12% = 720
  Conversions: 720 × 25% = 180
  Affiliate revenue: 180 × €75 = €13,500
  Premium: 6K × 5% × €9.99 = €3,000
  Total: €16,500
  Cost: €500 (domain, server, SEO tools) = PROFIT €16K

Month 4-12:
  Users: 5K × 9 = 45K
  Affiliate clicks: 45K × 12% = 5,400
  Conversions: 5,400 × 25% = 1,350
  Affiliate revenue: 1,350 × €75 = €101,250
  Premium: 45K × 5% × €9.99 = €22,476
  Total: €123,726
  Cost: €1K×9 (server, tools, customer support) = PROFIT €114,726

Year 1 Total: €16.5K + €114.7K = €131.2K revenue, ~€120K net profit (1 person operation)
```

### ROI on MVP (€4K-6K investment)

```
MVP costs (week 1-8):
- Dev: 80 hours × €50 = €4,000
- Hosting (annual): €1,000
- Tools (Stripe, OpenAI, analytics): €500
- SEO tools (Ahrefs): €600

Total: €6,100
Year 1 profit: €120K
ROI: 20x in year 1
```

---

## 9. Go/No-Go критерии для валидации

### Перед полноценным запуском, нужно проверить:

**Перед MVP (week 1-2):**
- [ ] 10 интервью с уволенными (за последние 6 мес) — готовы ли платить за консультацию?
- [ ] 5 интервью с laboralistas — готовы ли платить за leads?
- [ ] Google Trends search volume confirm (запросы есть?)

**После MVP (неделя 4):**
- [ ] Organic traffic ≥ 50 visitors/день (3K/мес)
- [ ] Affiliate click-through ≥ 8% (низкий = fail)
- [ ] Affiliate conversion ≥ 15% (люди не готовы платить = pivot к freemium курсам)

**После month 3:**
- [ ] Organic traffic ≥ 3K users/мес
- [ ] Affiliate revenue ≥ €10K/мес
- [ ] Premium adoption ≥ 3% of users
- [ ] Repeat users ≥ 20% (validation: people found value)

**Go/No-Go decision point:** конец месяца 3
- If affiliate revenue > €8K/мес и repeat rate > 15% → **GO** (scale SEO)
- If organic traffic < 2K/мес → **PIVOT** (переквалифицироваться в B2B SaaS для адвокатов)
- If affiliate conversion < 10% → **RETHINK** (может быть нужна другая монетизация)

---

## 10. Long-term vision (year 2+)

### Expansion paths

```
Year 2 (Monetization optimization):
- B2B SaaS for laboralistas (€100/мес, 100 customers = €10K/мес recurring)
- Premium content: courses on labor law (€29-49)
- Mobile app (iOS/Android) for better UX
- Regional expansion (Portugal, Mexico Spanish-speaking countries)
- AI-powered contract generator (templates for employers too)

Year 3 (Platform):
- Marketplace: match workers with laboralistas (take 20% fee)
- Insurance partnership: finiquito verification insurance (€5/person)
- Blockchain proof of calculation (legal evidence)
```

---

## 11. Сравнение с альтернативами

### Vs. Калькулятор без монетизации
- **Этот путь:** Free calc (SEO) → Affiliate → Premium → B2B SaaS = €100K+/год
- **Альтернатива:** Free calc (SEO) = vanity metrics, no revenue

### Vs. Full legaltech platform (DoNotPay-style)
- **Этот путь:** Узкая ниша (finiquito), быстро к монетизации
- **Альтернатива:** Широкий scope (все legal tasks), дорого, долго, сложнее конкурировать

### Vs. B2B SaaS для адвокатов (с нуля)
- **Этот путь:** Start с B2C (easier GTM) → then B2B
- **Альтернатива:** Start B2B (долгие sales cycles, высокий CAC)

→ **Вывод:** Finiquito calc = идеальный стартовый вектор для испанского legaltech

---

## Источники исследования

**Данные увольнений:**
- [Ministerio de Trabajo — Estadística de Regulación de Empleo](https://www.mites.gob.es/estadisticas/reg/reg25ene/reg_1_2025.pdf)
- [Cataluña Press — 2.4 млн потерянных рабочих мест в 2025](https://www.catalunyapress.es/articulo/economia/2025-12-29/5717521-casi-24-millones-empleos-perdidos-2025-esta-fallando-reforma-laboral)

**Существующие калькуляторы:**
- [finiquitocalculadora.es](https://finiquitocalculadora.es/)
- [Finiqueitor.com](https://www.finiqueitor.com/)
- [INEAF Calculadora](https://www.ineaf.es/calculadoras-financieras/calculadora-de-finiquitos)

**Legaltech landscape:**
- [Klaro.legal — контракты на языке людей](https://startups-espanolas.es/klarolegal-la-startup-que-traduce-contratos-a-lenguaje-humano)
- [Lexa Go — AI для labor law](https://iberianlawyer.com/lexa-go-launches-an-ai-version-based-on-practical-reasonableness/)
- [Cuatrecasas Celia (Harvey powered)](https://iberianlawyer.com/the-generative-ai-revolution-in-law-firms)

**Affiliate программы:**
- [Rocket Lawyer Spain affiliate](https://www.rocketlawyer.com/es/es/socios)
- [Debify affiliate (€50-100/referral)](https://debify.es/afiliados/)
- [LEGALPROD (25% lifetime commission)](https://www.legalprod.com/en/affiliation/)

**Расчет индemnización:**
- [CGPJ Calculator](https://www.poderjudicial.es/cgpj/es/Servicios/Utilidades/Calculo-de-indemnizaciones-por-extincion-de-contrato-de-trabajo/)
- [Civica Abogados — Guide 2026](https://civicabogados.com/indemnizacion-por-despido/)

---

## Следующие шаги

1. **Неделя 1-2:** 10 интервью с уволенными + 5 с адвокатами (валидация спроса)
2. **Неделя 3-4:** MVP (калькулятор) на React + FastAPI
3. **Неделя 5-8:** SEO оптимизация + affiliate integration
4. **Месяц 2:** Запуск, мониторинг метрик
5. **Месяц 3:** Go/No-Go decision

---

**Оценка ниши:** 🟢 **7.5/10**
- High demand (100K+ уволненных/мес)
- Low CAC (SEO бесплатно)
- Clear monetization path (affiliate + premium)
- Manageable technical complexity
- Not overcrowded (есть free инструменты, но нет монетизированных)
- **But:** Legal compliance требует осторожности, affiliate network нужно строить с нуля
