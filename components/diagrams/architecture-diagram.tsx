/**
 * Accessible architecture diagram for the Lumino XP case study.
 * Uses text labels everywhere and never relies on color alone.
 */
export function ArchitectureDiagram() {
  const layers = [
    { label: "Client interface", note: "Candidate & organizer UI" },
    { label: "Application / API", note: "Request handling, test logic" },
    { label: "Data storage", note: "Questions, sessions, results" },
    { label: "External services", note: "[Confirm / add details]" },
  ];

  return (
    <figure className="rounded-md border border-border bg-surface p-6">
      <div
        role="img"
        aria-label="Planned Lumino XP architecture: client interface connects to the application and API layer, which connects to data storage and optional external services."
        className="flex flex-col gap-3"
      >
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex flex-col items-center">
            <div className="w-full max-w-md rounded-sm border border-border bg-surface-2 px-4 py-3 text-center">
              <p className="font-mono text-sm font-medium text-text">{layer.label}</p>
              <p className="mt-0.5 text-xs text-text-muted">{layer.note}</p>
            </div>
            {i < layers.length - 1 ? (
              <svg width="20" height="24" viewBox="0 0 20 24" aria-hidden="true">
                <path d="M10 0 V18 M4 12 L10 18 L16 12" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-center font-mono text-xs text-text-muted">
        Concept UI / planned system view
      </figcaption>
    </figure>
  );
}
