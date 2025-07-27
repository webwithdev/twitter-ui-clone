module.exports = {
  content: ["./src/**/*.{html,js}"], // adjust path
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // enable line-clamp
  ],
}
