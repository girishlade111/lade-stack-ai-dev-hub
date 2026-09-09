# Step 06: Home Page & Landing Page Sections in 100% Pure Astro

---

## 📋 Context & Goal for AI Assistant

You are a Principal Frontend Architect. 
Your task is to implement the complete, high-converting Home Landing Page for **Lade Stack** in **100% Pure Astro** (Zero React runtime).
The home page must be accessible in:
- Default English: `src/pages/index.astro` (`/`)
- All 5 other languages: `src/pages/[lang]/index.astro` (`/zh/`, `/ko/`, `/ja/`, `/tr/`, `/pt-BR/`)

### Key Landing Page Sections
1. `HeroSection.astro` (Badge, Editorial H1, CTA buttons, metrics)
2. `AboutSection.astro` (Mission & vision)
3. `ValuesSection.astro` (Engineering pillars)
4. `ImpactSection.astro` (Key developer metrics)
5. `ProductsSection.astro` (5 Flagship AI Tools with visual cards)
6. `FreeForeverSection.astro` (Open-access pledge)
7. `CommunitySection.astro` (Ecosystem stats & community)
8. `Testimonials.astro` (Social proof quotes)

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/components/sections/HeroSection.astro`

```astro
---
import { useTranslations, getLocalizedPath } from '@/i18n/utils';
import type { SupportedLocale } from '@/i18n/config';
import { Icon } from 'astro-icon/components';

interface Props {
  lang: SupportedLocale;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section class="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
  <!-- Subtle gradient background blur -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- Announcement Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary mb-8 hover:bg-primary/15 transition-colors">
      <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
      {t('hero.badge')}
    </div>

    <!-- Editorial Main Heading -->
    <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
      {t('hero.title.part1')} <br class="hidden sm:inline" />
      <span class="text-primary italic">{t('hero.title.part2')}</span>
    </h1>

    <!-- Subtitle -->
    <p class="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
      {t('hero.subtitle')}
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
      <a
        href={getLocalizedPath('/apps', lang)}
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary"
      >
        <span>{t('hero.cta.primary')}</span>
        <Icon name="lucide:arrow-right" class="w-4 h-4" />
      </a>
      <a
        href={getLocalizedPath('/blog', lang)}
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground font-semibold text-sm transition-all"
      >
        <Icon name="lucide:book-open" class="w-4 h-4 text-muted-foreground" />
        <span>{t('hero.cta.secondary')}</span>
      </a>
    </div>

    <!-- Key Metrics Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/60">
      <div class="p-4 rounded-2xl bg-card/40 border border-border/40">
        <div class="font-serif text-2xl sm:text-3xl font-bold text-foreground">8,000+</div>
        <div class="text-xs text-muted-foreground mt-1">{t('hero.stats.users')}</div>
      </div>
      <div class="p-4 rounded-2xl bg-card/40 border border-border/40">
        <div class="font-serif text-2xl sm:text-3xl font-bold text-primary">99.9%</div>
        <div class="text-xs text-muted-foreground mt-1">{t('hero.stats.uptime')}</div>
      </div>
      <div class="p-4 rounded-2xl bg-card/40 border border-border/40">
        <div class="font-serif text-2xl sm:text-3xl font-bold text-foreground">$0</div>
        <div class="text-xs text-muted-foreground mt-1">{t('hero.stats.cost')}</div>
      </div>
    </div>
  </div>
</section>
```

### 2. Create `src/components/sections/ProductsSection.astro`
Showcases the flagship AI Developer Tools:

```astro
---
import { getLocalizedPath } from '@/i18n/utils';
import type { SupportedLocale } from '@/i18n/config';
import { Icon } from 'astro-icon/components';

interface Props {
  lang: SupportedLocale;
}

const { lang } = Astro.props;

const products = [
  {
    title: 'CodeEnhance AI',
    tagline: 'Intelligent Code Viewer & Enhancer',
    desc: 'Transform raw code into production-ready software with real-time AI linting, suggestions, and instant previews.',
    icon: 'lucide:code-2',
    link: '/ai-code-viewer-ai',
    badge: 'Popular',
  },
  {
    title: 'API Testing Platform',
    tagline: 'Automated REST & GraphQL Testing',
    desc: 'Generate automated validation suites, mock API responses, and run security benchmarks in seconds.',
    icon: 'lucide:network',
    link: 'https://ladestack.in/api-testing-platform',
    badge: 'High Speed',
  },
  {
    title: 'Website Builder AI',
    tagline: 'No-Code Semantic Generator',
    desc: 'Generate modern, responsive web interfaces with semantic markup and export to standard HTML/CSS.',
    icon: 'lucide:layout-template',
    link: 'https://ladestack.in/website-builder-project',
    badge: 'Zero Code',
  },
  {
    title: 'Secure File Hub',
    tagline: 'Encrypted Developer File Sharing',
    desc: 'Fast, secure temporary sharing for configuration files, credentials, and deployment archives.',
    icon: 'lucide:shield-check',
    link: 'https://ladestack.in/file-sharing-platform',
    badge: 'Encrypted',
  },
];
---

<section id="products" class="py-20 bg-muted/20 border-y border-border/60">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="text-xs font-semibold text-primary uppercase tracking-widest">Ecosystem</span>
      <h2 class="font-serif text-3xl sm:text-5xl font-bold text-foreground mt-2">
        Flagship AI Developer Tools
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground mt-4">
        Every tool is purpose-built to eliminate repetitive dev chores and accelerate your release cycles.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {
        products.map((p) => (
          <div class="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon name={p.icon} class="w-6 h-6" />
                </div>
                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  {p.badge}
                </span>
              </div>
              <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p class="text-xs font-semibold text-primary/80 mt-1">{p.tagline}</p>
              <p class="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
            </div>
            <div class="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
              <a
                href={p.link.startsWith('http') ? p.link : getLocalizedPath(p.link, lang)}
                class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                target={p.link.startsWith('http') ? '_blank' : '_self'}
              >
                <span>Launch Tool</span>
                <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
```

### 3. Create `src/pages/index.astro` (English Default Route)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import HeroSection from '@/components/sections/HeroSection.astro';
import ProductsSection from '@/components/sections/ProductsSection.astro';

const defaultLang = 'en';
---

<BaseLayout
  title="Lade Stack — AI-Powered Developer Platform | Build Smarter, Ship Faster"
  description="The complete AI-powered development ecosystem. Intelligent tools for coding, API testing, website building, file sharing, and documentation — all free."
  lang={defaultLang}
>
  <HeroSection lang={defaultLang} />
  <ProductsSection lang={defaultLang} />
</BaseLayout>
```

### 4. Create `src/pages/[lang]/index.astro` (Multi-Language Route)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import HeroSection from '@/components/sections/HeroSection.astro';
import ProductsSection from '@/components/sections/ProductsSection.astro';
import { languages, type SupportedLocale } from '@/i18n/config';

export function getStaticPaths() {
  // Exclude default 'en' because it lives at root index.astro
  return Object.keys(languages)
    .filter((l) => l !== 'en')
    .map((lang) => ({
      params: { lang },
    }));
}

const { lang } = Astro.params as { lang: SupportedLocale };
---

<BaseLayout
  title="Lade Stack — AI-Powered Developer Platform | Build Smarter, Ship Faster"
  description="The complete AI-powered development ecosystem. Intelligent tools for coding, API testing, website building, file sharing, and documentation — all free."
  lang={lang}
>
  <HeroSection lang={lang} />
  <ProductsSection lang={lang} />
</BaseLayout>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to ensure zero type errors.
2. Run `npm run build`:
   - Verify `dist/index.html` is generated.
   - Verify `dist/zh/index.html`, `dist/ko/index.html`, `dist/ja/index.html`, `dist/tr/index.html`, `dist/pt-BR/index.html` are all generated.
3. Open `http://localhost:4321` and switch between languages in the header:
   - Notice the translated titles, buttons, and stats update immediately with 0 page reload delay.
