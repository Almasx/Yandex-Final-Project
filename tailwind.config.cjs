/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: { 100: "#333333", 200: "#1A1A1A" },
      "white-text": "#FAFAFA",
      "dark-bg": "#0B0B0B",
      "light-gray": { 100: "#cccccc", 200: "#e5e5e5" },
      "dark-text": "#050505",
      "light-bg": "#f4f4f4",
    },

    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      pulse: {
        "0%" : {
          opacity: 1
        },
        "100%": {
          opacity: 1
        },
        "50%":{
          opacity: 0.5
        }
      }
      
    },
    animation: {
      "scroll-infinite": "scroll 10s infinite linear",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    container: {
      padding: "auto",
      center: true,
    },
  },
  plugins: [],
};
