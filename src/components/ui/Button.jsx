import React from 'react'
import { Link } from 'react-router-dom'

// Centralized button styles - NO inline styles allowed!
const buttonStyles = {
  base: 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  // Variants
  variants: {
    primary: 'bg-brand-gold hover:bg-yellow-500 text-gray-900 focus:ring-brand-gold focus:ring-offset-gray-900',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 focus:ring-gray-600 focus:ring-offset-gray-900',
    ghost: 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white focus:ring-gray-600 focus:ring-offset-gray-900',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600 focus:ring-offset-gray-900',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-600 focus:ring-offset-gray-900',
  },
  
  // Sizes
  sizes: {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
    xlarge: 'text-lg px-8 py-4',
  },
  
  // Full width option
  fullWidth: 'w-full',
  
  // Icon styles
  iconLeft: 'mr-2',
  iconRight: 'ml-2',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  href,
  to,
  className = '',
  ...props
}) => {
  // Build className from our centralized styles
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    fullWidth && buttonStyles.fullWidth,
    className, // Allow extending but discourage it
  ].filter(Boolean).join(' ')
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
  
  // Button content with icons
  const content = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && iconLeft && <span className={buttonStyles.iconLeft}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className={buttonStyles.iconRight}>{iconRight}</span>}
    </>
  )
  
  // If it's a link
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    )
  }
  
  // If it's an external link
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button