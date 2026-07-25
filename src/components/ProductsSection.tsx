import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2, Globe, FileText, Brain, Cpu, Image, FileCheck, MapPin,
  Layers,
} from "lucide-react";
import { ScrollReveal, SoftButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

// ─── Data ──────────────────────────────────────────────────────────────────

const products = [
  {
    id: "ai-code-viewer",
    icon: Code2,
    title: "AI Code Editor",
    tagline: "Write, compile & optimize with AI",
    url: "https://code.ladestack.in/",
    internalUrl: "/ai-code-viewer-ai",
    color: "#6E8F6A",
  },
  {
    id: "api-testing",
    icon: Cpu,
    title: "AI API Tester",
    tagline: "Intelligent test generation & monitoring",
    url: "/apps",
    internalUrl: "/apps",
    color: "#4ec2e8",
  },
  {
    id: "website-builder",
    icon: Globe,
    title: "No-Code Builder",
    tagline: "GPT-4 powered responsive websites",
    url: "/apps",
    internalUrl: "/apps",
    color: "#b47ee8",
  },
  {
    id: "documentation-ai",
    icon: Brain,
    title: "Documentation AI",
    tagline: "Code-aware documentation generation",
    url: "/apps",
    internalUrl: "/apps",
    color: "#e8a64e",
  },
  {
    id: "file-management",
    icon: FileText,
    title: "File Sharing",
    tagline: "Enterprise CDN-powered sharing",
    url: "/apps",
    internalUrl: "/apps",
    color: "#e87070",
  },
  {
    id: "ls-pdf",
    icon: FileText,
    title: "LS PDF",
    tagline: "17 client-side tools, 100% privacy",
    url: "https://pdf.ladestack.in/",
    internalUrl: "https://pdf.ladestack.in/",
    color: "#E5322D",
  },
  {
    id: "ls-img",
    icon: Image,
    title: "LS Image Compressor",
    tagline: "9+ image formats, up to 90% smaller",
    url: "https://img.ladestack.in/",
    internalUrl: "https://img.ladestack.in/",
    color: "#8B5CF6",
  },
  {
    id: "swift-resume",
    icon: FileCheck,
    title: "Swift Resume",
    tagline: "ATS-optimized resume builder & scoring",
    url: "https://resume.ladestack.in/",
    internalUrl: "https://resume.ladestack.in/",
    color: "#2563EB",
  },
  {
    id: "bharat-land",
    icon: MapPin,
    title: "Bharat Land Converter",
    tagline: "Convert land units across India",
    url: "https://land.ladestack.in/",
    internalUrl: "https://land.ladestack.in/",
    color: "#EA580C",
  },
];

// ─── Single Minimal Product Tile ───────────────────────────────────────────

function ProductTile({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const Icon = product.icon;
  const isExternal = product.url.startsWith("http");

  const tileContent = (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/[0.07] bg-white dark:bg-white/[0.02] hover:border-[#6E8F6A]/40 dark:hover:border-white/[0.2] hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-row sm:flex-col items-center sm:items-start gap-3.5 sm:gap-4 h-full snap-start flex-shrink-0 w-[260px] sm:w-auto"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
    >
      {/* Subtle radial glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${product.color}10, transparent 70%)`,
        }}
      />

      {/* 1. Icon Box (reused exact component style) */}
      <div
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
        style={{ background: `${product.color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color: product.color }} />
      </div>

      {/* Text Container */}
      <div className="flex-1 min-w-0">
        {/* 2. Product Name */}
        <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white truncate group-hover:text-[#6E8F6A] dark:group-hover:text-white transition-colors duration-200">
          {product.title}
        </h3>

        {/* 3. One-line Tagline (max 6-8 words) */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5 sm:mt-1">
          {product.tagline}
        </p>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          safeWindowOpen(product.url);
        }}
        className="block h-full cursor-pointer focus:outline-none"
      >
        {tileContent}
      </a>
    );
  }

  return (
    <Link to={product.internalUrl} className="block h-full cursor-pointer focus:outline-none">
      {tileContent}
    </Link>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.07),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(110,143,106,0.10),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(78,194,232,0.05),_transparent_60%)]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.3]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-5">
              <Layers className="w-3.5 h-3.5" />
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5">
              What drives{" "}
              <span className="relative inline-block">
                <span className="text-[#6E8F6A]">everything</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6E8F6A]/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}we build
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              Nine AI-powered tools that cover every phase of modern development — unified, free, and production-ready.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Responsive Tile Grid / Carousel ── */}
        <ScrollReveal>
          <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-none gap-4 sm:gap-5 pb-4 sm:pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0">
            {products.map((product, index) => (
              <ProductTile key={product.id} product={product} index={index} />
            ))}
          </div>
        </ScrollReveal>

        {/* ── Bottom CTA ── */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-[#E6E6E6] dark:border-white/[0.06]">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                All tools are free for developers
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                No credit card · No usage limits · Lifetime access
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/apps">
                <SoftButton variant="primary" size="lg" showArrow>
                  Explore All Products
                </SoftButton>
              </Link>
              <Link to="/about">
                <SoftButton variant="secondary" size="lg">
                  About Lade Stack
                </SoftButton>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-10" />
      </div>
    </section>
  );
}
