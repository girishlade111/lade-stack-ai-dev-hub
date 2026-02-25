// vite.config.ts
import { defineConfig } from "file:///C:/Users/a/Downloads/lade-stack-ai-dev-hub/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/a/Downloads/lade-stack-ai-dev-hub/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/a/Downloads/lade-stack-ai-dev-hub/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\a\\Downloads\\lade-stack-ai-dev-hub";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
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
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-core";
          }
          if (id.includes("node_modules/react-router-dom") || id.includes("node_modules/react-router/")) {
            return "router";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
            return "charts";
          }
          if (id.includes("node_modules/lottie-react") || id.includes("node_modules/lottie-web")) {
            return "lottie";
          }
          if (id.includes("node_modules/@radix-ui/")) {
            return "radix-ui";
          }
          if (id.includes("node_modules/@tanstack/")) {
            return "tanstack-query";
          }
          if (id.includes("node_modules/clsx") || id.includes("node_modules/tailwind-merge") || id.includes("node_modules/class-variance-authority")) {
            return "utils";
          }
          if (id.includes("node_modules/lenis")) {
            return "lenis";
          }
        }
      }
    },
    esbuild: {
      target: "es2020"
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhXFxcXERvd25sb2Fkc1xcXFxsYWRlLXN0YWNrLWFpLWRldi1odWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFcXFxcRG93bmxvYWRzXFxcXGxhZGUtc3RhY2stYWktZGV2LWh1YlxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYS9Eb3dubG9hZHMvbGFkZS1zdGFjay1haS1kZXYtaHViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCldLmZpbHRlcihCb29sZWFuKSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gUmVzdG9yZSB0aGUgZGVmYXVsdCA1MDAgS0Igd2FybmluZyBzbyBvdmVyc2l6ZWQgY2h1bmtzIGFyZSB2aXNpYmxlXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCxcclxuICAgIG1pbmlmeTogXCJlc2J1aWxkXCIsXHJcbiAgICBjc3NNaW5pZnk6IHRydWUsXHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gICAgLy8gTmV2ZXIgaW5saW5lIGltYWdlcyBhcyBiYXNlNjQgXHUyMDE0IHdlIHdhbnQgdGhlbSBhcyBzZXBhcmF0ZSBmaWxlcyBzb1xyXG4gICAgLy8gdGhlIGJyb3dzZXIgY2FuIGNhY2hlIHRoZW0gaW5kZXBlbmRlbnRseSBhbmQgZmV0Y2ggdGhlbSBpbiBwYXJhbGxlbC5cclxuICAgIC8vIEVzcGVjaWFsbHkgY3JpdGljYWwgZm9yIGJhY2tncm91bmQuYXZpZiAoNDkgS0IpIGFuZCBiYWNrZ3JvdW5kLndlYnAgKDczIEtCKVxyXG4gICAgLy8gd2hpY2ggd2Ugd2FudCB0aGUgYnJvd3NlciB0byBzdGFydCBmZXRjaGluZyBhcyBlYXJseSBhcyBwb3NzaWJsZS5cclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIC8vIFJlYWN0IGNvcmUgXHUyMDE0IGxvYWRzIGZpcnN0LCBjYWNoZWQgYWdncmVzc2l2ZWx5XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvcmVhY3QvXCIpIHx8IGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmVhY3QtY29yZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gUm91dGVyXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbVwiKSB8fCBpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInJvdXRlclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gRnJhbWVyIE1vdGlvbiBcdTIwMTQgbGFyZ2UsIGlzb2xhdGVkIHNvIG90aGVyIGNodW5rcyBkb24ndCB3YWl0IGZvciBpdFxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb25cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZnJhbWVyLW1vdGlvblwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gUmVjaGFydHMgXHUyMDE0IG9ubHkgdXNlZCBvbiBzcGVjaWZpYyBwYWdlc1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL3JlY2hhcnRzXCIpIHx8IGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL2QzLVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJjaGFydHNcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIExvdHRpZSBcdTIwMTQgaGVhdnkgYW5pbWF0aW9uIHJ1bnRpbWVcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlcy9sb3R0aWUtcmVhY3RcIikgfHwgaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvbG90dGllLXdlYlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJsb3R0aWVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIEFsbCBSYWRpeCBVSSBwcmltaXRpdmVzIGludG8gb25lIHNoYXJlZCBjaHVua1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL0ByYWRpeC11aS9cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmFkaXgtdWlcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRhblN0YWNrIFF1ZXJ5XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvQHRhbnN0YWNrL1wiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0YW5zdGFjay1xdWVyeVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVXRpbGl0eSBsaWJyYXJpZXMgXHUyMDE0IHRpbnksIGxvYWRlZCBlYXJseVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlcy9jbHN4XCIpIHx8XHJcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL3RhaWx3aW5kLW1lcmdlXCIpIHx8XHJcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInV0aWxzXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBMZW5pcyBzbW9vdGggc2Nyb2xsXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvbGVuaXNcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwibGVuaXNcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzYnVpbGQ6IHtcclxuICAgICAgdGFyZ2V0OiBcImVzMjAyMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCJdLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFTLG9CQUFvQjtBQUN2VixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUM5RSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLHVCQUF1QjtBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS1gsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBRWYsY0FBSSxHQUFHLFNBQVMscUJBQXFCLEtBQUssR0FBRyxTQUFTLHlCQUF5QixHQUFHO0FBQ2hGLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksR0FBRyxTQUFTLCtCQUErQixLQUFLLEdBQUcsU0FBUyw0QkFBNEIsR0FBRztBQUM3RixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEdBQUcsU0FBUyw0QkFBNEIsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEdBQUcsU0FBUyx1QkFBdUIsS0FBSyxHQUFHLFNBQVMsa0JBQWtCLEdBQUc7QUFDM0UsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsMkJBQTJCLEtBQUssR0FBRyxTQUFTLHlCQUF5QixHQUFHO0FBQ3RGLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksR0FBRyxTQUFTLHlCQUF5QixHQUFHO0FBQzFDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksR0FBRyxTQUFTLHlCQUF5QixHQUFHO0FBQzFDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQ0UsR0FBRyxTQUFTLG1CQUFtQixLQUMvQixHQUFHLFNBQVMsNkJBQTZCLEtBQ3pDLEdBQUcsU0FBUyx1Q0FBdUMsR0FDbkQ7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEdBQUcsU0FBUyxvQkFBb0IsR0FBRztBQUNyQyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxFQUNwRDtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
