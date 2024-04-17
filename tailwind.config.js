/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "yellow-custom": "hsl(47, 88%, 63%)",
        "grey-custom": "hsl(0, 0%, 50%)",
        "border-black-custom": "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
