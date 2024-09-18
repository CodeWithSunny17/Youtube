/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#F1F1F1",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};
