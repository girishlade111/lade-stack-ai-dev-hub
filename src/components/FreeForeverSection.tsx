import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck, Zap, Lock, Sparkles, CheckCircle2, XCircle,
  ArrowRight, Users, Code2, Globe, HeartHandshake, Layers
} from "lucide-react";
import { ScrollReveal, SectionDivider, SoftButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data Definition ────────────────────────────────────────────────────────

const commitments = [
  {
    number: "01",
    title: "Unlimited Core AI Tools",
    badge: "5+ Live Products",
    description:
      "Full access to AI Code Editor, 17-in-1 LS PDF Toolkit, LS Image Compressor, Swift Resume, and Bharat Land Converter.",
    color: "#6E8F6A",
    icon: Code2,
    bullets: [
      "No daily usage caps",
      "Full feature set included",
      "Continuous free updates"
    ],
  },
  {
    number: "02",
    title: "Zero Paywalls or Trials",
    badge: "No Credit Card",
    description:
      "Free forever means free forever — no 14-day trial countdowns, no surprise billing, and no credit card required to start.",
    color: "#7C86E8",
    icon: ShieldCheck,
    bullets: [
      "Instant 1-click access",
      "No forced subscription upgrades",
      "Free for commercial projects"
    ],
  },
  {
    number: "03",
    title: "100% Privacy & Security",
    badge: "In-Browser Privacy",
    description:
      "PDFs and image processing happen 100% client-side in your browser. Your sensitive files and code never hit external servers.",
    color: "#4EC2E8",
    icon: Lock,
    bullets: [
      "Zero server uploads for files",
      "SOC 2 compliance standards",
      "Local storage encryption"
    ],
  },
  {
    number: "04",
    title: "Community & Open Ethos",
    badge: "Community Driven",
    description:
      "Built in the open with public roadmaps, community-voted features, and open-source foundations shaping our future.",
    color: "#E8A64E",
    icon: HeartHandshake,
    bullets: [
      "Public GitHub roadmap",
      "Community feature requests",
      "12K+ developer community"
    ],
  },
];

const comparisonRows = [
  {
    feature: "Monthly Pricing",
    ladeStack: "$0 / month (Forever)",
    others: "$20 – $50 / month",
    ladeWin: true,
  },
  {
    feature: "Credit Card Required",
    ladeStack: "No Credit Card Needed",
    others: "Required upfront",
    ladeWin: true,
  },
  {
    feature: "Data Privacy",
    ladeStack: "100% In-Browser & Local",
    others: "Cloud uploads & logs",
    ladeWin: true,
  },
  {
    feature: "Usage Limits",
    ladeStack: "Unlimited Core Access",
    others: "Strict daily rate limits",
    ladeWin: true,
  },
  {
    feature: "Team Seats",
    ladeStack: "Unlimited Collaboration",
    others: "$15/user/mo upgrade",
    ladeWin: true,
  },
];

// ─── Ambient Glow Background ──────────────────────────────────────────────────

function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Light Glows */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.12),_transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(124,134,232,0.08),_transparent_70%)]" />
      </div>

      {/* Dark Glows */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 right-1/3 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.12),_transparent_70%)]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(78,194,232,0.08),_transparent_70%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function FreeForeverSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <AmbientBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E8F6A]/15 dark:bg-[#6E8F6A]/20 border border-[#6E8F6A]/30 text-[#4E6F4A] dark:text-[#8EAF8A] text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Free Forever Promise
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-5">
              Enterprise AI Power.{" "}
              <span className="relative inline-block text-[#6E8F6A] dark:text-[#8EAF8A]">
                Zero Price Tag.
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/40 dark:bg-[#8EAF8A]/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe high-caliber developer tools shouldn't be locked behind paywalls. Every developer gets enterprise capability with zero credit card required.
            </p>
          </div>
        </ScrollReveal>

        {/* ── 4 Commitment Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="h-full relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 group"
                >
                  {/* Top Bar Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
                    style={{ backgroundColor: item.color }}
                  />

                  <div>
                    {/* Number Tag & Badge Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md border"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}15`,
                          borderColor: `${item.color}30`,
                        }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}10`,
                          borderColor: `${item.color}25`,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${item.color}18` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-white/10 mt-auto">
                    <ul className="space-y-2">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: item.color }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Comparison Breakdown Section ── */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-[#0d0d10]/90 backdrop-blur-md p-6 sm:p-10 shadow-xl shadow-black/5 dark:shadow-black/40 mb-16">
            
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6E8F6A] dark:text-[#8EAF8A]">
                Transparent Comparison
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
                Lade Stack vs Traditional Paid Tools
              </h3>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <th className="py-3.5 px-4 text-xs font-bold uppercase text-neutral-400 dark:text-neutral-500">Feature</th>
                    <th className="py-3.5 px-4 text-sm font-bold text-[#6E8F6A] dark:text-[#8EAF8A]">Lade Suite ($0)</th>
                    <th className="py-3.5 px-4 text-sm font-bold text-neutral-500 dark:text-neutral-400">Other Paid Platforms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-sm font-semibold text-neutral-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-sm font-bold text-neutral-800 dark:text-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#6E8F6A] flex-shrink-0" />
                          <span>{row.ladeStack}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Card View */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200 dark:border-white/10 p-4 bg-neutral-50/50 dark:bg-white/[0.02]"
                >
                  <p className="text-xs font-bold uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                    {row.feature}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
                      <span>Lade Stack:</span>
                      <span className="flex items-center gap-1 text-[#6E8F6A] dark:text-[#8EAF8A]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {row.ladeStack}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                      <span>Others:</span>
                      <span className="flex items-center gap-1 text-rose-400">
                        <XCircle className="w-3.5 h-3.5" />
                        {row.others}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Call to Action Bar ── */}
        <ScrollReveal delay={0.3}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6E8F6A] to-[#4E6F4A] p-8 sm:p-12 text-center text-white shadow-2xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
                Ready to Experience AI Development Without Barriers?
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Join over 50,000 developers building smarter, faster, and 100% free with Lade Stack.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SoftButton
                  variant="secondary"
                  size="lg"
                  showArrow
                  onClick={() => safeWindowOpen("https://code.ladestack.in/")}
                  className="w-full sm:w-auto bg-white text-neutral-900 hover:bg-neutral-100 shadow-md font-semibold"
                >
                  Start Building Free
                </SoftButton>

                <SoftButton
                  variant="outline"
                  size="lg"
                  onClick={() => safeWindowOpen("https://ladestack.in/")}
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold"
                >
                  Explore 9+ Suite Apps
                </SoftButton>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-12" />
      </div>
    </section>
  );
}
