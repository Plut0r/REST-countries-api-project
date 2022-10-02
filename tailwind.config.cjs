module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlueDark: "hsl(209, 23%, 22%)",
        veryDarkBlueDark: "hsl(207, 26%, 17%)",
        veryDarkBlue: "hsl(200, 15%, 8%)",
        darkGray: " hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  plugins: [],
};
