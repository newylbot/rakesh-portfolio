/**
 * Animated oscilloscope panel: a blueprint grid, two waveform traces that draw
 * themselves in, and a pulse dot that travels the signal path. Decorative and
 * hidden from assistive tech. All motion degrades under prefers-reduced-motion.
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-bg-elevated">
      {/* soft signal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(38% 38% at 72% 32%, oklch(var(--primary) / 0.28), transparent), radial-gradient(40% 40% at 22% 78%, oklch(var(--secondary) / 0.18), transparent)",
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
        {/* graticule */}
        <g stroke="oklch(var(--text) / 0.08)" strokeWidth="1">
          {[38, 76, 114, 152, 190, 228, 266].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} />
          ))}
          {[50, 100, 150, 200, 250, 300, 350].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="300" />
          ))}
        </g>
        <line x1="0" y1="150" x2="400" y2="150" stroke="oklch(var(--text) / 0.16)" strokeWidth="1" />

        {/* secondary sine, drawn slowly */}
        <path
          d="M0 150 C 40 150, 55 100, 90 100 S 150 200, 190 150 S 260 90, 300 150 S 360 210, 400 150"
          fill="none"
          stroke="oklch(var(--secondary) / 0.55)"
          strokeWidth="1.5"
          className="trace-draw trace-draw--slow"
        />

        {/* primary waveform */}
        <path
          d="M0 90 C 40 90, 55 30, 90 30 S 150 150, 190 90 S 260 20, 300 90 S 360 150, 400 90"
          fill="none"
          stroke="oklch(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="trace-draw"
        />
      </svg>

      {/* pulse traveling the primary path (offset-path in globals.css) */}
      <div aria-hidden="true" className="absolute inset-0">
        <span
          className="pulse-dot absolute left-0 top-0 block h-2.5 w-2.5 rounded-full"
          style={{ background: "oklch(var(--primary))", boxShadow: "0 0 12px 2px oklch(var(--primary) / 0.7)" }}
        />
      </div>

      {/* instrument labels */}
      <div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
        <span className="blink inline-block h-1.5 w-1.5 rounded-full" style={{ background: "oklch(var(--primary))" }} />
        signal
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
        ch1 · 20ms/div
      </div>
    </div>
  );
}
