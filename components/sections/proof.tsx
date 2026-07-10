import type { ReactNode } from "react";
import { Github, FileText, Award, BookOpen } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

function Module({
  icon,
  label,
  href,
  fallback,
}: {
  icon: ReactNode;
  label: string;
  href: string;
  fallback: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-text">{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">
            Open
          </a>
        ) : (
          <p className="font-mono text-xs text-text-muted">{fallback}</p>
        )}
      </div>
    </div>
  );
}

export function Proof() {
  const p = siteConfig.person;
  const mods = [
    { icon: <Github className="h-5 w-5" aria-hidden="true" />, label: "GitHub", href: p.github, fallback: "Add GitHub link" },
    { icon: <FileText className="h-5 w-5" aria-hidden="true" />, label: "Resume", href: p.resumeUrl, fallback: "Add resume PDF" },
    { icon: <Award className="h-5 w-5" aria-hidden="true" />, label: "Certificates", href: "", fallback: "Add if available" },
    { icon: <BookOpen className="h-5 w-5" aria-hidden="true" />, label: "Project write-ups", href: "/projects", fallback: "See projects" },
  ];
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="Proof" title="Documentation and links" />
      <div className="grid gap-4 sm:grid-cols-2">
        {mods.map((m, i) => (
          <Reveal key={m.label} delay={i * 70}>
            <Module icon={m.icon} label={m.label} href={m.href} fallback={m.fallback} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
