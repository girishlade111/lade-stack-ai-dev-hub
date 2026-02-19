import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { BookOpen, Code, Zap, FileText, Shield, Users, Database, Cloud, Search, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Documentation = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [showAllChangelog, setShowAllChangelog] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // SECTION 1: Data Structure
  const docsData = {
    categories: [
      {
        id: "getting-started",
        icon: BookOpen,
        title: "Getting Started",
        description: "Learn the basics and get up and running quickly",
        articles: 12,
        guide: {
          overview: "Start your journey with Lade Stack. This guide covers everything from installation to your first deployment.",
          sections: [
            {
              title: "Installation",
              content: "Install Lade Stack via npm or yarn.\n\n`npm install lade-stack`\n\nor\n\n`yarn add lade-stack`"
            },
            {
              title: "Account Setup",
              content: "Create your account on the Lade Stack dashboard to access your API keys and project settings."
            },
            {
              title: "First Project",
              content: "Initialize your first project using the CLI:\n\n`lade init my-project`"
            }
          ]
        }
      },
      {
        id: "api-reference",
        icon: Code,
        title: "API Reference",
        description: "Complete documentation for all our APIs",
        articles: 24,
        guide: {
          overview: "Comprehensive API reference for developers.",
          sections: [
            { title: "Authentication", content: "Learn how to authenticate your requests using API keys." },
            { title: "Endpoints", content: "Explore our RESTful endpoints for managing resources." },
            { title: "Rate Limiting", content: "Understand our rate limiting policies to ensure stability." }
          ]
        }
      },
      {
        id: "integrations",
        icon: Zap,
        title: "Integrations",
        description: "Connect Lade Stack with your favorite tools",
        articles: 18,
        guide: {
          overview: "Integrate Lade Stack with third-party services.",
          sections: [
            { title: "GitHub Actions", content: "Automate your workflows with our GitHub Actions integration." },
            { title: "Slack", content: "Receive notifications and updates directly in your Slack channels." }
          ]
        }
      },
      {
        id: "tutorials",
        icon: FileText,
        title: "Tutorials",
        description: "Step-by-step guides for common tasks",
        articles: 15,
        guide: {
          overview: "Follow our step-by-step tutorials to master Lade Stack.",
          sections: [
            { title: "Building a To-Do App", content: "Create a simple to-do application to learn the basics." },
            { title: "Deploying to Production", content: "Learn how to deploy your Lade Stack application to a production environment." }
          ]
        }
      },
      {
        id: "security",
        icon: Shield,
        title: "Security",
        description: "Security best practices and compliance information",
        articles: 8,
        guide: {
          overview: "Keep your application secure with our best practices.",
          sections: [
            { title: "Data Encryption", content: "Learn how we encrypt your data at rest and in transit." },
            { title: "Access Control", content: "Manage user permissions and roles effectively." }
          ]
        }
      },
      {
        id: "team-management",
        icon: Users,
        title: "Team Management",
        description: "Collaborate with your team effectively",
        articles: 10,
        guide: {
          overview: "Manage your team and collaborate efficiently.",
          sections: [
            { title: "Inviting Members", content: "Invite new members to your organization." },
            { title: "Roles & Permissions", content: "Assign roles to control access to resources." }
          ]
        }
      },
      {
        id: "data-management",
        icon: Database,
        title: "Data Management",
        description: "Working with data in Lade Stack",
        articles: 14,
        guide: {
          overview: "Handle your data with ease using Lade Stack.",
          sections: [
            { title: "Database Schema", content: "Design your database schema using our visual editor." },
            { title: "Migrations", content: "Manage database migrations seamlessly." }
          ]
        }
      },
      {
        id: "deployment",
        icon: Cloud,
        title: "Deployment",
        description: "Deploy and manage your applications",
        articles: 11,
        guide: {
          overview: "Deploy your applications to the cloud with a single click.",
          sections: [
            { title: "CI/CD Pipelines", content: "Set up CI/CD pipelines for automated deployments." },
            { title: "Monitoring", content: "Monitor your application's performance and health." }
          ]
        }
      }
    ],
    articles: [
      {
        id: "api-test-setup",
        title: "Setting up your first API test",
        category: "API Reference",
        readTime: "5 min read",
        content: {
          intro: "Learn how to set up your first API test using Lade Stack's testing tools.",
          steps: [
            "Install the testing library.",
            "Create a test file.",
            "Write your first test case.",
            "Run the test using the CLI."
          ],
          summary: "By following these steps, you can ensure your API is working correctly."
        }
      },
      {
        id: "github-actions",
        title: "Integrating with GitHub Actions",
        category: "Integrations",
        readTime: "8 min read",
        content: {
          intro: "Automate your workflows by integrating Lade Stack with GitHub Actions.",
          steps: [
            "Create a .github/workflows directory.",
            "Add a workflow file.",
            "Configure the Lade Stack action.",
            "Push your changes to GitHub."
          ],
          summary: "Your workflows will now run automatically on every push."
        }
      },
      {
        id: "team-permissions",
        title: "Managing team permissions",
        category: "Team Management",
        readTime: "6 min read",
        content: {
          intro: "Control who has access to your project resources.",
          steps: [
            "Go to the Team Settings page.",
            "Select a member.",
            "Assign a role.",
            "Save changes."
          ],
          summary: "Effectively managing permissions ensures security and collaboration."
        }
      },
      {
        id: "security-best-practices",
        title: "Security best practices",
        category: "Security",
        readTime: "10 min read",
        content: {
          intro: "Keep your application secure by following these best practices.",
          steps: [
            "Use strong passwords.",
            "Enable 2FA.",
            "Regularly rotate API keys.",
            "Audit access logs."
          ],
          summary: "Security is a shared responsibility. Stay vigilant."
        }
      }
    ]
  };

  // Section 4: Changelog Data
  const changelog = [
    { version: "v2.4.0", date: "June 10, 2024", type: "New Feature", description: "Added AI-powered test generation for API endpoints." },
    { version: "v2.3.5", date: "May 28, 2024", type: "Improvement", description: "Enhanced performance for large dataset processing." },
    { version: "v2.3.0", date: "May 15, 2024", type: "Bug Fix", description: "Resolved issues with authentication tokens expiring prematurely." },
    { version: "v2.2.1", date: "April 20, 2024", type: "New Feature", description: "Introduced dark mode support for the dashboard." },
    { version: "v2.2.0", date: "April 05, 2024", type: "Improvement", description: "Optimized database queries for faster load times." },
    { version: "v2.1.5", date: "March 18, 2024", type: "Bug Fix", description: "Fixed an issue where user avatars were not loading." },
    { version: "v2.1.0", date: "March 01, 2024", type: "Feature", description: "Added support for multi-language localization." },
    { version: "v2.0.5", date: "February 15, 2024", type: "Optimization", description: "Reduced bundle size by 20%." },
    { version: "v2.0.1", date: "February 01, 2024", type: "Bug Fix", description: "Corrected a typo in the welcome email." },
    { version: "v2.0.0", date: "January 15, 2024", type: "Launch", description: "Official launch of Lade Stack v2.0." },
  ];

  // SECTION 1: Filter Logic
  const filteredCategories = docsData.categories.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArticles = docsData.articles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleComingSoon = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[650px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.11),_transparent_60%)]" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
        <div className="absolute bottom-0 left-[40%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_50%)]" />
      </div>
      <SEO
        title="Documentation – Guides & API Reference | Lade Stack"
        description="Comprehensive documentation for Lade Stack's developer tools. Step-by-step guides, API references, and tutorials to get started quickly."
        keywords="Lade Stack documentation, API reference, developer guides, getting started tutorial, SDK docs, integration guides, developer onboarding"
        ogTitle="Lade Stack Documentation"
        ogDescription="Guides, API references, and tutorials for Lade Stack's AI developer tools."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "name": "Lade Stack Documentation",
          "url": "https://ladestack.in/docs",
          "description": "Comprehensive documentation for Lade Stack developer tools.",
          "publisher": {
            "@type": "Organization",
            "name": "Lade Stack"
          }
        }}
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
                  <Input
                    type="text"
                    id="documentation-search"
                    name="documentation-search"
                    placeholder="Search documentation..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 sm:py-6 pl-12 rounded-lg sm:rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg shadow-sm"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
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
                  {query ? "Search Results" : "Documentation Categories"}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {query ? `Found ${filteredCategories.length} categories` : "Browse our documentation by topic to find what you need"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCategories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth group cursor-pointer relative overflow-hidden"
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
                    {/* SECTION 2: Removed fake article count, added arrow */}
                    <div className="flex items-center text-xs text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      View Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles - SECTION 3 */}
        {(query === "" || filteredArticles.length > 0) && (
          <section className="py-12 sm:py-16 bg-gradient-subtle">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                     {query ? "Matching Articles" : "Popular Articles"}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     {query ? `Found ${filteredArticles.length} articles` : "Most frequently viewed documentation articles"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {article.title}
                      </h3>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-primary hover:text-primary/80 group"
                        onClick={() => setSelectedArticle(article)}
                      >
                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Changelog - SECTION 4 */}
        {!query && (
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
                    {(showAllChangelog ? changelog : changelog.slice(0, 3)).map((item, index) => (
                      <div key={index} className="flex items-start pb-6 border-b border-border last:border-0 last:pb-0">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                          <span className="text-primary-foreground font-bold text-xs sm:text-sm">
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
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!showAllChangelog && (
                    <div className="mt-8 text-center">
                      <Button variant="outline" onClick={() => setShowAllChangelog(true)}>
                        View Full Changelog
                      </Button>
                    </div>
                  )}
                  {showAllChangelog && (
                     <div className="mt-8 text-center">
                         <Button variant="ghost" onClick={() => setShowAllChangelog(false)}>
                             Show Less
                         </Button>
                     </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* API Documentation CTA - SECTION 5 */}
        {!query && (
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
                    <Button variant="hero" size="lg" onClick={handleComingSoon}>
                      View API Documentation
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleComingSoon}>
                      Download SDKs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Category Modal - SECTION 2 */}
      <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto overscroll-contain">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                   {selectedCategory && <selectedCategory.icon className="w-6 h-6 text-primary-foreground" />}
               </div>
               <div>
                 <DialogTitle className="text-2xl">{selectedCategory?.title}</DialogTitle>
                 <DialogDescription>{selectedCategory?.description}</DialogDescription>
               </div>
            </div>
          </DialogHeader>
          <div className="space-y-6">
             <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-foreground">{selectedCategory?.guide?.overview}</p>
             </div>
             <div className="space-y-4">
                {selectedCategory?.guide?.sections.map((section: any, idx: number) => (
                    <div key={idx} className="border-l-2 border-primary pl-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{section.title}</h4>
                        <div className="text-muted-foreground whitespace-pre-wrap font-mono text-sm bg-black/20 p-3 rounded">{section.content}</div>
                    </div>
                ))}
             </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Article Modal - SECTION 3 */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto overscroll-contain">
           <DialogHeader>
             <div className="mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {selectedArticle?.category}
                </span>
             </div>
             <DialogTitle className="text-2xl mb-2">{selectedArticle?.title}</DialogTitle>
             <DialogDescription className="flex items-center gap-2">
                 <Clock className="w-4 h-4" /> {selectedArticle?.readTime}
             </DialogDescription>
           </DialogHeader>
           <div className="space-y-6 mt-4">
              <div className="text-lg text-foreground font-medium">
                  {selectedArticle?.content?.intro}
              </div>
              
              <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" /> Steps
                  </h4>
                  <div className="grid gap-3">
                      {selectedArticle?.content?.steps.map((step: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3 bg-card p-3 rounded-lg border border-border">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                              </span>
                              <span className="text-muted-foreground">{step}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 sm:p-6 mt-6">
                  <h4 className="text-lg font-bold text-foreground mb-2">Summary</h4>
                  <p className="text-muted-foreground">
                      {selectedArticle?.content?.summary}
                  </p>
              </div>
           </div>
        </DialogContent>
      </Dialog>
      
      {/* Changelog Modal - SECTION 4 (Full View) */}
      <Dialog open={showAllChangelog} onOpenChange={(open) => setShowAllChangelog(open)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto overscroll-contain">
             <DialogHeader>
                 <DialogTitle className="text-2xl">Full Changelog</DialogTitle>
                 <DialogDescription>A complete history of changes and improvements.</DialogDescription>
             </DialogHeader>
             <div className="space-y-6 mt-4">
                {changelog.map((item, index) => (
                      <div key={index} className="flex items-start pb-6 border-b border-border last:border-0 last:pb-0">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                          <span className="text-primary-foreground font-bold text-xs sm:text-sm">
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
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
             </div>
        </DialogContent>
      </Dialog>

      {/* Coming Soon Overlay - SECTION 5 */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 backdrop-blur-xl bg-white/5 flex items-center justify-center animate-in fade-in duration-300">
           <div className="text-3xl sm:text-5xl font-semibold text-foreground bg-gradient-to-br from-foreground/80 to-foreground/20 bg-clip-text text-transparent select-none">
              Coming Soon
           </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Documentation;