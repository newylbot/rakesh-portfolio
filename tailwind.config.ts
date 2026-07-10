import type { Config } from "tailwindcss";

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
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4.8vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(1.8rem, 3.6vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.5rem, 3vw, 2.2rem)", { lineHeight: "1.15" }],
        h3: ["clamp(1.2rem, 2vw, 1.5rem)", { lineHeight: "1.25" }],
        "body-lg": ["clamp(1rem, 1.4vw, 1.125rem)", { lineHeight: "1.7" }],
        meta: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.18)",
        glow: "0 0 0 1px var(--border), 0 0 32px -8px var(--primary)",
      },
      keyframes: {
        "pulse-trace": {
          "0%": { strokeDashoffset: "120" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-trace": "pulse-trace 3s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
