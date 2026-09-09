# Step 04: SEO, Head Architecture & Multi-Language hreflang

---

## 📋 Context & Goal for AI Assistant

You are an International SEO Specialist and Technical Architect.
Your task is to build the comprehensive `<SEO.astro>` component for the **Lade Stack** Astro project, guaranteeing:
1. **Pre-rendered HTML**: 100% of metadata is generated statically at build time (no runtime client-side DOM rewrites).
2. **Multi-Language `hreflang` Alternates**: Generates reciprocal alternate tags for all 6 languages (`en`, `zh`, `ko`, `ja`, `tr`, `pt-BR`) plus `x-default`.
3. **Structured Data (JSON-LD)**: Embeds rich schema.org structured data (`Organization`, `WebSite`, `SoftwareApplication`, `BlogPosting`).
4. **Social Graph**: Open Graph and Twitter Card tags.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/components/SEO.astro`
Create the production-grade SEO component:

```astro
---
import { languages, defaultLocale, type SupportedLocale } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/utils';

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    tags?: string[];
  };
  structuredData?: object | object[];
  noIndex?: boolean;
  lang: SupportedLocale;
}

const SITE_NAME = 'Lade Stack';
const SITE_URL = 'https://ladestack.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  "Transform your development workflow with Lade Stack's AI-powered tools. API testing platform, no-code website builder, secure file management & documentation summarizer. Boost productivity 10x.";
const DEFAULT_KEYWORDS =
  'AI developer tools, AI SaaS platform, AI code editor, API testing tool, developer automation tools, AI workflow automation, enterprise AI development platform, Lade Stack';

const {
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  article,
  structuredData,
  noIndex = false,
  lang = defaultLocale,
} = Astro.props;

const currentPath = Astro.url.pathname;
const fullCanonical = canonicalUrl || `${SITE_URL}${currentPath}`;
const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
const currentLangMeta = languages[lang];
---

<!-- Primary Meta Tags -->
<title>{pageTitle}</title>
<meta name="title" content={pageTitle} />
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="author" content="Girish Lade - Full Stack Developer & AI Tools Creator" />
<meta
  name="robots"
  content={noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
/>

<!-- Canonical Tag -->
<link rel="canonical" href={fullCanonical} />

<!-- International SEO: hreflang Alternates -->
{
  Object.keys(languages).map((loc) => {
    const localizedHref = `${SITE_URL}${getLocalizedPath(currentPath, loc as SupportedLocale)}`;
    return <link rel="alternate" hreflang={loc} href={localizedHref} />;
  })
}
<!-- x-default points to default English route -->
<link rel="alternate" hreflang="x-default" href={`${SITE_URL}${getLocalizedPath(currentPath, defaultLocale)}`} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={ogType} />
<meta property="og:url" content={fullCanonical} />
<meta property="og:title" content={ogTitle || pageTitle} />
<meta property="og:description" content={ogDescription || description} />
<meta property="og:image" content={ogImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content={SITE_NAME} />
<meta property="og:locale" content={currentLangMeta.iso} />

{
  article && (
    <>
      <meta property="article:published_time" content={article.publishedTime} />
      {article.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      <meta property="article:author" content={article.author} />
      {article.tags?.map((tag) => (
        <meta property="article:tag" content={tag} />
      ))}
    </>
  )
}

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={fullCanonical} />
<meta name="twitter:title" content={ogTitle || pageTitle} />
<meta name="twitter:description" content={ogDescription || description} />
<meta name="twitter:image" content={ogImage} />
<meta name="twitter:site" content="@ladestack" />
<meta name="twitter:creator" content="@girishlade" />

<!-- Structured Data: Global Schemas (Organization + WebSite) -->
<script type="application/ld+json" is:inline>
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ladestack.in/#organization",
        "name": "Lade Stack",
        "url": "https://ladestack.in",
        "logo": "https://ladestack.in/favicon.ico",
        "description": "AI-powered developer tools and SaaS solutions for modern development teams.",
        "founder": {
          "@type": "Person",
          "name": "Girish Lade",
          "url": "https://github.com/girishlade111"
        },
        "sameAs": [
          "https://github.com/girishlade111",
          "https://www.linkedin.com/in/girish-lade-075bba201/",
          "https://www.instagram.com/girish_lade_/",
          "https://codepen.io/Girish-Lade-the-looper"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ladestack.in/#website",
        "url": "https://ladestack.in",
        "name": "Lade Stack",
        "publisher": {
          "@id": "https://ladestack.in/#organization"
        }
      }
    ]
  }
</script>

<!-- Additional Page-Specific Structured Data -->
{
  structuredData && (
    <script
      type="application/ld+json"
      is:inline
      set:html={JSON.stringify(structuredData)}
    />
  )
}
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to verify props and types.
2. Build the project using `npm run build`.
3. Open `dist/index.html` in an editor:
   - Check `<title>` is pre-rendered.
   - Check all 6 `<link rel="alternate" hreflang="..." />` tags exist.
   - Check `<link rel="canonical" ... />` is present and absolute.
   - Check `<script type="application/ld+json">` contains valid Organization and WebSite JSON schemas.
