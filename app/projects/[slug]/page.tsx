import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site-config";
import { luminoXp } from "@/content/case-studies/lumino-xp";
import { createMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge, toneForStatus } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return siteConfig.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);
  return createMetadata({
    title: project ? project.title : "Project",
    description: project?.oneLine,
    path: `/projects/${params.slug}`,
  });
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-border py-10">
      <h2 className="mb-4 text-h2 font-semibold text-text">{title}</h2>
      {children}
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  if (project.slug !== "lumino-xp") {
    return (
      <>
        <Section>
          <SectionHeader eyebrow="Case study" title={project.title} description={project.oneLine} />
          <Card>
            <Badge tone="planned">{project.status}</Badge>
            <p className="mt-4 text-body-lg text-text-muted">
              This is a reserved project slot. A full case study will appear here once a verified build is ready.
            </p>
            <div className="mt-6">
              <Button href="/projects" variant="outline">Back to projects</Button>
            </div>
          </Card>
        </Section>
        <CtaBand />
      </>
    );
  }

  const cs = luminoXp;
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Badge tone={toneForStatus(cs.status)}>{cs.status}</Badge>
            <h1 className="mt-4 text-display-lg font-semibold text-text">{cs.title}</h1>
            <p className="mt-4 text-body-lg text-text-muted">{cs.oneLine}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {cs.quickFacts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm text-text">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {cs.links.github ? (
                <Button href={cs.links.github} target="_blank" variant="outline">GitHub</Button>
              ) : (
                <span className="font-mono text-xs text-text-muted">GitHub link: to be added</span>
              )}
              {cs.links.demo ? (
                <Button href={cs.links.demo} target="_blank" variant="outline">Demo</Button>
              ) : (
                <span className="font-mono text-xs text-text-muted">Demo: not available</span>
              )}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated">
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="font-mono text-xs text-text-muted">candidate / active test</span>
                <span className="font-mono text-xs text-warning">29:14</span>
              </div>
              <div className="space-y-4 p-5">
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-2/5 rounded-full bg-primary" />
                </div>
                <p className="text-sm font-medium text-text">Question 8 of 20 (mock content)</p>
                <div className="space-y-2">
                  {["Option A", "Option B", "Option C", "Option D"].map((o, i) => (
                    <div
                      key={o}
                      className={
                        "rounded-md border px-3 py-2 text-sm " +
                        (i === 1 ? "border-primary text-text" : "border-border text-text-muted")
                      }
                    >
                      {o}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-mono text-xs text-text-muted">Prev</span>
                  <span className="font-mono text-xs text-primary">Next</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center font-mono text-xs text-text-muted">Concept UI / planned system view</p>
          </div>
        </div>

        <Block title="Context">
          <p className="max-w-3xl text-body-lg text-text-muted">{cs.context}</p>
        </Block>

        <Block title="Intended users">
          <ul className="flex flex-wrap gap-2">
            {cs.intendedUsers.map((u) => (
              <Tag key={u}>{u}</Tag>
            ))}
          </ul>
        </Block>

        <Block title="Product scope">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-success">Current direction</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                {cs.scope.current.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-warning">Planned later</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                {cs.scope.planned.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">Not yet claimed</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                {cs.scope.notClaimed.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Card>
          </div>
        </Block>

        <Block title="Planned architecture">
          <div className="max-w-xl">
            <ArchitectureDiagram />
          </div>
        </Block>

        <Block title="Key decisions">
          <div className="grid gap-4 md:grid-cols-2">
            {cs.decisions.map((d) => (
              <Card key={d.decision}>
                <p className="text-sm font-semibold text-text">{d.decision}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-text-muted">Alternatives</dt><dd className="text-text-muted">{d.alternatives}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-text-muted">Why</dt><dd className="text-text-muted">{d.why}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-text-muted">Tradeoff</dt><dd className="text-text-muted">{d.tradeoff}</dd></div>
                </dl>
              </Card>
            ))}
          </div>
        </Block>

        <Block title="Build process">
          <ol className="flex flex-wrap gap-2">
            {cs.buildProcess.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-border px-3 py-1.5 text-sm text-text">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span> {step}
                </span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Screens and states">
          <div className="grid gap-4 sm:grid-cols-2">
            {cs.screens.map((s) => (
              <Card key={s.name}>
                <p className="text-sm font-semibold text-text">{s.name}</p>
                <p className="mt-2 text-sm text-text-muted"><span className="text-text">Sees:</span> {s.sees}</p>
                <p className="mt-1 text-sm text-text-muted"><span className="text-text">Next:</span> {s.action}</p>
              </Card>
            ))}
          </div>
        </Block>

        <Block title="Outcomes and learnings">
          <ul className="grid gap-2 sm:grid-cols-2">
            {cs.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm text-text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Next steps">
          <ul className="space-y-2">
            {cs.nextSteps.map((n) => (
              <li key={n} className="flex gap-2 text-sm text-text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Block>
      </Section>
      <CtaBand />
    </>
  );
}
