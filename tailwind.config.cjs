/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
      gray: { 100: "333333", 200: "#1A1A1A" },
      "white-text": "#FAFAFA",
      "dark-bg": "#0B0B0B",
      "light-gray": { 100: "cccccc", 200: "#e5e5e5" },
      "dark-text": "#050505",
      "light-bg": "#f4f4f4",
    },

    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "scroll-infinite": "scroll 10s infinite linear",
    },
    container: {
      padding: "auto",
      center: true,
    },
  },
  plugins: [],
};
