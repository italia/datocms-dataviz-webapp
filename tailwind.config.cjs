const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
