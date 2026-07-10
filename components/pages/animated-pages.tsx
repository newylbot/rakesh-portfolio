"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, BookOpen, Cable, CheckCircle2, Code2, Factory, FileText, GraduationCap, MapPin, RadioTower, Sparkles, Wrench } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { ContactForm } from "@/components/forms/contact-form";
import { PrintButton } from "@/components/ui/print-button";

const ease = [0.16, 1, 0.3, 1] as const;

function PageHero({ code, title, accent, copy }: { code: string; title: string; accent: string; copy: string }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 110]);
  return (
    <section className="relative min-h-[62svh] overflow-hidden border-b border-border px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
      <motion.span aria-hidden="true" style={{ y: reduce ? 0 : y }} className="absolute -right-2 top-0 font-display text-[38vw] font-black leading-none text-text/[0.025]">{code}</motion.span>
      <div className="relative mx-auto max-w-6xl">
        <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease }} className="font-mono text-xs uppercase tracking-[.22em] text-primary">Rakesh Kumar Behera / {code}</motion.p>
        <div className="mt-10 overflow-hidden"><motion.h1 initial={reduce ? false : { y: "108%" }} animate={{ y: 0 }} transition={{ duration: .95, ease, delay: .08 }} className="max-w-5xl font-display text-[clamp(3.8rem,10vw,8.5rem)] font-extrabold leading-[.84] tracking-[-.06em] text-text">{title}</motion.h1></div>
        <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease, delay: .32 }} className="mt-8 font-display text-[clamp(1.5rem,3vw,2.6rem)] font-semibold text-primary">{accent}</motion.p>
        <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease, delay: .45 }} className="mt-5 max-w-[64ch] text-body-lg text-text-muted">{copy}</motion.p>
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[.2em] text-primary"><span className="h-px w-8 bg-primary" />{children}</p>;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .72, ease, delay }} className={className}>{children}</motion.div>;
}

function MagneticCta() {
  return (
    <section className="bg-text px-5 py-24 text-bg sm:px-8 sm:py-28">
      <Reveal className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">open circuit</p><h2 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[.94] tracking-[-.045em]">LET&apos;S BUILD SOMETHING DEPENDABLE.</h2></div>
        <Link href="/contact" className="group grid h-20 w-20 place-items-center rounded-full bg-primary text-on-primary transition duration-300 hover:rotate-[-12deg] hover:scale-110 sm:h-24 sm:w-24"><ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
      </Reveal>
    </section>
  );
}

export function AboutExperience() {
  const a = siteConfig.about;
  return <><PageHero code="A01" title="I READ SYSTEMS." accent="Then I make their behavior clearer." copy={a.intro} />
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><Label>the through-line</Label><div className="grid gap-10 lg:grid-cols-2">
      <Reveal className="depth-panel rounded-[1.5rem] border border-border bg-surface p-7 sm:p-10"><Cable className="h-7 w-7 text-primary" /><h2 className="mt-8 font-display text-h1 font-bold text-text">Electrical thinking</h2><p className="mt-5 max-w-[55ch] text-body-lg text-text-muted">{a.whyEngineering}</p></Reveal>
      <Reveal delay={.1} className="depth-panel rounded-[1.5rem] bg-text p-7 text-bg sm:p-10"><Code2 className="h-7 w-7 text-primary" /><h2 className="mt-8 font-display text-h1 font-bold">Software building</h2><p className="mt-5 max-w-[55ch] text-body-lg text-bg/65">{a.industrialToSoftware}</p></Reveal>
    </div></section>
    <section className="border-y border-border bg-surface px-5 py-24 sm:px-8"><div className="mx-auto max-w-6xl"><Label>operating rules</Label><div className="divide-y divide-border border-y border-border">{a.principles.map((p,i)=><Reveal key={p} delay={i*.06} className="grid gap-3 py-7 sm:grid-cols-[5rem_1fr]"><span className="font-mono text-primary">0{i+1}</span><p className="font-display text-h2 font-semibold text-text">{p}</p></Reveal>)}</div></div></section>
    <MagneticCta /></>;
}

export function ExperienceExperience() {
  const reduce = useReducedMotion();
  return <><PageHero code="E02" title="FIELD NOTES." accent="Factory floors, controls and quality systems." copy="Real industrial exposure, technical training, and the reflections that shaped how I approach reliable work." />
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><Label>signal path / 2024 to 2026</Label><div className="relative">
      <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once:true }} transition={{ duration:1.5,ease }} className="absolute bottom-0 left-[.38rem] top-0 w-px origin-top bg-primary sm:left-[11.35rem]" />
      <ol className="space-y-14">{siteConfig.experience.map((item,i)=><motion.li key={item.company} initial={reduce?false:{opacity:0,x:i%2?32:-32}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.35}} transition={{duration:.75,ease,delay:i*.05}} className="relative grid gap-3 pl-9 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:pl-0"><span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-primary bg-bg sm:left-[11rem]" /><p className="font-mono text-xs uppercase tracking-[.14em] text-text-muted">{item.period}</p><div className="sm:pl-9"><div className="flex flex-wrap items-center gap-3"><h2 className="font-display text-h2 font-semibold text-text">{item.role}</h2><span className="rounded-full border border-border px-3 py-1 font-mono text-[.62rem] uppercase tracking-wider text-text-muted">{item.type}</span></div><p className="mt-2 text-primary">{item.company} / {item.location}</p><p className="mt-5 max-w-[62ch] text-text-muted">{item.reflection}</p><div className="mt-5 flex flex-wrap gap-2">{item.systems.map(s=><span key={s} className="rounded-md bg-surface-2 px-3 py-1.5 text-xs text-text-muted">{s}</span>)}</div></div></motion.li>)}</ol>
    </div></section><MagneticCta /></>;
}

const skillIcons = [Factory, Code2, Wrench];
export function SkillsExperience() {
  const groups = [
    ["Electrical & Industrial", siteConfig.skills.electricalIndustrial],
    ["Software & Systems", siteConfig.skills.softwareSystems],
    ["Tools & Workflow", siteConfig.skills.toolsWorkflow],
  ] as const;
  return <><PageHero code="S03" title="CAPABILITY MAP." accent="Context instead of fake percentages." copy={siteConfig.skills.intro} />
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-6 lg:grid-cols-3">{groups.map(([title,skills],index)=>{const Icon=skillIcons[index];return <Reveal key={title} delay={index*.08} className="depth-panel overflow-hidden rounded-[1.4rem] border border-border bg-surface"><div className="flex items-center justify-between border-b border-border p-6"><Icon className="h-6 w-6 text-primary"/><span className="font-mono text-xs text-text-muted">0{index+1}</span></div><div className="p-6"><h2 className="font-display text-h2 font-semibold text-text">{title}</h2><ul className="mt-7 space-y-5">{skills.map((skill,i)=><li key={skill.name}><div className="flex items-end justify-between gap-3"><span className="text-sm text-text">{skill.name}</span><span className="font-mono text-[.58rem] uppercase tracking-wider text-text-muted">{skill.level}</span></div><div className="mt-2 h-px bg-border"><motion.div initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:.9,ease,delay:i*.06}} className="h-px origin-left bg-primary" style={{width:`${48+(i%4)*12}%`}} /></div></li>)}</ul></div></Reveal>})}</div></section><MagneticCta /></>;
}

export function NowExperience() {
  const now=siteConfig.now;
  return <><PageHero code="N04" title="NOW / NEXT." accent="A live engineering notebook." copy={`Current focus, active learning and build notes. Updated ${now.updated}.`} />
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><Label>current channels</Label><div className="space-y-3">{now.focus.map((item,i)=><motion.div whileHover={{x:8}} key={item} className="flex items-center gap-4 border-b border-border py-4"><span className="relative flex h-3 w-3"><span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40"/><span className="relative h-3 w-3 rounded-full bg-primary"/></span><p className="text-text">{item}</p><span className="ml-auto font-mono text-xs text-text-muted">0{i+1}</span></motion.div>)}</div></Reveal><Reveal delay={.12}><Label>logbook</Label><div className="rounded-[1.5rem] border border-border bg-surface p-6 sm:p-9"><BookOpen className="h-6 w-6 text-primary"/>{now.log.map((entry,i)=><div key={i} className="mt-8 border-t border-border pt-6"><p className="font-mono text-xs uppercase tracking-wider text-primary">{entry.date}</p><p className="mt-3 text-body-lg text-text-muted">{entry.note}</p></div>)}</div></Reveal></div></section><MagneticCta /></>;
}

export function ResumeExperience() {
  const {person,education,experience,skills,projects}=siteConfig;
  return <><PageHero code="R05" title="RESUME." accent="The compact system view." copy={person.bio} />
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><div className="no-print mb-12 flex flex-wrap gap-3">{person.resumeUrl?<Link href={person.resumeUrl} className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary">Download PDF</Link>:null}<PrintButton/></div><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><Reveal><Label>identity</Label><h2 className="font-display text-h1 font-bold text-text">{person.name}</h2><p className="mt-4 text-primary">{person.role}</p><p className="mt-5 flex items-center gap-2 text-text-muted"><MapPin className="h-4 w-4"/>{person.location}</p><div className="mt-10"><Label>education</Label><GraduationCap className="h-6 w-6 text-primary"/><p className="mt-4 font-semibold text-text">{education.degree}</p><p className="mt-2 text-sm text-text-muted">{education.institution} / {education.completion}</p></div></Reveal><Reveal delay={.1}><Label>experience trace</Label><div className="divide-y divide-border border-y border-border">{experience.filter(e=>e.type!=="Education").map(e=><div key={e.company} className="py-7"><div className="flex flex-wrap justify-between gap-3"><h3 className="font-display text-xl font-semibold text-text">{e.role}</h3><span className="font-mono text-xs text-text-muted">{e.period}</span></div><p className="mt-1 text-primary">{e.company}</p><p className="mt-3 text-sm text-text-muted">{e.reflection}</p></div>)}</div><div className="mt-12"><Label>project signal</Label>{projects.filter(p=>!p.placeholder).map(p=><Link href={`/projects/${p.slug}`} key={p.slug} className="group flex items-center justify-between rounded-xl bg-text p-6 text-bg"><div><h3 className="font-display text-2xl font-semibold">{p.title}</h3><p className="mt-2 max-w-xl text-sm text-bg/60">{p.oneLine}</p></div><ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>)}</div></Reveal></div></section><MagneticCta /></>;
}

export function ContactExperience() {
  const p=siteConfig.person;
  return <><PageHero code="C06" title="OPEN CHANNEL." accent="Tell me what needs to work." copy="For graduate engineering roles, industrial systems work, backend opportunities, and serious collaborations." />
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><Reveal><Label>connection status</Label><div className="rounded-[1.5rem] bg-text p-7 text-bg"><RadioTower className="h-7 w-7 text-primary"/><p className="mt-8 font-mono text-xs uppercase tracking-[.18em] text-bg/50">location</p><p className="mt-2 text-xl">{p.location}</p><p className="mt-7 font-mono text-xs uppercase tracking-[.18em] text-bg/50">availability</p><p className="mt-2 text-xl">{p.availability}</p><div className="mt-9 flex items-center gap-2 border-t border-bg/15 pt-5 text-sm text-bg/65"><CheckCircle2 className="h-4 w-4 text-primary"/>Channel ready</div></div></Reveal><Reveal delay={.1} className="rounded-[1.5rem] border border-border bg-surface p-6 sm:p-10"><Label>message console</Label><ContactForm/></Reveal></div></section></>;
}
