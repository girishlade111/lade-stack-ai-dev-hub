import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Users, Shield, Code } from "lucide-react";
import { useRef, useMemo } from "react";
import { GlowButton, AnimatedCounter, staggerContainer, fadeInUp, viewportConfig } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

// ── Stats data ──────────────────────────────────────────────
const stats = [
  { icon: Zap, value: 10, suffix: "x", label: "Faster Dev" },
  { icon: Users, value: 50, suffix: "K+", label: "Developers" },
  { icon: Shield, value: 99, suffix: ".9%", label: "Uptime" },
  { icon: Code, value: 5, suffix: "", label: "AI Tools" },
];

// ── Floating code symbols for background ────────────────────
const codeSymbols = [
  { text: "</>", x: "8%", y: "15%", size: "text-lg", duration: 25, delay: 0, rotation: 12 },
  { text: "{}", x: "85%", y: "20%", size: "text-xl", duration: 30, delay: 2, rotation: -8 },
  { text: "$ _", x: "15%", y: "70%", size: "text-base", duration: 28, delay: 4, rotation: 5 },
  { text: "=>", x: "78%", y: "65%", size: "text-lg", duration: 22, delay: 1, rotation: -15 },
  { text: "fn()", x: "45%", y: "85%", size: "text-sm", duration: 35, delay: 3, rotation: 10 },
  { text: "[ ]", x: "92%", y: "45%", size: "text-base", duration: 27, delay: 5, rotation: -6 },
  { text: "//", x: "5%", y: "42%", size: "text-lg", duration: 32, delay: 2.5, rotation: 8 },
  { text: "&&", x: "55%", y: "12%", size: "text-sm", duration: 24, delay: 1.5, rotation: -10 },
  { text: ":::", x: "70%", y: "80%", size: "text-xs", duration: 29, delay: 4.5, rotation: 14 },
  { text: "import", x: "25%", y: "30%", size: "text-xs", duration: 33, delay: 0.5, rotation: -4 },
  { text: "async", x: "65%", y: "35%", size: "text-xs", duration: 26, delay: 3.5, rotation: 7 },
  { text: "const", x: "35%", y: "55%", size: "text-xs", duration: 31, delay: 2, rotation: -12 },
];

// ── Animated floating code background ───────────────────────
function DeveloperBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Layer 2: Floating code symbols — Framer Motion animated */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {codeSymbols.map((symbol, i) => (
          <motion.span
            key={i}
            className={`absolute font-mono ${symbol.size} text-foreground select-none`}
            style={{ left: symbol.x, top: symbol.y }}
            initial={{
              opacity: 0,
              rotate: symbol.rotation,
            }}
            animate={{
              opacity: [0.04, 0.08, 0.04],
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [symbol.rotation, symbol.rotation + 5, symbol.rotation],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut",
            }}
          >
            {symbol.text}
          </motion.span>
        ))}
      </motion.div>

      {/* Layer 3: Radial spotlight behind headline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[800px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, rgba(6,182,212,0.02) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Vignette fade to dark edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_100%)]" />
    </div>
  );
}

// ── Stat card with count-up + hover ─────────────────────────
const statCardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <motion.div
      className="text-center group"
      variants={statCardVariants}
    >
      <motion.div
        className="p-4 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm"
        whileHover={{
          y: -4,
          borderColor: "rgba(6,182,212,0.3)",
          boxShadow: "0 0 0 1px rgba(6,182,212,0.15), 0 0 25px -5px rgba(6,182,212,0.2)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-2">
          <motion.div
            className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
          >
            <stat.icon className="w-4 h-4 text-primary" />
          </motion.div>
        </div>
        <p className="text-xl md:text-2xl font-bold text-foreground">
          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
      </motion.div>
    </motion.div>
  );
}

// ── Hero Section ────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <DeveloperBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            AI-Powered Development Platform
          </motion.div>

          {/* Headline — fadeInUp */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-foreground">Build faster with</span>
            <br />
            <span className="text-gradient glow-text">intelligent AI tools</span>
          </motion.h1>

          {/* Subheadline — fadeInUp with delay */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            The complete AI-powered development ecosystem. Code editor, API testing,
            website builder, and documentation — all powered by cutting-edge AI.
          </motion.p>

          {/* CTA buttons — staggered fadeInUp */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <GlowButton
              variant="primary"
              size="lg"
              showArrow
              onClick={() => safeWindowOpen("https://code.ladestack.in/")}
            >
              Start Building
            </GlowButton>
            <GlowButton
              variant="secondary"
              size="lg"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Platform
            </GlowButton>
          </motion.div>

          {/* Stats — staggered entrance */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            transition={{ delayChildren: 0.9 }}
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
