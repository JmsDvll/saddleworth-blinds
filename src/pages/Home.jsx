import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'
import ReviewsSection from '../components/ReviewsSection'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Beautiful Blinds for Your
                <span className="text-brand-gold block">Saddleworth Home</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Searching for the ideal blinds? Since 2003, we've been helping families in{' '}
                <Link to="/areas/uppermill" className="text-brand-gold hover:text-brand-green transition-colors">
                  Uppermill
                </Link>
                ,{' '}
                <Link to="/areas/greenfield" className="text-brand-gold hover:text-brand-green transition-colors">
                  Greenfield
                </Link>{' '}
                and{' '}
                <Link to="/areas/diggle" className="text-brand-gold hover:text-brand-green transition-colors">
                  Diggle
                </Link>{' '}
                enhance their homes. Whether it's a snug cottage or a sleek barn conversion, we understand what suits the unique charm of Saddleworth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="btn btn-primary text-lg px-8 py-4 text-center"
                >
                  Get Free Quote
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
                  <p className="text-sm font-medium">Free No Obligation Quotation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">5 Star Reviewed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-900 font-bold text-lg">£</span>
                  </div>
                  <p className="text-sm font-medium">Fair & Honest Prices</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/optimized/vision-ferrara-anthracite-1600.jpg"
                alt="Premium Ferrara Anthracite vision blinds in a contemporary Saddleworth home"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Discover Your Dream Blinds</h2>
            <p className="text-xl text-gray-300">"We Put Other companies in the shade"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Roller Blinds', description: 'Simple, stylish and practical - roller blinds work brilliantly in any room.', link: '/roller-blinds', image: '/images/optimized/roller-zen-kiwi-400.jpg' },
              { name: 'Venetian Blinds', description: 'The classic choice that never goes out of style. Perfect light control with a twist of the wand.', link: '/venetian-blinds', image: '/images/optimized/venetian-starwood-400.jpg' },
              { name: 'Vertical Blinds', description: 'Got big windows or patio doors? Vertical blinds are your best friend.', link: '/vertical-blinds', image: '/images/optimized/vertical-grey-400.jpg' },
              { name: 'Vision Blinds', description: 'The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them.', link: '/vision-blinds', image: '/images/optimized/vision-capri-concrete-400.jpg' },
              { name: 'Perfect Fit Blinds', description: 'Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows.', link: '/perfect-fit-blinds', image: '/images/optimized/perfectfit-monet-flower-400.jpg' },
              { name: 'Shutters', description: 'Want to add real wow factor? Plantation shutters are the ultimate luxury.', link: '/shutters', image: '/images/optimized/shutters-cotton-89mm-400.jpg' },
              { name: 'Roman Blinds', description: 'For a touch of elegance and sophistication, Roman blinds are perfect.', link: '/roman-blinds', image: '/images/optimized/venetian-starwood-400.jpg' },
              { name: 'Curtains', description: 'Sometimes nothing beats the classic look of curtains.', link: '/curtains', image: '/images/optimized/vision-viale-linen-400.jpg' },
              { name: 'Allusion Blinds', description: 'Experience contemporary elegance with flowing fabric panels that combine curtains with blinds.', link: '/allusion-blinds', image: '/images/optimized/vision-viale-linen-400.jpg' }
            ].map((service) => (
              <Link
                key={service.name}
                to={service.link}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible. No pressure, no obligation - just honest advice and a friendly chat over a cuppa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book-appointment"
              className="btn bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-4"
            >
              Book Your Free Visit
            </Link>
            <a
              href="tel:01457597091"
              className="btn bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-4"
            >
              Call for a Chat
            </a>
          </div>

          <div className="flex justify-center items-center gap-8 mt-8 text-gray-800">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Covering All Saddleworth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900">
        <ReviewsSection />
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <FAQSection />
      </section>
    </>
  )
}

export default Home
