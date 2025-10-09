import React from 'react'
import { Link } from 'react-router-dom'
import ProductImageCarousel from '../components/ProductImageCarousel'
import { colors, spacing, typography, interactive } from '../styles'

const RomanBlinds = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Elegant Roman
                <span className="text-brand-gold block">Blinds</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                For a touch of elegance and sophistication, Roman blinds are perfect. They fold up neatly when raised and create beautiful soft pleats. Available in countless fabrics to match any décor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="btn btn-primary text-lg px-8 py-4 text-center"
                >
                  Get Your Free Quote
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Beautiful Pleating</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Excellent Light Control</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Local Saddleworth Experts</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`${interactive.image.responsive} rounded-lg shadow-2xl ${colors.background.secondary} flex items-center justify-center`}>
                <div className="text-center p-8">
                  <div className={`w-24 h-24 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-12 h-12 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${typography.h3} ${colors.text.white} mb-2`}>Coming Soon</h3>
                  <p className={`${typography.body} ${colors.text.secondary}`}>Roman blinds collection launching soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">

        {/* Coming Soon Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 rounded-2xl p-12 border border-brand-gold/20">
            <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Roman Blinds - Coming Soon!</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              We're currently expanding our Roman blinds collection. In the meantime, explore our extensive range of other blind types below to see the quality and variety we offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Register Interest
              </a>
              <a
                href="tel:01457597091"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Roman Blinds Are Perfect for Saddleworth Homes</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Roman blinds offer the perfect blend of functionality and elegance. They provide excellent light control while adding a touch of luxury to any room. When raised, they fold into neat, soft pleats that create beautiful window treatments for both traditional and contemporary interiors.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">The Roman Blind Advantage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Beautiful Pleating</h3>
                <p className="text-gray-300">
                  When raised, Roman blinds fold into elegant, uniform pleats that add texture and visual interest to your windows. This creates a sophisticated look that's perfect for both modern and traditional Saddleworth homes.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellent Light Control</h3>
                <p className="text-gray-300">
                  Roman blinds provide excellent privacy and light control. Choose from light-filtering fabrics that allow soft natural light or blackout options for complete darkness in bedrooms.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Fabric Versatility</h3>
                <p className="text-gray-300">
                  Available in hundreds of fabrics, patterns, and textures to complement any interior design. From luxurious silks and linens to practical cottons and blends.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Child Safe Design</h3>
                <p className="text-gray-300">
                  With no dangling cords or chains, Roman blinds are completely child-safe. The innovative design eliminates any safety risks while maintaining full functionality.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Fabric Collections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Luxury Collection</h3>
                <p className="text-gray-300 mb-4">
                  Premium fabrics including silks, linens, and high-quality blends. Perfect for formal living areas, dining rooms, and master bedrooms where you want to make a statement.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Silk and silk-blend fabrics</li>
                  <li>• Luxury linen textures</li>
                  <li>• Designer patterns and weaves</li>
                  <li>• Custom color matching available</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Practical Collection</h3>
                <p className="text-gray-300 mb-4">
                  Durable, easy-to-maintain fabrics perfect for family homes, kitchens, and high-traffic areas. These fabrics are designed to withstand daily use while looking beautiful.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Easy-clean cotton blends</li>
                  <li>• Moisture-resistant options</li>
                  <li>• Washable and wipeable fabrics</li>
                  <li>• UV-resistant for sun protection</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Pattern & Texture Options</h3>
                <p className="text-gray-300 mb-4">
                  From subtle textures that add depth to bold patterns that make a statement, our Roman blind collection offers something for every taste and interior style.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Subtle textures and weaves</li>
                  <li>• Contemporary geometric patterns</li>
                  <li>• Traditional florals and damasks</li>
                  <li>• Custom fabric options available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Perfect for Saddleworth Properties</h2>
            <p className="text-gray-300 text-center mb-8">
              Roman blinds are particularly well-suited to Saddleworth's architectural diversity. The soft, elegant folds complement both the clean lines of modern homes in Greenfield and the period charm of Victorian terraces in Uppermill.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Fabric Consultation</h3>
                <p className="text-sm text-gray-400">We help you choose the perfect fabric for your style and needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Precise Measuring</h3>
                <p className="text-sm text-gray-400">Accurate measurements ensure perfect fitting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Custom Manufacturing</h3>
                <p className="text-sm text-gray-400">Your Roman blinds are made to order</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-400">Expert fitting with attention to detail</p>
              </div>
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Add Elegance to Your Windows</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how Roman blinds can transform your Saddleworth home with their perfect blend of functionality and style. Book your consultation today.
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

          <div className="flex justify-center items-center gap-8 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Saddleworth Specialists</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RomanBlinds
