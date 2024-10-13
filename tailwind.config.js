/** @type {import('tailwindcss').Config} */


export default {
    content: ["./crowdfunding-landing-page/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "rules": {
    "property-no-unknown": [true, {
      "ignoreProperties": ["custom-property"]
    }]
  }
}