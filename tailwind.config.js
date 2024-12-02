/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A983F9",
        secondary: "#222222",
        navLink: "#3A1E70",
      },
      backgroundImage: {
        mainBg: "linear-gradient(to right, #FFFFFF, #E9DFFD)",
      },
      fontFamily: {
        sora: '"Sora", sans-serif',
      },
    },
  },
  plugins: [],
};
