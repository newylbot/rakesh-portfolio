import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
