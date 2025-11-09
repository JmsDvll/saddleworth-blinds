import React, { forwardRef } from 'react'
/**
 * Text – Standardized typography wrapper.
 *
 * Props
 * - as: string – HTML tag to render (default 'p')
 * - variant: 'default' | 'lead' | 'small' | 'caption' | 'menu' | 'heading' | 'luxury'
 * - size: 'xs' | 'small' | 'medium' | 'large' | 'xlarge' | '2xl'
 * - weight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
 * - color: 'inherit' | 'dark' | 'light' | 'gold' | 'muted' | 'error' | 'success'
 * - leading: 'tight' | 'normal' | 'relaxed' | 'loose'
 * - align: 'left' | 'center' | 'right' | 'justify'
 * - tracking: 'normal' | 'wide' | 'wider' | 'luxury'
 *
 * Usage
 *  <Text size="large" color="muted">Body copy</Text>
 *
 * Anti‑patterns
 * - Do not use raw <p>/<span> outside UI layer for standard text
 * - Avoid Tailwind className; choose semantic props here
 */

const textStyles = {
  base: 'font-body',
  
  // Variants (predefined combinations)
  variants: {
    default: '',
    lead: 'text-xl font-light leading-relaxed',
    small: 'text-sm',
    caption: 'text-sm text-brand-grey',
    menu: 'font-medium',
    heading: 'font-display font-bold tracking-wide',
    luxury: 'font-display tracking-luxury',
  },
  
  // Sizes
  sizes: {
    xs: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl',
    '2xl': 'text-2xl',
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
    muted: 'text-brand-grey-darker',
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
  },
}

export const Text = forwardRef(({ 
  as: Component = 'p',
  variant = 'default',
  size,
  weight,
  color = 'inherit',
  leading = 'normal',
  align = 'left',
  tracking = 'normal',
  className = '',
  children,
  ...props 
}, ref) => {
  // If variant is used, it takes precedence over individual props
  const useVariant = variant !== 'default'
  
  const classes = `
    ${textStyles.base}
    ${useVariant ? textStyles.variants[variant] : ''}
    ${!useVariant && size ? textStyles.sizes[size] : ''}
    ${!useVariant && weight ? textStyles.weights[weight] : ''}
    ${textStyles.colors[color]}
    ${!useVariant ? textStyles.leading[leading] : ''}
    ${textStyles.align[align]}
    ${!useVariant ? textStyles.tracking[tracking] : ''}
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