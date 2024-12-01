/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: 'hsl(233, 26%, 24%)',
          limeGreen: 'hsl(136, 65%, 51%)',
          brightCyan: 'hsl(192, 70%, 51%)'
        },
        neutral: {
          grayishBlue: 'hsl(233, 8%, 62%)',
          lightGrayishBlue: 'hsl(220, 16%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },
      fontSize: {
        body: '18px'
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif']
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}
