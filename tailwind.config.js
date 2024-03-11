/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "rgba(24,24,27,.6)",
        border: "rgba(48,48,54)",
        buttonLight: "rgba(229,230,235,.6)",
        bgLight: "#c2c0c0"
      },
      fontFamily: {
        inter: "Inter"
      }
    }
  },
  plugins: [],
  darkMode: "class"
}
