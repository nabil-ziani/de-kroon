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
        // Primaire kleuren van het logo
        girl: "#fa5776",    // Roze voor meisje
        boy: "#1dbdfe",     // Lichtblauw voor jongen
        crown: "#f6c028",   // Geel voor de kroon
        accent: "#2fae55",  // Groen voor subtext/accenten
        
        // Afgeleide kleuren voor moderne UI
        pink: {
          light: "#ffd9e3",
          DEFAULT: "#fa5776",
          dark: "#d94563",
        },
        azure: {
          light: "#e8f7ff",
          DEFAULT: "#1dbdfe",
          dark: "#199ad4",
        },
        yellow: {
          light: "#fff3d6",
          DEFAULT: "#f6c028",
          dark: "#d9a820",
        },
        green: {
          light: "#e8f5eb",
          DEFAULT: "#2fae55",
          dark: "#278f46",
        },
      },
    },
  },
  plugins: [],
};

export default config;
