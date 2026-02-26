/**
 * LoadingScreen — REMOVED for LCP performance.
 *
 * Previously: rendered a full-screen framer-motion overlay (z-index 200)
 * for 500-800ms, which completely blocked LCP measurement because the
 * browser considered nothing "painted" behind the opaque overlay.
 *
 * Impact: ~500-800ms added directly to both FCP and LCP.
 *
 * The component is kept as a no-op export to avoid breaking imports.
 */
export default function LoadingScreen() {
  return null;
}
