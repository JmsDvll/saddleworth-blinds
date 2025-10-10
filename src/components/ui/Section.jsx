import React, { forwardRef } from 'react'

const sectionStyles = {
  padding: {
    none: '',
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
    xlarge: 'py-24 md:py-32',
  },
  
  background: {
    transparent: 'bg-transparent',
    white: 'bg-white',
    light: 'bg-gray-50',
    yellow: 'bg-brand-yellow text-brand-black',
    charcoal: 'bg-brand-charcoal text-white',
    gradient: 'bg-yellow-to-black text-white',
    gradientReverse: 'bg-black-to-yellow text-white',
  },
  
  textColor: {
    light: 'text-gray-300',
    dark: 'text-gray-900',
    inherit: '',
  },
  
  // Special effects
  effects: {
    none: '',
    particles: `
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23D4AF37' opacity='0.3'%3E%3Canimate attributeName='cy' values='50;180;50' dur='20s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='150' cy='150' r='1' fill='%23D4AF37' opacity='0.3'%3E%3Canimate attributeName='cy' values='150;20;150' dur='15s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E")]
    `,
    waves: `
      after:absolute after:bottom-0 after:left-0 after:right-0
      after:h-px after:bg-gradient-to-r
      after:from-transparent after:via-brand-gold/50 after:to-transparent
    `
  }
}

export const Section = forwardRef(({
  children,
  padding = 'large',
  background = 'transparent',
  textColor = 'light',
  effect = 'none',
  className = '',
  animate = true,
  ...props
}, ref) => {
  const classes = `
    ${sectionStyles.padding[padding]}
    ${sectionStyles.background[background]}
    ${sectionStyles.textColor[textColor]}
    ${sectionStyles.effects[effect]}
    ${animate ? 'animate-fade-in' : ''}
    relative
    ${className}
  `.trim()

  return (
    <section
      ref={ref}
      className={classes}
      {...props}
    >
      {/* Content wrapper for proper z-indexing */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
})

Section.displayName = 'Section'

// Section container for consistent max-width
Section.Container = ({ children, maxWidth = 'large', className = '' }) => {
  const widths = {
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={`${widths[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}