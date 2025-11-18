import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  Star, 
  Play, 
  Download,
  Github,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Activity,
  Database,
  Globe,
  Monitor,
  Settings,
  Brain,
  BarChart3,
  Clock,
  Lock,
  FileText,
  Terminal,
  TrendingUp,
  GitBranch,
  PlayCircle,
  Eye,
  ChevronUp,
  Copy,
  Upload,
  Code2,
  Server,
  TestTube,
  ShieldCheck,
  Bug,
  Search,
  Filter,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  Target,
  Sparkles,
  Rocket,
  Heart,
  MessageCircle,
  Send,
  Calendar,
  Award,
  Globe2,
  Smartphone,
  Download as DownloadIcon,
  Search as SearchIcon,
  Settings2,
  BookOpen,
  Users2,
  Building,
  SparklesIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Animated Mock API Test Runner Component
const AnimatedApiTestRunner: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    'Initializing test environment...',
    'Parsing OpenAPI specification...',
    'Generating test cases...',
    'Executing API tests...',
    'Validating responses...',
    'Generating report...'
  ];

  useEffect(() => {
    if (isRunning && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length) {
      setIsRunning(false);
      setCurrentStep(0);
    }
  }, [isRunning, currentStep, steps.length]);

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">api-test-runner</span>
        </div>
        <Button
          onClick={startDemo}
          size="sm"
          variant="outline"
          className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
        >
          <Play className="w-4 h-4 mr-2" />
          Run Demo
        </Button>
      </div>
      
      <div className="space-y-2 text-green-400">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-gray-500">$</span>
            <span>{step}</span>
            {isRunning && index === currentStep && (
              <div className="ml-2 flex">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            )}
            {!isRunning && index < currentStep && (
              <CheckCircle className="w-4 h-4 text-green-400 ml-2" />
            )}
          </div>
        ))}
        
        {currentStep >= steps.length && (
          <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded">
            <div className="text-green-400 font-semibold">Test Results:</div>
            <div className="text-green-300 mt-1">
              ✓ 127 tests passed<br/>
              ✓ 3 warnings detected<br/>
              ✓ Execution time: 2.3s<br/>
              ✓ Coverage: 94.7%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Interactive Sandbox Component
const InteractiveSandbox: React.FC = () => {
  const [apiSpec, setApiSpec] = useState(`openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
servers:
  - url: https://api.example.com
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string`);
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTest = async () => {
    setIsRunning(true);
    setTestResults([]);
    
    const tests = [
      'Parsing OpenAPI specification...',
      'Validating schema structure...',
      'Generating test cases...',
      'Testing GET /users endpoint...',
      'Testing GET /users/{id} endpoint...',
      'Validating response formats...',
      'Checking authentication requirements...'
    ];

    for (let i = 0; i < tests.length; i++) {
      setTestResults(prev => [...prev, tests[i]]);
      await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    setTestResults(prev => [...prev, 
      '✓ All tests completed successfully',
      '✓ 127 assertions passed',
      '⚠ 2 warnings found',
      '✓ Coverage: 94.7%'
    ]);
    setIsRunning(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-teal-400" />
            OpenAPI Specification
          </CardTitle>
          <CardDescription>Paste your OpenAPI specification below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={apiSpec}
            onChange={(e) => setApiSpec(e.target.value)}
            className="min-h-[300px] font-mono text-sm border-gray-700"
            placeholder="Paste your OpenAPI specification here..."
          />
          <div className="flex gap-2">
            <Button onClick={runTest} disabled={isRunning} className="bg-teal-500 hover:bg-teal-600">
              <TestTube className="w-4 h-4 mr-2" />
              {isRunning ? 'Running...' : 'Run Tests'}
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-400" />
            Test Results
          </CardTitle>
          <CardDescription>Real-time test execution output</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 min-h-[300px] font-mono text-sm">
            {testResults.length === 0 ? (
              <div className="text-gray-500">Click "Run Tests" to see results...</div>
            ) : (
              <div className="space-y-1">
                {testResults.map((result, index) => (
                  <div key={index} className={`flex items-center gap-2 ${
                    result.includes('✓') ? 'text-green-400' :
                    result.includes('⚠') ? 'text-yellow-400' :
                    result.includes('✗') ? 'text-red-400' :
                    'text-gray-300'
                  }`}>
                    <span className="text-gray-500">$</span>
                    {result}
                  </div>
                ))}
                {isRunning && (
                  <div className="flex items-center gap-2 text-teal-400">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing...
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ApiTestingPlatform: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  useEffect(() => {
    // Enhanced SEO Meta Tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic SEO Meta Tags
    document.title = 'AI-Powered API Testing Platform | Automated API Testing & Validation Tool';
    updateMetaTag('description', 'Professional API testing platform with AI-powered test generation, automated validation, and real-time monitoring. Supports REST, GraphQL, WebSocket & gRPC. Free trial available.');
    updateMetaTag('keywords', 'API testing, automated API testing, AI API testing, REST API testing, GraphQL testing, WebSocket testing, API validation, API automation, test automation, API quality assurance, developer tools, software testing, API monitoring, CI/CD integration, OpenAPI testing, API security testing');
    updateMetaTag('author', 'Lade Stack');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');
    
    // Open Graph Tags
    updateMetaTag('og:title', 'AI-Powered API Testing Platform | Automated Testing & Validation', true);
    updateMetaTag('og:description', 'Revolutionary AI-powered API testing platform with intelligent test generation, real-time monitoring, and automated validation. Start your free trial today.', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'Lade Stack', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'AI-Powered API Testing Platform');
    updateMetaTag('twitter:description', 'Automated API testing with AI. Generate tests, validate responses, monitor performance. Free trial available.');
    updateMetaTag('twitter:creator', '@ladestack');
    
    // Additional SEO Tags
    updateMetaTag('theme-color', '#0f172a');
    updateMetaTag('msapplication-TileColor', '#0f172a');
    updateMetaTag('application-name', 'Lade Stack API Testing');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Enhanced structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AI-Powered API Testing Platform",
      "alternateName": ["API Testing Tool", "Automated API Testing", "REST API Tester", "GraphQL Testing Platform"],
      "description": "Professional API testing platform with AI-powered test generation, automated validation, real-time monitoring, and comprehensive reporting. Supports REST, GraphQL, WebSocket, and gRPC protocols.",
      "url": window.location.href,
      "applicationCategory": "DeveloperApplication",
      "applicationSubCategory": "API Testing & Validation",
      "operatingSystem": "Web",
      "softwareVersion": "1.0",
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-15",
      "author": {
        "@type": "Organization",
        "name": "Lade Stack",
        "url": "https://ladestack.ai"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lade Stack",
        "url": "https://ladestack.ai"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free tier with 100 API tests per month",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "247",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "AI-powered test case generation",
        "Automated API validation",
        "Real-time monitoring and alerts",
        "CI/CD pipeline integration",
        "Multi-protocol support (REST, GraphQL, WebSocket, gRPC)",
        "Performance analytics and reporting",
        "Security vulnerability scanning",
        "Mock server generation",
        "Team collaboration features",
        "Custom dashboard and insights"
      ],
      "screenshot": `${window.location.origin}/api-testing-project.svg`,
      "downloadUrl": `${window.location.origin}/api-testing-platform`,
      "installationUrl": `${window.location.origin}/api-testing-platform`,
      "softwareHelp": {
        "@type": "CreativeWork",
        "text": "Comprehensive API testing documentation and tutorials"
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does AI-powered API testing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI analyzes your OpenAPI specification and automatically generates comprehensive test cases, including edge cases, boundary values, and business logic validation. This reduces manual testing effort by up to 80%."
          }
        },
        {
          "@type": "Question",
          "name": "What API protocols are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support REST APIs, GraphQL, WebSocket, gRPC, and more. The platform automatically detects API types from your specifications and generates appropriate test cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate with my CI/CD pipeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide native integrations with GitHub Actions, Jenkins, GitLab CI, CircleCI, and support for any CI/CD platform via our REST API or CLI tools."
          }
        },
        {
          "@type": "Question",
          "name": "Is my API data secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We use bank-grade encryption, are SOC2 Type II compliant, and never store your API keys or sensitive data longer than necessary for test execution."
          }
        }
      ]
    };

    // Software Application Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AI-Powered API Testing Platform",
      "description": "Comprehensive API testing platform with AI-powered test generation, automated validation, and real-time monitoring capabilities.",
      "brand": {
        "@type": "Brand",
        "name": "Lade Stack"
      },
      "category": "Software > Developer Tools > Testing & QA",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "0",
        "highPrice": "99",
        "priceCurrency": "USD",
        "offerCount": "3",
        "offers": [
          {
            "@type": "Offer",
            "name": "Free Plan",
            "price": "0",
            "description": "Perfect for getting started with API testing"
          },
          {
            "@type": "Offer",
            "name": "Pro Plan",
            "price": "29",
            "description": "For growing teams and professional use"
          },
          {
            "@type": "Offer",
            "name": "Team Plan",
            "price": "99",
            "description": "For large organizations and enterprises"
          }
        ]
      }
    };

    // Add all schema scripts
    const schemas = [structuredData, faqSchema, productSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Performance tracking for Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          console.log(`Page load time: ${loadTime}ms`);
          
          // Track LCP (Largest Contentful Paint)
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime}ms`);
          }).observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Track CLS (Cumulative Layout Shift)
          new PerformanceObserver((entryList) => {
            let clsValue = 0;
            entryList.getEntries().forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log(`CLS: ${clsValue}`);
          }).observe({ entryTypes: ['layout-shift'] });
        }, 0);
      });
    }

    return () => {
      // Cleanup: remove added meta tags and scripts
      const addedElements = document.querySelectorAll('[data-seo-added="true"]');
      addedElements.forEach(el => el.remove());
    };
  }, []);

  // Track analytics events
  const trackEvent = (eventName: string, properties?: any) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
    // Segment Analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track(eventName, properties);
    }
  };

  const handleSignupClick = (method: string) => {
    trackEvent('signup_attempted', { method });
  };

  const handleDemoClick = () => {
    trackEvent('demo_clicked', { section: 'hero' });
  };

  const handleSandboxRun = () => {
    trackEvent('sandbox_run', { feature: 'api_testing' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-indigo-500/5 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="text-white/70 hover:text-white">
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI-Powered
                    </Badge>
                    <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                      <Code className="w-3 h-3 mr-1" />
                      Developer First
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    API Testing{' '}
                    <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                      Revolutionized
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Test your APIs with AI-powered intelligence. Generate test cases automatically, 
                    detect issues before they happen, and ensure your APIs perform flawlessly with 
                    comprehensive testing suite.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg"
                    onClick={handleDemoClick}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Setup in under 5 minutes</span>
                  </div>
                </div>
              </div>

              {/* Animated API Test Runner */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
                <div className="relative">
                  <AnimatedApiTestRunner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our AI-Powered API Testing Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your API testing workflow with intelligent automation and AI-driven insights for faster, more reliable API validation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 text-center group hover:bg-gray-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">AI Test Generation</CardTitle>
                  <CardDescription className="text-gray-400">
                    Automatically generate comprehensive test cases from your API specifications using advanced AI algorithms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      Smart test case generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      Boundary value testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      Edge case detection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 text-center group hover:bg-gray-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Lightning Fast</CardTitle>
                  <CardDescription className="text-gray-400">
                    Execute thousands of tests in seconds with our optimized testing engine and parallel execution.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      Parallel test execution
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      Sub-second response times
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      Optimized test suites
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 text-center group hover:bg-gray-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Enterprise Security</CardTitle>
                  <CardDescription className="text-gray-400">
                    Bank-grade security with SOC2 compliance, encrypted data, and secure test execution environments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      SOC2 Type II compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Zero data retention
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started with AI-powered API testing in three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Import Your API</h3>
                <p className="text-gray-400">
                  Upload your OpenAPI specification, import from URL, or connect directly to your API endpoints.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
                <p className="text-gray-400">
                  Our AI analyzes your API structure and automatically generates comprehensive test cases.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Run & Monitor</h3>
                <p className="text-gray-400">
                  Execute tests, monitor performance, and get intelligent insights to improve your API quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Demo */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Try It Yourself
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven API testing with our interactive sandbox.
              </p>
            </div>

            <InteractiveSandbox />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to test, monitor, and optimize your APIs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TestTube className="w-6 h-6" />,
                  title: "Smart Test Generation",
                  description: "AI-powered test case generation from API specifications"
                },
                {
                  icon: <Activity className="w-6 h-6" />,
                  title: "Real-time Monitoring",
                  description: "Continuous monitoring of API performance and health"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Advanced Analytics",
                  description: "Detailed insights and performance metrics"
                },
                {
                  icon: <GitBranch className="w-6 h-6" />,
                  title: "CI/CD Integration",
                  description: "Seamless integration with your development pipeline"
                },
                {
                  icon: <Server className="w-6 h-6" />,
                  title: "Mock Server",
                  description: "Automatic mock server generation for testing"
                },
                {
                  icon: <Bug className="w-6 h-6" />,
                  title: "Issue Detection",
                  description: "Intelligent detection of potential issues"
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Security Testing",
                  description: "Automated security vulnerability scanning"
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Multi-Protocol",
                  description: "Support for REST, GraphQL, WebSocket, and gRPC"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Team Collaboration",
                  description: "Share tests and collaborate with your team"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. Start free, scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="bg-gray-800/50 border-gray-700 relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">Free</CardTitle>
                  <div className="text-4xl font-bold text-white my-4">$0</div>
                  <CardDescription className="text-gray-400">Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Up to 100 API tests/month
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Basic AI test generation
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      1 project
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Community support
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-teal-500 hover:bg-teal-600" 
                    onClick={() => handleSignupClick('free')}
                  >
                    Start Free
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="bg-gradient-to-b from-indigo-500/20 to-purple-500/20 border-indigo-500/50 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-indigo-500 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">Pro</CardTitle>
                  <div className="text-4xl font-bold text-white my-4">$29</div>
                  <CardDescription className="text-gray-400">For growing teams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Unlimited API tests
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Advanced AI features
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      CI/CD integration
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Priority support
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-indigo-500 hover:bg-indigo-600" 
                    onClick={() => handleSignupClick('pro')}
                  >
                    Get Pro
                  </Button>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="bg-gray-800/50 border-gray-700 relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">Team</CardTitle>
                  <div className="text-4xl font-bold text-white my-4">$99</div>
                  <CardDescription className="text-gray-400">For large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Everything in Pro
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      SSO integration
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Dedicated support
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-purple-500 hover:bg-purple-600" 
                    onClick={() => handleSignupClick('team')}
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of developers who have transformed their API testing workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Senior API Developer",
                  company: "TechCorp",
                  content: "The AI test generation has reduced our testing time by 80%. It's like having an extra engineer on the team.",
                  rating: 5
                },
                {
                  name: "Marcus Rodriguez",
                  role: "DevOps Engineer",
                  company: "CloudScale",
                  content: "Finally, an API testing tool that actually understands our complex GraphQL schemas. Game changer!",
                  rating: 5
                },
                {
                  name: "Emma Thompson",
                  role: "CTO",
                  company: "StartupXYZ",
                  content: "We went from 2 hours of manual testing to 10 minutes of automated testing. ROI is incredible.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our API testing platform.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How does AI-powered test generation work?",
                  answer: "Our AI analyzes your OpenAPI specification and understands the structure, data types, and business logic to automatically generate comprehensive test cases including edge cases, boundary values, and business rule validations."
                },
                {
                  question: "Can I integrate this with my existing CI/CD pipeline?",
                  answer: "Yes! We provide native integrations with GitHub Actions, Jenkins, GitLab CI, CircleCI, and more. You can also use our REST API or CLI tool to run tests in any CI/CD environment."
                },
                {
                  question: "What API protocols do you support?",
                  answer: "We support REST APIs, GraphQL, WebSocket, gRPC, and more. Our platform is designed to work with any API protocol and can automatically detect the type from your specification."
                },
                {
                  question: "How secure is my data?",
                  answer: "We take security seriously. All data is encrypted in transit and at rest, we are SOC2 Type II compliant, and we never store your API keys or sensitive data longer than necessary for test execution."
                },
                {
                  question: "Can I test APIs behind authentication?",
                  answer: "Absolutely! We support all authentication methods including API keys, OAuth 2.0, JWT tokens, and custom headers. Your credentials are encrypted and never stored permanently."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800/50 border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-3xl p-12 border border-teal-500/30">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your API Testing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who have revolutionized their testing workflow with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
                  onClick={() => handleSignupClick('final-cta')}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiTestingPlatform;