import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { colors, spacing, typography, interactive } from '../styles'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBlindsDropdownOpen, setIsBlindsDropdownOpen] = useState(false)
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleBlindsDropdown = () => {
    setIsBlindsDropdownOpen(!isBlindsDropdownOpen)
    setIsAreasDropdownOpen(false)
  }

  const toggleAreasDropdown = () => {
    setIsAreasDropdownOpen(!isAreasDropdownOpen)
    setIsBlindsDropdownOpen(false)
  }

  return (
    <header className={`${colors.background.primary} border-b ${colors.border.dark}`}>
      <div className="container">
        <div className={`flex items-center justify-between ${spacing.padding.lg}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center ${spacing.gap.md}`}>
            <img src="/images/sunshine-logo.svg" alt="Sunshine Blinds Logo" className="w-15 h-11" />
            <div>
              <div className={`${typography.h3} font-bold ${colors.text.gold}`}>Sunshine Blinds</div>
              <div className={`${typography.bodySmall} ${colors.text.muted}`}>Saddleworth</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${spacing.gap.lg}`} role="navigation" aria-label="Main navigation">
            <Link to="/" className={`${colors.text.white} ${interactive.transition.colors}`}>
              Home
            </Link>

            <div className="relative">
              <button
                onClick={toggleBlindsDropdown}
                className={`flex items-center ${spacing.gap.xs} ${colors.text.white} ${interactive.transition.colors}`}
              >
                <span>Our Blinds</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isBlindsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isBlindsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/roller-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Roller Blinds
                  </Link>
                  <Link
                    to="/venetian-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Venetian Blinds
                  </Link>
                  <Link
                    to="/vertical-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Vertical Blinds
                  </Link>
                  <Link
                    to="/vision-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Vision Blinds
                  </Link>
                  <Link
                    to="/perfect-fit-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Perfect Fit Blinds
                  </Link>
                  <Link
                    to="/shutters"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Shutters
                  </Link>
                  <Link
                    to="/roman-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Roman Blinds
                  </Link>
                  <Link
                    to="/curtains"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Curtains
                  </Link>
                  <Link
                    to="/allusion-blinds"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsBlindsDropdownOpen(false)}
                  >
                    Allusion Blinds
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleAreasDropdown}
                className={`flex items-center ${spacing.gap.xs} ${colors.text.white} ${interactive.transition.colors}`}
              >
                <span>Areas</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isAreasDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isAreasDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/areas/uppermill"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Uppermill
                  </Link>
                  <Link
                    to="/areas/diggle"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Diggle
                  </Link>
                  <Link
                    to="/areas/delph"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Delph
                  </Link>
                  <Link
                    to="/areas/greenfield"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Greenfield
                  </Link>
                  <Link
                    to="/areas/dobcross"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Dobcross
                  </Link>
                  <Link
                    to="/areas/lydgate"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsAreasDropdownOpen(false)}
                  >
                    Lydgate
                  </Link>
                </div>
              )}
            </div>

            <Link to="/gallery" className={`${colors.text.white} ${interactive.transition.colors}`}>
              Gallery
            </Link>
            <Link to="/book-appointment" className={`${colors.text.white} ${interactive.transition.colors}`}>
              Book Appointment
            </Link>
            <Link to="/contact" className={`${colors.text.white} ${interactive.transition.colors}`}>
              Contact
            </Link>
          </nav>

          {/* Header CTA */}
          <div className={`hidden lg:flex items-center ${spacing.gap.md}`}>
            <a
              href="tel:01457597091"
              className={`${interactive.button.secondary} flex items-center ${spacing.gap.xs} ${colors.text.white} border-brand-gold hover:bg-brand-gold hover:text-gray-900 ${interactive.transition.colors}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">01457 597091</span>
            </a>
            <Link to="/book-appointment" className={interactive.button.primary}>
              Book Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden ${spacing.padding.sm} rounded-md ${colors.background.secondary} ${interactive.transition.colors}`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t ${colors.border.dark}`}>
            <nav className={`${spacing.padding.lg} ${spacing.stack.sm}`}>
              <Link
                to="/"
                className={`block ${spacing.padding.md} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className={`block ${spacing.padding.md} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <div className={spacing.padding.md}>
                <button
                  onClick={toggleBlindsDropdown}
                  className={`flex items-center justify-between w-full ${colors.text.white} ${interactive.transition.colors}`}
                >
                  <span>Our Blinds</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isBlindsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBlindsDropdownOpen && (
                  <div className={`${spacing.margin.topXs} ml-4 ${spacing.stack.xs}`}>
                    <Link
                      to="/roller-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Roller Blinds
                    </Link>
                    <Link
                      to="/venetian-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Venetian Blinds
                    </Link>
                    <Link
                      to="/vertical-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Vertical Blinds
                    </Link>
                    <Link
                      to="/vision-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Vision Blinds
                    </Link>
                    <Link
                      to="/perfect-fit-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Perfect Fit Blinds
                    </Link>
                    <Link
                      to="/shutters"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Shutters
                    </Link>
                    <Link
                      to="/roman-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Roman Blinds
                    </Link>
                    <Link
                      to="/curtains"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Curtains
                    </Link>
                    <Link
                      to="/allusion-blinds"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Allusion Blinds
                    </Link>
                  </div>
                )}
              </div>

              <div className={spacing.padding.md}>
                <button
                  onClick={toggleAreasDropdown}
                  className={`flex items-center justify-between w-full ${colors.text.white} ${interactive.transition.colors}`}
                >
                  <span>Areas</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isAreasDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAreasDropdownOpen && (
                  <div className={`${spacing.margin.topXs} ml-4 ${spacing.stack.xs}`}>
                    <Link
                      to="/areas/uppermill"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Uppermill
                    </Link>
                    <Link
                      to="/areas/diggle"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Diggle
                    </Link>
                    <Link
                      to="/areas/delph"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Delph
                    </Link>
                    <Link
                      to="/areas/greenfield"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Greenfield
                    </Link>
                    <Link
                      to="/areas/dobcross"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Dobcross
                    </Link>
                    <Link
                      to="/areas/lydgate"
                      className={`block ${spacing.padding.sm} ${colors.text.secondary} ${interactive.transition.colors}`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Lydgate
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/book-appointment"
                className={`block ${spacing.padding.md} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className={`block ${spacing.padding.md} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className={`${spacing.padding.md} ${spacing.stack.sm}`}>
                <a
                  href="tel:01457597091"
                  className={`flex items-center ${spacing.gap.xs} ${colors.text.white} ${interactive.transition.colors}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>01457 597091</span>
                </a>
                <Link
                  to="/book-appointment"
                  className={`${interactive.button.primary} w-full text-center`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {(isBlindsDropdownOpen || isAreasDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsBlindsDropdownOpen(false)
            setIsAreasDropdownOpen(false)
          }}
        />
      )}
    </header>
  )
}

export default Header
