/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ]
    },
    plugins: [
    ],
  },
}