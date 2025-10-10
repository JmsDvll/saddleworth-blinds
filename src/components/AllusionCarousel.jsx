import React from 'react'
import ProductCarousel from './ProductCarousel'

const AllusionCarousel = ({ showTitle = true, showDescription = true }) => {
  const allusionImages = [
    { src: 'allusion-shadow-sand-400.jpg', alt: 'Shadow Sand Allusion Blind', title: 'Shadow Sand' },
    { src: 'allusion-vista-snow-400.jpg', alt: 'Vista Snow Allusion Blind', title: 'Vista Snow' }
  ]

  return (
    <ProductCarousel
      title="Allusion Blinds Collection"
      description="Browse through our contemporary Allusion blinds collection"
      images={allusionImages}
      showTitle={showTitle}
      showDescription={showDescription}
    />
  )
}

export default AllusionCarousel