import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Clock,
  Download,
  Lock,
  Zap,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Upload,
  ChevronDown,
  CheckCircle,
  Eye,
  Users,
  Star,
  Play,
  ChevronRight,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Mail,
  Server,
  HardDrive,
  Wifi,
  Key,
  Sparkles,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const FileSharingPlatform = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [uploadProgress, setUploadProgress] = useState(0);

  // Animate upload progress in demo
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Animate steps sequentially
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSteps(new Set([0]));
      setTimeout(() => setVisibleSteps(new Set([0, 1])), 200);
      setTimeout(() => setVisibleSteps(new Set([0, 1, 2])), 400);
      setTimeout(() => setVisibleSteps(new Set([0, 1, 2, 3])), 600);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const faqItems = [
    {
      question: "Is my file safe and secure?",
      answer: "Yes! Every file is encrypted with AES-256 encryption, stored on secure servers, and automatically deleted after the expiration time you set. We never access your files and implement zero-knowledge architecture."
    },
    {
      question: "How long can a file be stored?",
      answer: "You can set custom expiration times from 1 minute to 90 days. After the expiration time, the file is automatically and permanently deleted from our servers."
    },
    {
      question: "What file types are supported?",
      answer: "We support all file types including documents, images, videos, audio files, archives, and more. Maximum file size is 10GB for free users and 100GB for premium users."
    },
    {
      question: "Can I delete my file manually?",
      answer: "Yes, you can delete files manually before their expiration time. You'll receive a management link after upload that allows you to view, download, or delete your files anytime."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, our service is completely anonymous for basic use. However, registered users get additional features like file management dashboard, upload history, and extended storage limits."
    },
    {
      question: "How fast is the upload and download?",
      answer: "Upload speeds depend on your internet connection. We use global CDN for downloads, ensuring fast speeds worldwide. Most files are available for download within seconds of upload completion."
    }
  ];

  const features = [
    {
      icon: Lock,
      title: "Password-Protected Sharing",
      description: "Add an extra layer of security with custom passwords for your shared files.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Custom Expiry Time",
      description: "Set expiration from 1 minute to 90 days, then auto-delete for privacy.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant File Upload",
      description: "Lightning-fast upload with global CDN and intelligent compression.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "All File Types Supported",
      description: "Upload any file type - documents, images, videos, archives, and more.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Download Tracking",
      description: "Track how many times your file was downloaded and when.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Encrypted Storage",
      description: "Bank-level encryption ensures your files are always secure.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const fileTypes = [
    { icon: FileText, name: "Documents", formats: "PDF, DOC, TXT, RTF", progress: 95 },
    { icon: Image, name: "Images", formats: "JPG, PNG, GIF, SVG, WEBP", progress: 88 },
    { icon: Video, name: "Videos", formats: "MP4, AVI, MOV, WEBM, MKV", progress: 92 },
    { icon: Music, name: "Audio", formats: "MP3, WAV, AAC, FLAC, OGG", progress: 85 },
    { icon: Archive, name: "Archives", formats: "ZIP, RAR, 7Z, TAR, GZ", progress: 90 },
    { icon: Smartphone, name: "Apps", formats: "APK, IPA, EXE, DMG", progress: 87 }
  ];

  const stats = [
    { value: "1M+", label: "Files Shared Securely", icon: FileText },
    { value: "99.9%", label: "Uptime Guaranteed", icon: Shield },
    { value: "< 30sec", label: "Average Upload Time", icon: Zap },
    { value: "256-bit", label: "Encryption Standard", icon: Lock }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Upload Your File",
      description: "Drag and drop or click to select any file type up to 10GB.",
      icon: Upload,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Set Security Options",
      description: "Choose expiration time and add password protection if needed.",
      icon: Key,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Generate Secure Link",
      description: "Get your encrypted, time-limited shareable link instantly.",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Share & Track",
      description: "Share the link and track downloads until automatic deletion.",
      icon: Download,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Animated Background with Particles */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link to="/projects">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                  </Link>
                </Button>
              </div>

              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  🚀 Introducing LadeShare
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Secure, Fast, and{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Temporary File Sharing
                  </span>
                  — Your Privacy Matters
                </h1>
                <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                  Upload any file, protect it with a password, and set it to expire automatically. 
                  Experience enterprise-grade security with consumer-friendly simplicity.
                </p>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                  No sign-up. No tracking. Just simple, temporary file sharing.
                </p>
                
                {/* Enhanced CTA Buttons with Hover Effects */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Auto-deletion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>No Registration Required</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Hero Visual with Animated Upload Progress */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
                  
                  {/* Demo Interface */}
                  <div className="relative bg-white/90 dark:bg-gray-900/90 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    {/* Demo Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Server className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">LadeShare Demo</h3>
                          <p className="text-xs text-muted-foreground">Secure File Sharing Platform</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        Live Demo
                      </Badge>
                    </div>

                    {/* Demo Content with Enhanced Animation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Upload Preview with Progress */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Upload className="w-5 h-5 text-blue-500" />
                          <span className="font-medium text-foreground">Upload Process</span>
                        </div>
                        
                        <div className="space-y-3">
                          {[
                            { file: "project-presentation.pptx", size: "24.5 MB", status: "uploaded", icon: FileText, progress: 100 },
                            { file: "design-mockup.fig", size: "156.2 MB", status: "processing", icon: Image, progress: uploadProgress },
                            { file: "video-demo.mp4", size: "2.1 GB", status: "completed", icon: Video, progress: 100 }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">{item.file}</p>
                                <p className="text-xs text-muted-foreground">{item.size}</p>
                                {item.status === "processing" && (
                                  <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                                    <div 
                                      className="bg-blue-500 h-1 rounded-full transition-all duration-300" 
                                      style={{ width: `${item.progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {item.status === "completed" && (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                )}
                                {item.status === "processing" && (
                                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                )}
                                {item.status === "uploaded" && (
                                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Security Features */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span className="font-medium text-foreground">Security Features</span>
                        </div>
                        
                        <div className="space-y-3">
                          {[
                            { feature: "AES-256 Encryption", status: "active", icon: Lock },
                            { feature: "Auto Expiry (24h)", status: "active", icon: Clock },
                            { feature: "Password Protection", status: "optional", icon: Key },
                            { feature: "Download Tracking", status: "active", icon: Eye }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                item.status === "active" 
                                  ? "bg-green-100 dark:bg-green-900/20" 
                                  : "bg-gray-100 dark:bg-gray-700"
                              }`}>
                                <item.icon className={`w-4 h-4 ${
                                  item.status === "active" 
                                    ? "text-green-600" 
                                    : "text-gray-400"
                                }`} />
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-medium ${
                                  item.status === "active" 
                                    ? "text-foreground" 
                                    : "text-muted-foreground"
                                }`}>
                                  {item.feature}
                                </p>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${
                                  item.status === "active"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                                }`}
                              >
                                {item.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Demo Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1">
                          <HardDrive className="w-4 h-4 mr-2" />
                          Generate Secure Link
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Wifi className="w-4 h-4 mr-2" />
                          Test Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-60" />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500 rounded-full animate-ping opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Powerful Features for{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Secure File Sharing
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to share files securely, with enterprise-grade features 
                  and consumer-friendly simplicity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                    {/* Soft Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Security Link */}
              <div className="text-center mt-8">
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  <Shield className="w-4 h-4 mr-2" />
                  Learn more about security
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced How It Works Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  How It{' '}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Works
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Simple, secure, and fast file sharing in just four steps
                </p>
              </div>

              <div className="relative">
                {/* Curved Timeline Lines */}
                <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                  <svg viewBox="0 0 800 100" className="w-full h-24">
                    <path
                      d="M 0 50 Q 200 10 400 50 T 800 50"
                      stroke="url(#timelineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="opacity-30"
                    />
                    <defs>
                      <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((item, index) => (
                    <div key={index} className="relative">
                      <Card className="text-center p-6 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                          visibleSteps.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-sm font-bold text-muted-foreground mb-2">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Try Demo CTA */}
              <div className="text-center mt-12">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced File Types Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Support for{' '}
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    All File Types
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Upload and share any file type with confidence. Our platform handles everything from small documents to large video files.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {fileTypes.map((type, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {type.formats}
                    </p>
                    {/* Progress Indicator */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${type.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{type.progress}% optimized</p>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Maximum file size: 10GB • No daily upload limits
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Wave Divider */}
          <div className="mt-16 relative">
            <svg viewBox="0 0 1200 120" className="w-full h-16 opacity-30">
              <path
                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* Enhanced Security & Privacy Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Your Privacy is{' '}
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      Our Priority
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Every file is securely encrypted and automatically deleted after expiry — 
                    ensuring total control over your data.
                  </p>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8 italic">
                    We value your data privacy — every file is encrypted, temporary, and yours alone.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "256-bit AES Encryption",
                        description: "Bank-level encryption protects your files both in transit and at rest."
                      },
                      {
                        icon: Clock,
                        title: "Automatic Expiration",
                        description: "Files are automatically and permanently deleted after your set time."
                      },
                      {
                        icon: Eye,
                        title: "Zero-Knowledge Architecture",
                        description: "We can't access your files - only you and people you share with can."
                      },
                      {
                        icon: Globe,
                        title: "Global CDN Distribution",
                        description: "Fast, secure delivery worldwide with enterprise-grade infrastructure."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  {/* Glassmorphism Card */}
                  <Card className="p-8 border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Security Certifications
                      </h3>
                      <p className="text-muted-foreground">
                        Trusted by enterprises worldwide
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        "SOC 2 Type II Certified",
                        "GDPR Compliant",
                        "ISO 27001 Certified",
                        "99.9% Uptime SLA"
                      ].map((cert, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Frequently Asked{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about secure file sharing
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index} className="border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 animate-in fade-in-50 slide-in-from-top-2 duration-300">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  </Card>
                ))}
              </div>

              {/* Contact Support CTA */}
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Didn't find your answer?</p>
                <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Contact support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          {/* Enhanced Background Animation */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={`shape-${i}`}
                className="absolute w-4 h-4 bg-white/10 rounded-lg animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-3xl animate-bounce">🔒</span>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold">
                  ISO 27001 Certified
                </Badge>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Share Files{' '}
                <span className="text-yellow-300 relative">
                  Securely
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse" />
                </span>
                ?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join millions of users who trust LadeShare for secure, temporary file sharing.
                No registration required - start sharing in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-10 py-6 bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Watch Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Contact Sales
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100 text-sm">
                {[
                  { icon: CheckCircle, text: "100% Free" },
                  { icon: CheckCircle, text: "No Registration" },
                  { icon: CheckCircle, text: "Instant Setup" },
                  { icon: CheckCircle, text: "Enterprise Security" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 bg-white/10 rounded-full py-3 px-4 backdrop-blur-sm">
                    <item.icon className="w-4 h-4 text-green-300" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FileSharingPlatform;