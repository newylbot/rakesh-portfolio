import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export function EngineeringApproach() {
  return (
    <Section className="bg-bg-elevated">
      <SectionHeader eyebrow="Engineering approach" title="How I work" />
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.approach.map((item, i) => (
          <Card key={item.title}>
            <span className="font-mono text-xs text-primary">0{i + 1}</span>
            <h3 className="mt-2 font-display text-h3 font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
