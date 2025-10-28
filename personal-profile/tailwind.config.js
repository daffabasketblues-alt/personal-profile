/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#F1E8FF",
          200: "#E6D5FF",
          400: "#C084FC",
          500: "#A855F7",
        },
        candy: {
          400: "#FB7185",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(2,8,23,.08)",
        soft: "0 6px 18px rgba(2,8,23,.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
