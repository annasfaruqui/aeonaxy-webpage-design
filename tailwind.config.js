/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Quicksand", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-fit-220": "repeat(auto-fit, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
