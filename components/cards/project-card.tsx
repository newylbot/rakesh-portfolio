import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/site-config";
import { isReal } from "@/lib/utils";

function statusTone(status: Project["status"]) {
  if (status === "In progress") return "progress" as const;
  if (status === "Live") return "live" as const;
  return "planned" as const;
}

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.category === "Placeholder";

  if (isPlaceholder) {
    return (
      <div className="flex min-h-[220px] flex-col justify-between rounded-md border border-dashed border-border bg-surface/50 p-6">
        <div>
          <p className="readout">Reserved</p>
          <p className="mt-3 text-h3 font-medium text-text-muted">
            Project slot reserved for real case study
          </p>
        </div>
        <p className="mt-6 text-sm text-text-muted">
          Add a second verified build here.
        </p>
      </div>
    );
  }

  return (
    <article className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
      {/* accent trace */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="readout">{project.category}</p>
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
        </div>
        <h3 className="mt-4 text-h3 font-semibold">{project.title}</h3>
        <p className="mt-2 text-body-lg text-text-muted">{project.oneLine}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          View case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
        <div className="flex items-center gap-3">
          {isReal(project.github) ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
              <Github className="h-4 w-4 text-text-muted hover:text-text" aria-hidden="true" />
            </a>
          ) : null}
          {isReal(project.demo) ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
              <ExternalLink className="h-4 w-4 text-text-muted hover:text-text" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
