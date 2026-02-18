import { motion } from "framer-motion";
import { Lightbulb, Users, Award, Eye, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SectionDivider } from "@/components/motion";
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
        className="soft-card p-6 h-full relative overflow-hidden group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-12 h-12 rounded-xl bg-[#6E8F6A]/10 flex items-center justify-center mb-5">
          <value.icon className="w-5 h-5 text-[#6E8F6A]" />
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#6E8F6A] transition-colors duration-200">
          {value.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
          {value.description}
        </p>

        <button
          onClick={() => setShowDetail(!showDetail)}
          className="text-xs text-[#6E8F6A] hover:text-[#5F7F63] transition-colors duration-200"
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
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 leading-relaxed">
            {value.detail}
          </p>
        </motion.div>

        <div className="absolute top-4 right-4 text-xs font-mono text-neutral-400 dark:text-neutral-600">
          0{index + 1}
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function ValuesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-sage dark:bg-black">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,_rgba(110,143,106,0.10),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_80%,_rgba(139,175,135,0.07),_transparent_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#6E8F6A]/[0.05] to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white">
              What drives everything we build
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
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
