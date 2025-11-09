import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AnnouncementBar,
  Button,
  Container,
  DropdownWrapper,
  Flex,
  HeaderWrapper,
  Icon,
  Link,
  List,
  LuxuryIcon,
  MobileMenuWrapper,
  MobileToggle,
  NavButton,
  Navigation,
  Section,
  ShimmerText,
  Stack,
  Text,
} from './ui'
import SunshineLogo from './SunshineLogo'

const HeaderStandardized = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productLinks = [
    { name: 'Allusion Blinds', href: '/allusion-blinds' },
    { name: 'Curtains', href: '/curtains' },
    { name: 'Perfect Fit Blinds', href: '/perfect-fit-blinds' },
    { name: 'Roller Blinds', href: '/roller-blinds' },
    { name: 'Roman Blinds', href: '/roman-blinds' },
    { name: 'Shutters', href: '/shutters' },
    { name: 'Venetian Blinds', href: '/venetian-blinds' },
    { name: 'Vertical Blinds', href: '/vertical-blinds' },
    { name: 'Vision Blinds', href: '/vision-blinds' },
  ]

  const areaLinks = [
    { name: 'Uppermill', href: '/areas/uppermill' },
    { name: 'Diggle', href: '/areas/diggle' },
    { name: 'Delph', href: '/areas/delph' },
    { name: 'Greenfield', href: '/areas/greenfield' },
    { name: 'Dobcross', href: '/areas/dobcross' },
    { name: 'Lydgate', href: '/areas/lydgate' },
    { name: 'Denshaw', href: '/areas/denshaw' },
    { name: 'Friezland', href: '/areas/friezland' },
    { name: 'Grasscroft', href: '/areas/grasscroft' },
    { name: 'Grotton', href: '/areas/grotton' },
    { name: 'Lees', href: '/areas/lees' },
    { name: 'Springhead', href: '/areas/springhead' },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar show={!isScrolled}>
        <Section background="gold" padding="none">
          <Container>
            <Flex justify="center" align="center">
              <LuxuryIcon variant="simple" size="tiny" animation="pulse">
                <Icon name="sparkle" />
              </LuxuryIcon>
              <Text variant="small" weight="semibold">
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
          <Flex justify="between" align="center">
            {/* Logo */}
            <RouterLink to="/">
              <Flex align="center" gap="medium">
                <SunshineLogo height={56} width={72} />
                <Stack spacing="none">
                  <ShimmerText variant="luxury" as="span">
                    Sunshine
                  </ShimmerText>
                  <Text variant="small" color="muted">
                    Premium Blinds
                  </Text>
                </Stack>
              </Flex>
            </RouterLink>

            {/* Desktop Navigation */}
            <Navigation aria-label="Primary">
              <List as="ul" direction="row" gap="small" className="items-center">
                <List.Item>
                  <Link to="/" variant="nav">Home</Link>
                </List.Item>
                
                {/* Products Dropdown */}
                <List.Item>
                  <DropdownWrapper 
                    isOpen={openDropdown === 'products'}
                    onMouseEnter={() => setOpenDropdown('products')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavButton>
                      Products
                      <Icon name="chevronDown" size="tiny" />
                    </NavButton>
                    <Stack spacing="none">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          variant="dropdown"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Stack>
                  </DropdownWrapper>
                </List.Item>

                {/* Areas Dropdown */}
                <List.Item>
                  <DropdownWrapper 
                    isOpen={openDropdown === 'areas'}
                    onMouseEnter={() => setOpenDropdown('areas')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavButton>
                      Areas We Cover
                      <Icon name="chevronDown" size="tiny" />
                    </NavButton>
                    <Stack spacing="none">
                      {areaLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          variant="dropdown"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Stack>
                  </DropdownWrapper>
                </List.Item>

                <List.Item>
                  <Link to="/gallery" variant="nav">Gallery</Link>
                </List.Item>
                <List.Item>
                  <Link to="/contact" variant="nav">Contact</Link>
                </List.Item>
              </List>
            </Navigation>

            {/* CTA Buttons */}
            <Flex gap="small" align="center">
              <Link href="tel:01457597091" variant="button" size="small">
                <Icon name="phone" />
                <span>01457 597091</span>
              </Link>
              <Button to="/book-appointment" variant="luxury" size="small">
                Free Quote
              </Button>
              
              {/* Mobile Menu Toggle */}
              <MobileToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </Flex>
          </Flex>
        </Container>

        {/* Mobile Menu */}
        <MobileMenuWrapper isOpen={isMobileMenuOpen}>
          <Container>
            <Stack spacing="medium">
              <Link to="/" variant="mobileNav" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              
              {/* Mobile Products */}
              <Stack spacing="small">
                <Text weight="semibold" color="gold">Products</Text>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    variant="mobileNav"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>

              {/* Mobile Areas */}
              <Stack spacing="small">
                <Text weight="semibold" color="gold">Areas We Cover</Text>
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    variant="mobileNav"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>

              <Link to="/gallery" variant="mobileNav" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/contact" variant="mobileNav" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile CTA */}
              <Stack spacing="small">
                <Button
                  to="/book-appointment"
                  variant="luxury"
                  size="medium"
                  fullWidth
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Button>
                <Button
                  href="tel:01457597091"
                  variant="outline"
                  size="medium"
                  fullWidth
                  iconLeft={<Icon name="phone" />}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Call 01457 597091
                </Button>
              </Stack>
            </Stack>
          </Container>
        </MobileMenuWrapper>
      </HeaderWrapper>
    </>
  )
}

export default HeaderStandardized