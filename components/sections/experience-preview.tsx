import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export function ExperiencePreview() {
  const entries = siteConfig.experience.slice(0, 4);
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Experience" title="Industrial and engineering path" />
      <ol className="space-y-4">
        {entries.map((item) => (
          <li
            key={item.company}
            className="grid gap-2 rounded-lg border border-border bg-surface p-5 sm:grid-cols-[10rem_1fr] sm:items-center"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{item.period}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-sm font-semibold text-text">{item.role}</span>
              <span className="text-sm text-primary">{item.company}</span>
              <Tag>{item.type}</Tag>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <Button href="/experience" variant="ghost">Full experience</Button>
      </div>
    </Section>
  );
}
