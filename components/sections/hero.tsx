import { siteConfig } from "@/content/site-config";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/diagrams/hero-visual";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const { person } = siteConfig;
  return (
    <section className="relative overflow-hidden">
      {/* soft aurora accent */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <Badge tone="progress">{person.availabilityLabel}</Badge>
          <h1 className="mt-5 text-display-lg font-display font-semibold text-text">{person.headline}</h1>
          <p className="mt-5 max-w-xl text-body-lg text-text-muted">{person.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" variant="primary">
              Explore my work <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              <Download className="h-4 w-4" /> Download resume
            </ButtonLink>
          </div>
          <p className="mt-6 font-mono text-xs text-text-muted">{person.availabilityLine}</p>
        </div>
        <div className="animate-fade-up lg:pl-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
