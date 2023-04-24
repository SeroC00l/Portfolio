/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 20px 10px rgba(39, 197, 228, 0.9)',
        '5xl': '0 2px 2px rgba(39, 197, 228, 0.2)', 
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        'homeColor': '#0ef',
        'grayLight': 'rgba(0, 0, 0, .1)',
      },
      spacing: {
        '128': '34rem',
      },
      flex: {
        '2': '1 1 20rem'
      },
      boxShadow: {
        '3xl': '0 0 1rem #0ef',
        '4xl': '0 0 1rem rgb(31, 41, 55)',
      }
    },
  },
  plugins: [],
};
