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
  Center,
  Image
} from '../components/ui'

const PerfectFitBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Perfect Fit Blinds -
                <Text as="span" color="gold" className="block">No Drilling Required</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows. No mess, no fuss, just perfect blinds that look stunning and work beautifully.
              </Text>

              <Flex direction="column" smDirection="row" gap="medium">
                <Button 
                  as={Link} 
                  to="/book-appointment" 
                  variant="primary" 
                  size="xlarge"
                >
                  Get Your Free Quote
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
                      <Icon name="spark" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">No Drilling Required</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="check" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Perfect Integration</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="location" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Local Saddleworth Experts</Text>
                  </Stack>
                </Center>
              </Grid>
            </Stack>

            <Image
              src="/images/optimized/perfectfit-monet-flower-1600.jpg"
              alt="Perfect Fit blinds installed in a Saddleworth conservatory"
              variant="hero"
              loading="eager"
            />
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
                  Why Perfect Fit Blinds Are Perfect for Saddleworth Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Perfect Fit blinds are the ideal solution for modern UPVC windows. They clip directly into your window frame without any drilling or screws, making them perfect for rented properties, conservatories, and homeowners who want a clean, professional installation.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Perfect Fit Advantage
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="spark" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">No Drilling Required</Heading>
                    <Text color="light" align="center">
                      Our Perfect Fit blinds use a unique clip system that attaches directly to your UPVC window frame. No holes, no mess, no damage to your property. Perfect for tenants and homeowners who want to avoid permanent modifications.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="check" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Perfect Integration</Heading>
                    <Text color="light" align="center">
                      The blinds sit flush within the window frame, creating a seamless, integrated look. They move with the window when you open it, maintaining perfect alignment and functionality.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="users" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Child Safe Design</Heading>
                    <Text color="light" align="center">
                      With no cords or chains, Perfect Fit blinds are completely child-safe. The innovative design eliminates any dangling parts that could pose a safety risk to children or pets.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Technical Excellence */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Technical Excellence
                </Heading>

                <Grid cols={2} mdCols={3} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">UPVC Compatible</Heading>
                      <Text size="small" color="muted" align="center">Designed specifically for modern UPVC window frames</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">Clip System</Heading>
                      <Text size="small" color="muted" align="center">Secure attachment without drilling or screws</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Perfect Alignment</Heading>
                      <Text size="small" color="muted" align="center">Blinds stay perfectly positioned when windows open</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Child Safe</Heading>
                      <Text size="small" color="muted" align="center">No cords, chains, or dangling parts</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        5
                      </div>
                      <Heading as="h3" size="base" color="white">Easy Operation</Heading>
                      <Text size="small" color="muted" align="center">Smooth, reliable mechanism</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        6
                      </div>
                      <Heading as="h3" size="base" color="white">UV Protection</Heading>
                      <Text size="small" color="muted" align="center">Protects furniture and flooring from sun damage</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Perfect for Saddleworth Properties
                </Heading>
                <Text color="light" align="center">
                  Whether you have a modern new-build in Greenfield or a period property with UPVC windows in Delph, Perfect Fit blinds offer the perfect solution. They work beautifully with all types of UPVC windows and provide a clean, professional finish.
                </Text>
              </Stack>
            </Card>

            {/* Process */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Our Installation Process
                </Heading>

                <Grid cols={2} mdCols={4} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Free Consultation</Heading>
                      <Text size="small" color="muted" align="center">We assess your windows and discuss your requirements</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">Precise Measuring</Heading>
                      <Text size="small" color="muted" align="center">Accurate measurements ensure perfect fitting</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Custom Manufacturing</Heading>
                      <Text size="small" color="muted" align="center">Your Perfect Fit blinds are made to order</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Quick, clean installation with no mess</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Gallery Section */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Perfect Fit Blinds Gallery
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="medium">
                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/perfectfit-monet-flower-400.jpg"
                    alt="Perfect Fit Monet Flower blind in a Saddleworth conservatory"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Monet Flower</Heading>
                    <Text size="small" color="muted">Elegant floral pattern for conservatories</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/perfectfit-blind-white-400.jpg"
                    alt="White Perfect Fit blind providing clean aesthetics"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Classic White</Heading>
                    <Text size="small" color="muted">Clean and timeless for modern homes</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/perfectfit-blind-white-400.jpg"
                    alt="Celeste Perfect Fit blind in soft blue tones"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Celeste Blue</Heading>
                    <Text size="small" color="muted">Soft blue tones for peaceful interiors</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/perfectfit-blind-white-400.jpg"
                    alt="Perfect Fit blinds in neutral concrete tones"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Concrete Tones</Heading>
                    <Text size="small" color="muted">Modern neutral colors for contemporary homes</Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Transform Your Windows Without the Mess</Heading>
                <Text size="xlarge" color="light" align="center">
                  Experience the perfect fit difference. Book your free consultation today and discover how Perfect Fit blinds can enhance your Saddleworth home without any drilling or damage.
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
                    <Text size="small" color="muted">Saddleworth Specialists</Text>
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

export default PerfectFitBlinds