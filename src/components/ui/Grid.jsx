import React from 'react'
/**
 * Grid – Responsive grid with semantic props.
 *
 * Props
 * - cols: 1 | 2 | 3 | 4 | 6 | 12 – responsive presets
 * - gap: 'none' | 'small' | 'medium' | 'large' | 'xlarge'
 * - align: 'start' | 'center' | 'end' | 'stretch'
 * - justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
 *
 * Grid.Item
 * - span: 1..12 | 'full'
 */

// Centralized grid styles
const gridStyles = {
  // Base grid
  base: 'grid',
  
  // Column configurations
  cols: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-12',
  },
  
  // Gap sizes
  gaps: {
    none: 'gap-0',
    small: 'gap-4',
    medium: 'gap-6 md:gap-8',
    large: 'gap-8 md:gap-10',
    xlarge: 'gap-12 md:gap-16',
  },
  
  // Alignment
  align: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  },
  
  // Justify
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
}

export const Grid = ({
  cols = 1,
  gap = 'medium',
  align = 'stretch',
  justify = 'start',
  children,
  className = '',
  ...props
}) => {
  const classes = [
    gridStyles.base,
    gridStyles.cols[cols],
    gridStyles.gaps[gap],
    gridStyles.align[align],
    gridStyles.justify[justify],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Grid item component for more control
Grid.Item = ({ span = 1, className = '', children, ...props }) => {
  const spanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
    full: 'col-span-full',
  }
  
  return (
    <div className={`${spanClasses[span]} ${className}`} {...props}>
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'
Grid.Item.displayName = 'Grid.Item'