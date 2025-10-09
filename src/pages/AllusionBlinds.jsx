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

const AllusionBlinds = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Allusion Blinds -
                <Text as="span" color="gold" className="block">Contemporary Elegance</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Experience the perfect fusion of style and functionality with Allusion blinds. These innovative window treatments combine the softness of curtains with the precision of blinds, creating a truly unique and sophisticated window solution.
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
                    <Text size="small" weight="medium">Unique Fabric Flow</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Precision Light Control</Text>
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
              src="/images/optimized/allusion-vista-snow-1600.jpg"
              alt="Allusion blinds in a contemporary Saddleworth home"
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
                  Why Allusion Blinds Are Perfect for Modern Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Allusion blinds represent the next evolution in window treatments, combining the flowing elegance of curtains with the precise light control of blinds. This unique system uses vertical fabric panels that can be drawn across the window, rotated to control light, and stacked neatly when not in use.
                </Text>
              </Stack>
            </Center>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Allusion Blind Advantage
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="spark" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Unique Fabric Flow</Heading>
                    <Text color="light" align="center">
                      Unlike traditional blinds, Allusion blinds feature flowing fabric panels that create beautiful, soft folds. This creates a sophisticated, curtain-like appearance while maintaining the functionality of blinds.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Precision Light Control</Heading>
                    <Text color="light" align="center">
                      The vertical fabric panels can be rotated 180 degrees to control the amount of light entering your room. From complete privacy to welcoming sunlight, you have total control over your environment.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="check" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Seamless Operation</Heading>
                    <Text color="light" align="center">
                      Smooth, quiet operation with wand control makes Allusion blinds effortless to use. The innovative design eliminates cords and chains for a clean, modern aesthetic.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Contemporary Design</Heading>
                    <Text color="light" align="center">
                      The clean lines and flowing fabric create a distinctly modern look that's perfect for contemporary interiors. Available in a range of textures and colors to complement any design scheme.
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
                      <Heading as="h3" size="base" color="white">Flowing Fabric Panels</Heading>
                      <Text size="small" color="muted" align="center">Vertical fabric strips that create beautiful folds</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Heading as="h3" size="base" color="white">180° Rotation</Heading>
                      <Text size="small" color="muted" align="center">Complete light control from any angle</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Heading as="h3" size="base" color="white">Cordless Operation</Heading>
                      <Text size="small" color="muted" align="center">Clean, modern aesthetic with wand control</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Heading as="h3" size="base" color="white">Child Safe</Heading>
                      <Text size="small" color="muted" align="center">No dangling cords or chains</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        5
                      </div>
                      <Heading as="h3" size="base" color="white">Easy Maintenance</Heading>
                      <Text size="small" color="muted" align="center">Simple to clean and maintain</Text>
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
                  Allusion blinds are particularly well-suited to modern homes and contemporary extensions throughout Saddleworth. From sleek new-builds in Greenfield to renovated properties in Uppermill, these blinds add a touch of contemporary elegance while providing excellent functionality.
                </Text>
              </Stack>
            </Card>

            {/* Process */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Our Installation Process
                </Heading>

                <Grid cols={1} mdCols={2} lgCols={5} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Heading as="h3" size="base" color="white">Design Consultation</Heading>
                      <Text size="small" color="muted" align="center">We discuss your vision and show fabric samples in your home</Text>
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
                      <Text size="small" color="muted" align="center">Your Allusion blinds are crafted to your specifications</Text>
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
                      <Text size="small" color="muted" align="center">We show you how to operate and maintain your blinds</Text>
                    </Stack>
                  </Center>
                </Grid>
              </Stack>
            </Card>

            {/* Gallery Section */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Allusion Blinds Gallery
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={4} gap="medium">
                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/allusion-vista-snow-400.jpg"
                    alt="Contemporary Allusion blinds in a modern Saddleworth home"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Modern Elegance</Heading>
                    <Text size="small" color="muted">Flowing fabric panels for contemporary homes</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/allusion-shadow-sand-400.jpg"
                    alt="Allusion blinds providing perfect light control in living room"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Living Room Solution</Heading>
                    <Text size="small" color="muted">Perfect light control for comfortable living</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/allusion-vista-snow-400.jpg"
                    alt="Allusion blinds showing beautiful fabric texture and flow"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Fabric Detail</Heading>
                    <Text size="small" color="muted">Beautiful texture and flowing movement</Text>
                  </Card.Body>
                </Card>

                <Card variant="elevated" hover="lift" padding="none">
                  <Image
                    src="/images/optimized/allusion-shadow-sand-400.jpg"
                    alt="Contemporary Allusion blinds in neutral tones"
                    aspectRatio="16/9"
                  />
                  <Card.Body>
                    <Heading as="h3" size="base" color="white">Neutral Tones</Heading>
                    <Text size="small" color="muted">Versatile colors for any interior design</Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Experience Contemporary Elegance</Heading>
                <Text size="xlarge" color="light" align="center">
                  Discover how Allusion blinds can transform your modern Saddleworth home with their unique combination of flowing fabric and precise light control. Book your consultation today.
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

export default AllusionBlinds