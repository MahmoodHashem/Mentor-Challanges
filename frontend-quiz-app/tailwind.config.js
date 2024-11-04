/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        "custom-purple": "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#626C7F",
        "light-grey": "#F4F6FA",
        "custom-green": "#26D782",
        red: "#EE5454",
        "yellow-200": "rgb(255, 241, 233)"
      },
      width: {
        "toggle-width": "35px", 
        "circle-size": "15px"
      },
      height:{
        'circle-size': "15px"
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      boxShadow: {
        sm: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
    },
  },
  plugins: [],
}