/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          0: "hsl(245,30%,0%)",
          100: "hsl(245,30%,10%)",
          200: "hsl(245,30%,20%)",
          300: "hsl(245,30%,30%)",
          400: "hsl(245,30%,40%)",
          500: "hsl(245,28%,50%)",
          600: "hsl(245,24%,60%)",
          700: "hsl(245,20%,70%)",
          800: "hsl(245,15%,80%)",
          900: "hsl(245,10%,90%)",
          1000: "hsl(245,0%,100%)",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
