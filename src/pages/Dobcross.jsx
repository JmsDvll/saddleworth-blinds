import React from 'react'
import { Link } from 'react-router-dom'

const Dobcross = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Window Blinds in
                <span className="text-brand-gold block">Dobcross</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Beautiful window blinds for Dobcross homes. From period stone properties to modern conversions, we understand what works best in this historic Saddleworth village.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="btn btn-primary text-lg px-8 py-4 text-center"
                >
                  Book Free Quote in Dobcross
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
                  <p className="text-sm font-medium">Period Stone Properties</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Local Dobcross Experts</p>
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
              <img
                src="/images/optimized/vision-palermo-silver-1600.jpg"
                alt="Beautiful window blinds in a Dobcross home"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Window Blinds for Dobcross Homes</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Dobcross is a charming Saddleworth village with a rich industrial heritage and beautiful stone-built properties. From traditional weaver's cottages to modern family homes, we've been fitting blinds in Dobcross for over 20 years.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Perfect Blinds for Dobcross Properties</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Period Stone Properties</h3>
                  <p className="text-gray-300 mb-4">
                    Many Dobcross homes are period properties with character features and original windows. We specialise in solutions that preserve the historic charm while providing modern functionality.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Wooden venetian blinds for authentic period charm</li>
                    <li>• Roman blinds for elegant window treatments</li>
                    <li>• Shutters that complement stone architecture</li>
                    <li>• Motorised options for hard-to-reach windows</li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Modern Conversions</h3>
                  <p className="text-gray-300 mb-4">
                    Many Dobcross properties have been extended with contemporary additions. We help bridge the gap between old and new with stylish, modern window treatments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Sleek roller blinds for clean, modern lines</li>
                    <li>• Vision blinds for open-plan living spaces</li>
                    <li>• Vertical blinds for bi-fold doors and extensions</li>
                    <li>• Perfect Fit blinds for UPVC windows</li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Village Heritage</h3>
                  <p className="text-gray-300 mb-4">
                    Dobcross's rich industrial heritage and village community atmosphere means many homes benefit from window treatments that provide privacy while maintaining the welcoming feel.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Vision blinds for privacy without blocking views</li>
                    <li>• Sunscreen fabrics that reduce glare</li>
                    <li>• Motorised options for convenience</li>
                    <li>• UV protection to preserve furniture and flooring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Local Expertise in Dobcross</h2>
              <p className="text-gray-300 text-center mb-8">
                Having fitted blinds throughout Dobcross for two decades, we understand the unique challenges and opportunities of local properties. From wonky stone walls to modern steel beams, we've seen it all.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Dobcross Service</h2>
              <p className="text-gray-300 text-center mb-8">
                We offer completely free home consultations throughout Dobcross, including evenings and weekends to suit your schedule. Our experienced team will come to your home, measure your windows, show you samples, and provide honest advice.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us in Dobcross?</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                  <h3 className="font-semibold text-white mb-2">Local Knowledge</h3>
                  <p className="text-sm text-gray-400">We understand Dobcross's unique architectural styles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                  <h3 className="font-semibold text-white mb-2">20+ Years Experience</h3>
                  <p className="text-sm text-gray-400">Fitting blinds in hundreds of local homes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                  <h3 className="font-semibold text-white mb-2">Professional Installation</h3>
                  <p className="text-sm text-gray-400">Expert fitting included in every quote</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                  <h3 className="font-semibold text-white mb-2">Comprehensive Warranty</h3>
                  <p className="text-sm text-gray-400">Full warranty on all products and installation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">5</div>
                  <h3 className="font-semibold text-white mb-2">Fair Pricing</h3>
                  <p className="text-sm text-gray-400">Competitive prices with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Dobcross Home?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible in your Dobcross home.
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
                <span className="text-sm">Covering Dobcross</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dobcross
