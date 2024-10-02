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
        white100: "#fff",
        contentSurface: "#fff",
        contentBase: "#F9FAFA",
        contentBorder: "#E4E7E8",
        greyCold50: "#F1F3F4",
        textPrimary: "#141C24",
        textSecondary: "#5C6970",
        textLight: "#5C6970",
        primaryDefault: "#4426D9",
        lightBlue50: "#E5F4FF",
        lightBlue700: "#0077CC",
        slate15: "#DFDFDF",
      },
      backgroundImage: {
        "button-gradient-primary":
          "linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)",
        "profile-card-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #FFFAF5 100%);",
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
        base: "1rem",

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
