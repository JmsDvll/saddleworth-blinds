import React from 'react'
import { Link } from 'react-router-dom'
import { typography, spacing, colors, interactive } from '../styles'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative ${colors.background.gradient} ${colors.text.white}`}>
        <div className={spacing.section.py}>
          <div className={`${spacing.layout.grid} ${spacing.layout.gridCols2} ${spacing.gap.xl} items-center`}>
            <div className={spacing.stack.lg}>
              <h1 className={typography.h1}>
                About Sunshine Blinds
                <span className={`${colors.text.gold} block`}>Saddleworth</span>
              </h1>
              <p className={`${typography.lead} ${colors.text.lightGray}`}>
          We're your local window blind specialists, proudly serving Saddleworth families since 2003. From our Shaw showroom, we bring expert advice, quality products, and professional fitting right to your door.
        </p>

              <div className={`flex flex-col sm:flex-row ${spacing.gap.md}`}>
                <Link
                  to="/book-appointment"
                  className={`${interactive.button.primary} ${interactive.button.large}`}
                >
                  Book Your Free Consultation
                </Link>
                <a
                  href="tel:01457597091"
                  className={`${interactive.button.secondary} ${interactive.button.large} flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 01457 597091
                </a>
              </div>

              <div className={`grid grid-cols-3 ${spacing.gap.lg} ${spacing.margin.topLg}`}>
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
                  <p className={`${typography.bodySmall} font-medium`}>20+ Years Experience</p>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>5 Year Guarantee</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/optimized/vision-palermo-silver-1600.jpg"
                alt="Sunshine Blinds Saddleworth showroom and team"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div className={spacing.section.py}>
        <div className="max-w-4xl mx-auto">
          <div className={spacing.stack.xl}>
            <div className="text-center">
              <div className={spacing.margin.bottomLg}>
                <div className={`w-16 h-1 ${colors.background.goldGradient} mx-auto ${spacing.margin.bottomLg} rounded-full`}></div>
              </div>
              <h2 className={`${typography.h2} ${spacing.margin.bottomLg}`}>Our Saddleworth Story</h2>
              <p className={`${typography.lead} ${colors.text.lightGray} max-w-3xl mx-auto`}>
            Over 20 years of bringing beautiful blinds to local families. We started our journey in 2003 with a simple mission: to bring quality window blinds and exceptional service to Saddleworth families.
          </p>
            </div>

            <div>
              <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>What Makes Us Different?</h2>
              <div className={`${spacing.layout.grid} md:grid-cols-2 lg:grid-cols-4 ${spacing.gap.lg}`}>
                <div className={`${interactive.card.base} text-center`}>
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Local Knowledge</h3>
                  <p className={`${typography.body} ${colors.text.lightGray}`}>
                    We understand Saddleworth homes inside out. From period cottages to modern barn conversions, we know what works best for local properties.
                  </p>
                </div>

                <div className={`${interactive.card.base} text-center`}>
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Quality Guaranteed</h3>
                  <p className={`${typography.body} ${colors.text.lightGray}`}>
                    We only work with trusted manufacturers and provide comprehensive warranties on all our products and installations.
                  </p>
                </div>

                <div className={`${interactive.card.base} text-center`}>
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Expert Installation</h3>
                  <p className={`${typography.body} ${colors.text.lightGray}`}>
                    Our team has fitted blinds in hundreds of Saddleworth homes. Professional installation included with every quote.
                  </p>
                </div>

                <div className={`${interactive.card.base} text-center`}>
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Honest Pricing</h3>
                  <p className={`${typography.body} ${colors.text.lightGray}`}>
                    Fair, transparent pricing with no hidden costs. We believe in building long-term relationships with our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${colors.background.dark} rounded-lg ${spacing.padding.xl}`}>
              <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>Serving All Saddleworth Villages</h2>
              <p className={`${typography.body} ${colors.text.lightGray} text-center ${spacing.margin.bottomLg}`}>
                From the historic streets of Uppermill to the rolling hills of Delph, we've helped homeowners across Saddleworth transform their windows with beautiful, functional blinds.
              </p>

              <div className={`${spacing.layout.grid} md:grid-cols-3 ${spacing.gap.lg}`}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Uppermill & Diggle</h3>
                  <p className={`${typography.bodySmall} ${colors.text.muted}`}>Victorian terraces and stone cottages</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Delph & Greenfield</h3>
                  <p className={`${typography.bodySmall} ${colors.text.muted}`}>Family homes and new builds</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-8 h-8 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold ${colors.text.white} ${spacing.margin.bottomSm}`}>Dobcross & Lydgate</h3>
                  <p className={`${typography.bodySmall} ${colors.text.muted}`}>Conversions and period properties</p>
                </div>
              </div>
            </div>

            {/* Inspiration Section */}
            <div className={`${spacing.margin.topXl} ${spacing.margin.bottomXl}`}>
              <div className={`${colors.background.gradientSubtle} rounded-2xl ${spacing.padding.xl}`}>
                <h2 className={`${typography.h2} ${spacing.margin.bottomLg} text-center`}>The Sunshine Blinds Promise</h2>
                <div className={`${spacing.layout.grid} md:grid-cols-3 ${spacing.gap.lg}`}>
                  <div className={`text-center ${spacing.stack.md}`}>
                    <div className={`${typography.h2} ${colors.text.gold}`}>✓</div>
                    <h3 className={`${typography.h3} ${spacing.margin.bottomSm}`}>Free Consultation</h3>
                    <p className={`${typography.body} ${colors.text.lightGray}`}>
                      No pushy sales, just honest advice about what works best for your home
                    </p>
                  </div>
                  <div className={`text-center ${spacing.stack.md}`}>
                    <div className={`${typography.h2} ${colors.text.gold}`}>✓</div>
                    <h3 className={`${typography.h3} ${spacing.margin.bottomSm}`}>Fair Pricing</h3>
                    <p className={`${typography.body} ${colors.text.lightGray}`}>
                      Transparent quotes with no hidden costs or surprise charges
                    </p>
                  </div>
                  <div className={`text-center ${spacing.stack.md}`}>
                    <div className={`${typography.h2} ${colors.text.gold}`}>✓</div>
                    <h3 className={`${typography.h3} ${spacing.margin.bottomSm}`}>Perfect Installation</h3>
                    <p className={`${typography.body} ${colors.text.lightGray}`}>
                      Professional fitting with attention to every detail
                    </p>
                  </div>
                </div>
                
                {/* Micro-CTA */}
                <div className={`${spacing.margin.topLg} text-center`}>
                  <p className={`${typography.bodyLarge} ${colors.text.lightGray} ${spacing.margin.bottomMd}`}>
                    Experience the difference local expertise makes
                  </p>
                  <Link
                    to="/book-appointment"
                    className={`${interactive.button.primary} ${interactive.button.medium}`}
                  >
                    Book Your Free Consultation
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className={`${typography.h2} ${spacing.margin.bottomLg}`}>Ready to Transform Your Windows?</h2>
              <p className={`${typography.lead} ${colors.text.lightGray} ${spacing.margin.bottomLg}`}>
                Join hundreds of satisfied Saddleworth customers who've trusted us with their window treatments. From initial consultation to perfect installation, we make the whole process easy.
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
                  Call for a Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
