/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#fea116',
      dark: '#0F172B'
    },
    fontFamily: {
      primary: ['Heebo', 'sans-serif'],
      secondary: ['Nunito', 'sans-serif'],
      third: ['Pacifico', 'cursive'],
    },
  },
};
export const plugins = [];
