/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softBlue: 'hsl(231, 69%, 60%)',
          softRed: 'hsl(0, 94%, 66%)'
        },
        neutral: {
          grayishBlue: 'hsl(229, 8%, 60%)',
          veryDarkBlue: 'hsl(229, 31%, 21%)'
        }
      },
      fontSize: {
        base: '18px'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500
      }
    },
  },
  plugins: [],
}
