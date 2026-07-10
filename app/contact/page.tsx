import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Rakesh Kumar Behera about dependable, systems-oriented work.",
  path: "/contact",
});

export default function ContactPage() {
  const p = siteConfig.person;
  const directLinks = [
    { label: "Email", value: p.email, href: p.email ? `mailto:${p.email}` : "" },
    { label: "GitHub", value: p.github, href: p.github },
    { label: "LinkedIn", value: p.linkedin, href: p.linkedin },
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="Contact"
        title="Let us build something dependable"
        description="Recruiters, engineering teams, and collaborators are all welcome. I usually reply within a few days."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
        <div>
          <ContactForm />
        </div>
        <aside>
          <h2 className="font-mono text-xs uppercase tracking-wider text-primary">Direct</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {directLinks.map((l) => (
              <li key={l.label}>
                {l.href ? (
                  <a href={l.href} className="text-text-muted transition hover:text-primary" target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {l.label}: {l.value}
                  </a>
                ) : (
                  <span className="text-text-muted">{l.label}: <span className="font-mono text-xs">add link</span></span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-text-muted">{siteConfig.person.availabilityLine}</p>
        </aside>
      </div>
    </Section>
  );
}
