// Thin circuit-trace section divider. Decorative only.
export function CircuitDivider() {
  return (
    <div aria-hidden className="container-content">
      <svg viewBox="0 0 1200 24" className="h-6 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="12" x2="520" y2="12" stroke="var(--border)" />
        <path d="M520 12 H560 L572 4 H628 L640 12 H680" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="600" cy="12" r="3" fill="var(--bg)" stroke="var(--primary)" />
        <line x1="680" y1="12" x2="1200" y2="12" stroke="var(--border)" />
      </svg>
    </div>
  );
}
