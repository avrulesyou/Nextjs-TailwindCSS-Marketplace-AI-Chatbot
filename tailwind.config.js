/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breath: {
          "25%, 75%": { width: "12rem", height: "12rem" },
          "50%": { width: "14rem", height: "14rem" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        breath: "breath 10s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "#0C0E12",
        footer: "#070707",
        dark: "#0C0E12",
        dark_Green: "#0A3A1F",
        primary_Colour: "#1EBE5E",
        content_Grey: "#888A8F",
        green: "#1EBE5E",
        placeholder: "#575B63",
        box: "#1D1F24",
      },
      backgroundImage: {},
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
