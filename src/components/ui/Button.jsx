import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const buttonStyles = {
  base: `
    relative inline-flex items-center justify-center
    font-body font-medium tracking-wide
    transition-all duration-300 ease-out
    transform active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-cream focus:ring-brand-gold
    group overflow-hidden
  `,
  
  variants: {
    primary: `
      bg-gradient-to-r from-brand-gold to-brand-gold-light
      text-brand-dark 
      hover:from-brand-gold-light hover:to-brand-gold
      shadow-luxury hover:shadow-gold
      border border-brand-gold-dark
      hover:transform hover:-translate-y-0.5
    `,
    secondary: `
      bg-brand-cream border-2 border-brand-gold
      text-brand-dark
      hover:bg-brand-gold hover:text-brand-dark
      shadow-soft hover:shadow-luxury
    `,
    outline: `
      bg-transparent border-2 border-brand-dark
      text-brand-dark
      hover:bg-brand-dark hover:text-brand-cream
      shadow-none hover:shadow-soft
    `,
    ghost: `
      bg-transparent
      text-brand-dark hover:text-brand-gold
      hover:bg-brand-gold/10
    `,
    luxury: `
      bg-brand-dark
      text-brand-gold
      border border-brand-gold
      shadow-luxury
      hover:bg-brand-gold hover:text-brand-dark
      hover:shadow-gold
      hover:transform hover:-translate-y-0.5
      relative
      before:absolute before:inset-0
      before:bg-shimmer-gradient
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-500
    `,
  },
  
  sizes: {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    xlarge: 'px-10 py-5 text-xl',
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