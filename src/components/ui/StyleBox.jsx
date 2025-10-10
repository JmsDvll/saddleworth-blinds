import React, { forwardRef } from 'react'

// Comprehensive style component for handling all CSS utilities
const styleBoxStyles = {
  // Display & Visibility
  display: {
    hidden: 'hidden',
    block: 'block',
    'inline-block': 'inline-block',
    'md:block': 'md:block',
  },
  
  // Position utilities
  position: {
    'left-0': 'left-0',
    'right-0': 'right-0',
    'right-8': 'right-8',
    'left-1/2': 'left-1/2',
  },
  
  // Z-index
  zIndex: {
    '10': 'z-10',
    '20': 'z-20',
    '30': 'z-30',
    '40': 'z-40',
    '50': 'z-50',
  },
  
  // Backgrounds
  background: {
    'gradient-r-dark': 'bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent',
    'gradient-t-dark': 'bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent',
    'dark/60': 'bg-brand-dark/60',
  },
  
  // Text utilities
  textStyle: {
    'gold-gradient': 'bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]',
    'gold': 'text-brand-gold',
    'gray-300': 'text-gray-300',
    'gray-400': 'text-gray-400',
    'gray-500': 'text-gray-500',
    'white-hover': 'group-hover:text-white',
  },
  
  // Font utilities
  font: {
    'display': 'font-display',
    'display-2xl': 'font-display text-2xl',
    'display-3xl-4xl': 'text-3xl md:text-4xl',
  },
  
  // Transform & Animation
  transform: {
    'scale-110-hover': 'group-hover:scale-110 transition-transform',
  },
  
  // Opacity
  opacity: {
    'group-hover': 'opacity-0 group-hover:opacity-100',
    'group-hover-translate': 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0',
  },
  
  // Spacing
  spacing: {
    'mx-auto': 'mx-auto',
    'mx-2': 'mx-2',
    'mr-1': 'mr-1',
    'mt-2': 'mt-2',
    'pt-4': 'pt-4',
  },
  
  // Effects
  effect: {
    'backdrop-blur': 'backdrop-blur-md',
    'pause-animation': 'pause-animation',
    'animate-pulse-glow': 'animate-pulse-glow',
  },
  
  // Layout
  layout: {
    'text-center': 'text-center',
    'overflow-hidden': 'overflow-hidden',
  }
}

export const StyleBox = forwardRef(({
  as: Component = 'div',
  display,
  position,
  zIndex,
  background,
  textStyle,
  font,
  transform,
  opacity,
  spacing,
  effect,
  layout,
  className = '',
  children,
  ...props
}, ref) => {
  const classes = [
    display && styleBoxStyles.display[display],
    position && styleBoxStyles.position[position],
    zIndex && styleBoxStyles.zIndex[zIndex],
    background && styleBoxStyles.background[background],
    textStyle && styleBoxStyles.textStyle[textStyle],
    font && styleBoxStyles.font[font],
    transform && styleBoxStyles.transform[transform],
    opacity && styleBoxStyles.opacity[opacity],
    spacing && styleBoxStyles.spacing[spacing],
    effect && styleBoxStyles.effect[effect],
    layout && styleBoxStyles.layout[layout],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

StyleBox.displayName = 'StyleBox'