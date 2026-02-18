import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Zap, Globe, Heart, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftCard, SectionDivider, AnimatedCounter } from "@/components/motion";

const stats = [
  { icon: Zap, value: 10, suffix: "x", label: "Faster Development", description: "Average speed increase with AI assistance" },
  { icon: Globe, value: 50, suffix: "K+", label: "Developers", description: "Trust Lade Stack for their workflows" },
  { icon: TrendingUp, value: 99, suffix: ".9%", label: "Uptime", description: "Enterprise-grade reliability guaranteed" },
  { icon: Heart, value: 98, suffix: "%", label: "Satisfaction", description: "Developer happiness score" },
];

const monthlyData = [20, 35, 28, 45, 42, 58, 55, 72, 68, 85, 82, 95];
const yearlyData = [15, 22, 30, 38, 48, 55, 62, 70, 78, 85, 90, 97];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function InteractiveGraph() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const graphData = period === "monthly" ? monthlyData : yearlyData;

  return (
    <SoftCard className="max-w-3xl mx-auto" hover={false}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white">Platform Growth</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">Developer adoption over 12 months</p>
        </div>
        <div className="flex bg-[#F5F3EB] dark:bg-[#2a2622] rounded-lg p-0.5 border border-border">
          {(["monthly", "yearly"] as const).map((p) => (
            <button
              key={p}
              onClick={() => { setPeriod(p); setActiveBar(null); }}
              className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-colors duration-200 ${
                period === p
                  ? "bg-[#6E8F6A] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div ref={ref} className="relative h-48 flex items-end gap-1.5">
        {graphData.map((value, index) => (
          <motion.div
            key={`${period}-${index}`}
            className={`flex-1 rounded-t-sm cursor-pointer transition-colors duration-200 ${
              activeBar === index
                ? "bg-[#6E8F6A]"
                : "bg-[#6E8F6A]/25 hover:bg-[#6E8F6A]/40"
            }`}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${value}%` } : { height: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
            onClick={() => setActiveBar(activeBar === index ? null : index)}
          />
        ))}

        <AnimatePresence>
          {activeBar !== null && (
            <motion.div
              key={`tooltip-${activeBar}`}
              className="absolute z-20 bg-[#1C1C1C] text-white text-[10px] px-3 py-2 rounded-lg shadow-sm whitespace-nowrap"
              style={{
                bottom: `calc(${graphData[activeBar]}% + 12px)`,
                left: `${(activeBar / 12) * 100 + 4}%`,
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-semibold">{months[activeBar]}</div>
              <div>{graphData[activeBar]}% growth</div>
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#1C1C1C] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-border/50" />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-neutral-500 px-1">
        {months.map((m, i) => (
          <span
            key={m}
            className={`cursor-pointer transition-colors ${activeBar === i ? "text-[#6E8F6A] font-medium" : ""}`}
            onClick={() => setActiveBar(activeBar === i ? null : i)}
          >
            {m}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {activeBar !== null && (
          <motion.div
            className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">{graphData[activeBar]}%</p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-500">Growth Rate</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">{Math.round(graphData[activeBar] * 520).toLocaleString()}</p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-500">New Users</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">{Math.round(graphData[activeBar] * 0.85)}%</p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-500">Retention</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SoftCard>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <ScrollReveal>
          <InteractiveGraph />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
