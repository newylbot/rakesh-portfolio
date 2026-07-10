// Lightweight, CSS-first motion helpers.
// The visual system favors CSS/SVG animation over heavy JS libraries,
// and everything here degrades under `prefers-reduced-motion` via globals.css.

export const reveal = "animate-fade-up";

// Staggered reveal delay helper for lists of cards.
export function revealDelay(index: number): React.CSSProperties {
  return { animationDelay: `${Math.min(index, 8) * 60}ms` };
}
