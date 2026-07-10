import Link from "next/link";
import { ArrowRight, Github, Lock } from "lucide-react";
import type { Project } from "@/content/site-config";
import { Badge, toneForStatus } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";
import { CircuitVisual } from "@/components/diagrams/circuit-visual";

export function ProjectCard({ project }: { project: Project }) {
  if (project.placeholder) {
    return (
      <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-border bg-surface/40 p-6">
        <div>
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-muted">
            <Lock className="h-4 w-4" aria-hidden="true" />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">Reserved slot</p>
          <h3 className="mt-2 text-h3 font-semibold text-text">{project.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{project.oneLine}</p>
        </div>
        <p className="mt-6 font-mono text-xs text-text-muted">Awaiting a verified build.</p>
      </div>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary hover:shadow-[0_18px_40px_-24px_oklch(var(--primary)/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative h-32 overflow-hidden border-b border-border bg-bg-elevated">
        <CircuitVisual className="absolute inset-0 h-full w-full opacity-70 transition-transform duration-500 ease-out-expo group-hover:scale-105" />
        <span aria-hidden="true" className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 ease-out-expo group-hover:w-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{project.category}</p>
          <Badge tone={toneForStatus(project.status)}>{project.status}</Badge>
        </div>
        <h3 className="text-h3 font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.oneLine}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View case study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" aria-hidden="true" />
          </span>
          {project.github ? <Github className="h-4 w-4 text-text-muted" aria-hidden="true" /> : null}
        </div>
      </div>
    </Link>
  );
}
