import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-primary text-bg hover:shadow-[0_0_22px_-6px_rgb(var(--primary)/0.8)] hover:-translate-y-0.5",
  secondary: "bg-surface-2 text-text border border-border hover:border-primary",
  outline: "border border-border text-text hover:border-primary hover:text-primary",
  ghost: "text-text-muted hover:text-text hover:bg-surface-2",
};

const sizes = {
  sm: "h-9 px-3 text-meta",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  disabled,
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
