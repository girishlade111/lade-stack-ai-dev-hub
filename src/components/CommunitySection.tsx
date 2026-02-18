import { motion, useInView, AnimatePresence } from "framer-motion";
import { Users, Star, Github, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, GlowButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Developer",
    company: "TechCorp",
    content: "Lade Stack's AI Code Editor transformed how I write and review code. The AI suggestions are surprisingly accurate.",
    avatar: "AC",
    rating: 5,
  },
  {
    name: "Sarah Kim",
    role: "Full Stack Engineer",
    company: "StartupX",
    content: "The API testing platform saved us weeks of manual testing. It auto-generates test cases that actually make sense.",
    avatar: "SK",
    rating: 5,
  },
  {
    name: "Michael Patel",
    role: "DevOps Lead",
    company: "CloudScale",
    content: "Enterprise-grade tools at zero cost. Lade Stack is what every developer platform should aspire to be.",
    avatar: "MP",
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Tech Lead",
    company: "InnovateLab",
    content: "The AI documentation generator cut our docs time by 80%. It understands code context better than any tool I've used.",
    avatar: "EZ",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Frontend Developer",
    company: "DesignFlow",
    content: "Website builder with AI is incredible. Generated a production-ready landing page from a single prompt in minutes.",
    avatar: "DM",
    rating: 4,
  },
];

const communityStats = [
  { value: "50K+", label: "Developers" },
  { value: "12K+", label: "Projects Built" },
  { value: "100+", label: "Countries" },
  { value: "4.9", label: "Avg Rating" },
];

function AnimatedStars({ count, delay = 0 }: { count: number; delay?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.08,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <Star
            className={`w-3.5 h-3.5 ${
              i < count
                ? "fill-amber-400 text-amber-400"
                : "fill-muted text-muted"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index, isActive }: {
  testimonial: typeof testimonials[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <GlassCard className="h-full">
        <AnimatedStars count={testimonial.rating} delay={index * 0.1} />

        <p className="text-sm text-muted-foreground leading-relaxed my-5">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-3 mt-auto">
          {/* Floating avatar with hover lift */}
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-xs font-semibold text-primary border border-primary/10"
            whileHover={{ scale: 1.15, y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {testimonial.avatar}
          </motion.div>
          <div>
            <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Show 3 at a time on desktop, 1 on mobile
  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  const startAutoScroll = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 4000);
  }, [isPaused, maxIndex]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoScroll]);

  const visibleTestimonials = useMemo(() => {
    return testimonials.slice(activeIndex, activeIndex + visibleCount);
  }, [activeIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards container */}
      <div className="flex gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleTestimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
              isActive={true}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-primary"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ContributionGrid() {
  // Deterministic intensity based on index
  const getIntensity = useCallback((i: number) => {
    const seed = (i * 17 + 31) % 100;
    if (seed > 80) return "bg-primary/60";
    if (seed > 60) return "bg-primary/40";
    if (seed > 40) return "bg-primary/20";
    if (seed > 20) return "bg-primary/10";
    return "bg-muted/50";
  }, []);

  return (
    <GlassCard className="max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">Community Contributions</p>
        </div>
        <p className="text-xs text-muted-foreground">Last 12 weeks</p>
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-[3px] overflow-hidden">
        {Array.from({ length: 84 }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-[2px] ${getIntensity(i)} cursor-pointer`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.004, duration: 0.2 }}
            whileHover={{
              scale: 1.4,
              backgroundColor: "rgba(6,182,212,0.6)",
            }}
          />
        ))}
      </div>
    </GlassCard>
  );
}

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
              <motion.div
                className="text-center p-4 rounded-xl border border-transparent hover:border-primary/10 transition-colors"
                whileHover={{ y: -3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonial carousel with auto-scroll */}
        <div className="mb-16">
          <TestimonialCarousel />
        </div>

        {/* Contribution graph */}
        <ScrollReveal>
          <ContributionGrid />
        </ScrollReveal>

        {/* CTA - uses global button system with consistent sizing */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to join the community?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                variant="primary"
                size="lg"
                showArrow
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Get Started Free
              </GlowButton>
              <GlowButton
                variant="secondary"
                size="lg"
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
