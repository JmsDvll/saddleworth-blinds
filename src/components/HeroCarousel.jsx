import React, { useState, useEffect } from 'react'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CAROUSEL_HEIGHTS } from './BaseCarousel'

const HeroCarousel = ({
  images,
  autoRotate = false,
  interval = 6000,
  showOverlay = true,
  showCounter = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate functionality
  useEffect(() => {
    if (autoRotate && images.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoRotate, interval, images.length, isPaused])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  if (!images || images.length === 0) {
    return null
  }

  return (
    <CarouselContainer
      className={CAROUSEL_HEIGHTS.hero}
      autoPlay={autoRotate}
      interval={interval}
      pauseOnHover={true}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <CarouselImage
          src={`/images/optimized/${currentImage.src}`}
          alt={currentImage.alt}
          eager={true}
        />

        {/* Gradient Overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        )}

        {/* Content Overlay */}
        {currentImage.title && (
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-sm md:text-base text-gray-200">
                {currentImage.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
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

      {/* Dot Indicators */}
      {images.length > 1 && (
        <CarouselDots
          total={images.length}
          current={currentIndex}
          onSelect={setCurrentIndex}
        />
      )}

      {/* Slide Counter */}
      {showCounter && images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </CarouselContainer>
  )
}

export default HeroCarousel
