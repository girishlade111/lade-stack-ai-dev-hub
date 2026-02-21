import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "../data/blogPosts";
import { blogContent } from "../data/blogContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find(p => p.slug === slug);
  const content = post ? blogContent[post.slug] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Post Not Found - Lade Stack" />
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${window.location.origin}/blog-covers/${post.image}.svg`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://ladestack.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lade Stack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ladestack.in/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "articleSection": post.category,
    "keywords": post.keywords
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const processInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  const renderContent = (contentStr: string) => {
    const blocks: string[] = [];
    let currentBlock: string[] = [];
    let inCodeBlock = false;

    const lines = contentStr.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          currentBlock.push(line);
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
          inCodeBlock = false;
        } else {
          if (currentBlock.length > 0) {
            blocks.push(currentBlock.join('\n'));
            currentBlock = [];
          }
          inCodeBlock = true;
          currentBlock.push(line);
        }
      } else {
        currentBlock.push(line);
        if (!inCodeBlock && line.trim() === '') {
          blocks.push(currentBlock.join('\n').trim());
          currentBlock = [];
        }
      }
    }
    if (currentBlock.length > 0) blocks.push(currentBlock.join('\n').trim());

    return blocks.filter(b => b.trim() !== '').map((block, index) => {
      // Process code blocks
      if (block.startsWith('```')) {
        const parts = block.split('\n');
        const codeOptions = parts.slice(1, -1).join('\n');
        return (
          <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-6 border border-border mt-4">
            <code className="text-sm font-mono text-muted-foreground">{codeOptions}</code>
          </pre>
        );
      }

      // Process blockquotes
      if (block.startsWith('> ')) {
        const text = block.split('\n').map(l => l.replace(/^>\s*/, '')).join(' ');
        return <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 italic my-6 text-muted-foreground">{text}</blockquote>;
      }

      // Process lists
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(l => l.startsWith('- ')).map(l => l.replace('- ', ''));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-base sm:text-lg text-muted-foreground ml-4 my-4">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: processInline(item) }} />
            ))}
          </ul>
        );
      }

      if (block.match(/^\d+\. /)) {
        const items = block.split('\n').filter(l => l.match(/^\d+\. /)).map(l => l.replace(/^\d+\.\s*/, ''));
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 text-base sm:text-lg text-muted-foreground ml-4 my-4">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: processInline(item) }} />
            ))}
          </ol>
        );
      }

      // Headings
      if (block.startsWith('# ')) return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">{processInline(block.replace('# ', ''))}</h1>;
      if (block.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{processInline(block.replace('## ', ''))}</h2>;
      if (block.startsWith('### ')) return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">{processInline(block.replace('### ', ''))}</h3>;
      if (block.startsWith('#### ')) return <h4 key={index} className="text-lg font-semibold mt-4 mb-2 text-foreground">{processInline(block.replace('#### ', ''))}</h4>;

      // Default Paragraph
      return (
        <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: processInline(block) }} />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.10),_transparent_60%)]" />
        <div className="absolute top-[60%] right-0 w-[400px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
      </div>
      <SEO
        title={`${post.title} | Lade Stack Blog`}
        description={post.excerpt}
        keywords={post.keywords.join(', ')}
        ogImage={`/blog-covers/${post.image}.svg`}
        ogType="article"
        structuredData={jsonLd}
      />
      <Header />
      <main className="pt-16">
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><span className="mx-1">/</span></li>
                    <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    <li><span className="mx-1">/</span></li>
                    <li className="text-foreground font-medium truncate">{post.title}</li>
                  </ol>
                </nav>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} by {post.author}
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl sm:rounded-2xl mb-8 sm:mb-12">
                <img
                  src={`/blog-covers/${post.image}.svg`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 flex items-center justify-center';
                    fallback.innerHTML = `
                      <div class="text-primary-foreground text-center">
                        <div class="text-3xl sm:text-4xl font-bold mb-2">${post.image.split('-')[0]}</div>
                        <div class="text-lg sm:text-xl capitalize">${post.image.split('-').slice(1).join(' ')}</div>
                      </div>
                    `;
                    if (e.currentTarget.parentNode) {
                      e.currentTarget.parentNode.appendChild(fallback);
                    }
                  }}
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed space-y-6">
                  {renderContent(content)}
                </div>
              </div>

              <div className="mt-12 sm:mt-16 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Share this article:</span>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                  <Link to="/blog">
                    <Button variant="ghost">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Blog
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-card rounded-xl overflow-hidden shadow-medium border border-border hover:shadow-large transition-smooth group"
                    >
                      <div className="h-32 overflow-hidden">
                        <img
                          src={`/blog-covers/${relatedPost.image}.svg`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center';
                            fallback.innerHTML = `
                              <div class="text-primary-foreground text-center">
                                <div class="text-lg font-bold">${relatedPost.image.split('-')[0]}</div>
                                <div class="text-sm capitalize">${relatedPost.image.split('-').slice(1).join(' ')}</div>
                              </div>
                            `;
                            if (e.currentTarget.parentNode) {
                              e.currentTarget.parentNode.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{relatedPost.category}</Badge>
                          <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                        </div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;