const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        gray: {
          300: '#484848',
          400: '#2D2D2D',
          500: '#242424'
        },
        purple: {
          50: '#f7f2ff',
          100: '#e5dbff',
          200: '#d2c2ff',
          300: '#bfa9ff',
          400: '#ac8fff',
          500: '#9966ff',
          600: '#804ee6',
          700: '#663fb3',
          800: '#4d3080',
          900: '#331f4d',
        },
        blue: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#6875f5',
          600: '#5850ec',
          700: '#5145cd',
          800: '#42389d',
          900: '#362f78',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
