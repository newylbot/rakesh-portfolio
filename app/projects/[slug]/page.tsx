import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { isReal } from "@/lib/utils";

export function generateStaticParams() {
  return siteConfig.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);
  if (!project) return pageMetadata("Case study", "Project case study.");
  return pageMetadata(project.title, project.oneLine, `/projects/${project.slug}`);
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = siteConfig.projects.filter((p) => p.slug !== project.slug);
  const isLumino = project.slug === "lumino-xp";
  const isPlaceholder = project.category === "Placeholder";

  return (
    <Section ariaLabel={`${project.title} case study`}>
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All work
      </Link>

      {/* Hero */}
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <Badge tone={project.status === "In progress" ? "progress" : "planned"}>{project.status}</Badge>
            <span className="readout">{project.category}</span>
          </div>
          <h1 className="mt-4 text-display-lg font-semibold">{project.title}</h1>
          <p className="mt-4 text-body-lg text-text-muted">{project.oneLine}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <dt className="readout">Role</dt>
              <dd className="mt-1 text-sm">Builder / designer [Confirm if needed later]</dd>
            </div>
            <div>
              <dt className="readout">Timeline</dt>
              <dd className="mt-1 text-sm">[Add real dates later]</dd>
            </div>
            <div>
              <dt className="readout">Status</dt>
              <dd className="mt-1 text-sm">{project.status}</dd>
            </div>
            <div>
              <dt className="readout">Stack</dt>
              <dd className="mt-1 text-sm">{project.stack.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            {isReal(project.github) ? (
              <Button href={project.github} external variant="outline">
                <Github className="h-4 w-4" aria-hidden="true" /> Repository
              </Button>
            ) : (
              <span className="inline-flex min-h-[48px] items-center rounded-md border border-dashed border-border px-5 font-mono text-xs text-text-muted">
                Repo link: not added yet
              </span>
            )}
            {isReal(project.demo) ? (
              <Button href={project.demo} external variant="outline">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Demo
              </Button>
            ) : (
              <span className="inline-flex min-h-[48px] items-center rounded-md border border-dashed border-border px-5 font-mono text-xs text-text-muted">
                Demo link: not added yet
              </span>
            )}
          </div>
        </div>

        {/* Prototype panel */}
        <div className="rounded-lg border border-border bg-surface p-4">
          <div className="rounded-md border border-border bg-surface-2 p-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs text-text-muted">candidate dashboard</span>
              <span className="font-mono text-xs text-text-muted">mock</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-2 w-1/2 rounded-full bg-border" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-sm border border-border bg-surface p-3">
                    <div className="h-2 w-3/4 rounded-full bg-border" />
                    <div className="mt-2 h-6 w-full rounded-sm bg-primary/20" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between rounded-sm border border-border bg-surface p-3">
                <span className="font-mono text-xs text-text-muted">active test · timer 24:15</span>
                <span className="font-mono text-xs text-primary">Q 4 / 20</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-xs text-text-muted">Concept UI / planned system view</p>
        </div>
      </div>

      {isPlaceholder ? (
        <div className="mt-12 rounded-md border border-dashed border-border bg-surface/50 p-8 text-center">
          <p className="readout">Reserved</p>
          <p className="mt-3 text-h3 font-medium text-text-muted">This case study hasn&rsquo;t been written yet.</p>
          <p className="mt-2 text-sm text-text-muted">Replace this placeholder with a real, verified build.</p>
        </div>
      ) : (
        <div className="mt-12 space-y-12">
          {isLumino ? (
            <>
              <CaseSection title="Context">
                <p>An online testing system needs clarity, trust, timing discipline, and reliable state handling. Lumino XP explores how to get those fundamentals right before scaling scope.</p>
              </CaseSection>

              <CaseSection title="Intended users">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Candidates taking timed tests</li>
                  <li>Organizers / administrators managing tests</li>
                  <li>Review or operations roles [optional if relevant]</li>
                </ul>
              </CaseSection>

              <CaseSection title="Product scope">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { h: "Current direction", items: ["Core test-taking flow concept", "System & state design thinking"] },
                    { h: "Planned later", items: ["Admin / organizer tooling", "Result & review handling"] },
                    { h: "Not yet claimed", items: ["Production deployment", "Active users / payments / uptime"] },
                  ].map((col) => (
                    <Card key={col.h}>
                      <p className="readout">{col.h}</p>
                      <ul className="mt-3 space-y-1 text-sm text-text-muted">
                        {col.items.map((i) => <li key={i}>• {i}</li>)}
                      </ul>
                    </Card>
                  ))}
                </div>
              </CaseSection>

              <CaseSection title="Planned architecture">
                <ArchitectureDiagram />
              </CaseSection>

              <CaseSection title="Key decisions">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { d: "Backend language direction", alt: "Node, Go, Rust", why: "Interest in Rust for reliability and strong typing", trade: "Steeper learning curve [Confirm specifics later]" },
                    { d: "State-first test flow", alt: "Ad-hoc client state", why: "Timed exams demand predictable, recoverable state", trade: "More upfront design effort" },
                  ].map((k) => (
                    <Card key={k.d}>
                      <p className="font-medium">{k.d}</p>
                      <p className="mt-2 text-sm text-text-muted"><span className="readout">Alternatives</span> {k.alt}</p>
                      <p className="mt-1 text-sm text-text-muted"><span className="readout">Why</span> {k.why}</p>
                      <p className="mt-1 text-sm text-text-muted"><span className="readout">Tradeoff</span> {k.trade}</p>
                    </Card>
                  ))}
                </div>
              </CaseSection>

              <CaseSection title="Build process">
                <ol className="flex flex-wrap gap-2">
                  {["Discovery", "Scope definition", "Architecture planning", "Prototype / implementation", "Validation", "Next iteration"].map((m, i) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-text-muted">{i + 1}. {m}</span>
                    </li>
                  ))}
                </ol>
              </CaseSection>

              <CaseSection title="Screens and states">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Desktop", "Full dashboard and test layout"],
                    ["Tablet", "Condensed navigation, readable question area"],
                    ["Mobile", "Single-column flow, large touch targets"],
                    ["Loading", "Skeleton state while a test session initializes"],
                    ["Empty", "No assigned tests — clear next action"],
                    ["Error", "Recoverable message with retry guidance"],
                  ].map(([state, desc]) => (
                    <div key={state} className="rounded-md border border-border bg-surface p-4">
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">{state}</p>
                      <p className="mt-2 text-sm text-text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection title="Outcomes and learnings">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Clearer product scope and boundaries</li>
                  <li>Stronger architecture thinking</li>
                  <li>Interface-state planning discipline</li>
                  <li>More deliberate technical tradeoff awareness</li>
                </ul>
              </CaseSection>

              <CaseSection title="Next steps">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Add confirmed stack details</li>
                  <li>Add repository link</li>
                  <li>Add prototype screenshots</li>
                  <li>Document the current implementation boundary</li>
                  <li>Define MVP vs later phases</li>
                </ul>
              </CaseSection>
            </>
          ) : null}
        </div>
      )}

      {/* Related + CTA */}
      <div className="mt-16">
        <div className="hairline mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <span className="readout self-center">Related</span>
            {related.map((r) => (
              <Link key={r.slug} href={`/projects/${r.slug}`} className="rounded-sm border border-border px-3 py-1.5 text-sm text-text-muted hover:text-text">
                {r.title}
              </Link>
            ))}
          </div>
          <Button href="/contact" variant="primary">Get in touch</Button>
        </div>
      </div>
    </Section>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-h2 font-semibold">{title}</h2>
      <div className="mt-3 text-body-lg text-text-muted">{children}</div>
    </div>
  );
}
