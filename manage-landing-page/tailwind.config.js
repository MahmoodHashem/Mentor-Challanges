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
          red: 'hsl(12, 88%, 59%)',
          blue: 'hsl(228, 39%, 23%)'
        },
        neutral: {
          grayishBlue: 'hsl(227, 12%, 61%)',
          darkBlue: 'hsl(233, 12%, 13%)',
          paleRed: 'hsl(13, 100%, 96%)',
          lightGray: 'hsl(0, 0%, 98%)'
        }
      },
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif']
      },
      fontSize: {
        base: '16px'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}
