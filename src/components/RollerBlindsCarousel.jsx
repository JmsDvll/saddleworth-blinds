import React, { useState, useEffect } from 'react'
import { Heading, Text, Stack, Badge, Flex } from './ui'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CarouselThumbnail, ASPECT_RATIOS } from './BaseCarousel'

const RollerBlindsCarousel = ({
  showTitle = true,
  showDescription = true,
  autoPlay = true,
  interval = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const rollerImages = [
    { src: 'roller-birdsong-colour-400.jpg', alt: 'Birdsong Colour Roller Blind', title: 'Birdsong Colour' },
    { src: 'roller-blind-modern-400.jpg', alt: 'Modern Roller Blind', title: 'Modern' },
    { src: 'roller-carnival-bubblegum-400.jpg', alt: 'Carnival Bubblegum Roller Blind', title: 'Carnival Bubblegum' },
    { src: 'roller-kaleidoscope-colour-400.jpg', alt: 'Kaleidoscope Colour Roller Blind', title: 'Kaleidoscope Colour' },
    { src: 'roller-paradise-palm-400.jpg', alt: 'Paradise Palm Roller Blind', title: 'Paradise Palm' },
    { src: 'roller-petal-white-400.jpg', alt: 'Petal White Roller Blind', title: 'Petal White' },
    { src: 'roller-pop-white-400.jpg', alt: 'Pop White Roller Blind', title: 'Pop White' },
    { src: 'roller-zen-kiwi-400.jpg', alt: 'Zen Kiwi Roller Blind', title: 'Zen Kiwi' }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rollerImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rollerImages.length) % rollerImages.length)
  }

  const currentImage = rollerImages[currentIndex]

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && rollerImages.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rollerImages.length)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, isPaused, rollerImages.length])

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && (
        <Stack spacing="small" className="p-6 text-center">
          <Heading as="h3" size="2xl" color="gold">
            Roller Blinds Collection ({rollerImages.length} styles)
          </Heading>
          {showDescription && (
            <Text color="light">
              Browse through our complete roller blinds collection to find your perfect style
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
          {rollerImages.length > 1 && (
            <>
              <CarouselButton
                onClick={prevSlide}
                direction="left"
                className="bg-brand-gold"
              />
              <CarouselButton
                onClick={nextSlide}
                direction="right"
                className="bg-brand-gold"
              />
            </>
          )}

          {/* Image Counter and Title */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="ghost" size="small">
              {currentIndex + 1} / {rollerImages.length} - {currentImage.title}
            </Badge>
          </div>

          {/* Dot Indicators */}
          {rollerImages.length > 1 && (
            <CarouselDots
              total={rollerImages.length}
              current={currentIndex}
              onSelect={setCurrentIndex}
            />
          )}
        </div>
      </CarouselContainer>

      {/* Thumbnail Navigation */}
      {rollerImages.length > 1 && (
        <div className="p-6 bg-gray-900 border-t border-gray-800">
          <Flex gap="medium" className="overflow-x-auto pb-2" justify="center">
            {rollerImages.map((image, index) => (
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

export default RollerBlindsCarousel