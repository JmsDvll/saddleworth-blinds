import React from 'react'
import ProductCarousel from './ProductCarousel'

const VerticalBlindsCarousel = ({ showTitle = true, showDescription = true }) => {
  const verticalImages = [
    { src: 'vertical-grey-400.jpg', alt: 'Grey Vertical Blind', title: 'Classic Grey' },
    { src: 'vertical-blind-grey-400.jpg', alt: 'Modern Grey Vertical Blind', title: 'Modern Grey' },
    { src: 'vertical-matrix-reed-400.jpg', alt: 'Matrix Reed Vertical Blind', title: 'Matrix Reed' },
    { src: 'vertical-savanna-zebra-400.jpg', alt: 'Savanna Zebra Vertical Blind', title: 'Savanna Zebra' }
  ]

  return (
    <ProductCarousel
      title="Vertical Blinds Collection"
      description="Browse through our vertical blinds collection perfect for large windows"
      images={verticalImages}
      showTitle={showTitle}
      showDescription={showDescription}
    />
  )
}

export default VerticalBlindsCarousel