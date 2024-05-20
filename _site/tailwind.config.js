const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content:[
    './_includes/**/*.html',
    './_includes/**/*.slim',
    './_layouts/**/*.html',
    './_layouts/**/*.slim',
    './**/*.html',
    './**/*.slim',
    './*.html',
    './*.slim',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        serif: [...defaultTheme.fontFamily.serif],
      },      
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}