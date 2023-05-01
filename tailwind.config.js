/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsPhone: "580px",
        phone: "624px",
        tablet: "768px",
        laptop: "992px",
        desktop: "1200px",
        xlDesktop: "1450px",
      },
    },
  },
  plugins: [],
};
