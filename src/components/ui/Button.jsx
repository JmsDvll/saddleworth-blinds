import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const buttonStyles = {
  base: `
    relative inline-flex items-center justify-center
    font-semibold tracking-wide
    transition-all duration-300 ease-premium
    transform active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
    group overflow-hidden
  `,
  
  variants: {
    primary: `
      bg-gradient-to-r from-brand-gold to-brand-gold-light
      text-gray-900 
      hover:from-brand-gold-light hover:to-brand-gold
      focus:ring-brand-gold
      shadow-gold hover:shadow-lg hover:shadow-brand-gold/30
      before:absolute before:inset-0 before:bg-shimmer-gradient before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-300
      before:animate-shimmer
    `,
    secondary: `
      bg-brand-dark-lighter border-2 border-brand-gold/30
      text-brand-gold
      hover:bg-brand-dark-light hover:border-brand-gold/60
      focus:ring-brand-gold
      shadow-lg hover:shadow-gold
      backdrop-blur-sm
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-brand-gold/10 before:to-transparent
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
    `,
    ghost: `
      bg-transparent
      text-gray-300 hover:text-brand-gold
      hover:bg-brand-gold/10
      focus:ring-gray-600
      border border-transparent hover:border-brand-gold/30
    `,
    danger: `
      bg-gradient-to-r from-red-600 to-red-700
      text-white
      hover:from-red-700 hover:to-red-800
      focus:ring-red-500
      shadow-lg hover:shadow-red-500/30
    `,
    success: `
      bg-gradient-to-r from-emerald-600 to-emerald-700
      text-white
      hover:from-emerald-700 hover:to-emerald-800
      focus:ring-emerald-500
      shadow-lg hover:shadow-emerald-500/30
    `,
  },
  
  sizes: {
    small: 'px-3 py-1.5 text-sm rounded-md',
    medium: 'px-4 py-2 text-base rounded-lg',
    large: 'px-6 py-3 text-lg rounded-lg',
    xlarge: 'px-8 py-4 text-xl rounded-xl',
  },
  
  fullWidth: 'w-full',
  
  // Enhanced loading animation
  loading: `
    after:absolute after:inset-0 after:flex after:items-center after:justify-center
    after:bg-inherit after:rounded-inherit
    text-transparent
  `,
  
  // Glow effect for primary buttons
  glow: `
    after:absolute after:-inset-1 after:bg-gradient-to-r after:from-brand-gold/50 after:to-brand-gold-light/50
    after:blur-xl after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500
    after:-z-10
  `
}

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  as = 'button',
  to,
  href,
  iconLeft,
  iconRight,
  glow = false,
  ...props
}, ref) => {
  const classes = `
    ${buttonStyles.base}
    ${buttonStyles.variants[variant]}
    ${buttonStyles.sizes[size]}
    ${fullWidth ? buttonStyles.fullWidth : ''}
    ${loading ? buttonStyles.loading : ''}
    ${glow && variant === 'primary' ? buttonStyles.glow : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed transform-none' : ''}
    ${className}
  `.trim()

  // Enhanced loading spinner with smooth animation
  const loadingSpinner = loading && (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-5 h-5">
        <div className="absolute inset-0 border-2 border-current opacity-25 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )

  const content = (
    <>
      {/* Hover effect overlay */}
      <span className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      
      {/* Content wrapper for z-index */}
      <span className="relative flex items-center gap-2">
        {iconLeft && <span className="transition-transform duration-300 group-hover:scale-110">{iconLeft}</span>}
        <span className={loading ? 'invisible' : ''}>{children}</span>
        {iconRight && <span className="transition-transform duration-300 group-hover:scale-110">{iconRight}</span>}
      </span>
      
      {loadingSpinner}
    </>
  )

  // Handle different element types
  if (as === Link && to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    )
  }

  if ((as === 'a' || href) && (href || props.href)) {
    return (
      <a
        ref={ref}
        href={href || props.href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
})

Button.displayName = 'Button'