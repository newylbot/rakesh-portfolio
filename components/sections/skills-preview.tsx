import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { SkillCard } from "@/components/cards/skill-card";

export function SkillsPreview() {
  const { skills } = siteConfig;
  return (
    <Section className="bg-bg-elevated">
      <SectionHeader
        eyebrow="Skills"
        title="Honest skill framing"
        intro="Context labels instead of percentage meters — hands-on, exposure, working knowledge, and learning."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <SkillCard title="Electrical & Industrial" skills={skills.electricalIndustrial} />
        <SkillCard title="Software & Systems" skills={skills.softwareSystems} />
        <SkillCard title="Tools & Workflow" skills={skills.toolsWorkflow} />
      </div>
    </Section>
  );
}
