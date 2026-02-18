import { motion } from "framer-motion";
import { Users, Star, ArrowRight, Github, MessageSquare } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, GlowButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Developer",
    company: "TechCorp",
    content: "Lade Stack's AI Code Editor transformed how I write and review code. The AI suggestions are surprisingly accurate.",
    avatar: "AC",
  },
  {
    name: "Sarah Kim",
    role: "Full Stack Engineer",
    company: "StartupX",
    content: "The API testing platform saved us weeks of manual testing. It auto-generates test cases that actually make sense.",
    avatar: "SK",
  },
  {
    name: "Michael Patel",
    role: "DevOps Lead",
    company: "CloudScale",
    content: "Enterprise-grade tools at zero cost. Lade Stack is what every developer platform should aspire to be.",
    avatar: "MP",
  },
];

const communityStats = [
  { value: "50K+", label: "Developers" },
  { value: "12K+", label: "Projects Built" },
  { value: "100+", label: "Countries" },
  { value: "4.9", label: "Avg Rating" },
];

export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Users className="w-3.5 h-3.5 text-primary" />
              Developer Community
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Loved by developers{" "}
              <span className="text-gradient">worldwide</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join a growing community of developers who are building faster with AI-powered tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Community stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {communityStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-xs font-semibold text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contribution graph mockup */}
        <ScrollReveal>
          <GlassCard className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">Community Contributions</p>
              </div>
              <p className="text-xs text-muted-foreground">Last 12 weeks</p>
            </div>

            {/* GitHub-style contribution grid */}
            <div className="grid grid-rows-7 grid-flow-col gap-[3px] overflow-hidden">
              {Array.from({ length: 84 }).map((_, i) => {
                const intensity = Math.random();
                let bgClass = "bg-muted/50";
                if (intensity > 0.8) bgClass = "bg-primary/60";
                else if (intensity > 0.6) bgClass = "bg-primary/40";
                else if (intensity > 0.4) bgClass = "bg-primary/20";
                else if (intensity > 0.2) bgClass = "bg-primary/10";

                return (
                  <motion.div
                    key={i}
                    className={`w-3 h-3 rounded-[2px] ${bgClass}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.005, duration: 0.3 }}
                    whileHover={{ scale: 1.3 }}
                  />
                );
              })}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to join the community?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                variant="primary"
                className="inline-flex items-center gap-2"
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Get Started Free <ArrowRight className="w-4 h-4" />
              </GlowButton>
              <GlowButton
                variant="secondary"
                className="inline-flex items-center gap-2"
                onClick={() => safeWindowOpen("https://github.com/girishlade111")}
              >
                <Github className="w-4 h-4" /> Star on GitHub
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
