/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fornavbar: ['Sacramento', 'cursive'],
        fornavbarmiddle: ['Agdasima','sans-serif'],
        body: ['Dancing Script']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}