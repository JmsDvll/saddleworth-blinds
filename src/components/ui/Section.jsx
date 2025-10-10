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
    cream: 'bg-brand-cream',
    white: 'bg-white',
    dark: 'bg-brand-dark text-brand-cream',
    luxury: 'bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark text-brand-cream',
    gold: 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark',
    pattern: `
      bg-brand-cream
      relative
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]
    `,
  },
  
  textColor: {
    inherit: '',
    dark: 'text-brand-dark',
    light: 'text-brand-cream',
    gold: 'text-brand-gold',
  },
}

export const Section = forwardRef(({ 
  children, 
  padding = 'medium',
  background = 'transparent',
  textColor = 'inherit',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${sectionStyles.padding[padding]}
    ${sectionStyles.background[background]}
    ${sectionStyles.textColor[textColor]}
    ${className}
  `.trim()

  return (
    <section ref={ref} className={classes} {...props}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

// Section container for consistent max-width
export const SectionContainer = ({ children, className = '', size = 'default', ...props }) => {
  const sizes = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-none',
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}

SectionContainer.displayName = 'SectionContainer'

Section.Container = SectionContainer