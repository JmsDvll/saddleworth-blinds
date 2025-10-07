import React from 'react'
import { Link } from 'react-router-dom'

const PerfectFitBlinds = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Perfect Fit Blinds -
                <span className="text-brand-gold block">No Drilling Required</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows. No mess, no fuss, just perfect blinds that look stunning and work beautifully.
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
                  <p className="text-sm font-medium">No Drilling Required</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Perfect Integration</p>
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
              <img
                src="/images/optimized/perfectfit-monet-flower-1600.jpg"
                alt="Perfect Fit blinds installed in a Saddleworth conservatory"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">

        {/* Content Sections */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Perfect Fit Blinds Are Perfect for Saddleworth Homes</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Perfect Fit blinds are the ideal solution for modern UPVC windows. They clip directly into your window frame without any drilling or screws, making them perfect for rented properties, conservatories, and homeowners who want a clean, professional installation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">The Perfect Fit Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">No Drilling Required</h3>
                <p className="text-gray-300">
                  Our Perfect Fit blinds use a unique clip system that attaches directly to your UPVC window frame. No holes, no mess, no damage to your property. Perfect for tenants and homeowners who want to avoid permanent modifications.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Perfect Integration</h3>
                <p className="text-gray-300">
                  The blinds sit flush within the window frame, creating a seamless, integrated look. They move with the window when you open it, maintaining perfect alignment and functionality.
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
                  With no cords or chains, Perfect Fit blinds are completely child-safe. The innovative design eliminates any dangling parts that could pose a safety risk to children or pets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Technical Excellence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">UPVC Compatible</h3>
                <p className="text-sm text-gray-400">Designed specifically for modern UPVC window frames</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Clip System</h3>
                <p className="text-sm text-gray-400">Secure attachment without drilling or screws</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Perfect Alignment</h3>
                <p className="text-sm text-gray-400">Blinds stay perfectly positioned when windows open</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Child Safe</h3>
                <p className="text-sm text-gray-400">No cords, chains, or dangling parts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">5</div>
                <h3 className="font-semibold text-white mb-2">Easy Operation</h3>
                <p className="text-sm text-gray-400">Smooth, reliable mechanism</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">6</div>
                <h3 className="font-semibold text-white mb-2">UV Protection</h3>
                <p className="text-sm text-gray-400">Protects furniture and flooring from sun damage</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Perfect for Saddleworth Properties</h2>
            <p className="text-gray-300 text-center mb-8">
              Whether you have a modern new-build in Greenfield or a period property with UPVC windows in Delph, Perfect Fit blinds offer the perfect solution. They work beautifully with all types of UPVC windows and provide a clean, professional finish.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-400">We assess your windows and discuss your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Precise Measuring</h3>
                <p className="text-sm text-gray-400">Accurate measurements ensure perfect fitting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Custom Manufacturing</h3>
                <p className="text-sm text-gray-400">Your Perfect Fit blinds are made to order</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-400">Quick, clean installation with no mess</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect Fit Blinds Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/perfectfit-monet-flower-400.jpg"
                alt="Perfect Fit Monet Flower blind in a Saddleworth conservatory"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Monet Flower</h3>
                <p className="text-sm text-gray-400">Elegant floral pattern for conservatories</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/perfectfit-blind-white-400.jpg"
                alt="White Perfect Fit blind providing clean aesthetics"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Classic White</h3>
                <p className="text-sm text-gray-400">Clean and timeless for modern homes</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/perfectfit-blind-white-400.jpg"
                alt="Celeste Perfect Fit blind in soft blue tones"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Celeste Blue</h3>
                <p className="text-sm text-gray-400">Soft blue tones for peaceful interiors</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/perfectfit-blind-white-400.jpg"
                alt="Perfect Fit blinds in neutral concrete tones"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Concrete Tones</h3>
                <p className="text-sm text-gray-400">Modern neutral colors for contemporary homes</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Windows Without the Mess</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the perfect fit difference. Book your free consultation today and discover how Perfect Fit blinds can enhance your Saddleworth home without any drilling or damage.
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

export default PerfectFitBlinds
