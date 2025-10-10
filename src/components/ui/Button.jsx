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
      bg-brand-yellow
      text-brand-black font-semibold
      hover:bg-brand-yellow-dark
      focus:ring-brand-yellow
      shadow-soft hover:shadow-hard
      hover:transform hover:-translate-y-0.5
    `,
    secondary: `
      bg-transparent border-2 border-brand-charcoal
      text-brand-charcoal
      hover:bg-brand-charcoal hover:text-white
      focus:ring-brand-charcoal
      shadow-none hover:shadow-soft
    `,
    outline: `
      bg-transparent border-2 border-brand-yellow
      text-brand-yellow
      hover:bg-brand-yellow hover:text-brand-black
      focus:ring-brand-yellow
      shadow-none hover:shadow-soft
    `,
    ghost: `
      bg-transparent
      text-brand-charcoal hover:text-brand-yellow
      hover:bg-brand-yellow/10
      focus:ring-brand-yellow
    `,
    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
      focus:ring-red-500
      shadow-soft hover:shadow-hard
    `,
    success: `
      bg-emerald-600
      text-white
      hover:bg-emerald-700
      focus:ring-emerald-500
      shadow-soft hover:shadow-hard
    `,
  },
  
  sizes: {
    small: 'px-4 py-1.5 text-sm rounded-full',
    medium: 'px-6 py-2.5 text-base rounded-full',
    large: 'px-8 py-3 text-lg rounded-full',
    xlarge: 'px-10 py-4 text-xl rounded-full',
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