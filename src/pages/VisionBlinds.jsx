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
import VisionBlindsCarousel from '../components/VisionBlindsCarousel'
import FAQSection from '../components/FAQSection'

const VisionBlinds = () => {
  const visionFaqs = [
    {
      question: "What makes Vision blinds different from other blinds?",
      answer: "Vision blinds feature innovative dual-layer fabric technology that allows you to have complete privacy when the layers are aligned, or beautiful diffused light when separated. Unlike traditional blinds, they offer the perfect balance of privacy and natural light control."
    },
    {
      question: "Are Vision blinds suitable for all window types?",
      answer: "Vision blinds are incredibly versatile and can be fitted to most window types including casement windows, sash windows, and even conservatories. They're particularly popular for larger windows and patio doors where you want both privacy and view options."
    },
    {
      question: "How do I clean and maintain Vision blinds?",
      answer: "Vision blinds are very low maintenance. The fabric can be gently vacuumed with a soft brush attachment, or spot cleaned with a damp cloth. Avoid harsh chemicals or soaking. Regular light cleaning will keep them looking pristine for years."
    },
    {
      question: "Can Vision blinds be motorised?",
      answer: "Absolutely! We offer motorised Vision blinds with remote control operation. This is perfect for hard-to-reach windows or for the ultimate convenience. Motorisation also allows for smart home integration and automated scheduling."
    },
    {
      question: "What's the difference between Vision blinds and other day/night blinds?",
      answer: "Vision blinds are a premium alternative to standard day/night blinds. They feature superior fabric quality, smoother operation, and more precise light control. The dual-layer system provides better insulation and a more refined aesthetic than basic alternatives."
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
                Vision Blinds -
                <Text as="span" color="gold" className="block">The Clever Choice</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them. Dual layers that line up or separate - it's like magic.
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
                      <Icon name="eye" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Privacy When You Need It</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Light Control at Your Fingertips</Text>
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
              <VisionBlindsCarousel showTitle={false} showDescription={false} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section padding="large">
        <Container maxWidth="medium">
          <Stack spacing="xlarge">
            {/* Intro Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 rounded-3xl -mx-8"></div>
              <Center className="relative z-10">
                <Stack spacing="medium" align="center" className="max-w-5xl">
                  <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full"></div>
                  <Heading as="h2" size="4xl" mdSize="5xl" color="gradient">
                    Why Vision Blinds Are Perfect for Saddleworth Homes
                  </Heading>
                  <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full"></div>
                  
                  <Grid cols={1} mdCols={2} gap="large" align="center" className="mt-8">
                    <Stack spacing="medium">
                      <Text size="large" color="light" leading="relaxed">
                        Vision blinds represent the pinnacle of modern window treatment technology. These innovative blinds feature dual layers of fabric that can be aligned to provide complete privacy or separated to allow natural light while maintaining your view.
                      </Text>
                      <Text size="large" color="light" leading="relaxed">
                        Perfect for contemporary homes in Diggle and modern extensions in Uppermill, they combine functionality with contemporary aesthetics.
                      </Text>
                    </Stack>
                    
                    <Card variant="elevated" padding="large" className="border border-brand-gold/20">
                      <Flex align="start" gap="medium">
                        <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="spark" size="medium" className="text-gray-900" />
                        </div>
                        <Stack spacing="small">
                          <Heading as="h3" size="base" color="white">Innovative Technology</Heading>
                          <Text size="small" color="muted">Dual-layer fabric system</Text>
                          <Text color="light">
                            Our Vision blinds use cutting-edge fabric technology that gives you complete control over light and privacy.
                          </Text>
                        </Stack>
                      </Flex>
                    </Card>
                  </Grid>
                </Stack>
              </Center>
            </div>

            {/* Features Grid */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                The Vision Blind Advantage
              </Heading>
              
              <Grid cols={1} mdCols={3} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Privacy When You Need It</Heading>
                    <Text color="light" align="center">
                      When the fabric layers are aligned, Vision blinds provide complete privacy from the outside while allowing you to see out clearly. Perfect for ground floor windows in busy Saddleworth streets.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="eye" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Light Control at Your Fingertips</Heading>
                    <Text color="light" align="center">
                      Adjust the blind to let in exactly the right amount of light. From complete blackout for bedrooms to soft diffused light for living spaces - you have total control.
                    </Text>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Modern Aesthetic</Heading>
                    <Text color="light" align="center">
                      Clean lines and contemporary styling make Vision blinds the perfect choice for modern homes. Available in a wide range of fabrics and colors to complement any interior design.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>

            {/* Technical Excellence */}
            <Card variant="highlight" padding="xlarge" className="border border-brand-gold/20">
              <Stack spacing="large">
                <Center>
                  <Stack spacing="small" align="center">
                    <Heading as="h2" size="2xl" color="gradient">
                      Technical Excellence
                    </Heading>
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
                  </Stack>
                </Center>

                <Grid cols={2} mdCols={3} lgCols={5} gap="medium">
                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        1
                      </div>
                      <Text weight="medium" color="white">Dual Layer System</Text>
                      <Text size="small" color="muted" align="center">Innovative fabric layers that align or separate</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        2
                      </div>
                      <Text weight="medium" color="white">Child Safe</Text>
                      <Text size="small" color="muted" align="center">No cords or chains - safe for families</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        3
                      </div>
                      <Text weight="medium" color="white">Easy Operation</Text>
                      <Text size="small" color="muted" align="center">Smooth, reliable mechanism</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        4
                      </div>
                      <Text weight="medium" color="white">Motorised Options</Text>
                      <Text size="small" color="muted" align="center">Remote control and smart home integration</Text>
                    </Stack>
                  </Center>

                  <Center>
                    <Stack spacing="small" align="center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        5
                      </div>
                      <Text weight="medium" color="white">UV Protection</Text>
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
                  Vision blinds are particularly well-suited to Saddleworth's diverse architectural styles. From period cottages requiring privacy solutions to modern barn conversions needing contemporary styling, Vision blinds bridge the gap beautifully.
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
                      <Text size="small" color="muted" align="center">We visit your home to discuss your requirements and show samples</Text>
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
                      <Heading as="h3" size="base" color="white">Quality Manufacturing</Heading>
                      <Text size="small" color="muted" align="center">Your Vision blinds are made to order</Text>
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
              <VisionBlindsCarousel />
            </Stack>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Experience the Vision Difference</Heading>
                <Text size="xlarge" color="light" align="center">
                  Discover how Vision blinds can transform your Saddleworth home. Book your free consultation today and see the magic for yourself.
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
                    <Text size="small" color="muted" weight="medium">Completely Free</Text>
                  </Flex>
                  <Flex align="center" gap="small">
                    <Icon name="lock" size="small" color="muted" />
                    <Text size="small" color="muted" weight="medium">No Obligation</Text>
                  </Flex>
                  <Flex align="center" gap="small">
                    <Icon name="location" size="small" color="muted" />
                    <Text size="small" color="muted" weight="medium">Saddleworth Specialists</Text>
                  </Flex>
                </Flex>
              </Stack>
            </Center>

            {/* FAQ Section */}
            <FAQSection
              title="Vision Blinds Questions"
              description="Everything you need to know about Vision blinds for your Saddleworth home"
              faqs={visionFaqs}
              className="bg-gray-900"
            />
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default VisionBlinds