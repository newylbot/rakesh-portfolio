import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard } from "@/components/cards/project-card";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SelectedWork() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected work"
        title="Projects and case studies"
        intro="Honest technical framing: what is being explored, what is in progress, and what still needs validation."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/projects" variant="ghost">
          All projects <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
