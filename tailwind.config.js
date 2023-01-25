/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Google_Sans: ["Google Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Volkhov: ["Volkhov", "serif"],
        Open_Sans: ["Open Sans", "sans-serif"]
      },
      screens: {
        'xs' : {max : '500px'},
        'xxs' : {max : '390px'},
        'xsm' : {min: '770px', max: '900px'},
        'sm-max' : {max:'770px', min:'500px'},
        'xxsm' : {max:'616px', min:'500px'}
      },
      colors: {
        header_primary: ['#14183E'],
        header_secondary: ['#5E6282']
      }
    },
  },
  plugins: [],
}