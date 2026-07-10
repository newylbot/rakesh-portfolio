import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative rounded-lg border border-border bg-surface p-6", className)}>
      {children}
    </div>
  );
}
