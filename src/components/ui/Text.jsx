import React, { forwardRef } from 'react'

const textStyles = {
  base: 'font-body',
  
  // Sizes
  sizes: {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl',
  },
  
  // Weights
  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  
  // Colors
  colors: {
    inherit: '',
    dark: 'text-brand-dark',
    light: 'text-brand-cream',
    gold: 'text-brand-gold',
    muted: 'text-brand-grey',
    error: 'text-red-600',
    success: 'text-emerald-600',
  },
  
  // Line height
  leading: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },
  
  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
  
  // Letter spacing
  tracking: {
    normal: '',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    luxury: 'tracking-luxury',
  }
}

export const Text = forwardRef(({ 
  as: Component = 'p',
  size = 'medium',
  weight = 'normal',
  color = 'inherit',
  leading = 'normal',
  align = 'left',
  tracking = 'normal',
  className = '',
  children,
  ...props 
}, ref) => {
  const classes = `
    ${textStyles.base}
    ${textStyles.sizes[size]}
    ${textStyles.weights[weight]}
    ${textStyles.colors[color]}
    ${textStyles.leading[leading]}
    ${textStyles.align[align]}
    ${textStyles.tracking[tracking]}
    ${className}
  `.trim()

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

Text.displayName = 'Text'

// Convenience components
export const Lead = forwardRef((props, ref) => (
  <Text ref={ref} as="p" size="xlarge" weight="light" leading="relaxed" {...props} />
))

export const Caption = forwardRef((props, ref) => (
  <Text ref={ref} as="span" size="small" color="muted" {...props} />
))

export const Error = forwardRef((props, ref) => (
  <Text ref={ref} as="span" size="small" color="error" weight="medium" {...props} />
))

export const Success = forwardRef((props, ref) => (
  <Text ref={ref} as="span" size="small" color="success" weight="medium" {...props} />
))

Lead.displayName = 'Lead'
Caption.displayName = 'Caption'
Error.displayName = 'Error'
Success.displayName = 'Success'

// Attach convenience components
Text.Lead = Lead
Text.Caption = Caption
Text.Error = Error
Text.Success = Success