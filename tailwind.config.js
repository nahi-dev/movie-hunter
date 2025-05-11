/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Changed from "class: 'dark'"
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./style/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
