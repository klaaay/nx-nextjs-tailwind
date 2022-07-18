/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/web-app/components/**/*.{js,jsx,ts,tsx}',
    './apps/web-app/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: "font-family: 'Drone Ranger Pro';"
      fontFamily: 'Drone Ranger Pro',
    },
    colors: {
      mainColor: '#3a3841',
      mainColor: '#FBC625',
      thirdColor: '#89888B',
      empty: 'transparent',
      black: "#000000",
      lavendarBlue: "#6366f1",
      warningColor: "#da458f"
      // buttonMain: 'linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%)',
    },
  },
  plugins: [],
};
