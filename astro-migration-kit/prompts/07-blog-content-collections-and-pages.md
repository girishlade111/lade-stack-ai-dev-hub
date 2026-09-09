# Step 07: Astro Content Collections Blog System & Article Reader

---

## 📋 Context & Goal for AI Assistant

You are an expert Content Architect and Technical Writer. 
Your task is to implement the official **Astro Content Collections** blog system for **Lade Stack**:
1. **`src/content/config.ts`**: Strict Zod frontmatter schema validation.
2. **Markdown Migration**: Setup markdown posts in `src/content/blog/*.md` with syntax highlighting.
3. **Blog Listing Page (`/blog` and `/[lang]/blog`)**: Live category pills, featured hero post, and real-time Vanilla JS search bar.
4. **Blog Article Reader (`/blog/[...slug]` and `/[lang]/blog/[...slug]`)**: Reading time, Table of Contents, social share, copy code buttons, and `BlogPosting` JSON-LD.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
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
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

### 2. Sample Post: `src/content/blog/future-of-ai-in-software-development.md`

```markdown
---
title: "The Future of AI in Software Development: 2025 and Beyond"
description: "Explore how generative models, agentic workflows, and automated verification are fundamentally reshaping modern software engineering."
pubDate: 2025-01-15
author: "Girish Lade"
category: "AI Development"
readTime: "8 min read"
coverImage: "/blog-covers/ai-dev.svg"
featured: true
tags: ["AI", "LLMs", "DevTools", "Architecture"]
---

Artificial Intelligence is no longer just an autocomplete assistant. The next evolution of development environments merges multi-agent workflows with deterministic compilers.

## 1. The Shift from Autocomplete to Autonomous Agents

Developers spend less time writing syntax and more time articulating system constraints.

```typescript
interface AgentTask {
  goal: string;
  contextFiles: string[];
  verificationCriteria: string[];
}
```

## 2. Automated Testing & Verification Loops

Autonomous agents must operate within strict feedback loops. Compile errors and failed unit tests provide immediate correction signals before human code review.
```

### 3. Create `src/pages/blog/index.astro` (Blog Index with Real-time Search)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import { getLocalizedPath } from '@/i18n/utils';
import { Icon } from 'astro-icon/components';

const defaultLang = 'en';
const allPosts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

const categories = ['All', ...new Set(allPosts.map((p) => p.data.category))];
const featuredPost = allPosts.find((p) => p.data.featured) || allPosts[0];
---

<BaseLayout
  title="Engineering & AI Development Blog | Lade Stack"
  description="Explore technical tutorials, architecture blueprints, and AI development insights by Girish Lade."
  lang={defaultLang}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h1 class="font-serif text-4xl sm:text-6xl font-bold text-foreground">
        Engineering Insights
      </h1>
      <p class="mt-4 text-base sm:text-lg text-muted-foreground">
        Deep dives into AI systems, scalable SaaS architecture, and developer productivity.
      </p>

      <!-- Real-time Search Input (Vanilla JS) -->
      <div class="mt-8 relative max-w-md mx-auto">
        <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          id="blog-search-input"
          placeholder="Search articles by title or keyword..."
          class="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
      </div>

      <!-- Category Filter Pills (Vanilla JS) -->
      <div class="flex flex-wrap items-center justify-center gap-2 mt-6" id="category-pills">
        {
          categories.map((cat, idx) => (
            <button
              type="button"
              class={`category-pill px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                idx === 0
                  ? 'bg-primary text-primary-foreground border-primary active-pill'
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

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
      {
        allPosts.map((post) => (
          <article
            class="article-card group p-6 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all flex flex-col justify-between"
            data-category={post.data.category}
            data-title={post.data.title.toLowerCase()}
            data-desc={post.data.description.toLowerCase()}
          >
            <div>
              <div class="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {post.data.category}
                </span>
                <span>{post.data.readTime}</span>
              </div>
              <h2 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                <a href={getLocalizedPath(`/blog/${post.slug}`, defaultLang)}>
                  {post.data.title}
                </a>
              </h2>
              <p class="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.data.description}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.data.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span class="font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read article <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))
      }
    </div>
  </div>
</BaseLayout>

<script>
  function setupBlogSearch() {
    const input = document.getElementById('blog-search-input') as HTMLInputElement | null;
    const cards = document.querySelectorAll<HTMLElement>('.article-card');
    const pills = document.querySelectorAll<HTMLButtonElement>('.category-pill');

    let currentCategory = 'All';
    let currentQuery = '';

    function filterPosts() {
      cards.forEach((card) => {
        const cat = card.getAttribute('data-category') || '';
        const title = card.getAttribute('data-title') || '';
        const desc = card.getAttribute('data-desc') || '';

        const matchesCat = currentCategory === 'All' || cat === currentCategory;
        const matchesQuery =
          currentQuery === '' || title.includes(currentQuery) || desc.includes(currentQuery);

        card.style.display = matchesCat && matchesQuery ? 'flex' : 'none';
      });
    }

    if (input) {
      input.addEventListener('input', (e) => {
        currentQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
        filterPosts();
      });
    }

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => {
          p.classList.remove('bg-primary', 'text-primary-foreground', 'border-primary');
          p.classList.add('bg-card', 'text-muted-foreground');
        });
        pill.classList.add('bg-primary', 'text-primary-foreground', 'border-primary');
        pill.classList.remove('bg-card', 'text-muted-foreground');

        currentCategory = pill.getAttribute('data-category') || 'All';
        filterPosts();
      });
    });
  }

  setupBlogSearch();
  document.addEventListener('astro:page-load', setupBlogSearch);
</script>
```

### 4. Create `src/pages/blog/[...slug].astro` (Article Reader with Copy Code)

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import { Icon } from 'astro-icon/components';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();

const defaultLang = 'en';

const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  description: post.data.description,
  datePublished: post.data.pubDate.toISOString(),
  author: {
    '@type': 'Person',
    name: post.data.author,
    url: 'https://ladestack.in/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lade Stack',
    url: 'https://ladestack.in',
  },
};
---

<BaseLayout
  title={post.data.title}
  description={post.data.description}
  lang={defaultLang}
  article={{
    publishedTime: post.data.pubDate.toISOString(),
    author: post.data.author,
    tags: post.data.tags,
  }}
  structuredData={articleStructuredData}
>
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <!-- Header info -->
    <div class="mb-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
        {post.data.category}
      </div>
      <h1 class="font-serif text-3xl sm:text-5xl font-bold text-foreground leading-tight">
        {post.data.title}
      </h1>
      <div class="mt-4 flex items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
        <span>By {post.data.author}</span>
        <span>•</span>
        <span>{post.data.pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        <span>•</span>
        <span>{post.data.readTime}</span>
      </div>
    </div>

    <!-- Rendered Markdown Body -->
    <div class="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary prose-code:text-primary prose-pre:rounded-2xl">
      <Content />
    </div>
  </article>
</BaseLayout>

<script>
  // Add copy button to pre code blocks
  function addCopyButtons() {
    document.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.copy-code-btn')) return;
      pre.style.position = 'relative';

      const btn = document.createElement('button');
      btn.className =
        'copy-code-btn absolute top-3 right-3 px-2.5 py-1 text-xs rounded-lg bg-card/80 border border-border text-foreground hover:bg-muted font-mono transition-all';
      btn.innerText = 'Copy';

      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.innerText || '';
        await navigator.clipboard.writeText(code);
        btn.innerText = 'Copied!';
        setTimeout(() => {
          btn.innerText = 'Copy';
        }, 2000);
      });

      pre.appendChild(btn);
    });
  }

  addCopyButtons();
  document.addEventListener('astro:page-load', addCopyButtons);
</script>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to ensure Content Collection schemas and types compile.
2. Run `npm run build` and check `dist/blog/index.html` and `dist/blog/[slug]/index.html`.
3. Open `http://localhost:4321/blog`:
   - Test the search bar: type "AI" and verify post cards filter instantaneously.
   - Click category pills and verify only relevant articles display.
4. Click into an article:
   - Check typography rendering.
   - Click "Copy" on a code block and verify clipboard contents.
