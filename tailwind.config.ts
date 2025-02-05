import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        themeLightBlue: "rgb(var(--lightblue))",
        themeDarkBlue: "rgb(var(--darkblue))",
        themeYellow: "rgb(var(--yellow))",
        themeGreen: "rgb(var(--green))",
        themeBrown: "rgb(var(--brown))",
      },
    },
  },
  plugins: [],
} satisfies Config;
