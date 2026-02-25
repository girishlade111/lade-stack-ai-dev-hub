import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Github, Linkedin, Instagram, Code, Mail,
  ArrowRight, ArrowUpRight, Code2, Cpu,
  Globe, FileText, Brain, Sparkles,
  MapPin, ExternalLink, ChevronRight,
} from "lucide-react";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ──────────────────────────────────────────────────────────────────

const products = [
  { name: "AI Code Editor",    href: "/ai-code-viewer-ai",         icon: Code2,     color: "#6E8F6A", live: true  },
  { name: "API Testing",       href: "/api-testing-platform",      icon: Cpu,       color: "#4ec2e8", live: false },
  { name: "No-Code Builder",   href: "/projects/website-builder",  icon: Globe,     color: "#b47ee8", live: false },
  { name: "Documentation AI",  href: "/projects/documentation-ai", icon: Brain,     color: "#e8a64e", live: false },
  { name: "File Sharing",      href: "/file-sharing-platform",     icon: FileText,  color: "#e87070", live: false },
];

const company = [
  { name: "About",         href: "/about"   },
  { name: "Blog",          href: "/blog"    },
  { name: "Contact",       href: "/contact" },
  { name: "Apps Gallery",  href: "/apps"    },
  { name: "All Projects",  href: "/projects"},
];

const resources = [
  { name: "Documentation", href: "/docs"    },
  { name: "Support",        href: "/support" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socials = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/girishlade111",                            color: "#6E8F6A" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/girish-lade-075bba201/",          color: "#0A66C2" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/girish_lade_/",                     color: "#E1306C" },
  { icon: Code,      label: "CodePen",   href: "https://codepen.io/Girish-Lade-the-looper",                   color: "#e8a64e" },
  { icon: Mail,      label: "Email",     href: "mailto:admin@ladestack.in",                                    color: "#b47ee8" },
];

const stats = [
  { value: "50K+",  label: "Developers"   },
  { value: "5",     label: "AI Products"  },
  { value: "100+",  label: "Countries"    },
  { value: "Free",  label: "Forever"      },
];

// ─── Newsletter ─────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail]     = useState("");
  const [status, setStatus]   = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sent");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <div className="rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.02] p-5">
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-3.5 h-3.5 text-[#6E8F6A]" />
        <p className="text-xs font-semibold text-neutral-900 dark:text-white">Stay in the loop</p>
      </div>
      <p className="text-[11px] text-neutral-500 dark:text-neutral-500 mb-4 leading-relaxed">
        New tools, tutorials, and updates — straight to your inbox. No spam, ever.
      </p>

      {status === "sent" ? (
        <motion.div
          className="flex items-center gap-2 py-2.5 text-[#6E8F6A]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-medium">✓ You're on the list!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 min-w-0 px-3 py-2 text-xs bg-white dark:bg-white/[0.05] border border-[#E6E6E6] dark:border-white/[0.08] rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#6E8F6A]/50 transition-colors duration-200"
          />
          <motion.button
            type="submit"
            className="flex-shrink-0 w-9 h-9 bg-[#6E8F6A] text-white rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.06, backgroundColor: "#5F7F63" }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </form>
      )}
    </div>
  );
}

// ─── Animated stat pill ─────────────────────────────────────────────────────

function StatPill({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0.5 px-4 py-3 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.06]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
    >
      <span className="text-base font-bold text-neutral-900 dark:text-white tracking-tight leading-none">{value}</span>
      <span className="text-[9px] text-neutral-500 dark:text-neutral-500">{label}</span>
    </motion.div>
  );
}

// ─── Column heading ─────────────────────────────────────────────────────────

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-600 mb-5">
      {children}
    </h4>
  );
}

// ─── Footer link ────────────────────────────────────────────────────────────

function FLink({ to, external, children }: { to: string; external?: boolean; children: React.ReactNode }) {
  const cls = "group flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#6E8F6A] dark:hover:text-white transition-colors duration-200";
  const inner = (
    <>
      {children}
      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
    </>
  );
  if (external) return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  return <Link to={to} className={cls}>{inner}</Link>;
}

// ─── Main Footer ────────────────────────────────────────────────────────────

export default function Footer() {
  const year      = new Date().getFullYear();
  const ref       = useRef<HTMLElement>(null);
  const inView    = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="relative bg-[#EFEAE0] dark:bg-[#060606] border-t border-[#E0DACE] dark:border-white/[0.06] overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.06),_transparent_60%)]" />
        </div>
        {/* Dark */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E8F6A]/20 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.09),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse,_rgba(180,126,232,0.04),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.25]" />
      </div>

      {/* ── Pre-footer CTA band ── */}
      <motion.div
        className="relative border-b border-[#E0DACE] dark:border-white/[0.05]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left copy */}
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                Start building smarter — it's free
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                5 AI tools. No credit card. No usage limits. Lifetime access.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6E8F6A] text-white text-sm font-semibold shadow-sm hover:bg-[#5F7F63] transition-colors duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Try for Free
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
              <Link
                to="/apps"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#D0D0D0] dark:border-white/[0.12] text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-[#6E8F6A]/40 hover:text-[#6E8F6A] dark:hover:text-white transition-colors duration-200"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Main footer grid ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Brand column (4 cols) ── */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-[#6E8F6A] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <span className="text-xs font-mono font-bold text-white leading-none">{"</>"}</span>
              </div>
              <span className="text-base font-bold text-neutral-900 dark:text-white">
                Lade <span className="text-[#6E8F6A]">Stack</span>
              </span>
            </Link>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 max-w-xs">
              The AI-powered development ecosystem. Enterprise-grade tools built for modern
              developers — free, open, and built to last.
            </p>

            {/* Stats mini-grid */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {stats.map((s, i) => (
                <StatPill key={s.label} {...s} index={i} />
              ))}
            </div>

            {/* Social row */}
            <div className="flex items-center gap-2 mb-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.04] border border-[#E6E6E6] dark:border-white/[0.07] flex items-center justify-center text-neutral-500 dark:text-neutral-500 hover:text-white dark:hover:text-white transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.05, backgroundColor: s.color, borderColor: s.color }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.18 }}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-600">
              <MapPin className="w-3 h-3" />
              <span>Built with ♥ by Girish Lade</span>
            </div>
          </motion.div>

          {/* ── Products column (3 cols) ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <ColHead>Products</ColHead>
            <ul className="flex flex-col gap-3">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.name}>
                    <Link
                      to={p.href}
                      className="group flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{ background: `${p.color}15` }}
                      >
                        <Icon className="w-3 h-3" style={{ color: p.color }} />
                      </div>
                      <span className="flex-1">{p.name}</span>
                      {p.live ? (
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6E8F6A] opacity-80" />
                      ) : (
                        <span className="flex-shrink-0 text-[9px] font-medium text-neutral-400 dark:text-neutral-600">Soon</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ── Company column (2 cols) ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <ColHead>Company</ColHead>
            <ul className="flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.name}>
                  <FLink to={l.href}>{l.name}</FLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Resources + Newsletter (3 cols) ── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-7"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <div>
              <ColHead>Resources</ColHead>
              <ul className="flex flex-col gap-3">
                {resources.map((l) => (
                  <li key={l.name}>
                    <FLink to={l.href}>{l.name}</FLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <Newsletter />
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="relative z-10 border-t border-[#E0DACE] dark:border-white/[0.05]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Left — copyright */}
            <p className="text-xs text-neutral-500 dark:text-neutral-600 text-center sm:text-left">
              © {year} Lade Stack · All rights reserved
            </p>

            {/* Center — legal links */}
            <div className="flex items-center gap-4">
              {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms",   href: "/terms"   },
              ].map((l, i) => (
                <span key={l.label} className="flex items-center gap-4">
                  {i > 0 && <span className="w-px h-3 bg-[#D0D0D0] dark:bg-white/[0.1]" />}
                  <Link
                    to={l.href}
                    className="text-xs text-neutral-500 dark:text-neutral-600 hover:text-[#6E8F6A] dark:hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </div>

            {/* Right — live indicator */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E8F6A] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6E8F6A]" />
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
