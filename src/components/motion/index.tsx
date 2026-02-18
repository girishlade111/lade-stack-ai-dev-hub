import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Scroll-triggered reveal wrapper
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// Animated gradient text
export function GradientText({
  children,
  className = "",
  as: Component = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Component className={`text-gradient ${className}`}>
      {children}
    </Component>
  );
}

// Parallax section
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

// Glow button with ripple effect
export function GlowButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) {
  const baseStyles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
      : "bg-transparent border border-border text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]";

  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${baseStyles} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Glass card with hover effect
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
      className={`glass-card rounded-xl p-6 ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 0 30px -5px rgba(6, 182, 212, 0.15)",
              borderColor: "rgba(6, 182, 212, 0.2)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Animated counter
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView ? (
          <CountUp target={target} duration={duration} />
        ) : (
          "0"
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({ target, duration }: { target: number; duration: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 1 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={0}
        animate={isInView ? target : 0}
        transition={{ duration, ease: "easeOut" }}
        onUpdate={(latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(latest as number).toLocaleString();
          }
        }}
        ref={nodeRef}
      />
    </motion.span>
  );
}

// Floating element animation
export function FloatingElement({
  children,
  className = "",
  delay = 0,
  amplitude = 10,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Section divider with animated gradient line
export function SectionDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`w-full flex justify-center py-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
