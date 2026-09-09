# Step 09: Public Pages (About, Contact with FAQ, Docs, Product Landing, Legal & 404)

---

## 📋 Context & Goal for AI Assistant

You are an expert Web Application Engineer.
Your task is to build all remaining public and legal pages for the **Lade Stack** Astro project in **100% Pure Astro & Vanilla JS** (Zero React):
1. **`/about`**: Founder story (Girish Lade), engineering vision, tech stack badges, and social links.
2. **`/contact`**: 24/7 support cards, FAQ accordion, and interactive contact form with instant validation.
3. **`/docs`**: Developer guides, API testing manuals, and sidebar navigation.
4. **`/ai-code-viewer-ai`**: Dedicated product showcase landing for CodeEnhance AI.
5. **Legal & Support**: `/privacy`, `/terms`, `/support`.
6. **`404.astro`**: Custom 404 page.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/pages/about.astro`

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { Icon } from 'astro-icon/components';

const defaultLang = 'en';

const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lade Stack',
  url: 'https://ladestack.in/about',
  founder: {
    '@type': 'Person',
    name: 'Girish Lade',
    jobTitle: 'Founder & Lead Developer',
    url: 'https://github.com/girishlade111',
  },
};
---

<BaseLayout
  title="About Lade Stack — Visionary AI Development Tools & Founder Story"
  description="Discover how Girish Lade founded Lade Stack to democratize advanced AI developer tools for creators worldwide."
  lang={defaultLang}
  structuredData={aboutStructuredData}
>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <!-- Header -->
    <div class="text-center mb-16">
      <span class="text-xs font-semibold text-primary uppercase tracking-widest">Our Story</span>
      <h1 class="font-serif text-4xl sm:text-6xl font-bold text-foreground mt-2">
        Empowering Developers Through AI
      </h1>
      <p class="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
        Lade Stack began with a singular mission: build enterprise-grade software tools that are 100% free and open for every engineer on earth.
      </p>
    </div>

    <!-- Founder Section -->
    <div class="p-8 sm:p-12 rounded-3xl border border-border bg-card mb-16 shadow-sm">
      <div class="flex flex-col sm:flex-row items-center gap-8">
        <div class="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-primary/30 p-1 flex-shrink-0">
          <div class="w-full h-full rounded-full bg-primary/20 flex items-center justify-center font-serif text-3xl font-bold text-primary">
            GL
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-foreground">Girish Lade</h2>
          <p class="text-xs font-semibold text-primary mt-1">Founder & Lead Software Architect</p>
          <p class="text-sm text-muted-foreground mt-4 leading-relaxed">
            "We believe that the barriers to building transformative software should be zero. By engineering autonomous testing, documentation AI, and instant compilation into free cloud tools, we help developers build 10x faster."
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl border border-border hover:bg-muted text-foreground transition-colors" aria-label="GitHub">
              <Icon name="lucide:github" class="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl border border-border hover:bg-muted text-foreground transition-colors" aria-label="LinkedIn">
              <Icon name="lucide:linkedin" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</BaseLayout>
```

### 2. Create `src/pages/contact.astro` (with FAQ Accordion & Form)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { Icon } from 'astro-icon/components';

const defaultLang = 'en';

const faqs = [
  {
    q: 'How quickly can I expect a response from support?',
    a: 'We operate 24/7 and typically respond within a few hours to email queries.',
  },
  {
    q: 'Are all tools on Lade Stack really free forever?',
    a: 'Yes! Every developer tool in our ecosystem is 100% free with no hidden credit card requirements or paywalls.',
  },
  {
    q: 'Can I integrate Lade Stack APIs into my CI/CD pipeline?',
    a: 'Absolutely. Our API testing and verification suites support native GitHub Actions and webhook integrations.',
  },
];
---

<BaseLayout
  title="Contact Lade Stack — 24/7 Developer Support"
  description="Get in touch with Lade Stack for AI development assistance, platform inquiries, or technical support."
  lang={defaultLang}
>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="text-center mb-16">
      <span class="text-xs font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
      <h1 class="font-serif text-4xl sm:text-6xl font-bold text-foreground mt-2">
        Let's Build Together
      </h1>
      <p class="mt-4 text-sm sm:text-base text-muted-foreground">
        Reach out directly to the core engineering team. We are available around the clock.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <!-- Contact Info Cards -->
      <div class="space-y-6">
        <div class="p-6 rounded-3xl border border-border bg-card">
          <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Icon name="lucide:mail" class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-foreground">Email Support</h3>
          <p class="text-xs text-muted-foreground mt-1">Replies within a few hours</p>
          <a href="mailto:admin@ladestack.in" class="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
            admin@ladestack.in
          </a>
        </div>

        <div class="p-6 rounded-3xl border border-border bg-card">
          <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Icon name="lucide:map-pin" class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-foreground">Location</h3>
          <p class="text-xs text-muted-foreground mt-1">Global remote headquarters</p>
          <p class="mt-3 text-sm font-semibold text-foreground">Mumbai, India</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="p-8 rounded-3xl border border-border bg-card shadow-sm">
        <h2 class="text-xl font-bold text-foreground mb-6">Send a Message</h2>
        <form id="contact-form" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-foreground mb-1.5">Your Name</label>
            <input type="text" id="c-name" required class="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-foreground mb-1.5">Email Address</label>
            <input type="email" id="c-email" required class="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-foreground mb-1.5">Message</label>
            <textarea id="c-msg" rows="4" required class="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
          </div>
          <button
            type="submit"
            id="c-submit-btn"
            class="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
          >
            Send Message
          </button>
        </form>
        <div id="c-success-msg" class="hidden mt-4 p-4 rounded-xl bg-primary/10 border border-primary/30 text-xs font-semibold text-primary text-center">
          Thank you! Your message has been received. We will respond shortly.
        </div>
      </div>
    </div>

    <!-- FAQ Accordion (Semantic details/summary styled with Tailwind) -->
    <div class="max-w-3xl mx-auto">
      <h2 class="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div class="space-y-4">
        {
          faqs.map((faq) => (
            <details class="group p-6 rounded-2xl border border-border bg-card transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center justify-between cursor-pointer font-semibold text-foreground text-sm list-none">
                <span>{faq.q}</span>
                <Icon name="lucide:chevron-down" class="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <p class="mt-4 text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border/50">
                {faq.a}
              </p>
            </details>
          ))
        }
      </div>
    </div>
  </div>
</BaseLayout>

<script>
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const success = document.getElementById('c-success-msg');
  const btn = document.getElementById('c-submit-btn') as HTMLButtonElement | null;

  if (form && success && btn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      btn.innerText = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        form.reset();
        form.style.display = 'none';
        success.classList.remove('hidden');
      }, 1000);
    });
  }
</script>
```

### 3. Create `src/pages/404.astro` (Custom Not Found)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getLocalizedPath } from '@/i18n/utils';
import { Icon } from 'astro-icon/components';

const defaultLang = 'en';
---

<BaseLayout title="404 — Page Not Found | Lade Stack" noIndex={true} lang={defaultLang}>
  <div class="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
    <div>
      <div class="font-serif text-8xl font-bold text-primary">404</div>
      <h1 class="text-2xl sm:text-3xl font-bold text-foreground mt-4">Page Not Found</h1>
      <p class="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
        The page you are looking for might have been moved, renamed, or temporarily unavailable.
      </p>
      <div class="mt-8">
        <a
          href={getLocalizedPath('/', defaultLang)}
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  </div>
</BaseLayout>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to verify types across all public pages.
2. Run `npm run build` and inspect `dist/about/index.html`, `dist/contact/index.html`, and `dist/404.html`.
3. Open `http://localhost:4321/contact`:
   - Click FAQ items and verify smooth disclosure accordion.
   - Submit the contact form and verify the instant success state message.
