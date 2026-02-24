import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip smooth scroll entirely on touch/mobile — native scroll has better INP
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Use the native requestAnimationFrame-based ticker ONLY when the tab
    // is visible and the user is actively scrolling, rather than a
    // persistent rAF loop that runs on every frame for the page lifetime.
    // This uses Lenis's built-in start/stop and ties the tick to the
    // 'scroll' event + a self-cancelling frame, so the main thread is
    // only occupied during actual scroll activity.
    let rafId: number | null = null;
    let scrolling = false;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    function tick(time: number) {
      lenis.raf(time);
      if (scrolling) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    function onScroll() {
      if (!scrolling) {
        scrolling = true;
        rafId = requestAnimationFrame(tick);
      }
      // Reset idle timer — stop ticking 150ms after last scroll event
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        scrolling = false;
        idleTimer = null;
      }, 150);
    }

    // Lenis emits its own scroll events; we drive it from native wheel/touch
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    window.addEventListener("keydown", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.removeEventListener("keydown", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (idleTimer) clearTimeout(idleTimer);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
