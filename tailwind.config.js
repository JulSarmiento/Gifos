/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'purple' : '#572EE5',
      'clear-purple' : 'rgba(86, 46, 229, 0.849)',
      'light-gray' : '#F3F5F8',
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
      'xl' : '35px'
    }
    
  },
  plugins: [

  ],
}
