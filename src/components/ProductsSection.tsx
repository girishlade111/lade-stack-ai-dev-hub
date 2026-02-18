import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code, Globe, FileText, Brain, Cpu, ExternalLink, Layers, ArrowRight,
} from "lucide-react";
import { ScrollReveal, SoftButton, SectionDivider, fadeInUp } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

const categories = ["All", "AI Tools", "Productivity", "Developer"];

const products = [
  {
    id: "ai-code-viewer",
    icon: Code,
    title: "AI Code Viewer & Editor",
    tagline: "Write, test, and optimize code with AI",
    description: "Revolutionary AI-powered code editor with real-time compilation, intelligent enhancement, and advanced debugging.",
    features: ["AI Code Enhancement", "Real-time Compilation", "Performance Analysis", "Multi-language Support"],
    category: "AI Tools",
    status: "Live" as const,
    url: "https://code.ladestack.in/",
    timeToValue: "30 sec",
  },
  {
    id: "api-testing",
    icon: Cpu,
    title: "AI API Testing Platform",
    tagline: "Intelligent test generation & monitoring",
    description: "AI-powered testing suite with auto-generated test cases, performance analytics, and CI/CD integration.",
    features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration", "Real-time Monitoring"],
    category: "Developer",
    status: "Coming Soon" as const,
    url: "/projects/api-testing",
    timeToValue: "5 min",
  },
  {
    id: "website-builder",
    icon: Globe,
    title: "No-Code Website Builder",
    tagline: "GPT-4 powered responsive websites",
    description: "Generate responsive, SEO-optimized websites from simple prompts with e-commerce and analytics built in.",
    features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready", "Responsive Design"],
    category: "AI Tools",
    status: "Coming Soon" as const,
    url: "/projects/website-builder",
    timeToValue: "2 min",
  },
  {
    id: "file-management",
    icon: FileText,
    title: "File Sharing Platform",
    tagline: "Enterprise CDN-powered file sharing",
    description: "Global CDN, intelligent collaboration, automatic optimization, and enterprise-grade security.",
    features: ["Global CDN", "Auto Optimization", "Enterprise Security", "Team Collaboration"],
    category: "Productivity",
    status: "Coming Soon" as const,
    url: "/projects/file-management",
    timeToValue: "1 min",
  },
  {
    id: "documentation-ai",
    icon: Brain,
    title: "Documentation AI",
    tagline: "Code-aware documentation generation",
    description: "AI that understands code context to generate comprehensive docs, API specs, and technical summaries.",
    features: ["Code Context AI", "IDE Integration", "Multi-language", "Auto Updates"],
    category: "AI Tools",
    status: "Coming Soon" as const,
    url: "/projects/documentation-ai",
    timeToValue: "3 min",
  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: index * 0.05 }}
    >
      <motion.div
        className="soft-card p-6 h-full flex flex-col group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#6E8F6A]/10 flex items-center justify-center">
            <product.icon className="w-5 h-5 text-[#6E8F6A]" />
          </div>
          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
              product.status === "Live"
                ? "bg-[#E7EDD8] text-[#4a6347]"
                : "bg-[#F5F3EB] dark:bg-[#2a2622] text-[#777] border border-border"
            }`}
          >
            {product.status}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-[#1C1C1C] dark:text-[#E8E4DA] mb-1 group-hover:text-[#6E8F6A] transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-xs text-[#6E8F6A] font-medium mb-3">{product.tagline}</p>
          <p className="text-sm text-[#555] dark:text-[#999] leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="text-[10px] px-2 py-1 rounded-md bg-[#F5F3EB] dark:bg-[#2a2622] text-[#777] border border-border/50"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <span className="text-xs text-[#777]">
            Setup: {product.timeToValue}
          </span>
          {product.status === "Live" ? (
            <button
              onClick={() => safeWindowOpen(product.url)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6E8F6A] hover:text-[#5F7F63] transition-colors"
            >
              Try Now <ExternalLink className="w-3 h-3" />
            </button>
          ) : (
            <Link to={product.url}>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#777] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA] transition-colors">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <Layers className="w-3.5 h-3.5" />
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-metallic mb-4 tracking-tight">
              The complete AI development suite
            </h2>
            <p className="text-[#555] dark:text-[#999] text-lg max-w-2xl mx-auto">
              Five powerful AI-powered tools designed to supercharge every phase of your development workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#6E8F6A] text-white"
                    : "bg-white dark:bg-[#2a2622] text-[#777] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA] border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <p className="text-[#777] mb-4 text-sm">All tools are free for developers</p>
            <Link to="/apps">
              <SoftButton variant="primary" size="lg" showArrow>
                Explore All Products
              </SoftButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
