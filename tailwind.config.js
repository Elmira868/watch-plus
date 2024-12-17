/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#cca000',
      },
      fontFamily: {
        'Iran_lighter': 'Iran_lighter',
        'Iran_Medium': 'Iran_Medium',
        'Iran_Bold': 'Iran_Bold',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

