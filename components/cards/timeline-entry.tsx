import type { ExperienceEntry } from "@/content/site-config";
import { Tag } from "@/components/ui/tag";

// Ladder-logic inspired rail entry.
export function TimelineEntry({ entry, compact = false }: { entry: ExperienceEntry; compact?: boolean }) {
  return (
    <li className="relative pl-8">
      {/* rail rung */}
      <span aria-hidden className="absolute left-0 top-1 grid h-4 w-4 place-items-center">
        <span className="h-4 w-4 rounded-full border-2 border-primary bg-bg" />
      </span>
      <span aria-hidden className="absolute left-[7px] top-5 h-[calc(100%+0.5rem)] w-px bg-border" />

      <p className="font-mono text-xs uppercase tracking-wider text-primary">{entry.period}</p>
      <h3 className="mt-1 font-display text-h3 font-semibold text-text">{entry.role}</h3>
      <p className="text-sm text-text-muted">
        {entry.company} · {entry.location} · {entry.type}
      </p>

      {!compact && (
        <>
          <ul className="mt-3 space-y-1.5">
            {entry.summary.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-muted">
                <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          {entry.domains && (
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.domains.map((d) => (
                <Tag key={d}>{d}</Tag>
              ))}
            </div>
          )}
          {entry.reflection && (
            <p className="mt-3 border-l-2 border-border pl-3 text-sm italic text-text-muted">
              {entry.reflection}
            </p>
          )}
          <p className="mt-2 font-mono text-xs text-text-muted/70">
            {entry.evidenceUrl ? (
              <a href={entry.evidenceUrl} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                View evidence
              </a>
            ) : (
              "[Evidence / certificate placeholder]"
            )}
          </p>
        </>
      )}
    </li>
  );
}
