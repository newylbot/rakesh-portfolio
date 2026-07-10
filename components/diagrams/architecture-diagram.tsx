// Accessible architecture diagram. Every layer has a text label and
// description; signal-flow arrows connect layers. Meaning never relies on
// color alone. Rendered as an ordered list for assistive tech, with a
// decorative SVG rail beside it.

interface Layer {
  layer: string;
  detail: string;
}

export function ArchitectureDiagram({ layers }: { layers: Layer[] }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
        Planned architecture · signal flow top → bottom
      </p>
      <ol className="space-y-3">
        {layers.map((l, i) => (
          <li key={l.layer} className="relative">
            <div className="rounded-md border border-border bg-surface-2 p-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary">L{i + 1}</span>
                <h3 className="font-display text-base font-semibold text-text">{l.layer}</h3>
              </div>
              <p className="mt-1 text-sm text-text-muted">{l.detail}</p>
            </div>
            {i < layers.length - 1 && (
              <div aria-hidden className="flex justify-center py-1 text-text-muted">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <line x1="8" y1="0" x2="8" y2="14" stroke="var(--primary)" strokeWidth="1.5" />
                  <path d="M3 12 L8 18 L13 12" stroke="var(--primary)" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
