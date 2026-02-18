import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Globe, Heart, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, SectionDivider } from "@/components/motion";

function AnimatedNumber({ target, suffix = "", prefix = "", className = "" }: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

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
  const graphData = period === "monthly" ? monthlyData : yearlyData;

  return (
    <GlassCard className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold text-foreground">Platform Growth</p>
          <p className="text-xs text-muted-foreground">Developer adoption over 12 months</p>
        </div>
        <div className="flex items-center gap-1">
          {/* Toggle filter: Monthly / Yearly */}
          <div className="flex bg-muted/50 rounded-lg p-0.5 border border-border">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
                period === "monthly"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
                period === "yearly"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="relative h-48 flex items-end gap-1.5">
        {graphData.map((value, index) => (
          <motion.div
            key={`${period}-${index}`}
            className={`flex-1 rounded-t-sm relative cursor-pointer transition-colors duration-200 ${
              activeBar === index
                ? "bg-gradient-to-t from-primary/50 to-primary/80"
                : "bg-gradient-to-t from-primary/20 to-primary/50 hover:from-primary/30 hover:to-primary/60"
            }`}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={() => setActiveBar(activeBar === index ? null : index)}
            whileHover={{ scaleX: 1.15 }}
          >
            {/* Click-to-show floating tooltip */}
            {activeBar === index && (
              <motion.div
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap z-20"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-semibold">{months[index]}</div>
                <div>{value}% growth</div>
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
              </motion.div>
            )}

            {/* Hover tooltip */}
            {activeBar !== index && (
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 hover:!opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {value}%
              </div>
            )}
          </motion.div>
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-border/30 flex items-center">
              <span className="text-[8px] text-muted-foreground/50 -ml-6 w-5 text-right">
                {100 - i * 25}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Month labels */}
      <div className="flex justify-between mt-2 text-[10px] text-muted-foreground px-1">
        {months.map((m, i) => (
          <span
            key={m}
            className={`cursor-pointer transition-colors ${
              activeBar === i ? "text-primary font-medium" : ""
            }`}
            onClick={() => setActiveBar(activeBar === i ? null : i)}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Dynamic stats below graph */}
      {activeBar !== null && (
        <motion.div
          className="mt-4 pt-4 border-t border-border/50 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{graphData[activeBar]}%</p>
            <p className="text-[10px] text-muted-foreground">Growth Rate</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">
              {Math.round(graphData[activeBar] * 520).toLocaleString()}
            </p>
            <p className="text-[10px] text-muted-foreground">New Users</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">
              {Math.round(graphData[activeBar] * 0.85)}%
            </p>
            <p className="text-[10px] text-muted-foreground">Retention</p>
          </div>
        </motion.div>
      )}
    </GlassCard>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StaggerItem>
      <GlassCard className="text-center relative overflow-hidden group">
        <div ref={ref}>
          <motion.div
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 relative"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon draw animation ring */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-transparent"
              initial={{ borderColor: "transparent" }}
              animate={isInView ? {
                borderColor: ["transparent", "rgba(6,182,212,0.3)", "transparent"],
              } : {}}
              transition={{ delay: 0.5 + index * 0.15, duration: 1 }}
            />
            <stat.icon className="w-5 h-5 text-primary" />
          </motion.div>
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground">{stat.description}</p>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 rounded-xl pointer-events-none" />

        {/* Shimmer border on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.08), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </GlassCard>
    </StaggerItem>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
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
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </StaggerContainer>

        {/* Interactive growth graph */}
        <ScrollReveal>
          <InteractiveGraph />
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
