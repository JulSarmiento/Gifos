/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
    
  theme: {
    colors: {
      'purple' : '#572EE5',
      'clear-purple' : 'rgba(86, 46, 229, 0.849)',
      'clear-gray' : '#f3f5f88c',
      'medium-gray' : '#CDD6E0',
      'light-gray'  : '#F3F5F8',
      'cian' : '#50E3C2 ',
      'dark-gray' : '#37383C',
      'light-black' : '#222326',
      'black': '#000000',
      'white' : '#fff',
    },

    fontFamily: {
      montserrat : ['Montserrat', 'sans-serif'],
      roboto : ['Roboto', 'sans-serif']
    },

    fontSize: {
      'xs' : '13px',
      'sm' : '16px',
      'md' : '18px',
      'lg' : '25px',
      'llg' : '28px',
      'xl' : '35px'
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '680px',
      // => @media (min-width: 680px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
