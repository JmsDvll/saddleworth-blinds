import React from 'react'
import { Link } from 'react-router-dom'
import VisionBlindsCarousel from '../components/VisionBlindsCarousel'
import FAQSection from '../components/FAQSection'
import { colors, spacing, typography, interactive } from '../styles'

const VisionBlinds = () => {
  const visionFaqs = [
    {
      question: "What makes Vision blinds different from other blinds?",
      answer: "Vision blinds feature innovative dual-layer fabric technology that allows you to have complete privacy when the layers are aligned, or beautiful diffused light when separated. Unlike traditional blinds, they offer the perfect balance of privacy and natural light control."
    },
    {
      question: "Are Vision blinds suitable for all window types?",
      answer: "Vision blinds are incredibly versatile and can be fitted to most window types including casement windows, sash windows, and even conservatories. They're particularly popular for larger windows and patio doors where you want both privacy and view options."
    },
    {
      question: "How do I clean and maintain Vision blinds?",
      answer: "Vision blinds are very low maintenance. The fabric can be gently vacuumed with a soft brush attachment, or spot cleaned with a damp cloth. Avoid harsh chemicals or soaking. Regular light cleaning will keep them looking pristine for years."
    },
    {
      question: "Can Vision blinds be motorised?",
      answer: "Absolutely! We offer motorised Vision blinds with remote control operation. This is perfect for hard-to-reach windows or for the ultimate convenience. Motorisation also allows for smart home integration and automated scheduling."
    },
    {
      question: "What's the difference between Vision blinds and other day/night blinds?",
      answer: "Vision blinds are a premium alternative to standard day/night blinds. They feature superior fabric quality, smoother operation, and more precise light control. The dual-layer system provides better insulation and a more refined aesthetic than basic alternatives."
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
                Vision Blinds -
                <span className="text-brand-gold block">The Clever Choice</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them. Dual layers that line up or separate - it's like magic.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Privacy When You Need It</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Light Control at Your Fingertips</p>
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
              <VisionBlindsCarousel showTitle={false} showDescription={false} />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto">

        {/* Content Sections */}
        <div className="space-y-16">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 rounded-3xl -mx-8"></div>
            <div className="relative z-10">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent">
                Why Vision Blinds Are Perfect for Saddleworth Homes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Vision blinds represent the pinnacle of modern window treatment technology. These innovative blinds feature dual layers of fabric that can be aligned to provide complete privacy or separated to allow natural light while maintaining your view.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Perfect for contemporary homes in Diggle and modern extensions in Uppermill, they combine functionality with contemporary aesthetics.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-brand-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Innovative Technology</h3>
                      <p className="text-sm text-gray-400">Dual-layer fabric system</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Our Vision blinds use cutting-edge fabric technology that gives you complete control over light and privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className={`${typography.h2} ${spacing.margin.bottomXl} text-center`}>The Vision Blind Advantage</h2>
            <div className={`${spacing.layout.grid} md:grid-cols-3 ${spacing.gap.lg}`}>
              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg} text-center`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Privacy When You Need It</h3>
                <p className={colors.text.secondary}>
                  When the fabric layers are aligned, Vision blinds provide complete privacy from the outside while allowing you to see out clearly. Perfect for ground floor windows in busy Saddleworth streets.
                </p>
              </div>

              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg} text-center`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Light Control at Your Fingertips</h3>
                <p className={colors.text.secondary}>
                  Adjust the blind to let in exactly the right amount of light. From complete blackout for bedrooms to soft diffused light for living spaces - you have total control.
                </p>
              </div>

              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg} text-center`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Modern Aesthetic</h3>
                <p className={colors.text.secondary}>
                  Clean lines and contemporary styling make Vision blinds the perfect choice for modern homes. Available in a wide range of fabrics and colors to complement any interior design.
                </p>
              </div>
            </div>
          </div>

          <div className={`${colors.background.gradientSubtle} rounded-2xl ${spacing.padding.xl} border ${colors.border.accent}/20`}>
            <div className={`text-center ${spacing.margin.bottomXl}`}>
              <h2 className={`${typography.h2} ${spacing.margin.bottomMd} ${colors.gradients.textAccent}`}>
                Technical Excellence
              </h2>
              <div className={`w-16 h-1 ${colors.gradients.brandButton} mx-auto rounded-full`}></div>
            </div>
            <div className={`${spacing.layout.grid} md:grid-cols-3 lg:grid-cols-5 ${spacing.gap.lg}`}>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>1</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Dual Layer System</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Innovative fabric layers that align or separate</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>2</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Child Safe</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>No cords or chains - safe for families</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>3</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Easy Operation</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Smooth, reliable mechanism</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>4</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Motorised Options</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Remote control and smart home integration</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>5</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>UV Protection</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Protects furniture and flooring from sun damage</p>
              </div>
            </div>
          </div>

          <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.xl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>Perfect for Saddleworth Properties</h2>
            <p className={`${colors.text.secondary} text-center ${spacing.margin.bottomXl}`}>
              Vision blinds are particularly well-suited to Saddleworth's diverse architectural styles. From period cottages requiring privacy solutions to modern barn conversions needing contemporary styling, Vision blinds bridge the gap beautifully.
            </p>
          </div>

          <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.xl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>Our Installation Process</h2>
            <div className={`${spacing.layout.grid} md:grid-cols-2 lg:grid-cols-4 ${spacing.gap.lg}`}>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>1</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Free Consultation</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>We visit your home to discuss your requirements and show samples</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>2</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Precise Measuring</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Accurate measurements ensure perfect fitting</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>3</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Quality Manufacturing</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Your Vision blinds are made to order</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>4</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Professional Installation</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Expert fitting with minimal disruption</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Blinds Carousel */}
        <div className="mt-16">
          <VisionBlindsCarousel />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Vision Difference</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how Vision blinds can transform your Saddleworth home. Book your free consultation today and see the magic for yourself.
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

          <div className={`flex justify-center items-center ${spacing.gap.lg} ${spacing.margin.topLg} ${colors.text.muted}`}>
            <div className={`flex items-center ${spacing.gap.xs}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>Completely Free</span>
            </div>
            <div className={`flex items-center ${spacing.gap.xs}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>No Obligation</span>
            </div>
            <div className={`flex items-center ${spacing.gap.xs}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>Saddleworth Specialists</span>
            </div>
          </div>
        </div>

        {/* Vision Blinds FAQ */}
        <FAQSection
          title="Vision Blinds Questions"
          description="Everything you need to know about Vision blinds for your Saddleworth home"
          faqs={visionFaqs}
          className={`${colors.background.primary}`}
        />
        </div>
      </div>
    </div>
  )
}

export default VisionBlinds
