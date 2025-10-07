import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const galleryImages = [
    {
      category: 'Vision Blinds',
      images: [
        { src: '/images/optimized/vision-lusso-pebble-400.jpg', alt: 'Vision Lusso Pebble blinds in bedroom', title: 'Vision Lusso Pebble' },
        { src: '/images/optimized/vision-setosa-ivory-400.jpg', alt: 'Vision Setosa Ivory blinds', title: 'Vision Setosa Ivory' },
        { src: '/images/optimized/vision-ferrara-anthracite-400.jpg', alt: 'Vision Ferrara Anthracite blinds', title: 'Vision Ferrara Anthracite' }
      ]
    },
    {
      category: 'Shutters',
      images: [
        { src: '/images/optimized/shutters-cotton-89mm-400.jpg', alt: 'Cotton plantation shutters with 89mm louvres', title: 'Cotton 89mm Shutters' },
        { src: '/images/optimized/shutters-cotton-63mm-400.jpg', alt: 'Cotton plantation shutters with 63mm louvres', title: 'Cotton 63mm Shutters' },
        { src: '/images/optimized/shutters-white-classic-400.jpg', alt: 'Classic white plantation shutters', title: 'Classic White Shutters' }
      ]
    },
    {
      category: 'Roller Blinds',
      images: [
        { src: '/images/optimized/roller-zen-kiwi-400.jpg', alt: 'Zen Kiwi roller blind', title: 'Zen Kiwi Roller' },
        { src: '/images/optimized/roller-blind-modern-400.jpg', alt: 'Modern roller blind', title: 'Modern Roller' },
        { src: '/images/optimized/roller-carnival-bubblegum-400.jpg', alt: 'Carnival Bubblegum roller blind', title: 'Carnival Bubblegum' }
      ]
    }
  ]

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            See our beautiful blinds installed in real Saddleworth homes. From cosy cottages in Uppermill to modern conversions in Diggle, discover how the right blinds can transform any space.
          </p>
        </div>

        {/* Gallery Sections */}
        {galleryImages.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{category.category} Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-400">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Love What You See?</h2>
          <p className="text-gray-300 mb-6">
            Get the same beautiful results in your own Saddleworth home. Book your free consultation today and let's discuss how we can transform your windows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Your Free Visit
            </Link>
            <a
              href="tel:01457597091"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Call for a Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
