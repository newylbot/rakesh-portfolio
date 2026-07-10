import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Skills",
  "Honest, context-labeled skills across electrical & industrial, software & systems, and tools & workflow.",
  "/skills"
);

export default function SkillsPage() {
  const { skills } = siteConfig;
  const groups = [
    { label: "Electrical & Industrial", items: skills.electricalIndustrial },
    { label: "Software & Systems", items: skills.softwareSystems },
    { label: "Tools & Workflow", items: skills.toolsWorkflow },
  ];

  return (
    <Section ariaLabel="Skills">
      <SectionHeader
        eyebrow="Skills"
        title="Skills, framed honestly"
        description="Context labels like Hands-on, Industrial exposure, Working knowledge, and Learning — no invented proficiency bars."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <Card key={g.label}>
            <h2 className="text-h3 font-semibold">{g.label}</h2>
            <ul className="mt-4 space-y-3">
              {g.items.map((s) => (
                <li key={s.name} className="flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-sm">{s.name}</span>
                  <span className="shrink-0 rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-text-muted">{s.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
