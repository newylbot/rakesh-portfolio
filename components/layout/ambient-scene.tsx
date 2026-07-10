"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Persistent atmosphere shared by every route. Uses GPU-friendly transforms only. */
export function AmbientScene() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yA = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-[0.12] blur-3xl dark:opacity-[0.14]"
        style={{ y: reduce ? 0 : yA, background: "oklch(var(--secondary))" }}
        animate={reduce ? undefined : { x: [0, -45, 0], scale: [1, 1.13, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-52 -left-48 h-[38rem] w-[38rem] rounded-full opacity-[0.12] blur-3xl dark:opacity-[0.12]"
        style={{ y: reduce ? 0 : yB, background: "oklch(var(--primary))" }}
        animate={reduce ? undefined : { x: [0, 70, 0], scale: [1.08, 0.92, 1.08] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.34] [background-image:linear-gradient(oklch(var(--text)/.025)_1px,transparent_1px),linear-gradient(90deg,oklch(var(--text)/.025)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
