import { motion, useInView, AnimatePresence } from "framer-motion";
import { Users, Star, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftCard, SoftButton, SectionDivider } from "@/components/motion";
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

function AnimatedStars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < count ? "fill-amber-400 text-amber-400" : "fill-[#E6E6E6] text-[#E6E6E6] dark:fill-[#444] dark:text-[#444]"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <motion.div
        className="soft-card p-6 h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatedStars count={testimonial.rating} />

        <p className="text-sm text-[#555] dark:text-[#999] leading-relaxed my-5">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 rounded-full bg-[#E7EDD8] dark:bg-[#6E8F6A]/20 flex items-center justify-center text-xs font-semibold text-[#6E8F6A]">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-medium text-[#1C1C1C] dark:text-[#E8E4DA]">{testimonial.name}</p>
            <p className="text-xs text-[#777]">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) next();
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, next]);

  const visibleTestimonials = useMemo(() => {
    return testimonials.slice(activeIndex, activeIndex + visibleCount);
  }, [activeIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-white dark:bg-[#2a2622] border border-border flex items-center justify-center text-[#777] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA] shadow-sm transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
      <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-white dark:bg-[#2a2622] border border-border flex items-center justify-center text-[#777] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA] shadow-sm transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleTestimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-[#6E8F6A]"
                : "w-1.5 bg-[#ccc] dark:bg-[#444] hover:bg-[#999]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <Users className="w-3.5 h-3.5" />
              Developer Community
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-metallic mb-4 tracking-tight">
              Loved by developers worldwide
            </h2>
            <p className="text-[#555] dark:text-[#999] text-lg max-w-2xl mx-auto">
              Join a growing community of developers who are building faster with AI-powered tools.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {communityStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-[#1C1C1C] dark:text-[#E8E4DA]">{stat.value}</p>
                <p className="text-xs text-[#777] mt-1">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mb-16">
          <TestimonialCarousel />
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-[#555] dark:text-[#999] mb-6">Ready to join the community?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SoftButton
                variant="primary"
                size="lg"
                showArrow
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Get Started Free
              </SoftButton>
              <SoftButton
                variant="secondary"
                size="lg"
                onClick={() => safeWindowOpen("https://github.com/girishlade111")}
              >
                <Github className="w-4 h-4" /> Star on GitHub
              </SoftButton>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
