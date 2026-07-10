import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/site-config";
import { Badge, statusTone } from "@/components/ui/badge";
import { Card, ConnectorPins } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({ project }: { project: Project }) {
  if (project.placeholder) {
    return (
      <Card className="border-dashed">
        <ConnectorPins />
        <Badge tone="planned">{project.status}</Badge>
        <h3 className="mt-4 font-display text-h3 font-semibold text-text-muted">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.oneLine}</p>
        <p className="mt-6 font-mono text-xs text-text-muted/70">Slot reserved for a real, verified build.</p>
      </Card>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:outline-none"
      aria-label={`Open case study: ${project.title}`}
    >
      <Card className="h-full hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_0_1px_var(--primary)]">
        <ConnectorPins />
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{project.category}</p>
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
        </div>
        <h3 className="mt-4 font-display text-h3 font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.oneLine}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          View case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
}
