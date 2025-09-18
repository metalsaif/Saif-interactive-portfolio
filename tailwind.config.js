// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': 'hsl(204, 23.8%, 95.9%)',
        'background-1': '#0F1624',
        'accent-1': 'hsl(34.9, 98.6%, 72.9%)',
        'button': 'hsl(205.1, 100%, 36.1%)',
        'background-2': 'hsl(232.7, 27.3%, 23.7%)',
      },
      fontFamily: {
        title: ['var(--font-press-start-2p)', 'sans-serif'],
        main: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}