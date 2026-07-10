import { siteConfig } from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-text">
            <span className="text-primary">R</span>KB.dev
          </p>
          <p className="mt-2 max-w-xs text-sm text-text-muted">{siteConfig.person.role}</p>
          <p className="mt-1 text-sm text-text-muted">{siteConfig.person.location}</p>
        </div>
        <div className="sm:justify-self-end">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">Connect</p>
          <ul className="space-y-2 text-sm">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition hover:text-primary"
                  >
                    {s.label}
                  </a>
                ) : (
                  <span className="text-text-muted">
                    {s.label} <span className="font-mono text-xs">(add link)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <p className="text-xs text-text-muted">
            {"\u00a9"} {year} {siteConfig.person.name}. Designed and built by {siteConfig.person.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
