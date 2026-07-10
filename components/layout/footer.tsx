import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-display text-2xl font-bold text-text">{siteConfig.person.name}</p>
          <p className="mt-2 max-w-lg text-sm text-text-muted">{siteConfig.person.role}</p>
          <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">India / open to remote and on-site opportunities</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3">
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="text-sm text-text-muted transition hover:text-primary">{item.label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-border px-5 py-4 sm:px-8"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-text-muted"><span>Designed and built by Rakesh Kumar Behera</span><span>{new Date().getFullYear()} / system online</span></div></div>
    </footer>
  );
}
