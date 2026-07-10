import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/diagrams/hero-visual";

export function Hero() {
  const p = siteConfig.person;
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="fade-up">
          <Badge tone="available">{p.availability}</Badge>
          <h1 className="mt-6 text-display-lg font-semibold text-text">{p.headline}</h1>
          <p className="mt-5 max-w-xl text-body-lg text-text-muted">{p.heroParagraph}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" size="lg">Explore my work</Button>
            <Button href={p.resumeUrl || "/resume"} size="lg" variant="outline">Download resume</Button>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-text-muted">{p.availabilityLine}</p>
        </div>
        <div className="fade-up">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
