import React from 'react'
import ProductPageLuxury from '../templates/ProductPageLuxury'

const AllusionBlindsLuxury = () => {
  const productData = {
    name: 'Allusion Blinds',
    tagline: 'The Future of Window Shading',
    description: 'Experience the revolutionary Allusion blind - a unique combination of vertical blind functionality with the soft appearance of curtains. These innovative blinds feature flowing fabric vanes that provide exceptional light control while maintaining an elegant, contemporary look.',
    heroImage: 'allusion-hero-1600.jpg',
    
    features: [
      {
        icon: 'sparkle',
        title: 'Unique Design',
        description: 'Patented combination of sheer and opaque fabrics'
      },
      {
        icon: 'move',
        title: 'Walk-Through Feature',
        description: 'Simply walk through the vanes like curtains'
      },
      {
        icon: 'sun',
        title: 'Superior Light Control',
        description: 'Rotate vanes for privacy or stack for full view'
      },
      {
        icon: 'palette',
        title: 'Designer Fabrics',
        description: 'Beautiful textured and plain options'
      },
      {
        icon: 'shield',
        title: 'Child Safe',
        description: 'Wand control with no dangerous cords'
      },
      {
        icon: 'ruler',
        title: 'Large Windows',
        description: 'Perfect for wide patio doors up to 5.8m'
      }
    ],
    
    benefits: [
      {
        title: 'Versatile Functionality',
        description: 'Combines the best features of blinds, curtains, and voiles'
      },
      {
        title: 'Soft Appearance',
        description: 'Creates a softer look than traditional vertical blinds'
      },
      {
        title: 'Easy Operation',
        description: 'Simple wand control for tilting and drawing'
      },
      {
        title: 'Modern Alternative',
        description: 'Contemporary update to vertical blinds'
      }
    ],
    
    specifications: {
      'Fabric Options': [
        { label: 'Mystique', value: 'Textured plains collection' },
        { label: 'Illusion', value: 'Subtle patterns and weaves' },
        { label: 'Mirage', value: 'Contemporary metallic finishes' },
        { label: 'Vision', value: 'Natural inspired textures' }
      ],
      'Technical Details': [
        { label: 'Maximum Width', value: '5.8m' },
        { label: 'Maximum Drop', value: '3.0m' },
        { label: 'Vane Width', value: '100mm' },
        { label: 'Stack Options', value: 'Left, Right, or Split' }
      ]
    },
    
    gallery: [
      {
        src: 'allusion-mystique-silver-800.jpg',
        alt: 'Mystique Silver allusion blind',
        caption: 'Mystique Silver - Contemporary elegance'
      },
      {
        src: 'allusion-illusion-natural-800.jpg',
        alt: 'Illusion Natural allusion blind',
        caption: 'Illusion Natural - Soft warmth'
      },
      {
        src: 'allusion-mirage-grey-800.jpg',
        alt: 'Mirage Grey allusion blind on patio doors',
        caption: 'Mirage Grey - Perfect for patio doors'
      },
      {
        src: 'allusion-vision-white-800.jpg',
        alt: 'Vision White allusion blind',
        caption: 'Vision White - Clean and bright'
      }
    ],
    
    faqs: [
      {
        question: 'What makes Allusion blinds different?',
        answer: 'Allusion blinds feature unique flowing fabric vanes that can be walked through like curtains, yet offer the light control of a blind. They\'re exclusive to Louvolite.'
      },
      {
        question: 'Are they suitable for patio doors?',
        answer: 'Perfect for patio doors! The walk-through feature means no need to draw the blind back for access, and they can cover openings up to 5.8m wide.'
      },
      {
        question: 'How do I clean Allusion blinds?',
        answer: 'The fabric vanes can be gently vacuumed or wiped with a damp cloth. For deeper cleaning, they can be removed and professionally cleaned.'
      },
      {
        question: 'Can they provide privacy at night?',
        answer: 'Yes, when the vanes are closed, they provide excellent privacy. The combination of sheer and opaque fabrics ensures privacy while maintaining style.'
      }
    ],
    
    relatedProducts: [
      {
        name: 'Vertical Blinds',
        description: 'Traditional alternative for large windows',
        image: 'vertical-atlantex-white-400.jpg',
        link: '/vertical-blinds'
      },
      {
        name: 'Panel Blinds',
        description: 'Modern sliding panel system',
        image: 'panel-blinds-400.jpg',
        link: '/panel-blinds'
      },
      {
        name: 'Wave Curtains',
        description: 'Soft fabric alternative',
        image: 'curtains-wave-400.jpg',
        link: '/curtains#wave'
      }
    ]
  }

  return <ProductPageLuxury {...productData} />
}

export default AllusionBlindsLuxury