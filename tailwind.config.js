const defaultTheme = require('tailwindcss/defaultTheme')

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
      minHeight: {
        page: 'calc(100vh - 1rem)'
      },
      inset: {
        '100': '100%'
      },
      width: {
        fill: 'calc(100vw - 16px)'
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
    },
    fontFamily: {
      sans: [
        'Marcher',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        'sans-serif'
      ],
      mono: ['Cartograph', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    }
  },
  plugins: [],
}
