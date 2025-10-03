import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Sunshine Blinds Saddleworth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your local window blind specialists, part of the trusted Sunshine Blinds family. We're dedicated to serving Saddleworth with quality blinds, expert fitting, and outstanding service.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/roller-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Roller Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/venetian-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Venetian Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/vertical-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Vertical Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Vision Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/perfect-fit-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Perfect Fit Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/shutters"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Shutters
                </Link>
              </li>
              <li>
                <Link
                  to="/roman-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Roman Blinds
                </Link>
              </li>
              <li>
                <Link
                  to="/curtains"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Curtains
                </Link>
              </li>
              <li>
                <Link
                  to="/allusion-blinds"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Allusion Blinds
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              {[
                'Uppermill',
                'Diggle',
                'Delph',
                'Greenfield',
                'Dobcross',
                'Lydgate'
              ].map((area) => (
                <li key={area}>
                  <Link
                    to={`/areas/${area.toLowerCase()}`}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-300 font-medium">Call:</span>{' '}
                <a
                  href="tel:01457597091"
                  className="text-brand-gold hover:text-brand-green transition-colors"
                >
                  01457 597091
                </a>
              </p>
              <p>
                <span className="text-gray-300 font-medium">Email:</span>{' '}
                <a
                  href="mailto:sales@saddleworthblinds.co.uk"
                  className="text-brand-gold hover:text-brand-green transition-colors"
                >
                  sales@saddleworthblinds.co.uk
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Showroom:</span><br />
                Visit our Shaw showroom<br />
                6 Rochdale Road, Shaw, Oldham OL2 8AD
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Hours:</span><br />
                Mon-Fri: 9am-5pm<br />
                Saturday: 10am-4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sunshine Blinds Saddleworth. All rights reserved. Part of Sunshine Blinds.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
