import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'
import ReviewsSection from '../components/ReviewsSection'
import ProductImageCarousel from '../components/ProductImageCarousel'
import HeroCarousel from '../components/HeroCarousel'
import { typography, spacing, colors, interactive } from '../styles'

const Home = () => {
  const homeFaqs = [
    {
      question: "What areas do you cover in Saddleworth?",
      answer: "We serve all Saddleworth villages including Uppermill, Diggle, Delph, Greenfield, Dobcross, Lydgate, and surrounding areas. Our local knowledge ensures we understand the unique character of each village and can recommend the perfect blinds for your home."
    },
    {
      question: "How long does it take to get blinds fitted?",
      answer: "From consultation to fitting typically takes 2-3 weeks. We offer free home consultations within 48 hours, provide a detailed quote the same day, and schedule fitting at a time that suits you. Express fitting is available for urgent requirements."
    },
    {
      question: "Do you offer a guarantee on your blinds?",
      answer: "Yes! All our blinds come with a comprehensive 5-year guarantee covering manufacturing defects and installation issues. We also offer ongoing support and can provide replacement parts if needed. Our blinds are built to last."
    },
    {
      question: "Can you help with measuring and choosing the right blinds?",
      answer: "Absolutely! Our free consultation includes professional measuring and expert advice on the best blinds for your windows, room, and style preferences. We'll bring samples and help you visualize how different options will look in your home."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept all major credit cards, bank transfers, and cash. You can pay a deposit when you place your order and the balance on completion. We also offer interest-free payment plans for larger orders over £500."
    }
  ]

  const heroImages = [
    {
      src: 'vision-firenze-walnut-1600.jpg',
      alt: 'Beautiful Firenze Walnut vision blinds in a contemporary Saddleworth home',
      title: 'Premium Vision Blinds',
      description: 'Beautiful wood tones for modern interiors'
    },
    {
      src: 'vision-floreale-rosa-1600.jpg',
      alt: 'Elegant Floreale Rosa vision blinds showcasing floral elegance',
      title: 'Floral Inspiration',
      description: 'Soft, elegant patterns for traditional homes'
    },
    {
      src: 'vision-lusso-pebble-1600.jpg',
      alt: 'Modern Lusso Pebble vision blinds in neutral tones',
      title: 'Contemporary Style',
      description: 'Clean, modern aesthetics for urban living'
    },
    {
      src: 'vision-palermo-silver-1600.jpg',
      alt: 'Sophisticated Palermo Silver vision blinds',
      title: 'Luxury Finishes',
      description: 'Premium materials for discerning homeowners'
    },
    {
      src: 'roller-zen-kiwi-1600.jpg',
      alt: 'Zen Kiwi roller blinds adding vibrant color',
      title: 'Bold Colors',
      description: 'Vibrant patterns for modern spaces'
    },
    {
      src: 'roller-carnival-bubblegum-1600.jpg',
      alt: 'Carnival Bubblegum roller blinds with fun patterns',
      title: 'Playful Designs',
      description: 'Fun, colorful options for every room'
    },
    {
      src: 'vertical-savanna-zebra-1600.jpg',
      alt: 'Savanna Zebra vertical blinds with modern pattern',
      title: 'Modern Patterns',
      description: 'Contemporary designs for large windows'
    },
    {
      src: 'shutters-cotton-89mm-1600.jpg',
      alt: 'Cotton plantation shutters with 89mm louvres',
      title: 'Luxury Shutters',
      description: 'Premium shutters that add real value'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className={`relative ${colors.background.gradient} ${colors.text.white}`}>
        <div className={spacing.section.py}>
          <div className={`${spacing.layout.grid} ${spacing.layout.gridCols2} ${spacing.gap.xl} items-center`}>
            <div className={spacing.stack.lg}>
              <h1 className={typography.h1}>
                Beautiful Blinds for Your
                <span className={`${colors.text.gold} block`}>Saddleworth Home</span>
              </h1>
              <p className={`${typography.lead} ${colors.text.lightGray}`}>
                Searching for the ideal blinds? Since 2003, we've been helping families in{' '}
                <Link to="/areas/uppermill" className={interactive.link.accent}>
                  Uppermill
                </Link>
                ,{' '}
                <Link to="/areas/greenfield" className={interactive.link.accent}>
                  Greenfield
                </Link>{' '}
                and{' '}
                <Link to="/areas/diggle" className={interactive.link.accent}>
                  Diggle
                </Link>{' '}
                enhance their homes. Whether it's a snug cottage or a sleek barn conversion, we understand what suits the unique charm of Saddleworth.
              </p>

              <div className={`flex flex-col sm:flex-row ${spacing.gap.md}`}>
                <Link
                  to="/book-appointment"
                  className={`${interactive.button.primary} ${interactive.button.large}`}
                >
                  Get Free Quote
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>Free No Obligation Quotation</p>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <svg className={`w-6 h-6 ${colors.text.dark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>5 Star Reviewed</p>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 ${colors.background.gold} rounded-full flex items-center justify-center mx-auto ${spacing.margin.bottomMd}`}>
                    <span className={`${colors.text.dark} font-bold text-lg`}>£</span>
                  </div>
                  <p className={`${typography.bodySmall} font-medium`}>Fair & Honest Prices</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <HeroCarousel images={heroImages} autoRotate={true} interval={6000} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${spacing.section.py} ${colors.background.gradientDark}`}>
        <div className={spacing.container.default}>
          <div className={`text-center ${spacing.margin.bottomXl}`}>
            <div className={spacing.margin.bottomLg}>
              <div className={`w-16 h-1 ${colors.background.goldGradient} mx-auto ${spacing.margin.bottomLg} rounded-full`}></div>
            </div>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg} ${colors.background.goldGradient} bg-clip-text text-transparent`}>
              Discover Your Dream Blinds
            </h2>
            <div className="relative">
              <p className={`${typography.quote} ${colors.text.gold} italic ${spacing.margin.bottomMd}`}>
                "We Put Other Companies in the Shade"
              </p>
              <div className={`w-24 h-1 ${colors.background.goldGradient} mx-auto rounded-full`}></div>
            </div>
            <p className={`${typography.bodyLarge} ${colors.text.lightGray} ${spacing.margin.topLg} max-w-2xl mx-auto`}>
              From cosy cottages in Uppermill to modern homes in Greenfield, we understand what suits the unique charm of Saddleworth
            </p>
          </div>

          <div className={`${spacing.layout.grid} ${spacing.layout.gridCols3} ${spacing.gap.lg}`}>
            {[
              { name: 'Roller Blinds', description: 'Simple, stylish and practical - roller blinds work brilliantly in any room.', link: '/roller-blinds', image: '/images/optimized/roller-zen-kiwi-400.jpg' },
              { name: 'Venetian Blinds', description: 'The classic choice that never goes out of style. Perfect light control with a twist of the wand.', link: '/venetian-blinds', image: '/images/optimized/venetian-starwood-400.jpg' },
              { name: 'Vertical Blinds', description: 'Got big windows or patio doors? Vertical blinds are your best friend.', link: '/vertical-blinds', image: '/images/optimized/vertical-savanna-zebra-400.jpg' },
              { name: 'Vision Blinds', description: 'The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them.', link: '/vision-blinds', image: '/images/optimized/vision-capri-concrete-400.jpg' },
              { name: 'Perfect Fit Blinds', description: 'Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows.', link: '/perfect-fit-blinds', image: '/images/optimized/perfectfit-monet-flower-400.jpg' },
              { name: 'Shutters', description: 'Want to add real wow factor? Plantation shutters are the ultimate luxury.', link: '/shutters', image: '/images/optimized/shutters-cotton-89mm-400.jpg' },
              { name: 'Roman Blinds', description: 'For a touch of elegance and sophistication, Roman blinds are perfect.', link: '/roman-blinds', image: '/images/optimized/roller-petal-white-400.jpg', comingSoon: true },
              { name: 'Curtains', description: 'Sometimes nothing beats the classic look of curtains.', link: '/curtains', image: '/images/optimized/roller-birdsong-colour-400.jpg', comingSoon: true },
              { name: 'Allusion Blinds', description: 'Experience contemporary elegance with flowing fabric panels that combine curtains with blinds.', link: '/allusion-blinds', image: '/images/optimized/allusion-vista-snow-400.jpg' }
            ].map((service) => (
              <Link
                key={service.name}
                to={service.link}
                className={`${interactive.card.base} ${interactive.card.hover}`}
              >
                <div className={`${interactive.image.container} relative`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={interactive.image.responsive}
                    loading="lazy"
                  />
                  {service.comingSoon && (
                    <div className={`absolute top-4 right-4 ${colors.background.goldGradient} ${colors.text.dark} px-4 py-2 rounded-full ${typography.bodySmall} font-semibold shadow-lg`}>
                      Coming Soon
                    </div>
                  )}
                  {/* Overlay gradient for better text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 ${interactive.transition.medium}`}></div>
                </div>
                <div className={spacing.padding.lg}>
                  <h3 className={`${typography.h3} ${spacing.margin.bottomMd} ${colors.text.white} group-hover:text-brand-gold ${interactive.transition.fast}`}>
                    {service.name}
                    {service.comingSoon && (
                      <span className={`ml-2 ${typography.bodySmall} ${colors.text.gold} font-medium`}>(Coming Soon)</span>
                    )}
                  </h3>
                  <p className={`${typography.body} ${colors.text.lightGray}`}>
                    {service.description}
                  </p>
                  {/* Subtle visual indicator */}
                  <div className={`${spacing.margin.topMd} ${spacing.padding.topMd} border-t ${colors.border.subtle} group-hover:border-brand-gold/30 ${interactive.transition.medium}`}>
                    <span className={`${colors.text.gold} ${typography.bodySmall} font-medium opacity-0 group-hover:opacity-100 ${interactive.transition.medium}`}>
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Micro-CTA after services */}
          <div className={`${spacing.margin.topXl} text-center`}>
            <div className={`${colors.background.gradientSubtle} rounded-2xl ${spacing.padding.xl} max-w-4xl mx-auto`}>
              <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>
                Can't decide which blinds are right for you?
              </h3>
              <p className={`${typography.bodyLarge} ${colors.text.lightGray} ${spacing.margin.bottomLg}`}>
                No worries! We'll bring samples to your home and help you choose. It's completely free and there's no pressure.
              </p>
              <div className={`flex flex-col sm:flex-row ${spacing.gap.md} justify-center`}>
                <Link
                  to="/book-appointment"
                  className={`${interactive.button.primary} ${interactive.button.medium}`}
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:01457597091"
                  className={`${interactive.button.ghost} ${interactive.button.medium} flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Quick Question? Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section - Before/After Style */}
      <section className={`${spacing.section.py} ${colors.background.dark}`}>
        <div className={spacing.container.default}>
          <div className={`text-center ${spacing.margin.bottomXl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomMd}`}>
              Transform Your Space
            </h2>
            <p className={`${typography.lead} ${colors.text.lightGray} max-w-3xl mx-auto`}>
              See how the right blinds can completely change the look and feel of your rooms
            </p>
          </div>
          
          <div className={`${spacing.layout.grid} ${spacing.layout.gridCols2} ${spacing.gap.xl}`}>
            {/* Living Room Transformation */}
            <div className={`${interactive.card.base} overflow-hidden`}>
              <div className="relative">
                <img 
                  src="/images/optimized/vision-lusso-pebble-800.jpg" 
                  alt="Modern living room with Vision blinds"
                  className={`${interactive.image.responsive} h-64 object-cover`}
                />
                <div className={`absolute top-4 left-4 ${colors.background.gold} ${colors.text.dark} px-3 py-1 rounded-full ${typography.bodySmall} font-semibold`}>
                  Living Rooms
                </div>
              </div>
              <div className={spacing.padding.lg}>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Create the Perfect Ambiance</h3>
                <p className={`${typography.body} ${colors.text.lightGray} ${spacing.margin.bottomMd}`}>
                  Vision blinds offer the perfect balance of privacy and natural light, ideal for Saddleworth's variable weather.
                </p>
                <ul className={`${typography.bodySmall} ${colors.text.lightGray} ${spacing.stack.sm}`}>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Control light without losing your view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduce glare on TV screens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Protect furniture from UV damage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bedroom Transformation */}
            <div className={`${interactive.card.base} overflow-hidden`}>
              <div className="relative">
                <img 
                  src="/images/optimized/roller-carnival-bubblegum-800.jpg" 
                  alt="Cozy bedroom with blackout roller blinds"
                  className={`${interactive.image.responsive} h-64 object-cover`}
                />
                <div className={`absolute top-4 left-4 ${colors.background.gold} ${colors.text.dark} px-3 py-1 rounded-full ${typography.bodySmall} font-semibold`}>
                  Bedrooms
                </div>
              </div>
              <div className={spacing.padding.lg}>
                <h3 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Sleep Better, Wake Happier</h3>
                <p className={`${typography.body} ${colors.text.lightGray} ${spacing.margin.bottomMd}`}>
                  Blackout roller blinds ensure peaceful sleep, even during those long summer evenings in Saddleworth.
                </p>
                <ul className={`${typography.bodySmall} ${colors.text.lightGray} ${spacing.stack.sm}`}>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete darkness for better sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thermal properties keep rooms cozy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.text.gold} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Child-safe cordless options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mini CTA */}
          <div className={`${spacing.margin.topXl} text-center`}>
            <p className={`${typography.bodyLarge} ${colors.text.lightGray} ${spacing.margin.bottomMd}`}>
              Ready to transform your home? Let's find the perfect blinds for every room.
            </p>
            <Link
              to="/gallery"
              className={`${interactive.button.secondary} ${interactive.button.medium}`}
            >
              View More Transformations
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className={`${spacing.section.py} ${colors.background.gradient}`}>
        <div className={spacing.container.default}>
          <div className={`${spacing.layout.grid} grid-cols-2 lg:grid-cols-4 ${spacing.gap.lg}`}>
            <div className={`${colors.background.dark} rounded-xl ${spacing.padding.lg} text-center ${interactive.card.hover}`}>
              <div className={`${typography.h2} ${colors.text.gold} ${spacing.margin.bottomSm}`}>20+</div>
              <p className={`${typography.body} ${colors.text.lightGray}`}>Years of Experience</p>
            </div>
            <div className={`${colors.background.dark} rounded-xl ${spacing.padding.lg} text-center ${interactive.card.hover}`}>
              <div className={`${typography.h2} ${colors.text.gold} ${spacing.margin.bottomSm}`}>1000+</div>
              <p className={`${typography.body} ${colors.text.lightGray}`}>Happy Customers</p>
            </div>
            <div className={`${colors.background.dark} rounded-xl ${spacing.padding.lg} text-center ${interactive.card.hover}`}>
              <div className={`${typography.h2} ${colors.text.gold} ${spacing.margin.bottomSm}`}>5★</div>
              <p className={`${typography.body} ${colors.text.lightGray}`}>Average Rating</p>
            </div>
            <div className={`${colors.background.dark} rounded-xl ${spacing.padding.lg} text-center ${interactive.card.hover}`}>
              <div className={`${typography.h2} ${colors.text.gold} ${spacing.margin.bottomSm}`}>100%</div>
              <p className={`${typography.body} ${colors.text.lightGray}`}>Local Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about choosing the perfect blinds for your Saddleworth home"
        faqs={homeFaqs}
        className="bg-gray-900"
      />

      {/* CTA Section */}
      <section className={`${spacing.section.py} ${colors.background.gold}`}>
        <div className={`${spacing.container.default} text-center`}>
          <h2 className={`${typography.h2} ${spacing.margin.bottomLg} ${colors.text.dark}`}>
            Ready to Transform Your Home?
          </h2>
          <p className={`${typography.lead} ${colors.text.darkGray} ${spacing.margin.bottomLg} max-w-3xl mx-auto`}>
            Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible. No pressure, no obligation - just honest advice and a friendly chat over a cuppa.
          </p>

          <div className={`flex flex-col sm:flex-row ${spacing.gap.md} justify-center items-center`}>
            <Link
              to="/book-appointment"
              className={`${interactive.button.primaryDark} ${interactive.button.large} relative overflow-hidden`}
            >
              <span className="relative z-10">Book Your Free Visit</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 ${interactive.transition.medium}`}></div>
            </Link>
            <a
              href="tel:01457597091"
              className={`${interactive.button.outline} ${interactive.button.large} flex items-center gap-2`}
            >
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call for a Chat</span>
            </a>
          </div>

          <div className={`flex justify-center items-center ${spacing.gap.lg} ${spacing.margin.topLg} ${colors.text.darkGray}`}>
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${colors.state.success}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${colors.state.info}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`${typography.bodySmall} font-medium`}>Covering All Saddleworth</span>
            </div>
          </div>

          {/* Urgency element */}
          <div className={`${spacing.margin.topLg} p-4 ${colors.state.warning} border ${colors.state.warningBorder} rounded-lg text-center`}>
            <p className={`${colors.state.warningText} ${typography.bodySmall} font-medium`}>
              ⚡ Limited availability - Book your free consultation this week!
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={`${spacing.section.py} ${colors.background.dark}`}>
        <ReviewsSection />
      </section>

      {/* FAQ Section */}
      <section className={spacing.section.py}>
        <FAQSection />
      </section>
    </>
  )
}

export default Home
