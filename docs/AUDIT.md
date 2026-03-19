# АУДИТ: studioofglamour.de
**Аудитор: #14 Hans Landa — Distinguished Critical Reviewer**
**Дата: 2026-03-19**

---

## ДИЗАЙН (Design)

### 1. Визуальная иерархия и композиция — 3/10
Homepage не имеет НИКАКОЙ визуальной иерархии. Нет headline, нет value proposition, нет вводного текста. Посетитель видит слайдшоу AI-портретов с кнопками в `display:none`. Нет H1. Sidebar-layout создаёт split-attention проблему — sidebar конкурирует с основным контентом.

### 2. Типографика и читаемость — 3/10
Загружается **9 семейств Google Fonts**: Be Vietnam, Maven Pro, Roboto, Petit Formal Script, Cabin, Courgette, Dancing Script, DM Sans, Source Sans Pro. Типографическая анархия. Нет type scale — размеры через inline styles и `!important`. Глубокая вложенность `<font>`, `<span>`, `<b>` внутри параграфов.

### 3. Цветовая палитра и контрасты — 4/10
Accent: `rgba(136,108,56,1)` — приглушённое золото. Потенциал есть, но применяется непоследовательно. Цвета текста прыгают между белым, серым, чёрным и золотым без системы. Серый текст на неконтролируемом фоне — risk по контрасту.

### 4. Консистентность стиля — 2/10
AI-портреты vs iPhone-фото 2022 года vs Valentine's Day баннер (всё ещё висит в марте 2026). Sidebar — другой визуальный стиль чем main content. Прайс выглядит как ресторанное меню (`dmRestaurantMenuCol`). Footer миксует shop и studio навигацию.

### 5. Современность (2025-2026) — 3/10
IONOS MyWebsite Builder — drag-and-drop из середины 2010-х. Sidebar layout (`fullSidebarLayout-var5`) устарел — ни один современный beauty-сайт не использует permanent left sidebar. Нет micro-interactions, нет scroll-анимаций, нет CSS Grid, нет variable fonts.

---

## UX

### 6. Навигация и ИА — 3/10
5 пунктов: Home, Lashes/Brows/Prices, Onlineshop, Kontakt, Impressum. Impressum в main nav — waste of premium space (должен быть только в footer). Sub-nav "Lashes, Brows & Prices" ведёт на AGBs — зачем клиенту видеть договор при выборе услуги? Нет About/Gallery/Booking страниц.

### 7. Call-to-Action — 4/10
ОДИН CTA на весь сайт: "Jetzt buchen" в sidebar. **Ведёт на homepage** (`href="/"`). Бесполезен если уже на главной. Нет booking-системы — кнопка тупиковая. Фото-галерея имеет скрытые кнопки (`display:none`). Нет "Termin buchen" нигде в основном контенте.

### 8. Mobile-first / адаптивность — 4/10
Responsive классы есть, hamburger drawer есть. Но архитектура desktop-first: `window._currentDevice = 'desktop'`. Sidebar исчезает на мобильных — фундаментально другая структура. Header-банер 1920x1275px без `srcset`.

### 9. Скорость восприятия — 2/10
Homepage: НОЛЬ текста above the fold. Только фото-слайдшоу + sidebar. Ничего для сканирования — нет headline, нет tagline, нет цен, нет звёзд отзывов. F-pattern невозможен. Prices page: "PREISLISTE" только после скролла, flat list без визуальной группировки.

### 10. Формы и интерактивность — 4/10
Contact form: 5 полей + 2 группы radio buttons. Три required поля + два category-widget = friction для простого запроса. Shop загружает отдельный JS-framework Ecwid — jarring UX-переход. Нет online booking, нет calendar widget.

---

## ТЕХНИКА (Technical)

### 11. Семантический HTML — 2/10
Homepage: **нет H1**. `<title>` = "Home" (без бренда, без ключевых слов). Prices page: H3 вместо H1 для "PREISLISTE". Div-soup: элементы с числовыми ID (`id="1230776356"`). `<div>` внутри `<span>` и `<font>` = невалидный HTML.

### 12. CSS архитектура — 1/10
Каждый стиль использует `!important`. 8 отдельных `<style>` блоков в `<head>`. Inline styles на элементах. Селекторы: `*#dm *.dmBody div.u_1960215388 .menuItemBox .menuItemName`. Vendor prefixes от 2015 года. `important:true !important` — несуществующее CSS-свойство. Builder-generated мусор.

### 13. Производительность — 2/10
Каждая страница грузит: 9 font families, runtime CSS, global CSS, page CSS, widget CSS, IONOS runtime JS, Ecwid store JS (даже на НЕ-shop страницах), service worker. Изображения 1920w без `srcset`. Base64 данные до 4KB в HTML-атрибутах. HTML файлы 66-135KB на страницу.

### 14. SEO — 1/10
**КРИТИЧЕСКАЯ НАХОДКА: `<meta name="robots" content="noindex">` НА КАЖДОЙ СТРАНИЦЕ.** Сайт ПОЛНОСТЬЮ невидим для Google. Ноль индексации. Ноль органического трафика. Помимо этого: нет `<meta description>`, title = "Home", 87 изображений с `alt=""`, нет structured data (LocalBusiness, Product, Service). Copyright 2023. `hreflang` теги есть, но бесполезны при noindex.

### 15. Доступность (a11y) — 3/10
Плюсы: nav с `role="navigation"`, `role="menubar"`, `role="menuitem"`. Hamburger с `aria-label`, `aria-controls`, `aria-expanded`. Минусы: 87 изображений с `alt=""`. Контрасты серого на переменном фоне. Нет skip-to-content. Focus management на drawer неясен.

---

## КОНТЕНТ (Content)

### 16. Заголовки H1-H3 — 2/10
Homepage: НЕТ H1. Prices: H3 для "PREISLISTE" (должен быть H1). Ни один заголовок не цепляет — чисто функциональные. Где "Dein Traumblick beginnt hier"? Где эмоциональный hook?

### 17. Тексты — убедительность — 2/10
Homepage: НОЛЬ текста. Нет brand story, нет value proposition, нет "почему мы". Prices page — голый прайс без описаний. Contact page — только labels формы. Нет голоса бренда, нет личности, нет storytelling. Justine Rollinger упоминается только в Impressum.

### 18. Социальные доказательства — 1/10
НОЛЬ testimonials. НОЛЬ отзывов. НОЛЬ before/after. НОЛЬ сертификатов. НОЛЬ "доверительных" элементов. Sticky widget показывает ДРУГОЙ email (`justinerollinger@gmx.de`) и ДРУГОЙ телефон (`+49 152 23724403`) — два набора контактных данных на одной странице подрывают доверие.

### 19. Фото/видео — 4/10
AI-сгенерированные изображения (подтверждено именами файлов: `ultra-realistic_luxury_beauty_campaign_portrait...`). НЕ реальные клиенты, НЕ реальные результаты, НЕ фото студии/мастера. Valentine's Day баннер в марте. Единственные реальные фото — iPhone снимки 2022 года. Ноль видео при наличии TikTok.

---

## ИТОГОВЫЕ БАЛЛЫ

| # | Категория | Балл |
|---|-----------|------|
| 1 | Визуальная иерархия | 3 |
| 2 | Типографика | 3 |
| 3 | Цветовая палитра | 4 |
| 4 | Консистентность стиля | 2 |
| 5 | Современность | 3 |
| 6 | Навигация и ИА | 3 |
| 7 | Call-to-Action | 4 |
| 8 | Mobile-first | 4 |
| 9 | Скорость восприятия | 2 |
| 10 | Формы | 4 |
| 11 | Семантический HTML | 2 |
| 12 | CSS архитектура | 1 |
| 13 | Производительность | 2 |
| 14 | SEO | 1 |
| 15 | Доступность | 3 |
| 16 | Заголовки | 2 |
| 17 | Тексты | 2 |
| 18 | Соц. доказательства | 1 |
| 19 | Фото/видео | 4 |
| | **СУММА** | **50/190** |

---

## Общий балл: 26/100

---

## ТОП-5 КРИТИЧЕСКИХ ПРОБЛЕМ

| # | Проблема | Серьёзность |
|---|---------|-------------|
| 1 | **noindex на ВСЕХ страницах** — сайт невидим для Google, ноль органического трафика | CRITICAL |
| 2 | **Нет SEO** — title="Home", нет meta description, нет H1, 87 пустых alt, нет structured data | CRITICAL |
| 3 | **"Jetzt buchen" ведёт на homepage** — нет booking-системы, CTA = тупик | CRITICAL |
| 4 | **Два набора контактных данных** — разные email и телефон на одной странице | HIGH |
| 5 | **Ноль social proof** — нет отзывов, before/after, сертификатов в trust-critical индустрии | HIGH |

---

## ТОП-5 ВОЗМОЖНОСТЕЙ ДЛЯ УЛУЧШЕНИЯ

| # | Возможность | Тип | Эффект |
|---|-----------|-----|--------|
| 1 | Убрать noindex + базовый SEO | Quick Win (1 день) | Открывает органический трафик |
| 2 | Интеграция booking (Booksy/Cal.com) | Quick Win (1 неделя) | Прямая конверсия → деньги |
| 3 | Блок social proof (отзывы + before/after) | Quick Win (1 неделя) | +30-50% trust → conversion |
| 4 | Полный редизайн на современной платформе | Стратегический (4-8 недель) | Конкурентный уровень The Lash Club |
| 5 | Brand identity (2 шрифта, палитра, реальные фото) | Стратегический (2-3 недели) | Отстройка от безликих конкурентов |

---

## Конкурентная позиция: ПОСЛЕДНЕЕ МЕСТО

| Studio | Дизайн | SEO | Booking | Цены | Trust |
|--------|--------|-----|---------|------|-------|
| The Lash Club | 9/10 | Indexed | ✅ | Скрыты | Named artist |
| Savoir Beauty | 8/10 | Indexed | Unclear | Скрыты | Strong social |
| Estetica Expert | 7/10 | Indexed | ❌ | Скрыты | 15yr experience |
| Schönheitsrausch | 5/10 | Indexed | Unknown | Скрыты | Location |
| **studioofglamour.de** | **2/10** | **NOINDEX** | **❌** | **✅ Показаны** | **Нет** |

**Единственное преимущество:** прозрачные цены (ни один конкурент не показывает). Это ценно и должно быть сохранено и усилено.

**Вердикт:** Сайт не конкурирует. Он невидим, неубедителен и технически сломан. Редизайн — не опция, а необходимость.
