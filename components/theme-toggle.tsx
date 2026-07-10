"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle(){
  const {theme,systemTheme,setTheme}=useTheme(); const [mounted,setMounted]=React.useState(false); const [wave,setWave]=React.useState(false); const reduce=useReducedMotion();
  React.useEffect(()=>setMounted(true),[]); const current=theme==="system"?systemTheme:theme; const dark=current==="dark";
  function toggle(){ if(reduce){setTheme(dark?"light":"dark");return} setWave(true); window.setTimeout(()=>setTheme(dark?"light":"dark"),260); window.setTimeout(()=>setWave(false),760); }
  return <>
    {wave?<motion.div aria-hidden="true" className="pointer-events-none fixed right-5 top-5 z-[90] h-10 w-10 rounded-full bg-text dark:bg-bg" initial={{scale:0,opacity:1}} animate={{scale:90,opacity:1}} exit={{opacity:0}} transition={{duration:.72,ease:[.16,1,.3,1]}}/>:null}
    <motion.button type="button" whileTap={{scale:.88,rotate:-18}} whileHover={{rotate:8}} aria-label={mounted?`Switch to ${dark?"light":"dark"} theme`:"Toggle theme"} onClick={toggle} className="relative z-[95] grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-text focus-visible:ring-2 focus-visible:ring-primary">
      {mounted?<motion.span key={dark?"sun":"moon"} initial={{scale:.3,rotate:-90,opacity:0}} animate={{scale:1,rotate:0,opacity:1}} transition={{duration:.35,ease:[.16,1,.3,1]}}>{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</motion.span>:<span className="h-4 w-4"/>}
    </motion.button>
  </>
}
