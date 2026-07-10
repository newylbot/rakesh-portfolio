import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "Electrical engineering graduate building dependable industrial and software systems.",
  "/about"
);

export default function AboutPage() {
  const { person, opportunities, approach } = siteConfig;

  return (
    <Section ariaLabel="About">
      <SectionHeader eyebrow="About" title="Engineering profile" />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-h3 font-semibold">Introduction</h3>
            <p className="mt-2 text-body-lg text-text-muted">{person.bio}</p>
          </div>

          <div>
            <h3 className="text-h3 font-semibold">Why electrical engineering and systems?</h3>
            <p className="mt-2 text-body-lg text-text-muted">
              I'm drawn to how real systems behave under load, constraint, and failure. Electrical
              engineering gave me a grounding in reliability and safety; software gives me a way to
              extend that same thinking into products and backends.
            </p>
          </div>

          <div>
            <h3 className="text-h3 font-semibold">From industrial learning to software building</h3>
            <p className="mt-2 text-body-lg text-text-muted">
              Industrial exposure in quality inspection, safety, and automation taught me discipline
              and documentation. I'm now applying that to Rust, APIs, and web systems — treating
              software with the same respect for state and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-h3 font-semibold">Work principles</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {approach.map((a) => (
                <Card key={a.title}>
                  <h4 className="font-medium">{a.title}</h4>
                  <p className="mt-1 text-sm text-text-muted">{a.body}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-h3 font-semibold">Current focus</h3>
            <p className="mt-2 text-body-lg text-text-muted">
              Deepening backend and Rust fundamentals while exploring the Lumino XP product
              direction. See the <a className="text-primary" href="/now">Now page</a> for current notes.
            </p>
          </div>

          <div>
            <h3 className="text-h3 font-semibold">Beyond work</h3>
            <p className="mt-2 text-body-lg text-text-muted">
              [Confirm / add details] — add a short, genuine note about interests outside engineering.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <Card>
            <p className="readout">Open to</p>
            <ul className="mt-3 space-y-2">
              {opportunities.map((o) => (
                <li key={o} className="text-sm text-text-muted">• {o}</li>
              ))}
            </ul>
          </Card>
          <Button href="/contact" variant="primary" className="w-full">Get in touch</Button>
        </aside>
      </div>
    </Section>
  );
}
