/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  fontFamily : {
    anton:['Anton', 'sans-serif']
  },
  plugins: [],
}

