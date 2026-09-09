# Product Requirements Document (PRD)
## Lade Stack Portfolio & AI Developer Hub — 100% Pure Astro Re-creation with Multi-Language (i18n) Support

---

## 1. Executive Summary & Vision

**Lade Stack** (`https://ladestack.in`) is an enterprise-grade AI developer tools ecosystem and personal brand portfolio founded by Girish Lade. Currently implemented as a single-page React application (Vite + React Router + Tailwind CSS), this project specifies the complete re-creation of the website into a **100% Pure Astro (Astro 5)** static site generation (SSG) architecture with **Zero React Runtime Overhead**, built-in **Multi-Language (i18n)** support across 6 global languages, and pristine pre-rendered SEO.

### Core Objectives
1. **Zero Client Framework Overhead**: Eliminate React, Radix UI, and Framer Motion runtime bundles. Render 100% static HTML at build time using `.astro` components, styled with Tailwind CSS, and powered by ultra-lightweight Vanilla TypeScript/JavaScript for micro-interactions.
2. **First-Class Multi-Language Support (i18n)**:
   - **English (`en`)** — Default locale (`/`)
   - **Chinese (`zh`)** — Simplified Chinese (`/zh/`)
   - **Korean (`ko`)** — Korean (`/ko/`)
   - **Japanese (`ja`)** — Japanese (`/ja/`)
   - **Turkish (`tr`)** — Turkish (`/tr/`)
   - **Portuguese (Brazil) (`pt-BR`)** — Brazilian Portuguese (`/pt-BR/`)
   - Locale-aware URL routing without default prefix (`/about` for English, `/zh/about` for Chinese).
   - Bi-directional language selector in navigation bar with persistent locale preference.
   - Comprehensive `hreflang` alternate links for international SEO.
3. **Flawless Core Web Vitals & 100/100 Lighthouse**:
   - Largest Contentful Paint (LCP) < 0.8s
   - First Input Delay (FID) / Interaction to Next Paint (INP) < 50ms
   - Cumulative Layout Shift (CLS) = 0.00
4. **Uncompromised Design & Visual Fidelity**: 100% faithful replication of the existing brand palette (`#6E8F6A` sage accent, `#1C1C1C` dark charcoal, `#F5F3EB` warm light background, custom dark theme `#050505`), typography (Inter, DM Serif Display, JetBrains Mono), and layout structures.
5. **Astro Content Collections for Blog**: Migrate all 27+ technical articles from TypeScript string files into standard Markdown (`src/content/blog/*.md`) with validated Zod frontmatter schemas.
6. **New Workspace & Repository**: Isolated deployment in a dedicated folder (`C:\Users\Girish Lade\OneDrive\Desktop\lade-stack-astro`) and published to a fresh public GitHub repository (`girishlade111/lade-stack-astro`).

---

## 2. Target Persona & Stakeholders

- **Primary Persona**: Software engineers, tech founders, AI developers, and tech recruiters looking for cutting-edge developer tools and evaluating the engineering caliber of Girish Lade.
- **Global Audience**: Developers across North America, Europe, East Asia (China, Japan, South Korea), Latin America (Brazil), and Eurasia (Turkey).
- **Search Engine Crawlers**: Googlebot, Bingbot, Baiduspider, Yandex, IndexNow, and AI agents (`llms.txt`).

---

## 3. Scope of Pages & Routing Matrix

Every route must support all 6 locales:

| Route Path (EN) | Route Path (i18n: `[lang]`) | Page Name | Primary Features |
|---|---|---|---|
| `/` | `/[lang]/` | Home Landing Page | Hero with badge, About, Core Values, Developer Impact, Products Showcase, Free Forever pledge, Community stats, Testimonials carousel, Footer. |
| `/about` | `/[lang]/about` | About Us / Founder | Founder journey (Girish Lade), Vision, Timeline, Tech Stack badges, Social links. |
| `/blog` | `/[lang]/blog` | Blog Index | Category filtering (AI Development, SaaS Architecture, DevOps, etc.), live search, featured post, grid view. |
| `/blog/[...slug]` | `/[lang]/blog/[...slug]` | Blog Reader | Dynamic reading time, Table of Contents, Social share, Copy code blocks, Markdown body with syntax highlighting, Related articles. |
| `/apps` | `/[lang]/apps` | Apps Gallery | Showcase of AI developer tools, Category tabs, Quick Launch buttons, features list. |
| `/apps/admin` | `/[lang]/apps/admin` | Apps Admin Tool | Pure HTML/Vanilla JS form for adding/editing `apps.json` with instant JSON export. |
| `/contact` | `/[lang]/contact` | Contact & Support | 24/7 Support info, interactive contact form with instant validation, FAQ accordion. |
| `/docs` | `/[lang]/docs` | Documentation | Developer guides, API testing manuals, interactive sidebar navigation. |
| `/ai-code-viewer-ai` | `/[lang]/ai-code-viewer-ai` | AI Code Viewer Landing | Product landing page for the CodeEnhance AI tool with features, preview, and CTA. |
| `/privacy` | `/[lang]/privacy` | Privacy Policy | Legal documentation and data policies. |
| `/terms` | `/[lang]/terms` | Terms of Service | Usage rights, licenses, and API usage terms. |
| `/support` | `/[lang]/support` | Support Center | Helpdesk info, troubleshooting guide, contact channels. |
| `/404` | `/[lang]/404` | Not Found | Brand-aligned 404 page with return to home CTA. |

---

## 4. Multi-Language (i18n) Functional Requirements

### 4.1 Supported Locales & Configuration
```typescript
export const languages = {
  en: { name: 'English', dir: 'ltr', flag: '🇺🇸' },
  zh: { name: '简体中文', dir: 'ltr', flag: '🇨🇳' },
  ko: { name: '한국어', dir: 'ltr', flag: '🇰🇷' },
  ja: { name: '日本語', dir: 'ltr', flag: '🇯🇵' },
  tr: { name: 'Türkçe', dir: 'ltr', flag: '🇹🇷' },
  'pt-BR': { name: 'Português (Brasil)', dir: 'ltr', flag: '🇧🇷' }
} as const;

export const defaultLang = 'en';
```

### 4.2 Routing Logic
- Default language (`en`) paths have **NO prefix**: e.g. `https://ladestack.in/about`.
- Non-default languages have locale prefix: e.g. `https://ladestack.in/zh/about`, `https://ladestack.in/pt-BR/contact`.
- Astro built-in i18n routing configured in `astro.config.mjs`:
  ```javascript
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  }
  ```

### 4.3 Translation Dictionary System
- Strongly-typed key-value dictionaries organized under `src/i18n/ui.ts` and `src/i18n/locales/[lang].json`.
- Missing keys in non-English dictionaries automatically fall back to `en` string without runtime crash.
- Utility function:
  ```typescript
  export function useTranslations(lang: keyof typeof languages) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
      return ui[lang]?.[key] || ui[defaultLang][key] || key;
    }
  }
  ```

### 4.4 UI Language Switcher Component
- Accessible dropdown in the header desktop and mobile drawer.
- Displays current language with country flag.
- When switching language, preserves current sub-route (e.g., from `/blog/my-post` to `/ja/blog/my-post` or `/ja/blog` fallback).
- Saves user selection to `localStorage.getItem('ladestack-lang')` and sets `document.documentElement.lang`.

---

## 5. Technical Requirements & Architecture

### 5.1 Technology Stack
- **Framework**: Astro 5 (Static Site Generation mode: `output: 'static'`)
- **Styling**: Tailwind CSS 3 via `@astrojs/tailwind`
- **Typography Plugin**: `@tailwindcss/typography`
- **Icons**: `astro-icon` + `@iconify-json/lucide` (100% build-time SVGs, 0 KB runtime JS)
- **Sitemap**: `@astrojs/sitemap` (multi-locale aware with hreflang generation)
- **Scripting**: Pure Vanilla TypeScript / ECMAScript (no React, no Vue, no Svelte)
- **Fonts**: Inter (UI), DM Serif Display (Headings), JetBrains Mono (Code) with zero-FCP preloading
- **Hosting Target**: Vercel / GitHub Pages / Netlify / Cloudflare Pages

### 5.2 Theme Engine (Dark / Light Mode)
- **Zero FOUC (Flash of Unstyled Content)**: Synchronous inline script in `<head>` executes before any paint:
  ```javascript
  const theme = localStorage.getItem('ladestack-theme') || 'light';
  if (theme === 'dark') document.documentElement.classList.add('dark');
  ```
- **Vanilla JS Toggle**: Reusable button component that flips `.dark` on `document.documentElement` and updates `localStorage`.

### 5.3 Interactive Vanilla Components (Replacing React)
1. **Header Navigation & Mobile Drawer**: Click listeners for hamburger button, sliding mobile drawer with smooth transitions, backdrop blur, and escape key listener.
2. **Language Switcher**: Click-outside dropdown with keyboard navigation.
3. **Blog Search & Filter**: Real-time client-side filter querying post cards by title, category, and tags with 0 latency.
4. **Apps Gallery Filter**: Category pills that toggle `.hidden` on application cards.
5. **Contact Form**: Client-side validation with real-time feedback and simulated submission modal/toast.
6. **FAQ Accordion**: Built using semantic HTML `<details>` and `<summary>` styled with Tailwind, or Vanilla JS collapse animation.
7. **Copy Code Button**: Clipboard API integration on all blog post code blocks with temporary "Copied!" badge feedback.

---

## 6. SEO, Social & Structured Data Requirements

### 6.1 Meta Tag Specification
Every page must output the following in pre-rendered static HTML `<head>`:
- `<title>` — Localized page title with brand suffix (` | Lade Stack`)
- `<meta name="description" content="..." />` — Localized meta description
- `<meta name="keywords" content="..." />` — Localized keyword list
- `<link rel="canonical" href="https://ladestack.in/[path]" />`
- `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`

### 6.2 Multi-Language `hreflang` Alternate Tags
Every page across all 6 locales must output all corresponding alternates:
```html
<link rel="alternate" hreflang="en" href="https://ladestack.in/about" />
<link rel="alternate" hreflang="zh" href="https://ladestack.in/zh/about" />
<link rel="alternate" hreflang="ko" href="https://ladestack.in/ko/about" />
<link rel="alternate" hreflang="ja" href="https://ladestack.in/ja/about" />
<link rel="alternate" hreflang="tr" href="https://ladestack.in/tr/about" />
<link rel="alternate" hreflang="pt-BR" href="https://ladestack.in/pt-BR/about" />
<link rel="alternate" hreflang="x-default" href="https://ladestack.in/about" />
```

### 6.3 Open Graph & Twitter Cards
- `og:type` (`website` or `article`)
- `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale` (`en_US`, `zh_CN`, `ko_KR`, `ja_JP`, `tr_TR`, `pt_BR`)
- `og:image` (`https://ladestack.in/og-image.png`, 1200×630)
- `twitter:card` (`summary_large_image`)
- `twitter:site` (`@ladestack`), `twitter:creator` (`@girishlade`)

### 6.4 Schema.org JSON-LD Structured Data
- Global: `Organization`, `WebSite`, `Person` (Girish Lade).
- Home: `WebApplication`, `SoftwareApplication`.
- Blog Posts: `BlogPosting` with headline, datePublished, author, publisher, and articleBody.
- Support / Contact: `FAQPage`, `ContactPage`.
- Apps Gallery: `CollectionPage`.

---

## 7. Performance & Quality Benchmarks

| Metric | Target | Verification Method |
|---|---|---|
| Lighthouse Performance | **100 / 100** | Chrome DevTools Lighthouse audit |
| Lighthouse SEO | **100 / 100** | Chrome DevTools Lighthouse audit |
| Lighthouse Accessibility | **100 / 100** | Chrome DevTools Lighthouse audit |
| Lighthouse Best Practices | **100 / 100** | Chrome DevTools Lighthouse audit |
| Initial JS Bundle | **0 KB** (HTML + CSS only) | Network tab inspection |
| First Contentful Paint (FCP) | **< 0.5s** | PageSpeed Insights |
| Build Time | **< 30s** | `astro build` execution time |
