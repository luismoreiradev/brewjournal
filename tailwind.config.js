/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  "./src/pages/Home.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      merriweather:['Merriweather'],
      bitter:['Bitter'],
      montserrat:['Montserrat']

    },
  },
  plugins: [],
}

