/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        charcoal: '#0B0C10',
        panel: '#101116',
        line: 'rgba(255,255,255,0.08)',
        ivory: '#F4F4F2',
        mist: '#9A9CA8',
        blue: {
          DEFAULT: '#2F6BFF',
          soft: '#5B8CFF',
        },
        violet: {
          DEFAULT: '#8B6BFF',
          soft: '#A98CFF',
        },
        emerald: {
          DEFAULT: '#10B981',
          soft: '#34D399',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'mesh': 'radial-gradient(60% 50% at 15% 10%, rgba(47,107,255,0.16), transparent 60%), radial-gradient(50% 45% at 85% 20%, rgba(139,107,255,0.14), transparent 60%), radial-gradient(55% 50% at 50% 100%, rgba(16,185,129,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
}
