import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-border bg-surface p-6 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}

// Terminal-block style corner pins, used to give cards an instrumentation feel.
export function ConnectorPins() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-border" />
      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-border" />
      <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full border border-border" />
      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full border border-border" />
    </span>
  );
}
