/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9181FF',
        primaryLight: '#A294FF',
        primaryEvenLight: '#EDEAF9',
        secondary: '#F8FE91',
        tertiary: '#292E36',
        textPrimary: '#373C42',
        textSecondary: '#B7BCC2',
      },
      fontFamily: {
        heading: 'Yeseva One',
        subHeading: 'Unica One',
        para: 'Nunito Sans',
      }
    },
  },
  plugins: [],
}

