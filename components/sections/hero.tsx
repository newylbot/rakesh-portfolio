import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/diagrams/hero-visual";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  const p = siteConfig.person;
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <Badge tone="available">{p.availability}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-display-lg font-extrabold text-text">{p.headline}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[62ch] text-body-lg text-text-muted">{p.heroParagraph}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" size="lg">Explore my work</Button>
              <Button href={p.resumeUrl || "/resume"} size="lg" variant="outline">Download resume</Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {p.availabilityLine}
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
