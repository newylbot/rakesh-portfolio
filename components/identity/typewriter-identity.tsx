"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

const identitySequence = [
  { text: "Rakesh", highlighted: true, hold: 2000 },
  { text: "Electrical Engineer", highlighted: false, hold: 1150 },
  { text: "Automation Builder", highlighted: false, hold: 1150 },
  { text: "Quality Engineer", highlighted: false, hold: 1150 },
  { text: "SCADA Designer", highlighted: false, hold: 1150 },
  { text: "Software Builder", highlighted: false, hold: 1150 },
];

/**
 * One stable, single-line identity loop:
 * "I am Rakesh" first, held for two seconds, then concise resume-based roles.
 * Every value types forward, pauses, deletes fully, and advances forever.
 */
export function RoleTypewriter({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [itemIndex, setItemIndex] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [phase, setPhase] = React.useState<"typing" | "hold" | "deleting">("typing");
  const item = identitySequence[itemIndex];

  React.useEffect(() => {
    if (reduce) { setLength(identitySequence[0].text.length); return; }
    const delay = phase === "hold" ? item.hold : phase === "deleting" ? 34 : 64;
    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        if (length < item.text.length) setLength((value) => value + 1);
        else setPhase("hold");
      } else if (phase === "hold") {
        setPhase("deleting");
      } else if (length > 0) {
        setLength((value) => value - 1);
      } else {
        setItemIndex((value) => (value + 1) % identitySequence.length);
        setPhase("typing");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [length, phase, itemIndex, item.hold, item.text.length, reduce]);

  return (
    <span className={`${className} block min-w-0`} aria-live="polite" aria-label={`I am ${item.text}`}>
      <span aria-hidden="true" className="whitespace-nowrap">I am {" "}
        <strong className={item.highlighted ? "font-extrabold text-primary" : "font-semibold text-secondary"}>
          {item.text.slice(0, length)}
        </strong>
      </span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

/** Types the resume name once, preserves the previous two-line layout, then blinks forever. */
export function ResumeNameTypewriter() {
  const reduce = useReducedMotion();
  const text = "RAKESH\nKUMAR BEHERA";
  const [length, setLength] = React.useState(reduce ? text.length : 0);

  React.useEffect(() => {
    if (reduce || length >= text.length) return;
    const timer = window.setTimeout(() => setLength((value) => value + 1), 72);
    return () => window.clearTimeout(timer);
  }, [length, reduce, text.length]);

  const shown = text.slice(0, length);
  const [first = "", second = ""] = shown.split("\n");
  return (
    <h1 className="font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.84] tracking-[-.055em] text-text" aria-label="Rakesh Kumar Behera">
      <span aria-hidden="true">{first}</span>
      {shown.includes("\n") ? <><br /><span aria-hidden="true">{second}</span></> : null}
      <span aria-hidden="true" className="ml-1 inline-block h-[.78em] w-[3px] animate-pulse bg-primary" />
    </h1>
  );
}
