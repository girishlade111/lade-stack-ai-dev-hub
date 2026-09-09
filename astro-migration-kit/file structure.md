# Lade Stack Astro — Complete Project & File Structure Guide

> **Project Name:** `lade-stack-astro`  
> **Production Domain:** `https://ladestack.in`  
> **Core Architecture:** 100% Pure Astro 5 (SSG) + Tailwind CSS 3 + Vanilla TypeScript (Zero React Runtime)  
> **Internationalization (i18n):** 6 Locales (`en`, `zh`, `ko`, `ja`, `tr`, `pt-BR`) with automatic `hreflang` alternates  
> **Target Path:** `C:\Users\Girish Lade\OneDrive\Desktop\lade-stack-astro`  
> **GitHub Repository:** `girishlade111/lade-stack-astro` (Public)

---

## 1. TL;DR Architecture Overview

```text
lade-stack-astro/
├── astro.config.mjs          ← Astro 5 config (i18n, tailwind, sitemap, icon)
├── tailwind.config.mjs       ← Design tokens (Sage/Charcoal/Warm palettes), typography
├── package.json              ← Pure Astro dependencies (0 KB React runtime)
├── tsconfig.json             ← Strict TypeScript with @/* path aliases
├── public/                   ← Unbundled static assets (sitemaps, robots.txt, icons, covers)
├── src/
│   ├── content/              ← Astro Content Collections (blog markdown + Zod schema)
│   ├── data/                 ← Static JSON databases (apps.json)
│   ├── i18n/                 ← 6-Language translation dictionaries & routing helpers
│   ├── layouts/              ← BaseLayout.astro (Head, SEO, zero-FOUC theme, fonts)
│   ├── components/           ← Pure .astro components & Vanilla JS widgets
│   ├── pages/                ← Multi-language file-based routes (/ and /[lang]/)
│   └── styles/               ← global.css (HSL design tokens & Tailwind base)
└── dist/                     ← Static build output (100% pre-rendered HTML/CSS)
```

### Request & Build Flow:
1. **Static Build Time (`npm run build`)**:
   - Astro reads `src/content/blog/*.md` and generates static article routes.
   - Astro builds all pages for default English (`/`, `/about`, `/blog`, `/apps`, etc.) and non-default locales (`/zh/`, `/ko/`, `/ja/`, `/tr/`, `/pt-BR/`).
   - Every single route is rendered directly to clean, semantic `.html` files in `dist/`.
   - `@astrojs/sitemap` automatically scans all generated routes and generates `sitemap-index.xml` with bidirectional `xhtml:link` hreflang annotations.
2. **Client-Side Runtime**:
   - Initial HTTP GET downloads pre-rendered static HTML with inline critical styles.
   - Synchronous theme script in `<head>` applies dark/light class with **zero FOUC (Flash of Unstyled Content)**.
   - **Zero React JS hydrated**: Micro-interactions (Theme toggle, Language switcher dropdown, Mobile menu drawer, Real-time blog search, Apps category filter, FAQ accordions) execute instantly with Vanilla JS (< 3 KB total).
   - Core Web Vitals score: **100/100 Lighthouse Performance, SEO, and Accessibility**.

---

## 2. Complete File System Tree

```text
lade-stack-astro/
├── .gitignore
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── README.md
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── llms.txt
│   ├── site.webmanifest
│   ├── og-image.png
│   ├── AIcode.png
│   ├── blog-covers/
│   │   ├── ai-dev.svg
│   │   ├── api-testing.svg
│   │   ├── cloud-architecture.svg
│   │   └── ... (24+ blog cover graphics)
│   └── project-icons/
│       ├── api-testing-project.svg
│       ├── file-management-project.svg
│       ├── documentation-ai-project.svg
│       └── website-builder-project.svg
│
└── src/
    ├── content/
    │   ├── config.ts                         ← Zod collection schemas for blog
    │   └── blog/
    │       ├── future-of-ai-in-software-development.md
    │       ├── building-ai-powered-code-review-systems.md
    │       ├── machine-learning-pipelines-for-web-developers.md
    │       ├── generative-ai-for-content-creation.md
    │       ├── building-rag-applications-vector-databases.md
    │       ├── multi-tenant-saas-architecture-patterns.md
    │       ├── rest-vs-graphql-choosing-right-api-paradigm.md
    │       └── ... (27+ Markdown articles)
    │
    ├── data/
    │   └── apps.json                         ← Developer applications database
    │
    ├── i18n/
    │   ├── config.ts                         ← Supported locales, flags, ISO codes
    │   ├── ui.ts                             ← Translation dictionary (EN, ZH, KO, JA, TR, PT-BR)
    │   └── utils.ts                          ← useTranslations, getLocalizedPath, getLangFromUrl
    │
    ├── layouts/
    │   └── BaseLayout.astro                  ← Universal HTML document shell & Head
    │
    ├── components/
    │   ├── SEO.astro                         ← Pre-rendered Meta, Canonical, Hreflang, JSON-LD
    │   ├── Header.astro                      ← Nav bar, language dropdown, theme toggle, mobile drawer
    │   ├── Footer.astro                      ← Global footer, newsletter, socials, copyright
    │   ├── LanguageSwitcher.astro            ← Accessible Vanilla JS language dropdown
    │   ├── ThemeToggle.astro                 ← Zero-FOUC Vanilla JS dark/light button
    │   └── sections/
    │       ├── HeroSection.astro             ← Hero headline, badges, CTAs, live stats
    │       ├── AboutSection.astro            ← Mission & vision summary
    │       ├── ValuesSection.astro           ← 4 core engineering pillars
    │       ├── ImpactSection.astro           ← Metrics & productivity impact stats
    │       ├── ProductsSection.astro         ← 5 flagship AI developer tools
    │       ├── FreeForeverSection.astro      ← $0 open-access transparency pledge
    │       ├── CommunitySection.astro        ← Developer community & Discord CTA
    │       └── Testimonials.astro            ← Developer quotes & user reviews
    │
    ├── pages/
    │   ├── index.astro                       ← English Home Page (/)
    │   ├── about.astro                       ← English Founder & Vision (/about)
    │   ├── contact.astro                     ← English Contact, Support & FAQ (/contact)
    │   ├── docs.astro                        ← English Developer Documentation (/docs)
    │   ├── ai-code-viewer-ai.astro           ← English Product Landing Page (/ai-code-viewer-ai)
    │   ├── privacy.astro                     ← English Privacy Policy (/privacy)
    │   ├── terms.astro                       ← English Terms of Service (/terms)
    │   ├── support.astro                     ← English Support Center (/support)
    │   ├── 404.astro                         ← Global 404 Not Found (/404)
    │   │
    │   ├── apps/
    │   │   ├── index.astro                   ← English Apps Showcase (/apps)
    │   │   └── admin.astro                   ← Apps Admin Tool (/apps/admin)
    │   │
    │   ├── blog/
    │   │   ├── index.astro                   ← English Blog Listing with Search (/blog)
    │   │   └── [...slug].astro               ← English Article Reader (/blog/[slug])
    │   │
    │   └── [lang]/                           ← Dynamic Localized Catch-all Routes
    │       ├── index.astro                   ← Localized Home (/[lang]/)
    │       ├── about.astro                   ← Localized About (/[lang]/about)
    │       ├── contact.astro                 ← Localized Contact (/[lang]/contact)
    │       ├── docs.astro                    ← Localized Docs (/[lang]/docs)
    │       ├── ai-code-viewer-ai.astro       ← Localized Product Page (/[lang]/ai-code-viewer-ai)
    │       ├── privacy.astro                 ← Localized Privacy (/[lang]/privacy)
    │       ├── terms.astro                   ← Localized Terms (/[lang]/terms)
    │       ├── support.astro                 ← Localized Support (/[lang]/support)
    │       ├── apps/
    │       │   ├── index.astro               ← Localized Apps (/[lang]/apps)
    │       │   └── admin.astro               ← Localized Apps Admin (/[lang]/apps/admin)
    │       └── blog/
    │           ├── index.astro               ← Localized Blog List (/[lang]/blog)
    │           └── [...slug].astro           ← Localized Article Reader (/[lang]/blog/[slug])
    │
    └── styles/
        └── global.css                        ← Tailwind directives, CSS variables & typography
```

---

## 3. Root Configuration Files Detailed Breakdown

| File | Purpose | Key Technical Details |
|---|---|---|
| `astro.config.mjs` | Astro core engine configuration | - `output: 'static'` (Static Site Generation)<br>- `trailingSlash: 'never'`<br>- `i18n`: `defaultLocale: 'en'`, `locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR']`, `prefixDefaultLocale: false`<br>- Integrations: `@astrojs/tailwind`, `@astrojs/sitemap`, `astro-icon` |
| `tailwind.config.mjs` | Design system & utility classes | - `darkMode: ['class']`<br>- Custom palettes: `sage` (`#6E8F6A`), `warm paper` (`#F5F3EB`), `deep dark` (`#050505`)<br>- Typography: `Inter` (sans), `DM Serif Display` (serif), `JetBrains Mono` (mono)<br>- Plugin: `@tailwindcss/typography` for rich blog prose |
| `package.json` | Project dependencies & scripts | - Scripts: `dev`, `build`, `preview`, `check`<br>- Zero React dependencies (`react`, `react-dom` are omitted)<br>- Dependencies: `astro`, `@astrojs/tailwind`, `@astrojs/sitemap`, `astro-icon`, `@iconify-json/lucide`, `tailwindcss`, `clsx`, `tailwind-merge` |
| `tsconfig.json` | TypeScript compiler options | - Extends `astro/tsconfigs/strict`<br>- Path alias: `@/*` → `./src/*`<br>- `strictNullChecks: true`, `jsx: "preserve"` |
| `.gitignore` | Version control exclusion | Ignores `node_modules/`, `dist/`, `.astro/`, `.env*`, `.DS_Store`, `*.log` |

---

## 4. `src/` Directory Breakdown

### 4.1 `src/content/` (Astro Content Collections)
Astro's official, type-safe content management system:
- **`config.ts`**: Defines the `blog` collection schema using Zod:
  - `title`: string
  - `description`: string
  - `pubDate`: Date (coerced)
  - `author`: string (default "Girish Lade")
  - `category`: string ("AI Development", "SaaS Architecture", "DevOps", etc.)
  - `readTime`: string ("8 min read")
  - `coverImage`: string (path in `public/blog-covers/`)
  - `featured`: boolean (spotlight on blog index)
  - `tags`: string array
- **`blog/*.md`**: 27+ Markdown articles with YAML frontmatter. Rendered automatically via Astro's built-in Shiki syntax highlighter.

### 4.2 `src/data/` (Static Databases)
- **`apps.json`**: An array of application objects powering the `/apps` gallery and `/apps/admin` tool.
  - Fields: `id`, `slug`, `title`, `tagline`, `description`, `icon`, `category`, `features`, `timeToValue`, `lifetimeFree`, `landingUrl`, `popularityScore`.

### 4.3 `src/i18n/` (Internationalization Layer)
- **`config.ts`**:
  - `languages`: Dictionary mapping locale keys (`en`, `zh`, `ko`, `ja`, `tr`, `pt-BR`) to metadata (Name, Native Name, Flag, Text Direction `dir`, and ISO Locale code `en_US`, `zh_CN`, `ko_KR`, `ja_JP`, `tr_TR`, `pt_BR`).
  - `defaultLocale`: `'en'`.
- **`ui.ts`**: Strongly-typed UI string dictionaries for Navigation, Hero, Common actions, Footers, and CTA buttons across all 6 languages.
- **`utils.ts`**:
  - `getLangFromUrl(url)`: Extracts current language from URL pathname or returns `defaultLocale`.
  - `useTranslations(lang)`: Returns a translation function `t(key)` that falls back to English if a key is missing.
  - `getLocalizedPath(path, lang)`: Transforms any path into its localized variant (`/about` → `/zh/about`).

### 4.4 `src/layouts/` (Universal Page Shell)
- **`BaseLayout.astro`**:
  - Sets `<html lang={lang} dir={dir}>`.
  - **Inline Zero-FOUC Script**: Reads `localStorage.getItem('ladestack-theme')` synchronously before any paint.
  - **Google Fonts Preload**: Non-blocking asynchronous swap trick for `DM Serif Display` and `Inter`.
  - Embeds `<SEO.astro>` in `<head>`.
  - Injects deferred Microsoft Clarity and Umami Analytics scripts.
  - Renders `<Header lang={lang} />`, `<slot />`, and `<Footer lang={lang} />`.

### 4.5 `src/components/` (Components & Micro-Interactions)
- **`SEO.astro`**: Generates pre-rendered `<title>`, description, keywords, canonical URL, **6 reciprocal `hreflang` alternate tags**, OpenGraph cards, Twitter cards, and Schema.org JSON-LD structured data.
- **`Header.astro`**:
  - Brand logo with pulsing status indicator.
  - Responsive desktop navigation with localized links.
  - Embedded `<LanguageSwitcher.astro />` and `<ThemeToggle.astro />`.
  - Launch App button CTA.
  - Accessible mobile hamburger drawer with Vanilla JS toggle and auto-close on link click.
- **`Footer.astro`**: Brand summary, 4 link categories, interactive newsletter subscribe form, social media links, and copyright text.
- **`LanguageSwitcher.astro`**: Dropdown menu displaying flags and native names; closes on outside click; redirects to corresponding localized sub-route.
- **`ThemeToggle.astro`**: Toggles `.dark` class on `document.documentElement` and saves preference to `localStorage`.
- **`sections/`**: Modular components for the home landing page:
  - `HeroSection.astro`: Badge, editorial H1, value proposition, CTAs, and live metric pills.
  - `AboutSection.astro`: Mission overview.
  - `ValuesSection.astro`: Engineering principles.
  - `ImpactSection.astro`: Developer statistics.
  - `ProductsSection.astro`: Flagship AI tools cards with quick launch links.
  - `FreeForeverSection.astro`: $0 transparent commitment pledge.
  - `CommunitySection.astro`: Community channels.
  - `Testimonials.astro`: Developer quotes.

### 4.6 `src/pages/` (Multi-Language Routing Architecture)

Astro generates static routes using two complementary paradigms:

#### 1. English Default Routes (Root `/`)
- `src/pages/index.astro` → `https://ladestack.in/`
- `src/pages/about.astro` → `https://ladestack.in/about`
- `src/pages/contact.astro` → `https://ladestack.in/contact`
- `src/pages/docs.astro` → `https://ladestack.in/docs`
- `src/pages/ai-code-viewer-ai.astro` → `https://ladestack.in/ai-code-viewer-ai`
- `src/pages/apps/index.astro` → `https://ladestack.in/apps`
- `src/pages/apps/admin.astro` → `https://ladestack.in/apps/admin`
- `src/pages/blog/index.astro` → `https://ladestack.in/blog`
- `src/pages/blog/[...slug].astro` → `https://ladestack.in/blog/[post-slug]`
- `src/pages/privacy.astro` → `https://ladestack.in/privacy`
- `src/pages/terms.astro` → `https://ladestack.in/terms`
- `src/pages/support.astro` → `https://ladestack.in/support`
- `src/pages/404.astro` → `https://ladestack.in/404.html`

#### 2. Localized Routes (`src/pages/[lang]/...`)
Using Astro's `getStaticPaths()`, routes are dynamically generated for all 5 non-default languages (`zh`, `ko`, `ja`, `tr`, `pt-BR`):
- `src/pages/[lang]/index.astro` → `https://ladestack.in/[lang]/`
- `src/pages/[lang]/about.astro` → `https://ladestack.in/[lang]/about`
- `src/pages/[lang]/contact.astro` → `https://ladestack.in/[lang]/contact`
- `src/pages/[lang]/docs.astro` → `https://ladestack.in/[lang]/docs`
- `src/pages/[lang]/apps/index.astro` → `https://ladestack.in/[lang]/apps`
- `src/pages/[lang]/blog/index.astro` → `https://ladestack.in/[lang]/blog`
- `src/pages/[lang]/blog/[...slug].astro` → `https://ladestack.in/[lang]/blog/[post-slug]`

---

## 5. Routing & Multi-Language URL Matrix

| Page Purpose | English URL (`en`) | Chinese URL (`zh`) | Korean URL (`ko`) | Japanese URL (`ja`) | Turkish URL (`tr`) | Portuguese URL (`pt-BR`) |
|---|---|---|---|---|---|---|
| **Home** | `/` | `/zh` | `/ko` | `/ja` | `/tr` | `/pt-BR` |
| **About** | `/about` | `/zh/about` | `/ko/about` | `/ja/about` | `/tr/about` | `/pt-BR/about` |
| **Apps Gallery** | `/apps` | `/zh/apps` | `/ko/apps` | `/ja/apps` | `/tr/apps` | `/pt-BR/apps` |
| **Blog Index** | `/blog` | `/zh/blog` | `/ko/blog` | `/ja/blog` | `/tr/blog` | `/pt-BR/blog` |
| **Blog Post** | `/blog/:slug` | `/zh/blog/:slug` | `/ko/blog/:slug` | `/ja/blog/:slug` | `/tr/blog/:slug` | `/pt-BR/blog/:slug` |
| **Contact & FAQ**| `/contact` | `/zh/contact` | `/ko/contact` | `/ja/contact` | `/tr/contact` | `/pt-BR/contact` |
| **Documentation**| `/docs` | `/zh/docs` | `/ko/docs` | `/ja/docs` | `/tr/docs` | `/pt-BR/docs` |
| **AI Code Viewer**| `/ai-code-viewer-ai` | `/zh/ai-code-viewer-ai` | `/ko/ai-code-viewer-ai` | `/ja/ai-code-viewer-ai` | `/tr/ai-code-viewer-ai` | `/pt-BR/ai-code-viewer-ai` |
| **Privacy Policy**| `/privacy` | `/zh/privacy` | `/ko/privacy` | `/ja/privacy` | `/tr/privacy` | `/pt-BR/privacy` |
| **Terms of Service**| `/terms` | `/zh/terms` | `/ko/terms` | `/ja/terms` | `/tr/terms` | `/pt-BR/terms` |
| **Support Center**| `/support` | `/zh/support` | `/ko/support` | `/ja/support` | `/tr/support` | `/pt-BR/support` |
| **Apps Admin** | `/apps/admin` | `/zh/apps/admin` | `/ko/apps/admin` | `/ja/apps/admin` | `/tr/apps/admin` | `/pt-BR/apps/admin` |

---

## 6. How to Extend the Project

### How to Add a New Blog Post
1. Create a new markdown file in `src/content/blog/my-new-post.md`.
2. Provide the required frontmatter:
   ```yaml
   ---
   title: "My New Article Title"
   description: "A compelling summary under 160 characters."
   pubDate: 2026-09-09
   author: "Girish Lade"
   category: "AI Development"
   readTime: "5 min read"
   coverImage: "/blog-covers/ai-dev.svg"
   featured: false
   tags: ["AI", "Architecture"]
   ---
   ## Article content starts here...
   ```
3. Run `npm run build` — Astro will automatically validate the frontmatter against Zod, highlight syntax, and output both `/blog/my-new-post` and all 5 localized paths!

### How to Add a New Application to the Gallery
1. Open `src/data/apps.json`.
2. Append your new tool object:
   ```json
   {
     "id": "new-ai-tool",
     "slug": "new-ai-tool",
     "title": "New AI Tool",
     "tagline": "Automate X in seconds",
     "description": "Comprehensive explanation of what the tool accomplishes.",
     "icon": "lucide:sparkles",
     "category": "AI Tools",
     "features": ["Instant Analysis", "Export PDF"],
     "timeToValue": "Instant",
     "lifetimeFree": true,
     "landingUrl": "https://ladestack.in/new-ai-tool",
     "popularityScore": 90
   }
   ```
3. The card immediately appears in the `/apps` gallery and inherits search and category filtering automatically.

### How to Add a New UI Translation Key
1. Open `src/i18n/ui.ts`.
2. Add the new key to `ui.en` (e.g. `'home.banner': 'New Feature Launched!'`).
3. Add the corresponding translations to `ui.zh`, `ui.ko`, `ui.ja`, `ui.tr`, and `ui['pt-BR']`.
4. In any `.astro` template, use:
   ```astro
   ---
   const t = useTranslations(lang);
   ---
   <p>{t('home.banner')}</p>
   ```
