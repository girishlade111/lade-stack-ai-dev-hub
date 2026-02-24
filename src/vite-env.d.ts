/// <reference types="vite/client" />

// Declare AVIF and WebP as importable static assets so TypeScript
// doesn't throw "cannot find module '*.avif'" errors.
declare module "*.avif" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}
