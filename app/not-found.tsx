import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section ariaLabel="Page not found" className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <svg width="200" height="80" viewBox="0 0 200 80" role="img" aria-label="A broken circuit line" className="mb-8">
        <path d="M0 40 H70" fill="none" stroke="var(--border)" strokeWidth="2" />
        <path d="M130 40 H200" fill="none" stroke="var(--border)" strokeWidth="2" />
        <path d="M70 40 L85 25 M85 55 L100 40" fill="none" stroke="var(--error)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="40" r="3" fill="var(--error)" />
        <circle cx="130" cy="40" r="3" fill="var(--border)" />
      </svg>
      <p className="readout">Error 404</p>
      <h1 className="mt-3 text-h1 font-semibold">Circuit broken — page not found</h1>
      <p className="mt-3 max-w-md text-body-lg text-text-muted">
        The path you followed doesn&rsquo;t connect to anything. Let&rsquo;s route you back.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">Home</Button>
        <Button href="/projects" variant="outline">Work</Button>
        <Button href="/contact" variant="outline">Contact</Button>
      </div>
    </Section>
  );
}
