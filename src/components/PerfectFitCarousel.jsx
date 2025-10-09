import React from 'react'
import ProductCarousel from './ProductCarousel'

const PerfectFitCarousel = ({ showTitle = true, showDescription = true }) => {
  const perfectFitImages = [
    { src: 'perfectfit-blind-white-400.jpg', alt: 'White Perfect Fit Blind', title: 'Classic White' },
    { src: 'perfectfit-monet-flower-400.jpg', alt: 'Monet Flower Perfect Fit Blind', title: 'Monet Flower' }
  ]

  return (
    <ProductCarousel
      title="Perfect Fit Blinds Collection"
      description="Browse through our Perfect Fit blinds - no drilling required!"
      images={perfectFitImages}
      showTitle={showTitle}
      showDescription={showDescription}
    />
  )
}

export default PerfectFitCarousel