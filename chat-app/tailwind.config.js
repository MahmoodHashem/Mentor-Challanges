/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Text Colors
        'pale-violet': 'hsl(276, 100%, 81%)',
        'moderate-violet': 'hsl(276, 55%, 52%)',
        'dark-violet': 'hsl(271, 15%, 43%)',
        'grayish-blue': 'hsl(206, 6%, 79%)',
        'very-dark-violet': 'hsl(271, 36%, 24%)',
        'dark-grayish-violet': 'hsl(270, 7%, 64%)',
        
        // Gradient Colors
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        
        // Secondary Colors
        'white': 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 20%, 96%)',
        'very-light-magenta': 'hsl(289, 100%, 72%)'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      fontSize: {
        'base': '16px'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right,hsl(264, 100%, 61%), hsl(293, 100%, 63%))',
        'gradient-secondary': 'linear-gradient(to right,hsl(293, 100%, 63%), hsl(264, 100%, 61%))'

      }
    },
  },
  plugins: [
    scrollbar({ nocompatible: true }),
  ],
}
