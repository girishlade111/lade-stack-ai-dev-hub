import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIEditorHighlight from "@/components/AIEditorHighlight";
import DualCodeSection from "@/components/DualCodeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Lade Stack - AI-Powered Development Tools & Modern Developer Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your dev workflow with AI-powered tools. Code, compile, and enhance HTML/CSS/JS in one smart editor. Modern developer tools by Lade Stack.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your dev workflow with AI-powered tools. Code, compile, and enhance HTML/CSS/JS in one smart editor. Modern developer tools by Lade Stack.';
      document.head.appendChild(meta);
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

    updateMetaTag('og:title', 'Lade Stack - AI-Powered Development Tools');
    updateMetaTag('og:description', 'Transform your dev workflow with AI-powered tools. Code, compile, and enhance HTML/CSS/JS in one smart editor.');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.origin);
    updateMetaTag('og:image', `${window.location.origin}/og-image.png`);

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
    updateTwitterMeta('twitter:title', 'Lade Stack - AI-Powered Development Tools');
    updateTwitterMeta('twitter:description', 'Transform your dev workflow with AI-powered tools.');

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Lade Stack AI Code Editor",
      "description": "AI-powered code editor for HTML, CSS, and JavaScript development with intelligent enhancement features.",
      "url": "https://code.ladestack.in",
      "applicationCategory": "DevelopmentApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "Girish Lade",
        "url": "https://ladestack.in/about"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, []);

  // Sample code examples for the dual code section
  const sampleNormalCode = `// Basic function with minimal error handling
const calculateTotal = (items) => {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  return total;
};

// Simple API call without proper error handling
fetch('/api/cart')
  .then(response => response.json())
  .then(data => {
    console.log('Cart data:', data);
  });
`;

  const sampleEnhancedCode = `// Enhanced function with TypeScript types and error handling
interface CartItem {
  id: string;
  price: number;
  quantity: number;
}

interface CartData {
  items: CartItem[];
  currency: string;
}

const calculateTotal = (items: CartItem[]): number => {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  
  return items.reduce((total, item) => {
    if (!item.price || !item.quantity) {
      console.warn('Invalid item:', item);
      return total;
    }
    return total + (item.price * item.quantity);
  }, 0);
};

// Enhanced API call with error handling and types
const fetchCartData = async (): Promise<CartData> => {
  try {
    const response = await fetch('/api/cart', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data: CartData = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch cart:', error);
    throw new Error('Unable to load cart data');
  }
};`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AIEditorHighlight />
        <DualCodeSection
          title="Code Transformation"
          description="Watch our AI transform basic code into production-ready applications"
          normalCode={sampleNormalCode}
          enhancedCode={sampleEnhancedCode}
        />
        <AboutSection />
        <ProjectsSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
