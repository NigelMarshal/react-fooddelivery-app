module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#071C4D',
        'gray': {
          DEFAULT: '#838DA6',
          light: '#F4F6F9'
        },
      },
      fontFamily: {
        body: ['Inter']
      },
      fontSize: {
        '2xl': '1.625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
