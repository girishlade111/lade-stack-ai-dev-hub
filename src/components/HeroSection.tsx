import { motion, useInView } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Users, Shield, Code } from "lucide-react";
import { useRef, useMemo } from "react";
import { GlowButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

const stats = [
  { icon: Zap, value: "10x", label: "Faster Dev", color: "from-cyan-400 to-cyan-600" },
  { icon: Users, value: "50K+", label: "Developers", color: "from-blue-400 to-blue-600" },
  { icon: Shield, value: "99.9%", label: "Uptime", color: "from-violet-400 to-violet-600" },
  { icon: Code, value: "5", label: "AI Tools", color: "from-pink-400 to-pink-600" },
];

// Code stream lines for subtle background
const codeLines = [
  "const ai = new LadeAI();",
  "await ai.analyze(code);",
  "export default App;",
  "function optimize() {",
  "  return enhanced;",
  "import { magic } from",
  "const result = await",
  "<Component {...props}",
  "} // end module",
  "interface Config {",
  "async function build(",
  "return Promise.all([",
];

function CodeStreamBackground() {
  const streams = useMemo(() =>
    Array.from({ length: 14 }).map((_, i) => ({
      left: `${5 + (i * 7) % 90}%`,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      text: codeLines[i % codeLines.length],
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

      {/* Animated code streams at 5-8% opacity */}
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          className="absolute text-[10px] font-mono text-primary/[0.06] whitespace-nowrap select-none"
          style={{ left: stream.left }}
          initial={{ top: "-5%", opacity: 0 }}
          animate={{
            top: ["−5%", "105%"],
            opacity: [0, 0.08, 0.06, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {stream.text}
        </motion.div>
      ))}

      {/* Glowing grid intersections */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${15 + (i * 12) % 75}%`,
            top: `${20 + (i * 15) % 65}%`,
          }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large ambient glow spots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-violet-500/5 rounded-full blur-[60px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedStatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative text-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1 + index * 0.12, duration: 0.5 }}
    >
      {/* Card with border shimmer */}
      <div className="relative p-4 rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
        {/* Border shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.1), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5, ease: "linear" }}
        />

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/[0.04] to-transparent" />

        <div className="relative z-10">
          {/* Animated icon */}
          <div className="flex justify-center mb-2.5">
            <motion.div
              className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center`}
              style={{ background: `linear-gradient(135deg, rgba(6,182,212,0.1), rgba(59,130,246,0.1))` }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
              >
                <stat.icon className="w-4 h-4 text-primary" />
              </motion.div>
            </motion.div>
          </div>

          <motion.p
            className="text-xl md:text-2xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
          >
            {stat.value}
          </motion.p>
          <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <CodeStreamBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.3)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            AI-Powered Development Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-foreground">Build faster with</span>
            <br />
            <span className="text-gradient">intelligent AI tools</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The complete AI-powered development ecosystem. Code editor, API testing,
            website builder, and documentation — all powered by cutting-edge AI.
          </motion.p>

          {/* CTA Buttons - SAME SIZE enforced via size="lg" */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
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

          {/* Stats with animated icons, counters, shimmer borders */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {stats.map((stat, index) => (
              <AnimatedStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
