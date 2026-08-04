/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#faf9f6",
        "paper-alt": "#f3f1ec",
        ink: "#1c1a17",
        "ink-soft": "#57534b",
        rust: "#c0562f",
        "rust-soft": "rgba(192, 86, 47, 0.08)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Instrument Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
