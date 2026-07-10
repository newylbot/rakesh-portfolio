import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Now",
  "Current focus areas and a dated engineering learning log.",
  "/now"
);

export default function NowPage() {
  const { now } = siteConfig;

  return (
    <Section ariaLabel="Now">
      <SectionHeader
        eyebrow="Now"
        title="What I'm focused on"
        description="An engineering notebook. Entries below are clearly marked starters — replace them with real notes."
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <p className="readout">Current focus</p>
          <ul className="mt-3 space-y-2">
            {now.focus.map((f) => (
              <li key={f} className="text-sm text-text-muted">• {f}</li>
            ))}
          </ul>
        </Card>

        <div className="lg:col-span-2">
          <ol className="relative ml-3 border-l border-border">
            {now.log.map((entry) => (
              <li key={entry.date} className="relative pb-6 pl-6 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border border-border bg-surface" aria-hidden="true" />
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{entry.date}</p>
                <p className="mt-1 text-sm text-text-muted">{entry.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
