import { lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIEditorHighlight from "@/components/AIEditorHighlight";
import DualCodeSection from "@/components/DualCodeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// SEO optimization - lightweight alternative to DOM manipulation
const useSeoMeta = () => {
  useEffect(() => {
    // Only update title, let HTML meta tags handle SEO
    document.title = "Lade Stack - AI-Powered Development Tools & Modern Developer Hub";
  }, []);
};

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
  });`;

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

const Index = () => {
  useSeoMeta();

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
