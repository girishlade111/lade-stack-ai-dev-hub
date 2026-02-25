import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2, Globe, FileText, Brain, Cpu,
  ExternalLink, Layers, ArrowRight, ArrowUpRight,
  Check, Zap, Clock, Star, ChevronRight,
  Sparkles,
} from "lucide-react";
import { ScrollReveal, SoftButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ──────────────────────────────────────────────────────────────────

const products = [
  {
    id: "ai-code-viewer",
    icon: Code2,
    title: "AI Code Editor",
    shortTitle: "Code Editor",
    tagline: "Write, compile & optimize with AI",
    description:
      "A revolutionary in-browser editor with real-time compilation, context-aware AI suggestions, and instant performance analysis — across HTML, CSS, JS, and more.",
    features: [
      "AI code enhancement & refactoring",
      "Real-time compilation & preview",
      "Performance & bundle analysis",
      "Multi-language support",
    ],
    tags: ["AI Tools", "Developer"],
    status: "Live" as const,
    url: "https://code.ladestack.in/",
    internalUrl: "/projects/ai-code-viewer",
    timeToValue: "30 sec",
    color: "#6E8F6A",
    trackColor: "#6E8F6A22",
    popularity: 90,
    badge: "Most Popular",
  },
  {
    id: "api-testing",
    icon: Cpu,
    title: "AI API Tester",
    shortTitle: "API Tester",
    tagline: "Intelligent test generation & monitoring",
    description:
      "Auto-generate test suites, run regression tests, and monitor real-time performance for REST, GraphQL, and WebSocket APIs — with zero config setup.",
    features: [
      "AI-generated test cases",
      "REST · GraphQL · WebSocket",
      "CI/CD integration",
      "Real-time performance monitoring",
    ],
    tags: ["Developer"],
    status: "Coming Soon" as const,
    url: "/projects/api-testing",
    internalUrl: "/projects/api-testing",
    timeToValue: "5 min",
    color: "#4ec2e8",
    trackColor: "#4ec2e822",
    popularity: 92,
    badge: "Coming Soon",
  },
  {
    id: "website-builder",
    icon: Globe,
    title: "No-Code Builder",
    shortTitle: "No-Code Builder",
    tagline: "GPT-4 powered responsive websites",
    description:
      "Generate fully responsive, SEO-optimised websites from a single prompt. Includes e-commerce, analytics, and custom domain support — powered by GPT-4.",
    features: [
      "GPT-4 site generation",
      "SEO & Core Web Vitals",
      "E-commerce ready",
      "One-click deployment",
    ],
    tags: ["AI Tools"],
    status: "Coming Soon" as const,
    url: "/projects/website-builder",
    internalUrl: "/projects/website-builder",
    timeToValue: "2 min",
    color: "#b47ee8",
    trackColor: "#b47ee822",
    popularity: 78,
    badge: "Coming Soon",
  },
  {
    id: "documentation-ai",
    icon: Brain,
    title: "Documentation AI",
    shortTitle: "Doc Generator",
    tagline: "Code-aware documentation generation",
    description:
      "AI that reads your codebase and generates comprehensive docs, API specs, and onboarding guides automatically. Integrates with GitHub, VS Code, and more.",
    features: [
      "Code-context understanding",
      "GitHub & IDE integration",
      "API spec generation",
      "Auto-sync on push",
    ],
    tags: ["AI Tools", "Developer"],
    status: "Coming Soon" as const,
    url: "/projects/documentation-ai",
    internalUrl: "/projects/documentation-ai",
    timeToValue: "3 min",
    color: "#e8a64e",
    trackColor: "#e8a64e22",
    popularity: 84,
    badge: "Coming Soon",
  },
  {
    id: "file-management",
    icon: FileText,
    title: "File Sharing",
    shortTitle: "File Sharing",
    tagline: "Enterprise CDN-powered sharing",
    description:
      "Global CDN file delivery, intelligent team collaboration, automatic format optimisation, and enterprise security — free for all team sizes.",
    features: [
      "Global CDN delivery",
      "Auto-optimisation",
      "Enterprise-grade security",
      "Team collaboration",
    ],
    tags: ["Productivity"],
    status: "Coming Soon" as const,
    url: "/projects/file-management",
    internalUrl: "/projects/file-management",
    timeToValue: "1 min",
    color: "#e87070",
    trackColor: "#e8707022",
    popularity: 76,
    badge: "Coming Soon",
  },
];

const categories = ["All", "AI Tools", "Developer", "Productivity"];

// ─── Popularity bar ─────────────────────────────────────────────────────────

function PopBar({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  // CSS transition via direct DOM to avoid re-renders
  const [triggered, setTriggered] = useState(false);
  if (inView && !triggered) setTriggered(true);

  return (
    <div ref={ref} className="h-1 rounded-full overflow-hidden bg-[#F0F0F0] dark:bg-white/[0.06]">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        initial={{ width: 0 }}
        animate={triggered ? { width: `${value}%` } : {}}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

// ─── Selector card (right rail) ─────────────────────────────────────────────

function SelectorCard({
  product, isActive, onClick, index,
}: {
  product: typeof products[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = product.icon;
  return (
    <motion.button
      className={`w-full text-left relative overflow-hidden rounded-2xl border transition-all duration-250 p-4 flex items-center gap-3.5 group ${
        isActive
          ? "bg-white dark:bg-white/[0.04] border-transparent shadow-sm"
          : "bg-white/50 dark:bg-white/[0.015] border-[#E6E6E6] dark:border-white/[0.06] hover:border-[#d0d0d0] dark:hover:border-white/[0.12]"
      }`}
      style={isActive ? { boxShadow: `0 0 0 1.5px ${product.color}50, 0 4px 20px rgba(0,0,0,0.06)` } : {}}
      onClick={onClick}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
      whileHover={{ x: isActive ? 0 : -2, transition: { duration: 0.18 } }}
    >
      {/* Active left accent bar */}
      {isActive && (
        <motion.div
          layoutId="selector-bar"
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
          style={{ background: product.color }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Icon */}
      <div
        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-200"
        style={{ background: isActive ? `${product.color}20` : `${product.color}10` }}
      >
        <Icon className="w-4 h-4" style={{ color: product.color }} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <p className={`text-sm font-semibold truncate transition-colors duration-200 ${
            isActive ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400"
          }`}>
            {product.shortTitle}
          </p>
          {product.status === "Live" && (
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6E8F6A]" />
          )}
        </div>
        <div className="mt-1">
          <PopBar value={product.popularity} color={product.color} />
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.2, x: isActive ? 0 : -3 }}
        transition={{ duration: 0.18 }}
        className="flex-shrink-0"
      >
        <ChevronRight className="w-3.5 h-3.5" style={{ color: product.color }} />
      </motion.div>
    </motion.button>
  );
}

// ─── Featured panel (left) ──────────────────────────────────────────────────

function FeaturedPanel({ product }: { product: typeof products[0] }) {
  const Icon = product.icon;
  const isLive = product.status === "Live";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.id}
        className="relative h-full overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] flex flex-col"
        initial={{ opacity: 0, scale: 0.975, y: 12 }}
        animate={{ opacity: 1, scale: 1,     y: 0  }}
        exit={{   opacity: 0, scale: 0.975, y: -12 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background radial glow */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${product.color}14, transparent 65%)` }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${product.color}08, transparent 65%)` }}
        />

        {/* Large watermark number */}
        <div
          className="absolute top-4 right-6 font-mono text-[7rem] font-bold select-none pointer-events-none leading-none"
          style={{ color: `${product.color}09` }}
        >
          {String(products.findIndex(p => p.id === product.id) + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${product.color}18` }}
              layoutId={`icon-${product.id}`}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-7 h-7" style={{ color: product.color }} />
            </motion.div>

            <div className="flex items-center gap-2">
              {/* Status badge */}
              <span
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
                style={
                  isLive
                    ? { background: `${product.color}18`, color: product.color }
                    : { background: "#F5F5F5", color: "#999" }
                }
              >
                {isLive && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: product.color }} />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: product.color }} />
                    </span>
                    Live
                  </span>
                )}
                {!isLive && "Coming Soon"}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.12em] mb-2"
            style={{ color: product.color }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.3 }}
          >
            {product.tagline}
          </motion.p>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.09, duration: 0.32 }}
          >
            {product.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.32 }}
          >
            {product.description}
          </motion.p>

          {/* Feature list */}
          <motion.ul
            className="flex flex-col gap-2.5 mb-6 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.17, duration: 0.35 }}
          >
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: `${product.color}18` }}
                >
                  <Check className="w-3 h-3" style={{ color: product.color }} />
                </span>
                {f}
              </li>
            ))}
          </motion.ul>

          {/* Meta row */}
          <motion.div
            className="flex items-center gap-4 mb-6 pt-4 border-t border-[#E6E6E6] dark:border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
              <Clock className="w-3.5 h-3.5" />
              Setup in {product.timeToValue}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.popularity}% devs love it
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
              <Zap className="w-3.5 h-3.5" style={{ color: product.color }} />
              Free forever
            </div>
          </motion.div>

          {/* Popularity bar */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-neutral-500 dark:text-neutral-600">Popularity</span>
              <span className="text-[10px] font-semibold" style={{ color: product.color }}>{product.popularity}%</span>
            </div>
            <PopBar value={product.popularity} color={product.color} delay={0.25} />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.32 }}
          >
            {isLive ? (
              <button
                onClick={() => safeWindowOpen(product.url)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: product.color,
                  boxShadow: `0 4px 16px ${product.color}40`,
                }}
              >
                Launch App
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link to={product.internalUrl}>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border"
                  style={{
                    color: product.color,
                    borderColor: `${product.color}40`,
                    background: `${product.color}08`,
                  }}
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            )}
            <Link to={product.internalUrl}>
              <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors duration-200">
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Compact grid card (filtered view) ─────────────────────────────────────

function GridCard({ product, index }: { product: typeof products[0]; index: number }) {
  const Icon = product.icon;
  const isLive = product.status === "Live";
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] p-5 flex flex-col gap-4 group"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{   opacity: 0, scale: 0.96           }}
      transition={{ delay: index * 0.055, duration: 0.38, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 15% 0%, ${product.color}12, transparent 65%)` }}
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.28 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${product.color}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: product.color }} />
        </div>
        <span
          className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
          style={
            isLive
              ? { background: `${product.color}18`, color: product.color }
              : { background: "#F5F5F5", color: "#999" }
          }
        >
          {product.status}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: product.color }}>
          {product.tagline}
        </p>
        <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-2 leading-tight group-hover:transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-[12px] text-neutral-500 dark:text-neutral-500 leading-relaxed">
          {product.description.slice(0, 90)}…
        </p>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {product.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="text-[10px] px-2 py-0.5 rounded-md font-medium"
            style={{ background: `${product.color}10`, color: product.color }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0] dark:border-white/[0.05] relative z-10">
        <div className="flex items-center gap-1 text-[10px] text-neutral-400 dark:text-neutral-600">
          <Clock className="w-3 h-3" />
          {product.timeToValue}
        </div>
        {isLive ? (
          <button
            onClick={() => safeWindowOpen(product.url)}
            className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
            style={{ color: product.color }}
          >
            Try Now <ExternalLink className="w-3 h-3" />
          </button>
        ) : (
          <Link to={product.internalUrl}>
            <span className="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors">
              Details <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        )}
      </div>

      {/* Bottom accent sweep */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
        animate={{ scaleX: hov ? 1 : 0, transformOrigin: "left" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────

export default function ProductsSection() {
  const [activeIdx,  setActiveIdx]  = useState(0);
  const [activeTab,  setActiveTab]  = useState("All");
  const [viewMode,   setViewMode]   = useState<"featured" | "grid">("featured");

  const filtered = activeTab === "All"
    ? products
    : products.filter(p => p.tags.includes(activeTab));

  return (
    <section id="products" className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.07),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.10),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(78,194,232,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.3]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <Layers className="w-3.5 h-3.5" />
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5">
              The complete{" "}
              <span className="relative inline-block">
                <span className="text-[#6E8F6A]">AI development</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}suite
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              Five AI-powered tools that cover every phase of modern development — unified, free, and production-ready.
            </p>
          </div>
        </ScrollReveal>

        {/* ── View toggle + category filter ── */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveTab(cat); setViewMode("grid"); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === cat && viewMode === "grid"
                      ? "bg-[#6E8F6A] text-white shadow-sm"
                      : "bg-white dark:bg-white/[0.03] text-neutral-500 dark:text-neutral-500 border border-[#E6E6E6] dark:border-white/[0.07] hover:text-neutral-900 dark:hover:text-white hover:border-[#C8C8C8] dark:hover:border-white/[0.15]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured / Grid toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F5F5F5] dark:bg-white/[0.04] border border-[#E8E8E8] dark:border-white/[0.07]">
              {(["featured", "grid"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                    viewMode === mode
                      ? "bg-white dark:bg-white/[0.08] text-neutral-900 dark:text-white shadow-sm"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {mode === "featured" ? "✦ Featured" : "⊞ Grid"}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Featured view ── */}
        <AnimatePresence mode="wait">
          {viewMode === "featured" && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-4 items-stretch min-h-[520px] mb-16">
                {/* Left: featured panel */}
                <FeaturedPanel product={products[activeIdx]} />

                {/* Right: selector stack */}
                <div className="flex flex-col gap-2.5">
                  {products.map((p, i) => (
                    <SelectorCard
                      key={p.id}
                      product={p}
                      isActive={i === activeIdx}
                      onClick={() => setActiveIdx(i)}
                      index={i}
                    />
                  ))}

                  {/* Free forever badge */}
                  <motion.div
                    className="mt-1 rounded-2xl border border-[#E6E6E6] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] p-4 flex items-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#6E8F6A]/12 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-[#6E8F6A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900 dark:text-white">Free forever</p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-500 mt-0.5">All 5 tools. No credit card.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Grid view ── */}
          {viewMode === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p, i) => (
                    <GridCard key={p.id} product={p} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-[#E6E6E6] dark:border-white/[0.06]">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                All tools are free for developers
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                No credit card · No usage limits · Lifetime access
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/apps">
                <SoftButton variant="primary" size="lg" showArrow>
                  Explore All Products
                </SoftButton>
              </Link>
              <Link to="/projects">
                <SoftButton variant="secondary" size="lg">
                  View Roadmap
                </SoftButton>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-10" />
      </div>
    </section>
  );
}
