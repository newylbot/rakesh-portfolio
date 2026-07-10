import { siteConfig } from "@/content/site-config";

export function CredibilityStrip() {
  return (
    <div className="border-y border-border bg-bg-elevated">
      <div className="container-content flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
        {siteConfig.credibility.map((item, i) => (
          <div key={item} className="flex items-center gap-6">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">{item}</span>
            {i < siteConfig.credibility.length - 1 && (
              <span aria-hidden className="hidden h-3 w-px bg-border sm:inline-block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
