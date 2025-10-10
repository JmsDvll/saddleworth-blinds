import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const PerfectFitBlindsLuxury = () => {
  const productData = {
    name: 'Perfect Fit Blinds',
    tagline: 'No Drilling, No Screws, Just Perfect',
    description: 'The revolutionary no-drill blind system designed specifically for UPVC windows and doors. Perfect Fit blinds clip directly into your window frame, moving with the window when opened. Ideal for conservatories, rental properties, and anyone seeking a clean, integrated look.',
    heroImage: 'perfectfit-hero-1600.jpg',
    
    features: [
      {
        icon: 'tools',
        title: 'No Drilling Required',
        description: 'Unique bracket system clips into window beading'
      },
      {
        icon: 'shield',
        title: 'Child & Pet Safe',
        description: 'No hanging cords or chains - completely safe'
      },
      {
        icon: 'move',
        title: 'Moves with Windows',
        description: 'Blind stays in place when window is opened or tilted'
      },
      {
        icon: 'sparkle',
        title: 'Neat Appearance',
        description: 'Sits flush within the window frame for clean lines'
      },
      {
        icon: 'home',
        title: 'Ideal for Rentals',
        description: 'No damage to windows - perfect for tenants'
      },
      {
        icon: 'sun',
        title: 'Multiple Blind Types',
        description: 'Available as roller, pleated, or venetian styles'
      }
    ],
    
    benefits: [
      {
        title: 'Perfect for Conservatories',
        description: 'Individual blinds for each pane maintain clean sight lines'
      },
      {
        title: 'No Light Gaps',
        description: 'Frame system eliminates gaps for better light control'
      },
      {
        title: 'Easy Installation',
        description: 'DIY friendly or professional fitting available'
      },
      {
        title: 'Low Maintenance',
        description: 'No drilling means no damage to clean around'
      }
    ],
    
    specifications: {
      'Available Styles': [
        { label: 'Roller', value: 'Including blackout and solar fabrics' },
        { label: 'Pleated', value: 'Energy-efficient honeycomb options' },
        { label: 'Venetian', value: '25mm aluminium slats' },
        { label: 'Vision', value: 'Day and night fabrics available' }
      ],
      'Technical Details': [
        { label: 'Frame Colors', value: 'White, Brown, Anthracite, Chrome' },
        { label: 'Suitable For', value: 'UPVC windows with 18mm+ beading' },
        { label: 'Maximum Size', value: 'Depends on blind type and fabric' },
        { label: 'Warranty', value: '3 year guarantee' }
      ]
    },
    
    gallery: [
      {
        src: 'perfectfit-monet-flower-800.jpg',
        alt: 'Monet Flower perfect fit blind in conservatory',
        caption: 'Monet Flower - Bringing nature indoors'
      },
      {
        src: 'perfectfit-white-800.jpg',
        alt: 'White perfect fit blinds in kitchen',
        caption: 'Classic White - Clean and simple'
      },
      {
        src: 'perfectfit-pleated-800.jpg',
        alt: 'Pleated perfect fit blind',
        caption: 'Pleated Style - Energy efficient'
      },
      {
        src: 'perfectfit-venetian-800.jpg',
        alt: 'Venetian perfect fit blind',
        caption: 'Venetian Option - Precise light control'
      }
    ],
    
    faqs: [
      {
        question: 'Will Perfect Fit blinds fit my windows?',
        answer: 'Perfect Fit blinds work with most UPVC windows that have a rubber beading depth of 18mm or more. We\'ll check compatibility during your consultation.'
      },
      {
        question: 'Can I remove Perfect Fit blinds?',
        answer: 'Yes! They can be easily unclipped for deep cleaning or if you move house. No damage is left behind.'
      },
      {
        question: 'Do they work on doors?',
        answer: 'Absolutely! Perfect Fit blinds are ideal for UPVC doors, including French and patio doors. The blind moves with the door.'
      },
      {
        question: 'What about shaped windows?',
        answer: 'We can create Perfect Fit solutions for many shaped windows including angles and arches. Ask about our special shape options.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'INTU Blinds',
        description: 'Alternative no-drill system',
        image: 'intu-blinds-400.jpg',
        link: '/perfect-fit-blinds#intu'
      },
      {
        name: 'Integrated Blinds',
        description: 'Built into double glazing',
        image: 'integrated-400.jpg',
        link: '/integrated-blinds'
      },
      {
        name: 'Conservatory Blinds',
        description: 'Full conservatory solutions',
        image: 'conservatory-400.jpg',
        link: '/conservatory-blinds'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default PerfectFitBlindsLuxury