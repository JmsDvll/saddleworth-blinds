import React, { useState, useEffect } from 'react'
import { Heading, Text, Stack, Badge, Flex, Card, Icon } from './ui'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CarouselThumbnail, ASPECT_RATIOS } from './BaseCarousel'

const ProductCarousel = ({
  title,
  description,
  images = [],
  showTitle = true,
  showDescription = true,
  autoPlay = false,
  interval = 6000,
  showThumbnails = true,
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const currentImage = images[currentIndex]

  // Enhanced auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, isPaused, images.length, currentIndex])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <Card variant="premium" padding="none" hover="none" className="overflow-visible">
      {showTitle && title && (
        <Card.Header className="px-6 pt-6">
          <Stack spacing="small" align="center">
            <Heading as="h3" size="2xl" color="gradient" effect="glow">
              {title}
            </Heading>
            {showDescription && description && (
              <Text color="light" align="center">
                {description}
              </Text>
            )}
          </Stack>
        </Card.Header>
      )}

      <div className="relative">
        <CarouselContainer
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="group"
        >
          {/* Main Image Display with enhanced transitions */}
          <div className={`${ASPECT_RATIOS.product} relative overflow-hidden`}>
            {/* Background blur for smooth transitions */}
            <div className="absolute inset-0 scale-110 blur-xl opacity-30">
              <CarouselImage
                src={`/images/optimized/${currentImage.src}`}
                alt=""
              />
            </div>
            
            {/* Main image with fade effect */}
            <div className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <CarouselImage
                src={`/images/optimized/${currentImage.src}`}
                alt={currentImage.alt}
              />
            </div>

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
          </div>

          {/* Enhanced Navigation Arrows */}
          {images.length > 1 && (
            <>
              <CarouselButton
                onClick={prevSlide}
                direction="left"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
              />
              <CarouselButton
                onClick={nextSlide}
                direction="right"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
              />
            </>
          )}

          {/* Enhanced Image Counter and Title */}
          <div className="absolute bottom-4 left-4 z-30">
            <Badge variant="primary" className="backdrop-blur-md bg-brand-dark/80 border-brand-gold/30">
              <Flex align="center" gap="small">
                <Icon name="sparkle" size="tiny" className="animate-pulse" />
                <span>{currentIndex + 1} / {images.length}</span>
                <span className="text-brand-gold-light">•</span>
                <span className="font-medium">{currentImage.title}</span>
              </Flex>
            </Badge>
          </div>

          {/* Enhanced Dot Indicators */}
          {showDots && images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
              <CarouselDots
                total={images.length}
                current={currentIndex}
                onSelect={goToSlide}
              />
            </div>
          )}
        </CarouselContainer>

        {/* Progress bar */}
        {autoPlay && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-dark-lighter">
            <div 
              className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
                transition: isPaused ? 'none' : `width ${interval}ms linear`
              }}
            />
          </div>
        )}
      </div>

      {/* Enhanced Thumbnail Navigation */}
      {showThumbnails && images.length > 1 && (
        <Card.Footer className="p-6 bg-gradient-to-b from-brand-dark to-brand-dark-light">
          <div className="relative">
            {/* Fade edges for overflow indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>
            
            <Flex gap="medium" className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-brand-gold/30 scrollbar-track-brand-dark-lighter" justify="center">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`
                    w-20 h-20 flex-shrink-0 transition-all duration-300
                    ${index === currentIndex ? 'scale-110' : 'scale-100 hover:scale-105'}
                  `}
                >
                  <CarouselThumbnail
                    src={`/images/optimized/${image.src}`}
                    alt={image.alt}
                    isActive={index === currentIndex}
                    onClick={() => goToSlide(index)}
                  />
                </div>
              ))}
            </Flex>
          </div>
        </Card.Footer>
      )}
    </Card>
  )
}

export default ProductCarousel