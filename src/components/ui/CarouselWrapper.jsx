import React, { forwardRef } from 'react'
/**
 * Carousel Suite – Container, Slide, NavButton, Dots, Overlay, Content,
 * ImageWrapper, Progress, Counter. Compose for hero and product carousels.
 *
 * Common props
 * - CarouselContainer: effect ('none' | 'glow')
 * - CarouselSlide: height ('hero' | 'product' | 'thumbnail' | 'feature'), transition
 * - CarouselNavButton: direction ('left' | 'right')
 * - CarouselDots: total, current, onSelect
 * - CarouselOverlay: variant ('hero' | 'heroBottom' | 'product' | 'dark' | 'light')
 * - CarouselContent: align ('left' | 'center' | 'right')
 * - CarouselImageWrapper: scale ('none' | 'zoom' | 'cover')
 */

// Carousel container styles
const carouselContainerStyles = {
  base: `
    relative w-full overflow-hidden rounded-lg
    shadow-luxury-lg
    bg-hero-gradient
    border border-brand-gold/20
    group
  `,
  
  effects: {
    none: '',
    glow: `
      before:absolute before:inset-0 
      before:bg-gradient-to-tr before:from-brand-gold/5 before:via-transparent before:to-brand-gold/5 
      before:opacity-0 group-hover:before:opacity-100 
      before:transition-opacity before:duration-700
    `,
  },
}

export const CarouselContainer = forwardRef(({ 
  children,
  effect = 'glow',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${carouselContainerStyles.base}
    ${carouselContainerStyles.effects[effect]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CarouselContainer.displayName = 'CarouselContainer'

// Carousel slide wrapper
const slideStyles = {
  base: 'relative w-full h-full',
  
  heights: {
    hero: 'h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]',
    product: 'h-[300px] md:h-[400px] lg:h-[500px]',
    thumbnail: 'h-[80px] md:h-[100px]',
    feature: 'h-[350px] md:h-[450px] lg:h-[550px]',
  },
  
  transition: {
    none: '',
    fade: 'transition-opacity duration-700',
    slide: 'transition-transform duration-700',
  },
}

export const CarouselSlide = forwardRef(({ 
  children,
  height = 'hero',
  transition = 'fade',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${slideStyles.base}
    ${slideStyles.heights[height]}
    ${slideStyles.transition[transition]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CarouselSlide.displayName = 'CarouselSlide'

// Carousel navigation button
const navButtonStyles = `
  absolute top-1/2 -translate-y-1/2
  bg-brand-dark/80 backdrop-blur-md
  text-brand-gold hover:text-brand-gold-light
  p-3 md:p-4 rounded-full
  border border-brand-gold/30 hover:border-brand-gold/60
  shadow-luxury hover:shadow-gold-lg
  transition-all duration-300
  hover:scale-110 active:scale-95
  focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark
  group/btn
  z-20
`

const navButtonPositions = {
  left: 'left-4 md:left-6',
  right: 'right-4 md:right-6',
}

export const CarouselNavButton = forwardRef(({ 
  direction = 'left',
  children,
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${navButtonStyles}
    ${navButtonPositions[direction]}
    ${className}
  `.trim()

  return (
    <button ref={ref} className={classes} aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`} {...props}>
      <span className="absolute inset-0 rounded-full bg-brand-gold/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110">
        {children}
      </span>
    </button>
  )
})

CarouselNavButton.displayName = 'CarouselNavButton'

// Carousel dots
const dotsContainerStyles = `
  flex items-center justify-center gap-2
  p-3 bg-brand-dark/60 backdrop-blur-sm rounded-full
`

const dotStyles = {
  base: `
    relative h-2 rounded-full
    transition-all duration-500 ease-out
    cursor-pointer
  `,
  
  active: `
    w-8 bg-gold-gradient shadow-gold
    before:absolute before:inset-0 before:rounded-full 
    before:bg-brand-gold before:animate-ping before:opacity-75
  `,
  
  inactive: 'w-2 bg-brand-grey hover:bg-brand-grey-light',
}

export const CarouselDots = forwardRef(({ 
  total,
  current,
  onSelect,
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${dotsContainerStyles} ${className}`} {...props}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`
            ${dotStyles.base}
            ${i === current ? dotStyles.active : dotStyles.inactive}
          `}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  )
})

CarouselDots.displayName = 'CarouselDots'

// Carousel overlay gradients
const overlayStyles = {
  hero: 'bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent',
  heroBottom: 'bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent',
  product: 'bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent',
  dark: 'bg-brand-dark/40',
  light: 'bg-brand-dark/20',
}

export const CarouselOverlay = forwardRef(({ 
  variant = 'hero',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    absolute inset-0 pointer-events-none
    ${overlayStyles[variant]}
    ${className}
  `.trim()

  return <div ref={ref} className={classes} {...props} />
})

CarouselOverlay.displayName = 'CarouselOverlay'

// Carousel content wrapper for hero sections
const contentStyles = {
  base: 'absolute inset-0 flex items-center',
  
  alignment: {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  },
}

export const CarouselContent = forwardRef(({ 
  children,
  align = 'left',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${contentStyles.base}
    ${contentStyles.alignment[align]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CarouselContent.displayName = 'CarouselContent'

// Carousel image wrapper
const imageWrapperStyles = {
  base: 'relative w-full h-full overflow-hidden',
  
  scale: {
    none: '',
    zoom: 'scale-110',
    cover: 'scale-105',
  },
}

export const CarouselImageWrapper = forwardRef(({ 
  children,
  scale = 'none',
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${imageWrapperStyles.base}
    ${imageWrapperStyles.scale[scale]}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CarouselImageWrapper.displayName = 'CarouselImageWrapper'

// Carousel progress bar
const progressStyles = `
  absolute bottom-0 left-0 right-0
  h-1 bg-brand-dark/20
`

const progressBarStyles = `
  h-full bg-gold-gradient
  transition-all duration-300
`

export const CarouselProgress = forwardRef(({ 
  value,
  max,
  isPaused = false,
  className = '',
  ...props 
}, ref) => {
  const percentage = (value / max) * 100
  
  return (
    <div ref={ref} className={`${progressStyles} ${className}`} {...props}>
      <div 
        className={progressBarStyles}
        style={{
          width: `${percentage}%`,
          transition: isPaused ? 'none' : 'width 5s linear',
        }}
      />
    </div>
  )
})

CarouselProgress.displayName = 'CarouselProgress'

// Carousel counter badge
const counterStyles = `
  bg-brand-dark/80 backdrop-blur-sm
  border border-brand-gold/30
  rounded-full px-4 py-2
  shadow-luxury
`

export const CarouselCounter = forwardRef(({ 
  current,
  total,
  className = '',
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={`${counterStyles} ${className}`} {...props}>
      <span className="text-brand-gold font-display text-xl">
        {String(current).padStart(2, '0')}
      </span>
      <span className="text-brand-grey mx-2">/</span>
      <span className="text-brand-grey-light">
        {String(total).padStart(2, '0')}
      </span>
    </div>
  )
})

CarouselCounter.displayName = 'CarouselCounter'