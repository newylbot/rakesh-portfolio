import { siteConfig } from "@/content/site-config";
import { ButtonLink } from "@/components/ui/button";

export function CtaBand() {
  const { finalCta } = siteConfig;
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-elevated">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/10 blur-[100px]" />
      </div>
      <div className="container-content relative py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-h1 font-display font-semibold text-text">{finalCta.headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-body-lg text-text-muted">{finalCta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact" variant="primary">Send a message</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">View resume</ButtonLink>
        </div>
      </div>
    </section>
  );
}
