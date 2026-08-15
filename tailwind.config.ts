import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Placeholder "warm and respectful" palette — NOT confirmed as
        // authentically Moghamo. TODO: replace with colors/patterns
        // confirmed by village association leaders or community members
        // before this site is treated as final branding.
        terracotta: "#D85A30",
        ochre: "#EF9F27",
        cream: "#FAEEDA",
        bark: "#412402",
        leaf: "#27500A",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
