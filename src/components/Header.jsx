import React, { useState, useEffect } from 'react'
import {
  Container,
  Flex,
  Icon,
  Link,
  Button,
  Text,
  Stack,
  Card,
  Badge
} from './ui'

const HeaderStandardized = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBlindsDropdownOpen, setIsBlindsDropdownOpen] = useState(false)
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll detection for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: 'Roller Blinds', path: '/roller-blinds', hot: true },
    { name: 'Venetian Blinds', path: '/venetian-blinds' },
    { name: 'Vertical Blinds', path: '/vertical-blinds' },
    { name: 'Vision Blinds', path: '/vision-blinds', hot: true },
    { name: 'Perfect Fit Blinds', path: '/perfect-fit-blinds' },
    { name: 'Shutters', path: '/shutters' },
    { name: 'Roman Blinds', path: '/roman-blinds', new: true },
    { name: 'Curtains', path: '/curtains' },
    { name: 'Allusion Blinds', path: '/allusion-blinds', new: true }
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

  return (
    <header 
      className={`
        sticky top-0 z-40 transition-all duration-500
        ${isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-lg shadow-2xl shadow-black/50 border-b border-brand-gold/10' 
          : 'bg-brand-dark border-b border-gray-800'
        }
      `}
      role="navigation"
    >
      {/* Premium announcement bar */}
      <div className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-gray-900 py-2 text-center text-sm font-medium animate-shimmer bg-[length:200%_auto]">
        <Container>
          <Flex justify="center" align="center" gap="small">
            <Icon name="sparkle" size="tiny" className="animate-pulse" />
            <span>Special Offer: 20% off all Perfect Fit Blinds this month!</span>
            <Icon name="sparkle" size="tiny" className="animate-pulse" />
          </Flex>
        </Container>
      </div>

      <Container>
        <Flex justify="between" align="center" className="py-4">
          {/* Logo with premium hover effect */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-10 h-10 text-brand-gold relative transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 0l-.707.707m0 11.314l.707.707m-12.728 0l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <Stack spacing="none">
              <Text size="large" weight="bold" className="leading-none group-hover:text-brand-gold transition-colors duration-300">Sunshine Blinds</Text>
              <Text size="small" color="muted">Saddleworth</Text>
            </Stack>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden lg:block">
            <Flex as="ul" gap="small">
              <li>
                <Link.Nav to="/" iconLeft={<Icon name="home" size="small" />}>
                  Home
                </Link.Nav>
              </li>
              
              {/* Enhanced Products Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleBlindsDropdown}
                  onMouseEnter={() => setIsBlindsDropdownOpen(true)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Products</span>
                  <Icon name={isBlindsDropdownOpen ? 'chevronUp' : 'chevronDown'} size="small" className="relative z-10 transition-transform duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </button>
                
                {/* Premium dropdown menu */}
                <div 
                  className={`
                    absolute top-full left-0 w-64 mt-2
                    transition-all duration-300 origin-top
                    ${isBlindsDropdownOpen 
                      ? 'opacity-100 scale-y-100 pointer-events-auto' 
                      : 'opacity-0 scale-y-95 pointer-events-none'
                    }
                  `}
                  onMouseLeave={() => setIsBlindsDropdownOpen(false)}
                >
                  <Card variant="elevated" hover="none" padding="small" className="backdrop-blur-xl bg-brand-dark-lighter/95 border-brand-gold/20">
                    <Stack spacing="small">
                      {blindsMenu.map((item) => (
                        <Link 
                          key={item.path}
                          to={item.path}
                          className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-brand-gold/10 transition-all duration-300"
                          onClick={() => setIsBlindsDropdownOpen(false)}
                        >
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {item.name}
                          </span>
                          {item.hot && <Badge variant="primary" size="tiny" glow>HOT</Badge>}
                          {item.new && <Badge variant="secondary" size="tiny" glow>NEW</Badge>}
                        </Link>
                      ))}
                    </Stack>
                  </Card>
                </div>
              </li>

              {/* Enhanced Areas Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleAreasDropdown}
                  onMouseEnter={() => setIsAreasDropdownOpen(true)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Areas</span>
                  <Icon name={isAreasDropdownOpen ? 'chevronUp' : 'chevronDown'} size="small" className="relative z-10 transition-transform duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </button>
                
                <div 
                  className={`
                    absolute top-full left-0 w-56 mt-2
                    transition-all duration-300 origin-top
                    ${isAreasDropdownOpen 
                      ? 'opacity-100 scale-y-100 pointer-events-auto' 
                      : 'opacity-0 scale-y-95 pointer-events-none'
                    }
                  `}
                  onMouseLeave={() => setIsAreasDropdownOpen(false)}
                >
                  <Card variant="elevated" hover="none" padding="small" className="backdrop-blur-xl bg-brand-dark-lighter/95 border-brand-gold/20">
                    <div className="grid grid-cols-2 gap-1">
                      {areasMenu.map((item) => (
                        <Link 
                          key={item.path}
                          to={item.path}
                          className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-brand-gold/10 transition-all duration-300 text-sm"
                          onClick={() => setIsAreasDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Card>
                </div>
              </li>

              <li>
                <Link.Nav to="/gallery" iconLeft={<Icon name="grid" size="small" />}>
                  Gallery
                </Link.Nav>
              </li>
              <li>
                <Link.Nav to="/contact" iconLeft={<Icon name="mail" size="small" />}>
                  Contact
                </Link.Nav>
              </li>
            </Flex>
          </nav>

          {/* CTA Buttons with premium styling */}
          <Flex gap="medium" className="hidden lg:flex">
            <a 
              href="tel:01457597091" 
              className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-all duration-300 group"
            >
              <div className="relative">
                <Icon name="phone" size="medium" className="animate-pulse" />
                <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-md"></div>
              </div>
              <Stack spacing="none">
                <Text size="small" color="muted">Call Now</Text>
                <Text weight="bold" className="group-hover:text-brand-gold-light transition-colors">01457 597091</Text>
              </Stack>
            </a>
            
            <Button 
              as={Link} 
              to="/book-appointment" 
              variant="primary" 
              size="medium"
              glow
              iconRight={<Icon name="arrowRight" />}
            >
              Free Quote
            </Button>
          </Flex>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 transition-all duration-300 group"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-brand-gold/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Icon 
              name={isMobileMenuOpen ? 'close' : 'menu'} 
              size="medium" 
              className="text-brand-gold relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        </Flex>

        {/* Premium Mobile Menu */}
        <div 
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="py-4 border-t border-gray-800">
            <Stack spacing="small">
              <Link 
                to="/" 
                variant="nav" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-between"
              >
                <Flex align="center" gap="small">
                  <Icon name="home" size="small" />
                  Home
                </Flex>
              </Link>

              {/* Mobile Products Section */}
              <div>
                <button
                  onClick={toggleBlindsDropdown}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <span>Products</span>
                  <Icon name={isBlindsDropdownOpen ? 'chevronUp' : 'chevronDown'} size="small" />
                </button>
                
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${isBlindsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <Stack spacing="small" className="pl-6 pt-2">
                    {blindsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center justify-between text-gray-400 hover:text-white py-2 transition-colors duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsBlindsDropdownOpen(false)
                        }}
                      >
                        {item.name}
                        {item.hot && <Badge variant="primary" size="tiny">HOT</Badge>}
                        {item.new && <Badge variant="secondary" size="tiny">NEW</Badge>}
                      </Link>
                    ))}
                  </Stack>
                </div>
              </div>

              {/* Mobile Areas Section */}
              <div>
                <button
                  onClick={toggleAreasDropdown}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <span>Areas</span>
                  <Icon name={isAreasDropdownOpen ? 'chevronUp' : 'chevronDown'} size="small" />
                </button>
                
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${isAreasDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="grid grid-cols-2 gap-2 pl-6 pt-2">
                    {areasMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-gray-400 hover:text-white py-2 text-sm transition-colors duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsAreasDropdownOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/gallery" 
                variant="nav" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-between"
              >
                <Flex align="center" gap="small">
                  <Icon name="grid" size="small" />
                  Gallery
                </Flex>
              </Link>

              <Link 
                to="/contact" 
                variant="nav" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-between"
              >
                <Flex align="center" gap="small">
                  <Icon name="mail" size="small" />
                  Contact
                </Flex>
              </Link>

              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-gray-800">
                <Stack spacing="medium">
                  <a 
                    href="tel:01457597091" 
                    className="flex items-center justify-center gap-3 py-3 bg-brand-gold/10 hover:bg-brand-gold/20 rounded-lg transition-all duration-300"
                  >
                    <Icon name="phone" size="medium" className="text-brand-gold" />
                    <div>
                      <Text size="small" color="muted">Call Now</Text>
                      <Text weight="bold" className="text-brand-gold">01457 597091</Text>
                    </div>
                  </a>
                  
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="large"
                    fullWidth
                    glow
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Free Consultation
                  </Button>
                </Stack>
              </div>
            </Stack>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default HeaderStandardized