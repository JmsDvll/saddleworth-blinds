import React from 'react'
import { Link } from 'react-router-dom'
import RollerBlindsCarousel from '../components/RollerBlindsCarousel'

const RollerBlinds = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium Roller Blinds for
                <span className="text-brand-gold block">Saddleworth Homes</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your windows with our stunning made-to-measure roller blinds. From cosy cottages in Uppermill to modern homes in Greenfield, we've got the perfect solution for every room in your house.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">5 Year Guarantee</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Free Home Consultation</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <RollerBlindsCarousel showTitle={false} showDescription={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-800">

        {/* Content Sections */}
        <div className="space-y-16">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 rounded-3xl -mx-8"></div>
            <div className="relative z-10">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent">
                Why Roller Blinds Are Perfect for Saddleworth Homes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Simple, stylish and incredibly practical - discover why roller blinds have become the go-to choice for homeowners across Saddleworth.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Whether you're looking to control the morning sun streaming into your Diggle kitchen or create the perfect sleep environment in your Delph bedroom, our made-to-measure roller blinds offer the ideal solution.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-brand-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Made-to-Measure</h3>
                      <p className="text-sm text-gray-400">Perfect fit guaranteed</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Every roller blind is custom-made to fit your windows perfectly, ensuring a professional finish every time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Perfect Roller Blind</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Blackout Roller Blinds</h3>
                <p className="text-gray-300 mb-4">
                  Perfect for bedrooms and nurseries across Saddleworth. Our blackout fabrics block 100% of light, helping you get a great night's sleep. Particularly popular in Uppermill where streetlights can be an issue.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Complete darkness for better sleep</li>
                  <li>• Reduces noise from outside</li>
                  <li>• Helps regulate room temperature</li>
                  <li>• Perfect for shift workers</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Sunscreen Roller Blinds</h3>
                <p className="text-gray-300 mb-4">
                  Ideal for living spaces where you want to maintain your view whilst reducing glare. These clever blinds are a favourite in Diggle properties with stunning countryside views.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Reduces glare without blocking views</li>
                  <li>• Protects furniture from UV damage</li>
                  <li>• Maintains privacy during the day</li>
                  <li>• Energy efficient - reduces heat gain</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Decorative Roller Blinds</h3>
                <p className="text-gray-300 mb-4">
                  Add personality to any room with our extensive range of patterns and textures. From contemporary designs perfect for modern Dobcross developments to traditional patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Hundreds of designs to choose from</li>
                  <li>• Match any interior style</li>
                  <li>• Light filtering or room darkening options</li>
                  <li>• Wipeable and washable fabrics available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Local Roller Blind Experts</h2>
            <p className="text-gray-300 text-center mb-8">
              Every village in Saddleworth has its own character, and we've worked in them all. From Victorian terraces in Uppermill to converted barns in Diggle, we've fitted blinds in every type of Saddleworth home.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Uppermill & Diggle</h3>
                <p className="text-sm text-gray-400">From Victorian terraces to stone cottages</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Delph & Greenfield</h3>
                <p className="text-sm text-gray-400">Family homes and new builds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Dobcross & Lydgate</h3>
                <p className="text-sm text-gray-400">Conversions and period properties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">20+ Years Experience</h3>
                <p className="text-sm text-gray-400">Trusted local expertise</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">How We Make It Easy</h2>
            <p className="text-gray-300 text-center mb-8">
              From consultation to installation, we handle everything
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-400">We'll visit your home, measure up, and give honest advice</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Made to Measure</h3>
                <p className="text-sm text-gray-400">Your blinds manufactured to exact specifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Professional Fitting</h3>
                <p className="text-sm text-gray-400">Expert installation included in every quote</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Aftercare Support</h3>
                <p className="text-sm text-gray-400">5-year guarantee and ongoing support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roller Blinds Carousel */}
        <div className="mt-16">
          <RollerBlindsCarousel />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Windows?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of happy customers across Saddleworth who've chosen Sunshine Blinds for their roller blinds. From initial consultation to perfect installation, we make the whole process easy.
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
              Call 01457 597091
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RollerBlinds
