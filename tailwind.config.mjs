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
        "90px": ["90px", "1.2"], // 110px font size with 1.2 line-height (optional)
        "22px": ["22px", "1.5"], // 25px font size with 1.5 line-height (optional)
        "55px": ["55px", "1.1"], // 55px font size with 1.1 line-height (optional)
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
