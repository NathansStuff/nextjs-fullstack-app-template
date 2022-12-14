/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(30, 58, 75, 1)', // navy black / blue
        secondary: 'rgba(255, 55, 79, 1)', // red
        secondaryDark: '#1C3177',
        secondaryLight: '#447cf9',
        error: '#fff8e0',
        errorDark: '#FFBA00',
        success: '#27DA4C',
        grey: '#BDBDBD',
        lightGrey: '#D3D3D3',
        textPrimary: '#4E4E4E',
        tertiary: 'rgba(227, 238, 240, 1)', // light blue, background
      },
      boxShadow: {
        '3xl': '0 4px 4px rgb(0 0 0 / 25%)',
      },
      backgroundImage: {
        road: "url('/img/road.png')",
        mountains: "url('/img/mountains.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    ({ addUtilities }) => {
      addUtilities({
        '.fieldHeading': {
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
          fontSize: '32px',
          fontWeight: 700,
          paddingBottom: '0.25rem' /* 4px */,
          fontSize: '0.75rem' /* 12px */,
          lineHeight: '1rem' /* 16px */,
        },
      });
    },
    ({ addUtilities }) => {
      addUtilities({
        '.fieldHeading': {
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
          fontSize: '32px',
          fontWeight: 700,
          paddingBottom: '0.25rem' /* 4px */,
          fontSize: '0.75rem' /* 12px */,
          lineHeight: '1rem' /* 16px */,
        },
      });
    },
  ],
};
