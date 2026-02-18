import { motion, useInView } from "framer-motion";
import { Lightbulb, Users, Award, Eye, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SectionDivider, TiltCard } from "@/components/motion";
import { useRef, useState, useCallback } from "react";

const values = [
  {
    icon: Lightbulb,
    title: "AI-First Innovation",
    description: "Cutting-edge AI integrated into every tool, delivering intelligent automation that anticipates developer needs.",
    detail: "Our models are trained on millions of code patterns to provide context-aware suggestions that feel magical.",
    color: "from-cyan-500/20 to-blue-500/20",
    glowColor: "rgba(6,182,212,0.3)",
  },
  {
    icon: Users,
    title: "Developer Empowerment",
    description: "Enterprise-grade tools accessible to individual developers and teams of all sizes, at zero cost.",
    detail: "We believe powerful tools shouldn't be gated behind enterprise pricing. Free tier includes unlimited AI assistance.",
    color: "from-blue-500/20 to-violet-500/20",
    glowColor: "rgba(59,130,246,0.3)",
  },
  {
    icon: Award,
    title: "Production Quality",
    description: "Battle-tested tools with excellent uptime, enterprise security, and real-world reliability.",
    detail: "99.9% uptime SLA, SOC 2 compliance, end-to-end encryption, and automatic failover across 3 regions.",
    color: "from-violet-500/20 to-pink-500/20",
    glowColor: "rgba(139,92,246,0.3)",
  },
  {
    icon: Eye,
    title: "Open & Transparent",
    description: "Core algorithms and integrations are open source with full API documentation and community-driven development.",
    detail: "12K+ GitHub stars, 200+ contributors, and a public roadmap driven by community votes and feedback.",
    color: "from-pink-500/20 to-cyan-500/20",
    glowColor: "rgba(236,72,153,0.3)",
  },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Particle burst state
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleHover = useCallback(() => {
    setIsHovered(true);
    // Generate particle burst
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  }, []);

  return (
    <StaggerItem>
      <TiltCard intensity={8}>
        <motion.div
          ref={ref}
          className="glass-card rounded-xl p-6 h-full group cursor-default relative overflow-hidden"
          onMouseEnter={handleHover}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            y: -6,
            boxShadow: `0 0 40px -8px ${value.glowColor}`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent, ${value.glowColor}, transparent)`,
              padding: "1px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.6 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Particle burst on hover */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
              style={{ left: "50%", top: "30%" }}
              initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                scale: 0,
                x: particle.x,
                y: particle.y,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}

          {/* Animated icon */}
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 relative`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              <value.icon className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>

          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {value.description}
          </p>

          {/* Expandable micro-detail */}
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="text-xs text-primary/60 hover:text-primary transition-colors"
          >
            {showDetail ? "Show less" : "Learn more"}
          </button>
          <motion.div
            initial={false}
            animate={{
              height: showDetail ? "auto" : 0,
              opacity: showDetail ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-muted-foreground/70 mt-2 leading-relaxed">
              {value.detail}
            </p>
          </motion.div>

          {/* Number indicator */}
          <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/30">
            0{index + 1}
          </div>
        </motion.div>
      </TiltCard>
    </StaggerItem>
  );
}

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
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </StaggerContainer>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
