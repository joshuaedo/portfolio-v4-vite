/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
   theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "5xs": "0.3rem",
        "4xs": "0.4rem",
        "3xs": "0.5rem",
        "2xs": "0.6rem",
      },
    },
  },
  plugins: [],
}


