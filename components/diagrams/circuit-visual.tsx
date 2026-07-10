/** Decorative trace-and-node panel background. Hidden from assistive tech. */
export function CircuitVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="rgb(var(--primary) / 0.35)" strokeWidth="1" fill="none">
        <path d="M10 30 L90 30 L110 50 L200 50" />
        <path d="M10 100 L60 100 L80 80 L160 80 L180 110 L290 110" />
        <path d="M40 190 L40 140 L120 140 L140 160 L260 160" />
      </g>
      <g fill="rgb(var(--primary) / 0.7)">
        {[
          [90, 30],
          [110, 50],
          [80, 80],
          [180, 110],
          [120, 140],
          [140, 160],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
