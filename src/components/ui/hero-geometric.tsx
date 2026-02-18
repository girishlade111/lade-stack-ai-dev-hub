import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ─── Floating geometric shape ────────────────────────────────────────

interface ShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: number;
  rotate?: number;
  gradient: string;
}

function FloatingShape({
  className = "",
  delay = 0,
  duration = 20,
  size = 200,
  rotate = 0,
  gradient,
}: ShapeProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotate,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        rotate: { duration: 1, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div
        className="rounded-3xl"
        style={{
          width: size,
          height: size,
          background: gradient,
          filter: "blur(1px)",
        }}
      />
    </motion.div>
  );
}

// ─── Background-only: shapes + grain + glow ──────────────────────────

export default function HeroGeometric() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      {/* ── Geometric shapes ─────────────────────────────── */}
      {mounted && (
        <>
          <FloatingShape
            delay={0.2}
            duration={22}
            size={280}
            rotate={12}
            gradient="linear-gradient(135deg, rgba(110,143,106,0.25) 0%, rgba(110,143,106,0.05) 100%)"
            className="top-[8%] left-[5%]"
          />
          <FloatingShape
            delay={0.5}
            duration={18}
            size={200}
            rotate={-8}
            gradient="linear-gradient(135deg, rgba(110,143,106,0.20) 0%, rgba(80,120,80,0.05) 100%)"
            className="top-[15%] right-[8%]"
          />
          <FloatingShape
            delay={0.8}
            duration={25}
            size={160}
            rotate={20}
            gradient="linear-gradient(135deg, rgba(110,143,106,0.15) 0%, rgba(60,100,60,0.03) 100%)"
            className="bottom-[15%] left-[12%]"
          />
          <FloatingShape
            delay={1.0}
            duration={20}
            size={240}
            rotate={-15}
            gradient="linear-gradient(135deg, rgba(110,143,106,0.18) 0%, rgba(110,143,106,0.03) 100%)"
            className="bottom-[10%] right-[5%]"
          />
          {/* Subtle center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6E8F6A]/[0.04] blur-[120px]" />
        </>
      )}

      {/* ── Grain overlay ────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
