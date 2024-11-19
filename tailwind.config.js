/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    colors: {
      body: "#F1F8FF",
      primary: '#fea116',
      secondary: '#666565',
      dark: '#0F172B'
    },
    fontFamily: {
      primary: ['Heebo', 'sans-serif'],
      secondary: ['Nunito', 'sans-serif'],
      third: ['Pacifico', 'cursive'],
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      zoomIn: {
        '0%': { transform: 'scale(0.5)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.5s ease-out',
      zoomIn: 'zoomIn 0.6s ease-in-out',
    },
  },
};
export const plugins = [];
