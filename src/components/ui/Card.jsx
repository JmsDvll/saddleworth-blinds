import React, { forwardRef } from 'react'

const cardStyles = {
  base: `
    relative
    rounded-xl
    transition-all duration-500 ease-premium
    group
    overflow-hidden
  `,
  
  variants: {
    default: `
      bg-gradient-to-br from-gray-800/80 to-gray-900/80
      border border-gray-700/50
      backdrop-blur-sm
    `,
    elevated: `
      bg-gradient-to-br from-brand-dark-lighter to-brand-dark-light
      border border-brand-gold/10
      shadow-premium
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-brand-gold/5 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-500
    `,
    ghost: `
      bg-transparent
      border border-gray-700/30
      hover:border-gray-600/50
      backdrop-blur-xs
    `,
    highlight: `
      bg-gradient-to-br from-brand-dark-light to-brand-dark
      border border-brand-gold/30
      shadow-gold
      before:absolute before:inset-0 
      before:bg-gradient-radial before:from-brand-gold/10 before:to-transparent
      before:opacity-50
      after:absolute after:inset-0
      after:bg-shimmer-gradient
      after:opacity-0 hover:after:opacity-100
      after:animate-shimmer
      overflow-hidden
    `,
    premium: `
      bg-gradient-to-br from-brand-dark to-brand-dark-light
      border border-brand-gold/40
      shadow-premium shadow-brand-gold/20
      before:absolute before:inset-[-2px]
      before:bg-gold-gradient
      before:rounded-xl
      before:opacity-20 hover:before:opacity-30
      before:blur-xl
      before:transition-opacity before:duration-500
      before:-z-10
    `
  },
  
  hover: {
    none: '',
    lift: `
      hover:translate-y-[-4px]
      hover:shadow-2xl hover:shadow-black/30
    `,
    glow: `
      hover:shadow-glow
      after:absolute after:inset-[-2px]
      after:bg-gradient-to-r after:from-brand-gold/30 after:to-brand-gold-light/30
      after:rounded-xl after:blur-xl
      after:opacity-0 hover:after:opacity-100
      after:transition-opacity after:duration-500
      after:-z-10
    `,
    scale: `
      hover:scale-[1.02]
      hover:shadow-2xl
    `,
    shine: `
      after:absolute after:inset-0
      after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
      after:translate-x-[-200%]
      hover:after:translate-x-[200%]
      after:transition-transform after:duration-1000
      overflow-hidden
    `
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
  hover = 'lift',
  padding = 'medium',
  className = '',
  onClick,
  ...props
}, ref) => {
  const isClickable = !!onClick
  
  const classes = `
    ${cardStyles.base}
    ${cardStyles.variants[variant]}
    ${cardStyles.hover[hover]}
    ${cardStyles.padding[padding]}
    ${isClickable ? 'cursor-pointer' : ''}
    ${className}
  `.trim()

  return (
    <div
      ref={ref}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none"></div>
      
      {/* Content with z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
})

Card.displayName = 'Card'

// Card sub-components for better composition
Card.Header = ({ children, className = '' }) => (
  <div className={`pb-4 mb-4 border-b border-gray-700/50 ${className}`}>
    {children}
  </div>
)

Card.Body = ({ children, className = '' }) => (
  <div className={`${className}`}>
    {children}
  </div>
)

Card.Footer = ({ children, className = '' }) => (
  <div className={`pt-4 mt-4 border-t border-gray-700/50 ${className}`}>
    {children}
  </div>
)

Card.Image = ({ src, alt, className = '' }) => (
  <div className={`-m-6 mb-6 overflow-hidden ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>
)