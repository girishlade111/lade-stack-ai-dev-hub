import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Lade Stack Blog - AI Development & Software Engineering Insights";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Insights, tutorials, and industry perspectives on AI-powered development, software engineering best practices, and the future of technology.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Insights, tutorials, and industry perspectives on AI-powered development, software engineering best practices, and the future of technology.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'AI development, software engineering, developer productivity, API design, no-code platforms, web security, DevOps, programming tutorials');
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'AI development, software engineering, developer productivity, API design, no-code platforms, web security, DevOps, programming tutorials';
      document.head.appendChild(keywordsMeta);
    }

    // Open Graph Meta Tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('og:title', 'Lade Stack Blog - AI Development & Software Engineering Insights');
    updateMetaTag('og:description', 'Insights, tutorials, and industry perspectives on AI-powered development and software engineering best practices.');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:image', `${window.location.origin}/og-blog.png`);

    // Twitter Meta Tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', 'Lade Stack Blog - AI Development & Software Engineering');
    updateTwitterMeta('twitter:description', 'Insights, tutorials, and industry perspectives on AI-powered development.');

    // JSON-LD Structured Data for Blog
    const blogStructuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Lade Stack Blog",
      "description": "Insights, tutorials, and industry perspectives on AI-powered development, software engineering best practices, and the future of technology.",
      "url": "https://ladestack.in/blog",
      "author": {
        "@type": "Person",
        "name": "Girish Lade",
        "url": "https://ladestack.in/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lade Stack",
        "url": "https://ladestack.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ladestack.in/logo.png"
        }
      },
      "datePublished": "2024-03-25",
      "dateModified": "2024-06-15",
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://ladestack.in/blog"]
        }
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(blogStructuredData);

  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development: Complete Guide 2024",
      excerpt: "Comprehensive guide to AI-powered development tools, trends, and technologies transforming software engineering in 2024. Learn how AI is reshaping coding, testing, and deployment.",
      date: "2024-06-15",
      readTime: "18 min read",
      category: "AI Innovation",
      image: "ai-development",
    },
    {
      id: 2,
      title: "10 Proven Developer Productivity Hacks: Boost Efficiency by 300%",
      excerpt: "Discover the most effective productivity strategies used by top developers at Google, Microsoft, and Amazon. Complete guide to coding efficiency, workflow optimization, and burnout prevention.",
      date: "2024-05-28",
      readTime: "25 min read",
      category: "Productivity",
      image: "developer-productivity",
    },
    {
      id: 3,
      title: "Building Scalable REST APIs: Complete Architecture Guide 2024",
      excerpt: "Master REST API architecture, design patterns, performance optimization, security best practices, and deployment strategies for production-ready APIs at scale.",
      date: "2024-05-20",
      readTime: "28 min read",
      category: "API Development",
      image: "api-architecture",
    },
    {
      id: 4,
      title: "No-Code Revolution: Build Apps Without Coding in 2024",
      excerpt: "Complete guide to no-code/low-code platforms, visual development tools, and automation workflows. Learn to build production apps, websites, and APIs without writing a single line of code.",
      date: "2024-05-15",
      readTime: "32 min read",
      category: "No-Code Development",
      image: "no-code-development",
    },
    {
      id: 5,
      title: "Web Application Security: Complete Guide to OWASP Top 10 in 2024",
      excerpt: "Master web security fundamentals, OWASP Top 10 vulnerabilities, security best practices, and advanced protection strategies for modern web applications and APIs.",
      date: "2024-05-10",
      readTime: "35 min read",
      category: "Security",
      image: "web-security",
    },
    {
      id: 6,
      title: "DevOps Best Practices 2024: Complete CI/CD & Automation Guide",
      excerpt: "Master DevOps principles, CI/CD pipelines, infrastructure automation, monitoring strategies, and cloud-native deployment patterns for modern software delivery.",
      date: "2024-05-05",
      readTime: "38 min read",
      category: "DevOps",
      image: "devops-automation",
    },
    {
      id: 7,
      title: "Machine Learning in Software Engineering: Complete Integration Guide 2024",
      excerpt: "Master ML integration in software development workflows, from predictive debugging to automated testing and intelligent code optimization. Complete guide for modern engineering teams.",
      date: "2024-08-22",
      readTime: "28 min read",
      category: "AI Innovation",
      image: "ml-software-engineering",
    },
    {
      id: 8,
      title: "Remote Developer Productivity: Master Work-From-Home Efficiency 2024",
      excerpt: "Complete guide to remote work productivity strategies, virtual collaboration tools, time management techniques, and maintaining team productivity in distributed teams.",
      date: "2024-08-15",
      readTime: "30 min read",
      category: "Productivity",
      image: "remote-productivity",
    },
    {
      id: 9,
      title: "GraphQL vs REST APIs: Modern API Architecture Decision Guide 2024",
      excerpt: "Comprehensive comparison of GraphQL and REST architectures, performance analysis, use case recommendations, and migration strategies for modern API development.",
      date: "2024-08-10",
      readTime: "26 min read",
      category: "API Development",
      image: "graphql-vs-rest",
    },
    {
      id: 10,
      title: "Advanced No-Code Business Process Automation: Enterprise Implementation 2024",
      excerpt: "Deep dive into enterprise no-code automation platforms, complex workflow design, integration patterns, and scaling strategies for large organizations.",
      date: "2024-08-05",
      readTime: "34 min read",
      category: "No-Code Development",
      image: "nocode-automation",
    },
    {
      id: 11,
      title: "Cloud Security Architecture: Multi-Cloud Protection Strategies 2024",
      excerpt: "Advanced cloud security frameworks, multi-cloud protection strategies, compliance automation, and incident response for modern cloud-native applications.",
      date: "2024-07-30",
      readTime: "32 min read",
      category: "Security",
      image: "cloud-security",
    },
    {
      id: 12,
      title: "Kubernetes at Scale: Advanced Orchestration and Auto-Scaling Strategies 2024",
      excerpt: "Master advanced Kubernetes deployment patterns, auto-scaling strategies, multi-cluster management, and production optimization for enterprise environments.",
      date: "2024-07-25",
      readTime: "36 min read",
      category: "DevOps",
      image: "kubernetes-scale",
    },
    {
      id: 13,
      title: "Computer Vision in Web Applications: Real-Time Image Processing 2024",
      excerpt: "Comprehensive guide to implementing computer vision features in web applications, real-time image processing, and AI-powered visual experiences.",
      date: "2024-09-15",
      readTime: "24 min read",
      category: "AI Innovation",
      image: "computer-vision-web",
    },
    {
      id: 14,
      title: "Developer Mental Health and Burnout Prevention: Sustainable Coding Practices 2024",
      excerpt: "Essential guide to maintaining developer mental health, preventing burnout, sustainable coding practices, and building resilient development teams.",
      date: "2024-09-10",
      readTime: "22 min read",
      category: "Productivity",
      image: "developer-wellness",
    },
    {
      id: 15,
      title: "API Rate Limiting and Throttling: Advanced Strategies for High-Traffic Applications 2024",
      excerpt: "Master advanced rate limiting strategies, intelligent throttling, API gateway optimization, and performance management for high-traffic applications.",
      date: "2024-09-05",
      readTime: "29 min read",
      category: "API Development",
      image: "api-rate-limiting",
    },
    {
      id: 16,
      title: "No-Code to Pro-Code: Hybrid Development Strategies for Modern Teams 2024",
      excerpt: "Complete guide to bridging no-code and traditional development, hybrid team strategies, and scalable business application development approaches.",
      date: "2024-09-01",
      readTime: "31 min read",
      category: "No-Code Development",
      image: "hybrid-nocode-procode",
    },
    {
      id: 17,
      title: "Zero Trust Security Architecture: Implementation Guide for Modern Organizations 2024",
      excerpt: "Master zero trust security principles, implementation strategies, network segmentation, and security automation for comprehensive protection.",
      date: "2024-08-28",
      readTime: "33 min read",
      category: "Security",
      image: "zero-trust-security",
    },
    {
      id: 18,
      title: "Observability and Monitoring: Complete Guide to Modern System Monitoring 2024",
      excerpt: "Comprehensive guide to observability platforms, distributed tracing, metrics collection, and intelligent monitoring for cloud-native applications.",
      date: "2024-08-20",
      readTime: "35 min read",
      category: "DevOps",
      image: "observability-monitoring",
    }
  ];

  const categories = [
    "All Posts",
    "AI Innovation",
    "Productivity",
    "API Development",
    "No-Code",
    "Security",
    "DevOps",
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "How artificial intelligence is transforming the way we build, test, and deploy applications in 2024 and beyond. Discover the latest trends and tools that are reshaping the development landscape.",
    date: "2024-06-15",
    readTime: "5 min read",
    category: "AI Innovation",
    image: "ai-development",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Lade Stack <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights, tutorials, and industry perspectives on AI-powered development, software engineering best practices, and the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Featured Post
              </h2>
              
              <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-large border border-border">
                <div className="md:flex">
                  <div className="md:w-2/3 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                        {featuredPost.category}
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <Link to={`/blog/${featuredPost.id}`}>
                        <Button variant="outline" className="group">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-primary flex items-center justify-center min-h-64 md:min-h-auto">
                    <div className="text-primary-foreground text-center p-6">
                      <div className="text-4xl font-bold mb-2">AI</div>
                      <div className="text-xl">Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Posts" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Latest Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-medium border border-border hover:shadow-large transition-smooth group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`/blog-covers/${post.image}.svg`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center';
                          fallback.innerHTML = `
                            <div class="text-primary-foreground text-center">
                              <div class="text-2xl font-bold mb-1">${post.image.split('-')[0]}</div>
                              <div class="text-lg capitalize">${post.image.split('-').slice(1).join(' ')}</div>
                            </div>
                          `;
                          e.currentTarget.parentNode.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                          {post.category}
                        </span>
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-10 sm:mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Stay Updated with Our Latest Insights
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                  Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    id="blog-subscription-email"
                    name="blog-subscription-email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="hero" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Link to="/contact" className="text-primary hover:underline">
                    Have suggestions for blog topics? Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;