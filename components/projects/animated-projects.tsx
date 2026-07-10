"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, LockKeyhole, Radio, TimerReset } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const ease = [0.16, 1, 0.3, 1] as const;

function SignalCanvas() {
  const reduce = useReducedMotion();
  const nodes = [
    [58, 96], [144, 62], [226, 126], [312, 46], [398, 112], [462, 68],
  ];
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] bg-text text-bg lg:min-h-[34rem]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(oklch(var(--bg)/.2)_1px,transparent_1px),linear-gradient(90deg,oklch(var(--bg)/.2)_1px,transparent_1px)] [background-size:36px_36px]" />
      <svg viewBox="0 0 520 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.path
          d="M30 270 H90 V92 H144 V190 H226 V126 H312 V224 H398 V112 H490"
          fill="none"
          stroke="oklch(var(--primary))"
          strokeWidth="3"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease, delay: 0.25 }}
        />
        <motion.path
          d="M30 310 C110 310 90 210 160 210 S230 300 290 250 S390 160 490 210"
          fill="none"
          stroke="oklch(var(--secondary))"
          strokeWidth="2"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3.1, ease, delay: 0.55 }}
        />
        {nodes.map(([cx, cy], i) => (
          <motion.g key={i}>
            <motion.circle
              cx={cx}
              cy={cy}
              r="11"
              fill="none"
              stroke="oklch(var(--primary) / .38)"
              animate={reduce ? undefined : { r: [8, 17, 8], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            />
            <circle cx={cx} cy={cy} r="4" fill="oklch(var(--primary))" />
          </motion.g>
        ))}
      </svg>

      <motion.div
        className="absolute right-8 top-8 h-28 w-28 rounded-full border border-bg/20"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-primary" />
      </motion.div>

      <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bg/55">
        <Radio className="h-3.5 w-3.5 text-primary" /> live architecture sketch
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-bg/50">
        <span>client</span><span className="text-center">api</span><span className="text-right">storage</span>
      </div>
    </div>
  );
}

function ConceptPanel() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-5 overflow-hidden rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-text-muted">
        <span>candidate console / mock</span>
        <span className="inline-flex items-center gap-1.5 text-primary"><TimerReset className="h-3 w-3" /> 29:14</span>
      </div>
      <div className="mt-5 flex items-end gap-2">
        {[42, 68, 51, 86, 62, 94, 73, 100, 58, 82, 46, 70].map((height, index) => (
          <motion.span
            key={index}
            className="block flex-1 rounded-t-sm bg-primary"
            style={{ height }}
            initial={reduce ? false : { scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: index < 8 ? 1 : 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.04, ease }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.span
            key={index}
            className={`h-9 rounded-md border ${index === 4 ? "border-primary bg-primary" : "border-border"}`}
            animate={!reduce && index === 4 ? { scale: [1, 1.04, 1] } : undefined}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

export function AnimatedProjects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 25 });
  const titleY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const project = siteConfig.projects[0];
  const reserved = siteConfig.projects.slice(1);
  const reduce = useReducedMotion();

  return (
    <div className="overflow-clip">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-primary" style={{ scaleX }} />

      <section className="relative min-h-[72svh] border-b border-border px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <motion.div aria-hidden="true" style={{ y: reduce ? 0 : titleY }} className="pointer-events-none absolute -right-4 top-8 font-display text-[38vw] font-black leading-none text-text/[0.025]">
          03
        </motion.div>
        <div className="relative mx-auto max-w-6xl">
          <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            selected systems / 2026
          </motion.p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="overflow-hidden">
                <motion.h1 initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.95, ease, delay: 0.08 }} className="font-display text-[clamp(4rem,12vw,10rem)] font-extrabold leading-[0.78] tracking-[-0.065em] text-text">
                  WORK
                </motion.h1>
              </div>
              <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease, delay: 0.34 }} className="mt-9 max-w-[55ch] text-body-lg text-text-muted">
                One active build. Two deliberate empty slots. No fake launches, no invented metrics, just the system and the thinking behind it.
              </motion.p>
            </div>
            <motion.a href="#featured" initial={reduce ? false : { opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease, delay: 0.45 }} className="group inline-flex h-20 w-20 items-center justify-center rounded-full border border-border text-text transition hover:rotate-[-10deg] hover:border-primary hover:text-primary" aria-label="Scroll to featured project">
              <ArrowDown className="h-6 w-6 transition-transform group-hover:translate-y-1" />
            </motion.a>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">01 / featured system</p>
            <h2 className="mt-3 font-display text-h1 font-bold text-text">{project.title}</h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-text-muted sm:block">status / in progress</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease }}>
            <SignalCanvas />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease }} className="lg:pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">{project.category}</p>
            <p className="mt-5 max-w-[46ch] text-body-lg text-text-muted">{project.oneLine}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((stack, index) => (
                <motion.span key={stack} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + index * 0.08 }} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-text-muted">
                  {stack}
                </motion.span>
              ))}
            </div>
            <ConceptPanel />
            <Link href="/projects/lumino-xp" className="group mt-8 inline-flex min-h-12 items-center gap-4 rounded-md bg-primary px-6 font-medium text-on-primary transition-transform hover:-translate-y-1 active:translate-y-0">
              Enter case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">02 / next systems</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {reserved.map((item, index) => (
              <motion.div key={item.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease, delay: index * 0.1 }} className="group grid gap-4 py-9 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                <span className="font-mono text-sm text-primary">0{index + 2}</span>
                <div>
                  <h3 className="font-display text-h2 font-semibold text-text transition-transform duration-300 group-hover:translate-x-2">{item.title}</h3>
                  <p className="mt-2 text-text-muted">{item.oneLine}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-text-muted"><LockKeyhole className="h-3.5 w-3.5" /> reserved</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-text px-5 py-24 text-bg sm:px-8 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">open channel</p>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.045em]">BUILDING SOMETHING THAT NEEDS TO WORK?</h2>
          </div>
          <Link href="/contact" className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary transition hover:rotate-[-12deg] hover:scale-110 sm:h-24 sm:w-24" aria-label="Contact Rakesh">
            <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
