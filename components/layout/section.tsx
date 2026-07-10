import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24", className)}>
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
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-h2 font-semibold text-text">{title}</h2>
      {description ? <p className="mt-3 text-body-lg text-text-muted">{description}</p> : null}
    </div>
  );
}
