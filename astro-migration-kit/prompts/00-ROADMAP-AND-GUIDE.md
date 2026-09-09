# Lade Stack Astro Re-creation — Master Roadmap & AI Prompt Execution Guide

---

## Overview & Execution Philosophy

This roadmap contains **10 modular, sequential, and fully self-contained prompts** designed to recreate the **Lade Stack** (`https://ladestack.in`) developer portfolio in **100% Pure Astro 5** with **Zero React runtime overhead** and **Multi-Language (i18n)** support across 6 languages:
- **English (`en`)** — Default (`/`)
- **Chinese (`zh`)** — Simplified (`/zh/...`)
- **Korean (`ko`)** — Korean (`/ko/...`)
- **Japanese (`ja`)** — Japanese (`/ja/...`)
- **Turkish (`tr`)** — Turkish (`/tr/...`)
- **Portuguese (Brazil) (`pt-BR`)** — Brazilian Portuguese (`/pt-BR/...`)

### Why Step-by-Step Modular Prompts?
When an AI assistant is asked to build an entire enterprise website in a single prompt, code quality degrades: sections get truncated, placeholder comments appear, edge cases fail, and context limits cause regressions. 

By executing each step in sequence:
1. Each prompt is **100% self-contained**. You can copy any prompt, open a **brand new chat** with Claude, Gemini, ChatGPT, or Antigravity, paste it, and the AI will have full context, exact file targets, and testing commands.
2. Every milestone can be tested and verified (`npm run check`, `npm run build`) before moving to the next.
3. Zero missing files, zero placeholders, and 100/100 Lighthouse performance.

---

## Master Prompt Execution Matrix

| Step | File Name | Purpose & Deliverables | Verification Command |
|---|---|---|---|
| **01** | [`01-project-setup-and-astro-init.md`](./01-project-setup-and-astro-init.md) | Initialize Astro 5 project, install Tailwind, Sitemap, Icon, TSConfig, and copy static assets. | `npm run build` |
| **02** | [`02-design-system-and-theme.md`](./02-design-system-and-theme.md) | Implement HSL color tokens (Sage `#6E8F6A`, Charcoal `#1C1C1C`, Warm `#F5F3EB`), dark mode zero-FOUC script, and Google Fonts. | `npm run dev` (test dark/light) |
| **03** | [`03-i18n-routing-and-translations.md`](./03-i18n-routing-and-translations.md) | Configure 6-language i18n system, translation dictionaries (`ui.ts`), and helper functions (`useTranslations`). | Unit / console test |
| **04** | [`04-seo-and-head-architecture.md`](./04-seo-and-head-architecture.md) | Create `<SEO.astro>` component with localized meta, canonical, 6x `hreflang` alternate tags, and Schema.org JSON-LD. | Inspect static HTML `<head>` |
| **05** | [`05-layouts-header-and-footer.md`](./05-layouts-header-and-footer.md) | Build `BaseLayout.astro`, `Header.astro` (with Vanilla JS language dropdown & mobile drawer), and `Footer.astro`. | Test navigation across locales |
| **06** | [`06-home-page-and-landing-sections.md`](./06-home-page-and-landing-sections.md) | Recreate the complete Home page (`/` and `/[lang]/`) with 8 sections in 100% pure Astro. | Verify all sections render |
| **07** | [`07-blog-content-collections-and-pages.md`](./07-blog-content-collections-and-pages.md) | Setup Astro Content Collections (`src/content/blog/`), convert 27+ articles to Markdown, build blog list & reader. | Test search, filters & reading |
| **08** | [`08-apps-gallery-and-admin.md`](./08-apps-gallery-and-admin.md) | Build `/apps` gallery with interactive category filters, and `/apps/admin` JSON editor tool in pure Vanilla JS. | Test filtering & JSON export |
| **09** | [`09-public-pages.md`](./09-public-pages.md) | Recreate `/about`, `/contact` (with FAQ accordion & form), `/docs`, `/ai-code-viewer-ai`, `/privacy`, `/terms`, `/support`, `404`. | Check all routes generate |
| **10** | [`10-verification-build-and-github-deploy.md`](./10-verification-build-and-github-deploy.md) | Full build audit, Lighthouse benchmark, Git initialization, and GitHub push to `girishlade111/lade-stack-astro`. | Clean GitHub repo & build |

---

## How to Run Each Prompt in a New Chat

1. Open a new chat in your AI tool (Antigravity IDE, Cursor, Claude Code, or web chat).
2. Open the prompt markdown file for the step you want to execute (e.g. `01-project-setup-and-astro-init.md`).
3. Copy the entire file content and paste it into the chat.
4. Let the AI generate the code and run the verification commands specified in the prompt.
5. Confirm the verification passes before proceeding to the next prompt file!
