import { motion } from "framer-motion";
import { Rocket, Eye, CheckCircle, ArrowRight, Zap, Shield, Globe, Code } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, SectionDivider } from "@/components/motion";

const timelineItems = [
  { year: "2024", title: "Foundation", description: "Lade Stack was born from a vision to democratize AI development tools." },
  { year: "2025", title: "Platform Launch", description: "Launched the AI Code Editor and core platform infrastructure." },
  { year: "2026", title: "Ecosystem Growth", description: "Expanding to 5 AI-powered products serving developers worldwide." },
];

const visionItems = [
  { icon: Code, text: "AI-powered development assistance" },
  { icon: Zap, text: "Intelligent code optimization" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Globe, text: "Global developer collaboration" },
];

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
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Democratizing advanced development tools by providing{" "}
                <span className="text-foreground font-medium">enterprise-grade AI solutions</span>{" "}
                that dramatically reduce development time while maintaining the highest quality standards.
                We believe every developer deserves access to{" "}
                <span className="text-foreground font-medium">cutting-edge AI tooling</span>.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary">
                        {item.year.slice(2)}
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-px h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Building a future where{" "}
                <span className="text-foreground font-medium">anyone can create enterprise-grade applications</span>{" "}
                with AI handling complexity while developers focus on creativity and innovation.
              </p>

              <div className="space-y-4 mb-8">
                {visionItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                    <CheckCircle className="w-4 h-4 text-primary/50 ml-auto flex-shrink-0" />
                  </motion.div>
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
