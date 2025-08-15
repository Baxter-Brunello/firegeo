/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#E0F8FA',
          100: '#B3ECF0',
          200: '#80DEE6',
          300: '#4DCFD9',
          400: '#26C3CF',
          500: '#00A1B3', // your main teal
          600: '#008B9A',
          700: '#006E7B',
          800: '#004E55',
          900: '#00363B',
        },
      },
    },
  },
  plugins: [],
}
