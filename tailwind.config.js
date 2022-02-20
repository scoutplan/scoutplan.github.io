const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './**/*.html',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}