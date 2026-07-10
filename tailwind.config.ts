import type { Config } from "tailwindcss";

/**
 * Colors are OKLCH. CSS vars in app/globals.css hold "L C H" triples
 * (e.g. --primary: 60% 0.17 52) so Tailwind's <alpha-value> modifiers work,
 * e.g. bg-primary/20, border-text/10.
 */
const c = (name: string) => `oklch(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        "bg-elevated": c("bg-elevated"),
        surface: c("surface"),
        "surface-2": c("surface-2"),
        text: c("text"),
        "text-muted": c("text-muted"),
        border: c("border"),
        primary: c("primary"),
        "on-primary": c("on-primary"),
        secondary: c("secondary"),
        accent: c("accent"),
        success: c("success"),
        warning: c("warning"),
        error: c("error"),
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.4rem, 5.4vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h1: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.6rem, 3.2vw, 2.4rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.2rem, 2vw, 1.6rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1.05rem, 1.4vw, 1.2rem)", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.7" }],
        meta: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
      },
      maxWidth: {
        "6xl": "74rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
