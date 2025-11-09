import React from 'react'
import ProductCarouselStandardized from './ProductCarouselStandardized'

const RollerBlindsCarouselStandardized = () => {
  const slides = [
    {
      image: 'roller-zen-kiwi-1600.jpg',
      alt: 'Zen Kiwi roller blind in modern living room',
      title: 'Zen Kiwi',
      subtitle: 'Fresh & Contemporary',
      description: 'A vibrant green that brings life to any room',
      badge: 'Popular Choice',
      cta: {
        text: 'View Zen Collection',
        link: '/roller-blinds#zen',
      },
    },
    {
      image: 'roller-petal-white-1600.jpg',
      alt: 'Petal White roller blind in bright bedroom',
      title: 'Petal White',
      subtitle: 'Pure Elegance',
      description: 'Classic white for a clean, minimalist look',
      badge: 'Best Seller',
      cta: {
        text: 'Explore White Options',
        link: '/roller-blinds#white',
      },
    },
    {
      image: 'roller-birdsong-colour-1600.jpg',
      alt: 'Birdsong Colour roller blind with nature pattern',
      title: 'Birdsong Colour',
      subtitle: 'Nature Inspired',
      description: 'Beautiful patterns that bring the outdoors in',
      cta: {
        text: 'Discover Patterns',
        link: '/roller-blinds#patterns',
      },
    },
    {
      image: 'roller-dove-1600.jpg',
      alt: 'Dove grey roller blind in contemporary space',
      title: 'Dove Grey',
      subtitle: 'Sophisticated Neutral',
      description: 'Versatile grey that complements any decor',
      cta: {
        text: 'See Neutral Options',
        link: '/roller-blinds#neutrals',
      },
    },
  ]

  return <ProductCarouselStandardized slides={slides} height="hero" />
}

export default RollerBlindsCarouselStandardized