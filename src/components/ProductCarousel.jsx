import React, { useState, useEffect } from 'react'
import { Heading, Text, Stack, Badge, Flex } from './ui'
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, isPaused, images.length])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && title && (
        <Stack spacing="small" className="p-6 text-center">
          <Heading as="h3" size="2xl" color="gold">
            {title} ({images.length} styles)
          </Heading>
          {showDescription && description && (
            <Text color="light">
              {description}
            </Text>
          )}
        </Stack>
      )}

      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative">
          {/* Main Image Display */}
          <div className={ASPECT_RATIOS.product}>
            <CarouselImage
              src={`/images/optimized/${currentImage.src}`}
              alt={currentImage.alt}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <CarouselButton
                onClick={prevSlide}
                direction="left"
              />
              <CarouselButton
                onClick={nextSlide}
                direction="right"
              />
            </>
          )}

          {/* Image Counter and Title */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="ghost" size="small">
              {currentIndex + 1} / {images.length} - {currentImage.title}
            </Badge>
          </div>

          {/* Dot Indicators */}
          {showDots && images.length > 1 && (
            <CarouselDots
              total={images.length}
              current={currentIndex}
              onSelect={setCurrentIndex}
            />
          )}
        </div>
      </CarouselContainer>

      {/* Thumbnail Navigation */}
      {showThumbnails && images.length > 1 && (
        <div className="p-4 bg-gray-900 border-t border-gray-800">
          <Flex gap="small" className="overflow-x-auto pb-2" justify="center">
            {images.map((image, index) => (
              <div key={index} className="w-20 h-20 flex-shrink-0">
                <CarouselThumbnail
                  src={`/images/optimized/${image.src}`}
                  alt={image.alt}
                  isActive={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            ))}
          </Flex>
        </div>
      )}
    </div>
  )
}

export default ProductCarousel