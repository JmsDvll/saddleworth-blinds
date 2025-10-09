import React from 'react'
import ProductCarousel from './ProductCarousel'

const ShuttersCarousel = ({ showTitle = true, showDescription = true }) => {
  const shuttersImages = [
    { src: 'shutters-cotton-89mm-400.jpg', alt: 'Cotton 89mm Plantation Shutters', title: 'Cotton 89mm' },
    { src: 'shutters-cotton-63mm-400.jpg', alt: 'Cotton 63mm Plantation Shutters', title: 'Cotton 63mm' },
    { src: 'shutters-white-classic-400.jpg', alt: 'Classic White Plantation Shutters', title: 'Classic White' },
    { src: 'shutters-white-400.jpg', alt: 'Premium White Plantation Shutters', title: 'Premium White' }
  ]

  return (
    <ProductCarousel
      title="Plantation Shutters Collection"
      description="Browse through our luxury plantation shutters collection"
      images={shuttersImages}
      showTitle={showTitle}
      showDescription={showDescription}
    />
  )
}

export default ShuttersCarousel