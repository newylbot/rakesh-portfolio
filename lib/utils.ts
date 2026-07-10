/**
 * Minimal className combiner. Filters out falsy values and joins with a space.
 * Keeps the dependency footprint small (no clsx / tailwind-merge required).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
