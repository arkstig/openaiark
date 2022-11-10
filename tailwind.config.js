/** @type {import('tailwindcss').Config} */
export const content = [
  '.src/**/*.{js,ts,jsx,tsx}',
  '.src/components/**/*.{js,ts,jsx,tsx}',
  '/openaiark/src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {},
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
};
export const plugins = [];
