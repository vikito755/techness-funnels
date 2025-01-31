import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#fef9ee",
          "100": "#fef2d6",
          "200": "#fbe1ad",
          "300": "#f8ca79",
          "400": "#f5aa42",
          "500": "#f18c16",
          "600": "#e37513",
          "700": "#bc5a12",
          "800": "#954617",
          "900": "#783c16",
          "950": "#411c09",
        },
      },
    },
  },
  plugins: [],
};
export default config;
