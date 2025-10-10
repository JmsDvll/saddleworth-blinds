import React from 'react'
import {
  Section,
  Container,
  Grid,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Icon,
  Button,
  GoldDivider,
  ShimmerText,
  LuxuryIcon,
  GlowBox,
  LuxuryBadge
} from './ui'
import SunshineLogo from './SunshineLogo'

const FooterLuxury = () => {
  const services = [
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

  const areas = [
    'Uppermill', 'Diggle', 'Delph', 'Greenfield',
    'Dobcross', 'Lydgate', 'Denshaw', 'Friezland',
    'Grasscroft', 'Grotton', 'Springhead', 'Lees'
  ]

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Call to Action Section */}
      <Section background="gold" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <ShimmerText variant="luxury" as="h2" className="text-4xl md:text-5xl font-display font-bold text-center">
              Ready to Transform Your Home?
            </ShimmerText>
            <Text variant="large" align="center" className="max-w-2xl">
              Book your free consultation today and discover the perfect window solutions for your space
            </Text>
            <Flex gap="medium" wrap="wrap" justify="center">
              <Button 
                to="/book-appointment" 
                variant="dark"
                size="large"
                iconLeft={<Icon name="calendar" />}
              >
                Schedule Consultation
              </Button>
              <Button 
                href="tel:01457597091"
                variant="outline"
                size="large"
                iconLeft={<Icon name="phone" />}
              >
                Call 01457 597091
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Main Footer */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            {/* Top Section */}
            <Grid cols={4} gap="large">
              {/* Brand Section */}
              <Stack spacing="medium">
                <GlowBox variant="subtle">
                  <SunshineLogo className="h-16 w-auto mb-4" />
                </GlowBox>
                <Heading size="lg" color="gold">
                  Sunshine Blinds
                </Heading>
                <Text size="small" color="light" leading="relaxed">
                  Your trusted partner for premium window solutions in Saddleworth. 
                  Part of the renowned Sunshine Blinds family, we bring decades of expertise 
                  and uncompromising quality to every home.
                </Text>
                <Stack spacing="small">
                  <LuxuryBadge variant="outline" size="small" icon="star">
                    Est. 1979
                  </LuxuryBadge>
                  <LuxuryBadge variant="outline" size="small" icon="check">
                    5 Star Rated
                  </LuxuryBadge>
                </Stack>
              </Stack>

              {/* Products Section */}
              <Stack spacing="medium">
                <Heading size="base" color="gold">
                  Our Products
                </Heading>
                <GoldDivider variant="simple" size="small" align="left" />
                <Stack spacing="small">
                  {services.map((service) => (
                    <Flex key={service.name} justify="between" align="center">
                      <Link
                        to={service.path}
                        variant="subtle"
                        size="small"
                      >
                        {service.name}
                      </Link>
                      {service.hot && <LuxuryBadge variant="gold" size="tiny" pulse>HOT</LuxuryBadge>}
                      {service.new && <LuxuryBadge variant="outline" size="tiny">NEW</LuxuryBadge>}
                      {service.premium && <LuxuryBadge variant="luxury" size="tiny">PREMIUM</LuxuryBadge>}
                    </Flex>
                  ))}
                </Stack>
              </Stack>

              {/* Service Areas */}
              <Stack spacing="medium">
                <Heading size="base" color="gold">
                  Service Areas
                </Heading>
                <GoldDivider variant="simple" size="small" align="left" />
                <Grid cols={2} gap="small">
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
                </Grid>
              </Stack>

              {/* Contact Section */}
              <Stack spacing="medium">
                <Heading size="base" color="gold">
                  Get In Touch
                </Heading>
                <GoldDivider variant="simple" size="small" align="left" />
                <Stack spacing="medium">
                  <Link
                    href="tel:01457597091"
                    variant="luxury"
                    className="group"
                  >
                    <Flex gap="small" align="center">
                      <LuxuryIcon variant="glow" size="small">
                        <Icon name="phone" />
                      </LuxuryIcon>
                      <Stack spacing="none">
                        <Text size="small" color="muted">Call us today</Text>
                        <Text weight="semibold">01457 597091</Text>
                      </Stack>
                    </Flex>
                  </Link>
                  
                  <Link
                    href="mailto:info@saddleworthblinds.co.uk"
                    variant="subtle"
                    className="group"
                  >
                    <Flex gap="small" align="center">
                      <LuxuryIcon variant="simple" size="small">
                        <Icon name="mail" />
                      </LuxuryIcon>
                      <Text size="small">info@saddleworthblinds.co.uk</Text>
                    </Flex>
                  </Link>

                  <Stack spacing="small">
                    <Text size="small" color="gold" weight="semibold">
                      Showroom Hours
                    </Text>
                    <Text size="small" color="muted">
                      Mon-Fri: 9:00 AM - 5:30 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: By Appointment
                    </Text>
                  </Stack>

                  {/* Social Links */}
                  <Stack spacing="small">
                    <Text size="small" color="gold" weight="semibold">
                      Follow Us
                    </Text>
                    <Flex gap="small">
                      <Link
                        href="https://facebook.com/sunshineblinds"
                        external
                        aria-label="Facebook"
                      >
                        <LuxuryIcon variant="circle" size="small">
                          <Icon name="facebook" />
                        </LuxuryIcon>
                      </Link>
                      <Link
                        href="https://instagram.com/sunshineblinds"
                        external
                        aria-label="Instagram"
                      >
                        <LuxuryIcon variant="circle" size="small">
                          <Icon name="instagram" />
                        </LuxuryIcon>
                      </Link>
                      <Link
                        href="https://twitter.com/sunshineblinds"
                        external
                        aria-label="Twitter"
                      >
                        <LuxuryIcon variant="circle" size="small">
                          <Icon name="twitter" />
                        </LuxuryIcon>
                      </Link>
                    </Flex>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <GoldDivider variant="luxury" size="full" />

            {/* Bottom Section */}
            <Stack spacing="medium">
              {/* Trust Badges */}
              <Flex justify="center" wrap="wrap" gap="large" className="mb-8">
                <GlowBox variant="subtle" intensity="low">
                  <Flex align="center" gap="small">
                    <Icon name="shield" size="medium" className="text-brand-gold" />
                    <Text size="small" weight="medium">5 Year Guarantee</Text>
                  </Flex>
                </GlowBox>
                <GlowBox variant="subtle" intensity="low">
                  <Flex align="center" gap="small">
                    <Icon name="currency" size="medium" className="text-brand-gold" />
                    <Text size="small" weight="medium">Best Price Promise</Text>
                  </Flex>
                </GlowBox>
                <GlowBox variant="subtle" intensity="low">
                  <Flex align="center" gap="small">
                    <Icon name="truck" size="medium" className="text-brand-gold" />
                    <Text size="small" weight="medium">Free Installation</Text>
                  </Flex>
                </GlowBox>
                <GlowBox variant="subtle" intensity="low">
                  <Flex align="center" gap="small">
                    <Icon name="home" size="medium" className="text-brand-gold" />
                    <Text size="small" weight="medium">Free Home Visit</Text>
                  </Flex>
                </GlowBox>
              </Flex>

              {/* Legal Links */}
              <Flex justify="center" wrap="wrap" gap="medium">
                <Link to="/privacy-policy" variant="subtle" size="small">
                  Privacy Policy
                </Link>
                <Text size="small" color="muted">•</Text>
                <Link to="/terms-conditions" variant="subtle" size="small">
                  Terms & Conditions
                </Link>
                <Text size="small" color="muted">•</Text>
                <Link to="/sitemap" variant="subtle" size="small">
                  Sitemap
                </Link>
              </Flex>

              {/* Copyright */}
              <Text size="small" color="muted" align="center">
                © {currentYear} Sunshine Blinds Saddleworth. All rights reserved. 
                Part of the Sunshine Blinds Group.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Luxury Bottom Bar */}
      <Section background="luxury" padding="none">
        <Container>
          <Flex justify="center" align="center" className="py-2">
            <ShimmerText variant="subtle" speed="slow" className="text-sm">
              Premium Window Solutions Since 1979
            </ShimmerText>
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default FooterLuxury