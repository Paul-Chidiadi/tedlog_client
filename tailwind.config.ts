import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      hsp: "1066px",
      xl: "1440px",
    },
    extend: {
      colors: {
        madeinblacc: "#221911",
        theddi: "#ECFOF1",
        theddipost: "#981E0B",
        warmwhite: "#FAF8F0",
        deepTeal: "#008080",
        neutral: "#556B2F",
        burnt: "#3D2B1F",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 4px #221911",
      },
    },
  },
  plugins: [],
};
export default config;
