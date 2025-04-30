/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#001B51",
        secondary: "#db8a1f",
      },
      fontFamily: {
        sans: ["Utile", "sans-serif"],
      },
    },
  },
  plugins: [],
};
