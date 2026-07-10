// Decorative, lightweight SVG: signal waveform + circuit traces + nodes.
// Hidden from assistive tech. Pulse degrades under prefers-reduced-motion.
export function HeroVisual() {
  return (
    <div aria-hidden className="relative w-full">
      <svg
        viewBox="0 0 480 360"
        role="presentation"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>

        {/* panel frame */}
        <rect x="1" y="1" width="478" height="358" rx="16" stroke="var(--border)" />

        {/* faint grid */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={40 * i} y1="0" x2={40 * i} y2="360" stroke="var(--border)" strokeOpacity="0.35" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={40 * i} x2="480" y2={40 * i} stroke="var(--border)" strokeOpacity="0.35" />
        ))}

        {/* oscilloscope waveform */}
        <path
          d="M20 200 H120 L140 120 L160 280 L180 160 L200 200 H300 L320 150 L340 250 L360 200 H460"
          stroke="url(#trace)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          className="animate-pulse-trace"
        />

        {/* circuit traces */}
        <path d="M40 320 H180 V260 H260" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M440 40 H320 V90 H240" stroke="var(--secondary)" strokeOpacity="0.5" strokeWidth="1.5" />

        {/* nodes */}
        {[
          [180, 260],
          [260, 260],
          [320, 90],
          [240, 90],
          [40, 320],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="var(--bg)" stroke="var(--primary)" strokeWidth="1.5" />
        ))}

        {/* mono labels */}
        <text x="20" y="28" fill="var(--text-muted)" fontFamily="monospace" fontSize="11">CH1 · SIGNAL</text>
        <text x="360" y="345" fill="var(--text-muted)" fontFamily="monospace" fontSize="11">50ms / DIV</text>
      </svg>
    </div>
  );
}
