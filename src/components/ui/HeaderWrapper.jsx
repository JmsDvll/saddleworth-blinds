import React, { forwardRef } from 'react'
/**
 * Header Suite – wrappers for header, mobile menu, dropdowns and toggles.
 *
 * HeaderWrapper props
 * - isScrolled: boolean – toggles scrolled styles
 *
 * MobileMenuWrapper props
 * - isOpen: boolean – show/hide mobile menu
 *
 * DropdownWrapper props
 * - isOpen: boolean, size: 'medium' | 'large'
 *
 * NavButton/MobileToggle: semantic buttons for nav interactions
 */

const headerStyles = {
  base: `
    sticky top-0 z-40 
    transition-all duration-700
  `,
  
  states: {
    default: `
      bg-brand-cream 
      shadow-soft 
      border-b border-brand-gold/10
    `,
    scrolled: `
      bg-brand-cream/95 
      backdrop-blur-xl 
      shadow-luxury-lg 
      border-b border-brand-gold/30
    `,
  },
}

export const HeaderWrapper = forwardRef(({ 
  children,
  isScrolled = false,
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${headerStyles.base}
    ${isScrolled ? headerStyles.states.scrolled : headerStyles.states.default}
    ${className}
  `.trim()

  return (
    <header ref={ref} className={classes} {...props}>
      {children}
    </header>
  )
})

HeaderWrapper.displayName = 'HeaderWrapper'

// Mobile menu wrapper
const mobileMenuStyles = {
  base: `
    lg:hidden fixed inset-x-0 top-[120px] bottom-0 z-40
    bg-brand-cream/95 backdrop-blur-xl
    transition-all duration-500
  `,
  
  states: {
    open: 'opacity-100 pointer-events-auto',
    closed: 'opacity-0 pointer-events-none',
  },
}

export const MobileMenuWrapper = forwardRef(({ 
  children,
  isOpen = false,
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${mobileMenuStyles.base}
    ${isOpen ? mobileMenuStyles.states.open : mobileMenuStyles.states.closed}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

MobileMenuWrapper.displayName = 'MobileMenuWrapper'

// Dropdown wrapper
const dropdownStyles = {
  base: `
    absolute top-full left-0 mt-2
    transition-all duration-500 origin-top
  `,
  
  states: {
    open: 'opacity-100 scale-y-100 pointer-events-auto',
    closed: 'opacity-0 scale-y-95 pointer-events-none',
  },
  
  sizes: {
    medium: 'w-64',
    large: 'w-80',
  },
}

export const DropdownWrapper = forwardRef(({ 
  children,
  isOpen = false,
  size = 'medium',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${dropdownStyles.base}
    ${dropdownStyles.sizes[size]}
    ${isOpen ? dropdownStyles.states.open : dropdownStyles.states.closed}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

DropdownWrapper.displayName = 'DropdownWrapper'

// Nav button for dropdowns
const navButtonStyles = `
  flex items-center gap-2 px-4 py-3 min-h-[44px] 
  text-brand-dark hover:text-brand-gold 
  transition-all duration-300 
  font-medium uppercase tracking-wide
`

export const NavButton = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  const classes = `${navButtonStyles} ${className}`.trim()

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
})

NavButton.displayName = 'NavButton'

// Mobile menu toggle
const mobileToggleStyles = `
  lg:hidden p-3 min-h-[44px] min-w-[44px]
  text-brand-dark hover:text-brand-gold 
  transition-colors duration-300
`

export const MobileToggle = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  const classes = `${mobileToggleStyles} ${className}`.trim()
  const ariaLabel = props['aria-label'] || 'Toggle menu'

  return (
    <button ref={ref} className={classes} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  )
})

MobileToggle.displayName = 'MobileToggle'