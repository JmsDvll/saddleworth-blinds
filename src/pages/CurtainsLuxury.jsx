import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const CurtainsLuxury = () => {
  const productData = {
    name: 'Made to Measure Curtains',
    tagline: 'Timeless Elegance, Perfectly Tailored',
    description: 'Create the perfect ambiance with our luxurious made-to-measure curtains. From sumptuous velvets to breezy linens, our extensive fabric collection and expert craftsmanship ensure your curtains will be the perfect finishing touch to your interior design.',
    heroImage: 'curtains-hero-1600.jpg',
    
    features: [
      {
        icon: 'palette',
        title: '1000+ Fabric Choices',
        description: 'From leading fabric houses including Prestigious, Clarke & Clarke'
      },
      {
        icon: 'ruler',
        title: 'Expert Measuring',
        description: 'Professional service ensures perfect fit every time'
      },
      {
        icon: 'sparkle',
        title: 'Hand-Finished',
        description: 'Traditional craftsmanship with modern precision'
      },
      {
        icon: 'home',
        title: 'Complete Service',
        description: 'From fabric selection to professional installation'
      },
      {
        icon: 'tools',
        title: 'Track & Pole Options',
        description: 'Wide range of curtain poles and tracks available'
      },
      {
        icon: 'star',
        title: 'Heading Styles',
        description: 'Pencil pleat, eyelet, pinch pleat, and more'
      }
    ],
    
    benefits: [
      {
        title: 'Unlimited Design Options',
        description: 'Create exactly the look you want with endless fabric and style combinations'
      },
      {
        title: 'Superior Insulation',
        description: 'Lined curtains provide excellent thermal and acoustic insulation'
      },
      {
        title: 'Light Control',
        description: 'From sheer to blackout, control light and privacy perfectly'
      },
      {
        title: 'Interior Statement',
        description: 'Transform your room with dramatic floor-to-ceiling designs'
      }
    ],
    
    specifications: {
      'Heading Styles': [
        { label: 'Pencil Pleat', value: 'Classic gathered style' },
        { label: 'Eyelet', value: 'Contemporary metal rings' },
        { label: 'Pinch Pleat', value: 'Elegant tailored pleats' },
        { label: 'Wave', value: 'Modern ripple effect' }
      ],
      'Lining Options': [
        { label: 'Standard', value: 'Cotton sateen lining' },
        { label: 'Blackout', value: 'Complete light blocking' },
        { label: 'Thermal', value: 'Energy-saving properties' },
        { label: 'Interlining', value: 'Luxury weight and drape' }
      ]
    },
    
    gallery: [
      {
        src: 'curtains-velvet-navy-800.jpg',
        alt: 'Navy velvet curtains in living room',
        caption: 'Velvet Navy - Luxurious depth'
      },
      {
        src: 'curtains-linen-natural-800.jpg',
        alt: 'Natural linen curtains',
        caption: 'Natural Linen - Relaxed elegance'
      },
      {
        src: 'curtains-pattern-800.jpg',
        alt: 'Patterned curtains in bedroom',
        caption: 'Designer Pattern - Statement style'
      },
      {
        src: 'curtains-sheer-800.jpg',
        alt: 'Sheer curtains with blinds',
        caption: 'Sheer Voile - Soft filtered light'
      }
    ],
    
    faqs: [
      {
        question: 'How do I measure for curtains?',
        answer: 'We provide a free measuring service to ensure perfect results. For DIY, measure the pole/track width and decide on length - sill, below sill, or floor length.'
      },
      {
        question: 'Should curtains touch the floor?',
        answer: 'It\'s a matter of preference. Floor-length creates drama, while just clearing prevents dust collection. We can also create a "puddle" effect for luxury.'
      },
      {
        question: 'Can I provide my own fabric?',
        answer: 'Absolutely! We\'re happy to make curtains from fabric you\'ve sourced, subject to suitability checks.'
      },
      {
        question: 'How long do curtains take to make?',
        answer: 'Typically 3-4 weeks from order to installation, depending on fabric availability and our current workload.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Curtain Poles',
        description: 'Designer poles and finials',
        image: 'poles-400.jpg',
        link: '/curtain-poles'
      },
      {
        name: 'Roman Blinds',
        description: 'Coordinate with matching fabric',
        image: 'roman-plain-grey-400.jpg',
        link: '/roman-blinds'
      },
      {
        name: 'Voiles & Sheers',
        description: 'Layer for versatile light control',
        image: 'voiles-400.jpg',
        link: '/curtains#voiles'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default CurtainsLuxury