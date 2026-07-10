import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "progress" | "planned" | "available" | "neutral";

const tones: Record<Tone, string> = {
  progress: "border-warning text-warning",
  planned: "border-border text-text-muted",
  available: "border-success text-success",
  neutral: "border-border text-text-muted",
};

export function Badge({ tone = "neutral", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-wider",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function toneForStatus(status: string): Tone {
  const s = status.toLowerCase();
  if (s.includes("progress")) return "progress";
  if (s.includes("open") || s.includes("available")) return "available";
  return "planned";
}
