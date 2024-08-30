/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F63E7B",
          secondary: "#FFF8F5",
          accent: "#FFAC0C",
          neutral: "#878787",
          "base-100": "#ffffff",
          info: "#E5E5E5",
          success: "#009444",
          warning: "#DF7E07",
          error: "#FF4545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
