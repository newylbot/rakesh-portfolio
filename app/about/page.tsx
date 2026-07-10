import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = createMetadata({
  title: "About",
  description: siteConfig.person.altHeadline,
  path: "/about",
});

export default function AboutPage() {
  const a = siteConfig.about;
  return (
    <>
      <Section>
        <SectionHeader eyebrow="About" title="Engineering profile" description={siteConfig.person.altHeadline} />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 text-body-lg text-text-muted lg:col-span-2">
            <p>{a.intro}</p>
            <div>
              <h3 className="text-h3 font-semibold text-text">Why electrical engineering and systems?</h3>
              <p className="mt-2">{a.whyEngineering}</p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold text-text">From industrial learning to software building</h3>
              <p className="mt-2">{a.industrialToSoftware}</p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold text-text">Beyond work</h3>
              <p className="mt-2">{a.beyondWork}</p>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Work principles</h3>
              <ul className="mt-3 space-y-2">
                {a.principles.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-text">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Current focus</h3>
              <ul className="mt-3 space-y-2">
                {a.currentFocus.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-text">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
