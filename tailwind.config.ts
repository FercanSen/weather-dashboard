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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryDark: "var(--primary-dark)",

        secondary: "var(--secondary)",
        secondaryLight: "var(--secondary-light)",
        secondaryDark: "var(--secondary-dark)",

        accent: "var(--accent)",
        accentLight: "var(--accent-light)",
        accentDark: "var(--accent-dark)",

        destructive: "var(--destructive)",
        destructiveLight: "var(--destructive-light)",
        destructiveDark: "var(--destructive-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
