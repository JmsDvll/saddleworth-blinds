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
  Image,
  Stack,
  Flex,
  Badge,
  Center
} from '../components/ui'

const VenetianBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Classic Venetian Blinds for
                <Text as="span" color="gold" className="block">Saddleworth Homes</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                The timeless choice that never goes out of style. Perfect light control with a twist of the wand. Wood for warmth, aluminium for modern homes, or faux wood for practical luxury.
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
                      <Icon name="check" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">5 Year Guarantee</Text>
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
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="calendar" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Free Home Consultation</Text>
                  </Stack>
                </Center>
              </Grid>
            </Stack>

            <Image
              src="/images/optimized/venetian-wood-natural-1600.jpg"
              alt="Premium venetian blinds in a Saddleworth living room"
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
                  Why Venetian Blinds Are Perfect for Saddleworth Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  The classic choice that never goes out of style. Perfect light control with a twist of the wand. Wood for warmth, aluminium for modern homes, or faux wood for practical luxury. Having fitted blinds throughout Saddleworth for over 20 years, we find roller blinds and venetian blinds are most popular. For period properties in Uppermill and Diggle, wooden venetians work beautifully. Modern homes often suit vision blinds or sleek roller blinds perfectly.
                </Text>
              </Stack>
            </Center>

            {/* Product Options */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Choose Your Perfect Venetian Blind
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="sparkle" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Wooden Venetian Blinds</Heading>
                    <Text color="light" align="center">
                      Crafted from premium hardwoods, our wooden venetian blinds offer natural beauty and exceptional durability. Perfect for character properties throughout Saddleworth where authenticity matters.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Premium hardwood construction</Text>
                      <Text size="small" color="muted">• Natural wood grain patterns</Text>
                      <Text size="small" color="muted">• Stained or painted finishes</Text>
                      <Text size="small" color="muted">• Excellent thermal properties</Text>
                      <Text size="small" color="muted">• Long-lasting investment</Text>
                      <Text size="small" color="muted">• Suitable for all room types</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Aluminium Venetian Blinds</Heading>
                    <Text color="light" align="center">
                      Sleek and modern aluminium venetian blinds perfect for contemporary homes. Lightweight yet durable, with excellent light control and easy maintenance.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Lightweight and durable</Text>
                      <Text size="small" color="muted">• Wide range of colours</Text>
                      <Text size="small" color="muted">• Easy to clean and maintain</Text>
                      <Text size="small" color="muted">• Perfect for modern interiors</Text>
                      <Text size="small" color="muted">• Moisture resistant</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Faux Wood Venetian Blinds</Heading>
                    <Text color="light" align="center">
                      The perfect combination of wood's natural beauty with enhanced durability. Ideal for bathrooms and kitchens in Lydgate homes or humid environments like conservatories.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Looks like real wood</Text>
                      <Text size="small" color="muted">• Moisture and humidity resistant</Text>
                      <Text size="small" color="muted">• Won't warp or fade</Text>
                      <Text size="small" color="muted">• Easy to clean</Text>
                      <Text size="small" color="muted">• Affordable luxury</Text>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Your Local Venetian Blind Experts
                </Heading>
                <Text color="light" align="center">
                  Every village in Saddleworth has its own character, and we've worked in them all. From Victorian terraces in Uppermill to converted barns in Diggle, we've fitted blinds in every type of Saddleworth home.
                </Text>

                <Grid cols={2} mdCols={4} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                        <Icon name="building" size="large" className="text-gray-900" />
                      </div>
                      <Heading as="h3" size="base" color="white">Uppermill & Diggle</Heading>
                      <Text size="small" color="muted" align="center">From Victorian terraces to stone cottages</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                        <Icon name="building" size="large" className="text-gray-900" />
                      </div>
                      <Heading as="h3" size="base" color="white">Delph & Greenfield</Heading>
                      <Text size="small" color="muted" align="center">Family homes and new builds</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                        <Icon name="building" size="large" className="text-gray-900" />
                      </div>
                      <Heading as="h3" size="base" color="white">Dobcross & Lydgate</Heading>
                      <Text size="small" color="muted" align="center">Conversions and period properties</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                        <Icon name="spark" size="large" className="text-gray-900" />
                      </div>
                      <Heading as="h3" size="base" color="white">20+ Years Experience</Heading>
                      <Text size="small" color="muted" align="center">Trusted local expertise</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Process */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  How We Make It Easy
                </Heading>
                <Text color="light" align="center">
                  From consultation to installation, we handle everything
                </Text>

                <Grid cols={2} mdCols={4} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Free Consultation</Heading>
                      <Text size="small" color="muted" align="center">We'll visit your home, measure up, and give honest advice</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">Made to Measure</Heading>
                      <Text size="small" color="muted" align="center">Your blinds manufactured to exact specifications</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Fitting</Heading>
                      <Text size="small" color="muted" align="center">Expert installation included in every quote</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Aftercare Support</Heading>
                      <Text size="small" color="muted" align="center">5-year guarantee and ongoing support</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Gallery Section */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Venetian Blind Inspiration Gallery
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={3} gap="medium">
                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/venetian-starwood-400.jpg"
                    alt="Starwood Venetian blinds"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Starwood Natural</Heading>
                    <Text size="small" color="muted">Classic wooden venetian blinds</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/venetian-wood-natural-400.jpg"
                    alt="Natural wood venetian blinds"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Natural Wood</Heading>
                    <Text size="small" color="muted">Premium hardwood venetians</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/venetian-wood-natural-400.jpg"
                    alt="Grey venetian blinds"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Contemporary Grey</Heading>
                    <Text size="small" color="muted">Modern aluminium venetians</Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Ready to Transform Your Home?</Heading>
                <Text size="xlarge" color="light" align="center">
                  Join hundreds of satisfied Saddleworth customers who've trusted us with their window treatments. Let's discuss how we can enhance your home.
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
              </Stack>
            </Center>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default VenetianBlinds