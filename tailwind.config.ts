import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white/100": "#fff",
        "content/surface": "#fff",
        "content/base": "#F9FAFA",
        "content/border": "#E4E7E8",
        "text/text-primary": "#141C24",
        "text/text-secondary": "#5C6970",
        "text/text-light": "#5C6970",
        "primary/default": "#4426D9",
        "slate/15": "#DFDFDF",
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "0.87875rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.025625rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1rem",
          },
        ],
        md: [
          "1.125rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "800",
          },
        ],
        lg: [
          "1.5rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "800",
          },
        ],
        xl: [
          "1.875rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
