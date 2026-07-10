import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { SkillCard } from "@/components/cards/skill-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function SkillsPreview() {
  const { skills } = siteConfig;
  const groups = [
    { title: "Electrical & Industrial", skills: skills.electricalIndustrial },
    { title: "Software & Systems", skills: skills.softwareSystems },
    { title: "Tools & Workflow", skills: skills.toolsWorkflow },
  ];
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Skills" title="Two disciplines, one system mindset" />
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 90} className="h-full">
            <SkillCard title={g.title} skills={g.skills} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <Button href="/skills" variant="ghost">All skills</Button>
      </Reveal>
    </Section>
  );
}
