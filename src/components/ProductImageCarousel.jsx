import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductImageCarousel = () => {
  const [activeTab, setActiveTab] = useState('vision')

  const productCategories = {
    vision: {
      name: 'Vision Blinds',
      description: 'The clever choice with dual layers for perfect light control',
      images: [
        'vision-albero-silver-400.jpg',
        'vision-arezzo-beige-400.jpg',
        'vision-arezzo-grey-400.jpg',
        'vision-capri-concrete-400.jpg',
        'vision-capri-jasmine-400.jpg',
        'vision-capri-pewter-400.jpg',
        'vision-cirro-cashmere-400.jpg',
        'vision-cirro-pewter-400.jpg',
        'vision-cirro-sage-400.jpg',
        'vision-cirro-seagrass-400.jpg',
        'vision-classica-duckegg-400.jpg',
        'vision-classica-hessian-400.jpg',
        'vision-classica-navy-400.jpg',
        'vision-classica-primrose-400.jpg',
        'vision-ecco-cashmere-400.jpg',
        'vision-ecco-pewter-400.jpg',
        'vision-ecco-stone-400.jpg',
        'vision-ferrara-anthracite-400.jpg',
        'vision-ferrara-gunmetal-400.jpg',
        'vision-fiore-blush-400.jpg',
        'vision-fiore-mineral-400.jpg',
        'vision-firenze-grey-400.jpg',
        'vision-firenze-natural-400.jpg',
        'vision-firenze-neutral-400.jpg',
        'vision-firenze-walnut-400.jpg'
      ]
    },
    roller: {
      name: 'Roller Blinds',
      description: 'Simple, stylish and practical for any room',
      images: [
        'roller-birdsong-colour-400.jpg',
        'roller-blind-modern-400.jpg',
        'roller-carnival-bubblegum-400.jpg',
        'roller-daisy-pink-400.jpg',
        'roller-fiji-sand-400.jpg',
        'roller-kaleidoscope-colour-400.jpg',
        'roller-montego-mushroom-400.jpg',
        'roller-paradise-palm-400.jpg',
        'roller-petal-white-400.jpg',
        'roller-pop-white-400.jpg',
        'roller-tropical-palm-400.jpg',
        'roller-vintage-palm-400.jpg',
        'roller-zen-kiwi-400.jpg'
      ]
    },
    vertical: {
      name: 'Vertical Blinds',
      description: 'Perfect for large windows and patio doors',
      images: [
        'vertical-grey-400.jpg',
        'vertical-blind-grey-400.jpg',
        'vertical-matrix-reed-400.jpg',
        'vertical-savanna-zebra-400.jpg'
      ]
    },
    shutters: {
      name: 'Plantation Shutters',
      description: 'Luxury shutters that add real value to your home',
      images: [
        'shutters-cotton-63mm-400.jpg',
        'shutters-cotton-89mm-400.jpg',
        'shutters-white-400.jpg',
        'shutters-white-classic-400.jpg'
      ]
    },
    venetian: {
      name: 'Venetian Blinds',
      description: 'Classic choice with perfect light control',
      images: [
        'venetian-starwood-400.jpg',
        'venetian-wood-natural-400.jpg'
      ]
    },
    perfectfit: {
      name: 'Perfect Fit Blinds',
      description: 'No drilling required - clips right into UPVC windows',
      images: [
        'perfectfit-blind-white-400.jpg',
        'perfectfit-monet-flower-400.jpg'
      ]
    },
    allusion: {
      name: 'Allusion Blinds',
      description: 'Contemporary elegance combining curtains with blinds',
      images: [
        'allusion-shadow-sand-400.jpg',
        'allusion-vista-snow-400.jpg'
      ]
    },
    motorised: {
      name: 'Motorised Blinds',
      description: 'Smart blinds with remote control and automation',
      images: [
        'motorised-celeste-400.jpg'
      ]
    }
  }

  return (
    <div className="bg-gray-900 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Our Full Range</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our complete collection of blinds and shutters. Each category showcases the quality and variety we offer to help you find your perfect window treatment.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === key
                  ? 'bg-brand-gold text-gray-900'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.images.length})
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-brand-gold mb-2">
            {productCategories[activeTab].name}
          </h3>
          <p className="text-gray-300">
            {productCategories[activeTab].description}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {productCategories[activeTab].images.map((image, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={`/images/optimized/${image}`}
                  alt={`${productCategories[activeTab].name} option ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-400">
                  Style #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            See something you like? We'd love to help you find the perfect blinds for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/gallery"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImageCarousel
