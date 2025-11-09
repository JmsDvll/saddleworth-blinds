import React, { forwardRef } from 'react'
/**
 * ImageWrapper Suite – composables for image layout and states.
 *
 * ImageContainer: aspectRatio, rounded
 * ImageElement: objectFit, state ('loading'|'loaded'|'error'), hoverEffect
 * ImageSkeleton / ImageSpinner / ImageError / ImageOverlay: state overlays
 */
import { Icon } from './Icon'
import { Text } from './Text'

// Image container styles
const containerStyles = {
  base: `
    relative overflow-hidden
    bg-gradient-to-br from-brand-dark-light to-brand-dark
    group
  `,
  
  aspectRatio: {
    none: '',
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    square: 'aspect-square',
    '3/2': 'aspect-[3/2]',
    '2/3': 'aspect-[2/3]',
    '16/10': 'aspect-[16/10]',
  },
  
  rounded: {
    none: '',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  },
}

export const ImageContainer = forwardRef(({ 
  children,
  aspectRatio = 'none',
  rounded = 'none',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${containerStyles.base}
    ${containerStyles.aspectRatio[aspectRatio]}
    ${containerStyles.rounded[rounded]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

ImageContainer.displayName = 'ImageContainer'

// Image styles
const imageStyles = {
  base: `
    w-full h-full
    transition-all duration-700 ease-out
  `,
  
  objectFit: {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    scaleDown: 'object-scale-down',
  },
  
  states: {
    loading: 'opacity-0 scale-105',
    loaded: 'opacity-100 scale-100',
    error: 'opacity-50',
  },
  
  hoverEffects: {
    none: '',
    zoom: 'group-hover:scale-110',
    brightness: 'group-hover:brightness-110',
    grayscale: 'grayscale group-hover:grayscale-0',
    blur: 'group-hover:blur-sm',
  },
}

export const ImageElement = forwardRef(({ 
  objectFit = 'cover',
  state = 'loaded',
  hoverEffect = 'none',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${imageStyles.base}
    ${imageStyles.objectFit[objectFit]}
    ${imageStyles.states[state]}
    ${imageStyles.hoverEffects[hoverEffect]}
    ${className}
  `.trim()

  return <img ref={ref} className={classes} {...props} />
})

ImageElement.displayName = 'ImageElement'

// Loading skeleton
const skeletonStyles = `
  absolute inset-0
  bg-gradient-to-r from-brand-dark-light via-brand-dark-lighter to-brand-dark-light
  bg-[length:200%_100%]
  animate-shimmer
`

export const ImageSkeleton = forwardRef(({ 
  className = '',
  ...props 
}, ref) => {
  return <div ref={ref} className={`${skeletonStyles} ${className}`} {...props} />
})

ImageSkeleton.displayName = 'ImageSkeleton'

// Loading spinner
const spinnerStyles = `
  absolute inset-0
  flex items-center justify-center
  bg-brand-dark/50
  backdrop-blur-sm
`

const spinnerIconStyles = `
  w-12 h-12 
  border-3 border-brand-grey-dark border-t-brand-gold 
  rounded-full animate-spin
`

export const ImageSpinner = forwardRef(({ 
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${spinnerStyles} ${className}`} {...props}>
      <div className={spinnerIconStyles} />
    </div>
  )
})

ImageSpinner.displayName = 'ImageSpinner'

// Error overlay
const errorStyles = `
  absolute inset-0
  flex flex-col items-center justify-center
  bg-brand-dark/80
  text-brand-grey
  p-4 text-center
`

export const ImageError = forwardRef(({ 
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${errorStyles} ${className}`} {...props}>
      <Icon name="image" size="large" className="mb-2 opacity-50" />
      <Text size="small" color="muted">Failed to load image</Text>
    </div>
  )
})

ImageError.displayName = 'ImageError'

// Premium overlay
const overlayStyles = `
  absolute inset-0 
  bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent 
  opacity-0 group-hover:opacity-100 
  transition-opacity duration-500 
  pointer-events-none
`

export const ImageOverlay = forwardRef(({ 
  className = '',
  ...props 
}, ref) => {
  return <div ref={ref} className={`${overlayStyles} ${className}`} {...props} />
})

ImageOverlay.displayName = 'ImageOverlay'