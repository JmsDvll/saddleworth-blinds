import React, { forwardRef } from 'react'

const badgeStyles = {
  base: `
    inline-flex items-center
    font-medium
    rounded-full
    transition-all duration-300
    group
  `,
  
  variants: {
    default: `
      bg-brand-cream text-brand-dark
      border border-brand-gold/20
      hover:bg-white hover:border-brand-gold/40
    `,
    primary: `
      bg-gradient-to-r from-brand-gold to-brand-gold-light
      text-brand-dark font-semibold
      hover:shadow-gold
    `,
    secondary: `
      bg-brand-dark text-brand-gold
      border border-brand-gold
      hover:bg-brand-dark-light
    `,
    success: `
      bg-gradient-to-r from-emerald-900/80 to-emerald-800/80
      text-emerald-300
      border border-emerald-500/30
      hover:border-emerald-400/40
    `,
    warning: `
      bg-gradient-to-r from-amber-900/80 to-amber-800/80
      text-amber-300
      border border-amber-500/30
      hover:border-amber-400/40
    `,
    error: `
      bg-gradient-to-r from-red-900/80 to-red-800/80
      text-red-300
      border border-red-500/30
      hover:border-red-400/40
    `,
    info: `
      bg-gradient-to-r from-blue-900/80 to-blue-800/80
      text-blue-300
      border border-blue-500/30
      hover:border-blue-400/40
    `,
    ghost: `
      bg-transparent
      text-gray-400
      border border-gray-700/30
      hover:bg-gray-800/50 hover:border-gray-600/50
    `,
  },
  
  sizes: {
    tiny: 'px-2 py-0.5 text-xs',
    small: 'px-2.5 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  },
  
  // Animated dot indicator
  dot: `
    before:content-['']
    before:inline-block
    before:w-2 before:h-2
    before:rounded-full
    before:mr-2
    before:bg-current
    before:animate-pulse
  `,
  
  // Premium glow effect
  glow: `
    after:absolute after:inset-0
    after:rounded-full
    after:bg-current
    after:blur-md
    after:opacity-30
    after:-z-10
    after:transition-opacity
    hover:after:opacity-50
  `
}

export const Badge = forwardRef(({
  children,
  variant = 'default',
  size = 'medium',
  dot = false,
  glow = false,
  className = '',
  icon,
  ...props
}, ref) => {
  const classes = `
    ${badgeStyles.base}
    ${badgeStyles.variants[variant]}
    ${badgeStyles.sizes[size]}
    ${dot ? badgeStyles.dot : ''}
    ${glow && (variant === 'primary' || variant === 'secondary') ? badgeStyles.glow + ' relative' : ''}
    ${className}
  `.trim()

  return (
    <span
      ref={ref}
      className={classes}
      {...props}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

// Convenience components for common badge types
Badge.Success = forwardRef((props, ref) => (
  <Badge ref={ref} variant="success" {...props} />
))
Badge.Success.displayName = 'Badge.Success'

Badge.Warning = forwardRef((props, ref) => (
  <Badge ref={ref} variant="warning" {...props} />
))
Badge.Warning.displayName = 'Badge.Warning'

Badge.Error = forwardRef((props, ref) => (
  <Badge ref={ref} variant="error" {...props} />
))
Badge.Error.displayName = 'Badge.Error'

Badge.Info = forwardRef((props, ref) => (
  <Badge ref={ref} variant="info" {...props} />
))
Badge.Info.displayName = 'Badge.Info'

Badge.New = forwardRef((props, ref) => (
  <Badge ref={ref} variant="primary" dot glow {...props}>
    NEW
  </Badge>
))
Badge.New.displayName = 'Badge.New'

Badge.ComingSoon = forwardRef((props, ref) => (
  <Badge ref={ref} variant="secondary" glow {...props}>
    Coming Soon
  </Badge>
))
Badge.ComingSoon.displayName = 'Badge.ComingSoon'

Badge.Beta = forwardRef((props, ref) => (
  <Badge ref={ref} variant="info" {...props}>
    BETA
  </Badge>
))
Badge.Beta.displayName = 'Badge.Beta'