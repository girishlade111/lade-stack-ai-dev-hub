import { motion, useInView, AnimatePresence } from "framer-motion";
import { Rocket, Eye, CheckCircle, Zap, Shield, Globe, Code, ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftCard, SectionDivider, fadeInUp, viewportConfig } from "@/components/motion";
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
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div ref={ref} className="space-y-0 relative">
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border">
        <motion.div
          className="w-full bg-[#6E8F6A]/40"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {timelineItems.map((item, index) => (
        <motion.div
          key={item.year}
          className="flex gap-4 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
        >
          <div className="flex flex-col items-center z-10">
            <div className="w-8 h-8 rounded-full bg-[#E7EDD8] dark:bg-[#6E8F6A]/20 border border-[#6E8F6A]/20 flex items-center justify-center text-xs font-mono text-[#6E8F6A]">
              {item.year.slice(2)}
            </div>
          </div>

          <div className="pb-8 flex-1">
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#6E8F6A] transition-colors duration-200">
                  {item.title}
                </p>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-3 h-3 text-neutral-500" />
                </motion.div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{item.description}</p>
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 pl-3 border-l-2 border-[#6E8F6A]/20">
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

function VisionItem({ item, index }: { item: typeof visionItems[0]; index: number }) {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E7EDD8]/50 dark:hover:bg-[#6E8F6A]/5 transition-colors duration-200"
      variants={fadeInUp}
    >
      <div className="w-8 h-8 rounded-md bg-[#6E8F6A]/10 flex items-center justify-center flex-shrink-0">
        <item.icon className="w-4 h-4 text-[#6E8F6A]" />
      </div>
      <span className="text-sm text-neutral-900 dark:text-white">{item.text}</span>
      <motion.div
        className="ml-auto flex-shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        <CheckCircle className="w-4 h-4 text-[#6E8F6A]/50" />
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <Rocket className="w-3.5 h-3.5" />
              About Lade Stack
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white">
              Building the future of AI development
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              An AI-powered SaaS ecosystem designed to give every developer
              enterprise-grade tools at startup velocity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <ScrollReveal direction="left">
            <SoftCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#6E8F6A]/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#6E8F6A]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                Democratizing advanced development tools by providing{" "}
                <span className="text-neutral-900 dark:text-white font-medium">enterprise-grade AI solutions</span>{" "}
                that dramatically reduce development time while maintaining the highest quality standards.
              </p>
              <AnimatedTimeline />
            </SoftCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <SoftCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#6E8F6A]/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#6E8F6A]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                Building a future where{" "}
                <span className="text-neutral-900 dark:text-white font-medium">anyone can create enterprise-grade applications</span>{" "}
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
            </SoftCard>
          </ScrollReveal>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
