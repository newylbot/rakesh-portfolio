import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function EngineeringApproach() {
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Approach" title="How I work" />
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {siteConfig.home.approach.map((item, i) => (
          <Reveal key={item.title} delay={i * 90} className="bg-surface p-7">
            <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-h3 font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
