// Unified interactive element styles

export const interactive = {
  // Button styles
  button: {
    base: 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    
    sizes: {
      sm: 'px-4 py-2 text-sm',
      base: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    },
    
    variants: {
      primary: 'bg-gradient-to-r from-brand-gold to-yellow-400 text-gray-900 hover:shadow-lg hover:scale-105 focus:ring-brand-gold',
      secondary: 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700 hover:border-brand-gold focus:ring-gray-600',
      ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-600',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    }
  },

  // Link styles
  link: {
    base: 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold rounded',
    default: 'text-brand-gold hover:text-yellow-500 underline-offset-2 hover:underline',
    nav: 'text-white hover:text-brand-gold',
    subtle: 'text-gray-400 hover:text-white'
  },

  // Form elements
  form: {
    input: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-200',
    select: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-200',
    textarea: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-200',
    label: 'block text-sm font-medium text-white mb-2',
    error: 'text-red-500 text-sm mt-1',
    checkbox: 'w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 rounded focus:ring-brand-gold focus:ring-2',
    radio: 'w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 focus:ring-brand-gold focus:ring-2'
  },

  // Card interactions
  card: {
    base: 'bg-gray-800 rounded-lg overflow-hidden transition-all duration-300',
    hover: 'hover:shadow-xl hover:-translate-y-1 hover:bg-gray-700',
    clickable: 'cursor-pointer',
    focus: 'focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900'
  },

  // Image interactions
  image: {
    hover: 'transition-transform duration-300 hover:scale-105',
    thumbnail: 'cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300',
    active: 'ring-2 ring-brand-gold opacity-100'
  },

  // Transitions
  transitions: {
    fast: 'transition-all duration-200',
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    transform: 'transition-transform duration-300',
    colors: 'transition-colors duration-200',
    opacity: 'transition-opacity duration-300'
  },

  // Focus states (accessibility)
  focus: {
    ring: 'focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900',
    outline: 'focus:outline-none focus:ring-2 focus:ring-brand-gold',
    visible: 'focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2'
  },

  // Touch targets (minimum 44px)
  touch: {
    min: 'min-h-[44px] min-w-[44px]',
    padding: 'p-3'
  }
}