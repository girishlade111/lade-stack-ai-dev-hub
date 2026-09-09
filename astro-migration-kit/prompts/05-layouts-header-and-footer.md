# Step 05: Master Layout, Header Navigation & Global Footer

---

## 📋 Context & Goal for AI Assistant

You are an expert Frontend Engineer. 
Your task is to implement the core layout and shell components for the **Lade Stack** Astro project in **100% Pure Astro & Vanilla JS** (Zero React):
1. **`src/layouts/BaseLayout.astro`**: Universal HTML shell, head preloads, analytics, theme script, and structural slot.
2. **`src/components/Header.astro`**: Sticky desktop navigation, localized links, language switcher, theme toggle, and accessible mobile drawer in Vanilla JS.
3. **`src/components/Footer.astro`**: Localized footer links, brand bio, newsletter subscription card, and social links.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/layouts/BaseLayout.astro`

```astro
---
import '@/styles/global.css';
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
import SEO from '@/components/SEO.astro';
import { languages, defaultLocale, type SupportedLocale } from '@/i18n/config';

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  lang?: SupportedLocale;
  structuredData?: object | object[];
}

const {
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  lang = defaultLocale,
  structuredData,
} = Astro.props;

const currentLangMeta = languages[lang] || languages[defaultLocale];
---

<!doctype html>
<html lang={lang} dir={currentLangMeta.dir}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Performance: Zero-FOUC Theme Script -->
    <script is:inline>
      (function () {
        try {
          var t = localStorage.getItem('ladestack-theme');
          var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (t === 'dark' || (!t && p)) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = '#050505';
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.backgroundColor = '#F5F3EB';
          }
        } catch (e) {}
      })();
    </script>

    <!-- Google Fonts Preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
      />
    </noscript>

    <!-- SEO & Metadata -->
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      ogImage={ogImage}
      lang={lang}
      structuredData={structuredData}
    />

    <!-- Microsoft Clarity Analytics (Deferred) -->
    <script is:inline defer>
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'xgt2pesgjz');
    </script>

    <!-- Umami Analytics (Deferred) -->
    <script
      is:inline
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="7b00c363-0fe6-4bb0-af62-a9bc894ccdda"></script>
  </head>
  <body class="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
    <Header lang={lang} />
    <main class="flex-1">
      <slot />
    </main>
    <Footer lang={lang} />
  </body>
</html>
```

### 2. Create `src/components/Header.astro`
Pure Astro & Vanilla JS navigation with mobile drawer:

```astro
---
import { useTranslations, getLocalizedPath } from '@/i18n/utils';
import type { SupportedLocale } from '@/i18n/config';
import LanguageSwitcher from '@/components/LanguageSwitcher.astro';
import ThemeToggle from '@/components/ThemeToggle.astro';
import { Icon } from 'astro-icon/components';

interface Props {
  lang: SupportedLocale;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<header class="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href={getLocalizedPath('/', lang)} class="flex items-center gap-2 group">
      <span class="font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
        Lade <span class="text-primary font-sans font-semibold">Stack</span>
      </span>
      <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
      <a href={getLocalizedPath('/#products', lang)} class="hover:text-foreground transition-colors">
        {t('nav.products')}
      </a>
      <a href={getLocalizedPath('/apps', lang)} class="hover:text-foreground transition-colors">
        {t('nav.apps')}
      </a>
      <a href={getLocalizedPath('/blog', lang)} class="hover:text-foreground transition-colors">
        {t('nav.blog')}
      </a>
      <a href={getLocalizedPath('/about', lang)} class="hover:text-foreground transition-colors">
        {t('nav.about')}
      </a>
      <a href={getLocalizedPath('/docs', lang)} class="hover:text-foreground transition-colors">
        {t('nav.docs')}
      </a>
      <a href={getLocalizedPath('/contact', lang)} class="hover:text-foreground transition-colors">
        {t('nav.contact')}
      </a>
    </nav>

    <!-- Header Actions (Right) -->
    <div class="hidden md:flex items-center gap-3">
      <LanguageSwitcher currentLang={lang} />
      <ThemeToggle />
      <a
        href={getLocalizedPath('/apps', lang)}
        class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      >
        {t('nav.launchApp')}
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button
        type="button"
        id="mobile-menu-btn"
        class="p-2 rounded-xl border border-border text-foreground hover:bg-muted focus:outline-none"
        aria-label="Toggle Mobile Menu"
        aria-expanded="false"
      >
        <Icon name="lucide:menu" class="w-5 h-5" id="mobile-menu-icon" />
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Drawer (Pure Vanilla JS) -->
  <div
    id="mobile-drawer"
    class="hidden md:hidden fixed inset-x-0 top-16 bg-background/98 border-b border-border shadow-2xl p-6 transition-all duration-300 backdrop-blur-xl"
  >
    <nav class="flex flex-col gap-4 text-base font-medium">
      <a href={getLocalizedPath('/#products', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.products')}
      </a>
      <a href={getLocalizedPath('/apps', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.apps')}
      </a>
      <a href={getLocalizedPath('/blog', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.blog')}
      </a>
      <a href={getLocalizedPath('/about', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.about')}
      </a>
      <a href={getLocalizedPath('/docs', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.docs')}
      </a>
      <a href={getLocalizedPath('/contact', lang)} class="mobile-nav-link py-2 border-b border-border/50 text-foreground">
        {t('nav.contact')}
      </a>
      <div class="pt-2 flex items-center justify-between">
        <span class="text-sm text-muted-foreground">{t('common.language')}</span>
        <LanguageSwitcher currentLang={lang} />
      </div>
      <a
        href={getLocalizedPath('/apps', lang)}
        class="mt-2 w-full text-center py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold"
      >
        {t('nav.launchApp')}
      </a>
    </nav>
  </div>
</header>

<script>
  function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      const isHidden = drawer.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
    });

    const links = drawer.querySelectorAll('.mobile-nav-link');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  setupMobileMenu();
  document.addEventListener('astro:page-load', setupMobileMenu);
</script>
```

### 3. Create `src/components/Footer.astro`
Localized global footer with newsletter and links:

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
const currentYear = new Date().getFullYear();
---

<footer class="border-t border-border bg-card/40 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- Brand column -->
      <div class="md:col-span-1 space-y-4">
        <a href={getLocalizedPath('/', lang)} class="font-serif text-2xl font-bold text-foreground">
          Lade <span class="text-primary font-sans">Stack</span>
        </a>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Enterprise-grade AI developer tools designed to boost productivity by 10x. 100% Free Forever.
        </p>
        <div class="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:text-foreground hover:bg-muted transition-colors" aria-label="GitHub">
            <Icon name="lucide:github" class="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:text-foreground hover:bg-muted transition-colors" aria-label="LinkedIn">
            <Icon name="lucide:linkedin" class="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:text-foreground hover:bg-muted transition-colors" aria-label="Instagram">
            <Icon name="lucide:instagram" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Platform</h4>
        <ul class="space-y-2.5 text-sm text-muted-foreground">
          <li><a href={getLocalizedPath('/apps', lang)} class="hover:text-foreground transition-colors">{t('nav.apps')}</a></li>
          <li><a href={getLocalizedPath('/ai-code-viewer-ai', lang)} class="hover:text-foreground transition-colors">AI Code Viewer</a></li>
          <li><a href={getLocalizedPath('/docs', lang)} class="hover:text-foreground transition-colors">{t('nav.docs')}</a></li>
          <li><a href={getLocalizedPath('/blog', lang)} class="hover:text-foreground transition-colors">{t('nav.blog')}</a></li>
        </ul>
      </div>

      <!-- Company & Support -->
      <div>
        <h4 class="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
        <ul class="space-y-2.5 text-sm text-muted-foreground">
          <li><a href={getLocalizedPath('/about', lang)} class="hover:text-foreground transition-colors">{t('nav.about')}</a></li>
          <li><a href={getLocalizedPath('/contact', lang)} class="hover:text-foreground transition-colors">{t('nav.contact')}</a></li>
          <li><a href={getLocalizedPath('/support', lang)} class="hover:text-foreground transition-colors">Support Center</a></li>
          <li><a href={getLocalizedPath('/privacy', lang)} class="hover:text-foreground transition-colors">Privacy Policy</a></li>
          <li><a href={getLocalizedPath('/terms', lang)} class="hover:text-foreground transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Newsletter Box -->
      <div>
        <h4 class="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Stay Connected</h4>
        <p class="text-xs text-muted-foreground mb-3">
          Get weekly updates on new AI developer tools and engineering articles.
        </p>
        <form class="space-y-2" onsubmit="event.preventDefault(); alert('Subscribed successfully!');">
          <input
            type="email"
            placeholder="developer@company.com"
            required
            class="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            class="w-full py-2 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
      <p>© {currentYear} Lade Stack. Built by Girish Lade. {t('common.copyright')}</p>
      <p class="text-xs">Built with 100% Pure Astro & Tailwind CSS — 0 KB React Overhead.</p>
    </div>
  </div>
</footer>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to verify TypeScript interfaces.
2. Build with `npm run build` and run `npm run preview`.
3. Test the mobile menu toggle on small screen widths.
4. Verify all navigation links correctly route with and without the language prefix (`/` vs `/zh/`).
