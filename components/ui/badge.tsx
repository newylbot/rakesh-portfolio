import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "progress" | "planned" | "live";

const tones: Record<Tone, string> = {
  neutral: "border-border text-text-muted",
  progress: "border-warning/40 text-warning",
  planned: "border-border text-text-muted",
  live: "border-success/40 text-success",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-xs uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {/* status dot doubles as a non-color cue via the label text */}
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
