const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,pug,njk}'],
    darkMode: 'class',
    safelist: [],
    theme: {
      extend: {
        colors: {
          primary: colors.blue,
        },
      },
    },
    plugins: [],
  }