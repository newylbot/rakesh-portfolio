"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Automatically animated plant-to-grid electrical system. No hover dependency. */
export function EngineeringScene() {
  const reduce = useReducedMotion();
  const wire = { duration: 2.5, repeat: Infinity, ease: "linear" as const };
  return (
    <div className="relative hidden h-52 w-[27rem] overflow-hidden lg:block" aria-hidden="true">
      <svg viewBox="0 0 432 208" className="h-full w-full">
        <defs>
          <linearGradient id="plant-glow" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(var(--primary))" />
            <stop offset="1" stopColor="oklch(var(--secondary))" />
          </linearGradient>
        </defs>
        {/* factory */}
        <motion.g animate={reduce ? undefined : { y: [0, -3, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }} fill="none" stroke="oklch(var(--text) / .72)" strokeWidth="1.6">
          <path d="M18 160V98h42v21l28-18v59H18Z" />
          <path d="M28 98V65h18v33M32 126h12M52 126h12M32 143h12M52 143h12" />
          <motion.path d="M37 58c-8-8 7-12 0-22M43 58c9-9-6-14 2-24" stroke="oklch(var(--primary) / .65)" animate={reduce ? undefined : { pathLength: [0, 1], opacity: [0, .7, 0] }} transition={{ duration: 2.8, repeat: Infinity }} />
        </motion.g>
        {/* motor / machine */}
        <motion.g animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "129px 131px" }} fill="none" stroke="oklch(var(--primary))" strokeWidth="1.7">
          <circle cx="129" cy="131" r="25" /><circle cx="129" cy="131" r="10" /><path d="M129 106v15M107 144l13-8M151 144l-13-8" />
        </motion.g>
        {/* transformer */}
        <g fill="none" stroke="oklch(var(--secondary))" strokeWidth="1.7"><circle cx="190" cy="131" r="17"/><circle cx="215" cy="131" r="17"/><path d="M165 131h8M232 131h15"/></g>
        {/* animated power route */}
        <path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="oklch(var(--border))" strokeWidth="2" />
        <motion.path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="url(#plant-glow)" strokeWidth="3" strokeDasharray="8 18" animate={reduce ? undefined : { strokeDashoffset: [0, -52] }} transition={wire} />
        {/* transmission towers */}
        {[282, 346, 404].map((x, i) => <motion.g key={x} animate={reduce ? undefined : { y: [0, i % 2 ? 1.5 : -1.5, 0] }} transition={{ duration: 3.8 + i, repeat: Infinity, ease: "easeInOut" }} fill="none" stroke="oklch(var(--text) / .62)" strokeWidth="1.5"><path d={`M${x} 159L${x+14} 55l14 104M${x+5} 119h18M${x+3} 136h22M${x+8} 88h12M${x+14} 55v104`} /></motion.g>)}
        <path d="M296 72c22-8 42-8 64 0M360 72c20-8 39-8 58 0" fill="none" stroke="oklch(var(--text) / .34)" />
        {/* status nodes */}
        {[104,173,247,296,360,418].map((x,i)=><motion.circle key={x} cx={x} cy={i<3?131:83} r="3.5" fill="oklch(var(--primary))" animate={reduce?undefined:{r:[2.5,5,2.5],opacity:[.45,1,.45]}} transition={{duration:2,repeat:Infinity,delay:i*.22}}/>)}
      </svg>
      <motion.span className="absolute left-3 top-1 font-mono text-xs text-text-muted" animate={reduce ? undefined : { y: [0,-5,0], opacity:[.5,.9,.5] }} transition={{duration:4,repeat:Infinity}}>P = √3 VI cos φ</motion.span>
      <motion.span className="absolute right-7 top-2 font-mono text-xs text-text-muted" animate={reduce ? undefined : { y: [0,5,0], opacity:[.45,.85,.45] }} transition={{duration:4.8,repeat:Infinity}}>V₂/V₁ = N₂/N₁</motion.span>
      <motion.span className="absolute bottom-2 left-[38%] font-mono text-xs text-text-muted" animate={reduce ? undefined : { x: [-5,5,-5] }} transition={{duration:5.2,repeat:Infinity}}>ωs = 2πf</motion.span>
    </div>
  );
}
