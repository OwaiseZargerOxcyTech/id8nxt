/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "110px": ["110px", "1.2"], // 110px font size with 1.2 line-height (optional)
        "25px": ["25px", "1.5"], // 25px font size with 1.5 line-height (optional)
        "55px": ["55px", "1.1"], // 55px font size with 1.1 line-height (optional)
      },
      screens: {
        "1xl": "1400px",
        "3xl": "1700px", // Adding the 3xl breakpoint
        "4xl": "1920px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Add Poppins as the primary font
        uni: ['"Uni Neue"', "sans-serif"],
      },
      colors: {
        primary: {
          red: "#da1f3d",
          navy: "#051432",
          black: "#333132",
        },
        secondary: {
          white: "#ffffff",
          lime: "#cadb36",
          gray: "#a7a9ac",
        },
      },
    },
  },
  plugins: [],
};
