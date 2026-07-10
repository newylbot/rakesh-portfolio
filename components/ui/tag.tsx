import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border px-2 py-0.5 font-mono text-xs text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
