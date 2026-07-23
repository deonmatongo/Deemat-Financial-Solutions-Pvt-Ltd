import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deemat brand palette (extracted from logo)
        onyx: {
          DEFAULT: "#1A1A1A",
          50: "#f5f5f5",
          800: "#242424",
          900: "#1A1A1A",
          950: "#0f0f0f",
        },
        burgundy: {
          DEFAULT: "#8B2635",
          light: "#A8394A",
          dark: "#7A2021",
          deeper: "#5E181F",
        },
        slate: {
          brand: "#2B303A",
          soft: "#3A4150",
        },
        mist: "#F8F9FA",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(26,26,26,0.08), 0 4px 20px -4px rgba(26,26,26,0.06)",
        "card-hover":
          "0 8px 24px -6px rgba(139,38,53,0.18), 0 12px 40px -8px rgba(26,26,26,0.14)",
        cta: "0 8px 24px -8px rgba(139,38,53,0.45)",
      },
      backgroundImage: {
        "burgundy-gradient":
          "linear-gradient(135deg, #8B2635 0%, #7A2021 55%, #5E181F 100%)",
        "onyx-gradient":
          "linear-gradient(160deg, #242424 0%, #1A1A1A 60%, #0f0f0f 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "50%": { transform: "scale(1.05)", opacity: "0.25" },
          "100%": { transform: "scale(0.9)", opacity: "0.6" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-ring": "pulse-ring 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
