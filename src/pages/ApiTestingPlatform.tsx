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
import SEO from '@/components/SEO';

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
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
              ✓ 127 tests passed<br />
              ✓ 3 warnings detected<br />
              ✓ Execution time: 2.3s<br />
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
                  <div key={index} className={`flex items-center gap-2 ${result.includes('✓') ? 'text-green-400' :
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.11),_transparent_60%)]" />
        <div className="absolute top-[35%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.07),_transparent_55%)]" />
        <div className="absolute bottom-[10%] left-[40%] w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_50%)]" />
      </div>
      <SEO
        title="AI-Powered API Testing Platform | Automated API Testing & Validation Tool"
        description="Professional API testing platform with AI-powered test generation, automated validation, and real-time monitoring. Supports REST, GraphQL, WebSocket & gRPC. Free trial available."
        keywords="API testing, automated API testing, AI API testing, REST API testing, GraphQL testing, WebSocket testing, API validation, API automation, test automation, API quality assurance, developer tools, software testing, API monitoring, CI/CD integration, OpenAPI testing, API security testing"
        ogTitle="AI-Powered API Testing Platform | Automated Testing & Validation"
        ogDescription="Revolutionary AI-powered API testing platform with intelligent test generation, real-time monitoring, and automated validation. Start your free trial today."
        ogType="website"
        ogUrl={window.location.href}
        ogImage={`${window.location.origin}/api-testing-project.svg`}
        twitterTitle="AI-Powered API Testing Platform"
        twitterDescription="Automated API testing with AI. Generate tests, validate responses, monitor performance. Free trial available."
        twitterCard="summary_large_image"
        structuredData={[
          {
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
          },
          {
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
          },
          {
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
          }
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6 sm:mb-8">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Hero Content */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              {/* Minimal Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-muted border border-border mb-3 sm:mb-6">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs font-medium text-muted-foreground truncate">
                  AI-Powered Testing
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-2 sm:mb-3 lg:mb-4 leading-tight">
                API Testing{' '}
                <span className="text-muted-foreground">
                  Revolutionized
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 lg:mb-6 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Test your APIs with AI-powered intelligence. Generate test cases automatically,
                detect issues before they happen, and ensure your APIs perform flawlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-4 sm:px-0 mb-4 sm:mb-6 lg:mb-8">
                <Button
                  size="sm"
                  className="w-full sm:w-auto min-w-[140px] bg-foreground text-background hover:bg-foreground/90"
                  onClick={handleDemoClick}
                >
                  <Rocket className="w-3 h-3 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto min-w-[120px] border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  <PlayCircle className="w-3 h-3 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-muted-foreground" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-muted-foreground" />
                  <span>Setup in under 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Animated API Test Runner */}
            <div className="relative">
              <div className="bg-card border border-border rounded-lg shadow-lg">
                <AnimatedApiTestRunner />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Minimal Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Why Choose Our AI-Powered API Testing Platform?
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Transform your API testing workflow with intelligent automation and AI-driven insights for faster, more reliable API validation.
              </p>
            </div>

            {/* Values Grid - Mobile-first */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Card className="border border-border p-3 hover:bg-muted/30 transition-fast">
                <CardHeader className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                      <Brain className="w-3 h-3 text-background" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      AI Test Generation
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Automatically generate comprehensive test cases from your API specifications using advanced AI algorithms.
                  </p>
                  <div className="space-y-1">
                    {["Smart test case generation", "Boundary value testing", "Edge case detection"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border p-3 hover:bg-muted/30 transition-fast">
                <CardHeader className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-background" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Lightning Fast
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Execute thousands of tests in seconds with our optimized testing engine and parallel execution.
                  </p>
                  <div className="space-y-1">
                    {["Parallel test execution", "Sub-second response times", "Optimized test suites"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border p-3 hover:bg-muted/30 transition-fast">
                <CardHeader className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-background" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Enterprise Security
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Bank-grade security with SOC2 compliance, encrypted data, and secure test execution environments.
                  </p>
                  <div className="space-y-1">
                    {["SOC2 Type II compliant", "End-to-end encryption", "Zero data retention"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Minimal Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                How It Works
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Get started with AI-powered API testing in three simple steps.
              </p>
            </div>

            {/* Steps Grid - Mobile-first */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  number: 1,
                  title: "Import Your API",
                  description: "Upload your OpenAPI specification, import from URL, or connect directly to your API endpoints."
                },
                {
                  number: 2,
                  title: "AI Analysis",
                  description: "Our AI analyzes your API structure and automatically generates comprehensive test cases."
                },
                {
                  number: 3,
                  title: "Run & Monitor",
                  description: "Execute tests, monitor performance, and get intelligent insights to improve your API quality."
                }
              ].map((step, index) => (
                <Card key={index} className="border border-border p-3 text-center hover:bg-muted/30 transition-fast">
                  <CardContent className="p-0">
                    <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-background">{step.number}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Demo */}
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Minimal Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Try It Yourself
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Experience the power of AI-driven API testing with our interactive sandbox.
              </p>
            </div>

            <InteractiveSandbox />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Minimal Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Comprehensive Features
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Everything you need to test, monitor, and optimize your APIs.
              </p>
            </div>

            {/* Features Grid - Mobile-first */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  icon: TestTube,
                  title: "Smart Test Generation",
                  description: "AI-powered test case generation from API specifications"
                },
                {
                  icon: Activity,
                  title: "Real-time Monitoring",
                  description: "Continuous monitoring of API performance and health"
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Detailed insights and performance metrics"
                },
                {
                  icon: GitBranch,
                  title: "CI/CD Integration",
                  description: "Seamless integration with your development pipeline"
                },
                {
                  icon: Server,
                  title: "Mock Server",
                  description: "Automatic mock server generation for testing"
                },
                {
                  icon: Bug,
                  title: "Issue Detection",
                  description: "Intelligent detection of potential issues"
                },
                {
                  icon: ShieldCheck,
                  title: "Security Testing",
                  description: "Automated security vulnerability scanning"
                },
                {
                  icon: Globe,
                  title: "Multi-Protocol",
                  description: "Support for REST, GraphQL, WebSocket, and gRPC"
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Share tests and collaborate with your team"
                }
              ].map((feature, index) => (
                <Card key={index} className="border border-border p-3 hover:bg-muted/30 transition-fast">
                  <CardHeader className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-3 h-3 text-background" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your needs. Start free, scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="bg-card border-border relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-foreground text-xl">Free</CardTitle>
                  <div className="text-4xl font-bold text-foreground my-4">$0</div>
                  <CardDescription className="text-muted-foreground">Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Up to 100 API tests/month
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Basic AI test generation
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      1 project
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Community support
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSignupClick('free')}
                  >
                    Start Free
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="bg-card border-primary/50 relative transform scale-105 ring-1 ring-primary/20">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-foreground text-xl">Pro</CardTitle>
                  <div className="text-4xl font-bold text-foreground my-4">$29</div>
                  <CardDescription className="text-muted-foreground">For growing teams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Unlimited API tests
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Advanced AI features
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      CI/CD integration
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSignupClick('pro')}
                  >
                    Get Pro
                  </Button>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="bg-card border-border relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-foreground text-xl">Team</CardTitle>
                  <div className="text-4xl font-bold text-foreground my-4">$99</div>
                  <CardDescription className="text-muted-foreground">For large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Everything in Pro
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      SSO integration
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Dedicated support
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90"
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
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