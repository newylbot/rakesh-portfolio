"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CircuitBoard, Cpu, Gauge, Radio } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const ease = [0.16, 1, 0.3, 1] as const;

function PointerFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 38, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 500, damping: 38, mass: 0.35 });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-primary/70 mix-blend-multiply md:block dark:mix-blend-screen"
      style={{ x: sx, y: sy }}
    />
  );
}

function SignalField() {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-border bg-text text-bg shadow-[0_30px_80px_-40px_oklch(var(--text)/0.55)]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(oklch(var(--bg)/.18)_1px,transparent_1px),linear-gradient(90deg,oklch(var(--bg)/.18)_1px,transparent_1px)] [background-size:42px_42px]" />
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.path
          d="M36 310 C100 310 104 140 178 140 S245 370 318 300 S400 120 466 205"
          fill="none"
          stroke="oklch(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.1, ease, delay: 0.35 }}
        />
        <motion.path
          d="M36 230 C105 155 128 350 210 250 S315 175 466 290"
          fill="none"
          stroke="oklch(var(--secondary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 2.8, ease, delay: 0.65 }}
        />
        {[ [178,140], [318,300], [400,154] ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r="7"
            fill="oklch(var(--primary))"
            animate={reduce ? undefined : { r: [5, 9, 5], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.42 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-[47%] top-[46%] h-24 w-24 rounded-full border border-bg/30"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="absolute left-[34%] top-[33%] h-44 w-44 rounded-full border border-dashed border-bg/15"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute left-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-bg/60">
        live signal map
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bg/50">channel 01</p>
          <p className="mt-1 font-display text-2xl font-semibold text-bg">SYSTEM / ACTIVE</p>
        </div>
        <Radio className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
    </div>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
      <span className="text-primary">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span>{children}</span>
    </div>
  );
}

function Marquee() {
  const items = siteConfig.home.credibility;
  return (
    <div className="overflow-hidden border-y border-border bg-text py-4 text-bg">
      <motion.div
        className="flex w-max items-center gap-10 pr-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em]">{item}</span>
            <span className="h-2 w-2 rotate-45 bg-primary" aria-hidden="true" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function LuminoInterface() {
  const reduce = useReducedMotion();
  return (
    <div className="relative min-h-[27rem] overflow-hidden rounded-[1.6rem] bg-text p-5 text-bg sm:p-8">
      <motion.div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary/30"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex items-center justify-between border-b border-bg/15 pb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bg/55">
        <span>concept interface</span><span className="text-primary">in progress</span>
      </div>
      <div className="relative mt-8 grid gap-6 sm:grid-cols-[1fr_10rem]">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bg/50">Question 08 / 20</p>
          <h3 className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight">Which control principle keeps a system stable under changing load?</h3>
          <div className="mt-7 space-y-2.5">
            {["Open-loop gain", "Negative feedback", "Signal isolation", "Manual override"].map((option, i) => (
              <motion.div
                key={option}
                className={`rounded-md border px-4 py-3 text-sm ${i === 1 ? "border-primary bg-primary text-on-primary" : "border-bg/15 text-bg/65"}`}
                animate={i === 1 && !reduce ? { x: [0, 3, 0] } : undefined}
                transition={{ duration: 2.8, repeat: Infinity }}
              >
                <span className="mr-3 font-mono text-xs opacity-60">0{i + 1}</span>{option}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="border-t border-bg/15 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bg/50">remaining</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums">29:14</p>
          <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className={`aspect-square rounded-sm ${i < 5 ? "bg-primary" : "border border-bg/20"}`}
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035, ease }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnimatedHome() {
  const p = siteConfig.person;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 24, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 110]);
  const reduce = useReducedMotion();

  return (
    <div className="overflow-clip">
      <PointerFollower />
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-primary" style={{ scaleX: progress }} />

      <section className="relative min-h-[calc(100svh-4rem)] px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <motion.div aria-hidden="true" className="pointer-events-none absolute right-[6vw] top-[8vh] font-display text-[32vw] font-black leading-none text-text/[0.025]" style={{ y: reduce ? 0 : heroY }}>
          R
        </motion.div>
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="relative z-10">
            <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-success" /></span>
              {p.availability}
            </motion.div>
            <div className="overflow-hidden">
              <motion.p initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.05 }} className="font-display text-[clamp(3.1rem,7.4vw,7rem)] font-extrabold leading-[0.87] tracking-[-0.055em] text-text">
                SYSTEMS,
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.15 }} className="font-display text-[clamp(3.1rem,7.4vw,7rem)] font-extrabold leading-[0.87] tracking-[-0.055em] text-primary">
                MADE RELIABLE.
              </motion.p>
            </div>
            <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.35 }} className="mt-8 max-w-[60ch] text-body-lg text-text-muted">
              {p.heroParagraph}
            </motion.p>
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.48 }} className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex min-h-12 items-center gap-3 rounded-md bg-primary px-6 font-medium text-on-primary transition-transform duration-200 hover:-translate-y-1 active:translate-y-0">
                Explore work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
              </Link>
              <Link href="/resume" className="inline-flex min-h-12 items-center rounded-md border border-border px-6 font-medium text-text transition hover:border-primary hover:text-primary">View resume</Link>
            </motion.div>
          </div>
          <motion.div initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, ease, delay: 0.2 }} className="relative z-10 flex justify-center lg:justify-end">
            <SignalField />
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel index="01">Selected system</SectionLabel>
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease }}>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Product concept / backend systems</span>
            <h2 className="mt-4 font-display text-h1 font-bold text-text">Lumino XP</h2>
            <p className="mt-5 max-w-[48ch] text-body-lg text-text-muted">{siteConfig.projects[0].oneLine}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {siteConfig.projects[0].stack.map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted">{item}</span>)}
            </div>
            <Link href="/projects/lumino-xp" className="group mt-9 inline-flex items-center gap-3 font-medium text-text underline decoration-primary underline-offset-8">
              Open case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease }}>
            <LuminoInterface />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionLabel index="02">Operating principles</SectionLabel>
          <div className="divide-y divide-border border-y border-border">
            {siteConfig.home.approach.map((item, index) => {
              const icons = [Gauge, CircuitBoard, Cpu];
              const Icon = icons[index] || CircuitBoard;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.65, ease, delay: index * 0.08 }} className="group grid gap-4 py-8 sm:grid-cols-[5rem_1fr_1fr] sm:items-center">
                  <span className="font-mono text-sm text-primary">0{index + 1}</span>
                  <h3 className="font-display text-h2 font-semibold text-text transition-transform duration-300 group-hover:translate-x-2">{item.title}</h3>
                  <p className="max-w-[46ch] text-text-muted">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel index="03">Field log</SectionLabel>
        <div className="relative">
          <motion.div className="absolute bottom-0 left-[0.35rem] top-0 w-px origin-top bg-primary sm:left-[10.5rem]" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
          <ol className="space-y-12">
            {siteConfig.experience.map((item, index) => (
              <motion.li key={item.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.65, ease, delay: index * 0.06 }} className="relative grid gap-2 pl-8 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-0">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-bg sm:left-[10.16rem]" />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">{item.period}</p>
                <div className="sm:pl-8">
                  <h3 className="font-display text-xl font-semibold text-text">{item.role}</h3>
                  <p className="mt-1 text-primary">{item.company}</p>
                  <p className="mt-3 max-w-[62ch] text-sm text-text-muted">{item.reflection}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-on-primary sm:px-8 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }} className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">04 / connection</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.045em]">HAVE A SYSTEM WORTH IMPROVING?</h2>
            <Link href="/contact" className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-text text-bg transition-transform duration-300 hover:rotate-[-12deg] hover:scale-110 sm:h-24 sm:w-24" aria-label="Contact Rakesh">
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
