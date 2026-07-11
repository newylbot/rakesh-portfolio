import type { ReactNode } from "react";

/**
 * Home content deliberately stays mounted and stable while scrolling.
 * Continuous signal/typewriter motion remains; scroll-triggered transforms are
 * omitted to prevent IntersectionObserver threshold flicker on mobile browsers.
 */
export function HomeStaticReveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}
