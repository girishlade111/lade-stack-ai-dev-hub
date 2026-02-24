import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// GLOBAL MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const viewportConfig = { once: true, amount: 0.3 } as const;

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL
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
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
    },
    down: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
    },
    left: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
    },
    right: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
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
  staggerDelay = 0.1,
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
  speed = 0.3,
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
// SOFT BUTTON — clean SaaS style, no glow
// ═══════════════════════════════════════════════════════════════

export function SoftButton({
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
  variant?: "primary" | "secondary" | "dark";
  size?: "default" | "lg" | "sm";
  showArrow?: boolean;
}) {
  const sizeMap = {
    sm: "h-10 px-5 text-sm rounded-[10px]",
    default: "h-12 px-7 text-sm rounded-[10px]",
    lg: "h-12 px-8 text-base rounded-[10px]",
  };

  const variantMap = {
    primary: "bg-[#6E8F6A] text-white hover:bg-[#5F7F63] shadow-sm",
    secondary: "bg-transparent border border-[#6E8F6A] text-[#6E8F6A] hover:bg-[#6E8F6A]/5",
    dark: "bg-[#1C1C1C] text-white hover:bg-[#333] shadow-sm",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ${sizeMap[size]} ${variantMap[variant]} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </motion.button>
  );
}

// Keep GlowButton as alias for backward compat
export const GlowButton = SoftButton;

// ═══════════════════════════════════════════════════════════════
// SOFT CARD — white card with minimal shadow
// ═══════════════════════════════════════════════════════════════

export function SoftCard({
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
      className={`soft-card p-6 ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Keep GlassCard as alias for backward compat
export const GlassCard = SoftCard;

// ═══════════════════════════════════════════════════════════════
// ANIMATED COUNTER
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
  // Use TWO refs: one for the IntersectionObserver target (the outer span),
  // one for the inner text node we mutate directly — bypassing React's
  // reconciler entirely so zero React re-renders occur during the animation.
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const textEl = textRef.current;
    if (!textEl) return;

    let startTime: number;
    let rafId: number;

    function tick(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      // Direct DOM mutation — no React setState, no reconciler, no re-render.
      // This is safe here because this element is fully owned by this effect.
      textEl!.textContent = prefix + value.toLocaleString() + suffix;
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration, prefix, suffix]);

  return (
    <motion.span
      ref={wrapperRef}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Inner span is mutated directly by the rAF loop above */}
      <span ref={textRef}>{prefix}0{suffix}</span>
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION DIVIDER — subtle warm line
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
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
        variants={{
          initial: { width: 0, opacity: 0 },
          animate: {
            width: "60%",
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      />
    </motion.div>
  );
}
