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
        blue: "#50aae3",    // Lichter, vrolijker blauw
        green: "#7ac991",   // Fris groen
        yellow: "#fdcf71",  // Warm geel
        red: "#e57373"      // Zacht rood
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
