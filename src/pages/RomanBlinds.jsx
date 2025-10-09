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

const RomanBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Elegant Roman
                <Text as="span" color="gold" className="block">Blinds</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                For a touch of elegance and sophistication, Roman blinds are perfect. They fold up neatly when raised and create beautiful soft pleats. Available in countless fabrics to match any décor.
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
                    <Text size="small" weight="medium">Beautiful Pleating</Text>
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

            {/* Coming Soon Placeholder */}
            <Card variant="elevated" padding="xlarge">
              <Center>
                <Stack spacing="medium" align="center">
                  <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center">
                    <Icon name="clock" size="xlarge" className="text-gray-900" />
                  </div>
                  <Heading as="h3" size="xl" color="white">Coming Soon</Heading>
                  <Text color="light">Roman blinds collection launching soon</Text>
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
                  <Heading as="h2" size="3xl" mdSize="4xl">Roman Blinds - Coming Soon!</Heading>
                  <Text size="xlarge" color="light" leading="relaxed" align="center">
                    We're currently expanding our Roman blinds collection. In the meantime, explore our extensive range of other blind types below to see the quality and variety we offer.
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
                  Why Roman Blinds Are Perfect for Saddleworth Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Roman blinds offer the perfect blend of functionality and elegance. They provide excellent light control while adding a touch of luxury to any room. When raised, they fold into neat, soft pleats that create beautiful window treatments for both traditional and contemporary interiors.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Roman Blind Advantage
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="spark" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Beautiful Pleating</Heading>
                    <Text color="light" align="center">
                      When raised, Roman blinds fold into elegant, uniform pleats that add texture and visual interest to your windows. This creates a sophisticated look that's perfect for both modern and traditional Saddleworth homes.
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
                      Roman blinds provide excellent privacy and light control. Choose from light-filtering fabrics that allow soft natural light or blackout options for complete darkness in bedrooms.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Fabric Versatility</Heading>
                    <Text color="light" align="center">
                      Available in hundreds of fabrics, patterns, and textures to complement any interior design. From luxurious silks and linens to practical cottons and blends.
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
                      With no dangling cords or chains, Roman blinds are completely child-safe. The innovative design eliminates any safety risks while maintaining full functionality.
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
                      Premium fabrics including silks, linens, and high-quality blends. Perfect for formal living areas, dining rooms, and master bedrooms where you want to make a statement.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Silk and silk-blend fabrics</Text>
                      <Text size="small" color="muted">• Luxury linen textures</Text>
                      <Text size="small" color="muted">• Designer patterns and weaves</Text>
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
                    <Heading as="h3" size="xl">Pattern & Texture Options</Heading>
                    <Text color="light" align="center">
                      From subtle textures that add depth to bold patterns that make a statement, our Roman blind collection offers something for every taste and interior style.
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

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Perfect for Saddleworth Properties
                </Heading>
                <Text color="light" align="center">
                  Roman blinds are particularly well-suited to Saddleworth's architectural diversity. The soft, elegant folds complement both the clean lines of modern homes in Greenfield and the period charm of Victorian terraces in Uppermill.
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
                      <Text size="small" color="muted" align="center">Your Roman blinds are made to order</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                      <Text size="small" color="muted" align="center">Expert fitting with attention to detail</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Add Elegance to Your Windows</Heading>
                <Text size="xlarge" color="light" align="center">
                  Discover how Roman blinds can transform your Saddleworth home with their perfect blend of functionality and style. Book your consultation today.
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

export default RomanBlinds