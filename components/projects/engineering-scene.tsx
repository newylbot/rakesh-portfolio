"use client";

import { motion } from "framer-motion";

const loop = { repeat: Infinity } as const;

export function EngineeringScene() {
  return (
    <div className="relative hidden h-52 w-[27rem] overflow-hidden lg:block" aria-hidden="true">
      <motion.div className="absolute inset-4 rounded-full bg-primary/10 blur-2xl" animate={{ scale: [.82, 1.2, .82], opacity: [.28, .68, .28] }} transition={{ duration: 3.2, ease: "easeInOut", ...loop }} />
      <svg viewBox="0 0 432 208" className="relative h-full w-full">
        <defs>
          <linearGradient id="energy" x1="0" x2="1"><stop stopColor="oklch(var(--primary))"/><stop offset="1" stopColor="oklch(var(--secondary))"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 3.4, ease: "easeInOut", ...loop }} fill="none" stroke="oklch(var(--text)/.72)" strokeWidth="1.6">
          <path d="M18 160V98h42v21l28-18v59H18Z"/><path d="M28 98V65h18v33M32 126h12M52 126h12M32 143h12M52 143h12"/>
          <motion.path d="M37 58c-8-8 7-12 0-22M43 58c9-9-6-14 2-24" stroke="oklch(var(--primary)/.85)" animate={{ pathLength: [0, 1], opacity: [0, 1, 0], y: [4, -5, -12] }} transition={{ duration: 2.2, ease: "easeOut", ...loop }}/>
        </motion.g>

        <motion.g animate={{ rotate: 360 }} transition={{ duration: 4.8, ease: "linear", ...loop }} style={{ transformBox: "fill-box", transformOrigin: "center" }} fill="none" stroke="oklch(var(--primary))" strokeWidth="2" filter="url(#glow)">
          <circle cx="129" cy="131" r="25"/><circle cx="129" cy="131" r="10"/><path d="M129 106v15M107 144l13-8M151 144l-13-8"/>
        </motion.g>

        <motion.g animate={{ opacity: [.55, 1, .55], scale: [.96, 1.04, .96] }} transition={{ duration: 2, ease: "easeInOut", ...loop }} style={{ transformBox: "fill-box", transformOrigin: "center" }} fill="none" stroke="oklch(var(--secondary))" strokeWidth="1.8">
          <circle cx="190" cy="131" r="17"/><circle cx="215" cy="131" r="17"/><path d="M165 131h8M232 131h15"/>
        </motion.g>

        <path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="oklch(var(--border))" strokeWidth="2"/>
        <motion.path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="url(#energy)" strokeWidth="4" strokeDasharray="8 14" filter="url(#glow)" animate={{ strokeDashoffset: [0, -88], opacity: [.65, 1, .65] }} transition={{ duration: 1.35, ease: "linear", ...loop }}/>

        {[282, 346, 404].map((x, i) => <motion.g key={x} animate={{ y: [0, i % 2 ? 3 : -3, 0], opacity: [.65, 1, .65] }} transition={{ duration: 2.4 + i * .25, ease: "easeInOut", ...loop }} fill="none" stroke="oklch(var(--text)/.68)" strokeWidth="1.5"><path d={`M${x} 159L${x+14} 55l14 104M${x+5} 119h18M${x+3} 136h22M${x+8} 88h12M${x+14} 55v104`}/></motion.g>)}
        <path d="M296 72c22-8 42-8 64 0M360 72c20-8 39-8 58 0" fill="none" stroke="oklch(var(--text)/.34)"/>

        {[0, .5, 1].map((delay) => <motion.circle key={delay} r="4.5" fill="oklch(var(--primary))" filter="url(#glow)" animate={{ cx: [88, 154, 232, 281, 346, 418], cy: [131, 131, 131, 83, 83, 83], opacity: [0, 1, 1, 1, 1, 0], scale: [.7, 1.4, 1.4, 1.4, 1.4, .7] }} transition={{ duration: 2.6, delay, ease: "linear", ...loop }}/>) }
      </svg>

      <motion.span className="absolute left-3 top-1 font-mono text-xs text-text-muted" animate={{ y: [0, -7, 0], opacity: [.45, 1, .45] }} transition={{ duration: 3, ease: "easeInOut", ...loop }}>P = √3 VI cos φ</motion.span>
      <motion.span className="absolute right-7 top-2 font-mono text-xs text-text-muted" animate={{ y: [0, 7, 0], opacity: [.4, 1, .4] }} transition={{ duration: 3.6, ease: "easeInOut", ...loop }}>V₂/V₁ = N₂/N₁</motion.span>
      <motion.span className="absolute bottom-2 left-[38%] font-mono text-xs text-text-muted" animate={{ x: [-9, 9, -9], opacity: [.5, 1, .5] }} transition={{ duration: 3.8, ease: "easeInOut", ...loop }}>ωs = 2πf</motion.span>
    </div>
  );
}
