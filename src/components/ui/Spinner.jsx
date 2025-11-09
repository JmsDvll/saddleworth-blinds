import React, { forwardRef } from 'react'
/**
 * Spinner – Loading indicator with ring effects.
 *
 * Props
 * - size: 'small' | 'medium' | 'large' | 'xlarge'
 * - variant: 'gold' | 'default' | 'white'
 * - multiRing: boolean – render multi-ring spinner when true
 */

const spinnerStyles = {
  container: {
    base: 'relative inline-block',
    sizes: {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16',
      xlarge: 'w-24 h-24',
    },
  },
  ring: {
    base: 'absolute inset-0 border-4 rounded-full',
    variants: {
      default: {
        outer: 'border-brand-gold/20',
        inner: 'border-brand-gold/40',
        spinner: 'border-brand-gold/60 border-t-brand-gold',
      },
      gold: {
        outer: 'border-brand-gold/30',
        inner: 'border-brand-gold/50',
        spinner: 'border-brand-gold/70 border-t-brand-gold-light',
      },
      white: {
        outer: 'border-white/20',
        inner: 'border-white/40',
        spinner: 'border-white/60 border-t-white',
      },
    },
    animation: {
      spin: 'animate-spin',
      spinReverse: 'animate-spin animate-reverse',
    },
  },
}

export const Spinner = forwardRef(({
  size = 'medium',
  variant = 'gold',
  className = '',
  multiRing = true,
  ...props
}, ref) => {
  const containerClasses = `
    ${spinnerStyles.container.base}
    ${spinnerStyles.container.sizes[size]}
    ${className}
  `.trim()

  const rings = spinnerStyles.ring.variants[variant]

  return (
    <div
      ref={ref}
      className={containerClasses}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {multiRing ? (
        <>
          <div className={`${spinnerStyles.ring.base} ${rings.outer} ${spinnerStyles.ring.animation.spin}`} />
          <div className={`${spinnerStyles.ring.base} ${rings.inner} ${spinnerStyles.ring.animation.spinReverse} inset-2`} />
          <div className={`${spinnerStyles.ring.base} ${rings.spinner} ${spinnerStyles.ring.animation.spin} inset-4`} />
        </>
      ) : (
        <div className={`${spinnerStyles.ring.base} ${rings.spinner} ${spinnerStyles.ring.animation.spin}`} />
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  )
})

Spinner.displayName = 'Spinner'