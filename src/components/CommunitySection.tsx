import { motion, useInView, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import {
  Users, Github, MessageSquare, BookOpen, Zap,
  Globe, Code2, Rocket, ArrowUpRight,
  Star, Terminal, Layers, Sparkles, ChevronRight,
} from "lucide-react";
import { ScrollReveal, SoftButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ──────────────────────────────────────────────────────────────────

const communityStats = [
  { value: "50K+", label: "Developers", icon: Users },
  { value: "12K+", label: "Projects Built", icon: Layers },
  { value: "100+", label: "Countries", icon: Globe },
  { value: "4.9★", label: "Avg Rating", icon: Star },
];

const highlights = [
  {
    icon: Code2,
    label: "Open Source",
    accent: "#6E8F6A",
    description: "Fork, contribute, and shape the future of AI-powered dev tools with thousands of contributors.",
    cta: "View on GitHub",
    url: "https://github.com/girishlade111",
    stat: "2.4K stars",
  },
  {
    icon: MessageSquare,
    label: "Discord Community",
    accent: "#7c86e8",
    description: "Real-time help, project showcases, and collaboration with 50K+ developers worldwide.",
    cta: "Join Discord",
    url: "https://discord.gg/ladestack",
    stat: "50K members",
  },
  {
    icon: BookOpen,
    label: "Documentation",
    accent: "#e8a64e",
    description: "Comprehensive guides, API references, and step-by-step tutorials for every skill level.",
    cta: "Read Docs",
    url: "https://docs.ladestack.in/",
    stat: "200+ guides",
  },
  {
    icon: Rocket,
    label: "Starter Templates",
    accent: "#e87070",
    description: "Production-ready templates built on best practices. Ship your next project in seconds.",
    cta: "Browse Templates",
    url: "https://ladestack.in/",
    stat: "60+ templates",
  },
  {
    icon: Globe,
    label: "Global Events",
    accent: "#4ec2e8",
    description: "Hackathons, webinars, and workshops hosted worldwide — learn, build, and connect.",
    cta: "See Events",
    url: "https://ladestack.in/",
    stat: "24 upcoming",
  },
  {
    icon: Zap,
    label: "Weekly Challenges",
    accent: "#b47ee8",
    description: "AI-powered coding challenges every week. Earn badges, climb the leaderboard, win prizes.",
    cta: "Join Challenge",
    url: "https://ladestack.in/",
    stat: "Active weekly",
  },
];

const aiShowcases = [
  {
    id: "editor",
    label: "AI Code Editor",
    icon: Code2,
    accent: "#6E8F6A",
    prompt: "// AI: refactor this to async/await",
    lines: [
      { text: "async function fetchUser(id: string) {", color: "text-sky-400" },
      { text: "  const res = await fetch(`/api/users/${id}`);", color: "text-neutral-300 dark:text-neutral-300" },
      { text: "  if (!res.ok) throw new Error('Not found');", color: "text-rose-400" },
      { text: "  return res.json() as Promise<User>;", color: "text-[#6E8F6A]" },
      { text: "}", color: "text-sky-400" },
    ],
    badge: "Refactored in 0.3s",
  },
  {
    id: "api",
    label: "API Tester",
    icon: Zap,
    accent: "#e8a64e",
    prompt: "POST /api/auth/login  →  200 OK",
    lines: [
      { text: `{`, color: "text-neutral-400" },
      { text: `  "token": "eyJhbGci...Xk9Q",`, color: "text-[#e8a64e]" },
      { text: `  "user": { "id": "u_8f2k", "role": "admin" },`, color: "text-neutral-300 dark:text-neutral-300" },
      { text: `  "expires_in": 3600`, color: "text-sky-400" },
      { text: `}`, color: "text-neutral-400" },
    ],
    badge: "Auto-generated test ✓",
  },
  {
    id: "docs",
    label: "AI Doc Generator",
    icon: BookOpen,
    accent: "#7c86e8",
    prompt: "/** AI: document this function */",
    lines: [
      { text: "/**", color: "text-neutral-500" },
      { text: " * Authenticates a user and returns a JWT.", color: "text-neutral-400" },
      { text: " * @param email - User's email address", color: "text-[#7c86e8]" },
      { text: " * @param password - Plaintext password", color: "text-[#7c86e8]" },
      { text: " * @returns Signed JWT token string", color: "text-[#6E8F6A]" },
      { text: " */", color: "text-neutral-500" },
    ],
    badge: "Docs in 0.8s",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────

function StatPill({ stat, index }: { stat: (typeof communityStats)[0]; index: number }) {
  const Icon = stat.icon;
  return (
    <motion.div
      className="flex flex-col items-center gap-1 px-6 py-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-[#E6E6E6] dark:border-white/[0.07] backdrop-blur-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Icon className="w-4 h-4 text-[#6E8F6A] mb-1" />
      <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{stat.value}</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-500">{stat.label}</span>
    </motion.div>
  );
}

function HighlightCard({ item, index }: { item: (typeof highlights)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      className="relative group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => safeWindowOpen(item.url)}
    >
      {/* Accent glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 20% 0%, ${item.accent}18, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${item.accent}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: item.accent }} />
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0.3, x: hovered ? 0 : -4, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{item.label}</h3>
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${item.accent}18`, color: item.accent }}
          >
            {item.stat}
          </span>
        </div>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.description}</p>
      </div>

      {/* CTA */}
      <motion.span
        className="relative z-10 text-xs font-medium flex items-center gap-1"
        style={{ color: item.accent }}
        animate={{ gap: hovered ? "6px" : "4px" }}
        transition={{ duration: 0.2 }}
      >
        {item.cta} <ArrowUpRight className="w-3 h-3" />
      </motion.span>
    </motion.div>
  );
}

function TypewriterLine({ text, color, delay }: { text: string; color: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 18);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={`font-mono text-[11px] leading-relaxed block ${color}`}>
      {displayed}
      {!done && <span className="inline-block w-[6px] h-[13px] bg-current opacity-70 ml-0.5 animate-pulse align-middle" />}
    </span>
  );
}

function AIShowcase() {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const switchTo = useCallback((idx: number) => {
    setActive(idx);
    setKey((k) => k + 1);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % aiShowcases.length;
        setKey((k) => k + 1);
        return next;
      });
    }, 5500);
  }, []);

  useEffect(() => {
    if (!inView) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % aiShowcases.length;
        setKey((k) => k + 1);
        return next;
      });
    }, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [inView]);

  const showcase = aiShowcases[active];
  const Icon = showcase.icon;

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E6E6E6] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#6E8F6A]" />
          <span className="text-xs font-semibold text-neutral-900 dark:text-white">AI in Action</span>
        </div>
        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          {aiShowcases.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => switchTo(i)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all duration-200 ${
                  i === active
                    ? "text-white"
                    : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
                style={i === active ? { background: s.accent } : {}}
              >
                <TabIcon className="w-3 h-3" />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal body */}
      <div className="flex-1 bg-[#1a1a1a] dark:bg-[#111] p-5 flex flex-col gap-3">
        {/* Window chrome dots */}
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="font-mono text-[10px] text-neutral-600 ml-2">{showcase.label.toLowerCase().replace(/ /g, "-")}.ts</span>
        </div>

        {/* Prompt line */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`prompt-${active}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <Terminal className="w-3 h-3 text-neutral-600 flex-shrink-0" />
            <span className="font-mono text-[11px] text-neutral-500">{showcase.prompt}</span>
          </motion.div>
        </AnimatePresence>

        {/* Separator */}
        <div className="border-t border-white/[0.06]" />

        {/* Animated code lines */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`lines-${key}`}
            className="flex flex-col gap-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {showcase.lines.map((line, i) => (
              <TypewriterLine
                key={`${key}-${i}`}
                text={line.text}
                color={line.color}
                delay={i * 220}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Badge */}
        <AnimatePresence>
          <motion.div
            key={`badge-${key}`}
            className="mt-auto flex items-center gap-1.5 self-start"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: showcase.lines.length * 0.22 + 0.3, duration: 0.3 }}
          >
            <span
              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: `${showcase.accent}25`, color: showcase.accent }}
            >
              ✦ {showcase.badge}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-[#E6E6E6] dark:bg-white/[0.05] relative overflow-hidden">
        <motion.div
          key={`progress-${key}`}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: showcase.accent }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5.5, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

const techTags = [
  { label: "React",       color: "#61DAFB", row: 0 },
  { label: "TypeScript",  color: "#3178C6", row: 0 },
  { label: "Node.js",     color: "#6E8F6A", row: 0 },
  { label: "Python",      color: "#e8a64e", row: 0 },
  { label: "Next.js",     color: "#888",    row: 1 },
  { label: "Tailwind",    color: "#38BDF8", row: 1 },
  { label: "GraphQL",     color: "#E10098", row: 1 },
  { label: "Docker",      color: "#2496ED", row: 1 },
  { label: "Rust",        color: "#CE422B", row: 1 },
  { label: "Go",          color: "#00ADD8", row: 2 },
  { label: "PostgreSQL",  color: "#336791", row: 2 },
  { label: "Redis",       color: "#DC382D", row: 2 },
  { label: "AWS",         color: "#FF9900", row: 2 },
  { label: "Vercel",      color: "#888",    row: 2 },
  { label: "Supabase",    color: "#3ECF8E", row: 3 },
  { label: "Prisma",      color: "#5A67D8", row: 3 },
  { label: "Vue",         color: "#42B883", row: 3 },
  { label: "Svelte",      color: "#FF3E00", row: 3 },
];

function TechStackCloud() {
  const [hovered, setHovered] = useState<string | null>(null);
  const offsetsRef = useRef<number[]>(techTags.map((_, i) => i * 1.4));
  const elemsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useAnimationFrame((_, delta) => {
    if (isPausedRef.current) return;
    offsetsRef.current = offsetsRef.current.map((o) => o + delta * 0.00018);
    elemsRef.current.forEach((el, i) => {
      if (!el) return;
      const t = offsetsRef.current[i];
      const y = Math.sin(t) * 5;
      const x = Math.cos(t * 0.6) * 3;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  const setRef = useCallback((el: HTMLSpanElement | null, i: number) => {
    elemsRef.current[i] = el;
  }, []);

  // Group by row
  const rows = [0, 1, 2, 3].map((r) => techTags.filter((t) => t.row === r));

  return (
    <div
      ref={containerRef}
      className="rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] p-5 overflow-hidden"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; setHovered(null); }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold text-neutral-900 dark:text-white">Works with your stack</span>
        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">18+ languages & tools</span>
      </div>

      {/* Tag rows */}
      <div className="flex flex-col gap-2.5">
        {rows.map((row, ri) => (
          <div key={ri} className="flex flex-wrap gap-2 justify-center">
            {row.map((tag, ti) => {
              const globalIndex = techTags.findIndex((t) => t.label === tag.label);
              const isHov = hovered === tag.label;
              return (
                <span
                  key={tag.label}
                  ref={(el) => setRef(el, globalIndex)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border cursor-default select-none transition-all duration-200"
                  style={{
                    background: isHov ? `${tag.color}18` : "transparent",
                    borderColor: isHov ? `${tag.color}60` : "var(--border-color, #E6E6E6)",
                    color: isHov ? tag.color : undefined,
                    willChange: "transform",
                  }}
                  onMouseEnter={() => setHovered(tag.label)}
                >
                  {/* Color dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                    style={{ background: tag.color, opacity: isHov ? 1 : 0.5, transform: isHov ? "scale(1.3)" : "scale(1)" }}
                  />
                  <span className={`transition-colors duration-200 ${isHov ? "" : "text-neutral-600 dark:text-neutral-400"}`}>
                    {tag.label}
                  </span>
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <p className="text-center text-[10px] text-neutral-400 dark:text-neutral-600 mt-4">
        Hover to explore · Integrates seamlessly
      </p>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────

export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 bg-beige dark:bg-black overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.12),_transparent_65%)]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_65%)]" />
        </div>
        {/* Dark mode */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-95" />
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.09),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.06),_transparent_60%)]" />
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 dot-pattern opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <Users className="w-3.5 h-3.5" />
              Developer Community
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight text-neutral-900 dark:text-white">
              Built{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#6E8F6A]">with</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </span>
              {" "}developers,{" "}
              <span className="text-[#6E8F6A]">for</span> developers
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A thriving open ecosystem where every tool is a conversation between us and the people who use them.
              Join, contribute, and grow with a global community that ships together.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-2xl mx-auto">
          {communityStats.map((stat, i) => (
            <StatPill key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ── Highlights grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {highlights.map((item, i) => (
            <HighlightCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom two-column: activity + heatmap ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
          <AIShowcase />
          <div className="flex flex-col gap-4">
            <TechStackCloud />

            {/* "Open to contributions" banner */}
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-[#6E8F6A] p-6 flex items-center justify-between gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.45 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_100%_50%,_rgba(255,255,255,0.08),_transparent)]" />
              <div className="relative z-10">
                <p className="text-white font-semibold text-sm mb-0.5">Open to contributions</p>
                <p className="text-white/70 text-xs leading-relaxed">
                  Every PR matters. We review, merge, and celebrate every contribution.
                </p>
              </div>
              <motion.button
                className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-medium px-4 py-2.5 rounded-xl border border-white/20 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => safeWindowOpen("https://github.com/girishlade111")}
              >
                <Github className="w-4 h-4" />
                Contribute
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* ── CTA ── */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-neutral-500 dark:text-neutral-500 text-sm mb-6">
              Ready to be part of something bigger?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <SoftButton
                variant="primary"
                size="lg"
                showArrow
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Get Started Free
              </SoftButton>
              <SoftButton
                variant="secondary"
                size="lg"
                onClick={() => safeWindowOpen("https://github.com/girishlade111")}
              >
                <Github className="w-4 h-4" /> Star on GitHub
              </SoftButton>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
