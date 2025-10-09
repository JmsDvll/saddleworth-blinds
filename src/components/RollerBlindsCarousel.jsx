import React, { useState, useEffect } from 'react'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CarouselThumbnail, CAROUSEL_HEIGHTS, ASPECT_RATIOS } from './BaseCarousel'

const RollerBlindsCarousel = ({
  showTitle = true,
  showDescription = true,
  autoPlay = true,
  interval = 6000,
  isPaused = false,
  setIsPaused
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    <CarouselContainer
      className={`${colors.background.secondary}`}
      autoPlay={true}
      interval={6000}
      pauseOnHover={true}
    >
      {showTitle && (
        <div className={`${spacing.padding.lg} text-center`}>
          <h3 className={`${typography.h2} ${colors.text.gold} ${spacing.margin.bottomSm}`}>
            Roller Blinds Collection ({rollerImages.length} styles)
          </h3>
          {showDescription && (
            <p className={colors.text.secondary}>
              Browse through our complete roller blinds collection to find your perfect style
            </p>
          )}
        </div>
      )}

      <div className="relative">
        {/* Main Image Display */}
        <div className="aspect-[16/10]">
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
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
          <span className="text-sm">
            {currentIndex + 1} / {rollerImages.length} - {currentImage.title}
          </span>
        </div>
      </div>

      {/* Dot Indicators */}
      {rollerImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <CarouselDots
            total={rollerImages.length}
            current={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>
      )}

      {/* Thumbnail Navigation */}
      {rollerImages.length > 1 && (
        <div className="p-6 bg-gray-900 border-t border-gray-800">
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
            {rollerImages.map((image, index) => (
              <CarouselThumbnail
                key={index}
                src={`/images/optimized/${image.src}`}
                alt={image.alt}
                isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </CarouselContainer>
  )
}

export default RollerBlindsCarousel
