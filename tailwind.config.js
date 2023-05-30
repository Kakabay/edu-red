/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        BIT_TITLE: "40px",
        TITLE: "32px",
        SMALL_TITLE: "24px",
        BIG_TEXT: "18px",
        TEXT: "16px",
        SMALL_TEXT: "14px",
        // 40 32 24 18 16 14
      },
      colors: {
        BG: "#FAFBF4",
        GRAY: "#737373",
        WHITE: "#FEFEFE",
        GREEN: "#609966",
      },
      backgroundImage: {
        IMAGE:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(36, 36, 36, 0.2) 100%)",
      },
    },
  },
  plugins: [],
};
