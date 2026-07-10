import { createMetadata } from "@/lib/seo";
import { AnimatedProjects } from "@/components/projects/animated-projects";

export const metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies, including the in-progress Lumino XP.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <AnimatedProjects />;
}
