import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Restore the default 500 KB warning so oversized chunks are visible
    chunkSizeWarningLimit: 500,
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    // Never inline images as base64 — we want them as separate files so
    // the browser can cache them independently and fetch them in parallel.
    // Especially critical for background.avif (49 KB) and background.webp (73 KB)
    // which we want the browser to start fetching as early as possible.
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — loads first, cached aggressively
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-core";
          }
          // Router
          if (id.includes("node_modules/react-router-dom") || id.includes("node_modules/react-router/")) {
            return "router";
          }
          // Framer Motion — large, isolated so other chunks don't wait for it
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          // Recharts — only used on specific pages
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
            return "charts";
          }
          // Lottie — heavy animation runtime
          if (id.includes("node_modules/lottie-react") || id.includes("node_modules/lottie-web")) {
            return "lottie";
          }
          // All Radix UI primitives into one shared chunk
          if (id.includes("node_modules/@radix-ui/")) {
            return "radix-ui";
          }
          // TanStack Query
          if (id.includes("node_modules/@tanstack/")) {
            return "tanstack-query";
          }
          // Utility libraries — tiny, loaded early
          if (
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/class-variance-authority")
          ) {
            return "utils";
          }
          // Lenis smooth scroll
          if (id.includes("node_modules/lenis")) {
            return "lenis";
          }
        },
      },
    },
    esbuild: {
      target: "es2020",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
