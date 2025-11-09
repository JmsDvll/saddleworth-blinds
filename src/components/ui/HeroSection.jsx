import React, { forwardRef } from 'react'
/**
 * HeroSection Suite – Composable hero building blocks.
 *
 * HeroSection props
 * - variant: 'default' | 'image' | 'luxury' | 'pattern'
 * - height: 'full' | 'large' | 'medium' | 'auto'
 *
 * HeroContent props: align ('left' | 'center' | 'right'), padding
 * HeroImage: src, alt (required)
 * HeroOverlay: variant ('dark' | 'gradient' | 'radial' | 'luxury')
 * HeroTitle: effect ('none' | 'glow' | 'gradient')
 * HeroSubtitle / HeroDescription / HeroCTA / HeroBadge: display helpers
 */

// Hero section wrapper
const heroStyles = {
  base: 'relative w-full overflow-hidden',
  
  variants: {
    default: 'bg-hero-gradient',
    image: 'bg-brand-dark',
    luxury: 'bg-luxury-gradient',
    pattern: 'bg-brand-dark relative before:absolute before:inset-0 before:bg-pattern before:opacity-5',
  },
  
  height: {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
    auto: 'min-h-0',
  },
}

export const HeroSection = forwardRef(({ 
  children,
  variant = 'default',
  height = 'large',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${heroStyles.base}
    ${heroStyles.variants[variant]}
    ${heroStyles.height[height]}
    ${className}
  `.trim()

  return (
    <section ref={ref} className={classes} {...props}>
      {children}
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

// Hero content wrapper
const heroContentStyles = {
  base: 'relative z-10 w-full h-full flex items-center',
  
  alignment: {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
  },
  
  padding: {
    none: '',
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-24 md:py-32',
  },
}

export const HeroContent = forwardRef(({ 
  children,
  align = 'left',
  padding = 'medium',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${heroContentStyles.base}
    ${heroContentStyles.alignment[align]}
    ${heroContentStyles.padding[padding]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

HeroContent.displayName = 'HeroContent'

// Hero background image
const heroImageStyles = `
  absolute inset-0 w-full h-full
  object-cover object-center
`

export const HeroImage = forwardRef(({ 
  src,
  alt,
  className = '',
  ...props 
}, ref) => {
  return (
    <img 
      ref={ref} 
      src={src} 
      alt={alt} 
      className={`${heroImageStyles} ${className}`} 
      loading="eager"
      {...props} 
    />
  )
})

HeroImage.displayName = 'HeroImage'

// Hero overlay
const heroOverlayStyles = {
  base: 'absolute inset-0 pointer-events-none',
  
  variants: {
    dark: 'bg-brand-dark/70',
    gradient: 'bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent',
    radial: 'bg-radial-gradient from-transparent to-brand-dark/80',
    luxury: 'bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-dark/90',
  },
}

export const HeroOverlay = forwardRef(({ 
  variant = 'gradient',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${heroOverlayStyles.base}
    ${heroOverlayStyles.variants[variant]}
    ${className}
  `.trim()

  return <div ref={ref} className={classes} {...props} />
})

HeroOverlay.displayName = 'HeroOverlay'

// Hero title with animation
const heroTitleStyles = {
  base: `
    font-display font-bold
    text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    leading-tight tracking-tight
    text-brand-cream
    animate-reveal-up
  `,
  
  effects: {
    none: '',
    glow: 'drop-shadow-[0_0_24px_rgba(202,188,50,0.35)]',
    gradient: 'bg-gold-gradient bg-clip-text text-transparent',
  },
}

export const HeroTitle = forwardRef(({ 
  children,
  effect = 'glow',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${heroTitleStyles.base}
    ${heroTitleStyles.effects[effect]}
    ${className}
  `.trim()

  return (
    <h1 ref={ref} className={classes} {...props}>
      {children}
    </h1>
  )
})

HeroTitle.displayName = 'HeroTitle'

// Hero subtitle
const heroSubtitleStyles = `
  font-display text-2xl md:text-3xl lg:text-4xl
  text-brand-gold
  animate-reveal-up animation-delay-100
`

export const HeroSubtitle = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  return (
    <p ref={ref} className={`${heroSubtitleStyles} ${className}`} {...props}>
      {children}
    </p>
  )
})

HeroSubtitle.displayName = 'HeroSubtitle'

// Hero description
const heroDescriptionStyles = `
  text-lg md:text-xl lg:text-2xl
  text-brand-grey-light
  max-w-3xl
  animate-reveal-up animation-delay-200
`

export const HeroDescription = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  return (
    <p ref={ref} className={`${heroDescriptionStyles} ${className}`} {...props}>
      {children}
    </p>
  )
})

HeroDescription.displayName = 'HeroDescription'

// Hero CTA group
const heroCtaStyles = `
  flex flex-col sm:flex-row gap-4
  animate-reveal-up animation-delay-300
`

export const HeroCTA = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${heroCtaStyles} ${className}`} {...props}>
      {children}
    </div>
  )
})

HeroCTA.displayName = 'HeroCTA'

// Hero badge
const heroBadgeStyles = `
  inline-flex items-center gap-2
  px-4 py-2 rounded-full
  bg-brand-gold/10 border border-brand-gold/30
  text-brand-gold font-medium
  animate-reveal-down
`

export const HeroBadge = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${heroBadgeStyles} ${className}`} {...props}>
      {children}
    </div>
  )
})

HeroBadge.displayName = 'HeroBadge'