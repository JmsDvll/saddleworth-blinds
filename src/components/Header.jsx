import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/sunshine-logo.svg" alt="Sunshine Blinds Logo" className="w-15 h-11" />
            <div>
              <div className="text-xl font-bold text-brand-gold">Sunshine Blinds</div>
              <div className="text-sm text-gray-400">Saddleworth</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-brand-gold transition-colors">
              Home
            </Link>

            <Link to="/about" className="text-white hover:text-brand-gold transition-colors">
              About
            </Link>

            <div className="relative">
              <button
                onClick={toggleBlindsDropdown}
                className="flex items-center space-x-1 text-white hover:text-brand-gold transition-colors"
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
                className="flex items-center space-x-1 text-white hover:text-brand-gold transition-colors"
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

            <Link to="/gallery" className="text-white hover:text-brand-gold transition-colors">
              Gallery
            </Link>
            <Link to="/book-appointment" className="text-white hover:text-brand-gold transition-colors">
              Book Appointment
            </Link>
            <Link to="/contact" className="text-white hover:text-brand-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Header CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:01457597091"
              className="flex items-center space-x-2 text-white hover:text-brand-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>01457 597091</span>
            </a>
            <Link to="/book-appointment" className="btn btn-primary">
              Book Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <nav className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <div className="px-4 py-2">
                <button
                  onClick={toggleBlindsDropdown}
                  className="flex items-center justify-between w-full text-white hover:text-brand-gold transition-colors"
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
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      to="/roller-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Roller Blinds
                    </Link>
                    <Link
                      to="/venetian-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Venetian Blinds
                    </Link>
                    <Link
                      to="/vertical-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Vertical Blinds
                    </Link>
                    <Link
                      to="/vision-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Vision Blinds
                    </Link>
                    <Link
                      to="/perfect-fit-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Perfect Fit Blinds
                    </Link>
                    <Link
                      to="/shutters"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Shutters
                    </Link>
                    <Link
                      to="/roman-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Roman Blinds
                    </Link>
                    <Link
                      to="/curtains"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Curtains
                    </Link>
                    <Link
                      to="/allusion-blinds"
                      className="block py-2 text-gray-300 hover:text-white"
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

              <div className="px-4 py-2">
                <button
                  onClick={toggleAreasDropdown}
                  className="flex items-center justify-between w-full text-white hover:text-brand-gold transition-colors"
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
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      to="/areas/uppermill"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Uppermill
                    </Link>
                    <Link
                      to="/areas/diggle"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Diggle
                    </Link>
                    <Link
                      to="/areas/delph"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Delph
                    </Link>
                    <Link
                      to="/areas/greenfield"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Greenfield
                    </Link>
                    <Link
                      to="/areas/dobcross"
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Dobcross
                    </Link>
                    <Link
                      to="/areas/lydgate"
                      className="block py-2 text-gray-300 hover:text-white"
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
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2 space-y-2">
                <a
                  href="tel:01457597091"
                  className="flex items-center space-x-2 text-white hover:text-brand-gold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>01457 597091</span>
                </a>
                <Link
                  to="/book-appointment"
                  className="btn btn-primary w-full text-center"
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
