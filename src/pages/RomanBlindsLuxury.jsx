import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const RomanBlindsLuxury = () => {
  const productData = {
    name: 'Roman Blinds',
    tagline: 'Luxurious Fabrics, Elegant Folds',
    description: 'Add a touch of sophistication to your windows with our beautiful Roman blinds. Combining the elegance of curtains with the practicality of blinds, they create stunning focal points in any room. Choose from hundreds of fabrics to perfectly match your interior style.',
    heroImage: 'roman-hero-1600.jpg',
    
    features: [
      {
        icon: 'palette',
        title: '500+ Fabric Choices',
        description: 'From linens and silks to contemporary prints'
      },
      {
        icon: 'sparkle',
        title: 'Luxurious Appearance',
        description: 'Soft fabric folds create an elegant window treatment'
      },
      {
        icon: 'sun',
        title: 'Lining Options',
        description: 'Standard, blackout, or thermal linings available'
      },
      {
        icon: 'ruler',
        title: 'Made to Measure',
        description: 'Precision crafted for a perfect fit'
      },
      {
        icon: 'shield',
        title: 'Child Safe Options',
        description: 'Available with cleated chains or motorization'
      },
      {
        icon: 'tools',
        title: 'Professional Make',
        description: 'Hand-finished by skilled craftspeople'
      }
    ],
    
    benefits: [
      {
        title: 'Elegant Style',
        description: 'Adds a luxurious, designer touch to any room'
      },
      {
        title: 'Insulation Properties',
        description: 'Fabric and lining provide excellent thermal efficiency'
      },
      {
        title: 'Versatile Design',
        description: 'Works beautifully in both traditional and modern homes'
      },
      {
        title: 'Coordinate with Soft Furnishings',
        description: 'Match with cushions and curtains for a cohesive look'
      }
    ],
    
    specifications: {
      'Fabric Types': [
        { label: 'Cotton & Linen', value: 'Natural textures and breathability' },
        { label: 'Polyester Blends', value: 'Durable and fade-resistant' },
        { label: 'Velvet & Chenille', value: 'Luxurious textures' },
        { label: 'Printed Designs', value: 'From florals to geometrics' }
      ],
      'Technical Details': [
        { label: 'Maximum Width', value: '2.5m (depending on fabric weight)' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Lining Options', value: 'Standard, Blackout, Thermal' },
        { label: 'Headrail', value: 'White aluminium (color options available)' }
      ]
    },
    
    gallery: [
      {
        src: 'roman-linen-natural-800.jpg',
        alt: 'Natural linen Roman blind in living room',
        caption: 'Natural Linen - Timeless elegance'
      },
      {
        src: 'roman-pattern-floral-800.jpg',
        alt: 'Floral pattern Roman blind',
        caption: 'English Garden - Classic floral design'
      },
      {
        src: 'roman-velvet-navy-800.jpg',
        alt: 'Navy velvet Roman blind in bedroom',
        caption: 'Midnight Velvet - Luxurious depth'
      },
      {
        src: 'roman-geometric-800.jpg',
        alt: 'Geometric pattern Roman blind',
        caption: 'Modern Geometric - Contemporary style'
      }
    ],
    
    faqs: [
      {
        question: 'How do I clean Roman blinds?',
        answer: 'Regular vacuuming with a brush attachment keeps them fresh. Many fabrics can be professionally cleaned. We provide full care instructions with your blinds.'
      },
      {
        question: 'Can Roman blinds be used in bathrooms?',
        answer: 'Yes, with moisture-resistant fabrics and treatments. We\'ll recommend suitable options during your consultation.'
      },
      {
        question: 'What\'s the difference between Roman and roller blinds?',
        answer: 'Roman blinds create soft fabric folds when raised, offering a more decorative look. Roller blinds roll up completely for a minimalist appearance.'
      },
      {
        question: 'Can I provide my own fabric?',
        answer: 'Yes! We offer a making-up service using your chosen fabric, subject to suitability testing.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Curtains',
        description: 'Coordinate with matching curtains',
        image: 'curtains-400.jpg',
        link: '/curtains'
      },
      {
        name: 'Cushions',
        description: 'Made from matching fabrics',
        image: 'cushions-400.jpg',
        link: '/soft-furnishings'
      },
      {
        name: 'Roller Blinds',
        description: 'Simpler alternative with similar function',
        image: 'roller-zen-kiwi-400.jpg',
        link: '/roller-blinds'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default RomanBlindsLuxury