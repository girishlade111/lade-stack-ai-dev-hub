---
name: lade-stack-astro-recreation
description: Specialized instructions and engineering standards for recreating the Lade Stack portfolio in 100% Pure Astro 5 with multi-language (i18n) support, Zero React runtime, Tailwind CSS, and pristine pre-rendered SEO.
---

# Lade Stack Astro Re-creation Skill

Use this skill when developing, refactoring, or generating components for the **Lade Stack** Astro recreation project.

---

## 1. Prime Directives & Invariants

1. **Zero React Runtime**: 
   - Never import `react`, `react-dom`, `@types/react`, or React component libraries.
   - All components must be `.astro` files.
   - Micro-interactions must be written as native ECMAScript inside `<script>` tags.
2. **First-Class Multi-Language (i18n)**:
   - Always support the 6 canonical languages:
     - `en` (English - default, un-prefixed)
     - `zh` (Simplified Chinese - `/zh/...`)
     - `ko` (Korean - `/ko/...`)
     - `ja` (Japanese - `/ja/...`)
     - `tr` (Turkish - `/tr/...`)
     - `pt-BR` (Brazilian Portuguese - `/pt-BR/...`)
   - Never hardcode user-facing strings; always use `useTranslations(lang)`.
   - Never hardcode navigation links; always wrap paths with `getLocalizedPath(path, lang)`.
3. **Pristine Pre-rendered SEO**:
   - Every page must render `<SEO>` with `<title>`, meta description, canonical URL, OpenGraph, Twitter Card, `hreflang` alternate tags for all 6 locales, and Schema.org JSON-LD directly into static HTML.
4. **Zero-FOUC Theming**:
   - The dark/light theme inline script must remain synchronously inside `<head>` before any external stylesheets.
   - Theme toggle operates by adding/removing the `.dark` class on `document.documentElement` and writing to `localStorage.getItem('ladestack-theme')`.
5. **Exact Visual Fidelity**:
   - Sage green primary: `#6E8F6A` (light) / `#7ea47a` (dark)
   - Backgrounds: Warm light paper `#F5F3EB`, deep dark `#050505`
   - Text: Dark charcoal `#1C1C1C`, dark mode light `#EDEDED`
   - Fonts: Inter (UI), DM Serif Display (Headings), JetBrains Mono (Code)

---

## 2. Component Development Pattern

Every `.astro` component follows this strict structure:

```astro
---
// 1. Imports & i18n setup
import type { SupportedLocale } from '@/i18n/config';
import { useTranslations, getLocalizedPath } from '@/i18n/utils';
import Icon from '@/components/Icon.astro';

// 2. Component Props Interface
interface Props {
  lang: SupportedLocale;
  class?: string;
}

const { lang, class: className = '' } = Astro.props;
const t = useTranslations(lang);
---

<!-- 3. Semantic HTML template with Tailwind utility classes -->
<section class={`py-16 md:py-24 ${className}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-serif text-3xl md:text-5xl font-bold text-foreground">
      {t('home.hero.title')}
    </h2>
  </div>
</section>

<!-- 4. Pure Vanilla JS (Only if micro-interactions are needed) -->
<script>
  // DOM queries scoped to custom attributes or IDs
</script>
```

---

## 3. Blog Content Collections Standard

Blog posts reside in `src/content/blog/[slug].md`.
Frontmatter schema definition (`src/content/config.ts`):
```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Girish Lade'),
    category: z.string(),
    readTime: z.string(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  blog: blogCollection
};
```

---

## 4. Verification Checklist

Before considering any page or component complete:
- [ ] `npm run check` passes without TypeScript errors.
- [ ] `npm run build` succeeds generating static HTML in `dist/`.
- [ ] No `[object Object]` or missing translation keys appear on any of the 6 language routes.
- [ ] Dark mode toggle operates smoothly without page reload or layout shift.
- [ ] Mobile navigation drawer opens, locks body scroll, and closes cleanly.
- [ ] Canonical URLs and `hreflang` tags match the exact deployment domain `https://ladestack.in`.
