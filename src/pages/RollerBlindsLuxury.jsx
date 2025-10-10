import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const RollerBlindsLuxury = () => {
  const productData = {
    name: 'Roller Blinds',
    tagline: 'Timeless Elegance Meets Modern Innovation',
    description: 'Experience the perfect blend of style and functionality with our premium roller blinds collection. From blackout solutions for peaceful sleep to sunscreen fabrics that filter natural light beautifully, our roller blinds offer unmatched versatility for every room in your home.',
    heroImage: 'roller-hero-1600.jpg',
    
    features: [
      {
        icon: 'sun',
        title: 'Light Control Mastery',
        description: 'Choose from blackout, dimout, or sunscreen fabrics to achieve your perfect ambiance'
      },
      {
        icon: 'palette',
        title: '300+ Designer Fabrics',
        description: 'Extensive collection including plains, patterns, textures, and exclusive designs'
      },
      {
        icon: 'shield',
        title: 'Child Safe Options',
        description: 'Cordless and motorized systems for complete peace of mind'
      },
      {
        icon: 'water',
        title: 'Moisture Resistant',
        description: 'Special fabrics perfect for kitchens, bathrooms, and conservatories'
      },
      {
        icon: 'sparkle',
        title: 'Easy Maintenance',
        description: 'Wipeable and washable options that stay looking pristine'
      },
      {
        icon: 'tools',
        title: 'Perfect Fit Available',
        description: 'Clip-in system for UPVC windows - no drilling required'
      }
    ],
    
    benefits: [
      {
        title: 'Ultimate Versatility',
        description: 'From minimalist to maximalist, our range complements any interior style'
      },
      {
        title: 'Energy Efficient',
        description: 'Thermal fabrics help insulate your windows, reducing energy costs'
      },
      {
        title: 'Professional Installation',
        description: 'Expert fitting ensures smooth operation and perfect alignment'
      },
      {
        title: 'Motorization Options',
        description: 'Upgrade to electric operation with remote or smart home integration'
      }
    ],
    
    specifications: {
      'Fabric Options': [
        { label: 'Blackout', value: '100% Light Block' },
        { label: 'Dimout', value: '80-95% Light Block' },
        { label: 'Sunscreen', value: '3-10% Openness' },
        { label: 'Privacy', value: 'Day & Night Options' }
      ],
      'Technical Details': [
        { label: 'Maximum Width', value: '3.0m' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Roll Position', value: 'Standard or Reverse' },
        { label: 'Operation', value: 'Chain, Spring, or Motorized' }
      ]
    },
    
    gallery: [
      {
        src: 'roller-zen-kiwi-800.jpg',
        alt: 'Zen Kiwi roller blind in modern living room',
        caption: 'Zen Kiwi - A fresh, contemporary choice'
      },
      {
        src: 'roller-petal-white-800.jpg',
        alt: 'Petal White roller blind in bedroom',
        caption: 'Petal White - Pure elegance for peaceful spaces'
      },
      {
        src: 'roller-birdsong-colour-800.jpg',
        alt: 'Birdsong Colour roller blind in kitchen',
        caption: 'Birdsong Colour - Bringing nature indoors'
      },
      {
        src: 'roller-dove-800.jpg',
        alt: 'Dove roller blind in bathroom',
        caption: 'Dove - Moisture-resistant luxury'
      }
    ],
    
    faqs: [
      {
        question: 'What\'s the difference between blackout and dimout?',
        answer: 'Blackout fabrics block 100% of light with a special backing, perfect for bedrooms. Dimout fabrics block 80-95% of light while maintaining a softer appearance.'
      },
      {
        question: 'Can roller blinds be fitted to bay windows?',
        answer: 'Yes! We can fit individual blinds to each section of your bay window for a seamless look and independent operation.'
      },
      {
        question: 'How do I clean roller blinds?',
        answer: 'Most fabrics can be gently wiped with a damp cloth. Some are fully washable. We\'ll advise on care during your consultation.'
      },
      {
        question: 'What\'s the lead time for roller blinds?',
        answer: 'Typically 2-3 weeks from order to installation, though express options are available for certain fabrics.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Vision Blinds',
        description: 'Innovative dual-layer design for ultimate light control',
        image: 'vision-capri-concrete-400.jpg',
        link: '/vision-blinds'
      },
      {
        name: 'Perfect Fit Blinds',
        description: 'No-drill solution for UPVC windows',
        image: 'perfectfit-monet-flower-400.jpg',
        link: '/perfect-fit-blinds'
      },
      {
        name: 'Venetian Blinds',
        description: 'Classic style with precise light control',
        image: 'venetian-starwood-400.jpg',
        link: '/venetian-blinds'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default RollerBlindsLuxury