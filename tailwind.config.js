/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sunshine Blinds Brand Colors
        'brand-yellow': {
          DEFAULT: '#CABC32', // Main brand yellow
          light: '#E0D250',
          dark: '#B0A428',
        },
        'brand-charcoal': '#242424', // Brand dark
        'brand-black': '#000000',
        'brand-grey': '#C5C5C5',
        // Keep some accent colors for variety
        'accent': {
          coral: '#FF6B6B',
          teal: '#4ECDC4',
          purple: '#9B59B6',
          blue: '#3498DB'
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'], // Clean, modern display font
      },
      backgroundImage: {
        // Brand gradients
        'yellow-to-black': 'linear-gradient(175deg, #CABC32 66%, #000000 66%)',
        'black-to-yellow': 'linear-gradient(175deg, #000000 66%, #CABC32 66%)',
        'yellow-gradient': 'linear-gradient(135deg, #B0A428 0%, #CABC32 50%, #E0D250 100%)',
        'charcoal-gradient': 'linear-gradient(180deg, #242424 0%, #1A1A1A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'spin-slow': 'spin 3s linear infinite',
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
      },
      boxShadow: {
        'yellow': '0 10px 40px -10px rgba(202, 188, 50, 0.3)',
        'soft': '0 2px 15px -5px rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
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