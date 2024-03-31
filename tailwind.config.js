/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        munich: "url('./src/assets/munich.avif')",
      },
      colors: {
        primary: 'var(--color-primary)',
        textColor: 'var(--color-text)',
        background: 'var(--color-background)',
      },
      maxWidth: {
        navWidth: '1000px',
      },
      width: {
        navWidth: '1000px',
      },
      fontFamily: {
        comfortaaLight: ['Comfortaa-Light'],
        comfortaaRegular: ['Comfortaa-Regular'],
        comfortaaMedium: ['Comfortaa-Medium'],
        comfortaaSemiBold: ['Comfortaa-SemiBold'],
        comfortaaBold: ['Comfortaa-Bold'],
        robotoThin: ['Roboto-Thin'],
        robotoBold: ['Roboto-Bold'],
        robotoRegular: ['Roboto-Regular'],
        robotoLight: ['Roboto-Light'],
        robotoMedium: ['Roboto-Medium'],
      },
    },
  },
  plugins: [],
};
