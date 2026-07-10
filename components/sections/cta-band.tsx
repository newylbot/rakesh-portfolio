import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { CircuitDivider } from "@/components/diagrams/circuit-divider";
import { Reveal } from "@/components/motion/reveal";

export function CtaBand() {
  const cta = siteConfig.home.finalCta;
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <CircuitDivider className="mx-auto mb-10 max-w-md" />
          <h2 className="mx-auto max-w-2xl text-h1 font-bold text-text">{cta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-text-muted">{cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">Send a message</Button>
            <Button href="/resume" size="lg" variant="outline">View resume</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
