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
  Badge
} from '../components/ui'

const Curtains = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Beautiful Made-to-Measure
                <Text as="span" color="gold" className="block">Curtains</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Sometimes nothing beats the classic look of curtains. We offer made-to-measure curtains in luxurious fabrics, with expert fitting and beautiful finishing touches like pelmets and tie-backs.
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
                    <Text size="small" weight="medium">Premium Fabrics</Text>
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
                    <Text size="small" weight="medium">Expert Installation</Text>
                  </Stack>
                </Center>
              </Grid>
            </Stack>

            {/* Coming Soon Placeholder */}
            <Card variant="elevated" padding="xlarge">
              <Center>
                <Stack spacing="medium" align="center">
                  <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center">
                    <Icon name="clock" size="xlarge" className="text-gray-900" />
                  </div>
                  <Heading as="h3" size="xl" color="white">Coming Soon</Heading>
                  <Text color="light">Curtains collection launching soon</Text>
                </Stack>
              </Center>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section padding="large">
        <Container maxWidth="medium">
          <Stack spacing="xlarge">
            {/* Coming Soon Announcement */}
            <Center>
              <Card variant="highlight" padding="xlarge" className="border border-brand-gold/20 max-w-3xl">
                <Stack spacing="large" align="center">
                  <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center">
                    <Icon name="clock" size="xlarge" className="text-gray-900" />
                  </div>
                  <Heading as="h2" size="3xl" mdSize="4xl">Made-to-Measure Curtains - Coming Soon!</Heading>
                  <Text size="xlarge" color="light" leading="relaxed" align="center">
                    We're currently expanding our curtain collection with luxurious made-to-measure options. In the meantime, explore our extensive range of blinds and shutters below to see the quality we offer.
                  </Text>
                  <Flex direction="column" smDirection="row" gap="medium">
                    <Button 
                      as={Link} 
                      to="/book-appointment" 
                      variant="primary" 
                      size="xlarge"
                    >
                      Register Interest
                    </Button>
                    <Button 
                      as="a" 
                      href="tel:01457597091" 
                      variant="secondary" 
                      size="xlarge"
                    >
                      Call for Details
                    </Button>
                  </Flex>
                </Stack>
              </Card>
            </Center>

            {/* Intro Section */}
            <Center>
              <Stack spacing="medium" align="center" className="max-w-3xl">
                <Heading as="h2" size="3xl" mdSize="4xl">
                  Why Curtains Are Perfect for Saddleworth Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Sometimes nothing beats the classic look of curtains. They provide excellent insulation, complete privacy, and can transform any room with their luxurious appearance. Our made-to-measure curtains are crafted with attention to detail and finished to perfection.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Curtain Advantage
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Complete Privacy & Light Control</Heading>
                    <Text color="light" align="center">
                      Curtains provide complete privacy and excellent light control. Choose from light-filtering fabrics that allow soft natural light or blackout linings for complete darkness in bedrooms.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="sun" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Superior Insulation</Heading>
                    <Text color="light" align="center">
                      Curtains provide excellent thermal insulation, helping to keep your home warm in winter and cool in summer. This can significantly reduce your energy bills while maintaining comfortable room temperatures.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="spark" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Timeless Elegance</Heading>
                    <Text color="light" align="center">
                      Curtains have been a staple of interior design for centuries and never go out of style. They add instant sophistication and can complement both traditional and contemporary interiors.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="down" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Sound Absorption</Heading>
                    <Text color="light" align="center">
                      Heavy curtains can help reduce noise from outside, creating a more peaceful and comfortable living environment. Perfect for homes near busy roads or in bustling Saddleworth villages.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Fabric Collections */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Fabric Collections
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="sparkle" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Luxury Collection</Heading>
                    <Text color="light" align="center">
                      Premium fabrics including silks, velvets, and high-quality blends. Perfect for formal living areas, dining rooms, and master bedrooms where you want to create a luxurious atmosphere.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Silk and silk-blend fabrics</Text>
                      <Text size="small" color="muted">• Luxury velvet and chenille</Text>
                      <Text size="small" color="muted">• Designer patterns and textures</Text>
                      <Text size="small" color="muted">• Custom color matching available</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Practical Collection</Heading>
                    <Text color="light" align="center">
                      Durable, easy-to-maintain fabrics perfect for family homes, kitchens, and high-traffic areas. These fabrics are designed to withstand daily use while looking beautiful.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Easy-clean cotton blends</Text>
                      <Text size="small" color="muted">• Moisture-resistant options</Text>
                      <Text size="small" color="muted">• Washable and wipeable fabrics</Text>
                      <Text size="small" color="muted">• UV-resistant for sun protection</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Pattern & Style Options</Heading>
                    <Text color="light" align="center">
                      From subtle textures that add depth to bold patterns that make a statement, our curtain collection offers something for every taste and interior style.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Subtle textures and weaves</Text>
                      <Text size="small" color="muted">• Contemporary geometric patterns</Text>
                      <Text size="small" color="muted">• Traditional florals and damasks</Text>
                      <Text size="small" color="muted">• Custom fabric options available</Text>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Finishing Touches */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Finishing Touches
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Pelmets & Valances</Heading>
                    <Text color="light" align="center">
                      Add the finishing touch with custom-made pelmets and valances. These decorative elements frame your curtains beautifully and hide curtain tracks for a seamless, professional finish.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="slider" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Tie-Backs & Holdbacks</Heading>
                    <Text color="light" align="center">
                      Elegant tie-backs and holdbacks allow you to control how your curtains drape. Available in a variety of styles and finishes to complement your curtain fabric and interior design.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="document" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Linings & Interlinings</Heading>
                    <Text color="light" align="center">
                      Enhance your curtains with quality linings and interlinings. Blackout linings for complete darkness, thermal linings for better insulation, or decorative linings that add weight and drape.
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
                  Curtains are particularly well-suited to Saddleworth's architectural diversity. The luxurious folds and textures complement both the clean lines of modern homes in Greenfield and the period charm of Victorian terraces in Uppermill.
                </Text>
              </Stack>
            </Card>

            {/* Process */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Our Curtain Service
                </Heading>

                <Grid cols={2} mdCols={4} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Fabric Consultation</Heading>
                      <Text size="small" color="muted" align="center">We help you choose the perfect fabric for your style and needs</Text>
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
                      <Text size="small" color="muted" align="center">Your curtains are made to order with attention to detail</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Expert fitting with beautiful finishing touches</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Transform Your Windows with Beautiful Curtains</Heading>
                <Text size="xlarge" color="light" align="center">
                  Discover how made-to-measure curtains can add luxury, privacy, and style to your Saddleworth home. Book your consultation today and see the difference quality curtains can make.
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

export default Curtains