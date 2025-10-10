import React from 'react'
import {
  Container,
  Grid,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Icon
} from './ui'
import SunshineLogo from './SunshineLogo'

const FooterStandardized = () => {
  const services = [
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

  const areas = [
    'Uppermill', 'Diggle', 'Delph', 'Greenfield',
    'Dobcross', 'Lydgate', 'Denshaw', 'Friezland',
    'Grasscroft', 'Grotton', 'Springhead', 'Lees'
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-brand-cream border-t border-brand-gold/20 mt-16" role="contentinfo">
      <Container padding="large">
        <Stack spacing="xlarge">
          {/* Main Footer Content */}
          <Grid cols={4} gap="large">
            {/* About Section */}
            <Stack spacing="medium">
              <SunshineLogo className="h-12 w-auto mb-4" />
              <Heading.H3 size="h5" color="white">About Sunshine Blinds Saddleworth</Heading.H3>
              <Text size="small" color="light">
                Your local window blind specialists, part of the trusted Sunshine Blinds family. 
                We're dedicated to serving Saddleworth with quality blinds, expert fitting, 
                and outstanding service.
              </Text>
            </Stack>

            {/* Services Section */}
            <Stack spacing="medium">
              <Heading.H3 size="h5">Our Services</Heading.H3>
              <Stack spacing="small">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    variant="subtle"
                    size="small"
                  >
                    {service.name}
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Areas Section */}
            <Stack spacing="medium">
              <Heading.H3 size="h5">Areas We Cover</Heading.H3>
              <div className="grid grid-cols-2 gap-2">
                {areas.map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    variant="subtle"
                    size="small"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </Stack>

            {/* Contact Section */}
            <Stack spacing="medium">
              <Heading.H3 size="h5">Get In Touch</Heading.H3>
              <Stack spacing="small">
                <Link
                  href="tel:01457597091"
                  variant="default"
                  size="small"
                  className="font-semibold"
                >
                  <Flex gap="small" align="center">
                    <Icon name="phone" size="small" />
                    <span>01457 597091</span>
                  </Flex>
                </Link>
                
                <Link
                  href="mailto:sales@saddleworthblinds.co.uk"
                  variant="subtle"
                  size="small"
                >
                  <Flex gap="small" align="center">
                    <Icon name="email" size="small" />
                    <span>sales@saddleworthblinds.co.uk</span>
                  </Flex>
                </Link>
                
                <Flex gap="small" align="start">
                  <Icon name="mapPin" size="small" color="muted" className="mt-0.5" />
                  <Text size="small" color="muted">
                    6 Rochdale Road<br />
                    Shaw, Oldham<br />
                    OL2 8AD
                  </Text>
                </Flex>
                
                <Text size="small" color="muted">
                  <strong>Hours:</strong><br />
                  Mon-Fri: 9am-5pm<br />
                  Saturday: 10am-4pm<br />
                  Sunday: Closed
                </Text>
              </Stack>
            </Stack>
          </Grid>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <Flex 
              direction="col" 
              align="center" 
              gap="medium"
              className="lg:flex-row lg:justify-between"
            >
              {/* Copyright */}
              <Text size="small" color="muted">
                © {currentYear} Sunshine Blinds Saddleworth. All rights reserved. 
                Part of the Sunshine Blinds family of trusted local businesses.
              </Text>
              
              {/* Legal Links */}
              <Flex gap="large">
                <Link
                  to="/privacy-policy"
                  variant="subtle"
                  size="small"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  variant="subtle"
                  size="small"
                >
                  Terms & Conditions
                </Link>
              </Flex>
            </Flex>
          </div>
        </Stack>
      </Container>
    </footer>
  )
}

export default FooterStandardized