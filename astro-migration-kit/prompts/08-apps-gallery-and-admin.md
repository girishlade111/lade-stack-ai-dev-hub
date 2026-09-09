# Step 08: Apps Gallery & Apps Admin Management Tool

---

## 📋 Context & Goal for AI Assistant

You are an expert Full-Stack Developer and UI Architect.
Your task is to implement the Developer Apps Ecosystem for **Lade Stack**:
1. **`src/pages/apps/index.astro`**: High-performance gallery of AI tools loaded from `src/data/apps.json` with instant Vanilla JS category filtering and search.
2. **`src/pages/apps/admin.astro`**: Local developer administration dashboard in **100% Pure HTML & Vanilla JS** (Zero React) to add, preview, edit, and export `apps.json`.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Ensure `src/data/apps.json` Exists
Create or copy `apps.json` into `src/data/apps.json`:

```json
[
  {
    "id": "code-enhance-ai",
    "slug": "ai-code-viewer-ai",
    "title": "CodeEnhance AI",
    "tagline": "AI-Powered Code Viewer & Enhancer",
    "description": "Transform your frontend code with AI intelligence. Edit, compile, and enhance HTML, CSS & JS with real-time AI assistance.",
    "icon": "lucide:code-2",
    "category": "AI Tools",
    "features": ["Real-time Compilation", "AI Code Suggestions", "Syntax Highlighting", "One-Click Export"],
    "timeToValue": "Instant",
    "lifetimeFree": true,
    "landingUrl": "/ai-code-viewer-ai",
    "popularityScore": 98
  },
  {
    "id": "api-testing-platform",
    "slug": "api-testing-platform",
    "title": "API Testing Platform",
    "tagline": "Automated REST & GraphQL Testing Platform",
    "description": "Enterprise-grade API testing platform with AI-powered test generation, automated validation, and real-time monitoring.",
    "icon": "lucide:network",
    "category": "Developer Utilities",
    "features": ["REST & GraphQL Support", "Automated Validation", "CI/CD Integration", "Performance Benchmarks"],
    "timeToValue": "2 mins",
    "lifetimeFree": true,
    "landingUrl": "https://ladestack.in/api-testing-platform",
    "popularityScore": 95
  }
]
```

### 2. Create `src/pages/apps/index.astro` (Apps Gallery Showcase)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import appsData from '@/data/apps.json';
import { getLocalizedPath } from '@/i18n/utils';
import { Icon } from 'astro-icon/components';

const defaultLang = 'en';
const categories = ['All', ...new Set(appsData.map((a) => a.category))];
---

<BaseLayout
  title="Apps Gallery — AI Developer Tools Suite | Lade Stack"
  description="Explore Lade Stack's suite of AI-powered developer tools: code editor, API testing, website builder, file sharing, and documentation AI."
  lang={defaultLang}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h1 class="font-serif text-4xl sm:text-6xl font-bold text-foreground">
        Apps Gallery
      </h1>
      <p class="mt-4 text-base sm:text-lg text-muted-foreground">
        Discover specialized AI-powered utilities engineered for speed, privacy, and productivity.
      </p>

      <!-- Category Filter Pills (Vanilla JS) -->
      <div class="flex flex-wrap items-center justify-center gap-2 mt-8" id="apps-filter-pills">
        {
          categories.map((cat, idx) => (
            <button
              type="button"
              class={`app-pill px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                idx === 0
                  ? 'bg-primary text-primary-foreground border-primary active'
                  : 'bg-card border-border text-muted-foreground hover:bg-muted'
              }`}
              data-category={cat}
            >
              {cat}
            </button>
          ))
        }
      </div>
    </div>

    <!-- Apps Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="apps-grid">
      {
        appsData.map((app) => (
          <div
            class="app-card group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            data-category={app.category}
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon name={app.icon} class="w-6 h-6" />
                </div>
                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  {app.category}
                </span>
              </div>
              <h2 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {app.title}
              </h2>
              <p class="text-xs font-semibold text-primary/80 mt-1">{app.tagline}</p>
              <p class="text-sm text-muted-foreground mt-3 leading-relaxed">{app.description}</p>

              <!-- Feature Bullets -->
              <ul class="mt-6 space-y-2 text-xs text-muted-foreground">
                {app.features.map((f) => (
                  <li class="flex items-center gap-2">
                    <Icon name="lucide:check" class="w-3.5 h-3.5 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
              <span class="text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10">
                100% Free Forever
              </span>
              <a
                href={app.landingUrl.startsWith('http') ? app.landingUrl : getLocalizedPath(app.landingUrl, defaultLang)}
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
                target={app.landingUrl.startsWith('http') ? '_blank' : '_self'}
              >
                <span>Launch App</span>
                <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</BaseLayout>

<script>
  function setupAppsFilter() {
    const pills = document.querySelectorAll<HTMLButtonElement>('.app-pill');
    const cards = document.querySelectorAll<HTMLElement>('.app-card');

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => {
          p.classList.remove('bg-primary', 'text-primary-foreground', 'border-primary');
          p.classList.add('bg-card', 'text-muted-foreground');
        });
        pill.classList.add('bg-primary', 'text-primary-foreground', 'border-primary');
        pill.classList.remove('bg-card', 'text-muted-foreground');

        const cat = pill.getAttribute('data-category') || 'All';
        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          card.style.display = cat === 'All' || cardCat === cat ? 'flex' : 'none';
        });
      });
    });
  }

  setupAppsFilter();
  document.addEventListener('astro:page-load', setupAppsFilter);
</script>
```

### 3. Create `src/pages/apps/admin.astro` (Pure HTML & Vanilla JS Admin)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import appsData from '@/data/apps.json';

const defaultLang = 'en';
---

<BaseLayout title="Apps Administration Dashboard | Lade Stack" noIndex={true} lang={defaultLang}>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex items-center justify-between mb-8 pb-6 border-b border-border">
      <div>
        <h1 class="font-serif text-3xl font-bold text-foreground">Apps Admin Dashboard</h1>
        <p class="text-sm text-muted-foreground mt-1">Manage applications directory and export updated JSON.</p>
      </div>
      <button
        id="export-json-btn"
        class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
      >
        Export & Copy JSON
      </button>
    </div>

    <!-- Form for adding app -->
    <div class="p-8 rounded-3xl border border-border bg-card mb-12">
      <h2 class="text-lg font-bold text-foreground mb-6">Add New Application</h2>
      <form id="add-app-form" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-xs font-semibold text-foreground mb-2">Title</label>
          <input type="text" id="app-title" required class="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-foreground mb-2">Tagline</label>
          <input type="text" id="app-tagline" required class="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-foreground mb-2">Description</label>
          <textarea id="app-desc" rows="3" required class="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-foreground mb-2">Category</label>
          <input type="text" id="app-category" placeholder="AI Tools" required class="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-foreground mb-2">Landing URL</label>
          <input type="text" id="app-url" placeholder="/my-app or https://..." required class="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm" />
        </div>
        <div class="sm:col-span-2">
          <button type="submit" class="px-6 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm">
            Add Application to List
          </button>
        </div>
      </form>
    </div>

    <!-- Raw JSON Preview -->
    <div class="p-6 rounded-3xl border border-border bg-muted/40">
      <h3 class="text-sm font-semibold text-foreground mb-3">Live JSON Output</h3>
      <pre id="json-preview" class="p-4 rounded-2xl bg-card border border-border font-mono text-xs overflow-x-auto text-foreground max-h-96">{JSON.stringify(appsData, null, 2)}</pre>
    </div>
  </div>
</BaseLayout>

<script define:vars={{ initialApps: appsData }}>
  let apps = [...initialApps];
  const form = document.getElementById('add-app-form');
  const preview = document.getElementById('json-preview');
  const exportBtn = document.getElementById('export-json-btn');

  function updatePreview() {
    if (preview) preview.innerText = JSON.stringify(apps, null, 2);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('app-title').value;
      const tagline = document.getElementById('app-tagline').value;
      const description = document.getElementById('app-desc').value;
      const category = document.getElementById('app-category').value;
      const landingUrl = document.getElementById('app-url').value;

      const newApp = {
        id: title.toLowerCase().replace(/\s+/g, '-'),
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        title,
        tagline,
        description,
        icon: 'lucide:box',
        category,
        features: ['Fast', 'Free'],
        timeToValue: 'Instant',
        lifetimeFree: true,
        landingUrl,
        popularityScore: 50,
      };

      apps.push(newApp);
      updatePreview();
      form.reset();
      alert('Application added! Click "Export & Copy JSON" to update apps.json.');
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(JSON.stringify(apps, null, 2));
      alert('JSON copied to clipboard! Paste it into src/data/apps.json.');
    });
  }
</script>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` and `npm run build`.
2. Open `http://localhost:4321/apps`:
   - Verify all applications render from `apps.json`.
   - Click category filter pills and verify instant filtering.
3. Open `http://localhost:4321/apps/admin`:
   - Fill in the form and click "Add Application to List".
   - Verify the Live JSON Output updates immediately.
   - Click "Export & Copy JSON" and verify clipboard content.
