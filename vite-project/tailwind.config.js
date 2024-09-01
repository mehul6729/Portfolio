/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': { 'max': '500px' },
      // => @media (min-width: 500px) and (max-width: 500px) { ... }

      'md': { 'max': '800px' },
      // => @media (min-width: 800px) and (max-width: 800px) { ... }

      'lg': { 'max': '1110px' },
      // => @media (min-width: 1024px) and (max-width: 1024px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (min-width: 1280px) and (max-width: 1280px) { ... }

      '2xl': { 'max': '1536px' },
      // => @media (min-width: 1536px) and (max-width: 1536px) { ... }
    },
  },
  plugins: [],
}
