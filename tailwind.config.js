const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        title: ['Anton', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px',
      },
      colors: {
        a: {
          beige: '#fffae6',
          pink: '#f3484c',
          charcoal: '#191818',
          lime: '#6ac1ac',
          orange: '#fa6e28',
          navy: '#272630',
          yellow: '#fdbe51',
        },
      },
      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
