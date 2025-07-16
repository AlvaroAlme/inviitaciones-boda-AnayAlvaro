/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A3A380",      // beige verdoso
        lightBeige: "#D6CE93",
        cream: "#EFEBCE",
        dustyCoral: "#D8A48F",
        mutedRose: "#BB8588",
      },
      fontFamily: {
        script: ["'Mr De Haviland'", "cursive"],
        serifTitle: ["'Playfair Display'", "serif"],  // O la que uses para títulos
        serifBody: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
