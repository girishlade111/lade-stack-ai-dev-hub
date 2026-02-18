import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code, Globe, FileText, Brain, Cpu, ExternalLink, Layers, ArrowRight,
} from "lucide-react";
import { ScrollReveal, GlowButton, SectionDivider, fadeInUp, viewportConfig } from "@/components/motion";
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
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
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
      transition={{ delay: index * 0.06 }}
    >
      <motion.div
        className="glass-card rounded-2xl p-6 h-full flex flex-col group relative overflow-hidden"
        whileHover={{
          y: -6,
          scale: 1.02,
          borderColor: "rgba(6,182,212,0.25)",
          boxShadow: "0 0 0 1px rgba(6,182,212,0.15), 0 0 30px -5px rgba(6,182,212,0.18)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated border shimmer on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, transparent 50%, rgba(6,182,212,0.05) 100%)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <motion.div
            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <product.icon className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
              product.status === "Live"
                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                : "bg-muted text-muted-foreground border border-border"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {product.status}
          </motion.span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs text-primary/70 font-medium mb-3">{product.tagline}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
          {product.features.map((feature) => (
            <motion.span
              key={feature}
              className="text-[10px] px-2 py-1 rounded-md bg-muted/80 text-muted-foreground border border-border/50"
              whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.2)" }}
              transition={{ duration: 0.2 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 relative z-10">
          <span className="text-xs text-muted-foreground">
            Setup: {product.timeToValue}
          </span>
          {product.status === "Live" ? (
            <motion.button
              onClick={() => safeWindowOpen(product.url)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Try Now <ExternalLink className="w-3 h-3" />
            </motion.button>
          ) : (
            <Link to={product.url}>
              <motion.span
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </motion.span>
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
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Layers className="w-3.5 h-3.5 text-primary" />
              Our Products
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              The complete{" "}
              <span className="text-gradient">AI development suite</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Five powerful AI-powered tools designed to supercharge every phase of your development workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid with layout animations */}
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
            <p className="text-muted-foreground mb-4 text-sm">All tools are free for developers</p>
            <Link to="/apps">
              <GlowButton variant="primary" size="lg" showArrow>
                Explore All Products
              </GlowButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
