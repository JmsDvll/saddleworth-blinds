import React, { forwardRef, useState } from 'react'
/**
 * Image – Enhanced image with lazy loading, skeletons, and graceful error fallback.
 *
 * Props
 * - src, alt (required)
 * - aspectRatio: 'none' | '16/9' | '4/3' | 'square' | '3/2' | '2/3'
 * - objectFit: 'cover' | 'contain' | 'fill' | 'none' | 'scaleDown'
 * - loading: 'lazy' | 'eager'
 * - showSkeleton: boolean – show skeleton while loading
 * - hoverEffect: 'none' | 'zoom' | 'brightness' | 'grayscale' | 'blur'
 * - fallbackSrc: string – used on error
 *
 * Usage
 *  <Image src="/images/optimized/pic.jpg" alt="Description" aspectRatio="4/3" />
 */
import { useInView } from 'react-intersection-observer'

const imageStyles = {
  container: {
    base: `
      relative overflow-hidden
      bg-gradient-to-br from-gray-800 to-gray-900
      group
    `,
    aspectRatio: {
      none: '',
      '16/9': 'aspect-[16/9]',
      '4/3': 'aspect-[4/3]',
      square: 'aspect-square',
      '3/2': 'aspect-[3/2]',
      '2/3': 'aspect-[2/3]',
    },
  },
  
  image: {
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
    loading: 'opacity-0 scale-105',
    loaded: 'opacity-100 scale-100',
    error: 'opacity-50',
  },
  
  // Premium loading skeleton
  skeleton: `
    absolute inset-0
    bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
    bg-[length:200%_100%]
    animate-shimmer
  `,
  
  // Loading spinner overlay
  loadingOverlay: `
    absolute inset-0
    flex items-center justify-center
    bg-gray-900/50
    backdrop-blur-sm
  `,
  
  // Error state
  errorOverlay: `
    absolute inset-0
    flex flex-col items-center justify-center
    bg-gray-900/80
    text-gray-400
    p-4 text-center
  `,
  
  // Hover effects
  hoverEffects: {
    none: '',
    zoom: 'group-hover:scale-110',
    brightness: 'group-hover:brightness-110',
    grayscale: 'grayscale group-hover:grayscale-0',
    blur: 'group-hover:blur-sm',
  },
}

export const Image = forwardRef(({
  src,
  alt,
  aspectRatio = 'none',
  objectFit = 'cover',
  loading = 'lazy',
  className = '',
  containerClassName = '',
  onLoad,
  onError,
  showSkeleton = true,
  hoverEffect = 'none',
  fallbackSrc = '/images/placeholder.jpg',
  ...props
}, ref) => {
  const [imageState, setImageState] = useState('loading')
  const [currentSrc, setCurrentSrc] = useState(src)
  
  // Use intersection observer for lazy loading
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px',
  })
  
  // Combine refs
  const setRefs = (el) => {
    inViewRef(el)
    if (ref) {
      if (typeof ref === 'function') ref(el)
      else ref.current = el
    }
  }
  
  const handleLoad = (e) => {
    setImageState('loaded')
    if (onLoad) onLoad(e)
  }
  
  const handleError = (e) => {
    setImageState('error')
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setImageState('loading')
    }
    if (onError) onError(e)
  }
  
  const containerClasses = `
    ${imageStyles.container.base}
    ${imageStyles.container.aspectRatio[aspectRatio]}
    ${containerClassName}
  `.trim()
  
  const imageClasses = `
    ${imageStyles.image.base}
    ${imageStyles.image.objectFit[objectFit]}
    ${imageState === 'loading' ? imageStyles.image.loading : ''}
    ${imageState === 'loaded' ? imageStyles.image.loaded : ''}
    ${imageState === 'error' ? imageStyles.image.error : ''}
    ${imageStyles.hoverEffects[hoverEffect]}
    ${className}
  `.trim()
  
  // Only load image if in view or eager loading
  const shouldLoad = loading === 'eager' || inView

  return (
    <div className={containerClasses}>
      {/* Loading skeleton */}
      {showSkeleton && imageState === 'loading' && (
        <div className={imageStyles.skeleton}>
          <div className={imageStyles.loadingOverlay}>
            <div className={'relative'}>
              <div className={'w-12 h-12 border-3 border-gray-600 border-t-brand-gold rounded-full animate-spin'}></div>
              <div className={'absolute inset-0 w-12 h-12 border-3 border-transparent border-t-brand-gold/30 rounded-full animate-spin animate-reverse'}></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      {shouldLoad && (
        <img
          ref={setRefs}
          src={currentSrc}
          alt={alt}
          className={imageClasses}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding={loading === 'eager' ? 'sync' : 'async'}
          fetchpriority={loading === 'eager' ? 'high' : 'auto'}
          {...props}
        />
      )}
      
      {/* Error state */}
      {imageState === 'error' && currentSrc === fallbackSrc && (
        <div className={imageStyles.errorOverlay}>
          <svg className={'w-12 h-12 mb-2'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className={'text-sm'}>Failed to load image</p>
        </div>
      )}
      
      {/* Premium overlay gradient */}
      <div className={'absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'}></div>
    </div>
  )
})

Image.displayName = 'Image'

// Specialized image components
Image.Hero = forwardRef((props, ref) => (
  <Image
    ref={ref}
    aspectRatio="16/9"
    loading="eager"
    hoverEffect="zoom"
    className={'rounded-xl shadow-2xl'}
    {...props}
  />
))
Image.Hero.displayName = 'Image.Hero'

Image.Thumbnail = forwardRef((props, ref) => (
  <Image
    ref={ref}
    aspectRatio="square"
    className={'rounded-lg'}
    hoverEffect="brightness"
    {...props}
  />
))
Image.Thumbnail.displayName = 'Image.Thumbnail'

Image.Gallery = forwardRef((props, ref) => (
  <Image
    ref={ref}
    aspectRatio="4/3"
    className={'rounded-lg'}
    hoverEffect="zoom"
    {...props}
  />
))
Image.Gallery.displayName = 'Image.Gallery'