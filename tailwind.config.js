/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#13231B",
        main: "#28AF6E",
      },
      fontFamily: {
        rubik: ["Rubik-Regular"],
        "rubik-light": ["Rubik-Light"],
        "rubik-medium": ["Rubik-Medium"],
        "rubik-extrabold": ["Rubik-ExtraBold"],
        "sf-regular": ["SF-Pro-Text-Regular"],
        "sf-semibold": ["SF-Pro-Text-Semibold"],
        "sf-bold": ["SF-Pro-Text-Bold"],
        "visbycf-heavy": ["Visbycf-heavy"],
      },
    },
    screens: {
      screen390: "390px",
    },
  },
  plugins: [],
};
