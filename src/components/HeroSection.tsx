import { lazy, Suspense, useEffect, useState } from "react";
import {
  ArrowRight, ChevronDown, Zap, Code2,
  FileText, Globe, Database, Star, ArrowUpRight,
  CheckCircle2, Sparkles,
} from "lucide-react";
import { SoftButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import heroBackgroundAvif from "@/assets/background.avif";
import heroBackgroundWebp from "@/assets/background.webp";
import heroBackgroundPng from "@/assets/background.png";

const HeroGeometric = lazy(() => import("@/components/ui/hero-geometric"));

// ─── Data ──────────────────────────────────────────────────────────────────

const LINE1 = ["Build", "smarter"];
const LINE2 = ["products", "with", "AI"];

const WORD_STAGGER = 0.1; // seconds between each word
const LINE2_DELAY = LINE1.length * WORD_STAGGER + 0.15;

const products = [
  { icon: Code2, label: "AI Code Editor", color: "#6E8F6A", url: "https://code.ladestack.in/" },
  { icon: Zap, label: "API Tester", color: "#4ec2e8", url: "https://api.ladestack.in/" },
  { icon: FileText, label: "Doc Generator", color: "#e8a64e", url: "https://docs.ladestack.in/" },
  { icon: Globe, label: "No-Code Builder", color: "#b47ee8", url: "https://builder.ladestack.in/" },
  { icon: Database, label: "File Sharing", color: "#e87070", url: "https://files.ladestack.in/" },
];

const trustStats = [
  { value: "50K+", label: "Developers" },
  { value: "5", label: "AI Products" },
  { value: "100+", label: "Countries" },
  { value: "Free", label: "Forever" },
];

const codeLines = [
  { text: "// ✦ AI suggestion · accept with Tab", dim: true },
  { text: "async function analyzeCode(input: string) {", dim: false },
  { text: "  const ai = new LadeAI({ model: 'pro' });", dim: false },
  { text: "  const result = await ai.analyze(input);", dim: false },
  { text: "  return result.insights;", dim: false },
  { text: "}", dim: false },
  { text: "", dim: false },
  { text: "// ✦ Generated 6 test cases", dim: true },
];

// ─── Utilities ─────────────────────────────────────────────────────────────

function getInitialThemeIsDark(): boolean {
  try {
    const stored = localStorage.getItem("ladestack-theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch { return false; }
}

// ─── CSS-animated word reveal heading ──────────────────────────────────────
// Replaces per-word motion.span with CSS @keyframes hero-word-reveal.
// Text renders immediately (improving LCP), animation runs on compositor thread.

function HeroHeading({ isDark }: { isDark: boolean }) {
  const allWords = [...LINE1, ...LINE2, "tools."];
  const totalWordsBeforeTools = LINE1.length + LINE2.length;

  return (
    <h1
      className="font-bold leading-[1.12] tracking-[-0.02em]"
      style={{ fontFamily: "'DM Serif Display', serif", perspective: "800px" }}
    >
      {/* Line 1 */}
      <span className="flex flex-wrap gap-x-[0.22em] overflow-hidden pb-1">
        {LINE1.map((w, i) => (
          <span
            key={w + i}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
              animation: `hero-word-reveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${i * WORD_STAGGER}s both`,
            }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] ${isDark ? "hero-metallic" : "text-[#1C1C1C]"
              }`}
          >
            {w}
          </span>
        ))}
      </span>
      {/* Line 2 — gradient accent */}
      <span className="flex flex-wrap gap-x-[0.22em] overflow-hidden pb-1">
        {LINE2.map((w, i) => {
          const isAI = w === "AI";
          return (
            <span
              key={w + i}
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
                animation: `hero-word-reveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${LINE2_DELAY + i * WORD_STAGGER}s both`,
              }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] ${isAI
                  ? isDark
                    ? "bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#6E8F6A] via-[#8BAF87] to-[#6E8F6A]"
                    : "text-[#6E8F6A]"
                  : isDark ? "hero-metallic" : "text-[#1C1C1C]"
                }`}
            >
              {w}
            </span>
          );
        })}
      </span>
      {/* Line 3 — "tools." with underline decoration */}
      <span className="flex flex-wrap gap-x-[0.22em] overflow-hidden pb-1">
        <span
          style={{
            display: "inline-block",
            transformOrigin: "bottom center",
            position: "relative",
            animation: `hero-word-reveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${LINE2_DELAY + LINE2.length * WORD_STAGGER}s both`,
          }}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] ${isDark ? "hero-metallic" : "text-[#1C1C1C]"
            }`}
        >
          tools.
          <span
            className="absolute -bottom-1 left-0 right-0 h-[4px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #6E8F6A, #8BAF87, transparent)",
              transformOrigin: "left",
              animation: `hero-underline-grow 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${LINE2_DELAY + (LINE2.length + 1) * WORD_STAGGER + 0.1}s both`,
            }}
          />
        </span>
      </span>
    </h1>
  );
}

// ─── Animated product cards (right panel — light) ─────────────────────────

function ProductCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % products.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Glow behind cards */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(110,143,106,0.10),_transparent_70%)] blur-xl" />

      {/* Card stack */}
      <div className="relative flex flex-col gap-3">
        {/* Featured active product */}
        <div
          key={active}
          className="rounded-2xl border border-[#E0E0E0] bg-white/90 backdrop-blur-md p-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
          style={{ animation: "hero-fade-up 0.38s cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: `${products[active].color}18` }}
            >
              {(() => { const Icon = products[active].icon; return <Icon className="w-4.5 h-4.5" style={{ color: products[active].color }} />; })()}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">{products[active].label}</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <button
              className="ml-auto w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ background: `${products[active].color}15` }}
              onClick={() => safeWindowOpen(products[active].url)}
            >
              <ArrowUpRight className="w-3.5 h-3.5" style={{ color: products[active].color }} />
            </button>
          </div>

          {/* Mini progress bar — CSS animation instead of motion */}
          <div className="h-1 rounded-full bg-neutral-100 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                background: products[active].color,
                animation: "hero-underline-grow 2.8s linear both",
              }}
            />
          </div>
        </div>

        {/* Mini product pill grid */}
        <div className="grid grid-cols-5 gap-2">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border transition-all duration-200 hover:-translate-y-0.5 ${i === active
                    ? "border-transparent shadow-sm"
                    : "border-[#E8E8E8] bg-white/70 hover:border-[#D0D0D0]"
                  }`}
                style={i === active ? { background: `${p.color}15`, borderColor: `${p.color}30` } : {}}
              >
                <Icon className="w-4 h-4" style={{ color: i === active ? p.color : "#999" }} />
                <span className="text-[8px] text-center leading-tight font-medium" style={{ color: i === active ? p.color : "#aaa" }}>
                  {p.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-4 gap-2">
          {trustStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[#E8E8E8] bg-white/80 py-2.5 flex flex-col items-center"
            >
              <span className="text-sm font-bold text-neutral-900 leading-none">{s.value}</span>
              <span className="text-[9px] text-neutral-500 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Animated code editor mockup (right panel — dark) ─────────────────────

function CodeEditorMockup() {
  const [typedLines, setTypedLines] = useState(0);

  useEffect(() => {
    if (typedLines >= codeLines.length) return;
    const t = setTimeout(() => setTypedLines(p => p + 1), typedLines === 0 ? 600 : 420);
    return () => clearTimeout(t);
  }, [typedLines]);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse,_rgba(110,143,106,0.15),_transparent_70%)] blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141414] shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[11px] text-neutral-500 font-mono">analyze.ts — Lade AI Editor</span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-[#6E8F6A]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E8F6A] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6E8F6A]" />
            </span>
            AI Active
          </span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[12px] leading-[1.8] min-h-[200px]">
          {codeLines.slice(0, typedLines).map((line, i) => (
            <div
              key={i}
              style={{ animation: `hero-fade-up 0.22s ease-out both` }}
              className={`flex gap-4 ${line.dim ? "text-neutral-600" : ""}`}
            >
              <span className="text-neutral-700 select-none w-4 text-right flex-shrink-0">
                {line.text ? i + 1 : ""}
              </span>
              <span className={
                line.dim ? "text-[#6E8F6A]/60 italic" :
                  line.text.startsWith("async") || line.text.startsWith("}") ? "text-sky-400" :
                    line.text.includes("new LadeAI") || line.text.includes("await") ? "text-neutral-300" :
                      line.text.includes("result") ? "text-[#6E8F6A]" :
                        "text-neutral-400"
              }>
                {line.text}
                {i === typedLines - 1 && typedLines < codeLines.length && (
                  <span className="inline-block w-[7px] h-[14px] bg-[#6E8F6A] ml-0.5 animate-pulse align-middle rounded-sm" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom AI bar */}
        <div className="px-5 py-3 bg-[#1a1a1a] border-t border-white/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#6E8F6A]" />
            <span className="text-[10px] text-neutral-500">AI · 6 suggestions ready</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-neutral-600">
            <span>TypeScript</span>
            <span className="text-[#6E8F6A]">✓ No errors</span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-3 -right-3 bg-[#6E8F6A] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
        style={{ animation: "hero-fade-up 0.35s cubic-bezier(0.22, 1, 0.36, 1) 2.2s both" }}
      >
        <Zap className="w-3 h-3" />
        10× faster
      </div>

      {/* Floating check card */}
      <div
        className="absolute -bottom-3 -left-3 bg-[#141414] border border-white/[0.08] rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
        style={{ animation: "hero-fade-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) 2.8s both" }}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8F6A]" />
        <span className="text-[10px] text-neutral-400">Tests auto-generated</span>
      </div>
    </div>
  );
}

// ─── Trust badge strip ─────────────────────────────────────────────────────

function TrustStrip({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      style={{ animation: "hero-fade-up 0.35s ease-out 0.55s both" }}
    >
      {products.map((p) => {
        const Icon = p.icon;
        return (
          <span
            key={p.label}
            className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${isDark
                ? "bg-white/[0.04] border border-white/[0.07] text-white/50"
                : "bg-white/60 border border-[#E6E6E6] text-[#555]"
              }`}
          >
            <Icon className="w-3 h-3" style={{ color: p.color }} />
            {p.label}
          </span>
        );
      })}
    </div>
  );
}

// ─── Social proof numbers ──────────────────────────────────────────────────

function SocialProof({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="flex items-center gap-5 flex-wrap"
      style={{ animation: "hero-fade-up 0.4s ease-out 0.48s both" }}
    >
      {trustStats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          {i > 0 && (
            <div className={`w-px h-6 ${isDark ? "bg-white/10" : "bg-neutral-200"}`} />
          )}
          <div>
            <p className={`text-xl font-bold tracking-tight leading-none ${isDark ? "text-white" : "text-neutral-900"}`}>
              {s.value}
            </p>
            <p className={`text-[11px] mt-0.5 ${isDark ? "text-white/40" : "text-neutral-500"}`}>{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Scroll indicator ──────────────────────────────────────────────────────

function ScrollIndicator({ isDark }: { isDark: boolean }) {
  return (
    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 ${isDark ? "text-white/25" : "text-neutral-400"}`}>
      <div
        className="flex flex-col items-center gap-1.5"
        style={{ animation: "hero-fade-up 1s ease-in-out 1s both" }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className={`w-5 h-8 rounded-full border flex items-start justify-center pt-1.5 ${isDark ? "border-white/15" : "border-neutral-300"}`}>
          <div
            className={`w-1 h-1.5 rounded-full ${isDark ? "bg-white/40" : "bg-neutral-400"} animate-bounce`}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Shared left-column content ────────────────────────────────────────────

function HeroLeft({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col gap-7">
      {/* Eyebrow badge */}
      <div style={{ animation: "hero-fade-up 0.3s ease-out 0.04s both" }}>
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${isDark
              ? "bg-[#6E8F6A]/15 border border-[#6E8F6A]/25 text-[#8BAF87]"
              : "bg-[#DDE7D8] text-[#4a6347]"
            }`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E8F6A] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6E8F6A]" />
          </span>
          AI-Powered Developer Platform
        </span>
      </div>

      {/* Main heading */}
      <HeroHeading isDark={isDark} />

      {/* Sub copy */}
      <p
        className={`text-base sm:text-lg leading-relaxed max-w-lg ${isDark ? "text-white/60" : "text-neutral-600"}`}
        style={{ animation: "hero-fade-up 0.38s ease-out 0.18s both" }}
      >
        Lade Stack unifies code editing, API testing, documentation, and automation into one
        powerful ecosystem — enterprise-grade, zero cost, built for every developer.
      </p>

      {/* CTA buttons */}
      <div
        className="flex flex-col sm:flex-row gap-3"
        style={{ animation: "hero-fade-up 0.35s ease-out 0.27s both" }}
      >
        <SoftButton
          variant="primary"
          size="lg"
          showArrow
          onClick={() => safeWindowOpen("https://code.ladestack.in/")}
          className={isDark ? "bg-[#6E8F6A] hover:bg-[#5F7F63] shadow-[0_0_24px_rgba(110,143,106,0.35)]" : "shadow-sm"}
        >
          Start Building Free
        </SoftButton>
        <Link to="/projects">
          <SoftButton
            variant="secondary"
            size="lg"
            className={
              isDark
                ? "border-white/15 text-white/65 hover:bg-white/[0.05] hover:text-white w-full sm:w-auto"
                : "w-full sm:w-auto"
            }
          >
            Explore Platform
            <ArrowRight className="w-4 h-4" />
          </SoftButton>
        </Link>
      </div>

      {/* Social proof */}
      <SocialProof isDark={isDark} />

      {/* Trust badges */}
      <TrustStrip isDark={isDark} />
    </div>
  );
}

// ─── Light Hero ────────────────────────────────────────────────────────────

function LightHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EB]/85 via-[#F5F3EB]/70 to-[#F5F3EB]/92" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      {/* Split layout */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <HeroLeft isDark={false} />
          <div
            className="hidden lg:flex justify-center"
            style={{ animation: "hero-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both" }}
          >
            <ProductCards />
          </div>
        </div>
      </div>

      <ScrollIndicator isDark={false} />
    </section>
  );
}

// ─── Dark Hero ─────────────────────────────────────────────────────────────

function DarkHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
        <HeroGeometric />
      </Suspense>

      {/* Extra depth overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,_rgba(110,143,106,0.06),_transparent_60%)]" />
      </div>

      {/* Split layout */}
      <div className="relative z-20 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <HeroLeft isDark />
          <div
            className="hidden lg:flex justify-center"
            style={{ animation: "hero-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both" }}
          >
            <CodeEditorMockup />
          </div>
        </div>
      </div>

      <ScrollIndicator isDark />
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────

export default function HeroSection() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(getInitialThemeIsDark);

  useEffect(() => {
    const resolved =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(resolved);
  }, [theme]);

  return (
    <div className="relative" style={{ minHeight: "100svh" }}>
      <div
        key={isDark ? "dark" : "light"}
        style={{ animation: "hero-fade-up 0.3s ease-out both" }}
      >
        {isDark ? <DarkHero /> : <LightHero />}
      </div>
    </div>
  );
}
