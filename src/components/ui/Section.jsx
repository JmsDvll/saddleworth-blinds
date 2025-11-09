import React, { forwardRef } from 'react'
/**
 * Section – Page section wrapper with background, padding, and effects.
 *
 * Props
 * - padding: 'none' | 'small' | 'medium' | 'large' | 'xlarge' | 'hero'
 * - background: 'transparent' | 'cream' | 'white' | 'dark' | 'darker' | 'luxury' | 'gold' | 'goldRadial' | 'darkRadial' | 'pattern' | 'hero'
 * - textColor: 'inherit' | 'dark' | 'light' | 'gold' | 'muted'
 * - effect: 'none' | 'shimmer' | 'glow' | 'overlay'
 *
 * Usage
 *  <Section background="dark" padding="large"><Container>...</Container></Section>
 */

const sectionStyles = {
  padding: {
    none: '',
    small: 'section-spacing-small',
    medium: 'section-spacing-medium',
    large: 'section-spacing-large',
    xlarge: 'section-spacing-xlarge',
    hero: 'py-32 md:py-48 lg:py-64',
  },
  
  background: {
    transparent: 'bg-transparent',
    cream: 'bg-brand-cream',
    white: 'bg-white',
    dark: 'bg-brand-dark text-brand-cream',
    darker: 'bg-brand-dark-soft text-brand-cream',
    luxury: 'bg-hero-gradient text-brand-cream relative overflow-hidden',
    gold: 'bg-gold-gradient text-brand-dark',
    goldRadial: 'bg-gold-radial text-brand-dark',
    darkRadial: 'bg-dark-radial text-brand-cream',
    pattern: `
      bg-brand-cream
      relative
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CABC32' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]
    `,
    hero: `
      bg-brand-dark text-brand-cream
      relative overflow-hidden
      before:absolute before:inset-0 before:bg-hero-gradient
      after:absolute after:inset-0 after:bg-gold-pulse after:opacity-30 after:animate-glow-pulse
    `,
  },
  
  textColor: {
    inherit: '',
    dark: 'text-brand-dark',
    light: 'text-brand-cream',
    gold: 'text-brand-gold',
    muted: 'text-brand-grey-light',
  },
  
  effects: {
    none: '',
    shimmer: 'relative before:absolute before:inset-0 before:bg-gold-shimmer before:animate-shimmer before:opacity-10',
    glow: 'relative after:absolute after:inset-0 after:bg-gold-pulse after:animate-glow-pulse after:opacity-20',
    overlay: 'relative before:absolute before:inset-0 before:bg-overlay-gradient before:pointer-events-none',
  },
}

export const Section = forwardRef(({ 
  children, 
  padding = 'medium',
  background = 'transparent',
  textColor = 'inherit',
  effect = 'none',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${sectionStyles.padding[padding]}
    ${sectionStyles.background[background]}
    ${sectionStyles.textColor[textColor]}
    ${sectionStyles.effects[effect]}
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