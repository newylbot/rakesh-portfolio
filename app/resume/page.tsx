import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/print-button";

export const metadata = createMetadata({
  title: "Resume",
  description: "Resume of Rakesh Kumar Behera \u2014 education, experience, skills, and projects.",
  path: "/resume",
});

export default function ResumePage() {
  const { person, education, experience, skills, projects, resume } = siteConfig;
  const allSkills = [...skills.electricalIndustrial, ...skills.softwareSystems, ...skills.toolsWorkflow];

  return (
    <Section>
      <SectionHeader eyebrow="Resume" title={person.name} description={person.role} />

      <div className="mb-10 flex flex-wrap items-center gap-3">
        {person.resumeUrl ? (
          <Button href={person.resumeUrl} target="_blank">Download PDF</Button>
        ) : (
          <span className="rounded-md border border-dashed border-border px-4 py-2.5 font-mono text-xs text-text-muted">
            PDF: add person.resumeUrl in content/site-config.ts
          </span>
        )}
        <PrintButton />
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-h3 font-semibold text-text">Summary</h2>
          <p className="mt-2 max-w-3xl text-body text-text-muted">{person.bio}</p>
          <p className="mt-1 text-sm text-text-muted">{resume.note}</p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text">Education</h2>
          <Card className="mt-3">
            <p className="text-sm font-semibold text-text">{education.degree}</p>
            <p className="mt-1 text-sm text-text-muted">{education.institution} · {education.location}</p>
            <p className="mt-1 font-mono text-xs text-text-muted">Completion: {education.completion}</p>
            {education.showCgpa ? (
              <p className="mt-1 font-mono text-xs text-text-muted">CGPA: {education.cgpa}</p>
            ) : null}
          </Card>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text">Experience</h2>
          <div className="mt-3 space-y-4">
            {experience.filter((e) => e.type !== "Education").map((e) => (
              <Card key={e.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-text">{e.role} — {e.company}</p>
                  <p className="font-mono text-xs text-text-muted">{e.period}</p>
                </div>
                <p className="text-xs text-text-muted">{e.location} · {e.type}</p>
                <ul className="mt-2 space-y-1">
                  {e.summary.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-muted">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {allSkills.map((s) => (
              <Tag key={s.name}>{s.name} · {s.level}</Tag>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text">Projects</h2>
          <div className="mt-3 space-y-3">
            {projects.filter((p) => !p.placeholder).map((p) => (
              <Card key={p.slug}>
                <p className="text-sm font-semibold text-text">{p.title} — <span className="text-text-muted">{p.status}</span></p>
                <p className="mt-1 text-sm text-text-muted">{p.oneLine}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text">Contact</h2>
          <ul className="mt-3 space-y-1 text-sm text-text-muted">
            <li>Location: {person.location}</li>
            <li>Email: {person.email || "[add email in content/site-config.ts]"}</li>
            <li>GitHub: {person.github || "[add link]"}</li>
            <li>LinkedIn: {person.linkedin || "[add link]"}</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
