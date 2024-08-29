/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00a9ff',
        'light-blue': '#a0e9ff',
      },
    },
  },
  plugins: [],
}

