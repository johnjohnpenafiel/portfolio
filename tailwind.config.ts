import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xm: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "4.5rem",
      title: "5rem",
    },
    extend: {
      colors: {
        lightBackground: "rgb(249, 250, 251)",
      },
      fontFamily: {
        kodchasan: ["Kodchasan", "sans-serif"],
      },
      keyframes: {
        beam: {
          "0%": { height: "0%", opacity: "1" },
          "50%": { height: "100%", opacity: "1" },
          "100%": { height: "100%", opacity: "0" },
        },
      },
      animation: {
        beam: "beam 1.5s ease-out forwards",
      },
      scrollbar: {
        none: {
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
