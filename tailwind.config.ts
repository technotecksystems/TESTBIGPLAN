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
        ink: {
          DEFAULT: "#12191F",
          70: "#3A4550",
          40: "#7A8590",
          10: "#E7E9EC",
        },
        electric: {
          DEFAULT: "#0A5DE9",
          10: "#E9F0FE",
          dark: "#083F9E",
        },
        signal: {
          DEFAULT: "#F1081B",
        },
        paper: {
          DEFAULT: "#FDFDFD",
          dark: "#F4F6F8",
        },
        success: "#0E8A5F",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(18, 25, 31, 0.06), 0 2px 6px -1px rgba(18, 25, 31, 0.03)",
        "card-hover": "0 12px 32px -4px rgba(18, 25, 31, 0.12), 0 4px 12px -2px rgba(10, 93, 233, 0.08)",
        nav: "0 2px 10px rgba(18, 25, 31, 0.05)",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
