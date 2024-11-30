/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme color tokens
        mainBackground: 'var(--main-background)',
        toggleKeypadBackground: 'var(--toggle-keypad-background)',
        screenBackground: 'var(--screen-background)',
        
        keyBackgroundPrimary: 'var(--key-background-primary)',
        keyShadowPrimary: 'var(--key-shadow-primary)',
        keyHoverPrimary: 'var(--key-hover-primary)',

        keyBackgroundSecondary: 'var(--key-background-secondary)',
        keyShadowSecondary: 'var(--key-shadow-secondary)',
        keyHoverSecondary: 'var(--key-hover-secondary)',

        keyBackgroundTertiary: 'var(--key-background-tertiary)',
        keyShadowTertiary: 'var(--key-shadow-tertiary)',
        keyHoverTertiary: 'var(--key-hover-tertiary)',

        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textTertiary: 'var(--text-tertiary)',
      }, 

      fontFamily:{
        'spartan': ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
