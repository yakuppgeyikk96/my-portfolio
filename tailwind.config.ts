import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-light": "#4c9aff",
        dark: "#333",
        light: "#f4f4f4",
        twitter: "#1DA1F2",
        linkedin: "#2867B2",
        github: "#333",
      },
      backgroundColor: {
        primary: "#2563eb",
        "primary-light": "#4c9aff",
        light: "#f4f4f4",
        dark: "#333",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
