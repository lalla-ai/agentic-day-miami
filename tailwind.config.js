/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f5f3ee",
        ink: "#0e1117",
        "ink-2": "#4a4f57",
        "ink-dim": "#8a8e95",
        accent: "#7c5cff",
        "brand-green": "#7CC242",
        "brand-green-bright": "#a4e547",
        "nvidia-green": "#76b900",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
