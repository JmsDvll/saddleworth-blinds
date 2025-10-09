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
import ShuttersCarousel from '../components/ShuttersCarousel'

const Shutters = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Luxury Plantation
                <Text as="span" color="gold" className="block">Shutters</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Want to add real wow factor? Plantation shutters are the ultimate luxury. They look stunning, add value to your home, and last for decades. The perfect investment for discerning Saddleworth homeowners.
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
                      <Icon name="currency" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Increases Property Value</Text>
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
                      <Icon name="check" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Lifetime Investment</Text>
                  </Stack>
                </Center>
              </Grid>
            </Stack>

            <div className="relative">
              <ShuttersCarousel showTitle={false} showDescription={false} />
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
                  Why Plantation Shutters Are the Ultimate Investment
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Plantation shutters represent the pinnacle of window treatment luxury. Crafted from premium materials and built to last, they add instant elegance and significant value to any Saddleworth property. From Victorian terraces in Uppermill to modern barn conversions in Diggle, shutters provide timeless appeal and exceptional functionality.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Plantation Shutter Advantage
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="currency" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Instant Property Value</Heading>
                    <Text color="light" align="center">
                      Plantation shutters are widely regarded as one of the best home improvements for return on investment. They add kerb appeal, interior elegance, and can increase your property's value by up to 10%.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Superior Light Control</Heading>
                    <Text color="light" align="center">
                      Adjustable louvres give you complete control over natural light. From complete privacy to welcoming sunlight, you can create the perfect ambiance for any time of day or activity.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="sun" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Energy Efficiency</Heading>
                    <Text color="light" align="center">
                      Shutters provide excellent insulation, helping to keep your home warm in winter and cool in summer. This can significantly reduce your energy bills while maintaining comfortable room temperatures year-round.
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
                      Unlike trends that come and go, plantation shutters have been popular for centuries and will never go out of style. They complement both traditional and contemporary interiors beautifully.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Materials Section */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Premium Materials & Craftsmanship
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="sparkle" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Solid Wood Shutters</Heading>
                    <Text color="light" align="center">
                      Our premium hardwood shutters are crafted from sustainable sources and finished to perfection. Available in a range of wood species and stains to match your interior perfectly.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Premium hardwood construction for durability</Text>
                      <Text size="small" color="muted">• Beautiful natural grain patterns</Text>
                      <Text size="small" color="muted">• Wide range of stain and paint finishes</Text>
                      <Text size="small" color="muted">• Excellent thermal and acoustic properties</Text>
                      <Text size="small" color="muted">• 50+ year lifespan with proper care</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">MDF Shutters</Heading>
                    <Text color="light" align="center">
                      High-quality MDF shutters offer the look of wood with enhanced moisture resistance. Perfect for bathrooms, kitchens, and humid environments like Saddleworth's Pennine climate.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Moisture and humidity resistant</Text>
                      <Text size="small" color="muted">• Smooth, paint-ready surface</Text>
                      <Text size="small" color="muted">• Won't warp, twist, or fade</Text>
                      <Text size="small" color="muted">• Excellent value for money</Text>
                      <Text size="small" color="muted">• Perfect for high-humidity areas</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Louvre Options</Heading>
                    <Text color="light" align="center">
                      Choose the perfect louvre size for your windows and style preferences:
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted"><Text as="span" weight="medium">47mm:</Text> Traditional colonial style</Text>
                      <Text size="small" color="muted"><Text as="span" weight="medium">63mm:</Text> Contemporary, clean lines</Text>
                      <Text size="small" color="muted"><Text as="span" weight="medium">89mm:</Text> Maximum light control and view</Text>
                      <Text size="small" color="muted"><Text as="span" weight="medium">114mm:</Text> Bold, architectural statement</Text>
                    </Stack>
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
                  Saddleworth's diverse architectural heritage makes plantation shutters an ideal choice. Whether you have a stone cottage in Delph, a Victorian terrace in Uppermill, or a modern new-build in Greenfield, shutters enhance the character while providing modern functionality.
                </Text>
              </Stack>
            </Card>

            {/* Process */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Our Premium Installation Process
                </Heading>

                <Grid cols={1} mdCols={3} lgCols={5} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Design Consultation</Heading>
                      <Text size="small" color="muted" align="center">We discuss your vision and show samples in your home</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">Precise Measuring</Heading>
                      <Text size="small" color="muted" align="center">Millimeter-perfect measurements for seamless fitting</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Custom Manufacturing</Heading>
                      <Text size="small" color="muted" align="center">Your shutters are handcrafted to your specifications</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Expert fitting with attention to every detail</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        5
                      </div>
                      <Heading as="h3" size="base" color="white">Client Handover</Heading>
                      <Text size="small" color="muted" align="center">We show you how to operate and maintain your shutters</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Carousel Section */}
            <Stack spacing="large">
              <ShuttersCarousel />
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Elevate Your Home with Plantation Shutters</Heading>
                <Text size="xlarge" color="light" align="center">
                  Join discerning homeowners across Saddleworth who've chosen plantation shutters to add luxury, value, and timeless elegance to their properties. Book your consultation today.
                </Text>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="xlarge"
                  >
                    Book Your Free Consultation
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

export default Shutters