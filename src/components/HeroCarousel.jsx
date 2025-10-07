import React, { useState, useEffect } from 'react'

const HeroCarousel = ({ images, autoRotate = false, interval = 6000 }) => {
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

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentImage = images[currentIndex]

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={`/images/optimized/${currentImage.src}`}
          alt={currentImage.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

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
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-brand-gold hover:bg-yellow-500 text-gray-900 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-brand-gold hover:bg-yellow-500 text-gray-900 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/30 rounded-full px-4 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-brand-gold'
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default HeroCarousel
