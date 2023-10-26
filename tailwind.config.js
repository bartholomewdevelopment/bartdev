/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'madBlack': '#212735',
      'primary': '#0045ff',
      'white': '#FFFFFF',
      'input': '#F6F8FB',
      'red': '#FF0000',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#6D7486',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}

