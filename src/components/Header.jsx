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
    <header className={`${colors.background.primary} ${colors.border.dark} border-b sticky top-0 z-50`}>
      <div className={`${spacing.container.narrow}`}>
        <div className={`flex items-center justify-between ${spacing.padding.xl} min-h-[80px]`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center ${spacing.gap.lg} ${interactive.transition.transform} ${interactive.focus.ring}`}>
            <img src="/images/sunshine-logo.svg" alt="Sunshine Blinds Logo" className="w-16 h-12 object-contain" />
            <div className="flex flex-col">
              <div className={`font-bold ${colors.text.gold} text-xl lg:text-2xl leading-tight`}>
                Sunshine<br />Blinds
              </div>
              <div className={`${colors.text.muted} text-sm font-medium`}>
                Saddleworth
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${spacing.gap.xl}`} role="navigation" aria-label="Main navigation">
            <Link
              to="/"
              className={`group relative px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium`}
            >
              <span className="relative z-10">Home</span>
              <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
            </Link>

            <div className="relative">
              <button
                onClick={toggleBlindsDropdown}
                className={`group relative flex items-center ${spacing.gap.sm} px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium rounded-lg`}
                aria-expanded={isBlindsDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Our Blinds</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isBlindsDropdownOpen ? 'rotate-180' : ''} relative z-10`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
              </button>

              {isBlindsDropdownOpen && (
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 ${colors.background.card} ${colors.border.light} border rounded-2xl shadow-2xl py-4 z-50 backdrop-blur-sm`}>
                  <div className="px-3 mb-3">
                    <h3 className={`text-sm font-semibold ${colors.text.gold} uppercase tracking-wider`}>Our Products</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      to="/roller-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Roller Blinds</span>
                    </Link>
                    <Link
                      to="/venetian-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Venetian Blinds</span>
                    </Link>
                    <Link
                      to="/vertical-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Vertical Blinds</span>
                    </Link>
                    <Link
                      to="/vision-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Vision Blinds</span>
                    </Link>
                    <Link
                      to="/perfect-fit-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Perfect Fit Blinds</span>
                    </Link>
                    <Link
                      to="/shutters"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Shutters</span>
                    </Link>
                    <Link
                      to="/roman-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Roman Blinds</span>
                    </Link>
                    <Link
                      to="/curtains"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Curtains</span>
                    </Link>
                    <Link
                      to="/allusion-blinds"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsBlindsDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Allusion Blinds</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleAreasDropdown}
                className={`group relative flex items-center ${spacing.gap.sm} px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium rounded-lg`}
                aria-expanded={isAreasDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Areas</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isAreasDropdownOpen ? 'rotate-180' : ''} relative z-10`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
              </button>

              {isAreasDropdownOpen && (
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 ${colors.background.card} ${colors.border.light} border rounded-2xl shadow-2xl py-4 z-50 backdrop-blur-sm`}>
                  <div className="px-3 mb-3">
                    <h3 className={`text-sm font-semibold ${colors.text.gold} uppercase tracking-wider`}>Service Areas</h3>
                  </div>
                  <div className={`${spacing.stack.xs}`}>
                    <Link
                      to="/areas/uppermill"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Uppermill</span>
                    </Link>
                    <Link
                      to="/areas/diggle"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Diggle</span>
                    </Link>
                    <Link
                      to="/areas/delph"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Delph</span>
                    </Link>
                    <Link
                      to="/areas/greenfield"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Greenfield</span>
                    </Link>
                    <Link
                      to="/areas/dobcross"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Dobcross</span>
                    </Link>
                    <Link
                      to="/areas/lydgate"
                      className={`group flex items-center ${spacing.gap.sm} px-4 py-3 mx-2 ${colors.text.white} hover:${colors.background.tertiary} hover:${colors.text.gold} ${interactive.transition.colors} rounded-xl ${interactive.focus.ring} font-medium`}
                      onClick={() => setIsAreasDropdownOpen(false)}
                    >
                      <div className={`w-2 h-2 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Lydgate</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`group relative px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium`}
            >
              <span className="relative z-10">Gallery</span>
              <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
            </Link>
            <Link
              to="/book-appointment"
              className={`group relative px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium`}
            >
              <span className="relative z-10">Book Appointment</span>
              <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
            </Link>
            <Link
              to="/contact"
              className={`group relative px-4 py-2 ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.text.gold} font-medium`}
            >
              <span className="relative z-10">Contact</span>
              <div className={`absolute inset-0 ${colors.background.tertiary} opacity-0 group-hover:opacity-100 ${interactive.transition.opacity} rounded-lg -z-0`}></div>
            </Link>
          </nav>

          {/* Header CTA */}
          <div className={`hidden lg:flex items-center ${spacing.gap.lg}`}>
            <a
              href="tel:01457597091"
              className={`flex items-center ${spacing.gap.sm} px-4 py-3 ${colors.text.white} ${colors.border.accent} border-2 hover:${colors.background.gold} hover:${colors.text.dark} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg font-semibold`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">01457 597091</span>
            </a>
            <Link
              to="/book-appointment"
              className={`px-6 py-3 ${colors.gradients.brandButton} ${colors.text.dark} hover:shadow-lg hover:scale-105 ${interactive.transition.medium} ${interactive.focus.ring} rounded-lg font-semibold`}
            >
              Book Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-3 rounded-lg ${colors.background.secondary} ${interactive.transition.colors} ${interactive.focus.ring} hover:${colors.background.tertiary}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden ${colors.border.dark} border-t ${colors.background.primary}`}>
            <nav className={`${spacing.padding.lg} ${spacing.stack.sm}`}>
              <Link
                to="/"
                className={`block ${spacing.padding.lg} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className={`block ${spacing.padding.lg} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <div className={`${spacing.padding.lg} ${colors.background.secondary} rounded-lg`}>
                <button
                  onClick={toggleBlindsDropdown}
                  className={`flex items-center justify-between w-full ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} font-medium py-2`}
                  aria-expanded={isBlindsDropdownOpen}
                >
                  <span>Our Blinds</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isBlindsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBlindsDropdownOpen && (
                  <div className={`${spacing.margin.topSm} ${spacing.stack.xs}`}>
                    <div className="px-3 mb-2">
                      <h4 className={`text-xs font-semibold ${colors.text.gold} uppercase tracking-wider`}>Our Products</h4>
                    </div>
                    <Link
                      to="/roller-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Roller Blinds</span>
                    </Link>
                    <Link
                      to="/venetian-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Venetian Blinds</span>
                    </Link>
                    <Link
                      to="/vertical-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Vertical Blinds</span>
                    </Link>
                    <Link
                      to="/vision-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Vision Blinds</span>
                    </Link>
                    <Link
                      to="/perfect-fit-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Perfect Fit Blinds</span>
                    </Link>
                    <Link
                      to="/shutters"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Shutters</span>
                    </Link>
                    <Link
                      to="/roman-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Roman Blinds</span>
                    </Link>
                    <Link
                      to="/curtains"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Curtains</span>
                    </Link>
                    <Link
                      to="/allusion-blinds"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsBlindsDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Allusion Blinds</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className={`${spacing.padding.lg} ${colors.background.secondary} rounded-lg`}>
                <button
                  onClick={toggleAreasDropdown}
                  className={`flex items-center justify-between w-full ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} font-medium py-2`}
                  aria-expanded={isAreasDropdownOpen}
                >
                  <span>Areas</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isAreasDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAreasDropdownOpen && (
                  <div className={`${spacing.margin.topSm} ${spacing.stack.xs}`}>
                    <div className="px-3 mb-2">
                      <h4 className={`text-xs font-semibold ${colors.text.gold} uppercase tracking-wider`}>Service Areas</h4>
                    </div>
                    <Link
                      to="/areas/uppermill"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Uppermill</span>
                    </Link>
                    <Link
                      to="/areas/diggle"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Diggle</span>
                    </Link>
                    <Link
                      to="/areas/delph"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Delph</span>
                    </Link>
                    <Link
                      to="/areas/greenfield"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Greenfield</span>
                    </Link>
                    <Link
                      to="/areas/dobcross"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Dobcross</span>
                    </Link>
                    <Link
                      to="/areas/lydgate"
                      className={`group flex items-center ${spacing.gap.sm} ${spacing.padding.sm} ${colors.text.secondary} hover:${colors.text.white} hover:${colors.background.tertiary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg`}
                      onClick={() => {
                        setIsAreasDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div className={`w-1.5 h-1.5 ${colors.background.gold} rounded-full group-hover:scale-125 ${interactive.transition.transform}`}></div>
                      <span>Lydgate</span>
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/book-appointment"
                className={`block ${spacing.padding.lg} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className={`block ${spacing.padding.lg} ${colors.text.white} ${colors.background.secondary} ${interactive.transition.colors} ${interactive.focus.ring} rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className={`${spacing.padding.lg} ${spacing.stack.sm} ${colors.background.tertiary} rounded-lg`}>
                <a
                  href="tel:01457597091"
                  className={`flex items-center ${spacing.gap.sm} ${colors.text.white} ${interactive.transition.colors} ${interactive.focus.ring} p-3 rounded-lg hover:${colors.background.secondary}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">01457 597091</span>
                </a>
                <Link
                  to="/book-appointment"
                  className={`w-full ${colors.gradients.brandButton} ${colors.text.dark} ${interactive.transition.medium} ${interactive.focus.ring} rounded-lg font-semibold text-center px-6 py-4 hover:shadow-lg`}
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
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header
