/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#F4EFE6',
          50: '#FCFAF7',
          100: '#F4EFE6',
          200: '#E8DFD0',
          300: '#D9CCB6',
        },
        forest: {
          DEFAULT: '#0D261C',
          deep: '#071610',
          dark: '#0D261C',
          medium: '#184E37',
          light: '#256B4E',
          surface: '#123326',
        },
        amber: {
          glow: '#D49B4B',
          rich: '#B87B28',
          deep: '#855414',
          subtle: '#F7EDDC',
          warm: '#FFB84D',
        },
        espresso: {
          DEFAULT: '#1A1714',
          muted: '#524B45',
          light: '#7A726A',
        },
        border: {
          warm: '#E4DDD0',
          dark: '#1C4031',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        sans: ['"IBM Plex Sans Arabic"', 'Cairo', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 2px rgba(26, 23, 20, 0.05)',
        'warm-md': '0 4px 12px rgba(26, 23, 20, 0.07)',
      },
    },
  },
  plugins: [],
}
