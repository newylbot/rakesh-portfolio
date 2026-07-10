import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({ title: "Page not found", path: "/404" });

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <svg viewBox="0 0 240 80" className="mb-8 h-20 w-full max-w-md" role="img" aria-label="A broken circuit line">
        <line x1="0" y1="40" x2="100" y2="40" stroke="rgb(var(--primary))" strokeWidth="2" />
        <line x1="140" y1="40" x2="240" y2="40" stroke="rgb(var(--border) / 0.6)" strokeWidth="2" />
        <circle cx="100" cy="40" r="4" fill="rgb(var(--primary))" />
        <circle cx="140" cy="40" r="4" fill="none" stroke="rgb(var(--border) / 0.6)" strokeWidth="2" />
        <path d="M108 30 L120 50 M120 30 L132 50" stroke="rgb(var(--warning))" strokeWidth="2" />
      </svg>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">Error 404</p>
      <h1 className="mt-3 text-h1 font-semibold text-text">This circuit is broken</h1>
      <p className="mt-3 max-w-md text-body-lg text-text-muted">
        The page you were looking for isn{"\u2019"}t here. Let{"\u2019"}s route you back to something that works.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/projects" variant="outline">Work</Button>
        <Button href="/contact" variant="ghost">Contact</Button>
      </div>
    </section>
  );
}
