/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-white': 'hsl(0, 0%, 100%)',
        'space-black': 'hsl(240, 67%, 8%)',
        'dark-blue': 'hsl(240, 17%, 26%)',
        'slate-gray': 'hsl(240, 6%, 54%)',
        'ocean-blue': 'hsl(194, 48%, 49%)',
        'golden-sand': 'hsl(33, 82%, 61%)',
        'cosmic-purple': 'hsl(263, 67%, 51%)',
        'mars-red': 'hsl(10, 63%, 51%)',
        'jupiter-orange': 'hsl(2, 68%, 53%)',
        'saturn-rust': 'hsl(17, 73%, 46%)',
        'uranus-teal': 'hsl(169, 73%, 44%)',
        'neptune-blue': 'hsl(222, 87%, 56%)'
  
      }, 
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}

