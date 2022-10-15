module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
      roboto: ["Roboto Condensed", "sans-serif"],
    },
    colors: {
      darkBlue: "#00041A",
      lightBlue: "#A1C4FD",
      textGray: "#E4E4E4",
      backgroundGray: "#CFD9DF",
      pinkish: "#F14DC3",
    },
    extend: {
      keyframes: {
        moveColors: {
          "0%,100%": {
            backgroundPosition: "50 90%;",
          },
          "50%": {
            backgroundPosition: "100% 10%",
          },
        },
      },
      animation: {
        moveColors: "moveColors 3.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
