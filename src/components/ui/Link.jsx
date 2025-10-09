import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

// Centralized link styles
const linkStyles = {
  // Base styles
  base: 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',
  
  // Variants
  variants: {
    default: 'text-brand-gold hover:text-yellow-500 underline-offset-2 hover:underline',
    nav: 'text-white hover:text-brand-gold',
    subtle: 'text-gray-400 hover:text-white',
    button: 'inline-flex items-center justify-center font-semibold rounded-lg',
    plain: 'hover:opacity-80',
  },
  
  // Sizes (for button variant)
  sizes: {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  },
  
  // Button styles
  buttonStyles: {
    primary: 'bg-brand-gold hover:bg-yellow-500 text-gray-900 focus:ring-brand-gold',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 focus:ring-gray-600',
    ghost: 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white focus:ring-gray-600',
  },
  
  // Underline options
  underline: {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
  },
}

const Link = ({
  to,
  href,
  children,
  variant = 'default',
  size = 'medium',
  underline = 'hover',
  buttonVariant,
  external = false,
  className = '',
  ...props
}) => {
  // Build classes based on props
  const isButton = variant === 'button' || buttonVariant
  
  const classes = [
    linkStyles.base,
    linkStyles.variants[variant],
    isButton && linkStyles.sizes[size],
    isButton && buttonVariant && linkStyles.buttonStyles[buttonVariant],
    !isButton && linkStyles.underline[underline],
    className,
  ].filter(Boolean).join(' ')
  
  // External link
  if (href || external) {
    const linkProps = external || href?.startsWith('http') 
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
      
    return (
      <a
        href={href || to}
        className={classes}
        {...linkProps}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  // Internal link
  return (
    <RouterLink
      to={to}
      className={classes}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

// Convenience components
Link.Nav = (props) => <Link variant="nav" {...props} />
Link.Button = (props) => <Link variant="button" {...props} />
Link.External = (props) => <Link external {...props} />

export default Link