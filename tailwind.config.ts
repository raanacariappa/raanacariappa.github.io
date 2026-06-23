import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark cinematic motorsport
        void: "#060607",
        coal: "#0b0b0d",
        carbon: "#131316",
        ash: "#1b1b1f",
        bone: {
          DEFAULT: "#f4f3f0",
          dim: "#a8a7a3",
          faint: "#6f6e6b",
        },
        rosso: {
          DEFAULT: "#ff2e2e",
          deep: "#c8161c",
          glow: "#ff5a4d",
        },
        line: "rgba(244, 243, 240, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wide2: "0.18em",
        wide3: "0.3em",
      },
      maxWidth: {
        shell: "1340px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
