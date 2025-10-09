import React from 'react'
import { Link } from 'react-router-dom'
import { colors, spacing, typography, interactive } from '../styles'

const AllusionBlinds = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Allusion Blinds -
                <span className="text-brand-gold block">Contemporary Elegance</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the perfect fusion of style and functionality with Allusion blinds. These innovative window treatments combine the softness of curtains with the precision of blinds, creating a truly unique and sophisticated window solution.
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
                  <p className="text-sm font-medium">Unique Fabric Flow</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Precision Light Control</p>
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
                src="/images/optimized/allusion-vista-snow-1600.jpg"
                alt="Allusion blinds in a contemporary Saddleworth home"
                className={`${interactive.image.responsive} rounded-lg shadow-2xl`}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Allusion Blinds Are Perfect for Modern Homes</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Allusion blinds represent the next evolution in window treatments, combining the flowing elegance of curtains with the precise light control of blinds. This unique system uses vertical fabric panels that can be drawn across the window, rotated to control light, and stacked neatly when not in use.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">The Allusion Blind Advantage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Unique Fabric Flow</h3>
                <p className="text-gray-300">
                  Unlike traditional blinds, Allusion blinds feature flowing fabric panels that create beautiful, soft folds. This creates a sophisticated, curtain-like appearance while maintaining the functionality of blinds.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Precision Light Control</h3>
                <p className="text-gray-300">
                  The vertical fabric panels can be rotated 180 degrees to control the amount of light entering your room. From complete privacy to welcoming sunlight, you have total control over your environment.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Seamless Operation</h3>
                <p className="text-gray-300">
                  Smooth, quiet operation with wand control makes Allusion blinds effortless to use. The innovative design eliminates cords and chains for a clean, modern aesthetic.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Contemporary Design</h3>
                <p className="text-gray-300">
                  The clean lines and flowing fabric create a distinctly modern look that's perfect for contemporary interiors. Available in a range of textures and colors to complement any design scheme.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Technical Excellence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Flowing Fabric Panels</h3>
                <p className="text-sm text-gray-400">Vertical fabric strips that create beautiful folds</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">180° Rotation</h3>
                <p className="text-sm text-gray-400">Complete light control from any angle</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Cordless Operation</h3>
                <p className="text-sm text-gray-400">Clean, modern aesthetic with wand control</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Child Safe</h3>
                <p className="text-sm text-gray-400">No dangling cords or chains</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">5</div>
                <h3 className="font-semibold text-white mb-2">Easy Maintenance</h3>
                <p className="text-sm text-gray-400">Simple to clean and maintain</p>
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
              Allusion blinds are particularly well-suited to modern homes and contemporary extensions throughout Saddleworth. From sleek new-builds in Greenfield to renovated properties in Uppermill, these blinds add a touch of contemporary elegance while providing excellent functionality.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">1</div>
                <h3 className="font-semibold text-white mb-2">Design Consultation</h3>
                <p className="text-sm text-gray-400">We discuss your vision and show fabric samples in your home</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">2</div>
                <h3 className="font-semibold text-white mb-2">Precise Measuring</h3>
                <p className="text-sm text-gray-400">Accurate measurements ensure perfect fitting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">3</div>
                <h3 className="font-semibold text-white mb-2">Custom Manufacturing</h3>
                <p className="text-sm text-gray-400">Your Allusion blinds are crafted to your specifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">4</div>
                <h3 className="font-semibold text-white mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-400">Expert fitting with attention to every detail</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3 text-gray-900 font-bold text-lg">5</div>
                <h3 className="font-semibold text-white mb-2">Client Handover</h3>
                <p className="text-sm text-gray-400">We show you how to operate and maintain your blinds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Allusion Blinds Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/allusion-vista-snow-400.jpg"
                alt="Contemporary Allusion blinds in a modern Saddleworth home"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Modern Elegance</h3>
                <p className="text-sm text-gray-400">Flowing fabric panels for contemporary homes</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/allusion-shadow-sand-400.jpg"
                alt="Allusion blinds providing perfect light control in living room"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Living Room Solution</h3>
                <p className="text-sm text-gray-400">Perfect light control for comfortable living</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/allusion-vista-snow-400.jpg"
                alt="Allusion blinds showing beautiful fabric texture and flow"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Fabric Detail</h3>
                <p className="text-sm text-gray-400">Beautiful texture and flowing movement</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src="/images/optimized/allusion-shadow-sand-400.jpg"
                alt="Contemporary Allusion blinds in neutral tones"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Neutral Tones</h3>
                <p className="text-sm text-gray-400">Versatile colors for any interior design</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Contemporary Elegance</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how Allusion blinds can transform your modern Saddleworth home with their unique combination of flowing fabric and precise light control. Book your consultation today.
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

export default AllusionBlinds
