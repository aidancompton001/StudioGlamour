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
