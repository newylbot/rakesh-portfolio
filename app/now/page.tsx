import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Now",
  description: "What Rakesh is focused on right now \u2014 a concise engineering notebook.",
  path: "/now",
});

export default function NowPage() {
  const now = siteConfig.now;
  return (
    <Section>
      <SectionHeader
        eyebrow="Now"
        title="What I am focused on"
        description={`A concise engineering notebook. Last updated: ${now.updated}.`}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Current focus</h3>
          <ul className="mt-4 space-y-2">
            {now.focus.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-text">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Log</h3>
          <ol className="mt-4 space-y-4">
            {now.log.map((entry, i) => (
              <li key={i} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{entry.date}</p>
                <p className="mt-2 text-sm text-text-muted">{entry.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
