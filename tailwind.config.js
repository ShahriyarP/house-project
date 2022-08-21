/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '40vw': '40vw',
        '75vw': '75vw',

      },
      height: {
        '170px': '170px',
        '130px': '130px',
      },
      minWidth: {
        '1/2': '40vw',
      },
      colors: {
        one: '#535A3B',
        two: '#CEDCC3',
        three: '#CEDCC3'
      },
      fontFamily: {
        yekanBakh: ["yekanBakh", "sans-serif"],
      },
      borderRadius: {
        'large': '110px',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },

    }
  },
}
