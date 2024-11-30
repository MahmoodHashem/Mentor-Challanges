/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {

      colors: {
        "veryDarkDesaturatedBlue-mainbg": "hsl(222, 26%, 31%)",
        "veryDarkDesaturatedBlue-togglebg": "hsl(223, 31%, 20%)",
        "veryDarkDesaturatedBlue-screengbg": "hsl(224, 36%, 15%)",
        "desaturatedDarkBlue-keybg": "hsl(225, 21%, 49%)",
        "desaturatedDarkBlue-keyshdow": "hsl(224, 28%, 35%)",
        "red": "hsl(6, 63%, 50%)",
        "darkRed": "hsl(6, 70%, 34%)", // Key shado
        "lightGrayishOrange": "hsl(30, 25%, 89%)",// (key background)
        "grayishOrange": "hsl(28, 16%, 65%)", //(key shadow)
      }

    },
  },
  plugins: [],
}

