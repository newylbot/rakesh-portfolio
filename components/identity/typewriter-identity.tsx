"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const roleLines = [
  "an Electrical Engineering graduate",
  "an Industrial Automation practitioner",
  "a Quality Control engineer",
  "a SCADA and HMI designer",
  "a Software and Simulation builder",
];

function useTypewriter(lines: string[], enabled = true) {
  const [line, setLine] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!enabled) { setCount(lines[0].length); return; }
    const text = lines[line];
    const complete = count === text.length;
    const empty = count === 0;
    const delay = complete && !deleting ? 1350 : empty && deleting ? 220 : deleting ? 34 : 58;
    const timer = window.setTimeout(() => {
      if (complete && !deleting) setDeleting(true);
      else if (empty && deleting) { setDeleting(false); setLine((line + 1) % lines.length); }
      else setCount((value) => Math.max(0, Math.min(text.length, value + (deleting ? -1 : 1))));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [count, deleting, line, lines, enabled]);

  return enabled ? lines[line].slice(0, count) : lines[0];
}

export function TypewriterIdentity({ large = false }: { large?: boolean }) {
  const reduce = useReducedMotion();
  const [nameCount, setNameCount] = React.useState(reduce ? "Rakesh Kumar Behera".length : 0);
  const name = "Rakesh Kumar Behera";

  React.useEffect(() => {
    if (reduce || nameCount >= name.length) return;
    const timer = window.setTimeout(() => setNameCount((value) => value + 1), 72);
    return () => window.clearTimeout(timer);
  }, [nameCount, reduce]);

  const role = useTypewriter(roleLines, !reduce && nameCount >= name.length);

  return (
    <div className={large ? "min-h-[9rem]" : "min-h-[3.25rem]"}>
      <p className={large ? "font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[.88] tracking-[-.055em] text-text" : "font-display text-lg font-bold tracking-[-.02em] text-text sm:text-xl"}>
        {name.slice(0, nameCount)}
        {nameCount < name.length ? <span aria-hidden="true" className="ml-1 inline-block h-[.85em] w-[3px] animate-pulse bg-primary" /> : null}
      </p>
      {nameCount >= name.length ? (
        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={large ? "mt-5 font-mono text-sm uppercase tracking-[.13em] text-text-muted sm:text-base" : "mt-1 font-mono text-[.62rem] uppercase tracking-[.11em] text-text-muted sm:text-xs"}>
          I am {role}<span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
        </motion.p>
      ) : null}
    </div>
  );
}
