/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#f2f5fc",
        100: "#e2eaf7",
        200: "#ccdaf1",
        300: "#a9c2e7",
        400: "#80a3da",
        500: "#6285cf",
        600: "#4e6bc2",
        700: "#445ab1",
        800: "#3c4b91",
        900: "#344174",
        950: "#232946",
      },
      secondary: {
        50: "#fcf4f4",
        100: "#fae9eb",
        200: "#f5d6db",
        300: "#eebbc3",
        400: "#e18b9a",
        500: "#d26178",
        600: "#bc4261",
        700: "#9e3250",
        800: "#852c48",
        900: "#722941",
        950: "#3f1220",
      },
      headline: "#fffffe",
      paragrapgh: "#b8c1ec",
      button: "#eebbc3",
      buttonText: "#232946",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
