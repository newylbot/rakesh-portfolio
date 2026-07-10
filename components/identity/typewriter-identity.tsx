"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

const roles = [
  "an Electrical Engineering graduate",
  "an Industrial Automation practitioner",
  "a Quality Control engineer",
  "a SCADA and HMI designer",
  "a Software and Simulation builder",
];

/** Types a full role, pauses, deletes it fully, then loops forever. */
export function RoleTypewriter({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [phase, setPhase] = React.useState<"typing" | "hold" | "deleting">("typing");

  React.useEffect(() => {
    if (reduce) { setLength(roles[0].length); return; }
    const role = roles[roleIndex];
    const delay = phase === "hold" ? 1350 : phase === "deleting" ? 32 : 58;
    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        if (length < role.length) setLength((value) => value + 1);
        else setPhase("hold");
      } else if (phase === "hold") {
        setPhase("deleting");
      } else if (length > 0) {
        setLength((value) => value - 1);
      } else {
        setRoleIndex((value) => (value + 1) % roles.length);
        setPhase("typing");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [length, phase, roleIndex, reduce]);

  return (
    <span className={className} aria-label={`I am ${roles[roleIndex]}`}>
      <span aria-hidden="true">I am {roles[roleIndex].slice(0, length)}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

/** Types the resume name once and keeps the exact two-line editorial layout. */
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
      {length < text.length ? <span aria-hidden="true" className="ml-1 inline-block h-[.78em] w-[3px] animate-pulse bg-primary" /> : null}
    </h1>
  );
}
