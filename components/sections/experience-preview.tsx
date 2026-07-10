import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { TimelineEntry } from "@/components/cards/timeline-entry";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ExperiencePreview() {
  return (
    <Section>
      <SectionHeader eyebrow="Experience" title="Where I’ve trained and worked" />
      <ol className="space-y-8">
        {siteConfig.experience.slice(0, 4).map((entry) => (
          <TimelineEntry key={entry.company} entry={entry} compact />
        ))}
      </ol>
      <div className="mt-8">
        <ButtonLink href="/experience" variant="ghost">
          View full experience <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
