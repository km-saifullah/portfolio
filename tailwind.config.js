/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A983F9",
        secondary: "#222222",
        navLink: "#3A1E70",
        textColor: "rgba(34, 34, 34, 0.8)",
      },
      backgroundImage: {
        mainBg: "linear-gradient(to right, #1E183D, #332B51)",
        serviceBg:
          "linear-gradient(to right, rgba(104, 81, 154, 0.2), rgba(169, 131, 249, 0.2))",
      },
      fontFamily: {
        sora: '"Sora", sans-serif',
      },
    },
  },
  plugins: [],
};
