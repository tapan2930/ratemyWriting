const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFFFFE",
          600: "#FFFFC6",
          700: "#FFFF8E",
          800: "#FFFF56",
          900: "#FFFF1E",
          950: "#FFFF02",
        },
        secondary: {
          DEFAULT: "#E3F6F5",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#E3F6F5",
          600: "#B9E8E6",
          700: "#8EDBD7",
          800: "#64CDC8",
          900: "#3CBCB5",
          950: "#36A7A1",
        },
        tertiary: "#bae8e8",
        headline: "#272343",
        paragrapgh: "#2d334a",
        button: "#ffd803",
        buttonText: "#272343",
        background: "#fffffe",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
