"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { siteConfig } from "@/content/site-config";

const roles = [
  "Electrical Engineering Graduate",
  "Industrial Systems Thinker",
  "Software & Backend Builder",
];

export function HomeIdentity() {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <div className="pointer-events-none absolute left-5 right-5 top-5 z-20 mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 sm:left-8 sm:right-8">
      <motion.p initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} className="font-display text-sm font-bold text-text sm:text-base">
        {siteConfig.person.name}
      </motion.p>
      <span aria-hidden="true" className="h-px w-8 bg-primary" />
      <div className="relative h-5 min-w-[18rem] overflow-hidden font-mono text-[0.65rem] uppercase tracking-[0.15em] text-text-muted">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0"
          >
            I am an {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
