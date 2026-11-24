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
        'warm-sm': '0 1px 3px rgba(26, 23, 20, 0.06), 0 1px 2px rgba(26, 23, 20, 0.04)',
        'warm-md': '0 4px 16px -2px rgba(26, 23, 20, 0.08), 0 2px 6px -1px rgba(26, 23, 20, 0.05)',
        'warm-lg': '0 12px 28px -4px rgba(26, 23, 20, 0.12), 0 4px 12px -2px rgba(26, 23, 20, 0.06)',
        'glow-amber': '0 0 24px -4px rgba(212, 155, 75, 0.45)',
        'glow-sign': '0 0 35px 2px rgba(212, 155, 75, 0.5), 0 0 70px 10px rgba(212, 155, 75, 0.2)',
        'glow-lamp': '0 10px 40px -10px rgba(212, 155, 75, 0.6)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.85',
            filter: 'drop-shadow(0 0 18px rgba(212, 155, 75, 0.55))',
          },
          '50%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 32px rgba(212, 155, 75, 0.85)) drop-shadow(0 0 60px rgba(212, 155, 75, 0.35))',
          },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer-pass': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'steam-rise': {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '30%': { opacity: '0.6' },
          '60%': { transform: 'translateY(-14px) scaleX(1.3) translateX(2px)', opacity: '0.4' },
          '100%': { transform: 'translateY(-24px) scaleX(1.6) translateX(-3px)', opacity: '0' },
        },
        'scale-pop': {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'badge-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'shimmer-pass': 'shimmer-pass 3s infinite',
        'steam-rise': 'steam-rise 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'scale-pop': 'scale-pop 0.35s ease-out',
        'badge-pulse': 'badge-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
