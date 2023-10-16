/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 8px 22px rgba(0, 0, 0, 0.1);",
        card2: "0 12px 28px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
