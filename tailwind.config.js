/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ssp: "Source Serif Pro, serif",
        ci : "Cormorant Upright, serif",
      },
      colors: {
        y: "#ffc017",
        g: '#1b8817',
      },
    },
  },
  plugins: [],
};
