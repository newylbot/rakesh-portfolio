import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { isReal } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Get in touch about graduate electrical engineering, automation, quality, and junior backend roles.",
  "/contact"
);

export default function ContactPage() {
  const { contact, person } = siteConfig;
  const endpointConfigured = Boolean(process.env.CONTACT_FORM_ENDPOINT);

  return (
    <Section ariaLabel="Contact">
      <SectionHeader eyebrow="Contact" title={contact.headline} description={contact.body} />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm endpointConfigured={endpointConfigured} />
        </div>
        <aside className="space-y-4">
          <Card>
            <p className="readout">Direct</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Email:{" "}
                {isReal(person.email) ? (
                  <a href={`mailto:${person.email}`} className="text-primary">{person.email}</a>
                ) : (
                  <span className="text-text-muted">not added yet</span>
                )}
              </li>
              <li>
                GitHub:{" "}
                {isReal(person.github) ? (
                  <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-primary">profile</a>
                ) : (
                  <span className="text-text-muted">not added yet</span>
                )}
              </li>
              <li>
                LinkedIn:{" "}
                {isReal(person.linkedin) ? (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">profile</a>
                ) : (
                  <span className="text-text-muted">not added yet</span>
                )}
              </li>
              <li className="text-text-muted">Location: {person.location}</li>
            </ul>
          </Card>
        </aside>
      </div>
    </Section>
  );
}
