import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { SkillCard } from "@/components/cards/skill-card";
import { Button } from "@/components/ui/button";

export function SkillsPreview() {
  const { skills } = siteConfig;
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Skills" title="Two disciplines, one system mindset" />
      <div className="grid gap-6 md:grid-cols-3">
        <SkillCard title="Electrical & Industrial" skills={skills.electricalIndustrial} />
        <SkillCard title="Software & Systems" skills={skills.softwareSystems} />
        <SkillCard title="Tools & Workflow" skills={skills.toolsWorkflow} />
      </div>
      <div className="mt-8">
        <Button href="/skills" variant="ghost">All skills</Button>
      </div>
    </Section>
  );
}
