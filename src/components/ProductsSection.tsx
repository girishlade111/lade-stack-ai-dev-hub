import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code, Globe, FileText, Brain, Cpu, ExternalLink, Sparkles, Layers, ArrowRight,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowButton, SectionDivider, TiltCard } from "@/components/motion";
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
    gradient: "from-cyan-500/20 to-blue-500/20",
    glowColor: "rgba(6,182,212,0.25)",
    timeToValue: "30 sec",
    mockupLines: ["const ai = enhance(code);", "// AI-optimized output", "export default result;"],
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
    gradient: "from-blue-500/20 to-violet-500/20",
    glowColor: "rgba(59,130,246,0.25)",
    timeToValue: "5 min",
    mockupLines: ["GET /api/users → 200", "Tests: 24/24 passed", "Latency: 42ms avg"],
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
    gradient: "from-violet-500/20 to-pink-500/20",
    glowColor: "rgba(139,92,246,0.25)",
    timeToValue: "2 min",
    mockupLines: ["<Landing page='modern'>", "  <Hero gradient />", "</Landing>"],
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
    gradient: "from-pink-500/20 to-orange-500/20",
    glowColor: "rgba(236,72,153,0.25)",
    timeToValue: "1 min",
    mockupLines: ["upload: design.fig 2.4MB", "CDN: 12 edge nodes", "share → team-link"],
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
    gradient: "from-orange-500/20 to-cyan-500/20",
    glowColor: "rgba(249,115,22,0.25)",
    timeToValue: "3 min",
    mockupLines: ["/// @auto-documented", "function processData()", "→ 12 pages generated"],
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [showMockup, setShowMockup] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <TiltCard intensity={6}>
        <motion.div
          className="glass-card rounded-xl p-6 h-full flex flex-col group relative overflow-hidden"
          onMouseEnter={() => setShowMockup(true)}
          onMouseLeave={() => setShowMockup(false)}
          whileHover={{
            y: -8,
            boxShadow: `0 0 45px -8px ${product.glowColor}`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 30%, ${product.glowColor} 50%, transparent 70%)`,
              backgroundSize: "300% 300%",
              padding: "1px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <product.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  product.status === "Live"
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    : "bg-muted text-muted-foreground border border-border"
                }`}>
                  {product.status === "Live" && (
                    <motion.span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {product.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-xs text-primary/70 font-medium mb-3">{product.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Animated preview mockup on hover */}
            <AnimatePresence>
              {showMockup && (
                <motion.div
                  className="mb-4 p-3 rounded-lg bg-background/60 border border-border/50 font-mono text-[10px]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.mockupLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.2 }}
                    >
                      <span className="text-primary/40 mr-2">{i + 1}</span>
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="text-[10px] px-2 py-1 rounded-md bg-muted/80 text-muted-foreground border border-border/50"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
              <span className="text-xs text-muted-foreground">
                Setup: {product.timeToValue}
              </span>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                {product.status === "Live" ? (
                  <button
                    onClick={() => safeWindowOpen(product.url)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Try Now <ExternalLink className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    to={product.url}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
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

        {/* Category filter tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Products grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA - uses global button system */}
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
