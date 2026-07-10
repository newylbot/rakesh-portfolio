"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("typing");
  const current = sequence[index];

  React.useEffect(() => {
    if (reduce) { setVisible(sequence[0].text.length); setPhase("holding"); return; }
    let delay = 60;
    if (phase === "holding") delay = current.hold;
    if (phase === "deleting") delay = 32;
    if (phase === "gap") delay = 180;

    const timer = window.setTimeout(() => {
      switch (phase) {
        case "typing":
          if (visible < current.text.length) setVisible((value) => value + 1);
          else setPhase("holding");
          break;
        case "holding":
          setPhase("deleting");
          break;
        case "deleting":
          if (visible > 0) setVisible((value) => value - 1);
          else setPhase("gap");
          break;
        case "gap":
          setIndex((value) => (value + 1) % sequence.length);
          setVisible(0);
          setPhase("typing");
          break;
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [current.hold, current.text.length, index, phase, reduce, visible]);

  return (
    <span className={`${className} block min-w-0`} aria-live="polite">
      <span className="whitespace-nowrap">I am {" "}
        <strong className={current.strong ? "font-extrabold text-primary" : "font-semibold text-secondary"}>{current.text.substring(0, visible)}</strong>
      </span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

export function ResumeNameTypewriter() {
  const reduce = useReducedMotion();
  const text = "RAKESH\nKUMAR BEHERA";
  const [visible, setVisible] = React.useState(reduce ? text.length : 0);
  React.useEffect(() => {
    if (reduce || visible >= text.length) return;
    const timer = window.setTimeout(() => setVisible((value) => value + 1), 72);
    return () => window.clearTimeout(timer);
  }, [reduce, text.length, visible]);
  const shown = text.substring(0, visible); const [first="",second=""] = shown.split("\n");
  return <h1 className="font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.84] tracking-[-.055em] text-text" aria-label="Rakesh Kumar Behera"><span aria-hidden="true">{first}</span>{shown.includes("\n")?<><br/><span aria-hidden="true">{second}</span></>:null}<span aria-hidden="true" className="ml-1 inline-block h-[.78em] w-[3px] animate-pulse bg-primary"/></h1>;
}
