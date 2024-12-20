/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#cca000',
      },
    fontFamily:{
      VazirmatnExtraLight: ['Vazirmatn-ExtraLight', 'sans-serif'],
      VazirmatnRegular: ['Vazirmatn-Regular', 'sans-serif'],
      VazirmatnBold: ['Vazirmatn-Bold']
    },
    boxShadow:{
      'dark-shadow':'1px -1px 5px 0px rgba(0,0,0,0.35);'
    }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

