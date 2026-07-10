import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-[48px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-bg font-semibold hover:brightness-110 hover:scale-[1.02] shadow-sm",
  secondary:
    "border border-border bg-surface text-text hover:border-primary hover:text-primary",
  ghost: "text-text-muted hover:text-text hover:bg-surface-2",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<ComponentProps<typeof Link>, "href">) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
