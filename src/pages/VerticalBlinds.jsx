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
import VerticalBlindsCarousel from '../components/VerticalBlindsCarousel'

const VerticalBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Vertical Blinds for
                <Text as="span" color="gold" className="block">Large Windows</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Got big windows or patio doors? Vertical blinds are your best friend. Easy to operate, great light control, and perfect for those gorgeous Saddleworth views.
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
                      <Icon name="building" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Perfect for Large Windows</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Excellent Light Control</Text>
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

            <div className="relative">
              <VerticalBlindsCarousel showTitle={false} showDescription={false} />
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
                  Why Vertical Blinds Are Perfect for Large Windows
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Vertical blinds are the ideal solution for large windows, patio doors, and bi-fold doors. They provide excellent light control while maintaining your beautiful views. Popular throughout Saddleworth for both modern extensions and traditional properties with large window spaces.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Vertical Blind Advantage
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Perfect for Large Windows</Heading>
                    <Text color="light" align="center">
                      Vertical blinds are specifically designed for wide windows and doors. The vertical louvres stack neatly to one side, providing unobstructed views when open and complete privacy when closed.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Excellent Light Control</Heading>
                    <Text color="light" align="center">
                      Control the amount of light entering your room with precision. Tilt the louvres to let in soft, diffused light or close them completely for privacy and darkness.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="check" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Easy Operation</Heading>
                    <Text color="light" align="center">
                      Smooth, reliable operation with wand control or optional cordless mechanisms. No more struggling with heavy blinds - vertical blinds are designed for effortless daily use.
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
                      With no dangling cords or chains, vertical blinds are completely child-safe. The innovative design eliminates any safety risks while maintaining full functionality.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Perfect for Saddleworth Properties
                </Heading>
                <Text color="light" align="center">
                  Vertical blinds are particularly well-suited to Saddleworth's diverse architectural styles. From modern extensions in Greenfield to period properties in Uppermill with large bay windows, vertical blinds provide the perfect solution for controlling light and maintaining privacy.
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
                      <Text size="small" color="muted" align="center">We assess your large windows and discuss your requirements</Text>
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
                      <Text size="small" color="muted" align="center">Your vertical blinds are made to order</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Expert fitting with minimal disruption</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Carousel Section */}
            <Stack spacing="large">
              <VerticalBlindsCarousel />
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Transform Your Large Windows</Heading>
                <Text size="xlarge" color="light" align="center">
                  Experience the perfect solution for large windows and patio doors. Book your free consultation today and discover how vertical blinds can enhance your Saddleworth home.
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

export default VerticalBlinds