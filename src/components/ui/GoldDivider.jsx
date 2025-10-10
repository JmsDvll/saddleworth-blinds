import React from 'react'

const dividerStyles = {
  base: 'relative',
  
  variants: {
    simple: `
      h-0.5 w-full
      bg-gradient-to-r from-transparent via-brand-gold to-transparent
    `,
    luxury: `
      h-1 w-full
      bg-gold-gradient
      shadow-gold
      relative
      before:absolute before:inset-0
      before:bg-gold-shimmer
      before:animate-shimmer-slow
    `,
    dots: `
      flex items-center justify-center gap-4
      before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-brand-gold
      after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-brand-gold
    `,
    line: `
      h-px w-full
      bg-brand-gold/50
    `,
    wave: `
      h-8 w-full
      bg-[url("data:image/svg+xml,%3Csvg width='200' height='32' viewBox='0 0 200 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16c25-16 25 16 50 0s25-16 50 0 25 16 50 0 25-16 50 0' stroke='%23CABC32' stroke-width='2' fill='none' opacity='0.5'/%3E%3C/svg%3E")]
      bg-center bg-repeat-x
    `,
    ornament: `
      flex items-center justify-center
      before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:to-brand-gold
      after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-l after:from-transparent after:to-brand-gold
    `,
  },
  
  sizes: {
    small: 'my-4 max-w-xs',
    medium: 'my-8 max-w-md',
    large: 'my-12 max-w-lg',
    full: 'my-12 w-full',
  },
  
  align: {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  },
}

export const GoldDivider = ({
  variant = 'simple',
  size = 'medium',
  align = 'center',
  className = '',
  children,
  ...props
}) => {
  const classes = `
    ${dividerStyles.base}
    ${dividerStyles.variants[variant]}
    ${dividerStyles.sizes[size]}
    ${dividerStyles.align[align]}
    ${className}
  `.trim()

  if (variant === 'ornament' && children) {
    return (
      <div className={classes} {...props}>
        <span className="px-4 text-brand-gold font-display text-2xl">
          {children}
        </span>
      </div>
    )
  }

  if (variant === 'dots' && children) {
    return (
      <div className={classes} {...props}>
        <span className="text-brand-gold font-display tracking-luxury">
          {children}
        </span>
      </div>
    )
  }

  return <div className={classes} {...props} />
}

GoldDivider.displayName = 'GoldDivider'