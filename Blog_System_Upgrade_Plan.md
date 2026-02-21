# Plan to implement

## Blog System Upgrade Plan

### Context

The current blog system has 5-6 hardcoded posts duplicated across two files, no pagination, broken image paths, numeric ID routing (not SEO-friendly), and no centralized data source. This upgrade will create 25+ SEO-optimized blog posts, centralize data, add slug-based routing, implement pagination, and improve content rendering – all while preserving the existing UI design.

**Important:** This is a Vite + React SPA, NOT Next.js. No SSR, no next/image, no next/dynamic.

---

### Files to Create

- `src/data/blogPosts.ts` – Centralized blog data (metadata only: title, slug, excerpt, category, date, etc.)
- `src/data/blogContent.ts` – Full article content for all 25+ posts (separate file for code splitting)

### Files to Modify

- `src/pages/Blog.tsx` – Import from centralized data, add pagination, fix image paths
- `src/pages/BlogPost.tsx` – Switch to slug-based lookup, import from centralized data, improve content renderer
- `src/App.tsx` – Change route from `/blog/:id` to `/blog/:slug`

### Files to Delete

- `src/pages/Blog` (extensionless stale duplicate file)

---

### Step 1: Create Centralized Blog Data (`src/data/blogPosts.ts`)

Define a `BlogPost` TypeScript interface and export an array of 25+ blog posts.

```typescript
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;         // Full article content (markdown-like format)
  image: string;           // Maps to /blog-covers/{image}.svg
  readTime: string;        // e.g. "12 min read"
  date: string;            // YYYY-MM-DD
  author: string;
  keywords: string[];      // SEO keywords
  metaDescription: string; // Meta description for SEO
  ogTitle: string;         // Open Graph title
  ogDescription: string;   // Open Graph description
}
```

**25 blog posts across 10 categories (2-3 posts each):**

| # | Category | Title (abbreviated) | Slug |
|---|---|---|---|
| 1 | AI Development | The Future of AI in Software Development | future-of-ai-in-software-development |
| 2 | AI Development | Building AI-Powered Code Review Systems | building-ai-powered-code-review-systems |
| 3 | AI Development | Machine Learning Pipelines for Web Developers | machine-learning-pipelines-for-web-developers |
| 4 | Generative AI | Generative AI for Content Creation | generative-ai-for-content-creation |
| 5 | Generative AI | Building RAG Applications with Vector Databases | building-rag-applications-vector-databases |
| 6 | Generative AI | Fine-Tuning LLMs for Domain-Specific Tasks | fine-tuning-llms-domain-specific-tasks |
| 7 | SaaS Architecture | Multi-Tenant SaaS Architecture Patterns | multi-tenant-saas-architecture-patterns |
| 8 | SaaS Architecture | Building Subscription Billing Systems | building-subscription-billing-systems |
| 9 | Backend as a Service | BaaS Platforms Compared: Firebase vs Supabase vs Appwrite | baas-platforms-compared-firebase-supabase-appwrite |
| 10 | Backend as a Service | Building Serverless Backends with BaaS | building-serverless-backends-with-baas |
| 11 | Backend as a Service | Real-Time Data Sync with Backend Services | real-time-data-sync-backend-services |
| 12 | API Design & Scaling | REST vs GraphQL: Choosing the Right API Paradigm | rest-vs-graphql-choosing-right-api-paradigm |
| 13 | API Design & Scaling | API Rate Limiting and Throttling Strategies | api-rate-limiting-throttling-strategies |
| 14 | API Design & Scaling | Building API Gateways for Microservices | building-api-gateways-microservices |
| 15 | Cloud Computing | Cloud Cost Optimization Strategies for Startups | cloud-cost-optimization-strategies-startups |
| 16 | Cloud Computing | Multi-Cloud Architecture: AWS vs Azure vs GCP | multi-cloud-architecture-aws-azure-gcp |
| 17 | Virtual Machines | Container vs VM: When to Use Each | containers-vs-vms-when-to-use-each |
| 18 | Virtual Machines | Optimizing VM Performance for Production Workloads | optimizing-vm-performance-production-workloads |
| 19 | DevOps & CI/CD | GitOps: Managing Infrastructure with Git | gitops-managing-infrastructure-with-git |
| 20 | DevOps & CI/CD | Building Zero-Downtime Deployment Pipelines | building-zero-downtime-deployment-pipelines |
| 21 | DevOps & CI/CD | Infrastructure as Code with Terraform and Pulumi | infrastructure-as-code-terraform-pulumi |
| 22 | Security in Web Apps | Zero Trust Security for Web Applications | zero-trust-security-web-applications |
| 23 | Security in Web Apps | OWASP Top 10: Complete Mitigation Guide | owasp-top-10-complete-mitigation-guide |
| 24 | Security in Web Apps | Implementing OAuth 2.0 and OpenID Connect | implementing-oauth2-openid-connect |
| 25 | AI Production Systems | MLOps: Deploying ML Models to Production | mlops-deploying-ml-models-production |
| 26 | AI Production Systems | Monitoring AI Systems in Production | monitoring-ai-systems-in-production |
| 27 | SaaS Architecture | Scaling SaaS Applications to 1M Users | scaling-saas-applications-million-users |

**Each post will have:**
- 800-1500 word content with proper markdown-like formatting
- SEO-optimized title, meta description, keywords
- Sections: Introduction, Why This Matters, Core Concepts, Implementation Guide, Code Example, Best Practices, Common Mistakes, Final Thoughts
- Code snippets in TypeScript/JavaScript where relevant
- Proper heading hierarchy (##, ###)

---

### Step 2: Update App.tsx Route

Change:
`<Route path="/blog/:id" element={<BlogPost />} />`

To:
`<Route path="/blog/:slug" element={<BlogPost />} />`

---

### Step 3: Update Blog.tsx (Listing Page)

**Changes:**
1. Import data from `src/data/blogPosts.ts` instead of inline array
2. Update categories array to include all 10 new categories
3. Fix image path from `/blog/${post.image}.jpg` to `/blog-covers/${post.image}.svg`
4. Add pagination state and logic
5. Update Link from `/blog/${post.id}` to `/blog/${post.slug}`
6. Add pagination controls using shadcn Pagination components

**Pagination Logic:**

```typescript
const POSTS_PER_PAGE = 6;
const [currentPage, setCurrentPage] = useState(1);

// Reset to page 1 when filters change
useEffect(() => { setCurrentPage(1); }, [selectedCategory, searchQuery]);

const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
const start = (currentPage - 1) * POSTS_PER_PAGE;
const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

const handlePageChange = (page: number) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

Pagination UI placed between the blog grid and newsletter section, using shadcn's Pagination components with Previous/Next buttons disabled at boundaries.

---

### Step 4: Update BlogPost.tsx (Detail Page)

**Changes:**
1. Import data from centralized source
2. Switch from `useParams<{id}>` to `useParams<{slug}>` for slug-based lookup
3. Improve content renderer to support:
   - Code blocks (triple backticks with language)
   - Blockquotes (> )
   - Inline code (backticks)
   - Proper nested lists
4. Fix related posts to link by slug
5. Update SEO metadata to include all new fields

**Content Renderer Improvements:**

Enhance the existing paragraph-splitting renderer to handle:
- ` ```language ... ``` ` -> `<pre><code>` blocks with syntax highlighting styling
- `> text` -> `<blockquote>` elements
- `` `inline code` `` -> `<code>` elements
- Better list handling (consecutive `-` items grouped into `<ul>`)

---

### Step 5: SVG Hero Illustrations

Reuse the 24 existing SVGs in `public/blog-covers/`. For new posts that don't have a matching SVG, map them to the closest existing SVG. The 24 SVGs cover a wide range of topics and can be reused across similar categories.

**Mapping strategy:**
- AI topics -> `ai-development.svg`, `ai-ml-engineering.svg`, `ai-code-generation.svg`
- Generative AI -> `ai-nocode-generation.svg`, `ai-code-generation.svg`
- SaaS -> `api-architecture.svg`, `kubernetes-scale.svg`
- BaaS -> `cloud-security.svg`, `api-architecture.svg`
- API -> `api-architecture.svg`, `api-rate-limiting.svg`, `graphql-vs-rest.svg`
- Cloud -> `cloud-security.svg`, `edge-computing-devops.svg`
- VMs -> `kubernetes-scale.svg`, `edge-computing-devops.svg`
- DevOps -> `devops-automation.svg`, `edge-computing-devops.svg`, `observability-monitoring.svg`
- Security -> `web-security.svg`, `security-lock.svg`, `zero-trust-security.svg`, `cloud-security.svg`
- AI Production -> `ml-software-engineering.svg`, `ai-ml-engineering.svg`, `observability-monitoring.svg`

---

### Step 6: Performance Considerations

1. **Single data file** — All 25+ posts with content in one file. Since content is ~1000 words per post, total file size will be ~100-150KB uncompressed, ~20-30KB gzipped. This is acceptable for a SPA that already lazy-loads the Blog pages.
2. **React.lazy** — Blog and BlogPost pages are already lazy-loaded via React.lazy in App.tsx. This means blog data only loads when user visits /blog.
3. **Pagination** — Only 6 cards rendered at a time, keeping DOM lightweight.
4. **React.memo** — Not needed for blog cards since pagination causes full re-renders of 6 items max.
5. **Image optimization** — SVG covers are small (~2-5KB each). Use existing fallback pattern.

---

### Step 7: Delete Stale File

Remove `src/pages/Blog` (extensionless orphan file that duplicates BlogPost.tsx content).

---

### Verification

1. Run `npx vite build` — should complete with no errors
2. Run `npx vite dev` — verify:
   - `/blog` shows 6 posts per page with working pagination
   - Category filter and search work, reset to page 1
   - Previous/Next buttons disabled at boundaries
   - Clicking a post goes to `/blog/{slug}` and shows full article
   - Non-existent slug shows 404 page
   - Content renders correctly (headings, lists, code blocks, bold text)
   - SEO meta tags present in DOM (inspect head)
   - Related posts section works
   - Scroll to top on page change
3. No console errors