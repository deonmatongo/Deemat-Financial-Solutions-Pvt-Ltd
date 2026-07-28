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
        // Deemat brand palette — Navy & Gold
        navy: {
          DEFAULT: "#1B2D5D",
          light: "#2A4080",
          dark: "#14224A",
          50: "#EEF1F8",
          800: "#2A4080",
          900: "#1B2D5D",
          950: "#0D1730",
        },
        gold: {
          DEFAULT: "#C59A38",
          light: "#E6C96A",
          dark: "#A57A22",
          deeper: "#8A6018",
          highlight: "#F3DE8B",
        },
        slate: {
          brand: "#8A93A5",
          soft: "#E7EAF0",
        },
        mist: "#F8F9FB",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(27,45,93,0.08), 0 4px 20px -4px rgba(27,45,93,0.06)",
        "card-hover":
          "0 8px 24px -6px rgba(197,154,56,0.18), 0 12px 40px -8px rgba(27,45,93,0.14)",
        cta: "0 8px 24px -8px rgba(197,154,56,0.45)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C59A38 0%, #A57A22 55%, #8A6018 100%)",
        "navy-gradient":
          "linear-gradient(160deg, #2A4080 0%, #1B2D5D 60%, #14224A 100%)",
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
