module.exports = {
  darkMode: 'class',
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.md'
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        black: '#0f1c23',
        'black-light': '#1b2b34',
        blue: '#5a9bcf',
        teal: '#5fb3b3',
        'teal-dark': '#1A8384',
        grey: '#d8dee9',
        'grey-light': '#f4f6f9',
        'grey-dark': '#c2c7d0',
        'grey-darker': '#65737e',
        'grey-darkest': '#343d46',
        'red-light': '#ed6f7d',
        red: '#b3545e',
        purple: '#c5a5c5',
        'purple-dark': '#a979a9',
        yellow: '#fac863',
        'yellow-dark': '#d68232',
        white: '#fff',
      },
      fontSize: {
        xxs: '0.6rem'
      },
      inset: {
        '100': '100%'
      },
      screens: {
        xs: '450px'
      },
      width: {
        fill: 'calc(100vw - 16px)'
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
    },
  },
  variants: {},
  plugins: [],
}
