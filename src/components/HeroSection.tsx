import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SoftButton } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/background.png";

const trustBadges = [
  "Code Editor",
  "API Testing",
  "Documentation AI",
  "File Sharing",
  "No-Code Builder",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EB]/80 via-[#F5F3EB]/60 to-[#F5F3EB]/90" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
        {/* Overline pill */}
        <motion.div
          className="inline-flex items-center gap-2 tag-pill mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI-Powered Developer Platform
        </motion.div>

        {/* Headline — premium serif */}
        <motion.h1
          className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.1] font-normal text-[#1C1C1C] dark:text-[#E8E4DA] tracking-[-0.01em] max-w-[900px] mx-auto mb-6"
          style={{ fontFamily: "'DM Serif Display', serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Build smarter products with{" "}
          <span className="text-[#6E8F6A]">intelligent AI</span>{" "}
          development tools
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#555] dark:text-[#999] max-w-[680px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          Lade Stack unifies code editing, API testing, documentation, and
          automation into a streamlined ecosystem designed for modern
          developers and growing teams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SoftButton
            variant="primary"
            size="lg"
            showArrow
            onClick={() => safeWindowOpen("https://code.ladestack.in/")}
          >
            Start Building
          </SoftButton>
          <Link to="/projects">
            <SoftButton variant="secondary" size="lg">
              Explore Platform
            </SoftButton>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-[#777] dark:text-[#888]">
            Trusted by developers, startups, and growing teams worldwide
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustBadges.map((badge, i) => (
              <motion.span
                key={badge}
                className="text-[11px] sm:text-xs font-medium text-[#555] dark:text-[#999] px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-[#E6E6E6] dark:border-[#333] backdrop-blur-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.06 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-[#777]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
