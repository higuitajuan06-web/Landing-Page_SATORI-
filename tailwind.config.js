/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },

      colors: {
        brand: {
          50:  '#F5F0FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#3B0764',
        },

        ink: {
          DEFAULT: '#0F0A1E',
          2: '#3D3558',
          3: '#7B7490',
        },

        surface: {
          DEFAULT: '#FFFFFF',
          2: '#F8F7FF',
          3: '#F1EEF9',
        },
      },

      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'core-glow': 'coreGlow 3s ease-in-out infinite',
        'counter': 'counterUp 2s ease-out forwards',
        'mascot-float': 'mascotFloat 4.5s ease-in-out infinite',
        'mascot-zero-g': 'mascotZeroG 7s ease-in-out infinite',
        'mascot-energy': 'mascotEnergy 5s ease-in-out infinite',
        'mascot-sparkle': 'mascotSparkle 3s ease-in-out infinite',
        'hub-float': 'hubFloat 4s ease-in-out infinite',
        'hub-orbit-1': 'hubOrbit1 6s linear infinite',
        'hub-orbit-2': 'hubOrbit2 8s linear infinite',
        'hub-orbit-3': 'hubOrbit3 10s linear infinite',
      },

      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },

        coreGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 0 8px rgba(124,58,237,0.12), 0 0 0 18px rgba(124,58,237,0.06), 0 0 40px rgba(124,58,237,0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 0 10px rgba(124,58,237,0.18), 0 0 0 22px rgba(124,58,237,0.08), 0 0 60px rgba(124,58,237,0.55)',
          },
        },

        mascotFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        mascotZeroG: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
          },
          '20%': {
            transform: 'translateY(-16px) translateX(6px) rotate(0.6deg)',
          },
          '45%': {
            transform: 'translateY(-8px) translateX(-5px) rotate(-0.4deg)',
          },
          '70%': {
            transform: 'translateY(-22px) translateX(3px) rotate(0.3deg)',
          },
          '90%': {
            transform: 'translateY(-12px) translateX(-2px) rotate(-0.2deg)',
          },
        },

        mascotEnergy: {
          '0%, 100%': {
            opacity: '0.55',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.08)',
          },
        },

        mascotSparkle: {
          '0%, 100%': {
            opacity: '0.15',
            transform: 'scale(0.6)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },

        hubFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },

        hubOrbit1: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' },
        },

        hubOrbit2: {
          '0%': { transform: 'rotate(120deg) translateX(44px) rotate(-120deg)' },
          '100%': { transform: 'rotate(480deg) translateX(44px) rotate(-480deg)' },
        },

        hubOrbit3: {
          '0%': { transform: 'rotate(240deg) translateX(48px) rotate(-240deg)' },
          '100%': { transform: 'rotate(600deg) translateX(48px) rotate(-600deg)' },
        },
      },

      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(124,58,237,0.07), transparent)',
        'brand-gradient':
          'linear-gradient(135deg, #4C1D95, #7C3AED, #A855F7)',
        'cta-gradient':
          'linear-gradient(135deg, #3B0764, #5B21B6, #7C3AED)',
        'integrations-radial':
          'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        'circuit-grid':
          'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
      },

      boxShadow: {
        'brand-sm': '0 4px 24px rgba(124,58,237,0.12)',
        'brand-md': '0 8px 32px rgba(124,58,237,0.18)',
        'brand-lg': '0 8px 24px rgba(124,58,237,0.3)',
      },
    },
  },
  plugins: [],
}