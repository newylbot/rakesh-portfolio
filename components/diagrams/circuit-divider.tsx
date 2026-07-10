export function CircuitDivider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 1200 24" className="h-6 w-full" preserveAspectRatio="none" focusable="false">
        <line x1="0" y1="12" x2="520" y2="12" stroke="rgb(var(--border) / 0.6)" strokeWidth="1" />
        <circle cx="560" cy="12" r="4" fill="none" stroke="rgb(var(--primary) / 0.7)" strokeWidth="1.5" />
        <line x1="564" y1="12" x2="600" y2="12" stroke="rgb(var(--primary) / 0.7)" strokeWidth="1.5" />
        <rect x="600" y="7" width="10" height="10" fill="none" stroke="rgb(var(--primary) / 0.7)" strokeWidth="1.5" />
        <line x1="610" y1="12" x2="646" y2="12" stroke="rgb(var(--primary) / 0.7)" strokeWidth="1.5" />
        <circle cx="650" cy="12" r="4" fill="none" stroke="rgb(var(--primary) / 0.7)" strokeWidth="1.5" />
        <line x1="680" y1="12" x2="1200" y2="12" stroke="rgb(var(--border) / 0.6)" strokeWidth="1" />
      </svg>
    </div>
  );
}
