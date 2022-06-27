module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chair: "url('./src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    // themes: [],
    themes: [
      {
        mytheme: {
          primary: "#02818F",
          secondary: "#09A2B3",
          accent: "#252525",
          neutral: "#FBF9FA",
          "base-100": "#FBF9FA",
        },
      },
      "light",
      "black",
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
