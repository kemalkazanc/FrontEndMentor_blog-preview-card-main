/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "yellow-custom": "hsl(47, 88%, 63%)",
        "grey-custom": "hsl(0, 0%, 50%)",
      },
      boxShadow: {
        custom: "8px 8px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
