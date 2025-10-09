import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

// Centralized image styles
const imageStyles = {
  // Container styles
  container: {
    base: 'relative overflow-hidden',
    aspectRatio: {
      none: '',
      video: 'aspect-video',
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      wide: 'aspect-[16/9]',
      ultrawide: 'aspect-[21/9]',
    },
  },
  
  // Image styles
  image: {
    base: 'w-full h-full transition-opacity duration-300',
    objectFit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      scaleDown: 'object-scale-down',
    },
    loading: 'opacity-0',
    loaded: 'opacity-100',
    error: 'opacity-0',
  },
  
  // Loading skeleton
  skeleton: {
    base: 'absolute inset-0 bg-gray-800 animate-pulse',
  },
  
  // Error state
  error: {
    base: 'absolute inset-0 flex items-center justify-center bg-gray-800',
    text: 'text-gray-500 text-sm',
  },
}

const Image = ({
  src,
  alt,
  aspectRatio = 'none',
  objectFit = 'cover',
  loading = 'lazy',
  className = '',
  containerClassName = '',
  onLoad,
  onError,
  fallback = '/images/placeholder.jpg',
  showSkeleton = true,
  ...props
}) => {
  const [imageStatus, setImageStatus] = useState('loading')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  const handleLoad = (e) => {
    setImageStatus('loaded')
    onLoad?.(e)
  }
  
  const handleError = (e) => {
    setImageStatus('error')
    onError?.(e)
    
    // Try fallback image
    if (e.target.src !== fallback && fallback) {
      e.target.src = fallback
      setImageStatus('loading')
    }
  }
  
  const containerClasses = [
    imageStyles.container.base,
    imageStyles.container.aspectRatio[aspectRatio],
    containerClassName,
  ].filter(Boolean).join(' ')
  
  const imageClasses = [
    imageStyles.image.base,
    imageStyles.image.objectFit[objectFit],
    imageStyles.image[imageStatus],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div ref={ref} className={containerClasses}>
      {/* Loading skeleton */}
      {showSkeleton && imageStatus === 'loading' && (
        <div className={imageStyles.skeleton.base} />
      )}
      
      {/* Error state */}
      {imageStatus === 'error' && !fallback && (
        <div className={imageStyles.error.base}>
          <span className={imageStyles.error.text}>Failed to load image</span>
        </div>
      )}
      
      {/* Image */}
      {(loading !== 'lazy' || inView) && (
        <img
          src={src}
          alt={alt}
          className={imageClasses}
          loading={loading === 'lazy' ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  )
}

// Hero Image variant
Image.Hero = ({ gradient = true, ...props }) => (
  <div className="relative">
    <Image aspectRatio="wide" loading="eager" {...props} />
    {gradient && (
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    )}
  </div>
)

// Thumbnail variant
Image.Thumbnail = ({ size = 'medium', ...props }) => {
  const sizes = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  }
  
  return (
    <Image
      aspectRatio="square"
      containerClassName={sizes[size]}
      {...props}
    />
  )
}

// Gallery Image variant
Image.Gallery = ({ onClick, ...props }) => (
  <div 
    className="cursor-pointer group"
    onClick={onClick}
  >
    <Image {...props} />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
  </div>
)

export default Image