import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const FileSharingPlatform = lazy(() => import("./pages/FileSharingPlatform"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Support = lazy(() => import("./pages/Support"));
const Documentation = lazy(() => import("./pages/Documentation"));
const AICodeViewerAI = lazy(() => import("./pages/AICodeViewerAI"));

// Lade Stack Brand Loader Component
const LadeStackBrandLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center space-y-8">
        {/* Main Brand Animation */}
        <div className="relative">
          {/* Animated Brand Text */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-2">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>LADE</span>
              <span className="inline-block animate-fade-in-up mx-3" style={{ animationDelay: '0.4s' }}>•</span>
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>STACK</span>
            </div>
            
            {/* Animated underline */}
            <div className="relative h-0.5 w-64 mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-white transform -translate-x-full animate-slide-in-right"></div>
              <div className="absolute inset-0 bg-white animate-slide-out-left" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Subtle geometric element */}
          <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-white/30 animate-spin-slow">
            <div className="w-full h-full border border-white/20 animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className="text-white/70 text-sm font-medium animate-pulse">Initializing Lade Stack...</p>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced loading fallback with fade-out capability
const PageLoader = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  
  React.useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  
  if (!isVisible) return null;
  
  return <LadeStackBrandLoader />;
};

// Scroll to top component with smooth scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ladestack-theme">
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/file-sharing-platform" element={<FileSharingPlatform />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/support" element={<Support />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/ai-code-viewer-ai" element={<AICodeViewerAI />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;