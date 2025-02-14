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
        crown: "#e4a500",   // Donkerder geel voor de kroon (was #f6c028)
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
          DEFAULT: "#e4a500",  // Aangepast om te matchen met crown
          dark: "#d9a820",
        },
        green: {
          light: "#e8f5eb",
          DEFAULT: "#2fae55",
          dark: "#278f46",
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
