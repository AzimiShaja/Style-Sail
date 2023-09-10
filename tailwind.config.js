/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Open: "Open Sans",
        dancing: "Dancing Script",
        roboto: "Roboto",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
