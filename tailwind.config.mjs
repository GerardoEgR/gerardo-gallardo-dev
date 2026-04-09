/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        noir: { 950: "#060606", 900: "#0d0d0d", 800: "#141414", 700: "#1c1c1c", 600: "#262626" },
        gold: { 300: "#f0d57a", 400: "#e8c455", 500: "#C9A84C", 600: "#a8883a", 700: "#7d6528" },
        ivory: { 100: "#faf8f3", 200: "#f0ece0", 300: "#d9d3c0" },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
