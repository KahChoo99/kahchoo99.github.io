/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#effaf3",
          100: "#dff5e7",
          200: "#bfeace",
          300: "#9fdfb6",
          400: "#7fd49d",
          500: "#5fc985",
          600: "#49b06e",
          700: "#3a8b58",
          800: "#2b6641",
          900: "#1d412b",
        },
      },
    },
  },
  plugins: [],
};
