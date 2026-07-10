import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export function EngineeringApproach() {
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Approach" title="How I work" />
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.home.approach.map((item, i) => (
          <Card key={item.title}>
            <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-h3 font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
