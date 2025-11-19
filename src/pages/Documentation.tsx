import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { BookOpen, Code, Zap, FileText, Shield, Users, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Documentation = () => {
  const documentationCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      articles: 12,
      link: "#"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete documentation for all our APIs",
      articles: 24,
      link: "#"
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Connect Lade Stack with your favorite tools",
      articles: 18,
      link: "#"
    },
    {
      icon: FileText,
      title: "Tutorials",
      description: "Step-by-step guides for common tasks",
      articles: 15,
      link: "#"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security best practices and compliance information",
      articles: 8,
      link: "#"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborate with your team effectively",
      articles: 10,
      link: "#"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Working with data in Lade Stack",
      articles: 14,
      link: "#"
    },
    {
      icon: Cloud,
      title: "Deployment",
      description: "Deploy and manage your applications",
      articles: 11,
      link: "#"
    }
  ];

  const popularArticles = [
    {
      title: "Setting up your first API test",
      category: "API Reference",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "Integrating with GitHub Actions",
      category: "Integrations",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Managing team permissions",
      category: "Team Management",
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "Security best practices",
      category: "Security",
      readTime: "10 min read",
      link: "#"
    }
  ];

  const changelogItems = [
    {
      version: "v2.4.0",
      date: "June 10, 2024",
      type: "New Features",
      description: "Added AI-powered test generation for API endpoints"
    },
    {
      version: "v2.3.5",
      date: "May 28, 2024",
      type: "Improvements",
      description: "Enhanced performance for large dataset processing"
    },
    {
      version: "v2.3.0",
      date: "May 15, 2024",
      type: "Bug Fixes",
      description: "Resolved issues with authentication tokens expiring prematurely"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Documentation - Lade Stack"
        description="Comprehensive guides, API references, and tutorials to help you make the most of Lade Stack's powerful development tools."
        keywords="documentation, API reference, tutorials, developer guides, Lade Stack docs, software development tools"
      />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Documentation</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive guides, API references, and tutorials to help you make the most of Lade Stack's powerful development tools.
              </p>

              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    id="documentation-search"
                    name="documentation-search"
                    placeholder="Search documentation..."
                    className="w-full px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" aria-label="Search documentation">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Documentation Categories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Browse our documentation by topic to find what you need
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {documentationCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <div className="text-xs text-primary">
                      {category.articles} articles
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-12 sm:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Popular Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Most frequently viewed documentation articles
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {article.title}
                    </h3>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read Article →
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  What's New
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Recent updates and improvements to our platform
                </p>
              </div>

              <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
                <div className="space-y-6">
                  {changelogItems.map((item, index) => (
                    <div key={index} className="flex items-start pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                        <span className="text-primary-foreground font-bold text-sm">
                          {item.version}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-foreground font-medium">
                            {item.type}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline">
                    View Full Changelog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation CTA */}
        <section className="py-12 sm:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Developer API Reference
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Access our complete API documentation with interactive examples,
                  code samples, and detailed endpoint descriptions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" size="lg">
                    View API Documentation
                  </Button>
                  <Button variant="outline" size="lg">
                    Download SDKs
                  </Button>
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

export default Documentation;