/** Minimal className joiner (no external dependency needed). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Resolve the public site URL from env, falling back to a placeholder. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://your-domain.com"
  );
}

/** True when a config value is a real value (not empty and not a placeholder). */
export function isReal(value: string | undefined | null): value is string {
  if (!value) return false;
  const v = value.trim();
  if (v.length === 0) return false;
  if (v.startsWith("[") && v.endsWith("]")) return false;
  return true;
}
