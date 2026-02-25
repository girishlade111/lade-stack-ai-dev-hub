import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Rocket, Eye, Zap, Shield, Globe, Code,
  ArrowUpRight, Sparkles, Users, Target,
  CheckCircle2, ChevronRight, Star, Layers,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ScrollReveal, SectionDivider } from "@/components/motion";
import AboutDarkShader from "@/components/ui/about-dark-shader";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ──────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2024",
    label: "Foundation",
    desc: "Lade Stack born from a vision to democratize AI dev tools.",
    detail: "Started with a single AI code editor prototype, iterating with 500 early adopters to shape the product direction.",
    color: "#6E8F6A",
  },
  {
    year: "2025",
    label: "Platform Launch",
    desc: "AI Code Editor shipped to 10,000+ developers worldwide.",
    detail: "Released full AI Code Editor with real-time compilation, intelligent suggestions, and multi-language support.",
    color: "#4ec2e8",
  },
  {
    year: "2026",
    label: "Full Ecosystem",
    desc: "5 AI-powered products. One unified developer suite.",
    detail: "API Testing, Website Builder, File Sharing, and Doc AI join the platform — completing the Lade Suite.",
    color: "#b47ee8",
  },
];

const pillars = [
  {
    icon: Target,
    label: "Mission",
    headline: "Democratize AI tooling",
    body: "Enterprise-grade AI solutions that cut development time dramatically — available to every developer, not just teams with budget.",
    color: "#6E8F6A",
  },
  {
    icon: Eye,
    label: "Vision",
    headline: "AI handles complexity",
    body: "A future where anyone ships enterprise-quality software, with AI absorbing the hard parts so developers focus on creativity.",
    color: "#4ec2e8",
  },
  {
    icon: Sparkles,
    label: "Approach",
    headline: "Open by default",
    body: "Core tools open-sourced, roadmap public, pricing transparent. Trust is the only moat that compounds without limits.",
    color: "#b47ee8",
  },
];

const visionFeatures = [
  { icon: Code,    text: "AI-powered code assistance",     color: "#6E8F6A" },
  { icon: Zap,     text: "Intelligent code optimization",  color: "#e8a64e" },
  { icon: Shield,  text: "Enterprise-grade security",      color: "#4ec2e8" },
  { icon: Globe,   text: "Global developer collaboration", color: "#b47ee8" },
  { icon: Users,   text: "Community-driven development",   color: "#e87070" },
  { icon: Layers,  text: "Unified multi-tool ecosystem",   color: "#6E8F6A" },
];

const products = [
  { name: "AI Code Editor", tag: "Write · Review · Ship",      color: "#6E8F6A", url: "https://code.ladestack.in/" },
  { name: "API Tester",     tag: "Test · Mock · Automate",     color: "#4ec2e8", url: "https://api.ladestack.in/" },
  { name: "Doc Generator",  tag: "Write · Sync · Publish",     color: "#e8a64e", url: "https://docs.ladestack.in/" },
  { name: "No-Code Builder", tag: "Design · Launch · Scale",   color: "#b47ee8", url: "https://builder.ladestack.in/" },
  { name: "File Sharing",   tag: "Upload · Manage · Share",    color: "#e87070", url: "https://files.ladestack.in/" },
];

// ─── Animated number counter (direct DOM, zero re-renders) ─────────────────

function CountUp({ to, suffix = "", duration = 1600, delay = 0 }: {
  to: number; suffix?: string; duration?: number; delay?: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const inView  = useInView(wrapRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    const el = spanRef.current;
    if (!el) return;
    let start: number;
    let raf: number;
    const run = (ts: number) => {
      if (!start) start = ts + delay;
      const elapsed = Math.max(0, ts - start);
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * to) + suffix;
      if (progress < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, suffix, duration, delay]);

  return (
    <span ref={wrapRef}>
      <span ref={spanRef}>0{suffix}</span>
    </span>
  );
}

// ─── Timeline ──────────────────────────────────────────────────────────────

function Timeline() {
  const ref    = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.2 });
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!inView || !el) return;
    el.style.transform = "scaleY(0)";
    el.style.transition = "none";
    void el.getBoundingClientRect();
    const t = setTimeout(() => {
      el.style.transition = "transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s";
      el.style.transform  = "scaleY(1)";
    }, 50);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref} className="relative pl-8">
      {/* Spine track */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-[#E6E6E6] dark:bg-white/[0.07]" />
      {/* Animated fill */}
      <div
        ref={lineRef}
        className="absolute left-3 top-2 w-px origin-top"
        style={{
          bottom: "8px",
          background: "linear-gradient(to bottom, #6E8F6A, #4ec2e8, #b47ee8)",
          transform: "scaleY(0)",
        }}
      />

      <div className="flex flex-col gap-0">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            className="relative pb-8 last:pb-0"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.45, ease: "easeOut" }}
          >
            {/* Dot */}
            <motion.div
              className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-black"
              style={{
                background: item.color,
                boxShadow: `0 0 0 3px ${item.color}30`,
              }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.45, duration: 0.3, type: "spring", stiffness: 300 }}
            />

            {/* Content */}
            <button
              className="w-full text-left group"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {item.year}
                </span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#6E8F6A] transition-colors duration-200">
                  {item.label}
                </span>
                <motion.span
                  animate={{ rotate: active === i ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </motion.span>
              </div>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-500 leading-relaxed">
                {item.desc}
              </p>
            </button>

            <AnimatePresence>
              {active === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden text-[12px] text-neutral-500 dark:text-neutral-500 mt-2 pl-3 border-l-2 rounded-sm leading-relaxed"
                  style={{ borderColor: item.color }}
                >
                  {item.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Pillar Cards ──────────────────────────────────────────────────────────

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const Icon = pillar.icon;
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] p-6 flex flex-col gap-4 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 80% 60% at 10% 0%, ${pillar.color}14, transparent 65%)` }}
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon + label */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${pillar.color}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: pillar.color }} />
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: pillar.color }}
        >
          {pillar.label}
        </span>
      </div>

      {/* Headline */}
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight relative z-10">
        {pillar.headline}
      </h3>

      {/* Body */}
      <p className="text-[13px] text-neutral-500 dark:text-neutral-500 leading-relaxed relative z-10 flex-1">
        {pillar.body}
      </p>

      {/* Bottom bar */}
      <motion.div
        className="h-px rounded-full relative z-10"
        style={{ background: `linear-gradient(90deg, ${pillar.color}70, transparent)` }}
        animate={{ scaleX: hov ? 1 : 0.3, transformOrigin: "left" }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

// ─── Vision feature grid ───────────────────────────────────────────────────

function VisionGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {visionFeatures.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={f.text}
            className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E6E6E6] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02]"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -2, transition: { duration: 0.18 } }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${f.color}18` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: f.color }} />
            </div>
            <span className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
              {f.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Product ecosystem strip ───────────────────────────────────────────────

function ProductStrip() {
  return (
    <div className="relative overflow-hidden">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {[...products, ...products].map((p, i) => (
          <button
            key={i}
            onClick={() => safeWindowOpen(p.url)}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] hover:border-[#C8C8C8] dark:hover:border-white/[0.15] transition-colors duration-200 group"
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: `${p.color}20` }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-neutral-900 dark:text-white whitespace-nowrap">{p.name}</p>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 whitespace-nowrap">{p.tag}</p>
            </div>
            <ArrowUpRight
              className="w-3 h-3 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: p.color }}
            />
          </button>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Stats row ─────────────────────────────────────────────────────────────

const snapStats = [
  { to: 50,  suffix: "K+", label: "Developers" },
  { to: 5,   suffix: "+",  label: "AI Products" },
  { to: 100, suffix: "+",  label: "Countries" },
  { to: 99,  suffix: "%",  label: "Uptime" },
];

function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {snapStats.map((s, i) => (
        <motion.div
          key={s.label}
          className="flex flex-col items-center gap-1 py-5 rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.02] backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.18 } }}
        >
          <span className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            <CountUp to={s.to} suffix={s.suffix} delay={i * 100} />
          </span>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-500">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 bg-white dark:bg-black overflow-hidden">

      {/* WebGL shader — dark mode only */}
      <AboutDarkShader />

      {/* Parallax orb layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.06),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(110,143,106,0.15),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#6E8F6A]/[0.05] to-transparent" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.3]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <Rocket className="w-3.5 h-3.5" />
              About Lade Stack
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5 leading-tight">
              Building the{" "}
              <span className="relative inline-block">
                <span className="text-[#6E8F6A]">future</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}of AI development
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              An AI-powered SaaS ecosystem designed to give every developer enterprise-grade tools at startup velocity — free, open, and built to last.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Stats bar ── */}
        <div className="mb-16">
          <StatsBar />
        </div>

        {/* ── Main bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 mb-5">

          {/* Left top: Mission card (large) */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] p-7 lg:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Corner radial glow */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(110,143,106,0.12),_transparent_70%)]" />

            {/* Watermark */}
            <div className="absolute top-5 right-6 font-mono text-6xl font-bold text-[#6E8F6A]/[0.07] select-none pointer-events-none leading-none">
              MISSION
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#6E8F6A]/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#6E8F6A]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E8F6A]">Our Mission</span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">Why we exist</p>
                </div>
              </div>

              <p className="text-neutral-800 dark:text-neutral-200 text-base leading-relaxed mb-5">
                Democratize advanced development tools by providing{" "}
                <span className="text-[#6E8F6A] font-semibold">enterprise-grade AI solutions</span>{" "}
                that dramatically reduce development time — available to every developer, regardless of team size or budget.
              </p>

              <p className="text-[13px] text-neutral-500 dark:text-neutral-500 leading-relaxed mb-7">
                We believe the gap between a solo developer and a FAANG team shouldn't be measured in tooling. When the tools level the playing field, creativity and execution are all that matters.
              </p>

              {/* Timeline */}
              <Timeline />
            </div>
          </motion.div>

          {/* Right: stacked vision + features */}
          <div className="flex flex-col gap-5">

            {/* Vision card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(78,194,232,0.10),_transparent_70%)]" />
              <div className="absolute top-5 right-6 font-mono text-6xl font-bold text-[#4ec2e8]/[0.07] select-none pointer-events-none leading-none">
                VISION
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4ec2e8]/15 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#4ec2e8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ec2e8]">Our Vision</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">Where we're heading</p>
                  </div>
                </div>

                <p className="text-neutral-800 dark:text-neutral-200 text-[15px] leading-relaxed mb-5">
                  A world where{" "}
                  <span className="text-[#4ec2e8] font-semibold">anyone can ship enterprise-quality software</span>{" "}
                  — AI handling the complexity, developers focusing on creativity and impact.
                </p>

                <VisionGrid />
              </div>
            </motion.div>

            {/* Approach card (compact) */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-[#6E8F6A] p-6 flex items-center gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_120%_at_100%_0%,_rgba(255,255,255,0.10),_transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_100%,_rgba(255,255,255,0.06),_transparent_60%)]" />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/15 flex-shrink-0 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-white font-bold text-sm mb-1">Open by default</p>
                <p className="text-white/70 text-[12px] leading-relaxed">
                  Core tools open-source, roadmap public, pricing transparent. Trust compounds without limits.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <div className="flex flex-col gap-1">
                  {["12K+ stars", "200+ contributors", "Public roadmap"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-white/70 flex-shrink-0" />
                      <span className="text-[11px] text-white/80 whitespace-nowrap">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Pillar cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {pillars.map((p, i) => (
            <PillarCard key={p.label} pillar={p} index={i} />
          ))}
        </div>

        {/* ── Products ticker ── */}
        <ScrollReveal>
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6E6E6] dark:via-white/[0.07] to-transparent" />
              <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-widest flex items-center gap-1.5 flex-shrink-0">
                <Layers className="w-3 h-3" />
                The Lade Suite
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6E6E6] dark:via-white/[0.07] to-transparent" />
            </div>
            <ProductStrip />
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-10" />
      </div>
    </section>
  );
}
