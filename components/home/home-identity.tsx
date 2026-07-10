"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { siteConfig } from "@/content/site-config";

const roles=["Electrical Engineering Graduate","Quality & Automation Practitioner","Industrial Systems Learner","Software & Simulation Builder"];

export function HomeIdentity(){
  const [index,setIndex]=React.useState(0); const reduce=useReducedMotion();
  React.useEffect(()=>{if(reduce)return;const timer=window.setInterval(()=>setIndex(v=>(v+1)%roles.length),2800);return()=>window.clearInterval(timer)},[reduce]);
  return <section className="relative z-20 border-b border-border bg-bg/75 px-5 py-6 backdrop-blur sm:px-8 sm:py-8">
    <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
      <motion.p initial={reduce?false:{opacity:0,x:-18}} animate={{opacity:1,x:0}} className="font-display text-xl font-bold tracking-[-.02em] text-text sm:text-2xl">{siteConfig.person.name}</motion.p>
      <div className="flex min-h-8 items-center gap-4 overflow-hidden"><span className="hidden h-px w-10 bg-primary sm:block"/><div className="relative h-8 min-w-0 flex-1 overflow-hidden font-mono text-xs uppercase tracking-[.13em] text-text-muted sm:text-sm"><AnimatePresence mode="wait" initial={false}><motion.span key={index} initial={reduce?false:{y:"110%",opacity:0}} animate={{y:0,opacity:1}} exit={{y:"-110%",opacity:0}} transition={{duration:.46,ease:[.16,1,.3,1]}} className="absolute inset-x-0 top-1">I am an {roles[index]}</motion.span></AnimatePresence></div></div>
    </div>
  </section>
}
