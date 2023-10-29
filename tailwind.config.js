/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme:"#3e0075",
        primary:"#8039DF",
        light:"#ece6ff",
        extra_light:"#f9f4ff",
        shade1:"#4cfec8",
        shade2:"#3caff2"
      },
      fontFamily: {
        inter:['Inter',' sans-serif'],
        cour:['Courgette', 'cursive']
      },
    },
  },
  plugins: [],
}