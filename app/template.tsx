"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animatedRoutes = new Set(["/experience", "/about", "/skills", "/contact"]);

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (!animatedRoutes.has(pathname)) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .68, ease: [.16, 1, .3, 1] }}
    >
      {children}
    </motion.div>
  );
}
