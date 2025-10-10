import React, { forwardRef } from 'react'

const cardStyles = {
  base: `
    rounded-sm
    transition-all duration-500 ease-out
    group
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
      hover:shadow-gold
    `,
    ghost: `
      bg-transparent
      border border-brand-grey-light/30
      hover:border-brand-gold/30
    `,
    luxury: `
      bg-gradient-to-br from-brand-dark to-brand-dark-light
      border border-brand-gold
      shadow-luxury
      text-brand-cream
      relative
      before:absolute before:inset-0
      before:bg-gradient-to-br before:from-brand-gold/10 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-500
    `,
    glass: `
      bg-white/70
      backdrop-blur-lg
      border border-white/20
      shadow-luxury
    `,
  },
  
  hover: {
    none: '',
    lift: `
      hover:transform hover:-translate-y-1
      hover:shadow-gold
    `,
    glow: `
      hover:shadow-gold
      hover:border-brand-gold/50
    `,
    scale: `
      hover:scale-[1.02]
      hover:shadow-luxury
    `,
  },
  
  padding: {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    xlarge: 'p-10',
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