import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-h2 font-bold text-text">{title}</h2>
      {description ? <p className="mt-4 max-w-[60ch] text-body-lg text-text-muted">{description}</p> : null}
    </Reveal>
  );
}
