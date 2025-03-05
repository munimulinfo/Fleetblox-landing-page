import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(-260%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      scroll: "scroll 30s linear infinite",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
