import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";

export function ExperiencePreview() {
  const entries = siteConfig.experience.slice(0, 4);
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Experience" title="Industrial and engineering path" />
      <ol>
        {entries.map((item, i) => (
          <Reveal
            key={item.company}
            as="li"
            delay={i * 70}
            className="group grid gap-2 border-t border-border py-5 transition-colors hover:bg-surface/60 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6 sm:px-3 last:border-b"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">{item.period}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-base font-semibold text-text">{item.role}</span>
              <span className="text-sm text-primary">{item.company}</span>
              <Tag>{item.type}</Tag>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-8">
        <Button href="/experience" variant="ghost">Full experience</Button>
      </Reveal>
    </Section>
  );
}
