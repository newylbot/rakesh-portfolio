"use client";

export function EngineeringScene() {
  const powerPath = "M88 131h16M154 131h19M232 131h25L281 83h147";

  return (
    <div className="relative hidden h-52 w-[27rem] overflow-hidden lg:block" aria-hidden="true">
      <div className="absolute inset-4 rounded-full bg-primary/10 blur-2xl" />
      <svg viewBox="0 0 432 208" className="relative h-full w-full overflow-visible">
        <defs>
          <linearGradient id="energy" x1="0" x2="1">
            <stop stopColor="oklch(var(--primary))" />
            <stop offset="1" stopColor="oklch(var(--secondary))" />
          </linearGradient>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g fill="none" stroke="oklch(var(--text)/.72)" strokeWidth="1.6">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="3.4s" repeatCount="indefinite" />
          <path d="M18 160V98h42v21l28-18v59H18Z" />
          <path d="M28 98V65h18v33M32 126h12M52 126h12M32 143h12M52 143h12" />
          <path d="M37 58c-8-8 7-12 0-22M43 58c9-9-6-14 2-24" stroke="oklch(var(--primary)/.75)" strokeDasharray="5 5">
            <animate attributeName="stroke-dashoffset" values="0;-30" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".25;1;.25" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        <g fill="none" stroke="oklch(var(--primary))" strokeWidth="1.8" filter="url(#glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 129 131" to="360 129 131" dur="4.8s" repeatCount="indefinite" />
          <circle cx="129" cy="131" r="25" />
          <circle cx="129" cy="131" r="10" />
          <path d="M129 106v15M107 144l13-8M151 144l-13-8" />
        </g>

        <g fill="none" stroke="oklch(var(--secondary))" strokeWidth="1.8">
          <circle cx="190" cy="131" r="17">
            <animate attributeName="r" values="16;18;16" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="215" cy="131" r="17">
            <animate attributeName="r" values="18;16;18" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <path d="M165 131h8M232 131h15" />
        </g>

        <path d={powerPath} fill="none" stroke="oklch(var(--border))" strokeWidth="2" />
        <path d={powerPath} fill="none" stroke="url(#energy)" strokeWidth="4" strokeDasharray="7 16" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-92" dur="1.35s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".55;1;.55" dur="1.8s" repeatCount="indefinite" />
        </path>

        <circle r="5" fill="oklch(var(--primary))" filter="url(#glow)">
          <animateMotion path="M88 131h16M154 131h19M232 131h25L281 83h147" dur="3.1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3.1s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="oklch(var(--secondary))" filter="url(#glow)">
          <animateMotion path="M88 131h16M154 131h19M232 131h25L281 83h147" dur="3.1s" begin="1.55s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3.1s" begin="1.55s" repeatCount="indefinite" />
        </circle>

        {[282, 346, 404].map((x, i) => (
          <g key={x} fill="none" stroke="oklch(var(--text)/.65)" strokeWidth="1.5">
            <animate attributeName="opacity" values=".55;1;.55" dur={`${2.2 + i * .35}s`} repeatCount="indefinite" />
            <path d={`M${x} 159L${x + 14} 55l14 104M${x + 5} 119h18M${x + 3} 136h22M${x + 8} 88h12M${x + 14} 55v104`} />
          </g>
        ))}
        <path d="M296 72c22-8 42-8 64 0M360 72c20-8 39-8 58 0" fill="none" stroke="oklch(var(--text)/.34)" />

        {[104, 173, 247, 296, 360, 418].map((x, i) => (
          <circle key={x} cx={x} cy={i < 3 ? 131 : 83} r="3.5" fill="oklch(var(--primary))" filter="url(#glow)">
            <animate attributeName="r" values="2.5;6;2.5" dur="1.8s" begin={`${i * .2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values=".35;1;.35" dur="1.8s" begin={`${i * .2}s`} repeatCount="indefinite" />
          </circle>
        ))}

        <text x="10" y="18" className="fill-text-muted font-mono text-[11px]">
          P = √3 VI cos φ
          <animate attributeName="y" values="18;12;18" dur="3.5s" repeatCount="indefinite" />
        </text>
        <text x="309" y="22" className="fill-text-muted font-mono text-[11px]">
          V₂/V₁ = N₂/N₁
          <animate attributeName="y" values="22;28;22" dur="4.2s" repeatCount="indefinite" />
        </text>
        <text x="164" y="199" className="fill-text-muted font-mono text-[11px]">
          ωs = 2πf
          <animate attributeName="x" values="157;171;157" dur="4.6s" repeatCount="indefinite" />
        </text>
      </svg>
    </div>
  );
}
