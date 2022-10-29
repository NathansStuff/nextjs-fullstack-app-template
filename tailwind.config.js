/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#48AAE1',
        // primaryFocus: '#0078DC',
        // primaryHover: '#238ade',
        // lightGray: '#F4F4F4',
        // midGray: '#C4C4C4',
        // darkGray: '#555555',
        // darkBlack: '#3A3939',
        // green: '#60C664',
        // errorBg: '#FFC300',

        primary: '#F44BB6',
        secondary: '#447CF9',
        secondaryDark: '#1C3177', // eg, Edit Loan Structure title
        secondaryLight: '#447cf9', // eg, Dropdown select
        error: '#fff8e0',
        errorDark: '#FFBA00',
        success: '#27DA4C',
        grey: '#BDBDBD',
        lightGrey: '#D3D3D3',
        textPrimary: '#4E4E4E',
      },
      // screens: {
      //   lg: '1190px',
      // },
    },
  },
  plugins: [
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
