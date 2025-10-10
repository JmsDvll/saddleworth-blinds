import React from 'react'
import AreaPageLuxury from '../templates/AreaPageLuxury'

const UppermillLuxury = () => {
  const areaData = {
    areaName: 'Uppermill',
    heroImage: 'uppermill-hero-1600.jpg',
    population: '7,500',
    established: 'Medieval',
    description: 'Nestled in the heart of the Pennines, Uppermill is Saddleworth\'s largest village. From Victorian terraces to modern developments, we\'ve been transforming Uppermill homes with beautiful blinds and shutters for over 45 years.',
    
    highlights: [
      'Same-day consultations available for Uppermill residents',
      'Expert knowledge of local architecture and window types',
      'Hundreds of satisfied customers throughout the village',
      'Quick response times - we\'re just minutes away',
      'Special consideration for conservation area properties'
    ],

    whyChooseUs: [
      {
        icon: 'location',
        title: 'Truly Local',
        description: 'Based nearby, we understand Uppermill\'s unique character and architectural styles'
      },
      {
        icon: 'clock',
        title: 'Rapid Response',
        description: 'Same-week appointments and fast installation for Uppermill homes'
      },
      {
        icon: 'star',
        title: 'Trusted Reputation',
        description: 'Recommended by hundreds of Uppermill families over four decades'
      },
      {
        icon: 'currency',
        title: 'Local Pricing',
        description: 'Competitive rates with no travel charges for Uppermill customers'
      }
    ],

    servicesOffered: [
      {
        name: 'Roller Blinds',
        icon: 'sun',
        description: 'From blackout for bedrooms to moisture-resistant for kitchens',
        link: '/roller-blinds'
      },
      {
        name: 'Plantation Shutters',
        icon: 'home',
        description: 'Perfect for period properties and modern homes alike',
        link: '/shutters'
      },
      {
        name: 'Vision Blinds',
        icon: 'eye',
        description: 'Contemporary style for Uppermill\'s modern developments',
        link: '/vision-blinds'
      },
      {
        name: 'Perfect Fit',
        icon: 'shield',
        description: 'No-drill solution ideal for new-build properties',
        link: '/perfect-fit-blinds'
      },
      {
        name: 'Venetian Blinds',
        icon: 'layers',
        description: 'Classic style in wood, faux wood, or aluminium',
        link: '/venetian-blinds'
      },
      {
        name: 'Made to Measure Curtains',
        icon: 'sparkle',
        description: 'Bespoke curtains for that perfect finish',
        link: '/curtains'
      }
    ],

    recentProjects: [
      {
        title: 'Victorian Terrace Transformation',
        product: 'Wooden Shutters',
        room: 'Bay Window',
        image: 'uppermill-project-1-400.jpg'
      },
      {
        title: 'Modern Kitchen Update',
        product: 'Vision Blinds',
        room: 'Kitchen',
        image: 'uppermill-project-2-400.jpg'
      },
      {
        title: 'Conservation Area Approved',
        product: 'Plantation Shutters',
        room: 'Full House',
        image: 'uppermill-project-3-400.jpg'
      }
    ],

    localReviews: [
      {
        name: 'Sarah Mitchell',
        location: 'High Street, Uppermill',
        rating: 5,
        text: 'Sunshine Blinds understood exactly what would work in our Victorian home. The shutters are absolutely perfect!',
        product: 'Plantation Shutters',
        verified: true
      },
      {
        name: 'James Thompson',
        location: 'Running Hill Gate',
        rating: 5,
        text: 'Quick response, great advice, and the Vision blinds look amazing in our new extension.',
        product: 'Vision Blinds',
        verified: true
      },
      {
        name: 'Emma Davies',
        location: 'Church Road',
        rating: 5,
        text: 'Fifth time using Sunshine Blinds - they\'ve done our whole house over the years. Always excellent.',
        product: 'Various',
        verified: true
      }
    ],

    nearbyAreas: ['Diggle', 'Dobcross', 'Greenfield', 'Delph', 'Lydgate'],

    localInfo: 'Serving all of Uppermill including High Street, Church Road, Running Hill Gate, Moorgate Street, and surrounding areas. Conservation area specialist - we understand planning requirements.'
  }

  return <AreaPageLuxury {...areaData} />
}

export default UppermillLuxury