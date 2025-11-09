import React from 'react'
/**
 * LuxuryBadge – decorative badge with variants and optional icon.
 *
 * Props
 * - variant: 'gold' | 'dark' | 'outline' | 'luxury' | 'premium'
 * - size: 'tiny' | 'small' | 'medium' | 'large'
 * - shape: 'rounded' | 'square' | 'sharp'
 * - icon: 'star' | 'diamond' | 'crown' | 'check' | 'arrow' | 'sparkle'
 * - iconPosition: 'left' | 'right'
 * - pulse: boolean
 */

const badgeStyles = {
  base: `
    inline-flex items-center justify-center
    font-body font-semibold uppercase tracking-luxury
    transition-all duration-300
    relative overflow-hidden
  `,
  
  variants: {
    gold: `
      bg-gold-gradient
      text-brand-dark
      border border-brand-gold-dark
      shadow-gold
      before:absolute before:inset-0
      before:bg-gold-shimmer before:opacity-0
      hover:before:opacity-100 before:transition-opacity
    `,
    dark: `
      bg-brand-dark
      text-brand-gold
      border border-brand-gold
      shadow-luxury
      hover:bg-brand-dark-light
    `,
    outline: `
      bg-transparent
      text-brand-dark
      border-2 border-brand-gold
      hover:bg-brand-gold hover:text-brand-dark
      focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2
    `,
    luxury: `
      bg-gradient-to-r from-brand-dark via-brand-dark-light to-brand-dark
      text-brand-gold
      border border-brand-gold
      shadow-luxury
      relative
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent before:via-brand-gold/20 before:to-transparent
      before:animate-shimmer-slow
    `,
    premium: `
      bg-brand-cream
      text-brand-dark
      border border-brand-gold
      shadow-soft
      hover:shadow-gold
    `,
  },
  
  sizes: {
    tiny: 'px-2 py-0.5 text-xs',
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-1.5 text-base',
    large: 'px-6 py-2.5 text-lg',
  },
  
  shapes: {
    rounded: 'rounded-full',
    square: 'rounded-lg',
    sharp: 'rounded-none',
  },
  
  icons: {
    star: '★',
    diamond: '◆',
    crown: '♛',
    check: '✓',
    arrow: '→',
    sparkle: '✦',
  },
}

export const LuxuryBadge = ({
  children,
  variant = 'gold',
  size = 'small',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  pulse = false,
  className = '',
  ...props
}) => {
  const classes = `
    ${badgeStyles.base}
    ${badgeStyles.variants[variant]}
    ${badgeStyles.sizes[size]}
    ${badgeStyles.shapes[shape]}
    ${pulse ? 'animate-pulse-gold' : ''}
    ${className}
  `.trim()

  const iconElement = icon && badgeStyles.icons[icon] && (
    <span className={`${iconPosition === 'right' ? 'ml-1' : 'mr-1'} opacity-70`}>
      {badgeStyles.icons[icon]}
    </span>
  )

  return (
    <span className={classes} {...props}>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </span>
  )
}

LuxuryBadge.displayName = 'LuxuryBadge'