/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
