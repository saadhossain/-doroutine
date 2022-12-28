/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#373e98",
        "secondary": "#22489D",
        "accent": "#434343"
      },
      fontFamily: {
        'bigshoulder':['Big Shoulders Display', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}