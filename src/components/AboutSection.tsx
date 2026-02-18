import { motion, useInView } from "framer-motion";
import { Rocket, Eye, CheckCircle, Zap, Shield, Globe, Code, ChevronDown } from "lucide-react";
import { ScrollReveal, GlassCard, SectionDivider } from "@/components/motion";
import { useRef, useState } from "react";

const timelineItems = [
  {
    year: "2024",
    title: "Foundation",
    description: "Lade Stack was born from a vision to democratize AI development tools.",
    details: "Started with a single AI code editor prototype, gathering feedback from early adopters to shape the platform's direction.",
  },
  {
    year: "2025",
    title: "Platform Launch",
    description: "Launched the AI Code Editor and core platform infrastructure.",
    details: "Released the full AI Code Editor with real-time compilation, intelligent suggestions, and multi-language support to 10K+ developers.",
  },
  {
    year: "2026",
    title: "Ecosystem Growth",
    description: "Expanding to 5 AI-powered products serving developers worldwide.",
    details: "API Testing, Website Builder, File Sharing, and Documentation AI join the ecosystem, creating a complete development suite.",
  },
];

const visionItems = [
  { icon: Code, text: "AI-powered development assistance" },
  { icon: Zap, text: "Intelligent code optimization" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Globe, text: "Global developer collaboration" },
];

function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div ref={ref} className="space-y-0 relative">
      {/* Animated vertical progress line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border">
        <motion.div
          className="w-full bg-gradient-to-b from-primary via-primary/60 to-transparent"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {timelineItems.map((item, index) => (
        <motion.div
          key={item.year}
          className="flex gap-4 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center z-10">
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary relative"
              whileHover={{ scale: 1.2, borderColor: "rgba(6,182,212,0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              />
              {item.year.slice(2)}
            </motion.div>
          </div>

          <div className="pb-8 flex-1">
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </p>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </motion.div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </button>

            {/* Expandable accordion detail */}
            <motion.div
              initial={false}
              animate={{
                height: expanded === index ? "auto" : 0,
                opacity: expanded === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-xs text-muted-foreground/80 mt-2 pl-3 border-l-2 border-primary/20">
                {item.details}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedVisionItem({ item, index }: { item: typeof visionItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.4 }}
    >
      <motion.div
        className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Icon stroke draw effect simulation */}
        <motion.div
          className="absolute inset-0 bg-primary/10 rounded-md"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12, duration: 0.3, ease: "easeOut" }}
        />
        <item.icon className="w-4 h-4 text-primary relative z-10" />
      </motion.div>
      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item.text}</span>
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 400 }}
        className="ml-auto flex-shrink-0"
      >
        <CheckCircle className="w-4 h-4 text-primary/50" />
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Rocket className="w-3.5 h-3.5 text-primary" />
              About Lade Stack
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Building the future of{" "}
              <span className="text-gradient">AI development</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              An AI-powered SaaS ecosystem designed to give every developer
              enterprise-grade tools at startup velocity.
            </p>
          </div>
        </ScrollReveal>

        {/* Split layout: Mission + Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <ScrollReveal direction="left">
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Rocket className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Democratizing advanced development tools by providing{" "}
                <span className="text-foreground font-medium">enterprise-grade AI solutions</span>{" "}
                that dramatically reduce development time while maintaining the highest quality standards.
                We believe every developer deserves access to{" "}
                <span className="text-foreground font-medium">cutting-edge AI tooling</span>.
              </p>

              {/* Interactive timeline with accordions */}
              <AnimatedTimeline />
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Eye className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Building a future where{" "}
                <span className="text-foreground font-medium">anyone can create enterprise-grade applications</span>{" "}
                with AI handling complexity while developers focus on creativity and innovation.
              </p>

              <div className="space-y-2 mb-8">
                {visionItems.map((item, index) => (
                  <AnimatedVisionItem key={item.text} item={item} index={index} />
                ))}
              </div>

              {/* Abstract floating graphic */}
              <div className="relative h-32 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-border overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/10 blur-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-8 w-12 h-12 rounded-full bg-blue-500/10 blur-lg"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-sm font-mono text-primary/40"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {"<AI /> → Production"}
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
