import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SoftButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
// Import all three formats — Vite will hash them and bundle correctly.
// The browser picks the first <source> it supports: AVIF (49 KB) →
// WebP (73 KB) → PNG fallback (2.2 MB). Reduces LCP image payload by 97%.
import heroBackgroundAvif from "@/assets/background.avif";
import heroBackgroundWebp from "@/assets/background.webp";
import heroBackgroundPng from "@/assets/background.png";

// Lazy-load the animated dark hero background — only fetched in dark mode
const HeroGeometric = lazy(() => import("@/components/ui/hero-geometric"));

const trustBadges = [
  "Code Editor",
  "API Testing",
  "Documentation AI",
  "File Sharing",
  "No-Code Builder",
];

// ═════════════════════════════════════════════════════════════════════
// WORD-REVEAL HEADING
// Each word materialises individually: slides up from a clip mask,
// blurs in from 8px → 0, and fades opacity 0 → 1.
// Line 1 words stagger first, then line 2 words follow.
// Pure Framer Motion variants — zero timers, zero setState in loops.
// ═════════════════════════════════════════════════════════════════════

const LINE1_WORDS = ["Build", "smarter", "products"];
const LINE2_WORDS = ["with", "intelligent", "AI", "tools"];

// Stagger timing constants
const WORD_STAGGER   = 0.11;  // seconds between each word
const LINE2_START    = LINE1_WORDS.length * WORD_STAGGER + 0.18; // delay for line 2 start

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    rotateX: 35,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    rotateX: 0,
    transition: {
      delay: i * WORD_STAGGER,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1], // custom spring-like ease
    },
  }),
};

const line2WordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    rotateX: 35,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    rotateX: 0,
    transition: {
      delay: LINE2_START + i * WORD_STAGGER,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function TypewriterHeading({ isDark }: { isDark: boolean }) {
  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-[-0.01em] max-w-[900px] ${
        isDark ? "hero-metallic" : "text-[#1C1C1C]"
      }`}
      style={{ fontFamily: "'DM Serif Display', serif", perspective: "600px" }}
    >
      {/* Line 1 — each word clips up and de-blurs */}
      <span className="flex flex-wrap justify-center gap-x-[0.28em] overflow-hidden pb-1">
        {LINE1_WORDS.map((word, i) => (
          <motion.span
            key={word + i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block", transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </span>

      {/* Line 2 — accent colour, staggered after line 1 */}
      <span
        className={`flex flex-wrap justify-center gap-x-[0.28em] overflow-hidden pb-1 ${
          isDark
            ? "bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#6E8F6A] to-[#8BAF87]"
            : "text-[#6E8F6A]"
        }`}
      >
        {LINE2_WORDS.map((word, i) => (
          <motion.span
            key={word + i}
            custom={i}
            variants={line2WordVariants}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block", transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

// ═════════════════════════════════════════════════════════════════════
// SHARED — Unified content stack used by BOTH heroes
// Animation delays are compressed to front-load LCP (the h1) and push
// decorative elements (badges, trust text) to after the LCP window.
// ═════════════════════════════════════════════════════════════════════

function HeroContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
      {/* 1. Badge — starts instantly, fast */}
      <motion.div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
          isDark
            ? "bg-white/[0.06] border border-white/[0.08] text-white/60"
            : "tag-pill"
        }`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        AI-Powered Developer Platform
      </motion.div>

      {/* 2. Main Heading — typewriter animation */}
      <TypewriterHeading isDark={isDark} />

      {/* 3. Subheading */}
      <motion.p
        className={`text-base sm:text-lg md:text-xl max-w-[680px] leading-relaxed ${
          isDark ? "text-white/70" : "text-[#555]"
        }`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
      >
        Lade Stack unifies code editing, API testing, documentation, and
        automation into a powerful ecosystem designed for modern developers
        and growing teams.
      </motion.p>

      {/* 4. Button Group */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
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

      {/* 5. Trust Line — decorative, deferred past LCP window */}
      <motion.p
        className={`text-xs sm:text-sm ${
          isDark ? "text-white/40" : "text-[#777]"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Trusted by developers, startups, and growing teams worldwide
      </motion.p>

      {/* 6. App Tags — decorative, batched into a single parent animation
          instead of 5 independent motion instances */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className={`text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${
              isDark
                ? "text-white/50 bg-white/[0.04] border border-white/[0.08]"
                : "text-[#555] bg-white/60 border border-[#E6E6E6]"
            }`}
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// CSS-driven bounce — no JS requestAnimationFrame loop
function ScrollIndicator({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce ${
        isDark ? "text-white/30" : "text-[#777]"
      }`}
      style={{ animationDuration: "2.5s" }}
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <ChevronDown className="w-4 h-4" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════
// LIGHT HERO — cinematic static image background
// ═════════════════════════════════════════════════════════════════════

function LightHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — <picture> with AVIF/WebP/PNG fallback chain.
          AVIF: 49 KB | WebP: 73 KB | PNG: 2.2 MB (fallback only).
          97% payload reduction vs the original PNG.
          fetchpriority="high" on the <img> promotes this to the browser's
          highest-priority fetch queue. Width/height prevent CLS. */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={heroBackgroundAvif} type="image/avif" />
          <source srcSet={heroBackgroundWebp} type="image/webp" />
          <img
            src={heroBackgroundPng}
            alt=""
            width={1536}
            height={1024}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
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
// MAIN HERO — Conditional mounting based on resolved theme.
//
// KEY ARCHITECTURAL CHANGE from previous version:
// Previously both LightHero and DarkHero were ALWAYS mounted with CSS
// opacity toggling. This caused:
//   - background.png (2.3 MB) to be fetched even in dark mode
//   - HeroGeometric lazy chunk to load even in light mode
//   - Double the Framer Motion animation instances running simultaneously
//
// NEW: We read the persisted theme from localStorage synchronously on
// first render (before React paint) to pick the correct hero immediately,
// then mount ONLY the active variant. Theme toggles cause a conditional
// re-mount — acceptable since theme-toggle is not a frequent interaction
// and the exit/enter animation (300ms) masks any flash.
// ═════════════════════════════════════════════════════════════════════

function getInitialThemeIsDark(): boolean {
  // Read directly from localStorage to avoid waiting for ThemeProvider context.
  // This runs synchronously during the first render so we pick the right hero
  // immediately without a layout shift or double-mount.
  try {
    const stored = localStorage.getItem("ladestack-theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    // "system" or missing — use media query
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export default function HeroSection() {
  const { theme } = useTheme();

  // Initialize synchronously from localStorage to avoid hero flicker
  const [isDark, setIsDark] = useState<boolean>(getInitialThemeIsDark);

  useEffect(() => {
    const resolved =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(resolved);
  }, [theme]);

  return (
    <div className="relative" style={{ minHeight: "100svh" }}>
      {/* Only mount the active hero — prevents loading both assets simultaneously */}
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isDark ? <DarkHero /> : <LightHero />}
      </motion.div>
    </div>
  );
}
