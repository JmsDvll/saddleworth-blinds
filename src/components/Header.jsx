import React, { useState } from 'react'
import {
  Container,
  Flex,
  Icon,
  Link,
  Button,
  Text,
  Stack,
  Card
} from './ui'

const HeaderStandardized = () => {
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

  const blindsMenu = [
    { name: 'Roller Blinds', path: '/roller-blinds' },
    { name: 'Venetian Blinds', path: '/venetian-blinds' },
    { name: 'Vertical Blinds', path: '/vertical-blinds' },
    { name: 'Vision Blinds', path: '/vision-blinds' },
    { name: 'Perfect Fit Blinds', path: '/perfect-fit-blinds' },
    { name: 'Shutters', path: '/shutters' },
    { name: 'Roman Blinds', path: '/roman-blinds' },
    { name: 'Curtains', path: '/curtains' },
    { name: 'Allusion Blinds', path: '/allusion-blinds' }
  ]

  const areasMenu = [
    { name: 'Uppermill', path: '/areas/uppermill' },
    { name: 'Diggle', path: '/areas/diggle' },
    { name: 'Delph', path: '/areas/delph' },
    { name: 'Greenfield', path: '/areas/greenfield' },
    { name: 'Dobcross', path: '/areas/dobcross' },
    { name: 'Lydgate', path: '/areas/lydgate' },
    { name: 'Denshaw', path: '/areas/denshaw' },
    { name: 'Friezland', path: '/areas/friezland' },
    { name: 'Grasscroft', path: '/areas/grasscroft' },
    { name: 'Grotton', path: '/areas/grotton' },
    { name: 'Springhead', path: '/areas/springhead' },
    { name: 'Lees', path: '/areas/lees' }
  ]

  const mainNav = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <Container padding="none">
        <Flex justify="between" align="center" className="min-h-[80px] px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" variant="plain">
            <Flex gap="medium" align="center">
              <img 
                src="/images/sunshine-logo.svg" 
                alt="Sunshine Blinds Logo" 
                className="w-16 h-12 object-contain" 
              />
              <Stack spacing="none">
                <Text 
                  size="xlarge" 
                  weight="bold" 
                  color="gold" 
                  className="leading-tight"
                >
                  Sunshine<br />Blinds
                </Text>
                <Text size="small" weight="medium" color="muted">
                  Saddleworth
                </Text>
              </Stack>
            </Flex>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-8" 
            role="navigation" 
            aria-label="Main navigation"
          >
            {/* Home Link */}
            <Link.Nav to="/" className="font-medium">
              Home
            </Link.Nav>

            {/* Blinds Dropdown */}
            <div className="relative">
              <button
                onClick={toggleBlindsDropdown}
                className="group relative flex items-center gap-2 px-4 py-2 text-white hover:text-brand-gold transition-colors font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-expanded={isBlindsDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Our Blinds</span>
                <Icon 
                  name="chevronDown" 
                  size="small"
                  className={`transition-transform duration-200 ${isBlindsDropdownOpen ? 'rotate-180' : ''} relative z-10`}
                />
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-0" />
              </button>

              {/* Blinds Dropdown Menu */}
              {isBlindsDropdownOpen && (
                <Card 
                  variant="elevated" 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 backdrop-blur-sm"
                >
                  <Stack spacing="small">
                    <Text size="small" weight="semibold" color="gold" className="uppercase tracking-wider px-4">
                      Our Products
                    </Text>
                    <Stack spacing="tiny" className="pb-2">
                      {blindsMenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          variant="nav"
                          className="group flex items-center gap-3 px-4 py-3 mx-2 hover:bg-gray-800 rounded-xl transition-colors"
                          onClick={() => setIsBlindsDropdownOpen(false)}
                        >
                          <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-125 transition-transform" />
                          <Text>{item.name}</Text>
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAreasDropdown}
                className="group relative flex items-center gap-2 px-4 py-2 text-white hover:text-brand-gold transition-colors font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-expanded={isAreasDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Areas</span>
                <Icon 
                  name="chevronDown" 
                  size="small"
                  className={`transition-transform duration-200 ${isAreasDropdownOpen ? 'rotate-180' : ''} relative z-10`}
                />
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-0" />
              </button>

              {/* Areas Dropdown Menu */}
              {isAreasDropdownOpen && (
                <Card 
                  variant="elevated" 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 backdrop-blur-sm"
                >
                  <Stack spacing="small">
                    <Text size="small" weight="semibold" color="gold" className="uppercase tracking-wider px-4">
                      Areas We Cover
                    </Text>
                    <div className="grid grid-cols-2 gap-1 pb-2 px-2">
                      {areasMenu.map((area) => (
                        <Link
                          key={area.name}
                          to={area.path}
                          variant="nav"
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg transition-colors text-sm"
                          onClick={() => setIsAreasDropdownOpen(false)}
                        >
                          <Icon name="mapPin" size="tiny" color="gold" />
                          <Text size="small">{area.name}</Text>
                        </Link>
                      ))}
                    </div>
                  </Stack>
                </Card>
              )}
            </div>

            {/* Other Nav Items */}
            <Link.Nav to="/gallery" className="font-medium">
              Gallery
            </Link.Nav>
            <Link.Nav to="/contact" className="font-medium">
              Contact
            </Link.Nav>

            {/* CTA Buttons */}
            <Flex gap="small" align="center">
              <Button 
                to="/book-appointment" 
                variant="primary" 
                size="small"
                className="shadow-lg shadow-brand-gold/20"
              >
                Free Quote
              </Button>
              <Button 
                href="tel:01457597091" 
                variant="ghost" 
                size="small"
                iconLeft={<Icon name="phone" size="small" />}
              >
                <span className="hidden xl:inline">01457 597091</span>
                <span className="xl:hidden">Call</span>
              </Button>
            </Flex>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="large" />
          </button>
        </Flex>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-800">
            <Stack spacing="none" className="py-4">
              {/* Mobile Home Link */}
              <Link
                to="/"
                variant="nav"
                className="block px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Blinds Section */}
              <div>
                <button
                  onClick={toggleBlindsDropdown}
                  className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                >
                  <span>Our Blinds</span>
                  <Icon 
                    name="chevronDown" 
                    size="small"
                    className={`transition-transform ${isBlindsDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isBlindsDropdownOpen && (
                  <Stack spacing="none" className="bg-gray-800/50">
                    {blindsMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        variant="nav"
                        className="block pl-12 pr-6 py-2 hover:bg-gray-700 transition-colors text-sm"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsBlindsDropdownOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </Stack>
                )}
              </div>

              {/* Mobile Areas Section */}
              <div>
                <button
                  onClick={toggleAreasDropdown}
                  className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                >
                  <span>Areas</span>
                  <Icon 
                    name="chevronDown" 
                    size="small"
                    className={`transition-transform ${isAreasDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isAreasDropdownOpen && (
                  <div className="bg-gray-800/50 px-6 py-2">
                    <div className="grid grid-cols-2 gap-1">
                      {areasMenu.map((area) => (
                        <Link
                          key={area.name}
                          to={area.path}
                          variant="nav"
                          className="block px-3 py-2 hover:bg-gray-700 rounded transition-colors text-sm"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsAreasDropdownOpen(false)
                          }}
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Mobile Links */}
              <Link
                to="/gallery"
                variant="nav"
                className="block px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                variant="nav"
                className="block px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <Stack spacing="small" className="px-6 pt-4 mt-4 border-t border-gray-800">
                <Button 
                  to="/book-appointment" 
                  variant="primary" 
                  size="medium"
                  fullWidth
                >
                  Get Free Quote
                </Button>
                <Button 
                  href="tel:01457597091" 
                  variant="secondary" 
                  size="medium"
                  fullWidth
                  iconLeft={<Icon name="phone" />}
                >
                  Call 01457 597091
                </Button>
              </Stack>
            </Stack>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default HeaderStandardized