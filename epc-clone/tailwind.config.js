/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#f1f2f2',
        'header-color': '#e5e7eb',
        'footer-color': '#04081D',
      },
      margin: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}

