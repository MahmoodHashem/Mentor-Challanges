/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chineseBlack: "hsl(0, 0%, 8%)", 
        eucalyptus: "hsl(153, 71%, 59%)", 
        raisinBlack: "hsl(0, 0%, 14%)",  
        lightSilver: "hsl(0, 0%, 85%)",
        white: "hsl(0, 0%, 100%)", 
        bittersweet: "hsl(7, 100%, 68%)"
      },

      fontFamily:{
        SpaceGrotesk: [" SpaceGrotesk", "sans-serif"]
      }, 
      backgroundImage:{
        "gradientToTop": "linear-gradient(to top, hsl(0, 0%, 14%), transparent)"
      }
    },
  },
  plugins: [],
}

