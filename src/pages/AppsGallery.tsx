import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ExternalLink, ArrowRight, Star, Zap, Clock,
  CheckCircle, Sparkles, Filter, X, ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appsData from "@/data/apps.json";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AppData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  timeToValue: string;
  integrations: string[];
  lifetimeFree: boolean;
  landingUrl: string;
  createdAt: string;
  popularityScore: number;
  iconAlt: string;
  comingSoon?: boolean;
}

const apps = appsData as AppData[];

// ─── Category accent colours ──────────────────────────────────────────────────

const categoryAccent: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  "Developer Tool": { bg: "bg-violet-500/10", text: "text-violet-500",  border: "border-violet-500/20",  glow: "rgba(139,92,246,0.12)"  },
  "API Tool":       { bg: "bg-sky-500/10",    text: "text-sky-500",     border: "border-sky-500/20",     glow: "rgba(14,165,233,0.12)"  },
  "No-Code":        { bg: "bg-orange-500/10", text: "text-orange-500",  border: "border-orange-500/20",  glow: "rgba(249,115,22,0.12)"  },
  "Productivity":   { bg: "bg-emerald-500/10",text: "text-emerald-500", border: "border-emerald-500/20", glow: "rgba(16,185,129,0.12)"  },
  "Docs AI":        { bg: "bg-pink-500/10",   text: "text-pink-500",    border: "border-pink-500/20",    glow: "rgba(236,72,153,0.12)"  },
};
const defaultAccent = {
  bg: "bg-[#6E8F6A]/10", text: "text-[#6E8F6A]",
  border: "border-[#6E8F6A]/20", glow: "rgba(110,143,106,0.12)",
};
const getAccent = (cat: string) => categoryAccent[cat] ?? defaultAccent;

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden:   { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const cardVar = {
  hidden:   { opacity: 0, y: 20, scale: 0.97 },
  visible:  { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit:     { opacity: 0, scale: 0.95,
    transition: { duration: 0.18 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PopularityBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#6E8F6A]"
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <span className="text-[11px] font-semibold text-muted-foreground tabular-nums w-7 text-right">
        {score}
      </span>
    </div>
  );
}

function AppCard({ app, index }: { app: AppData; index: number }) {
  const ac    = getAccent(app.category);
  const isLive = !app.comingSoon;
  const isNew  = (Date.now() - new Date(app.createdAt).getTime()) < 90 * 24 * 3600 * 1000;

  // Resolve the correct href
  const href = isLive && app.id === "ai-code-viewer"
    ? "https://code.ladestack.in/"
    : app.landingUrl;

  const card = (
    <motion.div
      layout
      variants={cardVar}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-background overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${ac.glow}, transparent 70%)` }}
      />

      {/* Top colour stripe */}
      <div className={`h-[3px] w-full ${ac.bg.replace("/10", "/50")}`} />

      <div className="flex flex-col flex-1 p-6">

        {/* — Row: icon + status badges ——————————————————————————————— */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border overflow-hidden ${ac.border} ${ac.bg}`}>
              <img src={app.icon} alt={app.iconAlt} className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            {/* Live green dot */}
            {isLive && (
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
            )}
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-1.5">
            {isLive ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-semibold">
                <Clock className="w-3 h-3" />
                Coming Soon
              </span>
            )}
            {isNew && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-[10px] font-bold uppercase tracking-wide">
                <Sparkles className="w-2.5 h-2.5" />
                New
              </span>
            )}
          </div>
        </div>

        {/* — Category pill ——————————————————————————————————————————— */}
        <div className="mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${ac.bg} ${ac.text} ${ac.border}`}>
            {app.category}
          </span>
        </div>

        {/* — Title ————————————————————————————————————————————————— */}
        <h3 className="text-[15px] font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-[#6E8F6A] transition-colors duration-200">
          {app.title}
        </h3>

        {/* — Tagline ——————————————————————————————————————————————— */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {app.tagline}
        </p>

        {/* — Feature chips ————————————————————————————————————————— */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.features.slice(0, 3).map((f) => (
            <span key={f} className="inline-flex items-center gap-1 text-[11px] text-muted-foreground px-2 py-0.5 rounded-md bg-muted/60 border border-border">
              <CheckCircle className="w-2.5 h-2.5 text-[#6E8F6A]" />
              {f}
            </span>
          ))}
        </div>

        {/* — Popularity ——————————————————————————————————————————— */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground font-medium mb-1.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            Popularity score
          </span>
          <PopularityBar score={app.popularityScore} />
        </div>

        <div className="flex-1" />

        {/* — Footer ———————————————————————————————————————————————— */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#6E8F6A]" />
              {app.timeToValue} setup
            </span>
            {app.lifetimeFree && (
              <span className="flex items-center gap-1 text-[#6E8F6A] font-semibold">
                <CheckCircle className="w-3 h-3" />
                Free
              </span>
            )}
          </div>

          <span className={`flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2 ${
            isLive ? "text-[#6E8F6A]" : "text-muted-foreground"
          }`}>
            {isLive
              ? <><ExternalLink className="w-3.5 h-3.5" />Launch</>
              : <><ArrowRight   className="w-3.5 h-3.5" />Details</>
            }
          </span>
        </div>
      </div>
    </motion.div>
  );

  // External link for the live code editor, internal router Link for everything else
  if (isLive && app.id === "ai-code-viewer") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    );
  }
  return (
    <Link to={href} className="block h-full">
      {card}
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ALL = "All";

export default function AppsGallery() {
  const [search,         setSearch]         = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [showFilters,    setShowFilters]    = useState(false);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(apps.map((a) => a.category))).sort()],
    [],
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return apps.filter((app) => {
      const catOk = activeCategory === ALL || app.category === activeCategory;
      const qOk   = !q || [app.title, app.tagline, app.description, ...app.features, ...app.integrations]
        .some((s) => s.toLowerCase().includes(q));
      return catOk && qOk;
    });
  }, [search, activeCategory]);

  const liveCount   = apps.filter((a) => !a.comingSoon).length;
  const comingCount = apps.filter((a) =>  a.comingSoon).length;
  const allIntegrations = [...new Set(apps.flatMap((a) => a.integrations))];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Apps Gallery – Lade Stack AI Developer Tools"
        description="Explore Lade Stack's suite of AI-powered developer tools: code editor, API testing, website builder, file sharing, and documentation AI. All free forever."
        keywords="AI developer tools, apps gallery, code editor, API testing, website builder, file sharing, documentation AI, Lade Stack"
        ogTitle="Apps Gallery – Lade Stack AI Developer Tools"
        ogDescription="Explore and launch AI-powered developer tools built by Lade Stack."
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Apps Gallery – Lade Stack",
          url: "https://ladestack.in/apps",
          description: "A curated gallery of AI-powered developer tools built by Lade Stack.",
        }}
      />
      <Header />

      <main>
        {/* ════════════════════════════════════════════ HERO */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px]
              bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.10),_transparent_60%)]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />
            <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-sky-500/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">

              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-xs font-semibold mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {liveCount} Live · {comingCount} Coming Soon
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-5"
              >
                The AI developer
                <br />
                <span className="text-[#6E8F6A]">toolkit</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
              >
                Every tool you need to code, test, document, and ship —
                powered by AI and free forever.
              </motion.p>

              {/* Stats */}
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
                className="flex flex-wrap justify-center gap-8 sm:gap-12"
              >
                {[
                  { value: `${apps.length}+`, label: "Tools" },
                  { value: "100%",            label: "Free forever" },
                  { value: "24/7",            label: "Uptime" },
                  { value: "1000+",           label: "Developers" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ STICKY FILTER BAR */}
        <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">

              {/* Search */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search tools…"
                  className="pl-9 h-9 text-sm rounded-xl bg-muted/40 border-border focus-visible:ring-[#6E8F6A]/40"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Desktop category chips */}
              <div className="hidden sm:flex items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#6E8F6A] border-[#6E8F6A] text-white shadow-sm"
                        : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                <Filter className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Count */}
              <span className="ml-auto flex-shrink-0 text-xs text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
              </span>
            </div>

            {/* Mobile categories dropdown */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="sm:hidden overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pt-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                          activeCategory === cat
                            ? "bg-[#6E8F6A] border-[#6E8F6A] text-white"
                            : "bg-transparent border-border text-muted-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ════════════════════════════════════════════ APPS GRID */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  key="grid"
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
                >
                  {filtered.map((app, i) => (
                    <AppCard key={app.id} app={app} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-sm mx-auto py-24 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                    <Search className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">No tools found</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Try a different search or category.
                  </p>
                  <button
                    onClick={() => { setSearch(""); setActiveCategory(ALL); }}
                    className="px-5 py-2.5 rounded-xl bg-[#6E8F6A] text-white text-sm font-semibold hover:bg-[#5F7F63] transition-colors"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ════════════════════════════════════════════ INTEGRATIONS MARQUEE */}
        <section className="py-12 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Works with your stack
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-3 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...allIntegrations, ...allIntegrations].map((item, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ BOTTOM CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#6E8F6A]/25 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-background p-10 sm:p-14 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#6E8F6A]/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A] animate-pulse" />
                  All tools are free forever
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Ready to build smarter?
                </h3>
                <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                  Start with the AI Code Viewer now — no signup required.
                  More tools launching very soon.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://code.ladestack.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-[#6E8F6A] hover:bg-[#5F7F63] text-white text-sm font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch AI Code Viewer
                  </a>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-border bg-background hover:bg-muted/40 text-foreground text-sm font-semibold transition-colors duration-200"
                  >
                    View all projects
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
