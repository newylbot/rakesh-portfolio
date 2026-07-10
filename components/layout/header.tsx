"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

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
        <Link href="/" className="group flex min-w-0 items-center gap-3 rounded-full focus-visible:ring-2 focus-visible:ring-primary">
          <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-text font-mono text-xs font-bold text-bg">RKB</motion.span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <strong className="block truncate font-display text-base font-semibold text-text">Rakesh Kumar Behera</strong>
            <span className="block truncate font-mono text-[.62rem] uppercase tracking-[.12em] text-text-muted">Electrical engineering / automation / software</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("relative rounded-md px-3 py-3 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text", active && "text-text")}>
                {item.label}
                <span aria-hidden="true" className={cn("absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-primary transition-transform duration-300 ease-out-expo", active ? "scale-x-100" : "scale-x-0")} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: .96 }} transition={{ duration: .2 }}>
            <Link href="/contact" className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary shadow-[0_8px_24px_-14px_oklch(var(--primary)/.8)] sm:inline-flex">Let&apos;s talk</Link>
          </motion.div>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-border bg-bg px-5 py-5 lg:hidden">{siteConfig.nav.map((item, i) => <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .035 }}><Link href={item.href} className="block border-b border-border py-3 font-display text-xl text-text">{item.label}</Link></motion.div>)}</motion.nav> : null}
    </header>
  );
}
