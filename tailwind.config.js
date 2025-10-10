/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Color Palette
        'brand-gold': {
          DEFAULT: '#D4AF37', // Luxury gold
          light: '#F4E5A1',
          dark: '#B8941F',
          muted: '#E8D574',
        },
        'brand-dark': {
          DEFAULT: '#1A1A1A', // Rich black
          light: '#2D2D2D',
          lighter: '#404040',
        },
        'brand-cream': {
          DEFAULT: '#FAF7F0', // Luxury cream
          light: '#FFFEF9',
          dark: '#F0E6D2',
        },
        'brand-charcoal': '#242424',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-grey': {
          DEFAULT: '#8A8A8A',
          light: '#C5C5C5',
          dark: '#5A5A5A',
        },
        // Accent colors for luxury feel
        'accent': {
          burgundy: '#800020',
          emerald: '#50C878',
          sapphire: '#0F52BA',
          pearl: '#FBFCF8',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'], // Luxury serif font
        'body': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        // Luxury gradients
        'gold-gradient': 'linear-gradient(135deg, #B8941F 0%, #D4AF37 50%, #F4E5A1 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F0E6D2 0%, #FAF7F0 50%, #FFFEF9 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 25%, #D4AF37 75%, #F4E5A1 100%)',
        'shimmer-gradient': 'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.7) 50%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' },
          '50%': { boxShadow: '0 0 0 20px rgba(212, 175, 55, 0.1)' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        'gold': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
        'soft': '0 2px 20px -5px rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(212, 175, 55, 0.2)',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'wide': '0.1em',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}