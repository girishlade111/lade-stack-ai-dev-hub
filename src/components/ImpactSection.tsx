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

const graphData = [20, 35, 28, 45, 42, 58, 55, 72, 68, 85, 82, 95];

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
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <GlassCard className="text-center relative overflow-hidden group">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-300 rounded-xl" />
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated growth graph */}
        <ScrollReveal>
          <GlassCard className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Platform Growth</p>
                <p className="text-xs text-muted-foreground">Developer adoption over 12 months</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Active users</span>
              </div>
            </div>

            {/* Graph */}
            <div className="relative h-48 flex items-end gap-1.5">
              {graphData.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-primary/30 to-primary/60 rounded-t-sm relative group"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {value}%
                  </div>
                </motion.div>
              ))}
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="w-full h-px bg-border/50" />
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              <span>Jan</span>
              <span>Mar</span>
              <span>Jun</span>
              <span>Sep</span>
              <span>Dec</span>
            </div>
          </GlassCard>
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
