/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex:{
        '25':'0 0 25%'
      },
      minHeight:{
        '80':'80rem'
      }
    },
  },
  plugins: [],
}

