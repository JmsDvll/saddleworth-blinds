import React from 'react'
import { 
  Section, 
  Container, 
  Grid, 
  Heading, 
  Text, 
  Button, 
  Card, 
  Icon, 
  Link, 
  Stack,
  Flex,
  Center
} from '../components/ui'
import HeroCarousel from '../components/HeroCarousel'

const Uppermill = () => {
  const areaHeroImages = [
    {
      src: 'vision-floreale-rosa-1600.jpg',
      alt: 'Beautiful window blinds in an Uppermill home',
      title: 'Uppermill Style',
      description: 'Elegant blinds for Victorian terraces'
    },
    {
      src: 'vision-firenze-walnut-1600.jpg',
      alt: 'Premium blinds showcasing beautiful wood tones in Uppermill',
      title: 'Natural Wood',
      description: 'Warm tones for traditional homes'
    },
    {
      src: 'vision-lusso-pebble-1600.jpg',
      alt: 'Modern blinds in neutral tones for Uppermill interiors',
      title: 'Contemporary',
      description: 'Clean modern aesthetics'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Window Blinds in
                <Text as="span" color="gold" className="block">Uppermill</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Beautiful window blinds for Uppermill homes. From Victorian terraces to modern extensions, we understand what works best in this charming Saddleworth village.
              </Text>

              <Flex direction="column" smDirection="row" gap="medium">
                <Button 
                  as={Link} 
                  to="/book-appointment" 
                  variant="primary" 
                  size="xlarge"
                >
                  Book Free Quote in Uppermill
                </Button>
                <Button 
                  as="a" 
                  href="tel:01457597091" 
                  variant="secondary" 
                  size="xlarge"
                  iconLeft={<Icon name="phone" />}
                >
                  Call 01457 597091
                </Button>
              </Flex>

              <Grid cols={3} gap="medium" className="pt-8">
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Victorian Terraces</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="location" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Local Uppermill Experts</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="calendar" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">20+ Years Experience</Text>
                  </Stack>
                </Center>
              </Grid>
            </Stack>

            <div className="relative">
              <HeroCarousel images={areaHeroImages} autoRotate={true} interval={6000} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section padding="large">
        <Container maxWidth="medium">
          <Stack spacing="xlarge">
            {/* Intro Section */}
            <Center>
              <Stack spacing="medium" align="center" className="max-w-3xl">
                <Heading as="h2" size="3xl" mdSize="4xl">
                  Window Blinds for Uppermill Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Uppermill is the heart of Saddleworth, with its beautiful Victorian terraces, stone cottages, and modern developments along the River Tame. We've been fitting blinds in Uppermill homes for over 20 years, understanding the unique character of this historic village.
                </Text>
              </Stack>
            </Center>

            {/* Property Types */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Perfect Blinds for Uppermill Properties
              </Heading>
              
              <Grid cols={1} mdCols={2} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Victorian Terraces</Heading>
                    <Text color="light" align="center">
                      Many Uppermill homes are period properties with original sash windows. We specialise in solutions that preserve the character while providing modern functionality.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Wooden venetian blinds for authentic period charm</Text>
                      <Text size="small" color="muted">• Roman blinds for elegant window treatments</Text>
                      <Text size="small" color="muted">• Shutters that complement Victorian architecture</Text>
                      <Text size="small" color="muted">• Motorised options for hard-to-reach windows</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Modern Extensions</Heading>
                    <Text color="light" align="center">
                      Many Uppermill homes have been extended with contemporary additions. We help bridge the gap between old and new with stylish, modern window treatments.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Sleek roller blinds for clean, modern lines</Text>
                      <Text size="small" color="muted">• Vision blinds for open-plan living spaces</Text>
                      <Text size="small" color="muted">• Vertical blinds for bi-fold doors and extensions</Text>
                      <Text size="small" color="muted">• Perfect Fit blinds for UPVC windows</Text>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Local Expertise
                </Heading>
                <Text color="light" align="center">
                  Having fitted blinds throughout Uppermill for two decades, we understand the unique challenges and opportunities of local properties. From wonky Victorian walls to modern steel beams, we've seen it all and know how to handle it perfectly.
                </Text>
              </Stack>
            </Card>

            {/* Service Info */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Our Uppermill Service
                </Heading>
                <Text color="light" align="center">
                  We offer completely free home consultations throughout Uppermill, including evenings and weekends to suit your schedule. Our experienced team will come to your home, measure your windows, show you samples, and provide honest advice with no obligation to buy.
                </Text>
              </Stack>
            </Card>

            {/* Why Choose Us */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Why Choose Us in Uppermill?
                </Heading>

                <Grid cols={1} mdCols={3} lgCols={5} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Local Knowledge</Heading>
                      <Text size="small" color="muted" align="center">We understand Uppermill's unique architectural styles</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">20+ Years Experience</Heading>
                      <Text size="small" color="muted" align="center">Fitting blinds in hundreds of local homes</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Expert fitting included in every quote</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Comprehensive Warranty</Heading>
                      <Text size="small" color="muted" align="center">Full warranty on all products and installation</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        5
                      </div>
                      <Heading as="h3" size="base" color="white">Fair Pricing</Heading>
                      <Text size="small" color="muted" align="center">Competitive prices with no hidden fees</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Ready to Transform Your Uppermill Home?</Heading>
                <Text size="xlarge" color="light" align="center">
                  Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible in your Uppermill home.
                </Text>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="xlarge"
                  >
                    Book Your Free Visit
                  </Button>
                  <Button 
                    as="a" 
                    href="tel:01457597091" 
                    variant="secondary" 
                    size="xlarge"
                  >
                    Call for a Chat
                  </Button>
                </Flex>

                <Flex gap="large" className="mt-8">
                  <Flex align="center" gap="small">
                    <Icon name="check" size="small" color="muted" />
                    <Text size="small" color="muted">Completely Free</Text>
                  </Flex>
                  <Flex align="center" gap="small">
                    <Icon name="lock" size="small" color="muted" />
                    <Text size="small" color="muted">No Obligation</Text>
                  </Flex>
                  <Flex align="center" gap="small">
                    <Icon name="location" size="small" color="muted" />
                    <Text size="small" color="muted">Covering Uppermill</Text>
                  </Flex>
                </Flex>
              </Stack>
            </Center>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default Uppermill