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
    description: "AI-powered coding challenges every week. Earn badges,// ─── Main Section ──────────────────────────────────────────────────────────r hint */}
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

        {/* ── "Open to contributions" banner ── */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-[#6E8F6A] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.45 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_100%_50%,_rgba(255,255,255,0.08),_transparent)]" />
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-white font-semibold text-base mb-1">Open to contributions</p>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Every PR matters. We review, merge, and celebrate every contribution.
            </p>
          </div>
          <motion.button
            className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-medium px-5 py-2.5 rounded-xl border border-white/20 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => safeWindowOpen("https://github.com/girishlade111")}
          >
            <Github className="w-4 h-4" />
            Contribute
          </motion.button>
        </motion.div>

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
