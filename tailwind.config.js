/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#48AAE1',
        primaryFocus: '#0078DC',
        primaryHover: '#238ade',
        lightGray: '#F4F4F4',
        midGray: '#C4C4C4',
        darkGray: '#555555',
        darkBlack: '#3A3939',
        green: '#60C664',
        errorBg: '#FFC300',
      },
      // screens: {
      //   lg: '1190px',
      // },
    },
  },
  plugins: [],
};
