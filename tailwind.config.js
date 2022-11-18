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
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    // We have to use plugin to let intelligence pick up our custom classname's style
    // A time consuming process, but it's worth it
    // ref: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
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
