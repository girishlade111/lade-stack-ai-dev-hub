import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "../data/blogPosts";
import { blogContent } from "../data/blogContent";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "AI Development":        { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", dot: "bg-violet-500" },
  "Generative AI":         { bg: "bg-pink-500/10",   text: "text-pink-600 dark:text-pink-400",     border: "border-pink-500/20",   dot: "bg-pink-500"   },
  "SaaS Architecture":     { bg: "bg-sky-500/10",    text: "text-sky-600 dark:text-sky-400",       border: "border-sky-500/20",    dot: "bg-sky-500"    },
  "Backend as a Service":  { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", dot: "bg-orange-500" },
  "API Design & Scaling":  { bg: "bg-cyan-500/10",   text: "text-cyan-600 dark:text-cyan-400",     border: "border-cyan-500/20",   dot: "bg-cyan-500"   },
  "Cloud Computing":       { bg: "bg-blue-500/10",   text: "text-blue-600 dark:text-blue-400",     border: "border-blue-500/20",   dot: "bg-blue-500"   },
  "Virtual Machines":      { bg: "bg-teal-500/10",   text: "text-teal-600 dark:text-teal-400",     border: "border-teal-500/20",   dot: "bg-teal-500"   },
  "DevOps & CI/CD":        { bg: "bg-amber-500/10",  text: "text-amber-600 dark:text-amber-400",   border: "border-amber-500/20",  dot: "bg-amber-500"  },
  "Security in Web Apps":  { bg: "bg-red-500/10",    text: "text-red-600 dark:text-red-400",       border: "border-red-500/20",    dot: "bg-red-500"    },
  "AI Production Systems": { bg: "bg-emerald-500/10",text: "text-emerald-600 dark:text-emerald-400",border:"border-emerald-500/20",dot: "bg-emerald-500"},
};

function CategoryBadge({ category }: { category: string }) {
  const c = CATEGORY_COLORS[category] ?? { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", dot: "bg-muted-foreground" };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${c.bg} ${c.text} ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {category}
    </span>
  );
}

/* ── Inline markdown renderer ── */
const processInline = (text: string) =>
  text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-muted/80 border border-border px-1.5 py-0.5 rounded-md text-sm font-mono text-[#6E8F6A]">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#6E8F6A] underline underline-offset-2 hover:text-[#5a7856] transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');

const renderContent = (contentStr: string) => {
  const blocks: string[] = [];
  let currentBlock: string[] = [];
  let inCodeBlock = false;

  for (const line of contentStr.split("\n")) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        currentBlock.push(line);
        blocks.push(currentBlock.join("\n"));
        currentBlock = [];
        inCodeBlock = false;
      } else {
        if (currentBlock.length > 0) { blocks.push(currentBlock.join("\n").trim()); currentBlock = []; }
        inCodeBlock = true;
        currentBlock.push(line);
      }
    } else {
      currentBlock.push(line);
      if (!inCodeBlock && line.trim() === "") {
        blocks.push(currentBlock.join("\n").trim());
        currentBlock = [];
      }
    }
  }
  if (currentBlock.length > 0) blocks.push(currentBlock.join("\n").trim());

  return blocks.filter((b) => b.trim() !== "").map((block, index) => {
    if (block.startsWith("```")) {
      const parts = block.split("\n");
      const lang = parts[0].replace("```", "").trim();
      const code = parts.slice(1, -1).join("\n");
      return (
        <div key={index} className="my-7 rounded-2xl overflow-hidden border border-border shadow-sm">
          {lang && (
            <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground">{lang}</span>
              <span className="w-2 h-2 rounded-full bg-[#6E8F6A]/60" />
            </div>
          )}
          <pre className="bg-muted/40 overflow-x-auto p-5">
            <code className="text-sm font-mono text-foreground/80 leading-relaxed">{code}</code>
          </pre>
        </div>
      );
    }

    if (block.startsWith("> ")) {
      const text = block.split("\n").map((l) => l.replace(/^>\s*/, "")).join(" ");
      return (
        <blockquote key={index} className="my-7 pl-5 border-l-4 border-[#6E8F6A] bg-[#6E8F6A]/5 rounded-r-xl py-4 pr-5 italic text-muted-foreground text-base sm:text-lg leading-relaxed">
          {text}
        </blockquote>
      );
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.replace("- ", ""));
      return (
        <ul key={index} className="my-5 space-y-2.5 ml-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6E8F6A] flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: processInline(item) }} />
            </li>
          ))}
        </ul>
      );
    }

    if (block.match(/^\d+\. /)) {
      const items = block.split("\n").filter((l) => l.match(/^\d+\. /)).map((l) => l.replace(/^\d+\.\s*/, ""));
      return (
        <ol key={index} className="my-5 space-y-2.5 ml-1 counter-reset-list">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6E8F6A]/15 text-[#6E8F6A] text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: processInline(item) }} />
            </li>
          ))}
        </ol>
      );
    }

    if (block.startsWith("# "))   return <h1 key={index} className="text-3xl sm:text-4xl font-bold mt-12 mb-5 text-foreground leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: processInline(block.replace("# ", "")) }} />;
    if (block.startsWith("## "))  return <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-foreground leading-snug tracking-tight" dangerouslySetInnerHTML={{ __html: processInline(block.replace("## ", "")) }} />;
    if (block.startsWith("### ")) return <h3 key={index} className="text-xl sm:text-2xl font-bold mt-8 mb-3 text-foreground" dangerouslySetInnerHTML={{ __html: processInline(block.replace("### ", "")) }} />;
    if (block.startsWith("#### "))return <h4 key={index} className="text-lg font-semibold mt-6 mb-2 text-foreground" dangerouslySetInnerHTML={{ __html: processInline(block.replace("#### ", "")) }} />;

    return (
      <p key={index} className="text-base sm:text-lg text-muted-foreground leading-[1.85] my-5" dangerouslySetInnerHTML={{ __html: processInline(block) }} />
    );
  });
};

/* ── Copy-link button ── */
function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
    >
      {copied ? <Check className="w-4 h-4 text-[#6E8F6A]" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
}

/* ── Related post card ── */
function RelatedCard({ post }: { post: (typeof blogPosts)[0] }) {
  const c = CATEGORY_COLORS[post.category] ?? { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", dot: "bg-muted-foreground" };
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 rounded-2xl border border-border bg-card p-4 hover:border-[#6E8F6A]/40 hover:shadow-md transition-all duration-200"
    >
      <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
        <img
          src={`/blog-covers/${post.image}.svg`}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold mb-1.5 w-fit ${c.bg} ${c.text} ${c.border}`}>
          <span className={`w-1 h-1 rounded-full ${c.dot}`} />
          {post.category}
        </span>
        <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-[#6E8F6A] transition-colors">
          {post.title}
        </h4>
        <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {post.readTime}
        </span>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   Main Page
══════════════════════════════════════════ */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = post ? blogContent[post.slug] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Post Not Found - Lade Stack" />
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-7 h-7 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${window.location.origin}/blog-covers/${post.image}.svg`,
    author: { "@type": "Person", name: post.author, url: "https://ladestack.in/about" },
    publisher: { "@type": "Organization", name: "Lade Stack", logo: { "@type": "ImageObject", url: "https://ladestack.in/logo.png" } },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": window.location.href },
    articleSection: post.category,
    keywords: post.keywords,
  };

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const moreFromBlog = blogPosts.filter((p) => p.id !== post.id && p.category !== post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(110,143,106,0.08),transparent_60%)]" />
        <div className="absolute top-[55%] right-0 w-[400px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_55%)]" />
      </div>

      <SEO
        title={`${post.title} | Lade Stack Blog`}
        description={post.excerpt}
        keywords={post.keywords.join(", ")}
        ogImage={`/blog-covers/${post.image}.svg`}
        ogType="article"
        structuredData={jsonLd}
      />
      <Header />

      <main className="pt-16">
        {/* ── Hero / Article Header ── */}
        <section className="pt-12 pb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
              </motion.nav>

              {/* Category + read time */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="flex flex-wrap items-center gap-2.5 mb-5"
              >
                <CategoryBadge category={post.category} />
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 border border-border">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-5"
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {post.excerpt}
              </motion.p>

              {/* Author + date + share row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#6E8F6A]/15 border border-[#6E8F6A]/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#6E8F6A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                  </div>
                </div>
                <CopyLinkButton />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Cover image ── */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-border shadow-xl aspect-[16/7] bg-muted"
            >
              <img
                src={`/blog-covers/${post.image}.svg`}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Article body + sidebar ── */}
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-12 xl:gap-16">

                {/* Content */}
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="min-w-0 flex-1"
                >
                  <div className="prose-content text-foreground leading-relaxed">
                    {renderContent(content)}
                  </div>

                  {/* Keywords */}
                  {post.keywords.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Keywords</p>
                      <div className="flex flex-wrap gap-2">
                        {post.keywords.map((kw) => (
                          <span key={kw} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom actions */}
                  <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">Share this article:</span>
                      <CopyLinkButton />
                    </div>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                  </div>
                </motion.article>

                {/* Sidebar — hidden below lg */}
                <motion.aside
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden lg:block w-72 xl:w-80 flex-shrink-0"
                >
                  <div className="sticky top-24 space-y-6">
                    {/* About the author */}
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Author</p>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#6E8F6A]/15 border border-[#6E8F6A]/20 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-[#6E8F6A]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">Lade Stack Team</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Building AI-powered developer tools and sharing insights on modern software engineering.
                      </p>
                    </div>

                    {/* Article info */}
                    <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Article Info</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Published</span>
                        <span className="font-medium text-foreground text-xs">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Read time</span>
                        <span className="font-medium text-foreground text-xs">{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Category</span>
                        <CategoryBadge category={post.category} />
                      </div>
                    </div>

                    {/* Related in sidebar */}
                    {relatedPosts.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Related Articles</p>
                        <div className="space-y-3">
                          {relatedPosts.map((rp) => (
                            <RelatedCard key={rp.id} post={rp} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related articles (full width, mobile + desktop) ── */}
        {(relatedPosts.length > 0 || moreFromBlog.length > 0) && (
          <section className="py-16 border-t border-border bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {relatedPosts.length > 0 && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground">More in {post.category}</h2>
                      <Link
                        to="/blog"
                        className="inline-flex items-center gap-1.5 text-sm text-[#6E8F6A] font-medium hover:text-[#5a7856] transition-colors"
                      >
                        View all <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                      {relatedPosts.map((rp) => {
                        const c = CATEGORY_COLORS[rp.category] ?? { dot: "bg-muted-foreground", bg: "bg-muted", text: "text-muted-foreground", border: "border-border" };
                        return (
                          <Link
                            key={rp.id}
                            to={`/blog/${rp.slug}`}
                            className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-[#6E8F6A]/40 hover:shadow-lg transition-all duration-200 flex flex-col"
                          >
                            <div className={`h-1 w-full ${c.dot}`} />
                            <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                              <img
                                src={`/blog-covers/${rp.image}.svg`}
                                alt={rp.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                              />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                <Calendar className="w-3 h-3" />
                                {new Date(rp.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                <Clock className="w-3 h-3" />
                                {rp.readTime}
                              </div>
                              <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-[#6E8F6A] transition-colors flex-1 mb-3">
                                {rp.title}
                              </h3>
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6E8F6A] group-hover:gap-2 transition-all">
                                Read Article <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* CTA Banner */}
                <div className="relative rounded-3xl overflow-hidden border border-[#6E8F6A]/20 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-violet-500/5 p-10 text-center">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-[radial-gradient(ellipse_at_top_right,rgba(110,143,106,0.12),transparent_65%)] pointer-events-none" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Explore more articles</h3>
                  <p className="text-muted-foreground mb-6">Discover tutorials, guides, and insights across all topics.</p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#6E8F6A] hover:bg-[#5a7856] text-white font-semibold px-6 py-2.5 text-sm transition-colors"
                  >
                    <BookOpen className="w-4 h-4" /> Browse All Articles
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
