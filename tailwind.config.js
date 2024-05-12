/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LGViolet: "hsl(270, 3%, 87%)",
        DGViolet: "hsl(279, 6%, 55%)",
        VDViolet: "hsl(278, 68%, 11%)",
        Red: "hsl(0, 100%, 66%)",
      },

      fontFamily: {
        Grotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "card-back": "url('/src/assets/bg-card-back.png')",
        "card-front": "url('/src/assets/bg-card-front.png')",
        mobile: "url('/src/assets/bg-main-mobile.png')",
        desktop: "url('/src/assets/bg-main-desktop.png')",
        logo: "url('/src/assets/card-logo.svg')",
        complete: "url('/src/assets/icon-complete.svg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

