/**
 * Lightweight, framework-agnostic motion tokens.
 *
 * Animations are implemented with CSS (see app/globals.css) rather than a heavy
 * animation library, and always degrade gracefully under `prefers-reduced-motion`.
 */
export const motion = {
  durations: { fast: 150, base: 250, slow: 400 },
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
};
