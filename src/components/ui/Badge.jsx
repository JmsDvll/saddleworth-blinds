import React from 'react'

// Centralized badge styles
const badgeStyles = {
  // Base styles
  base: 'inline-flex items-center font-medium rounded-full',
  
  // Variants
  variants: {
    default: 'bg-gray-800 text-gray-300',
    primary: 'bg-brand-gold text-gray-900',
    secondary: 'bg-gray-700 text-white',
    success: 'bg-green-900 text-green-300',
    warning: 'bg-yellow-900 text-yellow-300',
    error: 'bg-red-900 text-red-300',
    info: 'bg-blue-900 text-blue-300',
    ghost: 'bg-transparent border border-gray-600 text-gray-300',
  },
  
  // Sizes
  sizes: {
    tiny: 'text-xs px-2 py-0.5',
    small: 'text-sm px-2.5 py-0.5',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-1.5',
  },
  
  // Dot indicator
  dot: {
    base: 'rounded-full',
    sizes: {
      tiny: 'w-1.5 h-1.5',
      small: 'w-2 h-2',
      medium: 'w-2.5 h-2.5',
      large: 'w-3 h-3',
    },
  },
}

const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  dot = false,
  dotColor,
  className = '',
  ...props
}) => {
  const classes = [
    badgeStyles.base,
    badgeStyles.variants[variant],
    badgeStyles.sizes[size],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <span className={classes} {...props}>
      {dot && (
        <span
          className={[
            badgeStyles.dot.base,
            badgeStyles.dot.sizes[size],
            dotColor || 'bg-current',
            'mr-1.5',
          ].join(' ')}
        />
      )}
      {children}
    </span>
  )
}

// Status Badge variants
Badge.Success = (props) => <Badge variant="success" {...props} />
Badge.Warning = (props) => <Badge variant="warning" {...props} />
Badge.Error = (props) => <Badge variant="error" {...props} />
Badge.Info = (props) => <Badge variant="info" {...props} />

// Special badges
Badge.New = (props) => (
  <Badge variant="primary" size="tiny" {...props}>
    NEW
  </Badge>
)

Badge.ComingSoon = (props) => (
  <Badge variant="warning" size="small" {...props}>
    Coming Soon
  </Badge>
)

Badge.Beta = (props) => (
  <Badge variant="info" size="tiny" {...props}>
    BETA
  </Badge>
)

export default Badge