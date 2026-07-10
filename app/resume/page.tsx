import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { isReal } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Resume",
  "Resume summary: education, experience, skills, and projects.",
  "/resume"
);

export default function ResumePage() {
  const { person, education, experience, skills, projects } = siteConfig;
  const hasPdf = isReal(person.resumeUrl);

  return (
    <Section ariaLabel="Resume">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeader eyebrow="Resume" title={person.name} description={person.role} />
        <div className="no-print flex gap-3">
          {hasPdf ? (
            <Button href={person.resumeUrl} external variant="primary">Download PDF</Button>
          ) : (
            <span className="inline-flex min-h-[48px] items-center rounded-md border border-dashed border-border px-5 font-mono text-xs text-text-muted">
              PDF: not added yet
            </span>
          )}
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-h3 font-semibold">Summary</h2>
          <p className="mt-2 text-body-lg text-text-muted">{person.bio}</p>
        </div>

        <div>
          <h2 className="text-h3 font-semibold">Education</h2>
          <Card className="mt-3">
            <p className="font-medium">{education.degree}</p>
            <p className="text-sm text-text-muted">Institution: {education.institution}</p>
            <p className="text-sm text-text-muted">Completion: {education.completion} · {education.location}</p>
            {education.showCgpa ? (
              <p className="text-sm text-text-muted">CGPA: {education.cgpa}</p>
            ) : null}
          </Card>
        </div>

        <div>
          <h2 className="text-h3 font-semibold">Experience</h2>
          <div className="mt-3 space-y-4">
            {experience.map((e) => (
              <div key={e.company} className="border-l-2 border-border pl-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{e.period} · {e.type}</p>
                <p className="mt-1 font-medium">{e.role} — {e.company}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-text-muted">
                  {e.summary.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-h3 font-semibold">Skills</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Electrical & Industrial", items: skills.electricalIndustrial },
              { label: "Software & Systems", items: skills.softwareSystems },
              { label: "Tools & Workflow", items: skills.toolsWorkflow },
            ].map((g) => (
              <div key={g.label}>
                <p className="readout">{g.label}</p>
                <ul className="mt-2 space-y-1 text-sm text-text-muted">
                  {g.items.map((s) => <li key={s.name}>{s.name} — <span className="font-mono text-xs">{s.level}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-h3 font-semibold">Projects</h2>
          <ul className="mt-3 space-y-2">
            {projects.filter((p) => p.category !== "Placeholder").map((p) => (
              <li key={p.slug} className="text-sm text-text-muted">
                <span className="font-medium text-text">{p.title}</span> ({p.status}) — {p.oneLine}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-h3 font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-text-muted">
            {isReal(person.email) ? person.email : "Email: not added yet"} · {person.location}
          </p>
        </div>
      </div>

      <p className="no-print mt-10 font-mono text-xs text-text-muted">
        Tip: use your browser&rsquo;s Print (Cmd/Ctrl + P) to export this page to A4 PDF.
      </p>
    </Section>
  );
}
