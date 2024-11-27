/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)"
      }


    },
  },
  plugins: [],
}

