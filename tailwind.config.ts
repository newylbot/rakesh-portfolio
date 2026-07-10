import type { Config } from "tailwindcss";

/**
 * Colors are defined as space-separated RGB channels in app/globals.css
 * (`--token: R G B`) so Tailwind's `<alpha-value>` opacity modifiers work,
 * e.g. `bg-primary/20`, `border-primary/50`.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

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
        bg: token("bg"),
        "bg-elevated": token("bg-elevated"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        text: token("text"),
        "text-muted": token("text-muted"),
        border: token("border"),
        primary: token("primary"),
        secondary: token("secondary"),
        accent: token("accent"),
        success: token("success"),
        warning: token("warning"),
        error: token("error"),
      },
      borderColor: {
        DEFAULT: "rgb(var(--border) / 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4.8vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h1: ["clamp(1.8rem, 3.6vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.5rem, 3vw, 2.2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.2rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        "body-lg": ["clamp(1rem, 1.4vw, 1.125rem)", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.7" }],
        meta: ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
