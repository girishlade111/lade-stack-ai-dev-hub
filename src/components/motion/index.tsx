import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
  type MotionProps,
} from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// GLOBAL MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Standard viewport config
export const viewportConfig = { once: true, amount: 0.3 } as const;

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL — wraps children with viewport-triggered fade
// ═══════════════════════════════════════════════════════════════

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directionVariants: Record<string, Variants> = {
    up: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
    },
    down: {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
    },
    left: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
    },
    right: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
    },
  };

  return (
    <motion.div
      variants={directionVariants[direction]}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STAGGER CONTAINER & ITEM
// ═══════════════════════════════════════════════════════════════

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      variants={{
        initial: {},
        animate: {
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PARALLAX SECTION
// ═══════════════════════════════════════════════════════════════

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// GLOW BUTTON — unified h-14, animated arrow, gradient shift
// ═══════════════════════════════════════════════════════════════

export function GlowButton({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "default",
  showArrow = false,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
  showArrow?: boolean;
}) {
  const sizeMap = {
    sm: "h-11 px-5 text-sm rounded-xl",
    default: "h-14 px-8 text-sm rounded-2xl",
    lg: "h-14 px-9 text-base rounded-2xl",
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 font-medium overflow-hidden ${sizeMap[size]} ${
        isPrimary
          ? "bg-primary text-primary-foreground border border-primary/50"
          : "bg-transparent border border-border text-foreground hover:border-primary/40"
      } ${className}`}
      whileHover={{
        scale: 1.04,
        boxShadow: isPrimary
          ? "0 0 30px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.15)"
          : "0 0 20px rgba(6,182,212,0.12)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient sweep on hover */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {showArrow && (
          <motion.span
            className="inline-flex"
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════
// GLASS CARD — with hover glow border
// ═══════════════════════════════════════════════════════════════

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 0 1px rgba(6,182,212,0.2), 0 0 30px -5px rgba(6,182,212,0.15)",
            }
          : undefined
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ANIMATED COUNTER — count-up on scroll into view
// ═══════════════════════════════════════════════════════════════

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION DIVIDER — animated expanding line
// ═══════════════════════════════════════════════════════════════

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`w-full flex justify-center py-8 ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
    >
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        variants={{
          initial: { width: 0, opacity: 0 },
          animate: {
            width: "80%",
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// GRADIENT SPOTLIGHT — radial glow behind key text
// ═══════════════════════════════════════════════════════════════

export function GradientSpotlight({
  className = "",
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "blue" | "purple";
}) {
  const colorMap = {
    cyan: "from-cyan-500/8 via-cyan-500/3 to-transparent",
    blue: "from-blue-500/8 via-blue-500/3 to-transparent",
    purple: "from-purple-500/8 via-purple-500/3 to-transparent",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none bg-radial-gradient ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, var(--tw-gradient-stops))`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className={`w-full h-full bg-gradient-radial ${colorMap[color]}`} />
    </motion.div>
  );
}
