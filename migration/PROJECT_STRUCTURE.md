# Lade Stack AI Dev Hub — Project & File Structure Guide

> **Repo:** `lade-stack-ai-dev-hub`
> **Stack:** Vite 5 + React 18 + TypeScript 5 + Tailwind CSS 3 + shadcn/ui + React Router 6 + TanStack Query 5 + Framer Motion 12
> **Site:** `https://ladestack.in`
> **Build:** `vite build` → `dist/` → Vercel SPA (`vercel.json` rewrite `/(.*)` → `/index.html`)
> **Path alias:** `@/*` → `./src/*` (see `tsconfig.json`, `tsconfig.app.json`, `vite.config.ts`)

This document explains **every folder and important file**, how routing, theming, SEO, data, styling, and deployment fit together, and how to add new pages / blog posts / apps / UI components without breaking anything.

---

## 1. TL;DR Architecture

```text
index.html               ← SEO head, fonts, JSON-LD, analytics, <div id="root">
src/main.tsx             ← React root, imports App + index.css
src/App.tsx              ← Providers + Router + lazy Routes (see §5)
src/pages/*              ← One file per URL route (12 routes + 404)
src/components/*         ← Layout + landing sections + cross-cutting (SEO, Header, Footer, Theme)
src/components/ui/*      ← shadcn/ui primitives (47 files, Radix-based)
src/data/*               ← apps.json, blogPosts.ts (27 posts), blogContent.ts (markdown bodies)
src/assets/*             ← Bundled images + 24 blog-cover SVGs + author photos
src/hooks/*, src/lib/*, src/utils/*  ← Shared logic
src/index.css + tailwind.config.ts + components.json ← Design system
public/*                 ← Unbundled static: sitemaps, robots.txt, llms.txt, manifest, favicon
scripts/*, vite.config.ts, vercel.json ← Build / SEO automation / hosting
```

**Request flow (production):**

1. Browser hits `https://ladestack.in/blog/my-post` → Vercel `rewrites` serves `/index.html` (SPA fallback).
2. `index.html` paints critical CSS + theme-preload script (avoids FOUC), loads `/src/main.tsx` as ES module.
3. `App.tsx` mounts `BrowserRouter`, `ThemeProvider`, `QueryClientProvider`, `ErrorBoundary`, `LoadingScreen`, `ScrollProgress`, `SmoothScroll (Lenis)`, Vercel `Analytics` + `SpeedInsights`.
4. Lazy route chunk loads (e.g. `BlogPost.tsx`), its `<SEO>` component rewrites `<title>`, meta, canonical, JSON-LD at runtime.
5. Header/Footer + page sections render. Blog body comes from `blogPosts.ts` (meta) + `blogContent.ts` (markdown string → custom renderer).

> This is a **client-rendered SPA**, not Next.js SSR. SEO depends on `index.html` defaults + per-route `<SEO>` runtime updates + static `public/sitemap*.xml` + `robots.txt`. See `migration-seo-manifest.json` for the full SEO inventory.

---

## 2. Root Directory Map

```text
lade-stack-ai-dev-hub/
├── index.html                        ← App shell, global SEO/OG/Twitter/JSON-LD/fonts/analytics
├── package.json                      ← vite_react_shadcn_ts, scripts: dev/build/lint/preview/indexnow
├── vite.config.ts                    ← React SWC, @ alias, manualChunks, assetsInlineLimit=0
├── tailwind.config.ts                ← Design tokens (sage/warm palettes), animations, plugins
├── components.json                   ← shadcn/ui config (slate, CSS vars, aliases)
├── postcss.config.js                 ← Tailwind + Autoprefixer
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
├── vercel.json                       ← SPA rewrite + security + cache headers for assets/sitemap/robots
├── public/                           ← Copied verbatim to dist/ (see §10)
├── src/                              ← All application source (see §4–§9)
├── scripts/
│   ├── generate_blogs.js             ← Blog content generator helper
│   └── notify-indexnow.mjs           ← `npm run indexnow` — pings IndexNow on publish
├── dist/                             ← Build output (gitignored, deployed to Vercel)
├── README.md (≈3850 lines)           ← Marketing + setup + architecture deep-dive
├── README_APPS.md                    ← Apps Gallery documentation
├── API_TESTING_IMPLEMENTATION.md     ← API Tester product spec
├── Blog_System_Upgrade_Plan.md       ← Blog roadmap
├── SEO_OPTIMIZATION_SUMMARY.md       ← Keyword + meta + schema strategy
├── LADE_STACK_LOADER_README.md       ← Custom loader docs
├── migration-seo-manifest.json       ← Generated SEO route/redirect/sitemap manifest (Astro migration)
├── PROJECT_STRUCTURE.md              ← This file
└── node_modules/, package-lock.json, .git/, .claude/
```

### Root config files — what each does

| File | Purpose | Key details |
|---|---|---|
| `package.json` | Deps + scripts | `dev: vite`, `build: vite build`, `lint: eslint .`, `preview: vite preview`, `indexnow: node scripts/notify-indexnow.mjs`. Major deps: `react@18`, `react-router-dom@6`, `@tanstack/react-query@5`, `framer-motion@12`, `lenis`, `lottie-react`, full Radix suite, `next-themes`, `recharts`, `sonner`, `zod` + RHF. |
| `vite.config.ts` | Dev + build | `server.host ::, port 8080`. `resolve.alias @ → ./src`. `build.assetsInlineLimit=0` (never inline images as base64 so `background.avif/webp` stay cacheable files). `manualChunks`: `react-core`, `router`, `framer-motion`, `charts`, `lottie`, `radix-ui`, `tanstack-query`, `utils`, `lenis`. `esbuild.target es2020`, `chunkSizeWarningLimit 500`. |
| `tailwind.config.ts` | Design system | `darkMode: ["class"]`, `content` covers `src/**/*`. Custom `sage` (#6E8F6A family) + `warm` (#F5F3EB family) palettes, `container center 2rem / 2xl 1400px`, `Inter` + `JetBrains Mono` fonts, `accordion-down/up`, `float` keyframes, plugins `tailwindcss-animate` + `@tailwindcss/typography`. |
| `components.json` | shadcn/ui | `style default`, `tsx:true`, `tailwind.css: src/index.css`, `baseColor slate`, `cssVariables:true`, aliases `components→@/components`, `utils→@/lib/utils`, `ui→@/components/ui`, `lib→@/lib`, `hooks→@/hooks`. |
| `tsconfig*.json` | TS | Project references (`app` + `node`). `baseUrl .`, `paths @/* → ./src/*`. Lenient: `noImplicitAny:false`, `strictNullChecks:false`, `noUnusedLocals:false`, `skipLibCheck:true`, `allowJs:true`. |
| `vercel.json` | Hosting | `regions: [bom1]`. Single `rewrites: /(.*) → /index.html` (SPA). `headers`: immutable 1y cache for `/assets/*`; `no-store`-ish for `/`; security headers (`nosniff`, `DENY`, `XSS 1;mode=block`, strict `Referrer-Policy`, restrictive `Permissions-Policy`); correct `Content-Type` + caching for `sitemap*.xml`, `robots.txt`, `llms.txt`, `ladestack-indexnow-key.txt`. **No `redirects`** — legacy sitemap URLs (`/projects`, `/file-sharing-platform`, `/api-testing-platform`) currently fall through to 404; handle in Astro migration. |
| `index.html` | Shell + global SEO | `lang="en"`, viewport-fit cover. Title, description, keywords, `robots: index,follow,max-image-preview:large…`, OG (`website`, `og-image.png` 1200×630, `ladestack.in`), Twitter `summary_large_image`, `canonical https://ladestack.in`, `/site.webmanifest`, inline critical CSS + theme-flash guard + deferred Google Fonts (Inter + DM Serif Display preload, JetBrains Mono idle) + JSON-LD (`Organization` + `SoftwareApplication` + `WebSite`) + deferred Clarity + Umami. |
| `postcss.config.js`, `eslint.config.js` | Tooling | Standard Tailwind/Autoprefixer chain; flat ESLint (see file for rule set). |

---

## 3. Entry Files

| File | Role |
|---|---|
| `src/main.tsx` (5 lines) | `createRoot(#root).render(<App />)` + `import ./index.css`. No router/providers here — all in `App.tsx`. |
| `src/App.tsx` (107 lines) | **Composition root.** `ErrorBoundary` → `QueryClientProvider` (stale 5min, retry 1, no refocus) → `ThemeProvider (default light, key ladestack-theme)` → `BrowserRouter` → `SmoothScroll (Lenis)` → `LoadingScreen` + `ScrollProgress` + `ScrollToTop` → `Suspense(PageLoader)` → `Routes` → `Toaster` + `Sonner` + Vercel `Analytics` + `SpeedInsights`. All pages `lazy()`-imported for code-splitting. |
| `src/vite-env.d.ts` | Vite client types (`import.meta.env`, assets). |
| `src/App.css` | Legacy/app-level styles (check before adding global CSS — prefer `index.css` + Tailwind). |
| `src/index.css` (385 lines) | Tailwind directives + `@layer base` CSS vars for light (warm paper `#F5F3EB`) + `.dark` (#1e1c18-ish) + `* { border-border }`, font smoothing, body/typography/scrollbar/selection/keyframes (`header-slide-in`, etc.). This is the **single source of truth** for `--background/foreground/primary/sage…` consumed by `tailwind.config.ts` via `hsl(var(--…))`. |

---

## 4. `src/` Tree (Full)

```text
src/
├── App.css / App.tsx / main.tsx / index.css / vite-env.d.ts
├── pages/                  ← 13 files (see §5)
├── components/             ← 27 files (see §6)
│   ├── ui/                 ← 47 shadcn files (see §7)
│   └── motion/             ← motion helpers (index.tsx)
├── data/
│   ├── apps.json           ← 9 apps for Gallery (see §8)
│   ├── blogPosts.ts        ← BlogPost[] meta for 27 posts (see §8)
│   └── blogContent.ts      ← Record<slug, markdown> bodies
├── assets/
│   ├── background.avif/png/webp, hero-bg*.jpg, girish*.jpg
│   └── blog-covers/        ← 24 SVGs (ai-development, graphql-vs-rest, zero-trust-security…)
├── hooks/
│   ├── use-mobile.tsx      ← isMobile breakpoint helper
│   ├── use-media-query.ts  ← generic media query
│   ├── use-toast.ts        ← toast state (re-exported by ui/use-toast.ts)
│   └── useTheme.ts         ← theme context helper
├── lib/utils.ts            ← cn() = twMerge(clsx()) — use for every conditional className
├── utils/safe.ts           ← safeWindowOpen + safe external-link helpers (used by Footer)
├── styles/LadeStackLoader.css
├── stories/ApiTestingPlatform.stories.tsx  ← Storybook story
├── examples/LoaderExample.tsx
└── tests/apps.test.tsx     ← Gallery filter tests
```

---

## 5. Routing — `src/pages/` (File → URL)

Defined in `src/App.tsx` `<Routes>`. All `lazy()` + `Suspense`.

| URL | File | Dynamic? | Purpose & notes |
|---|---|---|---|
| `/` | `Index.tsx` (79 lines) | No | Landing. Eager `Header` + `HeroSection`; lazy below-fold (`AboutSection`, `ValuesSection`, `ImpactSection`, `ProductsSection` in `#products`, `FreeForeverSection`, `CommunitySection`, `Testimonials`, `Footer`). `<SEO>` title `Lade Stack – AI-Powered Developer Platform…`, `WebApplication` JSON-LD. |
| `/about` | `AboutUs.tsx` (~801 lines) | No | Story, stats (2020/5+ tools/8K+/100% free), timeline, values, CTA (`/contact`, `/`, `/apps` links). `Organization` JSON-LD, `og-about.png`. |
| `/blog` | `Blog.tsx` (532 lines) | No | Magazine index. `POSTS_PER_PAGE=6`, category filter (10 cats), search, pagination, featured hero card, newsletter CTA. Links to `/blog/:slug`. `Blog` JSON-LD. |
| `/blog/:slug` | `BlogPost.tsx` (557 lines) | **Yes (`slug`)** | Article template. `useParams slug → blogPosts.find + blogContent[slug]`; 404 fallback (`Post Not Found`). Custom inline markdown renderer (`processInline` + `renderContent`: headings, lists, code blocks, quotes, tables via `dangerouslySetInnerHTML`), category badge, author card, `RelatedCard`, breadcrumbs (`/ → /blog → post`), `CopyLinkButton`. `BlogPosting` JSON-LD, `ogType article`, cover `/blog-covers/{image}.svg`. 27 slugs (see §8). |
| `/contact` | `Contact.tsx` (582 lines) | No | Cards (email/support/location/hours), form (fake async submit), map iframe (Mumbai), FAQ accordion, CTA to `/support` + `mailto:admin@ladestack.in`. `ContactPage` JSON-LD. |
| `/privacy` | `PrivacyPolicy.tsx` | No | Legal. Links to `/contact`. Minimal SEO (title+desc only). |
| `/terms` | `TermsOfService.tsx` | No | Legal. Links to `/contact`. Minimal SEO. |
| `/support` | `Support.tsx` (272 lines) | No | Support options, 6 FAQs, help topics, community CTA. Links to `/contact`. `FAQPage` JSON-LD (note: static, not full Q&A markup — extend in Astro). |
| `/docs` | `Documentation.tsx` (636 lines) | No | 8 categories (Getting Started, API Ref, Integrations, Tutorials, Security, Team, Data, Deployment) + 4 articles + changelog (v2.0.0–v2.4.0) + search + modals. `TechArticle` JSON-LD. |
| `/ai-code-viewer-ai` | `AICodeViewerAI.tsx` (883 lines) | No | CodeEnhance AI product page (editor demo, features, back to `/apps`, footer nav `/`, `/apps`, `/about`, `/contact`). `SoftwareApplication` JSON-LD (4.8/156), `AIcode.png`. |
| `/apps` | `AppsGallery.tsx` (549 lines) | No | Gallery of 9 apps from `apps.json` (live vs coming-soon, category filter, search). Links to `/about`. `CollectionPage` JSON-LD. |
| `/apps/admin` | `AppsAdmin.tsx` | No | **Admin, must stay `noindex` + `Disallow: /apps/admin` (robots.txt).** Minimal `<SEO title>` only — add `noIndex` + auth guard when migrating. |
| `*` | `NotFound.tsx` (33 lines) | No | 404. Logs path in DEV only, links to `/`. Must be `noindex` in Astro (`meta robots`, no sitemap entry). |

**Global nav (Header + Footer) present on all pages:** `/`, `/about`, `/apps`, `/ai-code-viewer-ai`, `/blog`, `/contact`, `/docs`, `/support`, `/privacy`, `/terms` + external subdomains (`pdf.`, `img.`, `resume.`, `land.`, `code.`).

**Legacy sitemap-only URLs with no route (404 today — decide redirect vs rebuild in Astro):** `/projects`, `/file-sharing-platform`, `/api-testing-platform` (all in `public/sitemap.xml`).

---

## 6. `src/components/` — Layout & Sections

### Shell (every page)

| File | Responsibility |
|---|---|
| `Header.tsx` (205 lines) | Sticky header, scroll-aware blur, `navLinks: [/→Home, /about, /apps(Products), /blog, /contact]` + `Get Started → /apps`, Cmd/Ctrl+K `SearchModal`, mobile `Sheet` menu, `ThemeToggle`. Sentinel `IntersectionObserver` for `scrolled` state; CSS `header-slide-in` (no Framer in critical path). |
| `Footer.tsx` (549 lines) | `products[]` (AI Code Editor→`/ai-code-viewer-ai`, 4 external live tools `pdf/img/resume/land.ladestack.in`, 4 `/apps` placeholders) + `navColumns` (Platform/Company/Resources → all internal routes) + `socials` (GitHub/LinkedIn/Instagram/CodePen/mailto) + `trustItems` + `Newsletter` form. Uses `safeWindowOpen`. |
| `SEO.tsx` (145 lines) | **Runtime head manager (no react-helmet).** Props: `title*, description, keywords, canonicalUrl, og*, twitter*, structuredData, noIndex, author`. `useEffect` sets `document.title`, upserts `meta[name/property]` + `link[rel=canonical]` (default `https://ladestack.in + pathname`), `robots` (`noindex,nofollow` vs `index,follow,max-image-preview:large…`), OG/Twitter with fallbacks (`ogTitle‖title`, `twitterTitle‖ogTitle‖title`, default image `og-image.png`), injects/cleans `script[ld+json][data-generated]`. Base constants `SITE_NAME=Lade Stack`, `BASE_URL=https://ladestack.in`. **Astro mapping:** each `<SEO>` → page `<head>` + `layout` defaults from `index.html`. |
| `ThemeProvider.tsx` / `ThemeToggle.tsx` / `ThemeSwitcher.tsx` | `next-themes`-style light/dark via `class` + `localStorage ladestack-theme` (default light; `index.html` preload script prevents flash). |
| `ErrorBoundary.tsx` | Class boundary wrapping entire `App` — catches render crashes. |
| `LoadingScreen.tsx` + `LadeStackLoader.tsx` + `styles/LadeStackLoader.css` + `examples/LoaderExample.tsx` | Boot splash (see `LADE_STACK_LOADER_README.md`). |
| `ScrollProgress.tsx` | Top progress bar. |
| `SmoothScroll.tsx` | Lenis smooth scroll wrapper (see `lenis` chunk). |
| `ImageLightbox.tsx`, `BentoImageGrid.tsx`, `AIEditorHighlight.tsx`, `AnimatedEditor.tsx`, `AnimatedCounter.tsx`, `DualCodeSection.tsx`, `SocialSection.tsx`, `motion/index.tsx` | Reusable interactive/animated blocks. |

### Landing sections (used by `Index.tsx`)

`HeroSection.tsx` (eager, LCP-critical) → `AboutSection.tsx` → `ValuesSection.tsx` → `ImpactSection.tsx` → `ProductsSection.tsx` (driven by `LadeSuite.tsx` + `apps.json`) → `FreeForeverSection.tsx` → `CommunitySection.tsx` → `Testimonials.tsx` (uses `ui/testimonials-columns-1.tsx`).

---

## 7. `src/components/ui/` — shadcn/ui Primitives (47 Files)

Standard shadcn pattern: Radix primitive + `cn()` + `cva` variants + CSS-var theming. Do not edit generated props without checking upstream.

`accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, expandable-tabs, form, hero-geometric, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, search-modal, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, testimonials-columns-1, textarea, toast, toaster, toggle, toggle-group, tooltip, use-toast.ts, about-dark-shader.tsx`

Key: `button.tsx` (cva sizes/variants), `dialog/sheet/drawer` (modals for Docs + mobile nav), `form/input/textarea/select` (Contact + Docs search), `toast/toaster/sonner + hooks/use-toast.ts` (notifications), `search-modal.tsx` (Cmd+K, used by Header), `pagination.tsx` (Blog), `chart.tsx` (recharts wrapper).

---

## 8. `src/data/` — Content Layer

### `apps.json` (9 items)

Schema per app: `id, slug, title, tagline, description, icon (/public/*.svg|png), category, features[3], timeToValue, integrations[], lifetimeFree:true, landingUrl (/apps or https://{pdf,img,resume,land,code}.ladestack.in/), createdAt, popularityScore, iconAlt, comingSoon?`.

Live (external): `ai-code-viewer (code.)`, `ls-pdf (pdf.)`, `ls-img (img.)`, `swift-resume (resume.)`, `bharat-land (land.)`. Coming-soon (`/apps`): `api-testing`, `website-builder`, `file-management`, `documentation-ai`.

### `blogPosts.ts` (27 posts, `BlogPost` interface)

Fields: `id, title, slug, category, excerpt, image (blog-cover key), readTime, date (2024-06-15→2024-12-08), author (always Girish Lade), keywords[], metaDescription, ogTitle, ogDescription`.

Categories: `AI Development (3)`, `Generative AI (3)`, `SaaS Architecture (3)`, `Backend as a Service (3)`, `API Design & Scaling (3)`, `Cloud Computing (2)`, `Virtual Machines (2)`, `DevOps & CI/CD (3)`, `Security in Web Apps (3)`, `AI Production Systems (2)`.

Slugs (canonical `/blog/{slug}`): `future-of-ai-in-software-development`, `building-ai-powered-code-review-systems`, `machine-learning-pipelines-for-web-developers`, `generative-ai-for-content-creation`, `building-rag-applications-vector-databases`, `fine-tuning-llms-domain-specific-tasks`, `multi-tenant-saas-architecture-patterns`, `building-subscription-billing-systems`, `scaling-saas-applications-million-users`, `baas-platforms-compared-firebase-supabase-appwrite`, `building-serverless-backends-with-baas`, `real-time-data-sync-backend-services`, `rest-vs-graphql-choosing-right-api-paradigm`, `api-rate-limiting-throttling-strategies`, `building-api-gateways-microservices`, `cloud-cost-optimization-strategies-startups`, `multi-cloud-architecture-aws-azure-gcp`, `containers-vs-vms-when-to-use-each`, `optimizing-vm-performance-production-workloads`, `gitops-managing-infrastructure-with-git`, `building-zero-downtime-deployment-pipelines`, `infrastructure-as-code-terraform-pulumi`, `zero-trust-security-web-applications`, `owasp-top-10-complete-mitigation-guide`, `implementing-oauth2-openid-connect`, `mlops-deploying-ml-models-production`, `monitoring-ai-systems-in-production`.

### `blogContent.ts`

`Record<slug, markdown-string>` bodies rendered by `BlogPost.tsx`. To add a post: append to **both** `blogPosts.ts` **and** `blogContent.ts` + add cover SVG + rebuild sitemap.

---

## 9. Supporting Source Dirs

| Dir | Files | Use |
|---|---|---|
| `src/assets/` | `background.{avif,webp,png}`, `hero-bg*.jpg`, `girish*.jpg`, `blog-covers/*.svg` (24) | Bundled via Vite (hashed URLs). Covers referenced as `/blog-covers/{image}.svg` — ensure files exist in both `src/assets/blog-covers/` **and** `public/blog-covers/` if directly URL-addressed. |
| `src/hooks/` | `use-mobile.tsx`, `use-media-query.ts`, `use-toast.ts`, `useTheme.ts` | Responsive + toast + theme. Import via `@/hooks/*`. |
| `src/lib/utils.ts` | `cn()` | Canonical class merge — use everywhere instead of string concat. |
| `src/utils/safe.ts` | `safeWindowOpen()` | `noopener,noreferrer` external opens (Footer). |
| `src/styles/` | `LadeStackLoader.css` | Loader animation. |
| `src/stories/` | `ApiTestingPlatform.stories.tsx` | Storybook isolated dev. |
| `src/examples/` | `LoaderExample.tsx` | Loader usage demo. |
| `src/tests/` | `apps.test.tsx` | Gallery search/category/popular/new filter logic tests. Run before touching `AppsGallery` or `apps.json`. |

---

## 10. `public/` — Static (Copied to `dist/` Unchanged)

| File | Purpose |
|---|---|
| `sitemap.xml` (18 URLs) | Master sitemap: `/`, `/about`, `/projects*`, `/file-sharing-platform*`, `/ai-code-viewer-ai`, `/api-testing-platform*`, `/apps`, `/docs`, `/blog`, `/blog/1–6` (legacy numeric IDs — stale vs slug system), `/contact`, `/support`, `/privacy`, `/terms` with `lastmod/changefreq/priority`. `*` = orphaned (no route). |
| `sitemap-pages.xml` (9 URLs) | Static pages subset (`/`, `/about`, `/projects*`, `/apps`, `/docs`, `/contact`, `/support`, `/privacy`, `/terms`). |
| `sitemap-blog.xml` (7 URLs) | `/blog` + `/blog/1–6`. Regenerate with slugs on migration. |
| `robots.txt` | `Allow: /`, `Disallow: /apps/admin`, explicit allows for Googlebot/Bing/Yandex/Baidu/social/AI crawlers (GPTBot, ClaudeBot, Perplexity, CCBot, Google-Extended), 3 sitemap stanzas. |
| `llms.txt` | AI-crawler allowlist + site metadata (`Lade Stack`, `https://ladestack.in`, `admin@ladestack.in`). |
| `site.webmanifest` | PWA manifest (linked from `index.html`). |
| `favicon.ico`, `placeholder.svg`, `*-project.svg` (7), `AIcode.png` | Icons/OG/product art. `og-image.png` referenced in code **must exist at site root** for social cards. |
| `blog-covers/` | Public copies of covers for direct `/blog-covers/*.svg` serving. |
| `ladestack-indexnow-key.txt` | IndexNow verification (paired with `scripts/notify-indexnow.mjs`). |

---

## 11. SEO, Performance & Data Flow

- **SEO:** `index.html` defaults → per-page `<SEO>` overrides → `public/sitemap*.xml` + `robots.txt` + `llms.txt`. No SSR/prerender. Dynamic post meta is template-driven (`{post.title/excerpt/keywords/image}`). Canonical = `https://ladestack.in + pathname` unless `canonicalUrl` passed. `BlogPost` OG type is `article`; everything else `website`. Admin + 404 must be `noindex` + excluded from sitemaps.
- **Theming:** `ThemeProvider (light default)` + `localStorage ladestack-theme` + `index.html` sync preload + `dark:` Tailwind variants + CSS vars in `index.css`.
- **Data:** No backend. `apps.json` + `blogPosts.ts` + `blogContent.ts` imported statically. `TanStack Query` configured but only needed if async sources are added. Forms (Contact newsletter, Blog newsletter, Docs search) are client-only.
- **Performance:** Route-level `lazy()` + Vite `manualChunks` + `assetsInlineLimit:0` + deferred fonts/analytics + `Suspense` below-fold sections + `animate` CSS over JS where possible. Keep `HeroSection` + `Header` lean — they gate LCP.

---

## 12. Build, Lint, Deploy

```bash
npm run dev        # Vite :8080, host ::
npm run build      # → dist/ (esbuild min, css min, no sourcemaps)
npm run preview    # Serve dist/ locally
npm run lint       # eslint .
npm run indexnow   # node scripts/notify-indexnow.mjs (after sitemap change)
```

Vercel: `bom1` region, SPA rewrite, immutable `/assets/*` (1y), short cache for HTML/sitemaps, security headers. No env vars required for base build (analytics IDs are hardcoded in `index.html`/`App.tsx` — extract to env in Astro).

---

## 13. How-To (Common Tasks)

**Add a page/route:** 1) Create `src/pages/MyPage.tsx` with `<SEO title description keywords og* structuredData>` + `Header`/`Footer`. 2) `lazy()`-import in `App.tsx` + `<Route path="/my-page">`. 3) Add to `Header`/`Footer` nav if needed. 4) Add URL to `public/sitemap*.xml` + `migration-seo-manifest.json`. 5) Test direct-URL load (Vercel rewrite) + 404.

**Add a blog post:** 1) Append meta to `blogPosts.ts` (unique slug, category, keywords, dates). 2) Add markdown body to `blogContent.ts[slug]`. 3) Add `/blog-covers/{image}.svg` to `src/assets/blog-covers/` + `public/blog-covers/`. 4) Update `sitemap-blog.xml` + `sitemap.xml` + run `indexnow`. 5) Check related-posts logic (`same category → 3, else 3`) + cover fallback (`FALLBACK_IMAGE` Unsplash).

**Add an app to Gallery:** Append to `apps.json` (id/slug/title/icon/category/features/integrations/landingUrl/comingSoon). Covers + `iconAlt` required. Verify `tests/apps.test.tsx` filters still pass.

**Add a UI primitive:** Follow shadcn: create `src/components/ui/<name>.tsx` with Radix + `cn()` + `cva`, export from barrel if present, document props. Keep `components.json` aliases intact.

**Edit design tokens:** Change CSS vars in `src/index.css` (`:root` + `.dark`) — `tailwind.config.ts` picks them up automatically. Prefer `sage-*`/`warm-*` + `bg-background/text-foreground/border-border` over hardcoded hex (brand green `#6E8F6A` is the one deliberate exception).

---

## 14. Gotchas & Migration Notes (Astro)

1. **No `next.config` / SSR** — this is a Vite SPA; `migration-seo-manifest.json` maps `src/pages → url_path`, dynamic `:slug`, canonicals, robots, OG/Twitter, JSON-LD, outbound links, and the 40-URL future sitemap (10 live static + 3 legacy + 27 slugs). Preserve the 3 legacy sitemap URLs via redirects or Astro pages or rankings will drop.
2. **Stale numeric blog URLs** (`/blog/1–6` in all three sitemaps) have no route and no slug mapping — add 301s or sunset + remove from sitemap-0.xml.
3. **`/apps/admin` + 404** must be `noindex`, excluded from sitemaps, and (admin) auth-gated; `robots.txt Disallow: /apps/admin` must carry over.
4. **Per-page `<SEO>` → Astro `<head>`:** move `index.html` globals (fonts, JSON-LD Organization/SoftwareApplication/WebSite, Clarity/Umami) into an Astro layout; move each page's `<SEO>` props into frontmatter.
5. **Trailing slash:** none (canonicals have no trailing slash except `/`). Keep `trailingSlash:false` + canonical normalization in Astro to avoid duplicates.
6. **Assets:** `assetsInlineLimit:0` + hashed Vite URLs → replicate with Astro asset pipeline + long-cache headers; keep `public/` filenames stable (OG images, covers, `*.txt`, `*.xml`, `*.webmanifest`).
