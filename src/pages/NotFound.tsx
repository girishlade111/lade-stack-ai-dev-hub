import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics/debugging in development only
    if (import.meta.env.DEV) {
      console.warn("404: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.12),_transparent_60%)]" />
      </div>
      <SEO title="404 - Page Not Found - Lade Stack" />
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-[#6E8F6A] hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
