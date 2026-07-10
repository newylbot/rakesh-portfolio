"use client";

import * as React from "react";

const sequence = [
  { text: "Rakesh", strong: true, hold: 2000 },
  { text: "Electrical Engineer", strong: false, hold: 1100 },
  { text: "Automation Builder", strong: false, hold: 1100 },
  { text: "Quality Engineer", strong: false, hold: 1100 },
  { text: "SCADA Designer", strong: false, hold: 1100 },
  { text: "Software Builder", strong: false, hold: 1100 },
];

type Phase = "typing" | "holding" | "deleting" | "gap";

export function RoleTypewriter({ className = "" }: { className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("typing");
  const current = sequence[index];

  React.useEffect(() => {
    const delay = phase === "holding" ? current.hold : phase === "deleting" ? 32 : phase === "gap" ? 180 : 60;
    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        if (visible < current.text.length) setVisible((value) => value + 1);
        else setPhase("holding");
      } else if (phase === "holding") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        if (visible > 0) setVisible((value) => value - 1);
        else setPhase("gap");
      } else {
        setIndex((value) => (value + 1) % sequence.length);
        setVisible(0);
        setPhase("typing");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [current.hold, current.text.length, phase, visible]);

  return (
    <span className={`${className} block min-w-0`} aria-live="polite" aria-atomic="true">
      <span className="whitespace-nowrap">I am{" "}<strong className={current.strong ? "font-extrabold text-primary" : "font-semibold text-secondary"}>{current.text.substring(0, visible)}</strong></span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

export function ResumeNameTypewriter() {
  const text = "RAKESH\nKUMAR BEHERA";
  const [visible, setVisible] = React.useState(0);

  React.useEffect(() => {
    if (visible >= text.length) return;
    const timer = window.setTimeout(() => setVisible((value) => value + 1), 72);
    return () => window.clearTimeout(timer);
  }, [text.length, visible]);

  const shown = text.substring(0, visible);
  const [first = "", second = ""] = shown.split("\n");

  return (
    <h1 className="min-h-[1.68em] font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.84] tracking-[-.055em] text-text" aria-label="Rakesh Kumar Behera">
      <span aria-hidden="true">{first}</span>
      {shown.includes("\n") ? <><br /><span aria-hidden="true">{second}</span></> : null}
      <span aria-hidden="true" className="resume-cursor ml-1 inline-block h-[.78em] w-[3px] bg-primary" />
    </h1>
  );
}
