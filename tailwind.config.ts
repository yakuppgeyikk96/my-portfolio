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
        primary: {
          100: "#f5a976",
          200: "#f38f5d",
          300: "#f17744",
          400: "#ef5f2b",
          500: "#ed4712",
          600: "#d13f11",
          700: "#b3360f",
          800: "#962e0e",
          900: "#7a260c",
        },
        dark: {
          100: "#7a7e83",
          200: "#64696f",
          300: "#4e535a",
          400: "#383e46",
          500: "#222831",
          600: "#1f242c",
          700: "#1b2027",
          800: "#181c22",
          900: "#14181d",
        },
        light: "#f4f4f4",
        twitter: "#1DA1F2",
        linkedin: "#2867B2",
        github: "#333",
      },
      backgroundColor: {
        primary: {
          100: "#f5a976",
          200: "#f38f5d",
          300: "#f17744",
          400: "#ef5f2b",
          500: "#ed4712",
          600: "#d13f11",
          700: "#b3360f",
          800: "#962e0e",
          900: "#7a260c",
        },
        light: "#f4f4f4",
        dark: {
          100: "#7a7e83",
          200: "#64696f",
          300: "#4e535a",
          400: "#383e46",
          500: "#222831",
          600: "#1f242c",
          700: "#1b2027",
          800: "#181c22",
          900: "#14181d",
        },
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
