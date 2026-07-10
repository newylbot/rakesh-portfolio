import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { isReal } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Experience",
  "Industrial internships, automation training, and vocational experience across SACL, CTTC, and SAIL.",
  "/experience"
);

export default function ExperiencePage() {
  const { experience, experienceSynthesis } = siteConfig;

  return (
    <Section ariaLabel="Experience">
      <SectionHeader
        eyebrow="Experience"
        title="A ladder of hands-on learning"
        description="Timeline-first, structured like a control diagram. Evidence links are placeholders until added."
      />

      <ol className="relative ml-3 border-l border-border">
        {experience.map((e) => (
          <li key={e.company} className="relative pb-10 pl-6 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border border-border bg-surface" aria-hidden="true" />
            <Card as="article">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {e.period} · {e.location}
                </p>
                <Badge>{e.type}</Badge>
              </div>
              <h3 className="mt-3 text-h3 font-semibold">{e.role}</h3>
              <p className="text-text-muted">{e.company}</p>

              <ul className="mt-4 space-y-2">
                {e.summary.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-1 text-primary" aria-hidden="true">–</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {e.domains.map((d) => (
                  <span key={d} className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-muted">
                    {d}
                  </span>
                ))}
              </div>

              <p className="mt-4 border-l-2 border-border pl-3 text-sm italic text-text-muted">
                {e.reflection}
              </p>

              <p className="mt-4 font-mono text-xs text-text-muted">
                Evidence: {isReal(e.evidenceUrl) ? (
                  <a href={e.evidenceUrl} target="_blank" rel="noopener noreferrer" className="text-primary">view</a>
                ) : (
                  <span className="opacity-60">not added yet</span>
                )}
              </p>
            </Card>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-md border border-border bg-surface p-6">
        <p className="readout">What this taught me</p>
        <p className="mt-2 text-body-lg text-text-muted">{experienceSynthesis}</p>
      </div>
    </Section>
  );
}
