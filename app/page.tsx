import Link from "next/link";
import { ArrowRight, Github, FileText, Award, FileCode } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/cards/project-card";
import { CircuitVisual } from "@/components/diagrams/circuit-visual";
import { siteConfig } from "@/content/site-config";
import { isReal } from "@/lib/utils";

export default function HomePage() {
  const { person, credibility, approach, experience, skills, projects } = siteConfig;

  return (
    <>
      {/* Hero */}
      <Section className="pt-12 sm:pt-16" ariaLabel="Introduction">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-sm border border-success/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              {person.availability}
            </span>
            <h1 className="mt-6 text-display-lg font-semibold">{person.headline}</h1>
            <p className="mt-5 max-w-xl text-body-lg text-text-muted">
              {person.supportingParagraph}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" variant="primary">
                Explore my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/resume" variant="outline">
                Download resume
              </Button>
            </div>
            <p className="mt-6 font-mono text-sm text-text-muted">{person.availabilityLine}</p>
          </div>
          <div className="animate-fade-up">
            <CircuitVisual />
          </div>
        </div>
      </Section>

      {/* Credibility strip */}
      <div className="border-y border-border bg-surface/40">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 sm:px-8">
          {credibility.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">{item}</span>
              {i < credibility.length - 1 ? (
                <span className="hidden h-3 w-px bg-border sm:inline" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </div>
      </div>

      {/* Selected work */}
      <Section ariaLabel="Selected work">
        <SectionHeader
          eyebrow="Selected work"
          title="Work I can stand behind"
          description="A featured build in progress, with room reserved for verified case studies — no filler projects."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View all work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Engineering approach */}
      <Section ariaLabel="Engineering approach">
        <SectionHeader eyebrow="Approach" title="How I work" />
        <div className="grid gap-6 md:grid-cols-3">
          {approach.map((a, i) => (
            <Card key={a.title}>
              <p className="readout">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-h3 font-semibold">{a.title}</h3>
              <p className="mt-2 text-text-muted">{a.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience preview — ladder-logic rail */}
      <Section ariaLabel="Experience preview">
        <SectionHeader eyebrow="Experience" title="Where I've worked and learned" />
        <ol className="relative ml-3 border-l border-border">
          {experience.slice(0, 4).map((e) => (
            <li key={e.company} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border border-border bg-surface" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {e.period} · {e.type}
              </p>
              <p className="mt-1 font-medium">
                {e.role} — <span className="text-text-muted">{e.company}</span>
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Full experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Skills preview */}
      <Section ariaLabel="Skills preview">
        <SectionHeader eyebrow="Skills" title="Honest skill framing" description="Context labels instead of made-up percentages." />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Electrical & Industrial", items: skills.electricalIndustrial },
            { label: "Software & Systems", items: skills.softwareSystems },
            { label: "Tools & Workflow", items: skills.toolsWorkflow },
          ].map((group) => (
            <Card key={group.label}>
              <h3 className="text-h3 font-semibold">{group.label}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((s) => (
                  <li key={s.name} className="flex items-start justify-between gap-3">
                    <span className="text-sm">{s.name}</span>
                    <span className="shrink-0 font-mono text-xs text-text-muted">{s.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/skills" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            All skills
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Proof / documentation */}
      <Section ariaLabel="Proof and documentation">
        <SectionHeader eyebrow="Proof" title="Documentation & links" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "GitHub", value: person.github, Icon: Github },
            { label: "Resume", value: person.resumeUrl, Icon: FileText },
            { label: "Certificates", value: "", Icon: Award },
            { label: "Project write-ups", value: "/projects", Icon: FileCode, internal: true },
          ].map(({ label, value, Icon, internal }) => {
            const real = isReal(value);
            const content = (
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-text-muted" aria-hidden="true" />
                <span className="font-medium">{label}</span>
              </span>
            );
            return (
              <div key={label} className="rounded-md border border-border bg-surface p-5">
                {real ? (
                  internal ? (
                    <Link href={value} className="block hover:text-primary">{content}</Link>
                  ) : (
                    <a href={value} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">{content}</a>
                  )
                ) : (
                  <div className="opacity-60">
                    {content}
                    <p className="mt-2 font-mono text-xs text-text-muted">Not added yet</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Final CTA */}
      <Section ariaLabel="Get in touch">
        <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-8 sm:p-12">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <h2 className="text-h1 font-semibold">Have a system worth improving?</h2>
          <p className="mt-3 max-w-xl text-body-lg text-text-muted">
            Invite recruiters, engineering teams, and collaborators to connect around dependable, systems-oriented work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Send a message</Button>
            <Button href="/resume" variant="outline">View resume</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
