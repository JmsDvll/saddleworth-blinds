import React, { useState } from 'react'

const MotorisedCarousel = ({ showTitle = true, showDescription = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const motorisedImages = [
    { src: 'motorised-celeste-400.jpg', alt: 'Motorised Celeste Blind', title: 'Celeste Motorised' }
  ]

  const currentImage = motorisedImages[currentIndex]

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {showTitle && (
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-brand-gold mb-2">
            Motorised Blinds Collection ({motorisedImages.length} styles)
          </h3>
          {showDescription && (
            <p className="text-gray-300">
              Browse through our smart motorised blinds collection
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

        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
          <span className="text-sm">
            {currentIndex + 1} / {motorisedImages.length} - {currentImage.title}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MotorisedCarousel
