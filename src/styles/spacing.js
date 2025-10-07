// Unified spacing system

export const spacing = {
  // Section padding
  section: {
    large: 'py-20 lg:py-24',
    base: 'py-16 lg:py-20',
    small: 'py-12 lg:py-16',
    none: 'py-0'
  },

  // Container padding
  container: {
    base: 'px-4 md:px-6 lg:px-8',
    narrow: 'px-4 md:px-8 lg:px-12',
    wide: 'px-4 md:px-4 lg:px-6'
  },

  // Grid gaps
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    base: 'gap-6',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16'
  },

  // Stack spacing (vertical)
  stack: {
    xs: 'space-y-2',
    sm: 'space-y-4',
    base: 'space-y-6',
    md: 'space-y-8',
    lg: 'space-y-12',
    xl: 'space-y-16'
  },

  // Inline spacing (horizontal)
  inline: {
    xs: 'space-x-2',
    sm: 'space-x-4',
    base: 'space-x-6',
    md: 'space-x-8',
    lg: 'space-x-12'
  },

  // Margin utilities
  margin: {
    section: 'mb-16 lg:mb-20',
    element: 'mb-6 lg:mb-8',
    text: 'mb-4',
    none: 'mb-0'
  },

  // Padding utilities
  padding: {
    card: 'p-6 lg:p-8',
    button: 'px-6 py-3 lg:px-8 lg:py-4',
    input: 'px-4 py-3',
    badge: 'px-3 py-1'
  },

  // Height utilities
  height: {
    screen: 'min-h-screen',
    full: 'h-full',
    auto: 'h-auto'
  },

  // Flex utilities
  flex: {
    minHeight: 'min-h-screen'
  }
}

// Layout patterns
export const layout = {
  // Max widths
  maxWidth: {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    prose: 'max-w-prose'
  },

  // Common patterns
  container: 'container mx-auto px-4 md:px-6 lg:px-8',
  narrowContainer: 'max-w-4xl mx-auto px-4 md:px-6 lg:px-8',
  wideContainer: 'max-w-7xl mx-auto px-4 md:px-6 lg:px-8',
  
  // Grid layouts
  grid: {
    cols2: 'grid grid-cols-1 md:grid-cols-2',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    cols6: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  }
}