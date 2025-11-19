import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowLeft, ExternalLink, Play, Sparkles, Zap, Brain, Code2, Monitor, Eye, Mail, Github, Linkedin, X, Users, Gift, Star, TrendingUp, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/components/ThemeProvider";
import girishImage from "@/assets/girish.jpg";

const AICodeViewerAI = () => {
  const [email, setEmail] = useState('');
  const [betaEmail, setBetaEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Safely get theme with error handling
  let theme = 'dark';
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch (error) {
    console.error('Theme context error:', error);
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate beta access signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI Enhancer",
      description: "Intelligent code suggestions and automatic optimization powered by advanced AI algorithms.",
    },
    {
      icon: Zap,
      title: "Real-Time Compiler",
      description: "Instant preview and error detection for HTML, CSS, and JavaScript with immediate feedback.",
    },
    {
      icon: Code2,
      title: "Smart Editor",
      description: "Built-in syntax highlighting, auto-completion, and code folding for professional development.",
    },
    {
      icon: Eye,
      title: "Code Viewer",
      description: "Share and export compiled previews with beautiful formatting and responsive design.",
    }
  ];

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://ladestack.in';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ladestack.in/ai-code-viewer-ai';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEO
        title="CodeEnhance AI - AI-Powered HTML, CSS & JS Code Viewer, Compiler, Editor & Enhancer"
        description="Transform your frontend code with AI intelligence. Edit, compile, and enhance HTML, CSS & JS with real-time AI assistance. The ultimate development tool for modern web creators."
        keywords="AI code enhancer, HTML CSS JS compiler, code editor, frontend development, AI code viewer, web development tools, code optimization, AI development"
        ogTitle="CodeEnhance AI - AI-Powered Frontend Development Tool"
        ogDescription="Transform your frontend code with AI intelligence. Edit, compile, and enhance HTML, CSS & JS with real-time AI assistance."
        ogType="website"
        ogImage={`${origin}/AIcode.png`}
        twitterCard="summary_large_image"
        twitterTitle="CodeEnhance AI - AI-Powered Frontend Development"
        twitterDescription="Transform your frontend code with AI intelligence. Edit, compile, and enhance HTML, CSS & JS with real-time AI assistance."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "CodeEnhance AI",
          "description": "AI-powered HTML, CSS & JS code viewer, compiler, editor, and enhancer for modern web development",
          "url": currentUrl,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@type": "Person",
            "name": "Girish Lade",
            "url": "https://ladestack.in",
            "email": "girishlade111@gmail.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Lade Stack",
            "url": "https://ladestack.in"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "156"
          }
        }}
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          <div className="absolute inset-0 bg-gray-100/30 dark:bg-gray-800/25 opacity-50" />

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-green-200 dark:bg-green-900/30 rounded-full blur-2xl opacity-40"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  <Link to="/projects/ai-code-viewer">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Project
                  </Link>
                </Button>
              </motion.div>

              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    <Sparkles className="w-4 h-4" />
                    CodeEnhance AI
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Transform Your{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      Frontend Code
                    </span>
                    <br />
                    with AI Intelligence
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Edit, compile, and enhance your HTML, CSS & JS with AI assistance in real time.
                    The ultimate development tool for modern web creators.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="https://code.ladestack.in/" target="_blank" rel="noopener noreferrer">
                        Try CodeEnhance AI
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Powerful Features for Modern Development
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Everything you need to build, test, and enhance your web applications
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Editor Preview */}
        <section className="py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Interactive Code Editor
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Experience the power of AI-assisted coding with our advanced editor
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glassmorphism Editor Window */}
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50">
                  {/* Editor Header */}
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                          code.ladestack.in
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        AI Active
                      </div>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                          HTML
                        </div>
                        <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                          {`<!DOCTYPE html>
<html>
<head>
  <title>AI Enhanced</title>
</head>
<body>
  <button onclick="handleClick()">
    Click me
  </button>
</body>
</html>`}
                        </pre>
                      </div>

                      <div>
                        <div className="text-sm text-blue-500 dark:text-blue-400 mb-3 font-medium">
                          AI Enhanced Version
                        </div>
                        <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                          {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Enhanced</title>
</head>
<body>
  <button 
    class="btn-primary"
    aria-label="Primary action button"
    onclick="handleClick()"
  >
    Click me
  </button>
  <script>
    function handleClick() {
      console.log('Button clicked!');
    }
  </script>
</body>
</html>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Demo Modal Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Try AI Enhancement Demo
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how AI can transform your code with intelligent improvements and optimizations
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium">
                      <Gift className="w-5 h-5 mr-2" />
                      Try AI Enhancement Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        AI Code Enhancement Demo
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                            Your Code (Input)
                          </label>
                          <Textarea
                            placeholder="Paste your code here..."
                            className="font-mono text-sm h-48"
                            defaultValue={`function createButton() {
  return '<button onclick="alert()">Click</button>';
}`}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                            AI Enhanced Version
                          </label>
                          <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg h-48 overflow-x-auto">
                            {`function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.className = 'btn-primary';
  button.setAttribute('aria-label', 'Primary action button');
  
  button.addEventListener('click', (event) => {
    event.preventDefault();
    handleClick();
  });
  
  return button;
}`}
                          </pre>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Enhance This Code
                        </Button>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">AI Improvements Made:</h4>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li>✅ Added semantic HTML structure</li>
                          <li>✅ Implemented proper accessibility attributes</li>
                          <li>✅ Separated concerns (no inline handlers)</li>
                          <li>✅ Added proper event handling with preventDefault</li>
                          <li>✅ Enhanced security and maintainability</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Magic in Action */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  AI Magic in Action
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Watch how AI transforms your code with intelligent improvements
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dark Code Comparison */}
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gray-700 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-300 font-mono">
                        CodeEnhance AI Demo
                      </span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Run Demo
                    </Button>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Before AI */}
                      <div className="space-y-4">
                        <div className="text-red-400 font-medium">Before AI Enhancement</div>
                        <div className="space-y-2">
                          <div className="text-gray-400">❌ Missing accessibility attributes</div>
                          <div className="text-gray-400">❌ No semantic HTML structure</div>
                          <div className="text-gray-400">❌ Inline styles and handlers</div>
                          <div className="text-gray-400">❌ No error handling</div>
                        </div>
                        <pre className="text-sm font-mono text-gray-300 bg-gray-900 p-4 rounded-lg overflow-x-auto">
                          {`function createButton() {
  return '<button onclick="alert()">Click</button>';
}`}
                        </pre>
                      </div>

                      {/* After AI */}
                      <div className="space-y-4">
                        <div className="text-green-400 font-medium">After AI Enhancement</div>
                        <div className="space-y-2">
                          <div className="text-green-400">✅ Added accessibility attributes</div>
                          <div className="text-green-400">✅ Semantic HTML structure</div>
                          <div className="text-green-400">✅ Proper event handling</div>
                          <div className="text-green-400">✅ Enhanced security</div>
                        </div>
                        <pre className="text-sm font-mono text-gray-300 bg-gray-900 p-4 rounded-lg overflow-x-auto">
                          {`function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.className = 'btn-primary';
  button.setAttribute('aria-label', 'Primary action');
  
  button.addEventListener('click', (event) => {
    event.preventDefault();
    handleClick();
  });
  
  return button;
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Creator */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet the Creator
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-12 border border-blue-200 dark:border-blue-800"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={girishImage}
                        alt="Girish Lade"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <span className="text-3xl font-bold text-white hidden">GL</span>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Girish Lade
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      Creator & Founder, Lade Stack
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">
                      "Empowering Developers through AI-Integrated Tools"
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                      At Lade Stack, we build powerful AI-integrated developer tools to simplify coding and creativity.
                      Our mission is to make advanced development tools accessible to everyone, from beginners to professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter/Beta Access Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Stay Updated & Get Early Access
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join our community of developers and be the first to know about new features and updates
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Newsletter
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get the latest updates and developer tips
                    </p>
                  </div>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitted}>
                      {isSubmitted ? 'Thanks for subscribing!' : 'Subscribe to Newsletter'}
                    </Button>
                  </form>
                </motion.div>

                {/* Beta Access */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Beta Access
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get early access to new features
                    </p>
                  </div>

                  <form onSubmit={handleBetaSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={betaEmail}
                      onChange={(e) => setBetaEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitted}>
                      {isSubmitted ? 'Application submitted!' : 'Join Beta Program'}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Code?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Join thousands of developers who are already enhancing their workflow with AI-powered code tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                      <a href="https://code.ladestack.in/" target="_blank" rel="noopener noreferrer">
                        Start Using CodeEnhance AI
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <Link to="/" className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LS</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    Lade Stack
                  </span>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                  Empowering developers with AI-integrated tools for modern web development.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Empowering Developers through AI-Integrated Tools"
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Connect
                </h4>
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://www.instagram.com/girish_lade_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/girish-lade-075bba201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/girishlade111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://codepen.io/Girish-Lade-the-looper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-black transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">CodePen</span>
                  </a>
                  <a
                    href="mailto:girishlade111@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  © 2025 Lade Stack. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://ladestack.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                  >
                    Built with ❤️ by LadeStack.in
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  <a
                    href="https://code.ladestack.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Try AI Tool →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AICodeViewerAI;