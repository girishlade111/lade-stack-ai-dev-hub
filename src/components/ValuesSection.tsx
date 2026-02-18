import { motion } from "framer-motion";
import { Lightbulb, Users, Award, Eye, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, SectionDivider } from "@/components/motion";

const values = [
  {
    icon: Lightbulb,
    title: "AI-First Innovation",
    description: "Cutting-edge AI integrated into every tool, delivering intelligent automation that anticipates developer needs.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Users,
    title: "Developer Empowerment",
    description: "Enterprise-grade tools accessible to individual developers and teams of all sizes, at zero cost.",
    color: "from-blue-500/20 to-violet-500/20",
  },
  {
    icon: Award,
    title: "Production Quality",
    description: "Battle-tested tools with excellent uptime, enterprise security, and real-world reliability.",
    color: "from-violet-500/20 to-pink-500/20",
  },
  {
    icon: Eye,
    title: "Open & Transparent",
    description: "Core algorithms and integrations are open source with full API documentation and community-driven development.",
    color: "from-pink-500/20 to-cyan-500/20",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
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
            <StaggerItem key={value.title}>
              <motion.div
                className="glass-card rounded-xl p-6 h-full group cursor-default"
                whileHover={{
                  y: -6,
                  boxShadow: "0 0 40px -8px rgba(6, 182, 212, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated icon */}
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-5 h-5 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-primary/0 pointer-events-none"
                  whileHover={{ borderColor: "rgba(6, 182, 212, 0.2)" }}
                />

                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/30">
                  0{index + 1}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
