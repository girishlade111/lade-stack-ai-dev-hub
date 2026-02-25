import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb, Users, Award, Eye, Sparkles,
  ArrowRight, Check,
} from "lucide-react";
import { ScrollReveal, SectionDivider } from "@/components/motion";

// ─── Data ──────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "AI-First Innovation",
    tagline: "Intelligence in every keystroke",
    description:
      "Cutting-edge AI woven into every tool — delivering automation that anticipates needs before developers even type them.",
    detail:
      "Our models train on millions of real-world code patterns to surface context-aware suggestions that feel less like autocomplete and more like a senior engineer watching over your shoulder.",
    bullets: ["Context-aware completions", "Multi-language support", "Learns your codebase"],
    color: "#6E8F6A",
    lightBg: "bg-[#6E8F6A]/[0.06]",
    darkBg:  "dark:bg-[#6E8F6A]/[0.04]",
    border:  "border-[#6E8F6A]/25",
    glow:    "rgba(110,143,106,0.12)",
  },
  {
    icon: Users,
    number: "02",
    title: "Developer Empowerment",
    tagline: "Enterprise power, zero gatekeeping",
    description:
      "Professional-grade tools accessible to indie developers and global enterprises alike — with no pricing tiers that punish growth.",
    detail:
      "We believe in meritocracy of tooling. Your company size or budget shouldn't determine your competitive edge. Free forever means free forever — not a trial.",
    bullets: ["Unlimited free tier", "No credit card required", "Team collaboration built-in"],
    color: "#7c86e8",
    lightBg: "bg-[#7c86e8]/[0.06]",
    darkBg:  "dark:bg-[#7c86e8]/[0.04]",
    border:  "border-[#7c86e8]/25",
    glow:    "rgba(124,134,232,0.12)",
  },
  {
    icon: Award,
    number: "03",
    title: "Production Quality",
    tagline: "Battle-tested, not beta-grade",
    description:
      "Every release is stress-tested against enterprise workloads. 99.9% uptime, end-to-end encryption, and failover baked in by default.",
    detail:
      "SOC 2 Type II compliant. Automatic failover across 3 regions. We run the same infra for our own internal tools — so we feel every outage before you do.",
    bullets: ["99.9% uptime SLA", "SOC 2 compliance", "E2E encryption"],
    color: "#e8a64e",
    lightBg: "bg-[#e8a64e]/[0.06]",
    darkBg:  "dark:bg-[#e8a64e]/[0.04]",
    border:  "border-[#e8a64e]/25",
    glow:    "rgba(232,166,78,0.12)",
  },
  {
    icon: Eye,
    number: "04",
    title: "Open & Transparent",
    tagline: "Nothing to hide, everything to share",
    description:
      "Core algorithms open-sourced. Public roadmap. Community-voted priorities. We build in the open because trust compounds.",
    detail:
      "12K+ GitHub stars, 200+ external contributors, and a changelog that explains the why — not just the what. No dark patterns, no lock-in.",
    bullets: ["Open-source core", "Public roadmap", "Community-driven"],
    color: "#4ec2e8",
    lightBg: "bg-[#4ec2e8]/[0.06]",
    darkBg:  "dark:bg-[#4ec2e8]/[0.04]",
    border:  "border-[#4ec2e8]/25",
    glow:    "rgba(78,194,232,0.12)",
  },
];

// ─── Decorative grid lines (background) ────────────────────────────────────

function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Horizontal */}
      {[20, 50, 80].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 h-px bg-[#6E8F6A]/[0.06] dark:bg-[#6E8F6A]/[0.04]"
          style={{ top: `${pct}%` }}
        />
      ))}
      {/* Vertical */}
      {[25, 50, 75].map((pct) => (
        <div
          key={pct}
          className="absolute top-0 bottom-0 w-px bg-[#6E8F6A]/[0.06] dark:bg-[#6E8F6A]/[0.04]"
          style={{ left: `${pct}%` }}
        />
      ))}
    </div>
  );
}

// ─── Large feature card (left, active) ─────────────────────────────────────

function FeaturedCard({ value }: { value: (typeof values)[0] }) {
  const Icon = value.icon;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value.number}
        className="h-full relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] p-8 flex flex-col"
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Radial glow corner */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${value.glow}, transparent 70%)` }}
        />
        {/* Bottom-right accent */}
        <div
          className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-50"
          style={{ background: `radial-gradient(circle, ${value.glow}, transparent 70%)` }}
        />

        {/* Number watermark */}
        <div
          className="absolute top-6 right-6 font-mono text-7xl font-bold select-none pointer-events-none leading-none"
          style={{ color: `${value.color}10` }}
        >
          {value.number}
        </div>

        {/* Icon */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${value.color}18` }}
          layoutId={`icon-${value.number}`}
          transition={{ duration: 0.35 }}
        >
          <Icon className="w-6 h-6" style={{ color: value.color }} />
        </motion.div>

        {/* Tagline */}
        <motion.span
          className="relative z-10 text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: value.color }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {value.tagline}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="relative z-10 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.35 }}
        >
          {value.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="relative z-10 text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 text-[15px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.35 }}
        >
          {value.description}
        </motion.p>

        {/* Detail */}
        <motion.p
          className="relative z-10 text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed mb-6 flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.4 }}
        >
          {value.detail}
        </motion.p>

        {/* Bullet list */}
        <motion.ul
          className="relative z-10 flex flex-col gap-2 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.35 }}
        >
          {value.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
              <span
                className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: `${value.color}20` }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: value.color }} />
              </span>
              {b}
            </li>
          ))}
        </motion.ul>

        {/* Bottom accent bar */}
        <motion.div
          className="relative z-10 h-px rounded-full"
          style={{ background: `linear-gradient(90deg, ${value.color}60, ${value.color}10)` }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Stack of selector cards (right column) ────────────────────────────────

function SelectorCard({
  value,
  isActive,
  onClick,
  index,
}: {
  value: (typeof values)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = value.icon;
  return (
    <motion.button
      className={`w-full text-left relative overflow-hidden rounded-xl border transition-all duration-300 p-4 flex items-center gap-4 group ${
        isActive
          ? `${value.lightBg} ${value.darkBg} ${value.border}`
          : "bg-white dark:bg-white/[0.02] border-[#E6E6E6] dark:border-white/[0.06] hover:border-[#D0D0D0] dark:hover:border-white/[0.12]"
      }`}
      onClick={onClick}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
      whileHover={{ x: isActive ? 0 : -2, transition: { duration: 0.2 } }}
    >
      {/* Active left border */}
      {isActive && (
        <motion.div
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
          style={{ background: value.color }}
          layoutId="active-border"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Icon */}
      <motion.div
        layoutId={`icon-${value.number}`}
        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
        style={{
          background: isActive ? `${value.color}22` : `${value.color}10`,
        }}
        transition={{ duration: 0.35 }}
      >
        <Icon className="w-4 h-4" style={{ color: value.color }} />
      </motion.div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span
            className="font-mono text-[9px] font-bold opacity-50"
            style={{ color: value.color }}
          >
            {value.number}
          </span>
          <p className={`text-sm font-semibold truncate transition-colors duration-200 ${
            isActive ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"
          }`}>
            {value.title}
          </p>
        </div>
        <p className="text-[11px] text-neutral-500 dark:text-neutral-500 truncate">{value.tagline}</p>
      </div>

      {/* Arrow */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.2, x: isActive ? 0 : -4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: value.color }} />
      </motion.div>
    </motion.button>
  );
}

// ─── Floating principle tags (decorative) ──────────────────────────────────

const principles = [
  "Open Source",  "AI-Native",     "Developer-First",
  "Zero Lock-in", "Free Forever",  "Community-Driven",
  "Transparent",  "Enterprise-Ready",
];

function FloatingTags() {
  return (
    <div className="relative h-24 overflow-hidden pointer-events-none select-none mt-6">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#E7EDD8] dark:from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#E7EDD8] dark:from-black to-transparent z-10" />
      <motion.div
        className="flex items-center gap-3 absolute"
        style={{ whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...principles, ...principles].map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#6E8F6A]/20 dark:border-[#6E8F6A]/15 bg-white/60 dark:bg-white/[0.03] text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A]/50" />
            {p}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center gap-3 absolute top-10"
        style={{ whiteSpace: "nowrap" }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...principles.slice(3), ...principles, ...principles.slice(0, 3)].map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#6E8F6A]/15 dark:border-[#6E8F6A]/10 bg-white/40 dark:bg-white/[0.02] text-[11px] font-medium text-neutral-500 dark:text-neutral-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A]/30" />
            {p}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────

export default function ValuesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#E7EDD8] dark:bg-black overflow-hidden">

      {/* ── Background ── */}
      <GridLines />
      <div className="absolute inset-0 pointer-events-none">
        {/* Light */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.14),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.08),_transparent_60%)]" />
        </div>
        {/* Dark */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-black to-[#060606]" />
          <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.10),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.06),_transparent_60%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Values & Principles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5">
              What drives{" "}
              <span className="relative inline-block">
                <span className="text-[#6E8F6A]">everything</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}we build
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              Four principles that shape every line of code, every design decision, and every product we ship.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-5 items-stretch min-h-[480px]">

          {/* Left: featured detail card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <FeaturedCard value={values[active]} />
          </motion.div>

          {/* Right: selector stack */}
          <div className="flex flex-col gap-3">
            {values.map((v, i) => (
              <SelectorCard
                key={v.number}
                value={v}
                isActive={i === active}
                onClick={() => setActive(i)}
                index={i}
              />
            ))}

            {/* Micro principle counter */}
            <motion.div
              className="mt-1 rounded-xl border border-[#E6E6E6] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] px-4 py-3 flex items-center justify-between"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <span className="text-[11px] text-neutral-500 dark:text-neutral-500">Core principles</span>
              <div className="flex items-center gap-1.5">
                {values.map((v, i) => (
                  <button
                    key={v.number}
                    onClick={() => setActive(i)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: i === active ? v.color : "#D0D0D0",
                      transform: i === active ? "scale(1.4)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Floating principles ticker ── */}
        <ScrollReveal delay={0.15}>
          <FloatingTags />
        </ScrollReveal>

        <SectionDivider className="mt-6" />
      </div>
    </section>
  );
}
