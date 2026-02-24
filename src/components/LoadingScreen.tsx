import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dismiss as soon as the page is interactive, with a short minimum
    // to avoid a flash. Cap at 800ms so it never blocks LCP artificially.
    const MIN_DURATION = 500;
    const MAX_DURATION = 800;

    const start = Date.now();

    const dismiss = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
      // Hard cap — never block longer than MAX_DURATION
      const cap = setTimeout(() => setIsLoading(false), MAX_DURATION);
      return () => {
        window.removeEventListener("load", dismiss);
        clearTimeout(cap);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#F5F3EB]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-[#1C1C1C]">Lade</span>
              <span className="text-[#6E8F6A] ml-2">Stack</span>
            </motion.div>

            {/* CSS-animated dots — no JS RAF loop */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A] animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
