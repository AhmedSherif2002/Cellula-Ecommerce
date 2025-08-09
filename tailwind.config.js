module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'], // 👈 Add Inter as a custom class
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
