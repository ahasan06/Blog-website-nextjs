/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",  // Small screens (mobile)
      md: "768px",  // Medium screens (tablet)
      lg: "1024px", // Large screens (laptops)
      xl: "1280px", // Extra large screens (desktops)
      '2xl': "1536px", // Extra-extra large screens
    },
    extend: {
      colors: {
        primary: "#1a202c", // dark grey for headings
        secondary: "#718096", // medium grey for subheadings
        accent: "#f56565", // light red for buttons or highlights
        background: "#f7fafc", // soft off-white background
        text: "#2d3748", // dark color for text
        border: "#e2e8f0", // light grey for borders and dividers
        highlight: "#4fd1c5", // teal for special elements like links
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
  },
  plugins: [],
};
