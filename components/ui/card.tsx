import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-md border border-border bg-surface p-6 shadow-soft",
        // terminal-block corner pins
        "before:absolute before:left-3 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-border before:content-['']",
        "after:absolute after:right-3 after:top-3 after:h-1.5 after:w-1.5 after:rounded-full after:bg-border after:content-['']",
        className
      )}
    >
      {children}
    </Tag>
  );
}
