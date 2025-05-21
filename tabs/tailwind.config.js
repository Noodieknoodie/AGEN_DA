export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: { primary: { DEFAULT: "#0078d4" } },
      borderRadius: { lg: "0.5rem", md: "0.375rem", sm: "0.25rem" }
    }
  },
  plugins: [require("tailwindcss-animate")]
};