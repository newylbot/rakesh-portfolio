import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { isReal } from "@/lib/utils";

export function Footer() {
  const { person } = siteConfig;
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", value: person.github },
    { label: "LinkedIn", value: person.linkedin },
    { label: "Email", value: person.email ? `mailto:${person.email}` : "" },
  ];

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold">{person.name}</p>
          <p className="mt-1 text-sm text-text-muted">{person.role}</p>
          <p className="mt-1 text-sm text-text-muted">{person.location}</p>
        </div>
        <nav aria-label="Footer" className="sm:justify-self-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                {isReal(l.value) ? (
                  <a
                    href={l.value}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                    {...(l.value.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                ) : (
                  <span
                    className="cursor-not-allowed text-sm text-text-muted/50"
                    title="Link not added yet"
                  >
                    {l.label}
                  </span>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <div className="hairline mb-6" />
        <p className="font-mono text-xs text-text-muted">
          Designed and built by {person.name}. © {year}.
        </p>
      </div>
    </footer>
  );
}
