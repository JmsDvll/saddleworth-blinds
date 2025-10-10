import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const VerticalBlindsLuxury = () => {
  const productData = {
    name: 'Vertical Blinds',
    tagline: 'Perfect for Large Windows & Patio Doors',
    description: 'The ideal solution for wide windows and sliding doors. Our vertical blinds combine practicality with style, offering excellent light control and privacy. Available in an extensive range of fabrics, from sheer voiles to blackout options.',
    heroImage: 'vertical-hero-1600.jpg',
    
    features: [
      {
        icon: 'ruler',
        title: 'Made for Wide Spaces',
        description: 'Perfect for patio doors and floor-to-ceiling windows'
      },
      {
        icon: 'palette',
        title: '200+ Fabric Choices',
        description: 'Plains, patterns, textures, and specialty fabrics'
      },
      {
        icon: 'rotate',
        title: '180° Rotation',
        description: 'Full control over light direction and privacy'
      },
      {
        icon: 'shield',
        title: 'Chainless Options',
        description: 'Wand control for child and pet safety'
      },
      {
        icon: 'sparkle',
        title: 'Easy to Clean',
        description: 'Individual slats can be wiped or replaced'
      },
      {
        icon: 'tools',
        title: 'Draw Options',
        description: 'Stack left, right, center split, or opposite sides'
      }
    ],
    
    benefits: [
      {
        title: 'Space Efficient',
        description: 'Stack neatly to the side when open, maximizing your view'
      },
      {
        title: 'Directional Light Control',
        description: 'Angle slats to direct light where you need it'
      },
      {
        title: 'Budget Friendly',
        description: 'Cost-effective solution for large window areas'
      },
      {
        title: 'Easy Access',
        description: 'Walk through without raising the entire blind'
      }
    ],
    
    specifications: {
      'Fabric Options': [
        { label: 'Slat Width', value: '89mm or 127mm' },
        { label: 'Blackout', value: 'Complete light blocking' },
        { label: 'Dimout', value: 'Privacy with soft light' },
        { label: 'Sheer', value: 'Maintain outside view' }
      ],
      'Technical Details': [
        { label: 'Maximum Width', value: '6.0m' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Control Options', value: 'Cord & Chain, Wand, Motorized' },
        { label: 'Headrail Colors', value: 'White, Cream, Grey, Black' }
      ]
    },
    
    gallery: [
      {
        src: 'vertical-savanna-zebra-800.jpg',
        alt: 'Savanna Zebra vertical blind on patio doors',
        caption: 'Savanna Zebra - Bold pattern statement'
      },
      {
        src: 'vertical-atlantex-white-800.jpg',
        alt: 'White vertical blinds in office',
        caption: 'Atlantex White - Clean and professional'
      },
      {
        src: 'vertical-fabric-grey-800.jpg',
        alt: 'Grey fabric vertical blinds',
        caption: 'Contemporary Grey - Modern simplicity'
      },
      {
        src: 'vertical-blackout-800.jpg',
        alt: 'Blackout vertical blinds in bedroom',
        caption: 'Blackout Option - Complete darkness'
      }
    ],
    
    faqs: [
      {
        question: 'Are vertical blinds old-fashioned?',
        answer: 'Not at all! Modern vertical blinds feature contemporary fabrics and sleek hardware. They remain the most practical solution for large windows and sliding doors.'
      },
      {
        question: 'Can I have different fabrics in one blind?',
        answer: 'Yes! We can create alternating slats with different colors or fabrics for a unique designer look.'
      },
      {
        question: 'How do I clean vertical blind slats?',
        answer: 'Most fabrics can be wiped with a damp cloth. Some are machine washable, and individual slats can be replaced if damaged.'
      },
      {
        question: 'Can vertical blinds be shortened?',
        answer: 'Yes, we can adjust the length during installation or return to shorten them later if needed.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Panel Blinds',
        description: 'Modern alternative for sliding doors',
        image: 'panel-blinds-400.jpg',
        link: '/panel-blinds'
      },
      {
        name: 'Allusion Blinds',
        description: 'Combines vertical and roller blind features',
        image: 'allusion-400.jpg',
        link: '/allusion-blinds'
      },
      {
        name: 'Curtains',
        description: 'Traditional alternative for large windows',
        image: 'curtains-400.jpg',
        link: '/curtains'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default VerticalBlindsLuxury