// Unified typography system

export const typography = {
  // Headings
  h1: 'text-4xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl lg:text-4xl font-bold',
  h3: 'text-2xl lg:text-3xl font-semibold',
  h4: 'text-xl lg:text-2xl font-semibold',
  h5: 'text-lg lg:text-xl font-semibold',
  h6: 'text-base lg:text-lg font-semibold',

  // Body text
  body: 'text-base lg:text-lg leading-relaxed',
  bodyLarge: 'text-lg lg:text-xl leading-relaxed',
  bodySmall: 'text-sm lg:text-base leading-relaxed',
  
  // Legacy body object for compatibility
  bodyObj: {
    large: 'text-lg lg:text-xl leading-relaxed',
    base: 'text-base lg:text-lg leading-relaxed',
    small: 'text-sm lg:text-base leading-relaxed',
    xs: 'text-xs lg:text-sm',
  },

  // Special styles
  lead: 'text-xl lg:text-2xl text-gray-300 leading-relaxed',
  caption: 'text-sm text-gray-400',
  overline: 'text-sm uppercase tracking-wider text-gray-400',
  quote: 'text-2xl lg:text-3xl font-semibold',

  // Colors
  colors: {
    primary: 'text-white',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    accent: 'text-brand-gold',
    gradient: 'bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent',
  },

  // Utility classes
  utils: {
    balance: 'text-balance',
    truncate: 'truncate',
    center: 'text-center',
    uppercase: 'uppercase',
    capitalize: 'capitalize',
  },
}

// Common text component styles
export const textStyles = {
  pageTitle: `${typography.h1} ${typography.colors.primary} ${typography.utils.center} mb-8 lg:mb-12`,
  sectionTitle: `${typography.h2} ${typography.colors.primary} ${typography.utils.center} mb-6 lg:mb-8`,
  cardTitle: `${typography.h3} ${typography.colors.primary} mb-4`,
  subtitle: `${typography.body.large} ${typography.colors.secondary} ${typography.utils.center} mb-6`,
  
  // Specific patterns to avoid
  gradientOveruse: 'Use sparingly - only for key CTAs or special emphasis',
  decorativeLines: 'Limit to one per section maximum',
}