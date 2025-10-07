import React from 'react'

// Centralized card styles
const cardStyles = {
  base: 'rounded-2xl overflow-hidden transition-all duration-300',
  
  // Variants
  variants: {
    default: 'bg-gray-900 border border-gray-800',
    elevated: 'bg-gray-900 shadow-xl shadow-black/50',
    ghost: 'bg-transparent',
    highlight: 'bg-gray-900 border border-gray-800 hover:border-brand-gold/30',
  },
  
  // Hover effects
  hover: {
    none: '',
    lift: 'hover:shadow-2xl hover:-translate-y-2',
    glow: 'hover:shadow-2xl hover:shadow-brand-gold/20',
    scale: 'hover:scale-105',
  },
  
  // Padding options
  padding: {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  },
}

const Card = ({
  children,
  variant = 'default',
  hover = 'none',
  padding = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const classes = [
    cardStyles.base,
    cardStyles.variants[variant],
    cardStyles.hover[hover],
    cardStyles.padding[padding],
    onClick && 'cursor-pointer',
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

// Card sub-components for consistent structure
Card.Header = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-800 ${className}`}>
    {children}
  </div>
)

Card.Body = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
)

Card.Footer = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-800 ${className}`}>
    {children}
  </div>
)

Card.Image = ({ src, alt, className = '' }) => (
  <div className={`aspect-video overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
)

export default Card