/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141310",
        "bg-2": "#1C1B17",
        "bg-3": "#232019",
        paper: "#EFEDE6",
        "paper-dim": "#C9C6BA",
        "paper-mute": "#A8A59A",
        brass: "#C9A227",
        "brass-light": "#DDBB4A",
        line: "rgba(239,237,230,0.14)",
        "line-strong": "rgba(239,237,230,0.24)",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
