import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Rocket, Eye, CheckCircle, Zap, Shield, Globe, Code, ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, SectionDivider, fadeInUp, viewportConfig } from "@/components/motion";
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

// ── Animated Timeline with accordion ────────────────────────
function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div ref={ref} className="space-y-0 relative">
      {/* Animated vertical progress line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border">
        <motion.div
          className="w-full bg-primary/40"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {timelineItems.map((item, index) => (
        <motion.div
          key={item.year}
          className="flex gap-4 relative"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center z-10">
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary"
              whileHover={{
                scale: 1.2,
                borderColor: "rgba(6,182,212,0.5)",
                boxShadow: "0 0 15px rgba(6,182,212,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.year.slice(2)}
            </motion.div>
          </div>

          <div className="pb-8 flex-1">
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </p>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </motion.div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </button>

            {/* Accordion with layout animation */}
            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-muted-foreground/80 mt-2 pl-3 border-l-2 border-primary/20">
                    {item.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Vision item with stagger + hover ────────────────────────
const visionItemVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function VisionItem({ item, index }: { item: typeof visionItems[0]; index: number }) {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-lg group"
      variants={visionItemVariants}
      whileHover={{
        backgroundColor: "rgba(6,182,212,0.04)",
        x: 4,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <item.icon className="w-4 h-4 text-primary" />
      </motion.div>
      <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">
        {item.text}
      </span>
      <motion.div
        className="ml-auto flex-shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 400 }}
      >
        <CheckCircle className="w-4 h-4 text-primary/50" />
      </motion.div>
    </motion.div>
  );
}

// ── About Section ───────────────────────────────────────────
export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
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

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <ScrollReveal direction="left">
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.15 }}
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
              <AnimatedTimeline />
            </GlassCard>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="right">
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: -10, scale: 1.15 }}
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
              <motion.div
                className="space-y-1"
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                }}
                initial="initial"
                whileInView="animate"
                viewport={viewportConfig}
              >
                {visionItems.map((item, index) => (
                  <VisionItem key={item.text} item={item} index={index} />
                ))}
              </motion.div>
            </GlassCard>
          </ScrollReveal>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
