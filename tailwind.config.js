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
          250: "hsl(245,30%,25%)",
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
      fonts_sizes: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chivo_mono: ["Chivo Mono", "monospace"],
    },
  },
  plugins: [],
};
