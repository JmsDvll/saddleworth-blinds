/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Color Palette - Based on Logo
        'brand-gold': {
          DEFAULT: '#CABC32', // Sunshine gold from logo
          light: '#E8D574',   // Lighter gold
          lighter: '#F4E5A1', // Lightest gold
          dark: '#B8941F',    // Darker gold
          darker: '#9A7A1A',  // Darkest gold
          muted: '#D4C866',   // Muted gold
        },
        'brand-dark': {
          DEFAULT: '#1A1A1A', // Rich black
          light: '#2D2D2D',   // Lighter black
          lighter: '#404040', // Lightest black
          soft: '#242424',    // Soft black
        },
        'brand-cream': {
          DEFAULT: '#FAF7F0', // Luxury cream
          light: '#FFFEF9',   // Pure white cream
          dark: '#F0E6D2',    // Darker cream
          warm: '#F5EFE1',    // Warm cream
        },
        'brand-charcoal': '#242424',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-grey': {
          DEFAULT: '#8A8A8A',
          light: '#C5C5C5',
          lighter: '#E5E5E5',
          dark: '#5A5A5A',
          darker: '#3A3A3A',
        },
        // Luxury accent colors
        'accent': {
          burgundy: '#800020',
          emerald: '#50C878',
          sapphire: '#0F52BA',
          pearl: '#FBFCF8',
          champagne: '#F7E7CE',
          bronze: '#CD7F32',
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
        // Luxury gradients - Updated with logo gold
        'gold-gradient': 'linear-gradient(135deg, #B8941F 0%, #CABC32 50%, #E8D574 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #CABC32 0%, #B8941F 100%)',
        'gold-shimmer': 'linear-gradient(105deg, transparent 40%, rgba(202, 188, 50, 0.7) 50%, transparent 60%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
        'dark-radial': 'radial-gradient(ellipse at top, #2D2D2D 0%, #1A1A1A 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F0E6D2 0%, #FAF7F0 50%, #FFFEF9 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 25%, #CABC32 75%, #E8D574 100%)',
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #242424 50%, #1A1A1A 100%)',
        'overlay-gradient': 'linear-gradient(to bottom, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.5) 50%, rgba(26, 26, 26, 0.9) 100%)',
        'gold-pulse': 'radial-gradient(circle at center, rgba(202, 188, 50, 0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'shimmer-slow': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'luxury-shine': 'luxuryShine 3s ease-in-out infinite',
        'gold-wave': 'goldWave 4s ease-in-out infinite',
        'reveal-up': 'revealUp 0.7s ease-out',
        'reveal-down': 'revealDown 0.7s ease-out',
        'luxury-bounce': 'luxuryBounce 1s ease-out',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(202, 188, 50, 0)' },
          '50%': { boxShadow: '0 0 0 20px rgba(202, 188, 50, 0.1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        luxuryShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        goldWave: {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-25deg)' },
          '50%': { transform: 'translateX(100%) skewX(-25deg)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        luxuryBounce: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '60%': { transform: 'scale(1.02)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        'luxury-lg': '0 20px 60px -15px rgba(0, 0, 0, 0.6)',
        'gold': '0 10px 40px -10px rgba(202, 188, 50, 0.3)',
        'gold-lg': '0 20px 60px -15px rgba(202, 188, 50, 0.4)',
        'soft': '0 2px 20px -5px rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(202, 188, 50, 0.2)',
        'inner-luxury': 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.2)',
        'elevation-4': '0 16px 32px rgba(0, 0, 0, 0.25)',
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