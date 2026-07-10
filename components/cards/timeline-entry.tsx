import type { ExperienceItem } from "@/content/site-config";
import { Tag } from "@/components/ui/tag";

export function TimelineEntry({ item, last = false }: { item: ExperienceItem; last?: boolean }) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-[9px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-bg"
      />
      {!last ? (
        <span aria-hidden="true" className="absolute left-[14px] top-5 h-full w-px bg-border" />
      ) : null}
      <div className="pb-10">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{item.period}</p>
          <Tag>{item.type}</Tag>
        </div>
        <h3 className="mt-2 text-h3 font-semibold text-text">{item.role}</h3>
        <p className="text-sm font-medium text-primary">{item.company}</p>
        <p className="text-xs text-text-muted">{item.location}</p>
        <ul className="mt-3 space-y-1.5">
          {item.summary.map((s, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        {item.systems.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.systems.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        ) : null}
        {item.reflection ? (
          <p className="mt-3 border-l-2 border-border pl-3 text-sm italic text-text-muted">
            {item.reflection}
          </p>
        ) : null}
      </div>
    </li>
  );
}
