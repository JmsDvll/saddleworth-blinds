import React from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { colors, spacing, typography, interactive } from '../styles'

const Denshaw = () => {
  const areaHeroImages = [
    {
      src: 'vision-ferrara-anthracite-1600.jpg',
      alt: 'Beautiful window blinds in a Denshaw home',
      title: 'Denshaw Style',
      description: 'Elegant blinds for rural homes'
    },
    {
      src: 'vision-palermo-silver-1600.jpg',
      alt: 'Premium blinds showcasing sophisticated tones in Denshaw',
      title: 'Modern Appeal',
      description: 'Contemporary styling for modern homes'
    },
    {
      src: 'roller-zen-kiwi-1600.jpg',
      alt: 'Vibrant roller blinds adding color to Denshaw interiors',
      title: 'Bold Colors',
      description: 'Vibrant patterns for modern spaces'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Window Blinds in
                <span className="text-brand-gold block">Denshaw</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Beautiful window blinds for Denshaw homes. From traditional stone cottages to modern family homes, we understand what works best in this peaceful Saddleworth village.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="btn btn-primary text-lg px-8 py-4 text-center"
                >
                  Book Free Quote in Denshaw
                </Link>
                <a
                  href="tel:01457597091"
                  className="btn btn-secondary text-lg px-8 py-4 text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 01457 597091
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Traditional Cottages</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Local Denshaw Experts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">20+ Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <HeroCarousel images={areaHeroImages} autoRotate={true} interval={5000} />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Blinds for Denshaw Homes</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Denshaw is known for its peaceful rural setting and beautiful stone-built properties. We've been serving Denshaw homeowners for over 20 years, understanding the unique character of this Saddleworth village and recommending the perfect blinds for traditional and modern homes alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Traditional Stone Cottages</h3>
              <p className="text-gray-300">
                Perfect blinds for Denshaw's characteristic stone-built homes, enhancing the rustic charm while providing modern functionality.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Rural Location Benefits</h3>
              <p className="text-gray-300">
                Blinds designed for Denshaw's peaceful rural setting, providing privacy while maintaining the beautiful countryside views.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">20+ Years Local Experience</h3>
              <p className="text-gray-300">
                Trusted by Denshaw homeowners for over two decades. We know the local area and understand what works best for your home.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Denshaw Home?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied Denshaw customers who've trusted us with their window treatments. Let's discuss how we can enhance your home.
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
    </div>
  )
}

export default Denshaw
