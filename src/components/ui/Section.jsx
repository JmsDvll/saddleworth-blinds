import React, { forwardRef } from 'react'

const sectionStyles = {
  padding: {
    none: '',
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
    xlarge: 'py-24 md:py-32',
  },
  
  background: {
    transparent: 'bg-transparent',
    dark: `
      bg-brand-dark-light
      relative
      before:absolute before:inset-0
      before:bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.05)_0%,transparent_50%)]
      after:absolute after:inset-0
      after:bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.03)_0%,transparent_50%)]
    `,
    darker: `
      bg-brand-dark
      relative
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]
      after:absolute after:inset-0
      after:bg-gradient-to-b after:from-transparent after:via-brand-dark/50 after:to-transparent
    `,
    gradient: `
      bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-gold-gradient before:opacity-5
      after:absolute after:top-0 after:left-[-100%]
      after:w-[200%] after:h-full
      after:bg-gradient-to-r after:from-transparent after:via-brand-gold/10 after:to-transparent
      after:skew-x-12
      after:animate-[shimmer_8s_ease-in-out_infinite]
    `,
    gradientDark: `
      bg-gradient-to-br from-gray-900 via-brand-dark to-gray-900
      relative
      before:absolute before:inset-0
      before:bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1)_0%,transparent_50%)]
    `,
    gold: `
      bg-gradient-to-br from-brand-gold-dark via-brand-gold to-brand-gold-light
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")]
      after:absolute after:inset-0
      after:bg-gradient-to-t after:from-black/20 after:to-transparent
    `,
    premium: `
      bg-premium-gradient
      relative overflow-hidden
      before:absolute before:w-96 before:h-96
      before:bg-gradient-radial before:from-brand-gold/20 before:to-transparent
      before:rounded-full before:blur-3xl
      before:top-[-10%] before:right-[-10%]
      before:animate-pulse-glow
      after:absolute after:w-96 after:h-96
      after:bg-gradient-radial after:from-brand-accent-purple/10 after:to-transparent
      after:rounded-full after:blur-3xl
      after:bottom-[-10%] after:left-[-10%]
      after:animate-pulse-glow after:animation-delay-2000
    `
  },
  
  textColor: {
    light: 'text-gray-300',
    dark: 'text-gray-900',
    inherit: '',
  },
  
  // Special effects
  effects: {
    none: '',
    particles: `
      before:absolute before:inset-0
      before:bg-[url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23D4AF37' opacity='0.3'%3E%3Canimate attributeName='cy' values='50;180;50' dur='20s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='150' cy='150' r='1' fill='%23D4AF37' opacity='0.3'%3E%3Canimate attributeName='cy' values='150;20;150' dur='15s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E")]
    `,
    waves: `
      after:absolute after:bottom-0 after:left-0 after:right-0
      after:h-px after:bg-gradient-to-r
      after:from-transparent after:via-brand-gold/50 after:to-transparent
    `
  }
}

export const Section = forwardRef(({
  children,
  padding = 'large',
  background = 'transparent',
  textColor = 'light',
  effect = 'none',
  className = '',
  animate = true,
  ...props
}, ref) => {
  const classes = `
    ${sectionStyles.padding[padding]}
    ${sectionStyles.background[background]}
    ${sectionStyles.textColor[textColor]}
    ${sectionStyles.effects[effect]}
    ${animate ? 'animate-fade-in' : ''}
    relative
    ${className}
  `.trim()

  return (
    <section
      ref={ref}
      className={classes}
      {...props}
    >
      {/* Content wrapper for proper z-indexing */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
})

Section.displayName = 'Section'

// Section container for consistent max-width
Section.Container = ({ children, maxWidth = 'large', className = '' }) => {
  const widths = {
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={`${widths[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}