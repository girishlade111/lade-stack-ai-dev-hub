import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Zap, Globe, Heart, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, SectionDivider, AnimatedCounter, fadeInUp, viewportConfig } from "@/components/motion";

const stats = [
  { icon: Zap, value: 10, suffix: "x", label: "Faster Development", description: "Average speed increase with AI assistance" },
  { icon: Globe, value: 50, suffix: "K+", label: "Developers", description: "Trust Lade Stack for their workflows" },
  { icon: TrendingUp, value: 99, suffix: ".9%", label: "Uptime", description: "Enterprise-grade reliability guaranteed" },
  { icon: Heart, value: 98, suffix: "%", label: "Satisfaction", description: "Developer happiness score" },
];

const monthlyData = [20, 35, 28, 45, 42, 58, 55, 72, 68, 85, 82, 95];
const yearlyData = [15, 22, 30, 38, 48, 55, 62, 70, 78, 85, 90, 97];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// ── Interactive Graph ───────────────────────────────────────
function InteractiveGraph() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const graphData = period === "monthly" ? monthlyData : yearlyData;

  return (
    <GlassCard className="max-w-3xl mx-auto" hover={false}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold text-foreground">Platform Growth</p>
          <p className="text-xs text-muted-foreground">Developer adoption over 12 months</p>
        </div>
        {/* Period toggle */}
        <div className="flex bg-muted/50 rounded-lg p-0.5 border border-border">
          {(["monthly", "yearly"] as const).map((p) => (
            <motion.button
              key={p}
              onClick={() => { setPeriod(p); setActiveBar(null); }}
              className={`px-3 py-1 text-xs font-medium rounded-md capitalize ${
                period === p
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {p}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Animated bar graph */}
      <div ref={ref} className="relative h-48 flex items-end gap-1.5">
        {graphData.map((value, index) => (
          <motion.div
            key={`${period}-${index}`}
            className={`flex-1 rounded-t-sm relative cursor-pointer ${
              activeBar === index
                ? "bg-primary/70"
                : "bg-primary/30 hover:bg-primary/45"
            }`}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${value}%` } : { height: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            onClick={() => setActiveBar(activeBar === index ? null : index)}
            whileHover={{
              scaleY: 1.03,
              transition: { duration: 0.2 },
            }}
          />
        ))}

        {/* Floating tooltip */}
        <AnimatePresence>
          {activeBar !== null && (
            <motion.div
              key={`tooltip-${activeBar}`}
              className="absolute z-20 bg-foreground text-background text-[10px] px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
              style={{
                bottom: `calc(${graphData[activeBar]}% + 12px)`,
                left: `${(activeBar / 12) * 100 + 4}%`,
              }}
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="font-semibold">{months[activeBar]}</div>
              <div>{graphData[activeBar]}% growth</div>
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-foreground rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-border/30" />
          ))}
        </div>
      </div>

      {/* Month labels */}
      <div className="flex justify-between mt-2 text-[10px] text-muted-foreground px-1">
        {months.map((m, i) => (
          <motion.span
            key={m}
            className={`cursor-pointer ${
              activeBar === i ? "text-primary font-medium" : ""
            }`}
            onClick={() => setActiveBar(activeBar === i ? null : i)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {m}
          </motion.span>
        ))}
      </div>

      {/* Dynamic stats on bar click */}
      <AnimatePresence>
        {activeBar !== null && (
          <motion.div
            className="mt-4 pt-4 border-t border-border/50 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.p
                className="text-lg font-bold text-foreground"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {graphData[activeBar]}%
              </motion.p>
              <p className="text-[10px] text-muted-foreground">Growth Rate</p>
            </div>
            <div className="text-center">
              <motion.p
                className="text-lg font-bold text-foreground"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {Math.round(graphData[activeBar] * 520).toLocaleString()}
              </motion.p>
              <p className="text-[10px] text-muted-foreground">New Users</p>
            </div>
            <div className="text-center">
              <motion.p
                className="text-lg font-bold text-foreground"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {Math.round(graphData[activeBar] * 0.85)}%
              </motion.p>
              <p className="text-[10px] text-muted-foreground">Retention</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

// ── Impact Section ──────────────────────────────────────────
export default function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
              Impact & Results
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Numbers that speak{" "}
              <span className="text-gradient">for themselves</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real impact, measurable results, and growing every day.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <GlassCard className="text-center">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive graph */}
        <ScrollReveal>
          <InteractiveGraph />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
