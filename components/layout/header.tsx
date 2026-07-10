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
    const key = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded focus-visible:ring-2 focus-visible:ring-primary">
          <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.55 }} className="grid h-9 w-9 place-items-center rounded-full bg-text font-mono text-xs font-bold text-bg">RKB</motion.span>
          <span className="hidden leading-tight sm:block">
            <strong className="block font-display text-sm font-semibold text-text">Rakesh Kumar Behera</strong>
            <span className="block font-mono text-[0.58rem] uppercase tracking-[0.13em] text-text-muted">Electrical systems + software</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("relative rounded-md px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-primary", active && "text-text")}>
                {item.label}
                {active ? <motion.span layoutId="active-nav" className="absolute inset-x-3 -bottom-[1.15rem] h-[2px] bg-primary" transition={{ type: "spring", stiffness: 420, damping: 36 }} /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary transition-transform hover:-translate-y-0.5 sm:inline-flex">Let&apos;s talk</Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-border text-text lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <motion.nav initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} aria-label="Mobile" className="border-t border-border bg-bg px-5 py-5 lg:hidden">
          {siteConfig.nav.map((item, index) => <motion.div key={item.href} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}><Link href={item.href} className="block border-b border-border py-3 font-display text-xl text-text">{item.label}</Link></motion.div>)}
        </motion.nav>
      ) : null}
    </header>
  );
}
