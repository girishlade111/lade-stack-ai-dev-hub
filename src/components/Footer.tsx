import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Instagram, Code, Mail,
  ArrowRight, ArrowUpRight, Code2, Cpu,
  Globe, FileText, Brain, Sparkles, Check,
  MapPin, Shield, Zap, Heart,
} from "lucide-react";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ───────────────────────────────────────────────────────────────────

const products = [
  { name: "AI Code Editor",   href: "/ai-code-viewer-ai",         icon: Code2,    color: "#6E8F6A", live: true  },
  { name: "API Tester",       href: "/api-testing-platform",      icon: Cpu,      color: "#4ec2e8", live: false },
  { name: "No-Code Builder",  href: "/projects/website-builder",  icon: Globe,    color: "#b47ee8", live: false },
  { name: "Doc Generator",    href: "/projects/documentation-ai", icon: Brain,    color: "#e8a64e", live: false },
  { name: "File Sharing",     href: "/file-sharing-platform",     icon: FileText, color: "#e87070", live: false },
];

const navColumns = [
  {
    heading: "Platform",
    links: [
      { label: "AI Code Editor",  href: "/ai-code-viewer-ai"        },
      { label: "API Tester",      href: "/api-testing-platform"     },
      { label: "No-Code Builder", href: "/projects/website-builder" },
      { label: "Doc Generator",   href: "/projects/documentation-ai"},
      { label: "File Sharing",    href: "/file-sharing-platform"    },
      { label: "Apps Gallery",    href: "/apps"                     },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",        href: "/about"    },
      { label: "Blog",         href: "/blog"     },
      { label: "All Projects", href: "/projects" },
      { label: "Contact",      href: "/contact"  },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation",   href: "/docs"    },
      { label: "Support",         href: "/support" },
      { label: "Privacy Policy",  href: "/privacy" },
      { label: "Terms of Service",href: "/terms"   },
    ],
  },
];

const socials = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/girishlade111",                   color: "#6E8F6A" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/girish-lade-075bba201/", color: "#0A66C2" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/girish_lade_/",            color: "#E1306C" },
  { icon: Code,      label: "CodePen",   href: "https://codepen.io/Girish-Lade-the-looper",          color: "#FFC933" },
  { icon: Mail,      label: "Email",     href: "mailto:admin@ladestack.in",                           color: "#b47ee8" },
];

const trustItems = [
  { icon: Shield, text: "SOC 2 Compliant"   },
  { icon: Zap,    text: "99.9% Uptime"      },
  { icon: Heart,  text: "Free Forever"      },
  { icon: Globe,  text: "100+ Countries"    },
];

// ─── Newsletter ─────────────────────────────────────────────────────────────

function Newsletter() {
  const [email,  setEmail]  = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    setTimeout(() => { setStatus("done"); setEmail(""); }, 900);
    setTimeout(() => setStatus("idle"), 4400);
  };

  return (
    <div>
      <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
        Stay ahead of the curve
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4 leading-relaxed">
        New tools, tutorials, and updates. No spam, ever.
      </p>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            className="flex items-center gap-2 h-10 text-[#6E8F6A]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-5 h-5 rounded-full bg-[#6E8F6A]/15 flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm font-medium">You're on the list!</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 min-w-0 h-10 px-3.5 text-sm bg-white dark:bg-white/[0.05] border border-[#E0E0E0] dark:border-white/[0.09] rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/25 focus:outline-none focus:border-[#6E8F6A]/60 transition-colors duration-200"
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="flex-shrink-0 h-10 px-4 bg-[#6E8F6A] text-white text-sm font-semibold rounded-xl flex items-center gap-1.5 disabled:opacity-60"
              whileHover={{ scale: 1.03, backgroundColor: "#5F7F63" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              {status === "sending" ? (
                <motion.div
                  className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Product pill (floating row) ────────────────────────────────────────────

function ProductPill({ product, index }: { product: typeof products[0]; index: number }) {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={product.href}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white/80 dark:bg-white/[0.03] hover:border-[#C8C8C8] dark:hover:border-white/[0.14] transition-all duration-200"
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${product.color}18` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: product.color }} />
        </div>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
          {product.name}
        </span>
        {product.live && (
          <span
            className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full"
            style={{ background: `${product.color}18`, color: product.color }}
          >
            LIVE
          </span>
        )}
        {!product.live && (
          <span className="ml-auto text-[9px] text-neutral-400 dark:text-neutral-600 font-medium">Soon</span>
        )}
      </Link>
    </motion.div>
  );
}

// ─── Animated grid lines (decorative) ──────────────────────────────────────

function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {[20, 50, 80].map(p => (
        <div key={p} className="absolute left-0 right-0 h-px bg-[#6E8F6A]/[0.04] dark:bg-[#6E8F6A]/[0.06]" style={{ top: `${p}%` }} />
      ))}
      {[25, 50, 75].map(p => (
        <div key={p} className="absolute top-0 bottom-0 w-px bg-[#6E8F6A]/[0.04] dark:bg-[#6E8F6A]/[0.06]" style={{ left: `${p}%` }} />
      ))}
    </div>
  );
}

// ─── Large wordmark (decorative) ────────────────────────────────────────────

function Wordmark() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      <span
        className="font-bold leading-none tracking-[-0.04em] whitespace-nowrap"
        style={{
          fontSize: "clamp(60px, 14vw, 180px)",
          color: "transparent",
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: "rgba(110,143,106,0.07)",
          marginBottom: "-0.12em",
        }}
      >
        LADE STACK
      </span>
    </div>
  );
}

// ─── Main Footer ─────────────────────────────────────────────────────────────

export default function Footer() {
  const year    = new Date().getFullYear();
  const footRef = useRef<HTMLElement>(null);
  const inView  = useInView(footRef, { once: true, amount: 0.05 });

  const { scrollYProgress } = useScroll({ target: footRef, offset: ["start end", "end end"] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);

  return (
    <footer
      ref={footRef}
      className="relative bg-[#EFEAE0] dark:bg-[#050505] overflow-hidden"
    >
      <GridLines />

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.09),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.06),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E8F6A]/25 to-transparent" />
          <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_60%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse,_rgba(78,194,232,0.04),_transparent_60%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.22]" />
      </div>

      {/* ══════════════════════════════════════════
          ZONE 1 — Big CTA hero band
      ══════════════════════════════════════════ */}
      <div className="relative z-10 border-b border-[#E0DACE] dark:border-white/[0.06]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — editorial headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tag-pill inline-flex items-center gap-2 mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Free forever
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12] mb-5">
                Build smarter.<br />
                <span className="text-[#6E8F6A]">Ship faster.</span><br />
                Pay nothing.
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-md mb-8">
                Five enterprise-grade AI tools — unified, open, and completely free.
                No credit card. No usage limits. No catch.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2">
                {trustItems.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={t.text}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E0E0E0] dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.03] text-xs font-medium text-neutral-600 dark:text-neutral-400"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
                    >
                      <Icon className="w-3 h-3 text-[#6E8F6A]" />
                      {t.text}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right — product pills grid + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              {/* Product pill grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {products.map((p, i) => (
                  <ProductPill key={p.name} product={p} index={i} />
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.button
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6E8F6A] text-white text-sm font-bold shadow-[0_4px_20px_rgba(110,143,106,0.30)] hover:bg-[#5F7F63] hover:shadow-[0_4px_24px_rgba(110,143,106,0.40)] transition-all duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => safeWindowOpen("https://code.ladestack.in/")}
                >
                  Start Building Free
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
                <Link
                  to="/apps"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#D0D0D0] dark:border-white/[0.12] text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:border-[#6E8F6A]/50 hover:text-[#6E8F6A] dark:hover:text-white transition-all duration-200"
                >
                  Explore All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ZONE 2 — Main nav grid
      ══════════════════════════════════════════ */}
      <div className="relative z-10 border-b border-[#E0DACE] dark:border-white/[0.05]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-10 lg:gap-8">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
                <div className="w-10 h-10 rounded-2xl bg-[#6E8F6A] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(110,143,106,0.45)] transition-all duration-200">
                  <span className="text-sm font-mono font-bold text-white leading-none">{"</>"}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                    Lade <span className="text-[#6E8F6A]">Stack</span>
                  </p>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono">v2.0 · 2026</p>
                </div>
              </Link>

              <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed mb-6 max-w-[220px]">
                The AI-powered dev ecosystem. Enterprise tools, zero cost, built in the open.
              </p>

              {/* Socials */}
              <div className="flex flex-wrap gap-2 mb-5">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-xl bg-white dark:bg-white/[0.04] border border-[#E6E6E6] dark:border-white/[0.07] flex items-center justify-center text-neutral-500 dark:text-neutral-500 transition-all duration-200"
                    whileHover={{ y: -2, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    animate={{}}
                    style={{ "--hover-color": s.color } as React.CSSProperties}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = s.color;
                      el.style.borderColor = s.color;
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "";
                      el.style.borderColor = "";
                      el.style.color = "";
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <s.icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-600">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                Built with ♥ by Girish Lade
              </div>
            </motion.div>

            {/* Nav columns */}
            {navColumns.map((col, ci) => (
              <motion.div
                key={col.heading}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.12 + ci * 0.07 }}
              >
                <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-600 mb-5">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="group flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#6E8F6A] dark:hover:text-white transition-colors duration-200"
                      >
                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 flex-shrink-0">
                          <span className="block w-1 h-1 rounded-full bg-[#6E8F6A]" />
                        </span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.33 }}
            >
              <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-600 mb-5">
                Newsletter
              </h4>
              <Newsletter />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ZONE 3 — Bottom bar
      ══════════════════════════════════════════ */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Left */}
            <p className="text-xs text-neutral-500 dark:text-neutral-600 order-2 sm:order-1 text-center sm:text-left">
              © {year} Lade Stack · All rights reserved
            </p>

            {/* Center */}
            <div className="flex items-center gap-1 order-1 sm:order-2">
              {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms",   href: "/terms"   },
              ].map((l, i) => (
                <span key={l.label} className="flex items-center">
                  {i > 0 && <span className="mx-3 w-px h-3 bg-[#D0D0D0] dark:bg-white/[0.08]" />}
                  <Link
                    to={l.href}
                    className="text-xs text-neutral-500 dark:text-neutral-600 hover:text-[#6E8F6A] dark:hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </div>

            {/* Right — status */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-600 order-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E8F6A] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6E8F6A]" />
              </span>
              All systems operational
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <motion.div style={{ y: wordmarkY }}>
          <Wordmark />
        </motion.div>
      </div>
    </footer>
  );
}
