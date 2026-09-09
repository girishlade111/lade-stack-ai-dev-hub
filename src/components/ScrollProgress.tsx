/**
 * ScrollProgress — pure CSS Scroll-driven Animation implementation.
 *
 * WHY: The previous implementation used Framer Motion's useScroll() +
 * useSpring() which runs a spring physics simulation on the MAIN THREAD on
 * every scroll frame. This directly contributes to INP because the main
 * thread is busy calculating spring physics when the user tries to interact.
 *
 * FIX: CSS `animation-timeline: scroll()` runs entirely on the compositor
 * thread in Chromium (Chrome 115+). We provide a JS/Framer Motion fallback
 * for Firefox which does not yet support scroll-driven animations.
 */

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Feature-detect CSS scroll-driven animations (Chrome 115+, Edge 115+)
    // @ts-ignore — non-standard property, intentional feature detect
    if (CSS.supports("animation-timeline", "scroll()")) {
      // Apply via JS to avoid TypeScript/Tailwind parse errors for non-standard props
      bar.style.animationName = "scroll-progress-grow";
      bar.style.animationTimeline = "scroll()";
      bar.style.animationTimingFunction = "linear";
      bar.style.animationFillMode = "both";
      // No main-thread work at all — compositor handles it
      return;
    }

    // Fallback for Firefox: passive scroll listener updating a CSS variable.
    // Using a CSS variable instead of direct style mutation allows the browser
    // to batch the visual update off the main thread where possible.
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar!.style.setProperty("--scroll-progress", String(progress));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Keyframe for Chromium scroll-driven animation */}
      <style>{`
        @keyframes scroll-progress-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
      <div
        ref={barRef}
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#6E8F6A] origin-left z-[60]"
        style={{
          // Fallback initial value driven by CSS var (Firefox path)
          transform: "scaleX(var(--scroll-progress, 0))",
        }}
      />
    </>
  );
}
