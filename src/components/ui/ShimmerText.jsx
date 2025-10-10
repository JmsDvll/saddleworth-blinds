import React from 'react'

const shimmerStyles = {
  base: `
    relative
    inline-block
    font-display
  `,
  
  variants: {
    gold: `
      bg-gradient-to-r from-brand-gold via-brand-gold-lighter to-brand-gold
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-shimmer
    `,
    luxury: `
      bg-gradient-to-r from-brand-gold via-brand-white to-brand-gold
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-luxury-shine
    `,
    subtle: `
      bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-shimmer-slow
    `,
    glow: `
      text-brand-gold
      drop-shadow-[0_0_20px_rgba(202,188,50,0.5)]
      animate-glow-pulse
    `,
    wave: `
      bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-gold-wave
    `,
  },
  
  speed: {
    slow: '[animation-duration:4s]',
    normal: '[animation-duration:2s]',
    fast: '[animation-duration:1s]',
  },
  
  intensity: {
    subtle: 'opacity-80',
    normal: 'opacity-100',
    bright: 'opacity-100 drop-shadow-[0_0_10px_rgba(202,188,50,0.3)]',
  },
}

export const ShimmerText = ({
  children,
  variant = 'gold',
  speed = 'normal',
  intensity = 'normal',
  as: Component = 'span',
  className = '',
  ...props
}) => {
  const classes = `
    ${shimmerStyles.base}
    ${shimmerStyles.variants[variant]}
    ${shimmerStyles.speed[speed]}
    ${shimmerStyles.intensity[intensity]}
    ${className}
  `.trim()

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

ShimmerText.displayName = 'ShimmerText'