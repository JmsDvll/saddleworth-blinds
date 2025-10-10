import React, { forwardRef } from 'react'

const headingStyles = {
  base: 'font-display font-bold leading-tight tracking-wide',
  
  // Luxury size scale
  sizes: {
    xs: 'text-lg md:text-xl',
    sm: 'text-xl md:text-2xl',
    base: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
    '2xl': 'text-5xl md:text-6xl',
    '3xl': 'text-6xl md:text-7xl',
    '4xl': 'text-7xl md:text-8xl',
    '5xl': 'text-8xl md:text-9xl',
  },
  
  // Color options
  colors: {
    inherit: '',
    dark: 'text-brand-dark',
    light: 'text-brand-cream',
    gold: 'text-brand-gold',
    gradient: `
      bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold
      bg-clip-text text-transparent
      bg-[length:200%_auto]
      animate-shimmer
    `,
  },
  
  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  
  // Special effects
  effects: {
    none: '',
    shadow: 'text-shadow-luxury',
    goldShadow: 'text-shadow-gold',
    underline: `
      relative
      after:absolute after:bottom-0 after:left-0
      after:w-full after:h-0.5
      after:bg-gradient-to-r after:from-brand-gold after:to-brand-gold-light
      after:transform after:scale-x-0 after:origin-left
      after:transition-transform after:duration-500
      hover:after:scale-x-100
    `,
  },
  
  // Margin bottom
  marginBottom: {
    none: '',
    small: 'mb-2',
    medium: 'mb-4',
    large: 'mb-6',
    xlarge: 'mb-8',
  }
}

export const Heading = forwardRef(({ 
  as: Component = 'h2',
  size,
  color = 'inherit',
  align = 'left',
  effect = 'none',
  marginBottom = 'medium',
  className = '',
  children,
  ...props 
}, ref) => {
  // Auto-size based on component type if not specified
  const autoSize = size || {
    h1: '4xl',
    h2: '3xl',
    h3: '2xl',
    h4: 'xl',
    h5: 'lg',
    h6: 'base',
  }[Component] || 'base'

  const classes = `
    ${headingStyles.base}
    ${headingStyles.sizes[autoSize]}
    ${headingStyles.colors[color]}
    ${headingStyles.align[align]}
    ${headingStyles.effects[effect]}
    ${headingStyles.marginBottom[marginBottom]}
    ${className}
  `.trim()

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

Heading.displayName = 'Heading'

// Convenience components
export const H1 = forwardRef((props, ref) => <Heading ref={ref} as="h1" {...props} />)
export const H2 = forwardRef((props, ref) => <Heading ref={ref} as="h2" {...props} />)
export const H3 = forwardRef((props, ref) => <Heading ref={ref} as="h3" {...props} />)
export const H4 = forwardRef((props, ref) => <Heading ref={ref} as="h4" {...props} />)
export const H5 = forwardRef((props, ref) => <Heading ref={ref} as="h5" {...props} />)
export const H6 = forwardRef((props, ref) => <Heading ref={ref} as="h6" {...props} />)

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
H5.displayName = 'H5'
H6.displayName = 'H6'

// Attach convenience components
Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6