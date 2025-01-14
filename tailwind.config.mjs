/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px', // Adding the 3xl breakpoint
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as the primary font
        uni: ['"Uni Neue"', 'sans-serif'],
      },
      colors: {
        primary: {
          red: '#da1f3d',
          navy: '#051432',
          black: '#333132',
        },
        secondary: {
          white: '#ffffff',
          lime: '#cadb36',
          gray: '#a7a9ac',
        },
      },
    },
    
  },
  plugins: [],
};
