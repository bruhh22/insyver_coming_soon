/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old-standard': ['"Old Standard TT"', 'serif'],
        'joly': ['"Crimson Pro"', 'serif'], // Fallback for Joly
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0f172a',
        },
        blue: {
          600: '#2563eb',
        }
      },
      boxShadow: {
        'xl-soft': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
      }
    },
  },
  plugins: [],
}