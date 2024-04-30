/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      black: {
        DEFAULT: "#2B2C37",
      },
      gray: {
        DEFAULT: "#E1DFDF",
        darker: "#979B9E",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      red: {
        DEFAULT: "#FF6961",
      },
    },
    extend: {
      boxShadow: {
        soft: "0 4px 40px 0 rgba(43, 44, 55, 0.1)",
      },
      // Note that Helvetica Neue isn't a browser base font and isn't available on Google Fonts,
      // therefore I assume that you are testing on a Mac or have Helvetica Neue installed on your system.
      // Otherwise the font falls back to another sans-serif font.
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
