import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const ShuttersLuxury = () => {
  const productData = {
    name: 'Plantation Shutters',
    tagline: 'Timeless Elegance, Unmatched Quality',
    description: 'Transform your home with the ultimate in window luxury. Our plantation shutters combine classic beauty with modern functionality, adding value and sophistication to any room. Crafted from premium materials and custom-made to your exact specifications.',
    heroImage: 'shutters-hero-1600.jpg',
    
    features: [
      {
        icon: 'crown',
        title: 'Premium Materials',
        description: 'Choose from sustainable hardwood or durable polymer options'
      },
      {
        icon: 'ruler',
        title: 'Custom Crafted',
        description: 'Made to measure for a perfect fit every time'
      },
      {
        icon: 'sun',
        title: 'Superior Light Control',
        description: 'Adjustable louvres for precise light and privacy management'
      },
      {
        icon: 'shield',
        title: '10 Year Warranty',
        description: 'Industry-leading guarantee for complete peace of mind'
      },
      {
        icon: 'home',
        title: 'Adds Property Value',
        description: 'A permanent fixture that enhances your home\'s appeal'
      },
      {
        icon: 'sparkle',
        title: 'Low Maintenance',
        description: 'Easy to clean and built to last a lifetime'
      }
    ],
    
    benefits: [
      {
        title: 'Investment in Your Home',
        description: 'Shutters are a permanent fixture that adds real value to your property'
      },
      {
        title: 'Year-Round Comfort',
        description: 'Excellent insulation properties help regulate room temperature'
      },
      {
        title: 'Timeless Style',
        description: 'Classic design that never goes out of fashion'
      },
      {
        title: 'Complete Privacy',
        description: 'Tier-on-tier options for flexible privacy control'
      }
    ],
    
    specifications: {
      'Shutter Styles': [
        { label: 'Full Height', value: 'Floor to ceiling coverage' },
        { label: 'Café Style', value: 'Bottom half coverage only' },
        { label: 'Tier on Tier', value: 'Independent top and bottom panels' },
        { label: 'Tracked', value: 'Bi-fold system for large openings' }
      ],
      'Technical Details': [
        { label: 'Louvre Sizes', value: '47mm, 63mm, 76mm, 89mm' },
        { label: 'Materials', value: 'Basswood, Paulownia, ABS Polymer' },
        { label: 'Frame Options', value: 'L-Frame, Z-Frame, Deco Frame' },
        { label: 'Maximum Panel Width', value: '91cm per panel' }
      ]
    },
    
    gallery: [
      {
        src: 'shutters-cotton-89mm-800.jpg',
        alt: 'Cotton white plantation shutters in bay window',
        caption: 'Cotton White - Classic elegance with 89mm louvres'
      },
      {
        src: 'shutters-cafe-800.jpg',
        alt: 'Café style shutters in kitchen',
        caption: 'Café Style - Perfect for street-facing windows'
      },
      {
        src: 'shutters-tier-on-tier-800.jpg',
        alt: 'Tier on tier shutters in bedroom',
        caption: 'Tier on Tier - Ultimate flexibility'
      },
      {
        src: 'shutters-tracked-800.jpg',
        alt: 'Tracked shutters on patio doors',
        caption: 'Tracked System - Ideal for large openings'
      }
    ],
    
    faqs: [
      {
        question: 'How long do shutters take to manufacture?',
        answer: 'Our shutters are custom-made to order, typically taking 8-10 weeks from measurement to installation. Express options available for certain specifications.'
      },
      {
        question: 'What\'s the difference between wood and polymer shutters?',
        answer: 'Wood shutters offer natural beauty and are lighter in weight. Polymer shutters are moisture-resistant, making them perfect for bathrooms and kitchens, and often more budget-friendly.'
      },
      {
        question: 'Can shutters be fitted to bay windows?',
        answer: 'Yes! Bay windows are one of our specialties. We create custom frames to ensure perfect fit and smooth operation in any bay configuration.'
      },
      {
        question: 'Are shutters suitable for conservation areas?',
        answer: 'Absolutely. Shutters are often the preferred choice for period properties and conservation areas due to their traditional appearance.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Wood Venetian Blinds',
        description: 'A more affordable alternative to shutters',
        image: 'venetian-starwood-400.jpg',
        link: '/venetian-blinds#wood'
      },
      {
        name: 'Café Blinds',
        description: 'Bottom-up blinds for café-style privacy',
        image: 'cafe-blinds-400.jpg',
        link: '/roller-blinds#cafe'
      },
      {
        name: 'Window Film',
        description: 'Decorative privacy solution',
        image: 'window-film-400.jpg',
        link: '/window-film'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default ShuttersLuxury