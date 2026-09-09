# Technical & Architectural Design Document (DESIGN.md)
## Lade Stack Portfolio & AI Developer Hub — 100% Pure Astro with Multi-Language Support

---

## 1. Architectural Philosophy & Principles

The goal of this architecture is to rebuild the Lade Stack portfolio from a client-rendered React SPA into a **hyper-performant, 100% server-generated static website (SSG)** using Astro 5, Vanilla TypeScript, and Tailwind CSS.

### Core Architectural Pillars
1. **Zero Framework Runtime**: 
   - No React, no ReactDOM, no Radix primitives, no Framer Motion runtime bundles in the client browser.
   - All components are written as `.astro` templates rendered directly to static HTML during `astro build`.
   - Micro-interactions (mobile drawer, theme switcher, language dropdown, category filters) are handled by lightweight, modular Vanilla JavaScript (< 3 KB total).
2. **Native Static Internationalization (i18n)**:
   - Utilizes Astro 5 native i18n routing with `prefixDefaultLocale: false`.
   - Locales: `en` (default, no URL prefix), `zh`, `ko`, `ja`, `tr`, `pt-BR` (prefixed: `/[lang]/...`).
   - Generates fully pre-rendered static HTML for every language permutation at build time.
3. **Pristine Pre-rendered SEO**:
   - Title, description, canonical link, `hreflang` alternate tags, OpenGraph cards, Twitter cards, and Schema.org JSON-LD are statically embedded in `<head>` before deployment.
   - Crawlers receive full DOM on initial HTTP GET with zero client hydration requirement.
4. **Design System Continuity**:
   - Reuses existing HSL color variables and Tailwind design tokens (`#6E8F6A` sage accent, `#1C1C1C` text, `#F5F3EB` warm light background, `#050505` dark background).
   - Zero visual drift from the current production UI.

---

## 2. Target Directory & File Structure

```text
lade-stack-astro/
├── astro.config.mjs               # Astro 5 config (i18n, tailwind, sitemap, icon)
├── tailwind.config.mjs            # Tailwind v3 config (design tokens, colors, fonts)
├── tsconfig.json                  # Strict TypeScript configuration
├── package.json                   # Dependencies (Astro, Tailwind, Lucide Icons)
├── public/                        # Static assets (copied verbatim)
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   ├── llms.txt
│   ├── site.webmanifest
│   ├── AIcode.png
│   ├── blog-covers/               # 24+ blog SVG covers
│   └── project-icons/             # App SVG icons
├── src/
│   ├── content/                   # Astro Content Collections
│   │   ├── config.ts              # Zod collection schema definitions
│   │   └── blog/                  # 27+ Markdown articles (*.md)
│   ├── data/
│   │   └── apps.json              # Developer tools database
│   ├── i18n/                      # Internationalization system
│   │   ├── config.ts              # Supported languages & defaultLocale
│   │   ├── ui.ts                  # UI translation dictionary (EN, ZH, KO, JA, TR, PT-BR)
│   │   └── utils.ts               # useTranslations(), getLocalizedPath(), getRouteFromUrl()
│   ├── layouts/
│   │   └── BaseLayout.astro       # Root HTML document, meta, fonts, analytics, theme script
│   ├── components/
│   │   ├── SEO.astro              # Complete meta tags, canonical, hreflang, JSON-LD
│   │   ├── Header.astro           # Nav bar, language dropdown, theme toggle, mobile drawer
│   │   ├── Footer.astro           # Footer links, newsletter, social media
│   │   ├── LanguageSwitcher.astro # Vanilla JS accessible locale switcher
│   │   ├── ThemeToggle.astro      # Vanilla JS dark/light mode button
│   │   ├── Icon.astro             # Build-time SVG icon wrapper (Lucide)
│   │   └── sections/              # Reusable landing page sections
│   │       ├── HeroSection.astro
│   │       ├── AboutSection.astro
│   │       ├── ValuesSection.astro
│   │       ├── ImpactSection.astro
│   │       ├── ProductsSection.astro
│   │       ├── FreeForeverSection.astro
│   │       ├── CommunitySection.astro
│   │       └── Testimonials.astro
│   ├── pages/
│   │   ├── [lang]/                # Localized dynamic route catchers
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── blog/
│   │   │   │   ├── index.astro
│   │   │   │   └── [...slug].astro
│   │   │   ├── apps/
│   │   │   │   ├── index.astro
│   │   │   │   └── admin.astro
│   │   │   ├── contact.astro
│   │   │   ├── docs.astro
│   │   │   ├── ai-code-viewer-ai.astro
│   │   │   ├── privacy.astro
│   │   │   ├── terms.astro
│   │   │   └── support.astro
│   │   ├── index.astro            # English Default Root (/)
│   │   ├── about.astro            # English Default (/about)
│   │   ├── blog/
│   │   │   ├── index.astro        # English Default (/blog)
│   │   │   └── [...slug].astro    # English Default (/blog/[slug])
│   │   ├── apps/
│   │   │   ├── index.astro        # English Default (/apps)
│   │   │   └── admin.astro        # English Default (/apps/admin)
│   │   ├── contact.astro          # English Default (/contact)
│   │   ├── docs.astro             # English Default (/docs)
│   │   ├── ai-code-viewer-ai.astro# English Default (/ai-code-viewer-ai)
│   │   ├── privacy.astro          # English Default (/privacy)
│   │   ├── terms.astro            # English Default (/terms)
│   │   ├── support.astro          # English Default (/support)
│   │   └── 404.astro              # Custom 404 page
│   └── styles/
│       └── global.css             # Tailwind base directives & HSL color tokens
```

---

## 3. Multi-Language (i18n) System Design

### 3.1 Astro Configuration (`astro.config.mjs`)
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://ladestack.in',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
          ko: 'ko-KR',
          ja: 'ja-JP',
          tr: 'tr-TR',
          'pt-BR': 'pt-BR'
        }
      }
    }),
    icon()
  ]
});
```

### 3.2 Locale Definition (`src/i18n/config.ts`)
```typescript
export const languages = {
  en: { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr', iso: 'en_US' },
  zh: { code: 'zh', name: '简体中文', flag: '🇨🇳', dir: 'ltr', iso: 'zh_CN' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr', iso: 'ko_KR' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr', iso: 'ja_JP' },
  tr: { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr', iso: 'tr_TR' },
  'pt-BR': { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷', dir: 'ltr', iso: 'pt_BR' }
} as const;

export type SupportedLocale = keyof typeof languages;
export const defaultLocale: SupportedLocale = 'en';
```

### 3.3 i18n Utilities (`src/i18n/utils.ts`)
```typescript
import { ui } from './ui';
import { defaultLocale, type SupportedLocale } from './config';

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as SupportedLocale;
  return defaultLocale;
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    return ui[lang]?.[key] || ui[defaultLocale][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: SupportedLocale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return cleanPath;
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}
```

---

## 4. Theme & Performance Architecture

### 4.1 Zero-FOUC Theme Script (`BaseLayout.astro`)
The theme script must run **synchronously** before any external stylesheet or font blocks the main thread.
```html
<script is:inline>
  (function() {
    try {
      const savedTheme = localStorage.getItem('ladestack-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#050505';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#F5F3EB';
      }
    } catch (e) {}
  })();
</script>
```

### 4.2 Font Loading Strategy
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
  onload="this.onload=null;this.rel='stylesheet'"
/>
```

---

## 5. SEO & Structured Data Engine (`SEO.astro`)

The `<SEO.astro>` component accepts:
- `title: string`
- `description: string`
- `lang: SupportedLocale`
- `canonicalUrl?: string`
- `ogImage?: string`
- `article?: { publishedTime: string; modifiedTime: string; author: string; tags: string[] }`
- `structuredData?: object | object[]`

It automatically generates:
1. **Primary Meta**: Title, description, robots (`index, follow, max-image-preview:large`), canonical URL.
2. **Hreflang Alternate Links**: 6 locale links + `x-default` targeting the English version.
3. **OpenGraph**: Localized title, description, image, locale tag matching Facebook OpenGraph specification.
4. **Twitter Cards**: `summary_large_image`, creator, site handle.
5. **Schema.org JSON-LD**: Embedded as `<script type="application/ld+json">`.

---

## 6. Vanilla JS Micro-Interactions (Zero React)

All client-side interactions are implemented as pure ECMAScript modules inside Astro `<script>` tags:
- **Mobile Menu**: Handles open/close, aria-expanded attributes, and body scroll lock.
- **Theme Switcher**: Listens for click, toggles `.dark` class, and writes to `localStorage`.
- **Language Switcher**: Handles dropdown display, outside click detection, and redirect to localized path.
- **Blog Search**: Real-time filtering using `element.textContent.toLowerCase().includes(query)`.
- **Apps Category Filter**: Adds/removes `.hidden` on application grid items.
- **FAQ Accordion**: Smooth height animation using CSS grid `grid-template-rows: 0fr -> 1fr` or native `<details>`.
- **Contact Form**: Client-side validation preventing empty submissions with instant visual feedback.
