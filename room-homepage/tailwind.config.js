/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGray: 'hsl(0, 0%, 63%)',
          black: 'hsl(0, 0%, 0%)',
          white: 'hsl(0, 0%, 100%)',
          veryDarkGray: 'hsl(0, 0%, 27%)',
        },
      },
      fontSize: {
        base: '12px',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
      }
    },
  },
  plugins: [],
}
