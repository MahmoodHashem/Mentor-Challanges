/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        'darknavy': '#1a2a33',
        'semidarknavy': '#1f3641',
        'silver': '#a8bfc9',
        'silverhover': '#dbe8ed',
        'lightblue': '#31c3bd',
        'lightbluehover': '#65e9e4',
        'lightyellow': '#f2b137',
        'lightyellowhover': '#ffc860'
      },

      boxShadow: {
        'custom-shadow': '0 7px #10212A', 
        'custom-sm': '0 4px #10212A', 
        'inner-yellow': 'inset 0 -5px #CC8B13', 
        'inner-blue': 'inset 0 -5px #118C87'
      }, 

      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      }

      
    },

  },
  plugins: [],
}

