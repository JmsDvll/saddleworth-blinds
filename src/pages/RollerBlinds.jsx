import React from 'react'
import { Link } from 'react-router-dom'
import RollerBlindsCarousel from '../components/RollerBlindsCarousel'
import { colors, spacing, typography, interactive } from '../styles'

const RollerBlinds = () => {
  return (
    <div className="min-h-screen">
      <section className={`relative ${colors.background.gradient} ${colors.text.white}`}>
        <div className="container py-20 lg:py-32">
          <div className={`grid lg:grid-cols-2 ${spacing.gap.xl} items-center`}>
            <div className={spacing.stack.xl}>
              <h1 className={typography.h1}>
                Premium Roller Blinds for
                <span className={`${colors.text.gold} block`}>Saddleworth Homes</span>
              </h1>
              <p className={`${typography.lead} ${colors.text.lightGray}`}>
                Transform your windows with our stunning made-to-measure roller blinds. From cosy cottages in Uppermill to modern homes in Greenfield, we've got the perfect solution for every room in your house.
              </p>

              <div className={`flex flex-col sm:flex-row ${spacing.gap.md}`}>
                <Link
                  to="/book-appointment"
                  className={`${interactive.button.primary} ${interactive.button.large}`}
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:01457597091"
                  className={`${interactive.button.secondary} ${interactive.button.large} flex items-center justify-center ${spacing.gap.xs}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">01457 597091</span>
                </a>
              </div>

              <div className={`grid grid-cols-3 ${spacing.gap.lg} ${spacing.margin.topLg}`}>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>5 Year Guarantee</p>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>Local Saddleworth Experts</p>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>Free Home Consultation</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <RollerBlindsCarousel showTitle={false} showDescription={false} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${spacing.section.py} ${colors.background.dark}`}>
        <div className="container">
          <div className={`max-w-4xl mx-auto ${spacing.stack.xl}`}>
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 rounded-3xl -mx-8"></div>
              <div className="relative z-10">
                <div className={`w-24 h-1 ${colors.gradients.brandButton} mx-auto ${spacing.margin.bottomLg} rounded-full`}></div>
                <h2 className={`${typography.h2} ${spacing.margin.bottomLg} ${colors.gradients.textAccent}`}>
                  Why Roller Blinds Are Perfect for Saddleworth Homes
                </h2>
                <div className={`w-24 h-1 ${colors.gradients.brandButton} mx-auto ${spacing.margin.bottomXl} rounded-full`}></div>
                <div className={`grid md:grid-cols-2 ${spacing.gap.lg} items-center max-w-5xl mx-auto`}>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Simple, stylish and incredibly practical - discover why roller blinds have become the go-to choice for homeowners across Saddleworth.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Whether you're looking to control the morning sun streaming into your Diggle kitchen or create the perfect sleep environment in your Delph bedroom, our made-to-measure roller blinds offer the ideal solution.
                  </p>
                </div>
                <div className={`${colors.background.secondary}/50 rounded-lg ${spacing.padding.lg} border ${colors.border.accent}/20`}>
                  <div className={`flex items-center ${spacing.gap.md} ${spacing.margin.bottomMd}`}>
                    <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center`}>
                      <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${typography.body} font-semibold ${colors.text.white}`}>Made-to-Measure</h3>
                      <p className={`${typography.bodySmall} ${colors.text.muted}`}>Perfect fit guaranteed</p>
                    </div>
                  </div>
                  <p className={`${colors.text.secondary}`}>
                    Every roller blind is custom-made to fit your windows perfectly, ensuring a professional finish every time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className={`${typography.h2} ${spacing.margin.bottomXl} text-center`}>Choose Your Perfect Roller Blind</h2>
            <div className={`${spacing.layout.grid} md:grid-cols-3 ${spacing.gap.lg}`}>
              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd} text-center`}>Blackout Roller Blinds</h3>
                <p className={`${colors.text.secondary} ${spacing.margin.bottomMd}`}>
                  Perfect for bedrooms and nurseries across Saddleworth. Our blackout fabrics block 100% of light, helping you get a great night's sleep. Particularly popular in Uppermill where streetlights can be an issue.
                </p>
                <ul className={`${spacing.stack.sm} ${typography.bodySmall} ${colors.text.muted}`}>
                  <li>• Complete darkness for better sleep</li>
                  <li>• Reduces noise from outside</li>
                  <li>• Helps regulate room temperature</li>
                  <li>• Perfect for shift workers</li>
                </ul>
              </div>

              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd} text-center`}>Sunscreen Roller Blinds</h3>
                <p className={`${colors.text.secondary} ${spacing.margin.bottomMd}`}>
                  Ideal for living spaces where you want to maintain your view whilst reducing glare. These clever blinds are a favourite in Diggle properties with stunning countryside views.
                </p>
                <ul className={`${spacing.stack.sm} ${typography.bodySmall} ${colors.text.muted}`}>
                  <li>• Reduces glare without blocking views</li>
                  <li>• Protects furniture from UV damage</li>
                  <li>• Maintains privacy during the day</li>
                  <li>• Energy efficient - reduces heat gain</li>
                </ul>
              </div>

              <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd} text-center`}>Decorative Roller Blinds</h3>
                <p className={`${colors.text.secondary} ${spacing.margin.bottomMd}`}>
                  Add personality to any room with our extensive range of patterns and textures. From contemporary designs perfect for modern Dobcross developments to traditional patterns.
                </p>
                <ul className={`${spacing.stack.sm} ${typography.bodySmall} ${colors.text.muted}`}>
                  <li>• Hundreds of designs to choose from</li>
                  <li>• Match any interior style</li>
                  <li>• Light filtering or room darkening options</li>
                  <li>• Wipeable and washable fabrics available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.xl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>Your Local Roller Blind Experts</h2>
            <p className={`${colors.text.secondary} text-center ${spacing.margin.bottomXl}`}>
              Every village in Saddleworth has its own character, and we've worked in them all. From Victorian terraces in Uppermill to converted barns in Diggle, we've fitted blinds in every type of Saddleworth home.
            </p>

            <div className={`${spacing.layout.grid} md:grid-cols-4 ${spacing.gap.lg}`}>
              <div className="text-center">
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Uppermill & Diggle</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>From Victorian terraces to stone cottages</p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Delph & Greenfield</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Family homes and new builds</p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Dobcross & Lydgate</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Conversions and period properties</p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                  <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>20+ Years Experience</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Trusted local expertise</p>
              </div>
            </div>
          </div>

          <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.xl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>How We Make It Easy</h2>
            <p className={`${colors.text.secondary} text-center ${spacing.margin.bottomXl}`}>
              From consultation to installation, we handle everything
            </p>
            <div className={`${spacing.layout.grid} md:grid-cols-4 ${spacing.gap.lg}`}>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>1</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Free Consultation</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>We'll visit your home, measure up, and give honest advice</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>2</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Made to Measure</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Your blinds manufactured to exact specifications</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>3</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Professional Fitting</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>Expert installation included in every quote</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd} ${colors.text.dark} font-bold text-lg`}>4</div>
                <h3 className={`${typography.body} font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Aftercare Support</h3>
                <p className={`${typography.bodySmall} ${colors.text.muted}`}>5-year guarantee and ongoing support</p>
              </div>
            </div>
          </div>
        </div>


        <div className={`${spacing.margin.topXl} text-center`}>
          <h2 className={`${typography.h2} ${spacing.margin.bottomLg}`}>Ready to Transform Your Windows?</h2>
          <p className={`${typography.lead} ${colors.text.lightGray} ${spacing.margin.bottomXl}`}>
            Join hundreds of happy customers across Saddleworth who've chosen Sunshine Blinds for their roller blinds. From initial consultation to perfect installation, we make the whole process easy.
          </p>

          <div className={`flex flex-col sm:flex-row ${spacing.gap.md} justify-center`}>
            <Link
              to="/book-appointment"
              className={`${interactive.button.primary} ${interactive.button.large}`}
            >
              Book Your Free Consultation
            </Link>
            <a
              href="tel:01457597091"
              className={`${interactive.button.secondary} ${interactive.button.large}`}
            >
              <span className="font-medium">01457 597091</span>
            </a>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default RollerBlinds
