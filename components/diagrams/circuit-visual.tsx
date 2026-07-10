/**
 * Decorative hero visual: signal waveform + circuit traces + nodes.
 * Lightweight SVG/CSS only. Hidden from assistive tech (decorative).
 * The animated pulse is disabled under prefers-reduced-motion via globals.css.
 */
export function CircuitVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-surface"
      aria-hidden="true"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="var(--border)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" opacity="0.5" />

        {/* circuit traces */}
        <path
          d="M20 240 H120 V160 H200 V200 H300 V90 H380"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <path
          d="M20 60 H90 V120 H180 V80 H260 V150 H380"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
        />

        {/* animated pulse trace */}
        <path
          d="M20 240 H120 V160 H200 V200 H300 V90 H380"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeDasharray="14 106"
          className="animate-pulse-trace"
        />

        {/* oscilloscope waveform */}
        <path
          d="M20 150 Q40 100 60 150 T100 150 T140 150 T180 150 T220 150 T260 150 T300 150 T340 150 T380 150"
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* nodes */}
        {[[120, 160], [200, 200], [300, 90], [90, 120], [180, 80], [260, 150]].map(
          ([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" fill="var(--primary)" />
          )
        )}

        {/* instrumentation labels */}
        <text x="24" y="28" fill="var(--text-muted)" fontSize="9" fontFamily="monospace">
          SIG.01
        </text>
        <text x="320" y="286" fill="var(--text-muted)" fontSize="9" fontFamily="monospace">
          NODE.MAP
        </text>
      </svg>
    </div>
  );
}
