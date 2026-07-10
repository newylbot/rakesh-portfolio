import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-[48px] text-sm font-medium transition-all duration-200 focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-bg hover:brightness-110 hover:shadow-glow",
  secondary:
    "bg-secondary text-bg hover:brightness-110",
  outline:
    "border border-border bg-transparent text-text hover:bg-surface-2",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-surface-2",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const external = "external" in props && props.external;
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } =
    props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
