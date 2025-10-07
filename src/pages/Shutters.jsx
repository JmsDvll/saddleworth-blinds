import React from 'react'
import { Link } from 'react-router-dom'
import ShuttersCarousel from '../components/ShuttersCarousel'

const Shutters = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Luxury Plantation
                <span className="text-brand-gold block">Shutters</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Want to add real wow factor? Plantation shutters are the ultimate luxury. They look stunning, add value to your home, and last for decades. The perfect investment for discerning Saddleworth homeowners.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Increases Property Value</p>
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
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Lifetime Investment</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <ShuttersCarousel showTitle={false} showDescription={false} />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">

        {/* Content Sections */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Plantation Shutters Are the Ultimate Investment</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Plantation shutters represent the pinnacle of window treatment luxury. Crafted from premium materials and built to last, they add instant elegance and significant value to any Saddleworth property. From Victorian terraces in Uppermill to modern barn conversions in Diggle, shutters provide timeless appeal and exceptional functionality.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">The Plantation Shutter Advantage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Property Value</h3>
                <p className="text-gray-300">
                  Plantation shutters are widely regarded as one of the best home improvements for return on investment. They add kerb appeal, interior elegance, and can increase your property's value by up to 10%.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Superior Light Control</h3>
                <p className="text-gray-300">
                  Adjustable louvres give you complete control over natural light. From complete privacy to welcoming sunlight, you can create the perfect ambiance for any time of day or activity.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Energy Efficiency</h3>
                <p className="text-gray-300">
                  Shutters provide excellent insulation, helping to keep your home warm in winter and cool in summer. This can significantly reduce your energy bills while maintaining comfortable room temperatures year-round.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Timeless Elegance</h3>
                <p className="text-gray-300">
                  Unlike trends that come and go, plantation shutters have been popular for centuries and will never go out of style. They complement both traditional and contemporary interiors beautifully.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Premium Materials & Craftsmanship</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Solid Wood Shutters</h3>
                <p className="text-gray-300 mb-4">
                  Our premium hardwood shutters are crafted from sustainable sources and finished to perfection. Available in a range of wood species and stains to match your interior perfectly.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Premium hardwood construction for durability</li>
                  <li>• Beautiful natural grain patterns</li>
                  <li>• Wide range of stain and paint finishes</li>
                  <li>• Excellent thermal and acoustic properties</li>
                  <li>• 50+ year lifespan with proper care</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">MDF Shutters</h3>
                <p className="text-gray-300 mb-4">
                  High-quality MDF shutters offer the look of wood with enhanced moisture resistance. Perfect for bathrooms, kitchens, and humid environments like Saddleworth's Pennine climate.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Moisture and humidity resistant</li>
                  <li>• Smooth, paint-ready surface</li>
                  <li>• Won't warp, twist, or fade</li>
                  <li>• Excellent value for money</li>
                  <li>• Perfect for high-humidity areas</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Louvre Options</h3>
                <p className="text-gray-300 mb-4">
                  Choose the perfect louvre size for your windows and style preferences:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• <strong>47mm:</strong> Traditional colonial style</li>
                  <li>• <strong>63mm:</strong> Contemporary, clean lines</li>
                  <li>• <strong>89mm:</strong> Maximum light control and view</li>
                  <li>• <strong>114mm:</strong> Bold, architectural statement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Perfect for Saddleworth Properties</h2>
            <p className="text-gray-300 text-center mb-8">
              Saddleworth's diverse architectural heritage makes plantation shutters an ideal choice. Whether you have a stone cottage in Delph, a Victorian terrace in Uppermill, or a modern new-build in Greenfield, shutters enhance the character while providing modern functionality.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Premium Installation Process</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Design Consultation</h3>
                <p className="text-sm text-gray-400">We discuss your vision and show samples in your home</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Precise Measuring</h3>
                <p className="text-sm text-gray-400">Millimeter-perfect measurements for seamless fitting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Custom Manufacturing</h3>
                <p className="text-sm text-gray-400">Your shutters are handcrafted to your specifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-400">Expert fitting with attention to every detail</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">5</div>
                <h3 className="font-semibold text-white mb-2">Client Handover</h3>
                <p className="text-sm text-gray-400">We show you how to operate and maintain your shutters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shutters Carousel */}
        <div className="mt-16">
          <ShuttersCarousel />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Home with Plantation Shutters</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join discerning homeowners across Saddleworth who've chosen plantation shutters to add luxury, value, and timeless elegance to their properties. Book your consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Your Free Consultation
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

export default Shutters
