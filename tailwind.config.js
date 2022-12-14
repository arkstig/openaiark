/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      s: '440px',
      sm: '680px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000000',
      purple: '#552FDE',
      purple2: '#2D1680',
      white: '#FFFFFF',
      dark: '#0E0F10',
      dark2: '#181119',
      gray: '#2E2C33',
      gray2: 'rgba(255, 255, 255, 0.014)',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
