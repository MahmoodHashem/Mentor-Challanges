/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'dark-blue-300': 'rgb(11, 13, 23, 0.3)',
  			'dark-blue-400': 'rgb(11, 13, 23, 0.5)',
  			'dark-blue-600': 'rgb(11, 13, 23, 0.6)',
  			'dark-blue-700': 'rgb(11, 13, 23, 0.8)',
  			'dark-blue-900': 'rgb(11, 13, 23)',
  			'light-blue-100': 'rgb(208, 214, 249, 0.5)',
  			'light-blue-200': 'rgb(208, 214, 249, 0.7)',
  			'light-blue-300': 'rgb(208, 214, 249)'
  		},
  		fontFamily: {
  			Bellefair: ['Bellefair', 'serif'],
  			'Barlow-Condensed': ['Barlow Condensed', 'san-serif']
  		},
  		fontSize: {
  			'1': '14px',
  			'2': '16px',
  			'3': '18px',
  			'4': '28px',
  			'5': '32px',
  			'6': '56px',
  			'7': '100px',
  			'8': '144px'
  		},
  		space: {
  			'2': '2px',
  			'4': '4px',
  			'8': '8px',
  			'12': '12px',
  			'16': '16px',
  			'24': '24px',
  			'32': '32px',
  			'40': '40px',
  			'64': '64px',
  			'80': '80px',
  			'96': '96px',
  			'128': '128px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

}

