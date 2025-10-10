import React, { forwardRef } from 'react'

const progressBarStyles = {
  container: {
    base: 'overflow-hidden transition-all duration-300',
    sizes: {
      small: 'h-0.5',
      medium: 'h-1',
      large: 'h-2',
    },
        variants: {
          default: 'bg-brand-cream border border-brand-gold/20',
          dark: 'bg-brand-dark/50',
          light: 'bg-white/50',
        },
    rounded: {
      none: '',
      small: 'rounded-sm',
      medium: 'rounded',
      large: 'rounded-lg',
      full: 'rounded-full',
    }
  },
  bar: {
    base: 'h-full transition-all',
    variants: {
      primary: 'bg-gradient-to-r from-brand-gold to-brand-gold-light',
      secondary: 'bg-gradient-to-r from-gray-600 to-gray-500',
      success: 'bg-gradient-to-r from-emerald-600 to-emerald-500',
      error: 'bg-gradient-to-r from-red-600 to-red-500',
    },
    animated: {
      none: '',
      pulse: 'animate-pulse',
      shimmer: 'animate-shimmer bg-[length:200%_100%]',
    }
  }
}

export const ProgressBar = forwardRef(({
  value = 0,
  max = 100,
  size = 'medium',
  variant = 'primary',
  containerVariant = 'default',
  rounded = 'full',
  animated = 'none',
  className = '',
  barClassName = '',
  style = {},
  barStyle = {},
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const containerClasses = `
    ${progressBarStyles.container.base}
    ${progressBarStyles.container.sizes[size]}
    ${progressBarStyles.container.variants[containerVariant]}
    ${progressBarStyles.container.rounded[rounded]}
    ${className}
  `.trim()

  const barClasses = `
    ${progressBarStyles.bar.base}
    ${progressBarStyles.bar.variants[variant]}
    ${progressBarStyles.bar.animated[animated]}
    ${barClassName}
  `.trim()

  return (
    <div
      ref={ref}
      className={containerClasses}
      style={style}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <div
        className={barClasses}
        style={{
          width: `${percentage}%`,
          ...barStyle
        }}
      />
    </div>
  )
})

ProgressBar.displayName = 'ProgressBar'