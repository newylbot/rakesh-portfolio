/**
 * Accessible planned-architecture diagram. Uses text labels everywhere and does
 * not rely on color alone. Layers flow top-to-bottom with signal-flow arrows.
 */
const layers = [
  { label: "Client interface", note: "Web frontend \u2014 candidate & organizer views" },
  { label: "Application / API", note: "Request handling, auth, test logic" },
  { label: "Data storage", note: "Persistence for tests, sessions, results" },
  { label: "External services", note: "Email / notifications (planned)" },
];

export function ArchitectureDiagram() {
  return (
    <figure className="rounded-lg border border-border bg-surface p-5">
      <svg
        viewBox="0 0 360 300"
        className="w-full"
        role="img"
        aria-labelledby="arch-title arch-desc"
        focusable="false"
      >
        <title id="arch-title">Lumino XP planned architecture</title>
        <desc id="arch-desc">
          Four layers connected by signal-flow arrows: client interface, application and API,
          data storage, and external services.
        </desc>
        {layers.map((l, i) => {
          const y = i * 72 + 6;
          return (
            <g key={l.label}>
              <rect
                x="20"
                y={y}
                width="320"
                height="52"
                rx="10"
                fill="rgb(var(--surface-2))"
                stroke="rgb(var(--border) / 0.4)"
              />
              <text x="36" y={y + 22} fill="rgb(var(--text))" fontSize="14" fontWeight="600">
                {l.label}
              </text>
              <text x="36" y={y + 40} fill="rgb(var(--text-muted))" fontSize="11">
                {l.note}
              </text>
              {i < layers.length - 1 ? (
                <g stroke="rgb(var(--primary))" strokeWidth="2">
                  <line x1="180" y1={y + 52} x2="180" y2={y + 66} />
                  <polygon
                    points={`174,${y + 62} 186,${y + 62} 180,${y + 70}`}
                    fill="rgb(var(--primary))"
                    stroke="none"
                  />
                </g>
              ) : null}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 font-mono text-xs text-text-muted">
        Concept / planned system view — not a deployed system.
      </figcaption>
    </figure>
  );
}
