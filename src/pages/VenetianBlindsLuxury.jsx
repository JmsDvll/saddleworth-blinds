import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const VenetianBlindsLuxury = () => {
  const productData = {
    name: 'Venetian Blinds',
    tagline: 'Classic Style with Precision Light Control',
    description: 'Discover the timeless appeal of Venetian blinds. Available in real wood, faux wood, and aluminium, our Venetian blinds offer unmatched versatility and control. Perfect for any room, they combine traditional elegance with modern functionality.',
    heroImage: 'venetian-hero-1600.jpg',
    
    features: [
      {
        icon: 'sun',
        title: 'Precise Light Control',
        description: 'Tilt slats to any angle for perfect light and privacy balance'
      },
      {
        icon: 'palette',
        title: 'Three Material Options',
        description: 'Choose from natural wood, durable faux wood, or sleek aluminium'
      },
      {
        icon: 'ruler',
        title: 'Multiple Slat Sizes',
        description: '25mm, 35mm, or 50mm slats to suit your style preference'
      },
      {
        icon: 'water',
        title: 'Moisture Resistant Options',
        description: 'Faux wood and aluminium perfect for bathrooms and kitchens'
      },
      {
        icon: 'tools',
        title: 'Easy Operation',
        description: 'Cord, wand, or motorized control options available'
      },
      {
        icon: 'sparkle',
        title: 'Low Maintenance',
        description: 'Simple to clean and maintain for lasting beauty'
      }
    ],
    
    benefits: [
      {
        title: 'Timeless Elegance',
        description: 'A classic window treatment that never goes out of style'
      },
      {
        title: 'Complete Privacy Control',
        description: 'Adjust slats for privacy without blocking all light'
      },
      {
        title: 'Energy Efficient',
        description: 'Help regulate room temperature by controlling sunlight'
      },
      {
        title: 'Long-Lasting Investment',
        description: 'Durable materials that maintain their appearance for years'
      }
    ],
    
    specifications: {
      'Material Options': [
        { label: 'Real Wood', value: 'Natural warmth and grain' },
        { label: 'Faux Wood', value: 'Moisture resistant composite' },
        { label: 'Aluminium', value: 'Lightweight and durable' }
      ],
      'Technical Details': [
        { label: 'Slat Widths', value: '25mm, 35mm, 50mm' },
        { label: 'Maximum Width', value: '2.4m (depending on material)' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Control Options', value: 'Cord, Wand, Motorized' }
      ]
    },
    
    gallery: [
      {
        src: 'venetian-starwood-800.jpg',
        alt: 'Starwood venetian blind in home office',
        caption: 'Starwood - Natural wood elegance'
      },
      {
        src: 'venetian-white-800.jpg',
        alt: 'White venetian blind in bathroom',
        caption: 'Pure White - Clean and contemporary'
      },
      {
        src: 'venetian-aluminium-800.jpg',
        alt: 'Silver aluminium venetian blind',
        caption: 'Aluminium - Modern and practical'
      },
      {
        src: 'venetian-grey-800.jpg',
        alt: 'Grey faux wood venetian blind',
        caption: 'Grey Faux Wood - Stylish and durable'
      }
    ],
    
    faqs: [
      {
        question: 'Which material is best for bathrooms?',
        answer: 'Faux wood or aluminium venetians are ideal for bathrooms as they\'re moisture resistant and won\'t warp or fade in humid conditions.'
      },
      {
        question: 'Can I have different slat sizes in the same room?',
        answer: 'Yes, though we recommend keeping slat sizes consistent within the same room for a cohesive look. Different rooms can have different sizes.'
      },
      {
        question: 'How do I clean Venetian blinds?',
        answer: 'Regular dusting with a microfiber cloth or vacuum brush attachment. For deeper cleaning, wipe each slat with a damp cloth.'
      },
      {
        question: 'Are Venetian blinds child safe?',
        answer: 'Yes, we offer cordless wand operation and motorized options for complete child safety.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Faux Wood Blinds',
        description: 'All the beauty of wood, none of the maintenance',
        image: 'fauxwood-white-400.jpg',
        link: '/venetian-blinds#faux-wood'
      },
      {
        name: 'Vision Blinds',
        description: 'Modern alternative with unique light control',
        image: 'vision-capri-concrete-400.jpg',
        link: '/vision-blinds'
      },
      {
        name: 'Shutters',
        description: 'Premium alternative to Venetian blinds',
        image: 'shutters-cotton-400.jpg',
        link: '/shutters'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default VenetianBlindsLuxury