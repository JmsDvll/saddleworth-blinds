import React from 'react'

// Centralized container styles
const containerStyles = {
  // Base styles
  base: 'mx-auto px-4 md:px-6 lg:px-8',
  
  // Max width variants
  maxWidth: {
    none: '',
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
    screen: 'max-w-screen-2xl',
  },
  
  // Padding variants
  padding: {
    none: 'px-0',
    small: 'px-4',
    medium: 'px-4 md:px-6 lg:px-8',
    large: 'px-4 md:px-8 lg:px-12',
  },
}

export const Container = ({
  children,
  maxWidth = 'large',
  padding = 'medium',
  className = '',
  ...props
}) => {
  const classes = [
    containerStyles.base,
    containerStyles.maxWidth[maxWidth],
    containerStyles.padding[padding],
    'container', // Tailwind's container class for responsive behavior
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Stack component for vertical spacing
export const Stack = ({
  children,
  spacing = 'medium',
  className = '',
  ...props
}) => {
  const spacingStyles = {
    none: 'space-y-0',
    tiny: 'space-y-1',
    small: 'space-y-2',
    medium: 'space-y-4',
    large: 'space-y-6',
    xlarge: 'space-y-8',
    xxlarge: 'space-y-12',
  }
  
  const classes = [
    spacingStyles[spacing],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Flex component for horizontal layouts
export const Flex = ({
  children,
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  gap = 'medium',
  className = '',
  ...props
}) => {
  const flexStyles = {
    base: 'flex',
    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      col: 'flex-col',
      colReverse: 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
    gap: {
      none: 'gap-0',
      tiny: 'gap-1',
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
      xlarge: 'gap-8',
    },
  }
  
  const classes = [
    flexStyles.base,
    flexStyles.direction[direction],
    flexStyles.align[align],
    flexStyles.justify[justify],
    flexStyles.wrap[wrap],
    flexStyles.gap[gap],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Center component for centering content
export const Center = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  )
}
