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
      gray: "#1A1A1A",
      "white-text": "#FAFAFA",
      "dark-bg": "#0B0B0B",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px)
      xl: { max: "1279px" },
      // => @media (max-width: 1279px)
      lg: { max: "1023px" },
      // => @media (max-width: 1023px)
      md: { max: "767px" },
      // => @media (max-width: 767px)
      sm: { max: "639px" },
      // => @media (max-width: 639px)
    },
    container: {
      padding: "auto",
      center: true,
    },
  },
  plugins: [],
};
