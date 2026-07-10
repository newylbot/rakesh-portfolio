import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

function ProofModule({ label, value, href }: { label: string; value: string; href?: string }) {
  const hasLink = Boolean(href);
  return (
    <Card>
      <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{label}</p>
      {hasLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-primary hover:underline">
          {value || "Open"}
        </a>
      ) : (
        <p className="mt-2 text-sm text-text-muted/70">{value || `[Add ${label} link]`}</p>
      )}
    </Card>
  );
}

export function Proof() {
  const { proof, person } = siteConfig;
  return (
    <Section>
      <SectionHeader eyebrow="Proof / documentation" title="Evidence and write-ups" intro={proof.intro} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProofModule label="GitHub" value={person.github} href={person.github || undefined} />
        <ProofModule label="Resume" value={person.resumeUrl} href={person.resumeUrl || undefined} />
        <ProofModule label="Certificates" value={proof.certificates} href={proof.certificates || undefined} />
        <ProofModule label="Project write-ups" value={proof.writeups} />
      </div>
    </Section>
  );
}
