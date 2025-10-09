import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { typography, spacing, colors, interactive } from '../styles'

const Contact = () => {
  return (
    <div className={`${spacing.container.default} ${spacing.section.py}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`${typography.h1} ${spacing.margin.bottomLg}`}>Contact Us</h1>
        <p className={`${typography.lead} ${colors.text.lightGray} ${spacing.margin.bottomXl}`}>
          Get in touch with Saddleworth's trusted window blind specialists. Call, email, or visit our Shaw showroom for expert advice and free quotes.
        </p>

        <div className={`${spacing.layout.grid} ${spacing.layout.gridCols2} ${spacing.gap.xl}`}>
          {/* Contact Form */}
          <div className={`${colors.background.dark} rounded-lg ${spacing.padding.xl}`}>
            <h2 className={`${typography.h2} ${spacing.margin.bottomLg}`}>Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className={`${typography.h2} ${spacing.margin.bottomLg}`}>Get In Touch</h2>
              <div className={spacing.stack.lg}>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className={`${typography.body} font-medium ${colors.text.white} ${spacing.margin.bottomSm} flex items-center gap-2`}>
                    <svg className={`w-5 h-5 ${colors.text.gold}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </h3>
                  <a href="tel:01457597091" className={`${interactive.link.accent} ${typography.bodyLarge} font-semibold`}>
                    01457 597091
                  </a>
                  <p className={`${colors.text.muted} ${typography.bodySmall} ${spacing.margin.topXs}`}>Mon-Fri: 9am-5pm | Saturday: 10am-4pm</p>
                </div>

                <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
                  <h3 className={`${typography.body} font-medium ${colors.text.white} ${spacing.margin.bottomSm} flex items-center gap-2`}>
                    <svg className={`w-5 h-5 ${colors.text.gold}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </h3>
                  <a href="mailto:sales@saddleworthblinds.co.uk" className={interactive.link.accent}>
                    sales@saddleworthblinds.co.uk
                  </a>
                </div>

                <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
                  <h3 className={`${typography.body} font-medium ${colors.text.white} ${spacing.margin.bottomSm} flex items-center gap-2`}>
                    <svg className={`w-5 h-5 ${colors.text.gold}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Visit Our Showroom
                  </h3>
                  <p className={colors.text.secondary}>
                    6 Rochdale Road<br />
                    Shaw, Oldham<br />
                    OL2 8AD
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=6+Rochdale+Road,+Shaw,+Oldham+OL2+8AD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.text.gold} ${interactive.transition.colors} ${typography.bodySmall} ${spacing.margin.topSm} inline-block`}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className={`${colors.background.secondary} rounded-lg ${spacing.padding.lg}`}>
              <h2 className={`${typography.h3} ${spacing.margin.bottomMd}`}>Areas We Cover</h2>
              <div className={`${spacing.layout.grid} grid-cols-2 ${spacing.gap.xs}`}>
                {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate', 'Denshaw', 'Friezland', 'Grasscroft', 'Grotton', 'Springhead', 'Lees'].map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    className={`${colors.text.secondary} ${interactive.transition.colors} flex items-center gap-2`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
