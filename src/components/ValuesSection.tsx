import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb, Users, Award, Eye, Sparkles, Check,
  Zap, ShieldCheck, Cpu, GitFork
} from "lucide-react";
import { ScrollReveal, SectionDivider } from "@/components/motion";

// ─── Data Definition ────────────────────────────────────────────────────────

const values = [
  {
    id: "01",
    number: "01",
    title: "AI-First Innovation",
    tagline: "Intelligence in every keystroke",
    badge: "Context-Aware AI",
    badgeIcon: Zap,
    description:
      "Cutting-edge AI woven directly into developer tools — automating repetitive tasks and anticipating workflow needs before you even type.",
    detail:
      "Trained on millions of verified code patterns to deliver senior-level suggestions directly inside your editor.",
    bullets: [
      "Context-aware code completions",
      "Multi-language synthesis",
      "Real-time codebase adaptation"
    ],
    color: "#6E8F6A",
    lightBg: "from-[#6E8F6A]/10 to-transparent",
    border: "border-[#6E8F6A]/30",
    glow: "rgba(110, 143, 106, 0.18)",
  },
  {
    id: "02",
    number: "02",
    title: "Developer Empowerment",
    tagline: "Enterprise power, zero gatekeeping",
    badge: "100% Free Tier",
    badgeIcon: ShieldCheck,
    description:
      "Professional-grade developer tooling made freely accessible to indie hackers and global enterprise teams alike.",
    detail:
      "We believe high-caliber tooling shouldn't be hidden behind expensive paywalls or enterprise lock-ins.",
    bullets: [
      "Unlimited free core features",
      "No credit card required",
      "Built-in team collaboration"
    ],
    color: "#7C86E8",
    lightBg: "from-[#7C86E8]/10 to-transparent",
    border: "border-[#7C86E8]/30",
    glow: "rgba(124, 134, 232, 0.18)",
  },
  {
    id: "03",
    number: "03",
    title: "Production Quality",
    tagline: "Battle-tested, not beta-grade",
    badge: "99.9% SLA Uptime",
    badgeIcon: Cpu,
    description:
      "Stress-tested against real enterprise workloads with failover redundancy, zero-downtime deploys, and end-to-end encryption.",
    detail:
      "SOC 2 Type II compliant infra running 3-region redundancy so your pipeline stays rock solid 24/7.",
    bullets: [
      "99.9% uptime guarantee",
      "SOC 2 Type II compliance",
      "End-to-end encryption"
    ],
    color: "#E8A64E",
    lightBg: "from-[#E8A64E]/10 to-transparent",
    border: "border-[#E8A64E]/30",
    glow: "rgba(232, 166, 78, 0.18)",
  },
  {
    id: "04",
    number: "04",
    title: "Open & Transparent",
    tagline: "Nothing to hide, everything to share",
    badge: "Open Source",
    badgeIcon: GitFork,
    description:
      "Core algorithms open-sourced with a public roadmap and community-driven features. We build in the open because trust compounds.",
    detail:
      "12K+ GitHub stars and over 200 contributors shaping the future of AI development together.",
    bullets: [
      "Open-source core architecture",
      "Public product roadmap",
      "Community-driven feature votes"
    ],
    color: "#4EC2E8",
    lightBg: "from-[#4EC2E8]/10 to-transparent",
    border: "border-[#4EC2E8]/30",
    glow: "rgba(78, 194, 232, 0.18)",
  },
];

const floatingPrinciples = [
  "Open Source", "AI-Native", "Developer-First", "Zero Lock-In",
  "Free Forever", "Community-Driven", "Transparent", "Enterprise-Ready",
  "SOC 2 Compliant", "Privacy-First"
];

// ─── Background Decoration Component ──────────────────────────────────────────

function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Light Theme Background Glows */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.12),_transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(110,143,106,0.08),_transparent_70%)]" />
      </div>

      {/* Dark Theme Background Glows */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.12),_transparent_70%)]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(124,134,232,0.08),_transparent_70%)]" />
      </div>

      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
}

// ─── Marquee Ticker Component ─────────────────────────────────────────────────

function PrinciplesMarquee() {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none mt-12 py-4">
      {/* Fading Edge Masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#E7EDD8] dark:from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#E7EDD8] dark:from-black to-transparent z-10" />

      {/* Row 1 */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-3 pr-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ whiteSpace: "nowrap" }}
        >
          {[...floatingPrinciples, ...floatingPrinciples].map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6E8F6A]/20 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A]" />
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ValuesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredValues = selectedFilter === "all"
    ? values
    : values.filter((v) => v.id === selectedFilter);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-[#E7EDD8] dark:bg-black overflow-hidden transition-colors duration-300">
      <AmbientBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E8F6A]/15 dark:bg-[#6E8F6A]/20 border border-[#6E8F6A]/30 text-[#4E6F4A] dark:text-[#8EAF8A] text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Values & Principles
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-5">
              What drives{" "}
              <span className="relative inline-block text-[#6E8F6A] dark:text-[#8EAF8A]">
                everything
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/40 dark:bg-[#8EAF8A]/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </span>
              {" "}we build
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Four fundamental principles that shape every line of code, every architectural decision, and every product we ship.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Mobile / Tablet Quick Selector Tabs ── */}
        <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 -mx-4 px-4 justify-start">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              selectedFilter === "all"
                ? "bg-[#6E8F6A] text-white shadow-md shadow-[#6E8F6A]/20"
                : "bg-white/80 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10"
            }`}
          >
            All Principles ({values.length})
          </button>
          {values.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedFilter(v.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === v.id
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md"
                  : "bg-white/80 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10"
              }`}
            >
              {v.number} {v.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* ── 4-Card Responsive Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 ${
              selectedFilter === "all"
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "max-w-xl mx-auto"
            } gap-6 items-stretch`}
          >
            {filteredValues.map((value, index) => {
              const BadgeIcon = value.badgeIcon;
              return (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                    className={`h-full relative overflow-hidden rounded-2xl border bg-white/90 dark:bg-[#0c0c0e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 ${value.border}`}
                    style={{
                      boxShadow: `0 10px 30px -15px ${value.glow}`,
                    }}
                  >
                    {/* Top Accent Gradient Header */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.lightBg}`}
                      style={{ backgroundColor: value.color }}
                    />

                    {/* Card Content Top */}
                    <div>
                      {/* Top Header Row: Number Tag & Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md border"
                          style={{
                            color: value.color,
                            backgroundColor: `${value.color}15`,
                            borderColor: `${value.color}30`,
                          }}
                        >
                          {value.number}
                        </span>

                        <span
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                          style={{
                            color: value.color,
                            backgroundColor: `${value.color}10`,
                            borderColor: `${value.color}25`,
                          }}
                        >
                          <BadgeIcon className="w-3 h-3" />
                          {value.badge}
                        </span>
                      </div>

                      {/* Icon Box & Title */}
                      <div className="mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-1.5 group flex items-center justify-between">
                          <span>{value.title}</span>
                        </h3>
                        <p
                          className="text-xs font-semibold tracking-wide uppercase"
                          style={{ color: value.color }}
                        >
                          {value.tagline}
                        </p>
                      </div>

                      {/* Main Description */}
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                        {value.description}
                      </p>
                    </div>

                    {/* Card Content Bottom: Bullet Points */}
                    <div className="pt-4 border-t border-neutral-100 dark:border-white/10 mt-auto">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                        Key Pillars
                      </p>
                      <ul className="space-y-2">
                        {value.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
                          >
                            <span
                              className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${value.color}20` }}
                            >
                              <Check className="w-2.5 h-2.5" style={{ color: value.color }} />
                            </span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subtle Hover Accent Bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: value.color }}
                    />
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Principles Infinite Marquee ── */}
        <ScrollReveal delay={0.2}>
          <PrinciplesMarquee />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
