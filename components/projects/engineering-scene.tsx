"use client";

function FormulaBubble({ className, formula, meaning }: { className: string; formula: string; meaning: string }) {
  return (
    <span className={`absolute z-10 rounded-full border border-border bg-bg/90 px-3 py-2 font-mono shadow-sm ${className}`}>
      <span className="block text-[.68rem] font-semibold text-text">{formula}</span>
      <span className="block text-[.48rem] uppercase tracking-[.12em] text-text-muted">{meaning}</span>
    </span>
  );
}

export function EngineeringScene() {
  return (
    <div className="relative hidden h-56 w-[clamp(22rem,38vw,29rem)] max-w-full overflow-hidden lg:block" aria-hidden="true">
      <div className="absolute inset-5 rounded-full bg-primary/10 blur-2xl" />
      <svg viewBox="0 0 432 208" className="relative h-full w-full">
        <defs>
          <linearGradient id="energy" x1="0" x2="1">
            <stop stopColor="oklch(var(--primary))" />
            <stop offset="1" stopColor="oklch(var(--secondary))" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g fill="none" stroke="oklch(var(--text)/.72)" strokeWidth="1.6">
          <path d="M18 160V98h42v21l28-18v59H18Z" />
          <path d="M28 98V65h18v33M32 126h12M52 126h12M32 143h12M52 143h12" />
        </g>

        <g filter="url(#glow)">
          <path d="M31 59C24 47 34 42 37 31C42 41 49 46 44 59Z" fill="oklch(var(--primary))">
            <animate attributeName="opacity" values=".55;1;.7;.95;.55" dur="1.4s" repeatCount="indefinite" />
          </path>
          <path d="M35 57C32 50 38 47 39 41C43 47 45 51 42 57Z" fill="oklch(var(--warning))">
            <animate attributeName="opacity" values="1;.55;1" dur=".85s" repeatCount="indefinite" />
          </path>
        </g>

        <g fill="none" stroke="oklch(var(--primary))" strokeWidth="2" filter="url(#glow)">
          <circle cx="129" cy="131" r="25" />
          <circle cx="129" cy="131" r="10" />
          <g>
            <path d="M129 106v15M107 144l13-8M151 144l-13-8" />
            <animateTransform attributeName="transform" type="rotate" from="0 129 131" to="360 129 131" dur="4.8s" repeatCount="indefinite" />
          </g>
        </g>

        <g fill="none" stroke="oklch(var(--secondary))" strokeWidth="1.8">
          <circle cx="190" cy="131" r="17" />
          <circle cx="215" cy="131" r="17" />
          <path d="M165 131h8M232 131h15" />
        </g>

        <path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="oklch(var(--border))" strokeWidth="2" />
        <path d="M88 131h16M154 131h19M232 131h25L281 83h123" fill="none" stroke="url(#energy)" strokeWidth="4" strokeDasharray="8 14" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-88" dur="1.35s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".65;1;.65" dur="2s" repeatCount="indefinite" />
        </path>

        {[282, 346, 404].map((x) => (
          <g key={x} fill="none" stroke="oklch(var(--text)/.68)" strokeWidth="1.5">
            <path d={`M${x} 159L${x + 14} 55l14 104M${x + 5} 119h18M${x + 3} 136h22M${x + 8} 88h12M${x + 14} 55v104`} />
          </g>
        ))}
        <path d="M296 72c22-8 42-8 64 0M360 72c20-8 39-8 58 0" fill="none" stroke="oklch(var(--text)/.34)" />

        {[0, .75, 1.5].map((delay) => (
          <circle key={delay} r="4.5" fill="oklch(var(--primary))" filter="url(#glow)">
            <animateMotion begin={`${delay}s`} dur="2.8s" repeatCount="indefinite" calcMode="linear" path="M88 131H104M154 131H173M232 131H257L281 83H418" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      <FormulaBubble className="left-1 top-0" formula="P = √3 VI cos φ" meaning="three-phase power" />
      <FormulaBubble className="right-1 top-0" formula="V₂/V₁ = N₂/N₁" meaning="transformer ratio" />
      <FormulaBubble className="bottom-0 left-[38%]" formula="ωs = 2πf" meaning="synchronous speed" />
    </div>
  );
}
