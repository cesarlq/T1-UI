/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: 't1-',
  theme: {
    extend: {
      colors: {
        primary: '#E84142',
        secondary: '#1a1a1a',
      },
    },
  },
  corePlugins: {
    preflight: false, // Importante para MUI
  },
  plugins: [],
}