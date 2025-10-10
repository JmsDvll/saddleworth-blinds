import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const linkStyles = {
  base: `
    relative
    inline-flex items-center
    transition-all duration-300
    group
  `,
  
  variants: {
    default: `
      text-brand-gold hover:text-brand-gold-light
      after:absolute after:bottom-0 after:left-0
      after:w-full after:h-px
      after:bg-gold-gradient
      after:scale-x-0 after:origin-left
      after:transition-transform after:duration-500
      hover:after:scale-x-100
    `,
    nav: `
      text-brand-dark hover:text-brand-gold
      px-4 py-2
      font-medium uppercase tracking-wide
      transition-all duration-300
      relative
      after:absolute after:bottom-0 after:left-4 after:right-4
      after:h-0.5 after:bg-gold-gradient
      after:transform after:scale-x-0
      after:transition-transform after:duration-500
      hover:after:scale-x-100
    `,
    menu: `
      block w-full text-left
      px-4 py-3 rounded-lg
      text-brand-cream hover:text-brand-gold
      hover:bg-brand-gold/10
      transition-all duration-300
      group
    `,
    mobileNav: `
      block w-full
      px-4 py-3 rounded-lg
      text-brand-dark hover:text-brand-gold
      hover:bg-brand-gold/10
      transition-all duration-300
    `,
    subtle: `
      text-brand-grey hover:text-brand-grey-light
      underline-offset-4
      decoration-brand-grey/50 hover:decoration-brand-grey
      transition-all duration-300
    `,
    button: `
      inline-flex items-center justify-center
      text-brand-dark
      bg-gold-gradient
      px-6 py-3 rounded-lg
      font-semibold uppercase tracking-wide
      shadow-luxury hover:shadow-gold-lg
      hover:transform hover:-translate-y-0.5
      transition-all duration-500
      active:scale-[0.98]
    `,
    plain: `
      hover:opacity-80
      transition-opacity duration-300
    `,
    luxury: `
      text-brand-gold hover:text-brand-gold-light
      font-display tracking-luxury
      relative
      after:absolute after:bottom-0 after:left-0
      after:w-full after:h-1
      after:bg-gold-gradient
      after:scale-x-0 after:origin-center
      after:transition-transform after:duration-700
      hover:after:scale-x-100
      hover:drop-shadow-gold
    `,
  },
  
  sizes: {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  },
  
  // Enhanced underline styles
  underline: {
    none: '',
    hover: 'hover:underline underline-offset-4',
    always: 'underline underline-offset-4',
    gradient: `
      after:absolute after:bottom-0 after:left-0
      after:w-full after:h-0.5
      after:bg-gradient-to-r after:from-current after:to-current
      after:scale-x-0 after:origin-left
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    `,
  },
  
  // Icon animation
  iconAnimation: `
    [&>svg]:transition-transform [&>svg]:duration-300
    hover:[&>svg]:translate-x-1
  `
}

export const Link = forwardRef(({
  children,
  to,
  href,
  variant = 'default',
  size = 'medium',
  underline = 'none',
  className = '',
  external = false,
  iconRight,
  iconLeft,
  ...props
}, ref) => {
  const isExternal = external || href?.startsWith('http') || href?.startsWith('//')
  
  const classes = `
    ${linkStyles.base}
    ${linkStyles.variants[variant]}
    ${linkStyles.sizes[size]}
    ${linkStyles.underline[underline]}
    ${(iconRight || iconLeft) && variant !== 'button' ? linkStyles.iconAnimation : ''}
    ${className}
  `.trim()
  
  const content = (
    <>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </>
  )
  
  // External link
  if (isExternal || href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }
  
  // Internal link
  if (to) {
    return (
      <RouterLink
        ref={ref}
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </RouterLink>
    )
  }
  
  // Fallback to span for link-styled text
  return (
    <span
      ref={ref}
      className={classes}
      {...props}
    >
      {content}
    </span>
  )
})

Link.displayName = 'Link'

// Convenience components
Link.Nav = forwardRef((props, ref) => (
  <Link ref={ref} variant="nav" {...props} />
))
Link.Nav.displayName = 'Link.Nav'

Link.Button = forwardRef((props, ref) => (
  <Link ref={ref} variant="button" {...props} />
))
Link.Button.displayName = 'Link.Button'

Link.External = forwardRef((props, ref) => (
  <Link ref={ref} external {...props} />
))
Link.External.displayName = 'Link.External'