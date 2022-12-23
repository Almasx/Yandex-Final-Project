/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
    },
    colors: {
      primary: {
        light: "#FFFFFF",
        dark: "#0B0B0B",
      },
      gray: {
        dark: {
          DEFAULT: "#333333",
          secondary: "#1A1A1A",
        },
        light: {
          DEFAULT: "#D4D4D4",
          secondary: "#e5e5e5",
        },
      },
    },

    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      pulse: {
        "0%": {
          opacity: 1,
        },
        "100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
    },
    animation: {
      "scroll-infinite": "scroll 10s infinite linear",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    container: {
      padding: "auto",
      center: true,
    },
  },
  plugins: [],
};
