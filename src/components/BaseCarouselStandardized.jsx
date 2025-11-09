import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { 
  CarouselContainer, 
  CarouselContent, 
  CarouselDots,
  CarouselImageWrapper,
  CarouselNavButton,
  CarouselOverlay,
  CarouselProgress,
  CarouselSlide,
  Icon,
  Image, 
} from './ui'

const BaseCarouselStandardized = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  showProgress = false,
  height = 'hero',
  variant = 'default',
  onSlideChange,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide)
    }
  }, [currentSlide, onSlideChange])

  useEffect(() => {
    if (autoPlay && !isPaused && slides.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [autoPlay, isPaused, autoPlayInterval, slides.length, nextSlide])

  if (!slides || slides.length === 0) {
    return null
  }

  const currentSlideData = slides[currentSlide]

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      variant={variant}
      className={className}
    >
      <AnimatePresence mode="wait">
        <CarouselSlide key={currentSlide} height={height}>
          {/* Slide Image */}
          {currentSlideData.image && (
            <CarouselImageWrapper scale={currentSlideData.scale || 'cover'}>
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.alt || currentSlideData.title || ''}
                loading="eager"
                objectFit="cover"
              />
            </CarouselImageWrapper>
          )}

          {/* Overlay */}
          {currentSlideData.overlay !== false && (
            <CarouselOverlay variant={currentSlideData.overlayType || 'gradient'} />
          )}

          {/* Content */}
          {currentSlideData.content && (
            <CarouselContent position="center">
              {currentSlideData.content}
            </CarouselContent>
          )}

          {/* Navigation Arrows */}
          {showArrows && slides.length > 1 && (
            <>
              <CarouselNavButton direction="left" onClick={prevSlide}>
                <Icon name="chevronLeft" size="large" />
              </CarouselNavButton>
              <CarouselNavButton direction="right" onClick={nextSlide}>
                <Icon name="chevronRight" size="large" />
              </CarouselNavButton>
            </>
          )}
        </CarouselSlide>
      </AnimatePresence>

      {/* Dots Navigation */}
      {showDots && slides.length > 1 && (
        <CarouselDots
          total={slides.length}
          current={currentSlide}
          onSelect={goToSlide}
        />
      )}

      {/* Progress Bar */}
      {showProgress && slides.length > 1 && (
        <CarouselProgress
          value={currentSlide + 1}
          max={slides.length}
          isPaused={isPaused}
        />
      )}
    </CarouselContainer>
  )
}

export default BaseCarouselStandardized