import React from 'react'
import {
  Button,
  Card,
  Container,
  Flex,
  GoldDivider,
  Grid,
  Heading,
  Icon,
  Link,
  LuxuryIcon,
  Section,
  Stack,
  Text,
} from './ui'
import SunshineLogo from './SunshineLogo'

const FooterLuxury = () => {
  const services = [
    { name: 'Roller Blinds', path: '/roller-blinds' },
    { name: 'Venetian Blinds', path: '/venetian-blinds' },
    { name: 'Vertical Blinds', path: '/vertical-blinds' },
    { name: 'Vision Blinds', path: '/vision-blinds' },
    { name: 'Perfect Fit Blinds', path: '/perfect-fit-blinds' },
    { name: 'Shutters', path: '/shutters' },
  ]

  const areas = [
    'Uppermill', 'Diggle', 'Delph', 'Greenfield',
    'Dobcross', 'Lydgate', 'Denshaw', 'Friezland',
  ]

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* CTA Section */}
      <Section as="aside" role="complementary" aria-label="Get a free quote" background="luxury" padding="large">
        <Container>
          <Card variant="dark" padding="large">
            <Grid cols={2} gap="xlarge" align="center">
              <Stack spacing="medium">
                <Heading size="2xl" color="gold">
                  Ready to Transform Your Windows?
                </Heading>
                <Text size="large" color="light">
                  Get your free quote today and join thousands of satisfied customers across Saddleworth
                </Text>
              </Stack>
              <Flex gap="medium" justify="end">
                <Button 
                  to="/book-appointment"
                  variant="luxury"
                  size="large"
                  iconLeft={<Icon name="calendar" />}
                >
                  Book Consultation
                </Button>
                <Button 
                  href="tel:01457597091"
                  variant="outline"
                  size="large"
                  iconLeft={<Icon name="phone" />}
                >
                  Call Now
                </Button>
              </Flex>
            </Grid>
          </Card>
        </Container>
      </Section>

      {/* Main Footer */}
      <Section as="footer" role="contentinfo" aria-label="Website footer">
        <Section background="dark" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              {/* Main Footer Content */}
              <Grid cols={4} gap="xlarge">
                {/* About Section */}
                <Stack spacing="medium">
                  <SunshineLogo height={48} width={64} />
                  <Text size="small" color="light">
                    Your trusted local window blind specialists since 1979. 
                    We&apos;re dedicated to serving Saddleworth with quality blinds, 
                    expert fitting, and outstanding service.
                  </Text>
                  <Flex gap="small">
                    <LuxuryIcon variant="circle" size="small">
                      <Icon name="facebook" />
                    </LuxuryIcon>
                    <LuxuryIcon variant="circle" size="small">
                      <Icon name="instagram" />
                    </LuxuryIcon>
                    <LuxuryIcon variant="circle" size="small">
                      <Icon name="twitter" />
                    </LuxuryIcon>
                  </Flex>
                </Stack>

                {/* Products */}
                <Stack spacing="medium">
                  <Heading size="base" color="gold">
                    Our Products
                  </Heading>
                  <Stack spacing="small">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        variant="footer"
                        size="small"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </Stack>
                </Stack>

                {/* Service Areas */}
                <Stack spacing="medium">
                  <Heading size="base" color="gold">
                    Areas We Cover
                  </Heading>
                  <Stack spacing="small">
                    {areas.map((area) => (
                      <Link
                        key={area}
                        to={`/areas/${area.toLowerCase()}`}
                        variant="footer"
                        size="small"
                      >
                        {area}
                      </Link>
                    ))}
                  </Stack>
                </Stack>

                {/* Contact */}
                <Stack spacing="medium">
                  <Heading size="base" color="gold">
                    Get In Touch
                  </Heading>
                  <Stack spacing="small">
                    <Flex gap="small" align="center">
                      <Icon name="phone" size="small" color="#CABC32" />
                      <Link href="tel:01457597091" variant="footer">
                        01457 597091
                      </Link>
                    </Flex>
                    <Flex gap="small" align="center">
                      <Icon name="mail" size="small" color="#CABC32" />
                      <Link href="mailto:info@saddleworthblinds.co.uk" variant="footer" size="small">
                        info@saddleworthblinds.co.uk
                      </Link>
                    </Flex>
                    <Flex gap="small" align="start">
                      <Icon name="location" size="small" color="#CABC32" />
                      <Text size="small" color="light">
                        Serving all of Saddleworth<br />
                        and Greater Manchester
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Grid>

              <GoldDivider variant="simple" />

              {/* Trust Badges */}
              <Grid cols={4} gap="medium">
                <Flex align="center" gap="small">
                  <LuxuryIcon variant="simple" size="small">
                    <Icon name="shield" />
                  </LuxuryIcon>
                  <Text size="small" color="light">5 Year Guarantee</Text>
                </Flex>
                <Flex align="center" gap="small">
                  <LuxuryIcon variant="simple" size="small">
                    <Icon name="star" />
                  </LuxuryIcon>
                  <Text size="small" color="light">5★ Rated Service</Text>
                </Flex>
                <Flex align="center" gap="small">
                  <LuxuryIcon variant="simple" size="small">
                    <Icon name="truck" />
                  </LuxuryIcon>
                  <Text size="small" color="light">Free Installation</Text>
                </Flex>
                <Flex align="center" gap="small">
                  <LuxuryIcon variant="simple" size="small">
                    <Icon name="home" />
                  </LuxuryIcon>
                  <Text size="small" color="light">Family Business</Text>
                </Flex>
              </Grid>

              <GoldDivider variant="simple" />

              {/* Bottom Bar */}
              <Flex justify="between" align="center" wrap="wrap" gap="medium">
                <Text size="small" color="light">
                  © {currentYear} Sunshine Blinds Saddleworth. All rights reserved.
                </Text>
                <Flex gap="medium">
                  <Link to="/privacy-policy" variant="footer" size="small">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-conditions" variant="footer" size="small">
                    Terms & Conditions
                  </Link>
                </Flex>
              </Flex>
            </Stack>
          </Container>
        </Section>
      </Section>
    </>
  )
}

export default FooterLuxury