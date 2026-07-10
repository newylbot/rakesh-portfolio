import Link from "next/link";
import { siteConfig } from "@/content/site-config";

function ContactLine({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <li className="flex items-center gap-2 font-mono text-xs">
      <span className="text-text-muted">{label}:</span>
      {value && href ? (
        <a href={href} className="text-text hover:text-primary" target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <span className="text-text-muted/70">[Add {label.toLowerCase()}]</span>
      )}
    </li>
  );
}

export function Footer() {
  const { person } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-bg-elevated">
      <div className="container-content grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-text">{person.name}</p>
          <p className="mt-1 text-meta text-text-muted">{person.role}</p>
          <p className="mt-3 font-mono text-xs text-text-muted">{person.location}</p>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">Contact</p>
          <ul className="space-y-2">
            <ContactLine label="Email" value={person.email} href={person.email ? `mailto:${person.email}` : undefined} />
            <ContactLine label="GitHub" value={person.github} href={person.github || undefined} />
            <ContactLine label="LinkedIn" value={person.linkedin} href={person.linkedin || undefined} />
          </ul>
        </div>

        <nav aria-label="Footer" className="sm:justify-self-end">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">Explore</p>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col items-start justify-between gap-2 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-text-muted">© {year} {person.name}</p>
          <p className="font-mono text-xs text-text-muted">Designed and built by {person.name}.</p>
        </div>
      </div>
    </footer>
  );
}
