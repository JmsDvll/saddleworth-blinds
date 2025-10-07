import React from 'react'

// Centralized section styles
const sectionStyles = {
  // Padding variations
  padding: {
    none: '',
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-20',
    large: 'py-20 lg:py-32',
  },
  
  // Background variations
  background: {
    transparent: '',
    dark: 'bg-gray-900',
    darker: 'bg-gray-950',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    gradientDark: 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800',
    gold: 'bg-brand-gold',
  },
  
  // Text color schemes
  textColor: {
    light: 'text-white',
    dark: 'text-gray-900',
    inherit: '',
  },
}

const Section = ({
  children,
  padding = 'large',
  background = 'transparent',
  textColor = 'light',
  className = '',
  ...props
}) => {
  const classes = [
    sectionStyles.padding[padding],
    sectionStyles.background[background],
    sectionStyles.textColor[textColor],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

// Section sub-components
Section.Container = ({ children, size = 'default', className = '' }) => {
  const containerStyles = {
    default: 'container',
    narrow: 'container max-w-4xl mx-auto',
    wide: 'container max-w-7xl mx-auto',
    full: 'w-full px-4 md:px-6 lg:px-8',
  }
  
  return (
    <div className={`${containerStyles[size]} ${className}`}>
      {children}
    </div>
  )
}

export default Section