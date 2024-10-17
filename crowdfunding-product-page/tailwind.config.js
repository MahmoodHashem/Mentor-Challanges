/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moderate-cyan": 'hsl(176, 50%, 47%)',
        "dark-cyan": 'hsl(176, 72%, 28%)', 
        'dark-gray': 'hsl(0, 0%, 48%)', 
        'black': 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        CommissionerBold: ['CommissionerBold', 'sans-serif'],
        CommissionerRegular: ['CommissionerRegular', 'sans-serif']
      },
      backgroundImage: {
        'desktop-hero-pattern': "url('./src/assets/images/image-hero-desktop.jpg')",
        'mobile-hero-pattern': "url('./src/assets/images/image-hero-mobile.jpg')",
      }, 
      boxShadow: {
        'inset': 'inset 0 0rem 10rem rgb(0, 0, 0)',
      } , 
    
    },
  },
  plugins: [],
}

