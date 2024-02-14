/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comfortaaLight: ['Comfortaa-Light'],
        comfortaaRegular: ['Comfortaa-Regular'],
        comfortaaMedium: ['Comfortaa-Medium'],
        comfortaaSemiBold: ['Comfortaa-SemiBold'],
        comfortaaBold: ['Comfortaa-Bold'],
      },
    },
  },
  plugins: [],
};
