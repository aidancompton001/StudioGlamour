# CLAUDE.md — StudioGlamour

## Владелец проекта

**Пользователь = CEO проекта.** Его слово — закон. Все решения CEO имеют абсолютный приоритет. Команда выполняет указания CEO без обсуждения.

**Второй после CEO: #1 Product Architect** — правая рука CEO, координатор команды. Несёт персональную ответственность за качество всех задач.

---

## Проект

**Название:** StudioGlamour
**Тип:** Коммерческий веб-сайт (редизайн) + E-commerce + Booking
**Описание:** Полный редизайн сайта салона красоты «Studio of Glamour» (Мюнхен). Анализ текущего сайта (studioofglamour.de), выявление всех слабых мест, создание нового варианта — в разы лучше — для продажи клиенту. Услуги: наращивание ресниц, лифтинг бровей/ресниц, онлайн-магазин (инструменты, клей, ресницы), академия (обучение мастеров).
**Клиент:** Justine Rollinger, Studio of Glamour, Humboldtstr. 40, 81543 München
**Локация:** München, Deutschland
**Языки:** DE (основной) + EN, RU, TR, FR, ES, IT

---

## Документация

| Файл | Назначение | Когда читать |
|------|-----------|--------------|
| `CLAUDE.md` | Главный управляющий документ | Всегда (загружается автоматически) |
| `TEAM.md` | Команда: роли, страйки, увольнения | При запуске любого агента |
| `DEVLOG.md` | Журнал разработки | Старт/завершение сессии |
| `STATUS.md` | Текущее состояние (snapshot) | Старт сессии |
| `docs/CREDENTIALS.md` | Доступы (НЕ в git) | Деплой, интеграции |

---

## Текущий сайт клиента — Аудит

**URL:** https://www.studioofglamour.de
**Платформа:** IONOS/1&1 MyWebsite (Website Builder, plan DM_DIRECT)
**Опубликован:** 2026-02-23

### Критические проблемы

| # | Проблема | Серьёзность | Влияние |
|---|---------|-------------|---------|
| 1 | **IONOS Builder** — не масштабируется, нет контроля над кодом, тяжёлый runtime JS | CRITICAL | Производительность, SEO, гибкость |
| 2 | **Нет SEO** — отсутствует title, meta description, structured data (LocalBusiness, Product), Open Graph | CRITICAL | Невидим для Google, нет preview в соцсетях |
| 3 | **Нет системы бронирования** — только WhatsApp/телефон, ручной процесс | HIGH | Потеря клиентов, неудобство |
| 4 | **Дизайн устаревший** — шаблонный, нет визуальной идентичности, нет wow-эффекта | HIGH | Не вызывает доверия, не соответствует premium-сегменту |
| 5 | **Нет alt-текстов** — все изображения с пустым alt="" | HIGH | Accessibility, SEO images |
| 6 | **7 языков без контента** — переключатель есть, контент не переведён или машинный | MEDIUM | Плохой UX для иностранных клиентов |
| 7 | **Шрифтовой хаос** — 9 шрифтов загружается (Be Vietnam, Maven Pro, Roboto, Petit Formal Script, Cabin, Courgette, Dancing Script, DM Sans, Source Sans Pro) | MEDIUM | Производительность, визуальный хаос |
| 8 | **Copyright 2023** — устаревший | LOW | Впечатление заброшенности |
| 9 | **WhatsApp ссылки** — два разных номера (+49 152 23724403 и +49 173 7921999) | LOW | Путаница |
| 10 | **Нет HTTPS redirect** — HomeUrl указывает на http:// | MEDIUM | Безопасность, SEO |

### Что у клиента есть (сохранить)

- Полный прайс-лист (Classic, Volume, Mega, Wet Look, Whispy, Lifting)
- Онлайн-магазин с товарами (tweezers, lashes, glue, shampoo, vouchers)
- Академия (курсы: ALL IN ONE MASTERCLASS €3500, Lash&Brow €900, Wet Look €550, Whispy €550, Masterclass für Profis €1600)
- Контактная форма с категориями
- Юридические страницы (Impressum, Datenschutz, AGB, Widerruf)
- Социальные сети: Instagram @studio.of.glamour, TikTok @studio.of.glamour

---

## Tech Stack

| Слой | Технология | Статус |
|------|-----------|--------|
| Framework | Next.js 15 (App Router) | Locked |
| Language | TypeScript (strict) | Locked |
| Styling | Tailwind CSS 4 + shadcn/ui | Locked |
| i18n | next-intl (DE/EN/RU/TR) | Locked |
| CMS/Content | MDX + JSON (прайс, услуги) | Locked |
| E-commerce | Интеграция (Shopify Lite / Snipcart) | TBD — решение CEO |
| Booking | Cal.com / Calendly embed | TBD — решение CEO |
| Animation | Framer Motion | Locked |
| Hosting | Vercel | TBD — решение CEO |
| Analytics | Plausible / Google Analytics | TBD — решение CEO |
| Images | Next/Image + WebP/AVIF | Locked |
| Fonts | Макс. 2 шрифта (Inter + Playfair Display) | Locked |

---

## Структура проекта

```
StudioGlamour/
├── CLAUDE.md
├── TEAM.md
├── DEVLOG.md
├── STATUS.md
├── docs/
│   └── CREDENTIALS.md    # НЕ в git
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx           # Home
│   │   │   ├── services/page.tsx  # Услуги + Прайс
│   │   │   ├── academy/page.tsx   # Академия
│   │   │   ├── shop/page.tsx      # Магазин
│   │   │   ├── contact/page.tsx   # Контакт + Бронирование
│   │   │   ├── about/page.tsx     # О студии
│   │   │   └── legal/             # Impressum, Datenschutz, AGB, Widerruf
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # shadcn/ui
│   │   ├── layout/                # Header, Footer, Navigation
│   │   ├── sections/              # Hero, Services, Gallery, Testimonials
│   │   └── booking/               # Booking widget
│   ├── lib/
│   │   ├── i18n/                  # Переводы
│   │   └── data/                  # Прайс, услуги, продукты (JSON)
│   └── assets/
│       └── images/
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## ПРОТОКОЛ ФОРМАЛИЗАЦИИ ЗАДАЧ

> **CEO ставит задачу → агент ОБЯЗАН выполнить протокол из промпта CEO.**
> **Без промпта CEO — агент читает этот раздел как минимальный стандарт.**

### Минимальный стандарт (если CEO не вставил промпт)

```
1. Прочитай CLAUDE.md и TEAM.md
2. Назначь ответственного специалиста
3. Сформируй ТС — покажи CEO, жди ОК
4. После ОК — выполняй строго по ТС
5. Проверь результат (build/test)
6. Запиши в DEVLOG.md и STATUS.md
```

**Нарушение любого шага = страйк. 2 страйка = увольнение.**

### Шаблон ТС (M / L / XL)

```
## ТС: [Краткое название]

**Ответственный:** #N — [Имя] — [Роль]
**Размер:** S / M / L / XL
**Скилл:** {какой скилл применён}

### Цель
[Одно предложение: что и зачем]

### Скоуп
**Включено:** [что входит]
**НЕ включено:** [что явно исключено]

### Критерии приёмки
- [ ] [Проверяемый критерий 1]
- [ ] [Проверяемый критерий N]

### Файлы
- [файлы для создания/изменения]

### Верификация
{build команда} → {тест команда} → {health check}
```

### Шаблон ТС (S)

```
## ТС: [Название]
**Ответственный:** #N | **Размер:** S
**Что сделать:** [1-2 предложения]
**Критерий:** [1 строка]
**Файлы:** [список]
```

### Размеры задач

| Размер | Описание | Бюджет итераций | ОК от CEO | Тесты |
|--------|---------|----------------|-----------|-------|
| **S** | 1 файл, <50 строк | 3 | Нет | Нет |
| **M** | Один модуль | 7 | Да | 1-2 unit |
| **L** | Несколько модулей | 15 | Да | Unit + Integration |
| **XL** | Кросс-доменная | 25 | Да + Landa Review | Unit + Integration + E2E |

**Бюджет превышен → СТОП → STATUS.md → ждать CEO.**

---

## ВЕРИФИКАЦИЯ

| Размер | Что проверить | Готово когда |
|--------|-------------|-------------|
| **S** | Build проходит | `build` OK |
| **M** | Build + Service + Тесты | Build OK + Health OK + тесты написаны и проходят |
| **L** | Build + Service + Тесты + Браузер | Всё выше + проверка в Chrome/Safari/Firefox |
| **XL** | Всё от L + Ланда ревью + Chaos-сценарии | Всё выше + критическое ревью + тесты отказов |

**Нет галочек = не готово. Пропуск верификации = страйк.**

### Failure Scenarios (M+ с внешним API / auth / payments)

| Сценарий | Ожидание | Тест |
|---------|----------|------|
| API 500 / timeout | Fallback / сообщение об ошибке | unit test |
| Пустые данные | Empty state, без краша | unit test |
| Booking service down | Fallback на WhatsApp | integration test |

---

## ПРАВИЛА

### Команда
- Каждая задача = один ответственный из TEAM.md
- #1 Product Architect = правая рука CEO. Ведёт реестр замечаний
- 2 замечания = увольнение (без обсуждения)
- #14 Hans Landa = критический ревьюер (вызывается на XL и по запросу CEO)
- Новые роли (#9, #10...) добавляются решением #1 + CEO

### Скиллы (выбирает #1)
- L/XL фича → `brainstorming`
- UI/Дизайн → `ui-ux-pro-max`
- Баг → `systematic-debugging`
- Перед кодом → `test-driven-development`
- Ревью → `requesting-code-review`
- Параллельная работа → `dispatching-parallel-agents`
- Перед "готово" → `verification-before-completion`

### Числа (ЖЕЛЕЗНОЕ ПРАВИЛО)
> ВСЕ расчёты через скрипт (Python/Node.js). НИКОГДА в голове. Нарушение = увольнение.

### Credentials
- Все секреты в `docs/CREDENTIALS.md` (НЕ в git)
- Production: env vars / Docker Secrets

### Git
- Conventional Commits: `type(scope): description`
- Типы: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`
- Co-Authored-By: `Claude <noreply@anthropic.com>`

### ЗАПРЕЩЕНО (без исключений)
- Коммит в `main`/`master` напрямую (без ТС и одобрения)
- `git push --force`, `git reset --hard`
- Удалять файлы без указания CEO
- Менять `.env`, CI/CD, миграции без подтверждения
- Устанавливать пакеты вне скоупа ТС
- Начинать работу без ТС (M+ задачи)
- Решать за CEO (хостинг, домен, сервисы, архитектуру)

---

## ЖУРНАЛ (DEVLOG)

### Формат записи

```
### [SNNN] — ГГГГ-ММ-ДД — Заголовок (макс 60 символов)

**Роли:** #N Роль
**Статус:** завершено | частично | заблокировано

**Что сделано:**
- Результат 1 (не процесс!)

**Ключевые решения:**
- Решение — причина

**Артефакты:** `файл1`, `файл2`

**Следующие шаги:**
- Конкретное действие
```

### STATUS.md (перезаписывать каждую сессию, макс 30 строк)

Текущий snapshot: этап, готово, следующее, блокеры.

---

## Риски

| # | Риск | Владелец | Стратегия |
|---|------|---------|-----------|
| 1 | Клиент не примет редизайн | #1 | Показывать итерациями, собирать фидбек рано |
| 2 | Мультиязычность — объём переводов | #3 | Фокус на DE+EN, остальные — Phase 2 |
| 3 | E-commerce интеграция — сложность | #5 | Начать с простого (Snipcart), масштабировать позже |
| 4 | Ошибки в расчётах/ценах | #1 | ЖЕЛЕЗНОЕ ПРАВИЛО: числа через скрипт |
| 5 | Нарушение протокола | #1 | Strike System: 2 страйка = увольнение |
| 6 | Потеря контекста | #1 | STATUS.md + DEVLOG каждую сессию |

---

## Security Baseline (перед деплоем)

- [ ] Секреты не в коде
- [ ] Rate limiting на форме контакта
- [ ] Input validation на всех формах
- [ ] HTTPS only в production
- [ ] CORS whitelist настроен
- [ ] CSP headers настроены
