import React from 'react'

// Base carousel component for consistent styling
export const CarouselContainer = ({ children, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-lg shadow-2xl ${className}`}>
      {children}
    </div>
  )
}

export const CarouselImage = ({ src, alt, className = '', eager = false }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-opacity duration-500 ${className}`}
      loading={eager ? 'eager' : 'lazy'}
    />
  )
}

export const CarouselButton = ({ onClick, direction, className = '' }) => {
  const isLeft = direction === 'left'
  
  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold ${className}`}
      aria-label={`${isLeft ? 'Previous' : 'Next'} slide`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} 
        />
      </svg>
    </button>
  )
}

export const CarouselDots = ({ total, current, onSelect }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === current 
              ? 'bg-brand-gold w-8' 
              : 'bg-white/50 hover:bg-white/70'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  )
}

export const CarouselThumbnail = ({ src, alt, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
        isActive 
          ? 'ring-2 ring-brand-gold scale-105' 
          : 'hover:scale-105 opacity-70 hover:opacity-100'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </button>
  )
}

// Standard carousel heights
export const CAROUSEL_HEIGHTS = {
  hero: 'h-[400px] md:h-[500px] lg:h-[600px]',
  product: 'h-[300px] md:h-[400px] lg:h-[500px]',
  thumbnail: 'h-[80px] md:h-[100px]'
}

// Standard aspect ratios
export const ASPECT_RATIOS = {
  wide: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  square: 'aspect-square',
  product: 'aspect-[16/10]'
}