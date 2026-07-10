import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24", className)}
    >
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
      {eyebrow ? <p className="readout mb-3">{eyebrow}</p> : null}
      <h2 className="text-h2 font-semibold tracking-tight">{title}</h2>
      {description ? (
        <p className="mt-3 text-body-lg text-text-muted">{description}</p>
      ) : null}
    </div>
  );
}
