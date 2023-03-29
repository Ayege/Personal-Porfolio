/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#212121",
        vermillion: "#F44336",
        "picton-blue": "#03a9f4",
        amber: "#ffc107",
        "yellow-green": "#8bc34a",
      },
      backgroundImage: {
        "tropical-gradient":
          "linear-gradient(269.96deg, #03A9F4 27.76%, #FFC107 64.6%, #F44336 99.95%)",
        lines: "url('../src/assets/lines.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
