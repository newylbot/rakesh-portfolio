import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { TimelineEntry } from "@/components/cards/timeline-entry";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = createMetadata({
  title: "Experience",
  description: "Industrial and engineering experience: SACL, CTTC, SAIL, and education \u2014 framed honestly.",
  path: "/experience",
});

export default function ExperiencePage() {
  const items = siteConfig.experience;
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Experience"
          title="A path through industrial systems"
          description="Structured like a control diagram: each rung is a real step in the work and the learning."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ol className="list-none">
            {items.map((item, i) => (
              <TimelineEntry key={item.company} item={item} last={i === items.length - 1} />
            ))}
          </ol>
          <div>
            <Card className="lg:sticky lg:top-24">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">What this taught me</h3>
              <p className="mt-3 text-sm text-text-muted">
                Across the factory floor and the classroom, the through-line is the same: reliable systems come
                from disciplined observation, respect for safety and constraints, and clear documentation.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                That is exactly how I approach software — understand the system, design for its edges, and keep
                the decisions legible.
              </p>
            </Card>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
