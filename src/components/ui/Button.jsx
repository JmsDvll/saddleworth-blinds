import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const buttonStyles = {
  base: `
    relative inline-flex items-center justify-center
    font-body font-semibold tracking-wide uppercase
    transition-all duration-500 ease-out
    transform active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-cream focus:ring-brand-gold
    group overflow-hidden
    whitespace-nowrap
  `,
  
  variants: {
    primary: `
      bg-gold-gradient
      text-brand-dark 
      shadow-luxury hover:shadow-gold-lg
      border border-brand-gold-dark
      hover:transform hover:-translate-y-1
      relative
      before:absolute before:inset-0 before:bg-gold-shimmer before:opacity-0 
      hover:before:opacity-100 before:transition-opacity before:duration-500
    `,
    secondary: `
      bg-brand-cream border-2 border-brand-gold
      text-brand-dark
      hover:bg-brand-gold hover:text-brand-dark
      shadow-soft hover:shadow-luxury
      hover:border-brand-gold-dark
      transition-all duration-300
    `,
    outline: `
      bg-transparent border-2 border-brand-gold
      text-brand-gold
      hover:bg-brand-gold hover:text-brand-dark
      shadow-none hover:shadow-gold
      hover:transform hover:-translate-y-0.5
    `,
    ghost: `
      bg-transparent
      text-brand-gold hover:text-brand-gold-light
      hover:bg-brand-gold/10
      relative
      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
      after:bg-brand-gold after:transition-all after:duration-300
      hover:after:w-full
    `,
    luxury: `
      bg-brand-dark
      text-brand-gold font-display tracking-luxury
      border border-brand-gold
      shadow-luxury-lg
      hover:bg-gold-gradient hover:text-brand-dark
      hover:shadow-gold-lg
      hover:transform hover:-translate-y-1 hover:scale-105
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-gold-shimmer
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-700
      after:absolute after:inset-0 after:bg-gold-pulse
      after:opacity-0 hover:after:opacity-30
      after:animate-glow-pulse
    `,
    dark: `
      bg-brand-dark
      text-brand-cream
      border border-brand-dark-light
      shadow-luxury
      hover:bg-brand-dark-light
      hover:border-brand-gold
      hover:text-brand-gold
      hover:shadow-gold
      transition-all duration-300
    `,
  },
  
  sizes: {
    small: 'px-6 py-3 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg',
    xlarge: 'px-12 py-6 text-xl',
  },
  
  fullWidth: 'w-full',
  
  // Loading state
  loading: `
    cursor-not-allowed opacity-70
    pointer-events-none
  `,
}

export const Button = forwardRef((
  {
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    iconLeft,
    iconRight,
    as,
    to,
    href,
    className = '',
    ...props
  },
  ref
) => {
  const classes = `
    ${buttonStyles.base}
    ${buttonStyles.variants[variant]}
    ${buttonStyles.sizes[size]}
    ${fullWidth ? buttonStyles.fullWidth : ''}
    ${loading ? buttonStyles.loading : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && iconLeft && <span className="mr-2 -ml-1">{iconLeft}</span>}
      <span className="relative z-10">{children}</span>
      {!loading && iconRight && <span className="ml-2 -mr-1">{iconRight}</span>}
    </>
  )

  // Shimmer effect for luxury variant
  const shimmerEffect = variant === 'luxury' || variant === 'primary' ? (
    <span className="absolute inset-0 overflow-hidden rounded-inherit">
      <span className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
    </span>
  ) : null

  if (as === RouterLink || to) {
    return (
      <RouterLink
        ref={ref}
        to={to}
        className={classes}
        {...props}
      >
        {shimmerEffect}
        {content}
      </RouterLink>
    )
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...props}
      >
        {shimmerEffect}
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={loading}
      {...props}
    >
      {shimmerEffect}
      {content}
    </button>
  )
})

Button.displayName = 'Button'