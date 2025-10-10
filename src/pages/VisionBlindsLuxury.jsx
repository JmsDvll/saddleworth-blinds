import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const VisionBlindsLuxury = () => {
  const productData = {
    name: 'Vision Blinds',
    tagline: 'Revolutionary Day & Night Light Control',
    description: 'Experience the future of window treatments with Vision blinds. These innovative dual-layer blinds offer unparalleled versatility, allowing you to enjoy natural light while maintaining privacy. Perfect for modern homes seeking both style and functionality.',
    heroImage: 'vision-hero-1600.jpg',
    
    features: [
      {
        icon: 'sun',
        title: 'Dual Layer Technology',
        description: 'Alternating sheer and opaque stripes for infinite light control'
      },
      {
        icon: 'eye',
        title: 'Privacy Without Darkness',
        description: 'Maintain privacy while still enjoying natural light'
      },
      {
        icon: 'palette',
        title: 'Designer Collections',
        description: 'Premium fabrics including Capri, Firenze, and Lusso ranges'
      },
      {
        icon: 'sparkle',
        title: 'Easy Maintenance',
        description: 'Dust-resistant fabrics that are simple to clean'
      },
      {
        icon: 'shield',
        title: 'Child Safe',
        description: 'Available with cordless and motorized options'
      },
      {
        icon: 'ruler',
        title: 'Made to Measure',
        description: 'Precision fit for windows up to 3m wide'
      }
    ],
    
    benefits: [
      {
        title: 'Ultimate Versatility',
        description: 'Transition seamlessly from privacy to view, day to night'
      },
      {
        title: 'Modern Aesthetic',
        description: 'Contemporary design that complements any interior style'
      },
      {
        title: 'Energy Efficient',
        description: 'Control heat and light to reduce energy costs'
      },
      {
        title: 'UV Protection',
        description: 'Protect furniture and flooring from harmful UV rays'
      }
    ],
    
    specifications: {
      'Fabric Collections': [
        { label: 'Capri', value: 'Contemporary plains and textures' },
        { label: 'Firenze', value: 'Wood-effect and natural tones' },
        { label: 'Lusso', value: 'Premium designer patterns' },
        { label: 'Twilight', value: 'Enhanced room darkening' }
      ],
      'Technical Details': [
        { label: 'Maximum Width', value: '3.0m' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Operation', value: 'Chain, Motorized, or Smart Home' },
        { label: 'Light Control', value: '0-80% light filtering' }
      ]
    },
    
    gallery: [
      {
        src: 'vision-capri-concrete-800.jpg',
        alt: 'Capri Concrete vision blind in living room',
        caption: 'Capri Concrete - Urban sophistication'
      },
      {
        src: 'vision-firenze-walnut-800.jpg',
        alt: 'Firenze Walnut vision blind in dining room',
        caption: 'Firenze Walnut - Natural elegance'
      },
      {
        src: 'vision-lusso-pebble-800.jpg',
        alt: 'Lusso Pebble vision blind in bedroom',
        caption: 'Lusso Pebble - Soft luxury'
      },
      {
        src: 'vision-twilight-charcoal-800.jpg',
        alt: 'Twilight Charcoal vision blind',
        caption: 'Twilight Charcoal - Enhanced privacy'
      }
    ],
    
    faqs: [
      {
        question: 'How do Vision blinds work?',
        answer: 'Vision blinds feature two layers of fabric with alternating sheer and opaque stripes. By adjusting the alignment of these stripes, you can control privacy and light levels.'
      },
      {
        question: 'Can Vision blinds completely block light?',
        answer: 'While Vision blinds offer excellent light control, they\'re not blackout blinds. For complete darkness, consider our Twilight collection or roller blinds with blackout fabric.'
      },
      {
        question: 'Are Vision blinds suitable for bathrooms?',
        answer: 'Yes! We offer moisture-resistant options perfect for bathrooms and kitchens. Ask about our specialized bathroom-safe collections.'
      },
      {
        question: 'Can I motorize Vision blinds?',
        answer: 'Absolutely! Vision blinds work beautifully with motorization, allowing precise control via remote, smartphone, or voice commands.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Day & Night Blinds',
        description: 'Similar dual-function design',
        image: 'daynight-white-400.jpg',
        link: '/vision-blinds#day-night'
      },
      {
        name: 'Roller Blinds',
        description: 'Classic alternative with blackout options',
        image: 'roller-zen-kiwi-400.jpg',
        link: '/roller-blinds'
      },
      {
        name: 'Perfect Fit Vision',
        description: 'No-drill solution for UPVC windows',
        image: 'perfectfit-vision-400.jpg',
        link: '/perfect-fit-blinds#vision'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default VisionBlindsLuxury