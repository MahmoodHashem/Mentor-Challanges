/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        
        // Secondary color
        'secondary-red': 'hsl(0, 87%, 67%)',
        
        // Neutral colors
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
        'neutral-very-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-very-dark-violet': 'hsl(260, 8%, 14%)'
      },
      fontSize: {
        'body': '18px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
