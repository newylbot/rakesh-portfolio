"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { siteConfig } from "@/content/site-config";

const roles = ["electrical engineering graduate", "automation practitioner", "quality control engineer", "software and simulation builder"];

export function HomeIdentity() {
  const [role, setRole] = React.useState(0);
  const [letters, setLetters] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) { setLetters(roles[0].length); return; }
    const word = roles[role];
    const done = letters === word.length;
    const empty = letters === 0;
    const delay = done && !deleting ? 1200 : empty && deleting ? 220 : deleting ? 34 : 62;
    const timer = window.setTimeout(() => {
      if (done && !deleting) setDeleting(true);
      else if (empty && deleting) { setDeleting(false); setRole((role + 1) % roles.length); }
      else setLetters((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [letters, deleting, role, reduce]);

  return (
    <section className="relative z-20 border-b border-border bg-bg/75 px-5 py-6 backdrop-blur sm:px-8 sm:py-7">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
        <motion.p initial={reduce ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="font-display text-xl font-bold tracking-[-.02em] text-text sm:text-2xl">{siteConfig.person.name}</motion.p>
        <div className="flex min-h-8 items-center gap-4 overflow-hidden"><span className="hidden h-px w-10 bg-primary sm:block" /><p className="min-w-0 font-mono text-xs uppercase tracking-[.12em] text-text-muted sm:text-sm">I am an <span className="text-primary">{roles[role].slice(0, letters)}</span><span aria-hidden="true" className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" /></p></div>
      </div>
    </section>
  );
}
