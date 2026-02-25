import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Zap, Globe, Heart, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftCard, SectionDivider, AnimatedCounter } from "@/components/motion";

const stats = [
  { icon: Zap, value: 10, suffix: "x", label: "Faster Development", description: "Average speed increase with AI assistance" },
  { icon: Globe, value: 50, suffix: "K+", label: "Developers", description: "Trust Lade Stack for their workflows" },
  { icon: TrendingUp, value: 99, suffix: ".9%", label: "Uptime", description: "Enterprise-grade reliability guaranteed" },
  { icon: Heart, value: 98, suffix: "%", label: "Satisfaction", description: "Developer happiness score" },
];

// ── Radial gauge data ───────────────────────────────────────────────────────
const gauges = [
  {
    label: "Speed Boost",
    value: "10×",
    percent: 92,
    sub: "vs. manual coding",
    color: "#6E8F6A",
    trackColor: "#6E8F6A22",
    icon: Zap,
  },
  {
    label: "Uptime SLA",
    value: "99.9%",
    percent: 99.9,
    sub: "enterprise-grade",
    color: "#4ec2e8",
    trackColor: "#4ec2e822",
    icon: TrendingUp,
  },
  {
    label: "Satisfaction",
    value: "98%",
    percent: 98,
    sub: "developer happiness",
    color: "#e87070",
    trackColor: "#e8707022",
    icon: Heart,
  },
  {
    label: "Global Reach",
    value: "100+",
    percent: 85,
    sub: "countries worldwide",
    color: "#b47ee8",
    trackColor: "#b47ee822",
    icon: Globe,
  },
];

// ── Timeline milestones ─────────────────────────────────────────────────────
const milestones = [
  { year: "2022", title: "Founded", detail: "Lade Stack launched with AI Code Editor beta." },
  { year: "Q1 '23", title: "10K Devs", detail: "First major milestone — 10,000 active developers." },
  { year: "Q3 '23", title: "API Tester", detail: "Launched AI-powered API testing platform." },
  { year: "Q1 '24", title: "50K Devs", detail: "Community crossed 50,000 developers in 100+ countries." },
  { year: "2024+", title: "Suite", detail: "Full Lade Suite — docs, builder, CLI & more." },
];

// ── Radial Arc Ring ─────────────────────────────────────────────────────────
function ArcRing({
  percent,
  color,
  trackColor,
  size = 120,
  stroke = 9,
  delay = 0,
}: {
  percent: number;
  color: string;
  trackColor: string;
  size?: number;
  stroke?: number;
  delay?: number;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.5 });

  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - percent / 100);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    // Start fully hidden
    el.style.strokeDashoffset = String(circ);
    el.style.transition = "none";
    // Force reflow then animate
    void el.getBoundingClientRect();
    const t = setTimeout(() => {
      el.style.transition = `stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
      el.style.strokeDashoffset = String(offset);
    }, 60);
    return () => clearTimeout(t);
  }, [inView, circ, offset, delay]);

  return (
    <div ref={wrapRef} style={{ width: size, height: size }} className="relative flex-shrink-0">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
        {/* Arc */}
        <circle
          ref={ref}
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ}
          style={{ willChange: "stroke-dashoffset" }}
        />
      </svg>
      {/* Glow dot at arc tip */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: stroke + 4,
          height: stroke + 4,
          background: color,
          boxShadow: `0 0 8px 2px ${color}80`,
          top: stroke / 2 - 2,
          left: "50%",
          marginLeft: -(stroke + 4) / 2,
          transformOrigin: `0 ${r + stroke / 2 + 2}px`,
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, rotate: (percent / 100) * 360 } : { opacity: 0, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  );
}

// ── Gauge Card ──────────────────────────────────────────────────────────────
function GaugeCard({ gauge, index }: { gauge: (typeof gauges)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = gauge.icon;

  return (
    <motion.div
      className="relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${gauge.color}14, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Arc ring with value center */}
      <div className="relative">
        <ArcRing
          percent={gauge.percent}
          color={gauge.color}
          trackColor={gauge.trackColor}
          size={112}
          stroke={8}
          delay={index * 0.12}
        />
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-4 h-4 mb-0.5" style={{ color: gauge.color }} />
          <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white leading-none">
            {gauge.value}
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="text-center relative z-10">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-tight">{gauge.label}</p>
        <p className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5">{gauge.sub}</p>
      </div>

      {/* Percent badge */}
      <span
        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full relative z-10"
        style={{ background: `${gauge.color}18`, color: gauge.color }}
      >
        {gauge.percent < 100 ? `${gauge.percent}%` : "✓ Achieved"}
      </span>
    </motion.div>
  );
}

// ── Growth Timeline ─────────────────────────────────────────────────────────
function GrowthTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="relative max-w-3xl mx-auto px-4"
    >
      {/* Central spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#E6E6E6] dark:bg-white/[0.07]" />
      {/* Animated fill */}
      <motion.div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 origin-top bg-[#6E8F6A]"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        style={{ height: "100%" }}
      />

      <div className="flex flex-col gap-0">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m.year}
              className={`relative flex items-center gap-6 py-5 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.4, duration: 0.45, ease: "easeOut" }}
            >
              {/* Card */}
              <div className={`w-[calc(50%-28px)] rounded-xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] p-4 ${isLeft ? "text-right" : "text-left"}`}>
                <span className="text-[10px] font-mono text-[#6E8F6A] font-semibold">{m.year}</span>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">{m.title}</p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 leading-relaxed">{m.detail}</p>
              </div>

              {/* Spine dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#6E8F6A] border-2 border-white dark:border-black"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.3, type: "spring", stiffness: 300 }}
                  style={{ boxShadow: "0 0 0 4px rgba(110,143,106,0.15)" }}
                />
              </div>

              {/* Spacer for opposite side */}
              <div className="w-[calc(50%-28px)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_65%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(110,143,106,0.10),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,_rgba(110,143,106,0.06),_transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,_rgba(139,175,135,0.05),_transparent_35%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <BarChart3 className="w-3.5 h-3.5" />
              Impact & Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white">
              Numbers that speak for themselves
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Real impact, measurable results, and growing every day.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Animated counter cards ── */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <SoftCard className="text-center">
                <div className="w-10 h-10 rounded-lg bg-[#6E8F6A]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-[#6E8F6A]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#6E8F6A] mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white mb-1">{stat.label}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">{stat.description}</p>
              </SoftCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Radial Gauge Cards ── */}
        <ScrollReveal>
          <div className="mb-6">
            <p className="text-center text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-8">
              Performance at a glance
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {gauges.map((gauge, i) => (
                <GaugeCard key={gauge.label} gauge={gauge} index={i} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 my-14 max-w-3xl mx-auto">
          <div className="flex-1 h-px bg-[#E6E6E6] dark:bg-white/[0.06]" />
          <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-widest whitespace-nowrap">
            Our journey
          </span>
          <div className="flex-1 h-px bg-[#E6E6E6] dark:bg-white/[0.06]" />
        </div>

        {/* ── Growth Timeline ── */}
        <ScrollReveal>
          <GrowthTimeline />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
