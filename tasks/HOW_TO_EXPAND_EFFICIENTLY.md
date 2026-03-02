# Как эффективно расширять дашборд (минимум токенов)

## Проблема старого подхода

| Операция | Токены | Почему плохо |
|----------|--------|--------------|
| Читаю index.html в контекст | ~15K | Огромный файл каждый раз |
| Edit tool (вставка ниш) | ~20K | Весь файл в контексте |
| Agent summary в task-notification | ~1K каждый | Prose вместо данных |
| Длинные промпты агентов | ~2K каждый | Дублирующийся контекст |
| **Итого на батч из 4 агентов** | **~80-120K** | |

## Новый подход: Staging Pipeline

```
Агент → /tasks/staging/batchN.js (только JS, <5KB)
                    ↓
python3 scripts/add_niches.py staging/batchN.js --label "BATCH N"
                    ↓
git add index.html && git commit && git push
```

| Операция | Токены | Почему лучше |
|----------|--------|--------------|
| Агент пишет только JS | ~500 на агент | Нет prose, нет markdown |
| add_niches.py вставляет | 0 LLM токенов | Чистый Python |
| Я не читаю index.html | 0 | Скрипт делает всё |
| **Итого на батч из 4 агентов** | **~5-10K** | **10x экономия** |

---

## Команды (copy-paste)

### 1. Запустить агента-исследователя
Используй шаблон из `tasks/AGENT_PROMPT_TEMPLATE.md`.
Агент сохраняет результат ТОЛЬКО в `tasks/staging/batchN.js`.

### 2. Вставить ниши в дашборд
```bash
cd /Users/sprnff/Projects/research
python3 scripts/add_niches.py tasks/staging/batch8.js --label "BATCH 8: Finance, K-12"
```

### 3. Проверить результат
```bash
python3 -c "
import re
html = open('index.html').read()
n = html.count('{rank:')
print(f'{n} niches in dashboard')
"
```

### 4. Запушить
```bash
git add index.html tasks/staging/batch8.js
git commit -m "feat: add N niches (Batch 8 — Finance, K-12)"
git push
```

---

## Формат staging файла (строгий)

```javascript
// BATCH 8: Finance, K-12
[
  {rank:1,name:"Mortgage Comparison",sub:"Hipoteca aggregator — iAhorro vs gap",type:"FinTech",d:8,g:8,r:7,s:8,m:7,a:7,f:6,t:6,score:7.35,mi:6,mx:8,tam:"€30M",gap:"iAhorro weak, HelpMyCash basic. 500K mortgages/yr",cac:50,ltv:600,churn:"N/A",y1:"€300K",y1n:300,risks:"iAhorro competition; bank API restrictions",gtm:"SEO 'mejor hipoteca España' + real estate agency partnerships",mvpScope:"Mortgage comparison, eligibility quiz, bank API, Bizum consultation fee"},
  {rank:1,name:"School Communication App",sub:"ClassDojo ES — parents+teachers unified platform",type:"EdTech",d:8,g:8,r:7,s:8,m:8,a:7,f:7,t:6,score:7.40,mi:6,mx:8,tam:"€45M",gap:"ClassDojo = English only. WhatsApp chaos in 28K schools",cac:30,ltv:480,churn:"5%",y1:"€150K",y1n:150,risks:"ClassDojo localization; school IT budgets",gtm:"5 pilot schools + parent Facebook groups + education associations",mvpScope:"Parent-teacher messaging, homework assignments, school announcements, Bizum trips payment"}
]
```

**Правила формата:**
- `rank` всегда `1` — скрипт перенумерует автоматически
- `y1n` в тысячах EUR (€85K → 85; €1.5M → 1500)
- `mi`/`mx` в НЕДЕЛЯХ (не EUR!)
- `churn` строкой: `"5%"` или `"N/A"`
- Всё в одну строку — никаких переносов внутри объекта
- Добавлять только ниши с `score ≥ 6.5`

---

## Правила для агентов (короткий промпт)

```
Исследуй [X] ниш в Испании 2026. Уже покрыто: [список].

ВЫВОД: ТОЛЬКО JS в /tasks/staging/batchN.js
Формат: [{rank:1, name:..., ...}, ...]
Скоринг: (D×20+G×20+R×15+S×15+M×10+A×10+F×5+T×5)/100
Добавлять score ≥ 6.5 только.
В summary пиши: "Done. N niches. Top: X.XX (NicheName)"

Spain context: Bizum=30M users, WhatsApp B2B, VeriFactu Jan2027, mobile-first.
```

Промпт ~200 слов вместо ~1000 — экономия 80%.

---

## Статус ниш

| Батч | Ниши | Статус |
|------|------|--------|
| 1-3 (original) | 83 | В дашборде |
| Batch 4 | +13 | В дашборде |
| Batch 5 | +13 | В дашборде |
| Batch 6 | +5 | В дашборде |
| Batch 7 | +9 | В дашборде |
| **ИТОГО** | **122** | ✅ |
| Batch 8+ | TBD | Следующая сессия |

## До 200 ниш осталось: ~78
Нужно ещё 3-4 батча по 20-25 ниш.
Категории для следующих батчей: mortgage/fintech, K-12 школы, telemedicine, funeral, marina/nautical deep dive, retail automation.
