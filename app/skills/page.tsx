import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { SkillCard } from "@/components/cards/skill-card";
import { Tag } from "@/components/ui/tag";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = createMetadata({
  title: "Skills",
  description: "Skills across electrical & industrial, software & systems, and tools \u2014 with honest context labels.",
  path: "/skills",
});

const legend = ["Hands-on", "Industrial exposure", "Working knowledge", "Learning", "Familiar with"];

export default function SkillsPage() {
  const { skills } = siteConfig;
  return (
    <>
      <Section>
        <SectionHeader eyebrow="Skills" title="Framed honestly" description={skills.intro} />
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">Context labels:</span>
          {legend.map((l) => (
            <Tag key={l}>{l}</Tag>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <SkillCard title="Electrical & Industrial" skills={skills.electricalIndustrial} />
          <SkillCard title="Software & Systems" skills={skills.softwareSystems} />
          <SkillCard title="Tools & Workflow" skills={skills.toolsWorkflow} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
