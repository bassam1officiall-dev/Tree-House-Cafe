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
        'warm-sm': '0 1px 3px rgba(26, 23, 20, 0.06), 0 1px 2px rgba(26, 23, 20, 0.04)',
        'warm-md': '0 4px 16px -2px rgba(26, 23, 20, 0.08), 0 2px 6px -1px rgba(26, 23, 20, 0.05)',
        'warm-lg': '0 12px 28px -4px rgba(26, 23, 20, 0.12), 0 4px 12px -2px rgba(26, 23, 20, 0.06)',
        'glow-amber': '0 0 24px -4px rgba(212, 155, 75, 0.35)',
      }
    },
  },
  plugins: [],
}
