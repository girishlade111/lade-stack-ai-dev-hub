import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build, test, and deploy applications in 2024 and beyond.",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "AI Innovation",
      image: "ai-development",
    },
    {
      id: 2,
      title: "10 Productivity Hacks for Developers",
      excerpt: "Proven techniques to boost your coding efficiency and reduce burnout while maintaining high-quality output.",
      date: "2024-05-28",
      readTime: "8 min read",
      category: "Productivity",
      image: "developer-productivity",
    },
    {
      id: 3,
      title: "Building Scalable APIs with Modern Tools",
      excerpt: "Best practices for designing and implementing APIs that can handle enterprise-level traffic and data volumes.",
      date: "2024-05-12",
      readTime: "12 min read",
      category: "API Development",
      image: "api-development",
    },
    {
      id: 4,
      title: "The Rise of No-Code Development Platforms",
      excerpt: "Why no-code tools are revolutionizing software development and empowering non-technical team members.",
      date: "2024-04-30",
      readTime: "6 min read",
      category: "No-Code",
      image: "no-code-platforms",
    },
    {
      id: 5,
      title: "Security Best Practices for Modern Web Apps",
      excerpt: "Essential security measures every development team should implement to protect their applications and user data.",
      date: "2024-04-18",
      readTime: "10 min read",
      category: "Security",
      image: "web-security",
    },
    {
      id: 6,
      title: "Optimizing CI/CD Pipelines for Faster Deployments",
      excerpt: "How to streamline your continuous integration and deployment processes to reduce deployment times by 50%.",
      date: "2024-04-05",
      readTime: "9 min read",
      category: "DevOps",
      image: "ci-cd-optimization",
    },
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
                      <Button variant="outline" className="group">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-primary-foreground text-center">
                        <div className="text-2xl font-bold mb-1">{post.image.split('-')[0]}</div>
                        <div className="text-lg capitalize">{post.image.split('-').slice(1).join(' ')}</div>
                      </div>
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
                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
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