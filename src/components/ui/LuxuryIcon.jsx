import React from 'react'
/**
 * LuxuryIcon – decorative icon wrapper with luxury styles.
 *
 * Props
 * - variant: 'simple' | 'glow' | 'circle' | 'square' | 'luxury'
 * - size: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
 * - animation: 'none' | 'spin' | 'pulse' | 'float' | 'glow'
 */

const iconStyles = {
  base: `
    inline-flex items-center justify-center
    transition-all duration-500
  `,
  
  variants: {
    simple: `
      text-brand-gold
    `,
    glow: `
      text-brand-gold
      drop-shadow-[0_0_10px_rgba(202,188,50,0.5)]
      hover:drop-shadow-[0_0_20px_rgba(202,188,50,0.7)]
    `,
    circle: `
      rounded-full
      bg-brand-gold/10
      border border-brand-gold/30
      text-brand-gold
      hover:bg-brand-gold hover:text-brand-dark
      hover:shadow-gold
    `,
    square: `
      rounded-lg
      bg-brand-dark
      border border-brand-gold
      text-brand-gold
      hover:bg-gold-gradient hover:text-brand-dark
      hover:shadow-gold
    `,
    luxury: `
      rounded-full
      bg-gradient-to-br from-brand-dark to-brand-dark-light
      border border-brand-gold
      text-brand-gold
      shadow-luxury
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-gold-shimmer before:opacity-0
      hover:before:opacity-100 before:transition-opacity
      hover:transform hover:scale-110
      hover:shadow-gold-lg
    `,
  },
  
  sizes: {
    tiny: 'w-6 h-6 text-sm',
    small: 'w-8 h-8 text-base',
    medium: 'w-12 h-12 text-xl',
    large: 'w-16 h-16 text-2xl',
    xlarge: 'w-20 h-20 text-3xl',
  },
  
  animation: {
    none: '',
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    float: 'animate-float',
    glow: 'animate-glow-pulse',
  },
}

export const LuxuryIcon = ({
  children,
  variant = 'simple',
  size = 'medium',
  animation = 'none',
  className = '',
  ...props
}) => {
  const classes = `
    ${iconStyles.base}
    ${iconStyles.variants[variant]}
    ${iconStyles.sizes[size]}
    ${iconStyles.animation[animation]}
    ${className}
  `.trim()

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

LuxuryIcon.displayName = 'LuxuryIcon'