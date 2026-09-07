import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  ArrowRight,
  Search,
  X,
  BookOpen,
  TrendingUp,
  Rss,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "../data/blogPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const categories = [
  "All",
  "AI Development",
  "Generative AI",
  "SaaS Architecture",
  "Backend as a Service",
  "API Design & Scaling",
  "Cloud Computing",
  "Virtual Machines",
  "DevOps & CI/CD",
  "Security in Web Apps",
  "AI Production Systems",
];

const POSTS_PER_PAGE = 6;

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "AI Development":       { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", dot: "bg-violet-500" },
  "Generative AI":        { bg: "bg-pink-500/10",   text: "text-pink-600 dark:text-pink-400",     border: "border-pink-500/20",   dot: "bg-pink-500"   },
  "SaaS Architecture":    { bg: "bg-sky-500/10",    text: "text-sky-600 dark:text-sky-400",       border: "border-sky-500/20",    dot: "bg-sky-500"    },
  "Backend as a Service": { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", dot: "bg-orange-500" },
  "API Design & Scaling": { bg: "bg-cyan-500/10",   text: "text-cyan-600 dark:text-cyan-400",     border: "border-cyan-500/20",   dot: "bg-cyan-500"   },
  "Cloud Computing":      { bg: "bg-blue-500/10",   text: "text-blue-600 dark:text-blue-400",     border: "border-blue-500/20",   dot: "bg-blue-500"   },
  "Virtual Machines":     { bg: "bg-teal-500/10",   text: "text-teal-600 dark:text-teal-400",     border: "border-teal-500/20",   dot: "bg-teal-500"   },
  "DevOps & CI/CD":       { bg: "bg-amber-500/10",  text: "text-amber-600 dark:text-amber-400",   border: "border-amber-500/20",  dot: "bg-amber-500"  },
  "Security in Web Apps": { bg: "bg-red-500/10",    text: "text-red-600 dark:text-red-400",       border: "border-red-500/20",    dot: "bg-red-500"    },
  "AI Production Systems":{ bg: "bg-emerald-500/10",text: "text-emerald-600 dark:text-emerald-400",border: "border-emerald-500/20",dot: "bg-emerald-500"},
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/* ── Category pill ── */
function CategoryBadge({ category, size = "sm" }: { category: string; size?: "sm" | "xs" }) {
  const colors = CATEGORY_COLORS[category] ?? { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", dot: "bg-muted-foreground" };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium ${size === "xs" ? "text-[10px]" : "text-xs"} ${colors.bg} ${colors.text} ${colors.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
      {category}
    </span>
  );
}

/* ── Featured hero card (first post) ── */
function FeaturedCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="group relative rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="grid md:grid-cols-2 min-h-[380px]">
        {/* Image */}
        <div className="relative overflow-hidden bg-muted min-h-[220px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 md:hidden" />
          <img
            src={`/blog-covers/${post.image}.svg`}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          />
          {/* Featured pill */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6E8F6A] text-white text-xs font-semibold px-3 py-1 shadow-lg">
              <TrendingUp className="w-3 h-3" /> Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <div className="mb-4">
            <CategoryBadge category={post.category} />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <div>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#6E8F6A] hover:bg-[#5a7856] text-white font-semibold text-sm px-5 py-2.5 transition-colors duration-200"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Regular blog card ── */
function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  const colors = CATEGORY_COLORS[post.category] ?? { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", dot: "bg-muted-foreground" };
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Top colour stripe */}
      <div className={`h-1 w-full ${colors.dot}`} />

      {/* Image */}
      <div className="relative overflow-hidden bg-muted aspect-[16/9]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        <img
          src={`/blog-covers/${post.image}.svg`}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
        />
        <div className="absolute bottom-3 left-3 z-20">
          <CategoryBadge category={post.category} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6E8F6A] hover:text-[#5a7856] transition-colors group/link"
        >
          Read Article
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Main page ── */
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  // First post shown as featured only on page 1 with no filters
  const isDefaultView = selectedCategory === "All" && searchQuery === "" && currentPage === 1;
  const featuredPost = isDefaultView ? visiblePosts[0] : null;
  const gridPosts = isDefaultView ? visiblePosts.slice(1) : visiblePosts;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-[15%] w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(110,143,106,0.08),transparent_65%)]" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(110,143,106,0.05),transparent_55%)]" />
      </div>

      <SEO
        title="Blog – AI Development Insights & Tutorials | Lade Stack"
        description="Explore the latest insights, tutorials, and trends in AI software development, API testing, and developer productivity from the Lade Stack team."
        keywords="AI development blog, software engineering trends, API testing tutorials, developer productivity tips, coding best practices, web development guides"
        ogTitle="Lade Stack Blog – AI Development Insights"
        ogDescription="Expert tutorials, guides, and insights on AI-powered development, API testing, and modern software engineering."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Lade Stack Blog",
          "url": "https://ladestack.in/blog",
          "description": "AI development insights, tutorials, and engineering best practices.",
          "publisher": {
            "@type": "Organization",
            "name": "Lade Stack",
            "url": "https://ladestack.in",
          },
        }}
      />
      <Header />

      <main className="pt-16">
        {/* ── Hero ── */}
        <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#6E8F6A]/30 bg-[#6E8F6A]/10 text-[#6E8F6A] text-xs font-semibold px-4 py-1.5 mb-6"
              >
                <Rss className="w-3.5 h-3.5" />
                {blogPosts.length} Articles & Counting
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight tracking-tight"
              >
                Insights for the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#6E8F6A]">Modern Developer</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                    <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="#6E8F6A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                Discover the latest trends, tutorials, and best practices in AI-powered software development.
              </motion.p>

              {/* Search bar */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="relative max-w-lg mx-auto"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search articles, topics, technologies…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-10 rounded-2xl border border-border bg-card/80 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6E8F6A]/40 focus:border-[#6E8F6A]/60 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition"
                  >
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                )}
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground"
              >
                {[
                  { icon: BookOpen, label: `${blogPosts.length} Articles` },
                  { icon: Tag, label: `${categories.length - 1} Categories` },
                  { icon: TrendingUp, label: "Weekly Updates" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#6E8F6A]" />
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Category Filter Bar ── */}
        <section ref={filterRef} className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                const colors = CATEGORY_COLORS[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all duration-200 ${
                      active
                        ? colors
                          ? `${colors.bg} ${colors.text} ${colors.border}`
                          : "bg-[#6E8F6A]/15 text-[#6E8F6A] border-[#6E8F6A]/30"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat === "All" ? "All Posts" : cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Articles ── */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Result count */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  {filteredPosts.length === blogPosts.length
                    ? `Showing all ${blogPosts.length} articles`
                    : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} found`}
                </p>
                {(searchQuery || selectedCategory !== "All") && (
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1 transition hover:bg-muted"
                  >
                    <X className="w-3 h-3" /> Clear filters
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {visiblePosts.length > 0 ? (
                  <motion.div key={`${selectedCategory}-${searchQuery}-${currentPage}`} initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={staggerContainer}>

                    {/* Featured post */}
                    {featuredPost && (
                      <div className="mb-10">
                        <FeaturedCard post={featuredPost} />
                      </div>
                    )}

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                      {gridPosts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="w-9 h-9 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-40 disabled:pointer-events-none transition"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-medium border transition ${
                              currentPage === page
                                ? "bg-[#6E8F6A] text-white border-[#6E8F6A]"
                                : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="w-9 h-9 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-40 disabled:pointer-events-none transition"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-24"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                      <Search className="w-7 h-7 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria.</p>
                    <button
                      onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-muted transition"
                    >
                      <X className="w-3.5 h-3.5" /> Clear Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="py-16 sm:py-20 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden border border-[#6E8F6A]/20 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-violet-500/5 p-10 lg:p-14 text-center"
            >
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(110,143,106,0.15),transparent_65%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6E8F6A]/30 bg-[#6E8F6A]/10 text-[#6E8F6A] text-xs font-semibold px-4 py-1.5 mb-5">
                  <Rss className="w-3.5 h-3.5" /> Newsletter
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, ever.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-11 px-4 rounded-xl border border-border bg-background/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6E8F6A]/40 focus:border-[#6E8F6A]/60 transition"
                  />
                  <button className="h-11 px-6 rounded-xl bg-[#6E8F6A] hover:bg-[#5a7856] text-white text-sm font-semibold transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>

                <p className="mt-4 text-xs text-muted-foreground/70">
                  Join {blogPosts.length}+ subscribers · Unsubscribe at any time
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
