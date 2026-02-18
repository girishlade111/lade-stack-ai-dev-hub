import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SoftButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import heroBackground from "@/assets/background.png";

// Lazy-load the animated dark hero background
const HeroGeometric = lazy(() => import("@/components/ui/hero-geometric"));

const trustBadges = [
  "Code Editor",
  "API Testing",
  "Documentation AI",
  "File Sharing",
  "No-Code Builder",
];

// ═════════════════════════════════════════════════════════════════════
// SHARED — Unified content stack used by BOTH heroes
// ═════════════════════════════════════════════════════════════════════

function HeroContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
      {/* 1. Badge */}
      <motion.div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
          isDark
            ? "bg-white/[0.06] border border-white/[0.08] text-white/60"
            : "tag-pill"
        }`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        AI-Powered Developer Platform
      </motion.div>

      {/* 2. Main Heading */}
      <motion.h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.01em] max-w-[900px] ${
          isDark ? "text-white" : "text-[#1C1C1C]"
        }`}
        style={{ fontFamily: "'DM Serif Display', serif" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        Build smarter products
        <br />
        <span className="text-[#6E8F6A]">with intelligent AI tools</span>
      </motion.h1>

      {/* 3. Subheading */}
      <motion.p
        className={`text-base sm:text-lg md:text-xl max-w-[680px] leading-relaxed ${
          isDark ? "text-white/70" : "text-[#555]"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        Lade Stack unifies code editing, API testing, documentation, and
        automation into a powerful ecosystem designed for modern developers
        and growing teams.
      </motion.p>

      {/* 4. Button Group */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SoftButton
          variant="primary"
          size="lg"
          showArrow
          onClick={() => safeWindowOpen("https://code.ladestack.in/")}
          className={isDark ? "bg-[#6E8F6A] hover:bg-[#5F7F63]" : ""}
        >
          Start Building
        </SoftButton>
        <Link to="/projects">
          <SoftButton
            variant="secondary"
            size="lg"
            className={
              isDark
                ? "border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
                : ""
            }
          >
            Explore Platform
          </SoftButton>
        </Link>
      </motion.div>

      {/* 5. Trust Line */}
      <motion.p
        className={`text-xs sm:text-sm ${
          isDark ? "text-white/40" : "text-[#777]"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Trusted by developers, startups, and growing teams worldwide
      </motion.p>

      {/* 6. App Tags */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {trustBadges.map((badge, i) => (
          <motion.span
            key={badge}
            className={`text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${
              isDark
                ? "text-white/50 bg-white/[0.04] border border-white/[0.08]"
                : "text-[#555] bg-white/60 border border-[#E6E6E6]"
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0 + i * 0.06 }}
          >
            {badge}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

function ScrollIndicator({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <motion.div
        className={`flex flex-col items-center gap-2 ${
          isDark ? "text-white/30" : "text-[#777]"
        }`}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════════════════
// LIGHT HERO — cinematic static image background
// ═════════════════════════════════════════════════════════════════════

function LightHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — absolute only */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EB]/80 via-[#F5F3EB]/60 to-[#F5F3EB]/90" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      {/* Content — relative z-10, flex-col stacking */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32 md:py-40">
        <HeroContent isDark={false} />
      </div>

      <ScrollIndicator isDark={false} />
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════════
// DARK HERO — animated geometric background
// ═════════════════════════════════════════════════════════════════════

function DarkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background — absolute only */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
        <HeroGeometric />
      </Suspense>

      {/* Content — relative z-20, flex-col stacking */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 py-32 md:py-40">
        <HeroContent isDark />
      </div>

      <ScrollIndicator isDark />
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════════
// MAIN HERO — switches based on theme
// ═════════════════════════════════════════════════════════════════════

export default function HeroSection() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <AnimatePresence mode="wait">
      {isDark ? (
        <motion.div
          key="dark-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DarkHero />
        </motion.div>
      ) : (
        <motion.div
          key="light-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LightHero />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
