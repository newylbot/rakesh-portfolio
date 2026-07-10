"use client";

import * as React from "react";

const sequence = [
  { text: "Rakesh", strong: true, hold: 2000 },
  { text: "Electrical Engineer", strong: false, hold: 1100 },
  { text: "Automation Builder", strong: false, hold: 1100 },
  { text: "Quality Engineer", strong: false, hold: 1100 },
  { text: "SCADA Designer", strong: false, hold: 1100 },
  { text: "Software Builder", strong: false, hold: 1100 },
] as const;

const wait = (duration: number) => new Promise<void>((resolve) => window.setTimeout(resolve, duration));

export function RoleTypewriter({ className = "" }: { className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let active = true;

    async function run() {
      let nextIndex = 0;
      while (active) {
        const item = sequence[nextIndex];
        setIndex(nextIndex);

        for (let length = 1; active && length <= item.text.length; length += 1) {
          setText(item.text.slice(0, length));
          await wait(60);
        }
        if (!active) return;
        await wait(item.hold);

        for (let length = item.text.length - 1; active && length >= 0; length -= 1) {
          setText(item.text.slice(0, length));
          await wait(32);
        }
        if (!active) return;
        await wait(180);
        nextIndex = (nextIndex + 1) % sequence.length;
      }
    }

    void run();
    return () => { active = false; };
  }, []);

  const current = sequence[index];
  return (
    <span className={`${className} block min-w-0`} aria-label={`I am ${current.text}`}>
      <span aria-hidden="true" className="whitespace-nowrap">
        I am{" "}
        <strong className={current.strong ? "font-extrabold text-primary" : "font-semibold text-secondary"}>
          {text}
        </strong>
      </span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

export function ResumeNameTypewriter() {
  const fullText = "RAKESH\nKUMAR BEHERA";
  const [visible, setVisible] = React.useState(0);

  React.useEffect(() => {
    let active = true;
    let length = 0;

    const typeNext = () => {
      if (!active || length >= fullText.length) return;
      length += 1;
      setVisible(length);
      window.setTimeout(typeNext, 72);
    };

    const start = window.setTimeout(typeNext, 220);
    return () => {
      active = false;
      window.clearTimeout(start);
    };
  }, [fullText.length]);

  const shown = fullText.slice(0, visible);
  const [first = "", second = ""] = shown.split("\n");

  return (
    <h1 className="min-h-[1.68em] font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.84] tracking-[-.055em] text-text" aria-label="Rakesh Kumar Behera">
      <span aria-hidden="true">{first}</span>
      {shown.includes("\n") ? <><br /><span aria-hidden="true">{second}</span></> : null}
      <span aria-hidden="true" className="ml-1 inline-block h-[.78em] w-[3px] animate-pulse bg-primary" />
    </h1>
  );
}
