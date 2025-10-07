import React, { useState } from 'react'

const RollerBlindsCarousel = ({ showTitle = true, showDescription = true }) => {
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

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && (
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-brand-gold mb-2">
            Roller Blinds Collection ({rollerImages.length} styles)
          </h3>
          {showDescription && (
            <p className="text-gray-300">
              Browse through our complete roller blinds collection to find your perfect style
            </p>
          )}
        </div>
      )}

      <div className="relative">
        {/* Main Image Display */}
        <div className="aspect-[16/10] bg-gray-900">
          <img
            src={`/images/optimized/${currentImage.src}`}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Navigation Arrows */}
        {rollerImages.length > 1 && (
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

        {/* Image Counter and Title */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
          <span className="text-sm">
            {currentIndex + 1} / {rollerImages.length} - {currentImage.title}
          </span>
        </div>
      </div>

      {/* Dot Indicators */}
      {rollerImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/30 rounded-full px-4 py-2">
          {rollerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
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

      {/* Thumbnail Navigation */}
      {rollerImages.length > 1 && (
        <div className="p-6 bg-gray-900 border-t border-gray-800">
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
            {rollerImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all duration-200 overflow-hidden ${
                  index === currentIndex
                    ? 'border-brand-gold shadow-lg shadow-brand-gold/20'
                    : 'border-gray-600 hover:border-brand-gold/50 hover:shadow-md'
                }`}
              >
                <img
                  src={`/images/optimized/${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RollerBlindsCarousel
