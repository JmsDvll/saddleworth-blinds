import React, { forwardRef } from 'react'

const cardStyles = {
  base: `
    rounded-lg
    transition-all duration-700 ease-out
    group
    relative
    overflow-hidden
  `,
  
  variants: {
    default: `
      bg-brand-cream
      border border-brand-gold/20
      shadow-soft
    `,
    elevated: `
      bg-white
      border border-brand-gold/30
      shadow-luxury
      hover:shadow-gold-lg
    `,
    dark: `
      bg-brand-dark
      border border-brand-gold/20
      shadow-luxury
      text-brand-cream
    `,
    ghost: `
      bg-transparent
      border border-brand-grey-light/30
      hover:border-brand-gold/50
    `,
    luxury: `
      bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark
      border border-brand-gold
      shadow-luxury-lg
      text-brand-cream
      relative
      before:absolute before:inset-0
      before:bg-gradient-to-br before:from-brand-gold/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-all before:duration-700
      after:absolute after:inset-0
      after:bg-gold-shimmer after:opacity-0
      hover:after:opacity-10 after:transition-opacity after:duration-700
    `,
    glass: `
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-luxury
      text-brand-cream
    `,
    gold: `
      bg-gold-gradient
      border border-brand-gold-dark
      shadow-gold
      text-brand-dark
      relative
      before:absolute before:inset-0
      before:bg-gold-shimmer before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-500
    `,
  },
  
  hover: {
    none: '',
    lift: `
      hover:transform hover:-translate-y-2
      hover:shadow-gold-lg
    `,
    glow: `
      hover:shadow-gold-lg
      hover:border-brand-gold/70
    `,
    scale: `
      hover:scale-[1.02]
      hover:shadow-luxury-lg
    `,
    luxury: `
      hover:transform hover:-translate-y-1 hover:scale-[1.01]
      hover:shadow-gold-lg
      hover:border-brand-gold-light
    `,
  },
  
  padding: {
    none: '',
    small: 'p-6',
    medium: 'p-8',
    large: 'p-10',
    xlarge: 'p-12',
  }
}

export const Card = forwardRef(({ 
  children, 
  variant = 'default',
  hover = 'none',
  padding = 'medium',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${cardStyles.base}
    ${cardStyles.variants[variant]}
    ${cardStyles.hover[hover]}
    ${cardStyles.padding[padding]}
    ${className}
  `.trim()

  return (
    <article ref={ref} className={classes} {...props}>
      {children}
    </article>
  )
})

Card.displayName = 'Card'

// Card sub-components
export const CardHeader = ({ children, className = '', ...props }) => (
  <header className={`pb-4 border-b border-brand-gold/20 ${className}`} {...props}>
    {children}
  </header>
)

CardHeader.displayName = 'CardHeader'

export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`py-4 ${className}`} {...props}>
    {children}
  </div>
)

CardBody.displayName = 'CardBody'

export const CardFooter = ({ children, className = '', ...props }) => (
  <footer className={`pt-4 border-t border-brand-gold/20 ${className}`} {...props}>
    {children}
  </footer>
)

CardFooter.displayName = 'CardFooter'

export const CardImage = ({ src, alt, className = '', ...props }) => (
  <div className={`-m-6 mb-4 overflow-hidden ${className}`} {...props}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
)

CardImage.displayName = 'CardImage'

// Attach sub-components
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage