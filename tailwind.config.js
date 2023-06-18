/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./commons/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'primary': "#088395",
        'secondary': "#0A4D68",
        'accent': "#EFF6FA",
        'accent2': "#05BFDB",
        'accent3': "#00FFCA",
        'neutral': "#0f172a",
        'base-100': "#FFFFFF",
        'dark': "#000000",
      },
    },
  },
  plugins: [],
}
