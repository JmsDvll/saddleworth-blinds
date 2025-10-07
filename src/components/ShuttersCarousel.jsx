import React, { useState } from 'react'

const ShuttersCarousel = ({ showTitle = true, showDescription = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const shuttersImages = [
    { src: 'shutters-cotton-89mm-400.jpg', alt: 'Cotton 89mm Plantation Shutters', title: 'Cotton 89mm' },
    { src: 'shutters-cotton-63mm-400.jpg', alt: 'Cotton 63mm Plantation Shutters', title: 'Cotton 63mm' },
    { src: 'shutters-white-classic-400.jpg', alt: 'Classic White Plantation Shutters', title: 'Classic White' },
    { src: 'shutters-white-400.jpg', alt: 'Premium White Plantation Shutters', title: 'Premium White' }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuttersImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuttersImages.length) % shuttersImages.length)
  }

  const currentImage = shuttersImages[currentIndex]

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && (
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-brand-gold mb-2">
            Plantation Shutters Collection ({shuttersImages.length} styles)
          </h3>
          {showDescription && (
            <p className="text-gray-300">
              Browse through our luxury plantation shutters collection
            </p>
          )}
        </div>
      )}

      <div className="relative">
        <div className="aspect-[16/10] bg-gray-900">
          <img
            src={`/images/optimized/${currentImage.src}`}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {shuttersImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
          <span className="text-sm">
            {currentIndex + 1} / {shuttersImages.length} - {currentImage.title}
          </span>
        </div>
      </div>

      {shuttersImages.length > 1 && (
        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {shuttersImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-colors ${
                  index === currentIndex
                    ? 'border-brand-gold'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                <img
                  src={`/images/optimized/${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded"
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

export default ShuttersCarousel
