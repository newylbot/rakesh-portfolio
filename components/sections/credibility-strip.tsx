import { siteConfig } from "@/content/site-config";

export function CredibilityStrip() {
  return (
    <div className="border-y border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 sm:px-8">
        {siteConfig.home.credibility.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            {i > 0 ? <span aria-hidden="true" className="hidden h-3 w-px bg-border sm:block" /> : null}
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
