import { motion, type Variants } from "framer-motion";
import { Lightbulb, Users, Award, Eye, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SectionDivider, fadeInUp, viewportConfig } from "@/components/motion";
import { useState } from "react";

const values = [
  {
    icon: Lightbulb,
    title: "AI-First Innovation",
    description: "Cutting-edge AI integrated into every tool, delivering intelligent automation that anticipates developer needs.",
    detail: "Our models are trained on millions of code patterns to provide context-aware suggestions that feel magical.",
  },
  {
    icon: Users,
    title: "Developer Empowerment",
    description: "Enterprise-grade tools accessible to individual developers and teams of all sizes, at zero cost.",
    detail: "We believe powerful tools shouldn't be gated behind enterprise pricing. Free tier includes unlimited AI assistance.",
  },
  {
    icon: Award,
    title: "Production Quality",
    description: "Battle-tested tools with excellent uptime, enterprise security, and real-world reliability.",
    detail: "99.9% uptime SLA, SOC 2 compliance, end-to-end encryption, and automatic failover across 3 regions.",
  },
  {
    icon: Eye,
    title: "Open & Transparent",
    description: "Core algorithms and integrations are open source with full API documentation and community-driven development.",
    detail: "12K+ GitHub stars, 200+ contributors, and a public roadmap driven by community votes and feedback.",
  },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <StaggerItem>
      <motion.div
        className="glass-card rounded-2xl p-6 h-full group relative overflow-hidden"
        whileHover={{
          y: -6,
          scale: 1.02,
          borderColor: "rgba(6,182,212,0.25)",
          boxShadow: "0 0 0 1px rgba(6,182,212,0.15), 0 0 30px -5px rgba(6,182,212,0.18)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Subtle radial background glow */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon — rotates 10deg on hover */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative z-10"
          whileHover={{ rotate: 10, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <value.icon className="w-5 h-5 text-primary" />
        </motion.div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
          {value.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 relative z-10">
          {value.description}
        </p>

        {/* Expandable detail */}
        <motion.button
          onClick={() => setShowDetail(!showDetail)}
          className="text-xs text-primary/60 hover:text-primary transition-colors duration-200 relative z-10"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          {showDetail ? "Show less" : "Learn more"}
        </motion.button>
        <motion.div
          initial={false}
          animate={{
            height: showDetail ? "auto" : 0,
            opacity: showDetail ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden relative z-10"
        >
          <p className="text-xs text-muted-foreground/70 mt-2 leading-relaxed">
            {value.detail}
          </p>
        </motion.div>

        {/* Number badge */}
        <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/20">
          0{index + 1}
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function ValuesSection() {
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
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Core Values
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              What drives{" "}
              <span className="text-gradient">everything we build</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values shape every decision, every line of code, and every product we ship.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </StaggerContainer>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
