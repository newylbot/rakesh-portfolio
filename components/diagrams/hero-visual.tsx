/**
 * Decorative hero visual: signal waveform + circuit traces + nodes.
 * Purely decorative — hidden from assistive tech. Motion degrades under
 * prefers-reduced-motion (see .trace-animate in globals.css).
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(40% 40% at 70% 30%, rgb(var(--primary) / 0.25), transparent), radial-gradient(40% 40% at 25% 75%, rgb(var(--secondary) / 0.20), transparent)",
        }}
      />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="rgb(var(--border) / 0.5)" strokeWidth="1">
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} />
          ))}
          {[80, 160, 240, 320].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="300" />
          ))}
        </g>
        <path
          d="M0 200 L60 200 L80 200 L100 140 L120 200 L160 200 L180 120 L200 200 L260 200 L280 90 L300 200 L360 200 L400 200"
          fill="none"
          stroke="url(#trace)"
          strokeWidth="2"
          className="trace-animate"
        />
        <path
          d="M20 40 L120 40 L140 70 L260 70 L280 40 L380 40"
          fill="none"
          stroke="rgb(var(--primary) / 0.55)"
          strokeWidth="1.5"
        />
        {[
          [120, 40],
          [140, 70],
          [260, 70],
          [280, 40],
          [100, 140],
          [180, 120],
          [280, 90],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="rgb(var(--primary))" />
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
        signal / trace / node
      </div>
    </div>
  );
}
