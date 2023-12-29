const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
    },
  },
};
