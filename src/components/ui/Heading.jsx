import React, { forwardRef } from 'react'

const headingStyles = {
  // Base styles with premium typography
  base: `
    font-display font-bold
    tracking-tight
    leading-tight
    transition-all duration-300
  `,
  
  // Enhanced sizes with better scaling
  sizes: {
    xs: 'text-sm md:text-base',
    sm: 'text-base md:text-lg',
    base: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl',
    '2xl': 'text-3xl md:text-4xl',
    '3xl': 'text-4xl md:text-5xl',
    '4xl': 'text-5xl md:text-6xl',
    '5xl': 'text-6xl md:text-7xl',
    '6xl': 'text-7xl md:text-8xl',
  },
  
  // Color options
  colors: {
    inherit: '',
    white: 'text-white',
    charcoal: 'text-brand-charcoal',
    yellow: 'text-brand-yellow',
    black: 'text-brand-black',
    gradient: `
      bg-gradient-to-r from-brand-yellow to-brand-yellow-light
      bg-clip-text text-transparent
    `,
  },
  
  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  
  // Margin bottom options
  marginBottom: {
    none: '',
    small: 'mb-2',
    medium: 'mb-4',
    large: 'mb-6',
  },
  
  // Special effects
  effects: {
    none: '',
    glow: `
      drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]
      hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]
    `,
    shadow: 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
    underline: `
      relative
      after:absolute after:bottom-0 after:left-0
      after:w-full after:h-0.5
      after:bg-gold-gradient
      after:transform after:scale-x-0
      after:origin-left
      after:transition-transform after:duration-500
      hover:after:scale-x-100
    `,
  }
}

const createHeading = (as) => {
  return forwardRef(({
    children,
    size,
    color = 'inherit',
    align = 'left',
    marginBottom = 'medium',
    effect = 'none',
    className = '',
    animate = false,
    mdSize,
    lgSize,
    ...props
  }, ref) => {
    // Default sizes based on heading level
    const defaultSizes = {
      h1: '4xl',
      h2: '3xl',
      h3: '2xl',
      h4: 'xl',
      h5: 'lg',
      h6: 'base',
    }
    
    const finalSize = size || defaultSizes[as] || 'base'
    
    const classes = `
      ${headingStyles.base}
      ${headingStyles.sizes[finalSize]}
      ${mdSize ? `md:${headingStyles.sizes[mdSize].split(' ')[1]}` : ''}
      ${lgSize ? `lg:${headingStyles.sizes[lgSize].split(' ')[1]}` : ''}
      ${headingStyles.colors[color]}
      ${headingStyles.align[align]}
      ${headingStyles.marginBottom[marginBottom]}
      ${headingStyles.effects[effect]}
      ${animate ? 'animate-slide-down' : ''}
      ${className}
    `.trim()

    const Component = as

    return (
      <Component
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </Component>
    )
  })
}

// Main Heading component
export const Heading = createHeading('h2')
Heading.displayName = 'Heading'

// Convenience components for each heading level
Heading.H1 = createHeading('h1')
Heading.H1.displayName = 'Heading.H1'

Heading.H2 = createHeading('h2')
Heading.H2.displayName = 'Heading.H2'

Heading.H3 = createHeading('h3')
Heading.H3.displayName = 'Heading.H3'

Heading.H4 = createHeading('h4')
Heading.H4.displayName = 'Heading.H4'

Heading.H5 = createHeading('h5')
Heading.H5.displayName = 'Heading.H5'

Heading.H6 = createHeading('h6')
Heading.H6.displayName = 'Heading.H6'