import React, { forwardRef } from 'react'

// Component for handling spacing and layout utilities
const spacerStyles = {
  margin: {
    // All sides
    '0': 'm-0',
    '1': 'm-1',
    '2': 'm-2',
    '4': 'm-4',
    'auto': 'm-auto',
    // Horizontal
    'x-auto': 'mx-auto',
    'x-1': 'mx-1',
    'x-2': 'mx-2',
    'x-4': 'mx-4',
    // Vertical
    'y-1': 'my-1',
    'y-2': 'my-2',
    'y-4': 'my-4',
    // Top
    't-1': 'mt-1',
    't-2': 'mt-2',
    't-4': 'mt-4',
    // Right
    'r-1': 'mr-1',
    'r-2': 'mr-2',
    'r-4': 'mr-4',
    // Bottom
    'b-1': 'mb-1',
    'b-2': 'mb-2',
    'b-4': 'mb-4',
    // Left
    'l-1': 'ml-1',
    'l-2': 'ml-2',
    'l-4': 'ml-4',
  },
  
  padding: {
    // All sides
    '0': 'p-0',
    '1': 'p-1',
    '2': 'p-2',
    '4': 'p-4',
    '6': 'p-6',
    '8': 'p-8',
    // Horizontal
    'x-1': 'px-1',
    'x-2': 'px-2',
    'x-4': 'px-4',
    // Vertical
    'y-1': 'py-1',
    'y-2': 'py-2',
    'y-4': 'py-4',
    // Top
    't-1': 'pt-1',
    't-2': 'pt-2',
    't-4': 'pt-4',
    // Right
    'r-1': 'pr-1',
    'r-2': 'pr-2',
    'r-4': 'pr-4',
    // Bottom
    'b-1': 'pb-1',
    'b-2': 'pb-2',
    'b-4': 'pb-4',
    // Left
    'l-1': 'pl-1',
    'l-2': 'pl-2',
    'l-4': 'pl-4',
  }
}

export const Spacer = forwardRef(({
  as: Component = 'div',
  margin,
  padding,
  className = '',
  children,
  ...props
}, ref) => {
  const classes = [
    margin && spacerStyles.margin[margin],
    padding && spacerStyles.padding[padding],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

Spacer.displayName = 'Spacer'