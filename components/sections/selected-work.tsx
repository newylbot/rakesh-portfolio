import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";

export function SelectedWork() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected work"
        title="Projects and case studies"
        description="A featured work-in-progress build, plus reserved slots for verified projects to come."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="/projects" variant="ghost">All projects</Button>
      </div>
    </Section>
  );
}
