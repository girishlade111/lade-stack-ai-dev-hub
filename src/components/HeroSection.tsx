import { motion, type Variants } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Users, Shield, Code } from "lucide-react";
import { SoftButton, AnimatedCounter, staggerContainer, fadeInUp } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

const stats = [
  { icon: Zap, value: 10, suffix: "x", label: "Faster Dev" },
  { icon: Users, value: 50, suffix: "K+", label: "Developers" },
  { icon: Shield, value: 99, suffix: ".9%", label: "Uptime" },
  { icon: Code, value: 5, suffix: "", label: "AI Tools" },
];

const statCardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function StatCard({ stat }: { stat: typeof stats[0] }) {
  return (
    <motion.div className="text-center" variants={statCardVariants}>
      <div className="p-4">
        <div className="flex justify-center mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#6E8F6A]/10 flex items-center justify-center">
            <stat.icon className="w-4 h-4 text-[#6E8F6A]" />
          </div>
        </div>
        <p className="text-xl md:text-2xl font-bold text-[#6E8F6A]">
          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
        </p>
        <p className="text-xs text-[#777] mt-0.5">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left side — Content on sage background */}
          <motion.div
            className="bg-sage rounded-[20px] p-8 md:p-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="tag-pill inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Development Platform
            </motion.div>

            {/* 3D Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight mb-6 text-3d leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Build faster with
              <br />
              intelligent AI tools
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base md:text-lg text-[#555] dark:text-[#999] max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              The complete AI-powered development ecosystem. Code editor, API testing,
              website builder, and documentation — all powered by cutting-edge AI.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <SoftButton
                variant="primary"
                size="lg"
                showArrow
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Start Building
              </SoftButton>
              <SoftButton
                variant="secondary"
                size="lg"
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Platform
              </SoftButton>
            </motion.div>
          </motion.div>

          {/* Right side — Image container on peach background */}
          <motion.div
            className="bg-peach rounded-[20px] p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-[450px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="text-center">
              {/* Abstract representation */}
              <motion.div
                className="w-full max-w-sm mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Code editor mockup */}
                <div className="bg-white dark:bg-[#2a2622] rounded-2xl shadow-sm overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F5F3EB] dark:bg-[#1e1c18] border-b border-[#E6E6E6] dark:border-[#333]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D8C1B3]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E7EDD8]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6E8F6A]/30" />
                    <span className="ml-2 text-[10px] text-[#999] font-mono">editor.tsx</span>
                  </div>
                  {/* Code lines */}
                  <div className="p-4 space-y-2.5 font-mono text-xs">
                    <div className="flex gap-3">
                      <span className="text-[#999] select-none">1</span>
                      <span><span className="text-[#6E8F6A]">import</span> <span className="text-[#8a8078]">&#123; AI &#125;</span> <span className="text-[#6E8F6A]">from</span> <span className="text-[#c4a898]">'lade-stack'</span></span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#999] select-none">2</span>
                      <span className="text-[#999]">// AI-powered code generation</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#999] select-none">3</span>
                      <span><span className="text-[#6E8F6A]">const</span> <span className="text-[#555]">result</span> = <span className="text-[#6E8F6A]">await</span> <span className="text-[#8a8078]">AI</span>.<span className="text-[#555]">generate</span>()</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#999] select-none">4</span>
                      <motion.span
                        className="inline-block w-1.5 h-4 bg-[#6E8F6A]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          transition={{ delayChildren: 0.9 }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
