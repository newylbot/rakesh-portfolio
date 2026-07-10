import { siteConfig } from "@/content/site-config";

export function CredibilityStrip() {
  // Duplicated once for a seamless -50% marquee loop. Pauses on hover; static
  // under prefers-reduced-motion (see globals.css).
  const items = siteConfig.home.credibility;
  const loop = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden border-y border-border bg-surface/50 py-3">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {loop.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8" aria-hidden={i >= items.length}>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">{item}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 border border-primary/70" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
