import React from 'react'
import { Link } from 'react-router-dom'

const VenetianBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Classic Venetian Blinds for
                <span className="text-brand-gold block">Saddleworth Homes</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                The timeless choice that never goes out of style. Perfect light control with a twist of the wand. Wood for warmth, aluminium for modern homes, or faux wood for practical luxury.
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
              <img
                src="/images/optimized/venetian-wood-natural-1600.jpg"
                alt="Premium venetian blinds in a Saddleworth living room"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Venetian Blinds Are Perfect for Saddleworth Homes</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The classic choice that never goes out of style. Perfect light control with a twist of the wand. Wood for warmth, aluminium for modern homes, or faux wood for practical luxury. Having fitted blinds throughout Saddleworth for over 20 years, we find roller blinds and venetian blinds are most popular. For period properties in Uppermill and Diggle, wooden venetians work beautifully. Modern homes often suit vision blinds or sleek roller blinds perfectly.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Perfect Venetian Blind</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Wooden Venetian Blinds</h3>
                <p className="text-gray-300 mb-4">
                  Crafted from premium hardwoods, our wooden venetian blinds offer natural beauty and exceptional durability. Perfect for character properties throughout Saddleworth where authenticity matters.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Premium hardwood construction</li>
                  <li>• Natural wood grain patterns</li>
                  <li>• Stained or painted finishes</li>
                  <li>• Excellent thermal properties</li>
                  <li>• Long-lasting investment</li>
                  <li>• Suitable for all room types</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Aluminium Venetian Blinds</h3>
                <p className="text-gray-300 mb-4">
                  Sleek and modern aluminium venetian blinds perfect for contemporary homes. Lightweight yet durable, with excellent light control and easy maintenance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Lightweight and durable</li>
                  <li>• Wide range of colours</li>
                  <li>• Easy to clean and maintain</li>
                  <li>• Perfect for modern interiors</li>
                  <li>• Moisture resistant</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Faux Wood Venetian Blinds</h3>
                <p className="text-gray-300 mb-4">
                  The perfect combination of wood's natural beauty with enhanced durability. Ideal for bathrooms and kitchens in Lydgate homes or humid environments like conservatories.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Looks like real wood</li>
                  <li>• Moisture and humidity resistant</li>
                  <li>• Won't warp or fade</li>
                  <li>• Easy to clean</li>
                  <li>• Affordable luxury</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Local Venetian Blind Experts</h2>
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

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Venetian Blind Inspiration Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/venetian-starwood-400.jpg"
                alt="Starwood Venetian blinds"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white">Starwood Natural</h3>
                <p className="text-sm text-gray-400">Classic wooden venetian blinds</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/venetian-wood-natural-400.jpg"
                alt="Natural wood venetian blinds"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white">Natural Wood</h3>
                <p className="text-sm text-gray-400">Premium hardwood venetians</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/venetian-wood-natural-400.jpg"
                alt="Grey venetian blinds"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white">Contemporary Grey</h3>
                <p className="text-sm text-gray-400">Modern aluminium venetians</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied Saddleworth customers who've trusted us with their window treatments. Let's discuss how we can enhance your home.
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
    </>
  )
}

export default VenetianBlinds
