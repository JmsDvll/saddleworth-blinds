import React, { forwardRef } from 'react'

// Generic box component for layout and styling
const boxStyles = {
  position: {
    static: 'static',
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  
  display: {
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
    inlineFlex: 'inline-flex',
    grid: 'grid',
    hidden: 'hidden',
  },
  
  // Common size presets
  sizes: {
    '8': 'w-8 h-8',
    '10': 'w-10 h-10',
    '12': 'w-12 h-12',
    '16': 'w-16 h-16',
    '20': 'w-20 h-20',
    '24': 'w-24 h-24',
    '32': 'w-32 h-32',
    '40': 'w-40 h-40',
    '48': 'w-48 h-48',
    '56': 'w-56 h-56',
    '64': 'w-64 h-64',
    'full': 'w-full h-full',
  },
  
  // Inset positions
  inset: {
    '0': 'inset-0',
    '1': 'inset-1',
    '2': 'inset-2',
    '3': 'inset-3',
    '4': 'inset-4',
    'x-0': 'inset-x-0',
    'y-0': 'inset-y-0',
  },
  
  // Border styles
  border: {
    none: '',
    '1': 'border',
    '2': 'border-2',
    '4': 'border-4',
    't-1': 'border-t',
    't-2': 'border-t-2',
    'r-1': 'border-r',
    'r-2': 'border-r-2',
    'b-1': 'border-b',
    'b-2': 'border-b-2',
    'l-1': 'border-l',
    'l-2': 'border-l-2',
  },
  
  borderColor: {
    transparent: 'border-transparent',
    current: 'border-current',
    gold: 'border-brand-gold',
    goldLight: 'border-brand-gold/20',
    goldMedium: 'border-brand-gold/40',
    goldDark: 'border-brand-gold/60',
    gray: 'border-gray-700',
    grayLight: 'border-gray-700/30',
    white: 'border-white',
    whiteLight: 'border-white/20',
  },
  
  rounded: {
    none: '',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  },
  
  overflow: {
    visible: 'overflow-visible',
    hidden: 'overflow-hidden',
    auto: 'overflow-auto',
    scroll: 'overflow-scroll',
  },
  
  opacity: {
    '0': 'opacity-0',
    '10': 'opacity-10',
    '20': 'opacity-20',
    '30': 'opacity-30',
    '40': 'opacity-40',
    '50': 'opacity-50',
    '60': 'opacity-60',
    '70': 'opacity-70',
    '80': 'opacity-80',
    '90': 'opacity-90',
    '100': 'opacity-100',
  },
  
  scale: {
    '90': 'scale-90',
    '95': 'scale-95',
    '100': 'scale-100',
    '105': 'scale-105',
    '110': 'scale-110',
    '125': 'scale-125',
    '150': 'scale-150',
  },
  
  maxWidth: {
    'xs': 'max-w-xs',
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
  },
  
  translate: {
    'x-0': 'translate-x-0',
    'x-1': 'translate-x-1',
    'x-2': 'translate-x-2',
    'x-4': 'translate-x-4',
    '-x-1': '-translate-x-1',
    '-x-2': '-translate-x-2',
    '-x-4': '-translate-x-4',
    '-x-1/2': '-translate-x-1/2',
    'y-0': 'translate-y-0',
    'y-1': 'translate-y-1',
    'y-2': 'translate-y-2',
    'y-4': 'translate-y-4',
    'y-8': 'translate-y-8',
    '-y-1': '-translate-y-1',
    '-y-2': '-translate-y-2',
    '-y-1/2': '-translate-y-1/2',
  },
  
  positioning: {
    'bottom-0': 'bottom-0',
    'bottom-4': 'bottom-4',
    'bottom-8': 'bottom-8',
    '-bottom-16': '-bottom-16',
    'right-0': 'right-0',
    'right-4': 'right-4',
    'right-8': 'right-8',
    'left-0': 'left-0',
    'left-1/2': 'left-1/2',
    'z-10': 'z-10',
    'z-20': 'z-20',
    'z-30': 'z-30',
    'z-40': 'z-40',
    'z-50': 'z-50',
  }
}

export const Box = forwardRef(({
  as: Component = 'div',
  position,
  display,
  size,
  inset,
  border,
  borderColor,
  rounded,
  overflow,
  opacity,
  scale,
  maxWidth,
  translate,
  positioning,
  className = '',
  style,
  children,
  ...props
}, ref) => {
  const classes = [
    position && boxStyles.position[position],
    display && boxStyles.display[display],
    size && boxStyles.sizes[size],
    inset && boxStyles.inset[inset],
    border && boxStyles.border[border],
    borderColor && boxStyles.borderColor[borderColor],
    rounded && boxStyles.rounded[rounded],
    overflow && boxStyles.overflow[overflow],
    opacity && boxStyles.opacity[opacity],
    scale && boxStyles.scale[scale],
    maxWidth && boxStyles.maxWidth[maxWidth],
    translate && boxStyles.translate[translate],
    positioning && boxStyles.positioning[positioning],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component
      ref={ref}
      className={classes}
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
})

Box.displayName = 'Box'

// Corner decoration component
export const CornerDecoration = ({ corner, size = '32', borderWidth = '2', borderColor = 'goldLight' }) => {
  const cornerStyles = {
    'top-left': `top-0 left-0 border-l-${borderWidth} border-t-${borderWidth}`,
    'top-right': `top-0 right-0 border-r-${borderWidth} border-t-${borderWidth}`,
    'bottom-left': `bottom-0 left-0 border-l-${borderWidth} border-b-${borderWidth}`,
    'bottom-right': `bottom-0 right-0 border-r-${borderWidth} border-b-${borderWidth}`,
  }

  return (
    <Box
      position="absolute"
      size={size}
      className={`${cornerStyles[corner]} ${boxStyles.borderColor[borderColor]}`}
    />
  )
}