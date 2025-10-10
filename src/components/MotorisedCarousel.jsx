import React from 'react'
import ProductCarousel from './ProductCarousel'

const MotorisedCarousel = ({ showTitle = true, showDescription = true }) => {
  const motorisedImages = [
    { src: 'motorised-celeste-400.jpg', alt: 'Motorised Celeste Blind', title: 'Celeste Motorised' }
  ]

  return (
    <ProductCarousel
      title="Motorised Blinds Collection"
      description="Browse through our smart motorised blinds collection"
      images={motorisedImages}
      showTitle={showTitle}
      showDescription={showDescription}
      showThumbnails={false} // Only one image
      showDots={false} // Only one image
    />
  )
}

export default MotorisedCarousel