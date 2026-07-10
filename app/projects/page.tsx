import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies, including the in-progress Lumino XP.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Work"
          title="Projects and case studies"
          description="Honest by design: one featured work-in-progress build, plus reserved slots for verified projects. No invented work."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
