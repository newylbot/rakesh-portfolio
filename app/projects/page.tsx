import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard } from "@/components/cards/project-card";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Work",
  "Selected projects and case studies, including the in-progress Lumino XP platform direction.",
  "/projects"
);

export default function ProjectsPage() {
  const { projects } = siteConfig;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section ariaLabel="Projects">
      <SectionHeader
        eyebrow="Work"
        title="Projects and case studies"
        description="I'd rather show one honest work-in-progress than a wall of filler. Real case studies get added here as they mature."
      />

      {featured.map((p) => (
        <div key={p.slug} className="mb-8">
          <ProjectCard project={p} />
        </div>
      ))}

      <div className="grid gap-6 sm:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
