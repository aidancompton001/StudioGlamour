# DEVLOG.md — StudioGlamour

## Журнал разработки

Записи от новых к старым. Нумерация: S001, S002, ... SNNN.
Владелец процесса: #1 Viktor Kessler (Product Architect).

---

<!--
  Формат записи:

  ### [SNNN] — ГГГГ-ММ-ДД — Краткий заголовок (макс. 60 символов)

  **Роли:** #N Роль, #N Роль
  **Статус:** завершено | частично | заблокировано

  **Что сделано:**
  - Результат 1
  - Результат 2

  **Ключевые решения:**
  - Решение — причина

  **Артефакты:** `файл1.md`, `файл2.ts`

  **Следующие шаги:**
  - Конкретное действие

  ПРАВИЛА:
  - Максимальная краткость (сканируется за 10 секунд)
  - Результаты, не процесс ("Создан auth модуль", не "Работал над auth")
  - Конкретные артефакты (всегда указывать файлы)
  - Решения с причинами (ЧТО и ПОЧЕМУ)
  - Максимум 15 строк на запись
-->

### [S010] — 2026-03-19 — Fix: мобильная версия — CSS + visibility

**Роли:** #3 Daniel Kovacs, #14 Landa (6 находок: 2 P0, 2 P1, 2 P2)
**Статус:** завершено

**Что сделано:**
- Root cause 1: React 19 `data-precedence` блокирует CSS до JS hydration на Safari iOS
- Root cause 2: Framer Motion рендерит все секции с `opacity:0` — контент невидим без JS
- Fix 1: post-build скрипт добавляет plain `<link>` без data-precedence (10/10 HTML)
- Fix 2: CSS fallback `[style*="opacity:0"] { opacity:1 !important }` в globals.css

**Артефакты:** `scripts/fix-css-precedence.mjs`, `src/app/globals.css`, `package.json`

---

### [S009] — 2026-03-19 — Fix: hero image crop — лого JR видно полностью

**Роли:** #3 Daniel Kovacs, #14 Landa (5 находок)
**Статус:** завершено

**Что сделано:**
- Убран `aspect-[4/5]` — source image 16:9, portrait crop обрезал 55%
- Wrapper: `h-full md:min-h-[500px]` — подстраивается под текст
- Image: `object-[center_15%]` — фокус на лого, нижний текст допустимо обрезан
- Mobile: `aspect-[3/2]` — не гигантский portrait блок

**Артефакты:** `src/app/page.tsx`

---

### [S008] — 2026-03-19 — Hero: split layout (текст лева, image справа)

**Роли:** #2 Lena Steinbach, #14 Landa (11 находок, все адресованы)
**Статус:** завершено

**Что сделано:**
- Hero: full-bleed → split grid 55/45 на cream фоне
- Mobile: текст+CTA сверху (above fold), image снизу
- Удалены: overlay, textShadow, scroll indicator "Entdecken"
- Gold italic: gold-light → gold-dark (WCAG contrast fix)
- Secondary button: white → gold-dark border

**Артефакты:** `src/app/page.tsx`

---

### [S007] — 2026-03-19 — Custom domain + Hero readability fix

**Роли:** #2 Lena Steinbach, #3 Daniel Kovacs, #14 Landa (6 находок)
**Статус:** завершено

**Что сделано:**
- Демо передеплоен на `glamour.ais152.com` (CNAME → GH Pages)
- Убран basePath/assetPrefix (custom domain = корень)
- Hero overlay усилен в центре (via-charcoal/60) — текст читается
- Text-shadow: двойная тень на H1 + отдельная для gold italic span
- Subtitle: opacity 80%→100% + shadow

**Артефакты:** `next.config.ts`, `public/CNAME`, `src/app/page.tsx`, `src/lib/utils.ts`

---

### [S006] — 2026-03-19 — Fix: image basePath + CI build

**Роли:** #3 Daniel Kovacs, #14 Hans Landa (полный ревью 10 находок)
**Статус:** завершено

**Что сделано:**
- Корень: `<img src="/images/...">` не получает basePath от Next.js
- Создан `img()` хелпер с нормализацией leading slash
- 5 находок Ланды исправлены (2 HIGH, 2 MEDIUM, 1 LOW)
- Тест для `img()` — 24 теста всего, все проходят
- Fix: zustand + framer-motion отсутствовали в package.json → CI build fail

**Верификация:** curl → hero-banner.jpg 200 OK (160KB), studio-work-1.jpg 200 OK (106KB)

**Артефакты:** `src/lib/utils.ts`, 4 page.tsx, `src/__tests__/utils.test.ts`

---

### [S005] — 2026-03-19 — Реальные фото клиентки на всех страницах

**Роли:** #2 Lena Steinbach (UX/UI)
**Статус:** завершено

**Что сделано:**
- 25 фото из old/images/ → public/images/ с чистыми именами
- Home: hero banner + 3 service cards + 6 Instagram grid
- Shop: 9 product photos → реальные товары
- Academy: фото курсов из студии
- About: портрет + 6-image gallery
- Все img с немецким alt, loading="lazy" ниже fold

**Артефакты:** `public/images/` (25 файлов), 4 page.tsx обновлены

---

### [S004] — 2026-03-19 — CSS баг: расследование + кадровые решения

**Роли:** #1 Sergei Volkov, #3 Daniel Kovacs, #14 Hans Landa
**Статус:** завершено

**Что сделано:**
- Расстреляны: Andrei Voronov (#3), Kenji Tanaka (#3), Viktor Kessler (#1) — за нарушение протокола верификации
- Наняты: Sergei Volkov (#1), Daniel Kovacs (#3)
- Диагностика: CSS отдаётся 200 OK (53KB), Tailwind классы в файле. Корень — browser cache от версии без basePath
- Сайт работает после hard refresh у CEO

**Ключевые решения:**
- Протокол: каждый фикс = проверка на ЖИВОМ сайте в incognito. Без исключений.

**Артефакты:** `TEAM.md` (обновлён реестр увольнений)

---

### [S003] — 2026-03-19 — Fix: CSS не грузился на GitHub Pages

**Роли:** #3 Andrei Voronov (Frontend)
**Статус:** завершено

**Что сделано:**
- Диагностика: asset paths начинались с `/_next/` вместо `/StudioGlamour/_next/`
- Добавлен `basePath` и `assetPrefix` в `next.config.ts`

**Корень проблемы:** GH Pages обслуживает из поддиректории `/StudioGlamour/`, а Next.js по умолчанию генерирует абсолютные пути от `/`

**Артефакты:** `next.config.ts`

---

### [S002] — 2026-03-19 — Демо-сайт: 7 страниц + деплой GitHub Pages

**Роли:** #1 Viktor, #2 Lena, #3 Andrei, #5 Marta, #7 Emilia, #14 Landa
**Статус:** завершено

**Что сделано:**
- 7 страниц: Home, Services, Booking (3-step wizard), Shop, Academy, About, Contact
- Дизайн: Quiet Luxury (gold #B8956A / cream #FAF7F2), Playfair Display + Inter
- Framer Motion анимации: fade-in, parallax, page transitions, cart slide-in
- Zustand stores: booking wizard state + cart state
- 20 тестов (data integrity + store logic) — все проходят
- Deploy: GitHub Pages via Actions — https://aidancompton001.github.io/StudioGlamour/

**Ключевые решения:**
- Static export (`output: 'export'`) — для GH Pages, без backend
- Реальные цены клиентки + disclaimer — конкурентное преимущество
- Sales banner top — "Design Preview — erstellt für Studio of Glamour"

**Артефакты:** 32 файла в `src/`, `.github/workflows/deploy.yml`, `docs/AUDIT.md`

**Следующие шаги:**
- Показать клиентке демо-URL → собрать обратную связь

---

### [S001] — 2026-03-19 — Инициализация проекта + аудит сайта клиента

**Роли:** #1 Product Architect
**Статус:** завершено

**Что сделано:**
- Аудит studioofglamour.de — 10 проблем (2 CRITICAL, 3 HIGH, 3 MEDIUM, 2 LOW)
- Создан CLAUDE.md — tech stack, аудит, протокол, правила
- Создан TEAM.md — 7 специалистов с профилями
- Создан STATUS.md, DEVLOG.md, docs/CREDENTIALS.md

**Ключевые решения:**
- Next.js 15 + Tailwind + shadcn/ui — современный стек вместо IONOS Builder
- 7 ролей (без Mobile Engineer) — responsive web покрывает мобильный трафик

**Артефакты:** `CLAUDE.md`, `TEAM.md`, `DEVLOG.md`, `STATUS.md`, `docs/CREDENTIALS.md`

**Следующие шаги:**
- ОК от CEO на документы → инициализация Next.js проекта
