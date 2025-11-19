import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object | object[];
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tags (canonical)
    const updateLink = (rel: string, href: string) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Get current URL safely
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    // Basic Meta Tags
    updateMeta('description', description || '');
    updateMeta('keywords', keywords || '');

    // Open Graph
    updateMeta('og:title', ogTitle || title, 'property');
    updateMeta('og:description', ogDescription || description || '', 'property');
    updateMeta('og:image', ogImage || '', 'property');
    updateMeta('og:url', ogUrl || currentUrl, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:site_name', 'Lade Stack', 'property');

    // Twitter
    updateMeta('twitter:card', twitterCard);
    updateMeta('twitter:title', twitterTitle || ogTitle || title);
    updateMeta('twitter:description', twitterDescription || ogDescription || description || '');
    updateMeta('twitter:image', twitterImage || ogImage || '');

    // Canonical
    updateLink('canonical', canonicalUrl || currentUrl);

    // Structured Data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-generated="true"]');
    existingScripts.forEach(script => script.remove());

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach(data => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-generated', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Cleanup function (optional, but good for SPA navigation if we want to reset)
    // For now, we rely on the next page's SEO component to overwrite.
    // However, removing structured data on unmount is a good idea to avoid accumulation.
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"][data-generated="true"]');
      scripts.forEach(script => script.remove());
    };
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
  ]);

  return null;
};

export default SEO;
