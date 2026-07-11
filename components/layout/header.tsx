"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

function ProtectionRelayIdentity() {
  return (
    <svg viewBox="0 0 510 118" className="h-10 w-[9.5rem] overflow-visible sm:w-[10.75rem]" role="img" aria-label="Rakesh">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="7">
          <path d="M8 103V13h48c29 0 45 13 45 35S85 82 56 82H8M55 82l40 25" />
          <path d="M121 103l24-62 25 62M130 82h31" />
          <path d="M190 41v62M190 78l42-37M207 64l31 39" />
          <path d="M257 41v62M257 41h48M257 72h39M257 103h48" />
          <path d="M365 50c-11-11-39-13-48 4-12 23 48 20 47 43-1 19-38 22-55 9" />
          <path d="M390 41v62M449 41v62M390 72h59" />
        </g>
        <rect x="25" y="30" width="49" height="33" rx="4" stroke="oklch(var(--primary))" strokeWidth="2.4" />
        <path d="M32 46c5-12 10 12 15 0s10 12 15 0" stroke="oklch(var(--primary))" strokeWidth="2.4" />
        <path d="M135 91l10-10 10 10-10 10z" stroke="oklch(var(--primary))" strokeWidth="2" />
        <path d="M198 73h14m0-9v18m8-22v26" stroke="oklch(var(--success))" strokeWidth="2" />
        <path d="M270 52c5-9 10 9 15 0M270 92c5-9 10 9 15 0" stroke="oklch(var(--secondary))" strokeWidth="2" />
        <path d="M319 58h13m0-9v18M332 58l16-13M332 58l16 13" stroke="oklch(var(--primary))" strokeWidth="2" />
        <path d="M402 53v13m0 13v13M437 53v13m0 13v13" stroke="oklch(var(--primary))" strokeWidth="2" />
        <path d="M410 72l10-10 10 10-10 10z" stroke="oklch(var(--secondary))" strokeWidth="2" />
        <motion.path d="M8 111H466" stroke="oklch(var(--primary))" strokeWidth="2.5" strokeDasharray="7 13" animate={{ strokeDashoffset: [0, -80] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
      </g>
      {[95, 238, 365, 466].map((cx, index) => (
        <motion.circle key={cx} cx={cx} cy="111" r="3.5" fill={index % 2 ? "oklch(var(--secondary))" : "oklch(var(--primary))"} animate={{ opacity: [.45, 1, .45] }} transition={{ duration: 1.7, repeat: Infinity, delay: index * .18 }} />
      ))}
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="group flex shrink-0 items-center rounded-md focus-visible:ring-2 focus-visible:ring-primary">
          <ProtectionRelayIdentity />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("relative rounded-md px-3 py-3 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text", active && "text-text")}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: .96 }}>
            <Link href="/contact" className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary sm:inline-flex">Let&apos;s talk</Link>
          </motion.div>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-border bg-bg px-5 py-5 lg:hidden">
          {siteConfig.nav.map((item, index) => (
            <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }}>
              <Link href={item.href} className="block border-b border-border py-3 font-display text-xl text-text">{item.label}</Link>
            </motion.div>
          ))}
        </motion.nav>
      ) : null}
    </header>
  );
}
