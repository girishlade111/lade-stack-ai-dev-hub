import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Users, Star, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlassCard, GlowButton, SectionDivider, viewportConfig } from "@/components/motion";
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

// ── "LADE STACK" pixel font grid ────────────────────────────
function buildLadeStackGrid(): boolean[][] {
  const rows = 7;
  const cols = 52;
  const grid: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

  const font: Record<string, number[]> = {
    L: [0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b11111],
    A: [0b01110, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
    D: [0b11100, 0b10010, 0b10001, 0b10001, 0b10001, 0b10010, 0b11100],
    E: [0b11111, 0b10000, 0b10000, 0b11110, 0b10000, 0b10000, 0b11111],
    S: [0b01111, 0b10000, 0b10000, 0b01110, 0b00001, 0b00001, 0b11110],
    T: [0b11111, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100],
    C: [0b01111, 0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b01111],
    K: [0b10001, 0b10010, 0b10100, 0b11000, 0b10100, 0b10010, 0b10001],
  };

  const word = "LADESTACK";
  let offsetCol = 1;

  for (const char of word) {
    const glyph = font[char];
    if (!glyph) { offsetCol += 6; continue; }
    for (let row = 0; row < 7; row++) {
      for (let bit = 0; bit < 5; bit++) {
        if (glyph[row] & (1 << (4 - bit))) {
          const col = offsetCol + bit;
          if (col < cols) grid[row][col] = true;
        }
      }
    }
    offsetCol += 6;
  }

  return grid;
}

const ladeGrid = buildLadeStackGrid();

// ── Contribution Grid ───────────────────────────────────────
function ContributionGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <GlassCard className="max-w-3xl mx-auto mb-12" hover={false}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">Community Contributions</p>
        </div>
        <p className="text-xs text-muted-foreground">Last 52 weeks</p>
      </div>

      <div ref={ref} className="grid grid-rows-7 grid-flow-col gap-[3px] overflow-x-auto pb-1">
        {Array.from({ length: 52 * 7 }).map((_, flatIdx) => {
          const col = Math.floor(flatIdx / 7);
          const row = flatIdx % 7;
          const isLit = ladeGrid[row]?.[col] ?? false;

          return (
            <motion.div
              key={flatIdx}
              className={`w-[10px] h-[10px] rounded-[2px] ${
                isLit ? "bg-primary/60" : "bg-muted/40"
              }`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: col * 0.008,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.4,
                backgroundColor: isLit ? "rgba(6,182,212,0.8)" : "rgba(6,182,212,0.25)",
              }}
            />
          );
        })}
      </div>
    </GlassCard>
  );
}

// ── Animated Stars ──────────────────────────────────────────
function AnimatedStars({ count, delay = 0 }: { count: number; delay?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.06, duration: 0.3, ease: "easeOut" }}
        >
          <Star
            className={`w-3.5 h-3.5 ${
              i < count ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ── Testimonial Card — FIXED: even glow on all 4 sides ─────
const testimonialCardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

function TestimonialCard({ testimonial, index }: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
      variants={testimonialCardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: index * 0.08 }}
    >
      {/* Even border glow on all 4 sides via box-shadow */}
      <motion.div
        className="glass-card rounded-2xl p-6 h-full"
        whileHover={{
          y: -4,
          boxShadow: "0 0 0 1px rgba(6,182,212,0.2), 0 0 25px -4px rgba(6,182,212,0.15)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <AnimatedStars count={testimonial.rating} delay={index * 0.08} />

        <p className="text-sm text-muted-foreground leading-relaxed my-5">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <motion.div
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary border border-primary/10"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {testimonial.avatar}
          </motion.div>
          <div>
            <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Testimonial Carousel with arrows + auto-scroll ──────────
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

  // Auto-scroll
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
      {/* Arrow navigation */}
      <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-muted/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(6,182,212,0.3)",
            boxShadow: "0 0 15px rgba(6,182,212,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      </div>
      <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={next}
          className="w-9 h-9 rounded-full bg-muted/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(6,182,212,0.3)",
            boxShadow: "0 0 15px rgba(6,182,212,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Cards */}
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

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full ${
              i === activeIndex
                ? "w-8 bg-primary"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{
              width: i === activeIndex ? 32 : 6,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Community Section ───────────────────────────────────────
export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
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
                className="text-center p-4 rounded-xl"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonial carousel */}
        <div className="mb-16">
          <TestimonialCarousel />
        </div>

        {/* "LADE STACK" contribution grid */}
        <ScrollReveal>
          <ContributionGrid />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Ready to join the community?</p>
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
