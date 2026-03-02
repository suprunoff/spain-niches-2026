#!/usr/bin/env python3
"""
Assembler: вставляет JS-объекты ниш из staging файла в index.html.
Использование: python3 scripts/add_niches.py tasks/staging/batchN.js [--label "BATCH N: description"]

Принцип:
- Находит закрывающий ]; массива D в index.html
- Вставляет перед ним новые объекты из staging файла
- Автоматически назначает следующие rank-номера
- Не требует чтения файла в LLM-контекст
"""

import re
import sys
import os

DASHBOARD = '/Users/sprnff/Projects/research/index.html'

def get_max_rank(html):
    ranks = [int(m.group(1)) for m in re.finditer(r'\{rank:(\d+),', html)]
    return max(ranks) if ranks else 0

def get_niches_from_staging(path):
    """Читает staging JS файл, возвращает список объектов как строки."""
    with open(path) as f:
        content = f.read()
    # Убираем комментарии и извлекаем объекты {rank:..., ...}
    # Поддерживает форматы: [{...},{...}] или просто {...},{...}
    content = re.sub(r'//[^\n]*', '', content)  # убрать // комментарии
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)  # /* */
    # Найти все объекты
    objects = re.findall(r'\{rank:[^}]+(?:\}[^,\n\]]*)*\}', content)
    if not objects:
        # Попробуем найти в массиве
        m = re.search(r'\[([^\[\]]*(?:\{[^}]*\}[^\[\]]*)*)\]', content, re.DOTALL)
        if m:
            objects = re.findall(r'\{[^{}]+\}', m.group(1))
    return objects

def fix_ranks(objects, start_rank):
    """Перенумеровывает rank в объектах начиная с start_rank."""
    fixed = []
    for i, obj in enumerate(objects):
        rank = start_rank + i
        obj = re.sub(r'rank:\d+', f'rank:{rank}', obj)
        fixed.append(obj)
    return fixed

def insert_niches(staging_path, label=None):
    with open(DASHBOARD) as f:
        html = f.read()

    # Найти конец массива D
    start = html.find('const D = [')
    if start == -1:
        print("ERROR: 'const D = [' not found in index.html")
        sys.exit(1)

    arr_start = html.find('[', start)
    depth = 0
    arr_end = -1
    for i in range(arr_start, len(html)):
        if html[i] == '[': depth += 1
        elif html[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break

    if arr_end == -1:
        print("ERROR: Could not find end of D array")
        sys.exit(1)

    max_rank = get_max_rank(html[arr_start:arr_end+1])
    print(f"Current max rank: {max_rank}")

    objects = get_niches_from_staging(staging_path)
    if not objects:
        print(f"ERROR: No niche objects found in {staging_path}")
        sys.exit(1)

    print(f"Found {len(objects)} niches in staging file")
    objects = fix_ranks(objects, max_rank + 1)

    # Строим вставку
    comment = f"\n\n  // {label}" if label else f"\n\n  // {os.path.basename(staging_path)}"
    insertion = comment + '\n  ' + ',\n  '.join(objects) + ','

    # Вставляем перед закрывающим ]
    new_html = html[:arr_end] + insertion + '\n' + html[arr_end:]

    with open(DASHBOARD, 'w') as f:
        f.write(new_html)

    # Проверка
    new_count = new_html.count('{rank:')
    print(f"Done! Dashboard now has {new_count} niches (added {len(objects)})")
    print(f"New ranks: {max_rank+1} — {max_rank+len(objects)}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/add_niches.py tasks/staging/batchN.js [--label 'description']")
        sys.exit(1)

    staging = sys.argv[1]
    label = None
    if '--label' in sys.argv:
        idx = sys.argv.index('--label')
        if idx + 1 < len(sys.argv):
            label = sys.argv[idx + 1]

    insert_niches(staging, label)
