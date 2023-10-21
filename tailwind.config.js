/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      desktop: "1240px",
      // => @media (min-width: 1240px) { ... }
    },
    extend: {
      colors: {
        Dark_Blue: ["hsl(233, 26%, 24%)"],
        Lime_Green: ["hsl(136, 65%, 51%)"],
        Bright_Cyan: ["hsl(192, 70%, 51%)"],
        Grayish_Blue: ["hsl(233, 8%, 62%)"],
        Light_Grayish_Blue: ["hsl(220, 16%, 96%)"],
        Very_Light_Gray: ["hsl(0, 0%, 98%)"],
      },
      fontFamily: {
        Public_Sans: ["Public Sans"],
      },
      backgroundImage: {
        mobile_back: "url('../images/bg-intro-mobile.svg')",
        desktop_back: "url('../images/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
