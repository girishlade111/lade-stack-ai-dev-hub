import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "../data/blogPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const categories = [
  "All",
  "AI Development",
  "Generative AI",
  "SaaS Architecture",
  "Backend as a Service",
  "API Design & Scaling",
  "Cloud Computing",
  "Virtual Machines",
  "DevOps & CI/CD",
  "Security in Web Apps",
  "AI Production Systems"
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.11),_transparent_60%)]" />
        <div className="absolute top-[50%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_55%)]" />
      </div>
      <SEO
        title="Blog – AI Development Insights & Tutorials | Lade Stack"
        description="Explore the latest insights, tutorials, and trends in AI software development, API testing, and developer productivity from the Lade Stack team."
        keywords="AI development blog, software engineering trends, API testing tutorials, developer productivity tips, coding best practices, web development guides"
        ogTitle="Lade Stack Blog – AI Development Insights"
        ogDescription="Expert tutorials, guides, and insights on AI-powered development, API testing, and modern software engineering."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Lade Stack Blog",
          "url": "https://ladestack.in/blog",
          "description": "AI development insights, tutorials, and engineering best practices.",
          "publisher": {
            "@type": "Organization",
            "name": "Lade Stack",
            "url": "https://ladestack.in"
          }
        }}
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 sm:py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Insights for the Modern Developer
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Discover the latest trends, tutorials, and best practices in AI-powered software development.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <select
                    className="w-full sm:w-auto pl-10 pr-8 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {visiblePosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {visiblePosts.map((post) => (
                      <div
                        key={post.id}
                        className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
                      >
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                          <img
                            src={`/blog-covers/${post.image}.svg`}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                            }}
                          />
                          <div className="absolute bottom-4 left-4 z-20">
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5" asChild>
                            <Link to={`/blog/${post.slug}`}>
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              isActive={currentPage === page}
                              onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button>Subscribe</Button>
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