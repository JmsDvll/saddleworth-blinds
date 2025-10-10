import React from 'react'

const glowBoxStyles = {
  base: `
    relative
    transition-all duration-700
    group
  `,
  
  variants: {
    gold: `
      before:absolute before:inset-0
      before:bg-gold-gradient before:opacity-20
      before:blur-xl before:transition-all before:duration-700
      hover:before:opacity-40 hover:before:blur-2xl
      after:absolute after:inset-0
      after:bg-gold-pulse after:animate-glow-pulse
      after:opacity-0 hover:after:opacity-30
    `,
    subtle: `
      before:absolute before:inset-0
      before:bg-brand-gold/10 before:blur-md
      before:transition-all before:duration-500
      hover:before:bg-brand-gold/20 hover:before:blur-lg
    `,
    luxury: `
      before:absolute before:inset-[-20px]
      before:bg-gradient-to-r before:from-brand-gold/0 before:via-brand-gold/30 before:to-brand-gold/0
      before:blur-2xl before:opacity-0
      hover:before:opacity-100 before:transition-all before:duration-700
      after:absolute after:inset-0
      after:bg-gold-shimmer after:opacity-0
      hover:after:opacity-10 after:transition-opacity after:duration-700
    `,
    border: `
      before:absolute before:inset-0
      before:rounded-inherit
      before:p-[2px]
      before:bg-gold-gradient
      before:content-['']
      before:-z-10
      before:opacity-50 hover:before:opacity-100
      before:transition-opacity before:duration-500
      after:absolute after:inset-0
      after:rounded-inherit
      after:bg-brand-dark
      after:-z-10
    `,
  },
  
  intensity: {
    low: 'before:opacity-10 hover:before:opacity-20',
    medium: 'before:opacity-20 hover:before:opacity-40',
    high: 'before:opacity-30 hover:before:opacity-60',
  },
  
  padding: {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  },
}

export const GlowBox = ({
  children,
  variant = 'gold',
  intensity = 'medium',
  padding = 'none',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  // Apply intensity only to non-border variants
  const intensityClass = variant !== 'border' ? glowBoxStyles.intensity[intensity] : ''
  
  const classes = `
    ${glowBoxStyles.base}
    ${glowBoxStyles.variants[variant]}
    ${intensityClass}
    ${glowBoxStyles.padding[padding]}
    ${className}
  `.trim()

  return (
    <Component className={classes} {...props}>
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  )
}

GlowBox.displayName = 'GlowBox'