import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "progress" | "planned" | "done" | "neutral";

const tones: Record<Tone, string> = {
  progress: "text-accent border-accent/40 bg-accent/10",
  planned: "text-text-muted border-border bg-surface-2",
  done: "text-success border-success/40 bg-success/10",
  neutral: "text-text-muted border-border bg-surface",
};

export function Badge({ children, tone = "neutral", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-xs uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function statusTone(status: string): Tone {
  if (status === "In progress") return "progress";
  if (status === "Completed") return "done";
  return "planned";
}
