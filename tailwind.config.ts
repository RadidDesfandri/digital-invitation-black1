import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        corinthia: ["var(--font-corinthia)", "cursive"],
      },
      colors: {
        secondaryBlack: "#131010",
        primaryBlack: "#1A1A1D",
        primaryGray: "#3C3D37",
        primaryPink: "#E195AB",
      },
    },
  },
  plugins: [],
} satisfies Config;
