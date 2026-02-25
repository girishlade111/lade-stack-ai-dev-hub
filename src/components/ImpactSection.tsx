import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Zap, Globe, Heart, BarChart3, ArrowUpRight, Users, Code2 } from "lucide-react";
import { ScrollReveal, SectionDivider, AnimatedCounter } from "@/components/motion";

// ─── Data ──────────────────────────────────────────────────────────────────

const heroStats = [
  {
    value: 10, suffix: "x",
    label: "Faster Development",
    sub: "vs. manual coding",
    icon: Zap,
    color: "#6E8F6A",
    bg: "from-[#6E8F6A]/10 to-transparent",
    border: "border-[#6E8F6A]/20",
  },
  {
    value: 50, suffix: "K+",
    label: "Active Developers",
    sub: "worldwide, growing daily",
    icon: Users,
    color: "#4ec2e8",
    bg: "from-[#4ec2e8]/10 to-transparent",
    border: "border-[#4ec2e8]/20",
  },
  {
    value: 99, suffix: ".9%",
    label: "Platform Uptime",
    sub: "enterprise-grade SLA",
    icon: TrendingUp,
    color: "#e8a64e",
    bg: "from-[#e8a64e]/10 to-transparent",
    border: "border-[#e8a64e]/20",
  },
  {
    value: 98, suffix: "%",
    label: "Developer Satisfaction",
    sub: "happiness score",
    icon: Heart,
    color: "#e87070",
    bg: "from-[#e87070]/10 to-transparent",
    border: "border-[#e87070]/20",
  },
];

const featureImpact = [
  {
    tool: "AI Code Editor",
    icon: Code2,
    color: "#6E8F6A",
    metrics: [
      { label: "Code written by AI", value: 73 },
      { label: "Bug reduction",       value: 61 },
      { label: "Review time saved",   value: 55 },
    ],
  },
  {
    tool: "API Tester",
    icon: Zap,
    color: "#4ec2e8",
    metrics: [
      { label: "Test coverage boost", value: 88 },
      { label: "Manual effort cut",   value: 79 },
      { label: "Faster releases",     value: 64 },
    ],
  },
  {
    tool: "Doc Generator",
    icon: TrendingUp,
    color: "#e8a64e",
    metrics: [
      { label: "Docs time reduced",   value: 82 },
      { label: "Accuracy improved",   value: 91 },
      { label: "Onboarding speed",    value: 68 },
    ],
  },
];

const milestones = [
  { year: "2022",    label: "Founded",    detail: "Launched AI Code Editor beta with 500 early adopters.",      color: "#6E8F6A" },
  { year: "Q1 2023", label: "10K Devs",   detail: "First 10,000 active developers across 40 countries.",       color: "#4ec2e8" },
  { year: "Q3 2023", label: "API Tester", detail: "Released AI-powered API testing — 8K sign-ups in week one.", color: "#e8a64e" },
  { year: "Q1 2024", label: "50K Devs",   detail: "Community hit 50,000 developers in 100+ countries.",        color: "#e87070" },
  { year: "2024+",   label: "Full Suite", detail: "Lade Suite: docs, builder, CLI & AI assistant unified.",    color: "#b47ee8" },
];

// ─── ArcRing ───────────────────────────────────────────────────────────────

function ArcRing({
  percent, color, size = 44, stroke = 4, delay = 0,
}: {
  percent: number; color: string; size?: number; stroke?: number; delay?: number;
}) {
  const circleRef = useRef<SVGCircleElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const inView    = useInView(wrapRef, { once: true, amount: 0.5 });
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const end  = circ * (1 - percent / 100);

  useEffect(() => {
    const el = circleRef.current;
    if (!inView || !el) return;
    el.style.strokeDashoffset = String(circ);
    el.style.transition = "none";
    void el.getBoundingClientRect();
    const t = setTimeout(() => {
      el.style.transition = `stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
      el.style.strokeDashoffset = String(end);
    }, 50);
    return () => clearTimeout(t);
  }, [inView, circ, end, delay]);

  return (
    <div ref={wrapRef} style={{ width: size, height: size }} className="relative flex-shrink-0">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke} />
        <circle
          ref={circleRef}
          cx={size/2} cy={size/2} r={r}
          fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ}
          style={{ willChange: "stroke-dashoffset" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[9px] font-bold" style={{ color }}>{percent}%</span>
      </div>
    </div>
  );
}

// ─── HeroStatCard ──────────────────────────────────────────────────────────

function HeroStatCard({ stat, index }: { stat: (typeof heroStats)[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const Icon = stat.icon;
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border bg-white dark:bg-white/[0.02] ${stat.border} dark:border-white/[0.07] p-6 flex flex-col gap-3 cursor-default`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
    >
      {/* Corner gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-60 pointer-events-none`} />

      {/* Animated glow sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 90% 70% at 10% 10%, ${stat.color}1a, transparent 65%)` }}
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Icon badge */}
      <div
        className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: `${stat.color}18` }}
      >
        <Icon className="w-4 h-4" style={{ color: stat.color }} />
      </div>

      {/* Counter */}
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-none">
          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
        </div>
        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-2 leading-tight">
          {stat.label}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">{stat.sub}</p>
      </div>

      {/* Arrow indicator */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : -4, y: hov ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUpRight className="w-4 h-4" style={{ color: stat.color }} />
      </motion.div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
        style={{ background: stat.color }}
        animate={{ scaleX: hov ? 1 : 0, transformOrigin: "left" }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

// ─── FeatureImpactPanel ────────────────────────────────────────────────────

function MetricBar({
  label, value, color, delay,
}: {
  label: string; value: number; color: string; delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const el = barRef.current;
    if (!inView || !el) return;
    el.style.width = "0%";
    el.style.transition = "none";
    void el.getBoundingClientRect();
    const t = setTimeout(() => {
      el.style.transition = `width 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
      el.style.width = `${value}%`;
    }, 50);
    return () => clearTimeout(t);
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-neutral-600 dark:text-neutral-400">{label}</span>
        <span className="text-[11px] font-semibold" style={{ color }}>{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#F0F0F0] dark:bg-white/[0.06] overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})`, width: 0 }}
        />
      </div>
    </div>
  );
}

function FeatureImpactPanel() {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      className="rounded-2xl bg-white dark:bg-white/[0.02] border border-[#E6E6E6] dark:border-white/[0.07] overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tab header */}
      <div className="flex border-b border-[#E6E6E6] dark:border-white/[0.06]">
        {featureImpact.map((f, i) => {
          const Icon = f.icon;
          const isActive = i === active;
          return (
            <button
              key={f.tool}
              onClick={() => setActive(i)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-xs font-medium transition-all duration-200 relative ${
                isActive
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              }`}
            >
              <Icon className="w-3.5 h-3.5" style={isActive ? { color: f.color } : {}} />
              <span className="hidden sm:inline">{f.tool}</span>
              {isActive && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t-full"
                  style={{ background: f.color }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-6">
            {(() => {
              const f = featureImpact[active];
              const Icon = f.icon;
              return (
                <>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${f.color}18` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: f.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{f.tool}</p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-500">Measured impact on developer workflow</p>
                  </div>
                </>
              );
            })()}
          </div>

          <div className="flex flex-col gap-4">
            {featureImpact[active].metrics.map((m, i) => (
              <MetricBar
                key={`${active}-${m.label}`}
                label={m.label}
                value={m.value}
                color={featureImpact[active].color}
                delay={i * 0.1}
              />
            ))}
          </div>

          <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-5">
            Based on developer surveys across 5,000+ active users.
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MilestoneTimeline ─────────────────────────────────────────────────────

function MilestoneTimeline() {
  const ref    = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    const el = lineRef.current;
    if (!inView || !el) return;
    el.style.scaleY = "0";
    el.style.transition = "none";
    void el.getBoundingClientRect();
    const t = setTimeout(() => {
      el.style.transition = "transform 1.4s cubic-bezier(0.22,1,0.36,1) 0.1s";
      el.style.transform   = "scaleY(1)";
    }, 50);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref} className="relative">
      {/* Spine */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E6E6E6] dark:bg-white/[0.07] -translate-x-1/2" />
      {/* Animated fill */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#6E8F6A] via-[#4ec2e8] to-[#b47ee8] origin-top"
        style={{ height: "100%", transform: "scaleY(0)" }}
      />

      <div className="flex flex-col">
        {milestones.map((m, i) => {
          const isRight = i % 2 !== 0;
          return (
            <motion.div
              key={m.year}
              className={`relative flex items-center gap-0 md:gap-8 py-6 pl-10 md:pl-0 ${
                isRight ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, x: isRight ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.14 + 0.35, duration: 0.45, ease: "easeOut" }}
            >
              {/* Card */}
              <div
                className={`w-full md:w-[calc(50%-28px)] rounded-2xl bg-white dark:bg-white/[0.02] border border-[#E6E6E6] dark:border-white/[0.07] p-5 ${
                  isRight ? "md:text-left" : "md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-2 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${m.color}18`, color: m.color }}
                  >
                    {m.year}
                  </span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">{m.label}</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">{m.detail}</p>
              </div>

              {/* Dot on spine */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center"
                  style={{
                    background: m.color,
                    boxShadow: `0 0 0 4px ${m.color}25, 0 0 12px ${m.color}50`,
                  }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.14 + 0.5, duration: 0.35, type: "spring", stiffness: 300 }}
                />
              </div>

              {/* Spacer opposite side */}
              <div className="hidden md:block md:w-[calc(50%-28px)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 bg-white dark:bg-black overflow-hidden">

      {/* ── Parallax background orbs ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.07),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(78,194,232,0.05),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(232,118,112,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.12),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(78,194,232,0.06),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(180,126,232,0.06),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.35]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <BarChart3 className="w-3.5 h-3.5" />
              Impact & Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5">
              Numbers that{" "}
              <span className="relative inline-block">
                <span className="text-[#6E8F6A]">speak</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}for themselves
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              Real impact on real developers — measurable, repeatable, and growing every day.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Hero stat cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {heroStats.map((stat, i) => (
            <HeroStatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ── Feature impact + arc rings ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-16">

          {/* Left: feature impact bars */}
          <div className="lg:col-span-3">
            <FeatureImpactPanel />
          </div>

          {/* Right: arc ring summary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Arc summary card */}
            <motion.div
              className="rounded-2xl bg-white dark:bg-white/[0.02] border border-[#E6E6E6] dark:border-white/[0.07] p-6 flex-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold text-neutral-900 dark:text-white mb-1">Performance at a glance</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-500 mb-6">Core metrics across all products</p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Speed Boost",   value: 92,   color: "#6E8F6A" },
                  { label: "Uptime SLA",    value: 99.9, color: "#4ec2e8" },
                  { label: "Satisfaction",  value: 98,   color: "#e87070" },
                  { label: "Global Reach",  value: 85,   color: "#b47ee8" },
                ].map((m, i) => (
                  <div key={m.label} className="flex flex-col items-center gap-2">
                    <ArcRing
                      percent={Math.round(m.value)}
                      color={m.color}
                      size={60}
                      stroke={5}
                      delay={i * 0.12}
                    />
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-500 text-center leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* "Growing fast" micro banner */}
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-[#6E8F6A] p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_120%_at_100%_0%,_rgba(255,255,255,0.10),_transparent_60%)]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-white/80" />
                  <span className="text-white text-xs font-semibold">Growing Fast</span>
                </div>
                <p className="text-white/70 text-[11px] leading-relaxed">
                  New developer joins every <span className="text-white font-semibold">8 minutes</span>. 100+ countries.
                  Zero enterprise pricing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Timeline divider ── */}
        <div className="flex items-center gap-5 mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6E6E6] dark:via-white/[0.07] to-transparent" />
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A]" />
            <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
              Our journey
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#b47ee8]" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6E6E6] dark:via-white/[0.07] to-transparent" />
        </div>

        {/* ── Milestone timeline ── */}
        <ScrollReveal>
          <MilestoneTimeline />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
