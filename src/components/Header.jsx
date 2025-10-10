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
  Grid,
  LuxuryBadge,
  GoldDivider,
  ShimmerText,
  LuxuryIcon,
  Section,
  HeaderWrapper,
  MobileMenuWrapper,
  DropdownWrapper,
  NavButton,
  MobileToggle,
  AnnouncementBar
} from './ui'
import SunshineLogo from './SunshineLogo'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBlindsDropdownOpen, setIsBlindsDropdownOpen] = useState(false)
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
    { name: 'Shutters', path: '/shutters', premium: true },
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
    <>
      {/* Announcement Bar */}
      <AnnouncementBar isVisible={!isScrolled}>
        <Section padding="none" background="gold">
          <Container>
            <Flex justify="center" align="center" className="py-3">
              <LuxuryIcon variant="simple" size="tiny" animation="pulse">
                <Icon name="sparkle" />
              </LuxuryIcon>
              <Text variant="small" className="mx-3 font-semibold uppercase tracking-luxury">
                Exclusive Offer: 20% off all Perfect Fit Blinds
              </Text>
              <LuxuryIcon variant="simple" size="tiny" animation="pulse">
                <Icon name="sparkle" />
              </LuxuryIcon>
            </Flex>
          </Container>
        </Section>
      </AnnouncementBar>

      {/* Main Header */}
      <HeaderWrapper isScrolled={isScrolled}>
        <Container>
          <Flex justify="between" align="center" className="py-4">
            {/* Logo */}
            <Link to="/" variant="plain" className="group">
              <Flex align="center" gap="medium">
                <SunshineLogo className="h-14 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-gold" />
                <Stack spacing="none" className="hidden md:block">
                  <ShimmerText variant="luxury" as="span" className="text-2xl font-display font-bold">
                    Sunshine
                  </ShimmerText>
                  <Text variant="small" color="muted" className="uppercase tracking-luxury">
                    Premium Blinds
                  </Text>
                </Stack>
              </Flex>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <Flex as="ul" gap="small" align="center">
                <li>
                  <Link variant="nav" to="/">
                    <Flex align="center" gap="small">
                      <Icon name="home" size="small" />
                      <span>Home</span>
                    </Flex>
                  </Link>
                </li>
                
                {/* Products Dropdown */}
                <li className="relative">
                  <NavButton
                    onClick={toggleBlindsDropdown}
                    onMouseEnter={() => setIsBlindsDropdownOpen(true)}
                  >
                    <span>Products</span>
                    <Icon 
                      name={isBlindsDropdownOpen ? 'chevronUp' : 'chevronDown'} 
                      size="small" 
                      className="transition-transform duration-300"
                    />
                  </NavButton>
                  
                  {/* Luxury dropdown */}
                  <DropdownWrapper 
                    isOpen={isBlindsDropdownOpen}
                    size="large"
                    onMouseLeave={() => setIsBlindsDropdownOpen(false)}
                  >
                    <Card variant="luxury" hover="none" padding="small" className="shadow-luxury-lg">
                      <Stack spacing="small">
                        {blindsMenu.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path}
                            variant="menu"
                            onClick={() => setIsBlindsDropdownOpen(false)}
                          >
                            <Flex justify="between" align="center">
                              <Text variant="menu">{item.name}</Text>
                              {item.hot && <LuxuryBadge variant="gold" size="tiny" icon="star">HOT</LuxuryBadge>}
                              {item.new && <LuxuryBadge variant="outline" size="tiny" icon="sparkle">NEW</LuxuryBadge>}
                              {item.premium && <LuxuryBadge variant="luxury" size="tiny" icon="crown">PREMIUM</LuxuryBadge>}
                            </Flex>
                          </Link>
                        ))}
                      </Stack>
                    </Card>
                  </DropdownWrapper>
                </li>

                {/* Areas Dropdown */}
                <li className="relative">
                  <NavButton
                    onClick={toggleAreasDropdown}
                    onMouseEnter={() => setIsAreasDropdownOpen(true)}
                  >
                    <span>Areas</span>
                    <Icon 
                      name={isAreasDropdownOpen ? 'chevronUp' : 'chevronDown'} 
                      size="small"
                      className="transition-transform duration-300" 
                    />
                  </NavButton>
                  
                  <DropdownWrapper 
                    isOpen={isAreasDropdownOpen}
                    size="medium"
                    onMouseLeave={() => setIsAreasDropdownOpen(false)}
                  >
                    <Card variant="luxury" hover="none" padding="small" className="shadow-luxury-lg">
                      <Text variant="small" color="gold" className="font-semibold uppercase tracking-luxury mb-3">
                        We Serve
                      </Text>
                      <Grid cols={2} gap="small">
                        {areasMenu.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path}
                            variant="menu"
                            className="text-sm"
                            onClick={() => setIsAreasDropdownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Grid>
                    </Card>
                  </DropdownWrapper>
                </li>

                <li>
                  <Link variant="nav" to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link variant="nav" to="/contact">Contact</Link>
                </li>
              </Flex>
            </nav>

            {/* CTA Buttons */}
            <Flex gap="small" align="center">
              <Button 
                to="/book-appointment" 
                variant="luxury" 
                size="small"
                className="hidden md:flex"
                iconLeft={<Icon name="calendar" size="small" />}
              >
                Book Consultation
              </Button>
              
              {/* Mobile Menu Toggle */}
              <MobileToggle
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="medium" />
              </MobileToggle>
            </Flex>
          </Flex>
        </Container>

        {/* Mobile Menu */}
        <MobileMenuWrapper isOpen={isMobileMenuOpen}>
          <Container className="h-full overflow-y-auto py-8">
            <Stack spacing="large">
              {/* Mobile Navigation Links */}
              <Link variant="mobileNav" to="/" onClick={toggleMobileMenu}>
                <Flex align="center" gap="medium">
                  <LuxuryIcon variant="circle" size="small">
                    <Icon name="home" />
                  </LuxuryIcon>
                  <Text variant="large">Home</Text>
                </Flex>
              </Link>

              {/* Mobile Products Section */}
              <div>
                <Text variant="large" color="gold" className="font-display mb-4">
                  Our Products
                </Text>
                <Stack spacing="small">
                  {blindsMenu.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      variant="mobileNav"
                      onClick={toggleMobileMenu}
                    >
                      <Flex justify="between" align="center">
                        <Text>{item.name}</Text>
                        {item.hot && <LuxuryBadge variant="gold" size="tiny">HOT</LuxuryBadge>}
                        {item.new && <LuxuryBadge variant="outline" size="tiny">NEW</LuxuryBadge>}
                        {item.premium && <LuxuryBadge variant="luxury" size="tiny">PREMIUM</LuxuryBadge>}
                      </Flex>
                    </Link>
                  ))}
                </Stack>
              </div>

              <GoldDivider variant="luxury" size="full" />

              {/* Mobile Areas Section */}
              <div>
                <Text variant="large" color="gold" className="font-display mb-4">
                  Service Areas
                </Text>
                <Grid cols={2} gap="medium">
                  {areasMenu.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      variant="mobileNav"
                      onClick={toggleMobileMenu}
                      className="text-center"
                    >
                      <Text variant="small">{item.name}</Text>
                    </Link>
                  ))}
                </Grid>
              </div>

              <GoldDivider variant="luxury" size="full" />

              {/* Other Links */}
              <Link variant="mobileNav" to="/gallery" onClick={toggleMobileMenu}>
                <Flex align="center" gap="medium">
                  <LuxuryIcon variant="circle" size="small">
                    <Icon name="image" />
                  </LuxuryIcon>
                  <Text variant="large">Gallery</Text>
                </Flex>
              </Link>

              <Link variant="mobileNav" to="/contact" onClick={toggleMobileMenu}>
                <Flex align="center" gap="medium">
                  <LuxuryIcon variant="circle" size="small">
                    <Icon name="mail" />
                  </LuxuryIcon>
                  <Text variant="large">Contact</Text>
                </Flex>
              </Link>

              {/* Mobile CTA */}
              <Button 
                to="/book-appointment" 
                variant="luxury" 
                size="large"
                fullWidth
                onClick={toggleMobileMenu}
                iconLeft={<Icon name="calendar" />}
              >
                Book Free Consultation
              </Button>

              {/* Contact Info */}
              <Card variant="gold" padding="medium">
                <Stack spacing="small" align="center">
                  <ShimmerText variant="luxury" className="text-2xl font-display">
                    Call Us Today
                  </ShimmerText>
                  <Link to="tel:01614570250" variant="plain">
                    <Text variant="large" className="font-semibold">
                      0161 457 0250
                    </Text>
                  </Link>
                </Stack>
              </Card>
            </Stack>
          </Container>
        </MobileMenuWrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header