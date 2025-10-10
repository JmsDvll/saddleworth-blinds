import React from 'react'

// Centralized text styles
const textStyles = {
  // Sizes
  sizes: {
    small: 'text-sm lg:text-base',
    medium: 'text-base lg:text-lg',
    large: 'text-lg lg:text-xl',
    xlarge: 'text-xl lg:text-2xl',
  },
  
  // Weights
  weights: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  
  // Colors
  colors: {
    inherit: '',
    white: 'text-white',
    charcoal: 'text-brand-charcoal',
    yellow: 'text-brand-yellow',
    black: 'text-brand-black',
    muted: 'text-gray-600',
    light: 'text-gray-700',
    error: 'text-red-600',
    success: 'text-green-600',
  },
  
  // Line height
  leading: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  },
  
  // Alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
}

export const Text = ({
  as: Component = 'p',
  size = 'medium',
  weight = 'normal',
  color = 'inherit',
  leading = 'relaxed',
  align = 'left',
  children,
  className = '',
  ...props
}) => {
  const classes = [
    textStyles.sizes[size],
    textStyles.weights[weight],
    textStyles.colors[color],
    textStyles.leading[leading],
    textStyles.align[align],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

// Specialized text components
Text.Lead = (props) => (
  <Text size="xlarge" color="light" weight="normal" {...props} />
)

Text.Caption = (props) => (
  <Text size="small" color="muted" {...props} />
)

Text.Error = (props) => (
  <Text color="error" weight="medium" {...props} />
)

Text.Success = (props) => (
  <Text color="success" weight="medium" {...props} />
)
