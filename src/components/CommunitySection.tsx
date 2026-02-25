import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Users, Github, MessageSquare, BookOpen, Zap,
  Globe, Code2, Rocket, ArrowUpRight, GitBranch,
  Star, GitPullRequest, Terminal, Layers,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftButton, SectionDivider } from "@/components/motion";
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

const activityFeed = [
  { icon: GitPullRequest, user: "alex_dev", action: "merged a PR to", target: "lade-ai-editor", time: "2m ago", color: "text-[#6E8F6A]" },
  { icon: Star,          user: "sarah_k",   action: "starred",          target: "lade-api-tester",  time: "5m ago", color: "text-amber-500" },
  { icon: GitBranch,     user: "m_patel",   action: "forked",           target: "lade-templates",   time: "11m ago", color: "text-sky-500" },
  { icon: Terminal,      user: "ej_zhang",  action: "deployed via",     target: "lade-cli",         time: "18m ago", color: "text-purple-500" },
  { icon: GitPullRequest,user: "d_mart",    action: "opened PR in",     target: "lade-docs",        time: "24m ago", color: "text-[#6E8F6A]" },
  { icon: Star,          user: "priya_r",   action: "starred",          target: "lade-ai-editor",   time: "31m ago", color: "text-amber-500" },
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

function LiveActivityFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E6E6E6] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E8F6A] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6E8F6A]" />
          </span>
          <span className="text-xs font-semibold text-neutral-900 dark:text-white">Live Activity</span>
        </div>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">Community feed</span>
      </div>

      {/* Feed rows */}
      <div className="divide-y divide-[#E6E6E6] dark:divide-white/[0.04]">
        {activityFeed.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-5 py-3"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.09 + 0.2, duration: 0.35, ease: "easeOut" }}
            >
              <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${item.color}`} />
              <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-none flex-1 min-w-0">
                <span className="font-medium text-neutral-900 dark:text-white">@{item.user}</span>
                {" "}{item.action}{" "}
                <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-500">{item.target}</span>
              </p>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 flex-shrink-0 font-mono">{item.time}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ContributionHeatmap() {
  // 10 weeks × 7 days = 70 cells with pseudo-random values
  const weeks = Array.from({ length: 10 }, (_, wi) =>
    Array.from({ length: 7 }, (_, di) => {
      const seed = (wi * 7 + di + wi * di) % 17;
      return seed < 4 ? 0 : seed < 8 ? 1 : seed < 12 ? 2 : seed < 15 ? 3 : 4;
    })
  );

  const intensityLight = ["#E8E8E8", "#C5D9C4", "#9DC09A", "#6E8F6A", "#4a6347"];
  const intensityDark  = ["#2a2622", "#2e4030", "#3d5c3a", "#4d7348", "#6E8F6A"];

  return (
    <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-[#E6E6E6] dark:border-white/[0.07] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-neutral-900 dark:text-white">Contribution Activity</span>
        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">Last 10 weeks</span>
      </div>
      <div className="flex gap-1.5">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1.5">
            {week.map((level, di) => (
              <motion.div
                key={di}
                className="w-4 h-4 rounded-sm cursor-default"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.005, duration: 0.25 }}
                title={`${level * 3} contributions`}
                style={undefined}
              >
                {/* Light */}
                <div
                  className="w-full h-full rounded-sm dark:hidden"
                  style={{ background: intensityLight[level] }}
                />
                {/* Dark */}
                <div
                  className="w-full h-full rounded-sm hidden dark:block"
                  style={{ background: intensityDark[level] }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-3 justify-end">
        <span className="text-[10px] text-neutral-400">Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className="flex">
            <div className="w-3 h-3 rounded-sm dark:hidden" style={{ background: intensityLight[l] }} />
            <div className="w-3 h-3 rounded-sm hidden dark:block" style={{ background: intensityDark[l] }} />
          </div>
        ))}
        <span className="text-[10px] text-neutral-400">More</span>
      </div>
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
          <LiveActivityFeed />
          <div className="flex flex-col gap-4">
            <ContributionHeatmap />

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
