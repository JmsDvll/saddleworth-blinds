// Unified carousel styling constants

export const carouselStyles = {
  // Container heights
  heights: {
    hero: 'h-[400px] md:h-[500px] lg:h-[600px]',
    product: 'h-[300px] md:h-[400px] lg:h-[500px]',
    thumbnail: 'h-20 md:h-24 lg:h-28'
  },

  // Navigation button styles
  navButton: {
    base: 'absolute top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
    primary: 'bg-brand-gold hover:bg-yellow-500 text-gray-900 focus:ring-brand-gold',
    secondary: 'bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm focus:ring-white',
    position: {
      left: 'left-4 md:left-6',
      right: 'right-4 md:right-6'
    }
  },

  // Dot indicators
  dots: {
    container: 'absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3',
    withBackground: 'bg-black/30 rounded-full px-3 md:px-4 py-2',
    dot: {
      base: 'transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold',
      active: 'w-6 md:w-8 h-2 md:h-3 bg-brand-gold',
      inactive: 'w-2 md:w-3 h-2 md:h-3 bg-white/60 hover:bg-white/80 hover:scale-110'
    }
  },

  // Thumbnail styles
  thumbnail: {
    container: 'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 p-4 md:p-6',
    button: 'relative overflow-hidden rounded-md md:rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold',
    active: 'ring-2 ring-brand-gold scale-105 shadow-lg',
    inactive: 'hover:scale-105 opacity-70 hover:opacity-100 hover:shadow-md'
  },

  // Image styles
  image: {
    main: 'w-full h-full object-cover transition-opacity duration-500',
    thumbnail: 'w-full h-full object-cover'
  },

  // Counter styles
  counter: {
    base: 'absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium',
    primary: 'bg-brand-gold text-gray-900',
    secondary: 'bg-black/70 text-white backdrop-blur-sm'
  },

  // Overlay styles
  overlay: {
    gradient: 'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    content: 'absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white'
  },

  // Touch targets (minimum 44px for mobile)
  touchTarget: 'min-w-[44px] min-h-[44px]'
}

// Helper function to combine classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}