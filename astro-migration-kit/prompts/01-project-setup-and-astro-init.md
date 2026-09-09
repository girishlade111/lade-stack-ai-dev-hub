# Step 01: Project Setup, Tooling & Astro 5 Initialization

---

## 📋 Context & Goal for AI Assistant

You are an expert Frontend Architect specializing in **Astro 5**, **Tailwind CSS**, and **Performance Engineering**. 
Your task is to initialize and configure the **Lade Stack** brand portfolio website as a **100% Pure Astro 5** project with **Zero React runtime overhead**.

### Target Project Location
`C:\Users\Girish Lade\OneDrive\Desktop\lade-stack-astro` (or the root of the active Astro workspace).

### Prime Constraints
- ❌ **NO React Dependencies**: Do NOT install or configure `@astrojs/react`, `react`, `react-dom`, `@types/react`, or Radix UI.
- ✅ **Astro 5 Static Output**: `output: 'static'` in `astro.config.mjs`.
- ✅ **Tailwind CSS Integration**: `@astrojs/tailwind` with Tailwind v3 design token support.
- ✅ **Astro Icon**: `astro-icon` with `@iconify-json/lucide` for zero-JS build-time SVG icons.
- ✅ **Sitemap Integration**: `@astrojs/sitemap` configured for i18n locales.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `package.json`
Create `package.json` with the following production-grade dependencies:

```json
{
  "name": "lade-stack-astro",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/sitemap": "^3.2.1",
    "@astrojs/tailwind": "^5.1.5",
    "@iconify-json/lucide": "^1.2.27",
    "@tailwindcss/typography": "^0.5.16",
    "astro": "^5.4.2",
    "astro-icon": "^1.1.5",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.1",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

### 2. Configure `astro.config.mjs`
Create `astro.config.mjs` with multi-language (i18n) routing configuration, tailwind integration, sitemap, and build settings:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://ladestack.in',
  output: 'static',
  trailingSlash: 'never',
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

### 3. Configure `tsconfig.json`
Configure TypeScript with path aliases (`@/*` -> `./src/*`) and Astro's strict TSConfig:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "jsx": "preserve",
    "strictNullChecks": true,
    "skipLibCheck": true
  }
}
```

### 4. Setup Static Assets in `public/`
Copy or ensure the following assets exist in `public/`:
- `favicon.ico`
- `robots.txt`
- `llms.txt`
- `site.webmanifest`
- `og-image.png`
- `AIcode.png`
- SVG icons (`api-testing-project.svg`, `file-management-project.svg`, `documentation-ai-project.svg`, `website-builder-project.svg`, etc.)
- Blog cover images in `public/blog-covers/`

### 5. Create Minimal Sanity File `src/pages/index.astro`
Create a test landing page to verify build:

```astro
---
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lade Stack — AI-Powered Developer Platform</title>
  </head>
  <body class="bg-[#F5F3EB] text-[#1C1C1C] flex items-center justify-center min-h-screen">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Lade <span class="text-[#6E8F6A]">Stack</span></h1>
      <p class="mt-2 text-sm text-gray-600">Astro 5 Foundation Ready.</p>
    </div>
  </body>
</html>
```

---

## 🔍 Verification Commands

Run the following commands in the project directory:
```bash
npm install
npm run check
npm run build
```

### Expected Result
- Dependencies install with 0 errors.
- `astro check` reports 0 errors and 0 warnings.
- `astro build` finishes and outputs `dist/index.html`.
