"use client";
import {motion} from "framer-motion";
const domains=[
 {name:"Control Systems",code:"G(s)",path:<><circle cx="40" cy="40" r="15"/><path d="M8 40h17m30 0h25M40 25v30M29 40h22"/></>},
 {name:"Electrical Machines",code:"M3Φ",path:<><circle cx="40" cy="40" r="23"/><circle cx="40" cy="40" r="10"/><path d="M40 17v13M20 52l11-7M60 52l-11-7"/></>},
 {name:"Power Systems",code:"132kV",path:<><path d="M16 67L31 14h18l15 53M25 43h30M21 55h38M31 14l9 53 9-53"/></>},
 {name:"Network Theory",code:"RLC",path:<><path d="M7 40h12l5-12 10 24 10-24 10 24 7-12h12"/><circle cx="7" cy="40" r="3"/><circle cx="73" cy="40" r="3"/></>},
 {name:"Power Electronics",code:"AC/DC",path:<><path d="M8 40h16M56 40h16M24 22v36l32-18zM56 22v36"/><path d="M30 65h20"/></>}
];
export function TechnicalDomainMap(){return <section className="border-y border-border bg-surface px-5 py-24 sm:px-8"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Electrical foundation / subject map</p><h2 className="mt-5 max-w-3xl font-display text-h1 font-bold text-text">The engineering subjects behind the work.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{domains.map((d,i)=><motion.div key={d.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07,duration:.65,ease:[.16,1,.3,1]}} whileHover={{y:-5}} className="bg-bg p-6"><svg viewBox="0 0 80 80" className="h-16 w-16 fill-none stroke-primary [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" aria-hidden="true">{d.path}</svg><h3 className="mt-7 font-display text-lg font-semibold text-text">{d.name}</h3><p className="mt-2 font-mono text-[.62rem] uppercase tracking-widest text-text-muted">{d.code}</p></motion.div>)}</div></div></section>}
