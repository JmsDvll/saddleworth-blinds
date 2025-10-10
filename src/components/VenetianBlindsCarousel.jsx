import React, { useState } from 'react'
import { Heading, Text, Stack, Badge, Flex } from './ui'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CarouselThumbnail, ASPECT_RATIOS } from './BaseCarousel'

const VenetianBlindsCarousel = ({ showTitle = true, showDescription = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const venetianImages = [
    { src: 'venetian-starwood-400.jpg', alt: 'Starwood Venetian Blind', title: 'Starwood Natural' },
    { src: 'venetian-wood-natural-400.jpg', alt: 'Natural Wood Venetian Blind', title: 'Natural Wood' }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % venetianImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + venetianImages.length) % venetianImages.length)
  }

  const currentImage = venetianImages[currentIndex]

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && (
        <Stack spacing="small" className="p-6 text-center">
          <Heading as="h3" size="2xl" color="gold">
            Venetian Blinds Collection ({venetianImages.length} styles)
          </Heading>
          {showDescription && (
            <Text color="light">
              Browse through our classic venetian blinds collection
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
          {venetianImages.length > 1 && (
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
              {currentIndex + 1} / {venetianImages.length} - {currentImage.title}
            </Badge>
          </div>
        </div>
      </CarouselContainer>

      {/* Thumbnail Navigation */}
      {venetianImages.length > 1 && (
        <div className="p-4">
          <Flex gap="small" className="overflow-x-auto pb-2">
            {venetianImages.map((image, index) => (
              <div key={index} className="w-16 h-16 flex-shrink-0">
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

export default VenetianBlindsCarousel