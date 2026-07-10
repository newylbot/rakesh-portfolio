"use client";

import * as React from "react";

const roles = [
  "an Electrical Engineering graduate",
  "an Industrial Automation practitioner",
  "a Quality Control engineer",
  "a SCADA and HMI designer",
  "a Software and Simulation builder",
];

/** Full-role typing loop: type, pause, erase, advance, repeat forever. */
export function RoleTypewriter({ className = "" }: { className?: string }) {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [phase, setPhase] = React.useState<"typing" | "hold" | "deleting">("typing");

  React.useEffect(() => {
    const role = roles[roleIndex];
    const delay = phase === "hold" ? 1250 : phase === "deleting" ? 30 : 55;
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
  }, [length, phase, roleIndex]);

  return (
    <span className={`block min-h-[2rem] ${className}`} aria-live="polite">
      <span className="font-semibold text-text">Rakesh Kumar Behera</span>
      <span className="mx-2 text-text-muted" aria-hidden="true">-</span>
      <span>I am {roles[roleIndex].slice(0, length)}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

/** One-shot name typing with the approved RAKESH / KUMAR BEHERA layout. */
export function ResumeNameTypewriter() {
  const full = "RAKESH\nKUMAR BEHERA";
  const [length, setLength] = React.useState(0);

  React.useEffect(() => {
    if (length >= full.length) return;
    const timer = window.setTimeout(() => setLength((value) => value + 1), 68);
    return () => window.clearTimeout(timer);
  }, [length, full.length]);

  const shown = full.slice(0, length);
  const newline = shown.indexOf("\n");
  const first = newline >= 0 ? shown.slice(0, newline) : shown;
  const second = newline >= 0 ? shown.slice(newline + 1) : "";

  return (
    <h1 className="min-h-[1.72em] font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.84] tracking-[-.055em] text-text" aria-label="Rakesh Kumar Behera">
      <span aria-hidden="true">{first}</span>
      {newline >= 0 ? <><br /><span aria-hidden="true">{second}</span></> : null}
      {length < full.length ? <span aria-hidden="true" className="ml-1 inline-block h-[.78em] w-[3px] animate-pulse bg-primary" /> : null}
    </h1>
  );
}
