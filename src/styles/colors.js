// Unified color system

export const colors = {
  // Brand colors
  brand: {
    gold: 'brand-gold', // #CABC32
    goldHover: 'yellow-500',
    green: 'brand-green', // #059669
    greenHover: 'green-600'
  },

  // Background colors
  background: {
    primary: 'bg-gray-900',
    secondary: 'bg-gray-800',
    tertiary: 'bg-gray-700',
    overlay: 'bg-black/50',
    overlayDark: 'bg-black/70',
    card: 'bg-gray-800',
    cardHover: 'bg-gray-700',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    gradientDark: 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800',
    gradientSubtle: 'bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-gray-900/50',
    gold: 'bg-brand-gold',
    goldGradient: 'bg-gradient-to-r from-brand-gold to-yellow-400',
    dark: 'bg-gray-900'
  },

  // Text colors
  text: {
    primary: 'text-white',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    accent: 'text-brand-gold',
    link: 'text-brand-gold hover:text-yellow-500',
    white: 'text-white',
    gold: 'text-brand-gold',
    lightGray: 'text-gray-300',
    dark: 'text-gray-900',
    darkGray: 'text-gray-800'
  },

  // Border colors
  border: {
    default: 'border-gray-700',
    light: 'border-gray-600',
    dark: 'border-gray-800',
    accent: 'border-brand-gold',
    subtle: 'border-brand-gold/20'
  },

  // Gradient usage (use sparingly!)
  gradients: {
    // Only use for key CTAs and special emphasis
    brandButton: 'bg-gradient-to-r from-brand-gold to-yellow-400',
    textAccent: 'bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent',
    
    // Subtle background gradients
    subtleBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    overlayGradient: 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
  },

  // State colors
  state: {
    hover: 'hover:bg-gray-700',
    focus: 'focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900',
    active: 'bg-gray-700',
    disabled: 'opacity-50 cursor-not-allowed',
    success: 'text-green-600',
    info: 'text-blue-600',
    warning: 'bg-yellow-100',
    warningBorder: 'border-yellow-300',
    warningText: 'text-yellow-800'
  }
}

// Color patterns to avoid
export const colorGuidelines = {
  gradients: {
    avoid: [
      'Gradient text on every heading',
      'Multiple gradients in one section',
      'Gradient backgrounds with gradient text',
      'Decorative gradient lines everywhere'
    ],
    use: [
      'Primary CTA buttons',
      'Hero section accents',
      'Special promotional elements',
      'One key element per section'
    ]
  },

  consistency: {
    primary: 'Use brand-gold for primary actions',
    secondary: 'Use gray tones for secondary elements',
    hover: 'Consistent hover states across similar elements',
    contrast: 'Ensure WCAG AA contrast ratios'
  }
}

// Visual hierarchy guidelines
export const visualHierarchy = {
  sectionBreaks: {
    use: 'Use section breaks to create visual rhythm',
    spacing: '16px minimum between sections',
    backgrounds: 'Alternate background colors for visual separation'
  },

  inspirationCards: {
    purpose: 'Break up text-heavy content with visual elements',
    placement: 'Place after 200-300 words of content',
    styling: 'Use consistent card styling with hover effects',
    content: 'Mix practical and aspirational content'
  },

  ctaStrategy: {
    primary: 'One main CTA per section',
    secondary: 'Micro-CTAs for engagement',
    placement: 'Place CTAs at natural reading breaks',
    visual: 'Make CTAs visually distinct with color and spacing'
  }
}