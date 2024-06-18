/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: true,
  },

  theme: {
    backgroundImage: {
      main: "url('/assets/sky.jpg')",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
