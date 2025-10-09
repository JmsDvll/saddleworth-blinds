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
  Center
} from '../components/ui'

const Delph = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={1} mdCols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading as="h1" size="4xl" mdSize="6xl">
                Window Blinds in
                <Text as="span" color="gold" className="block">Delph</Text>
              </Heading>
              
              <Text size="xlarge" color="light" leading="relaxed">
                Beautiful window blinds for Delph homes. From traditional stone cottages to modern family homes, we understand what works best in this historic Saddleworth village.
              </Text>

              <Flex direction="column" smDirection="row" gap="medium">
                <Button 
                  as={Link} 
                  to="/book-appointment" 
                  variant="primary" 
                  size="xlarge"
                >
                  Book Free Quote in Delph
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
                    <Text size="small" weight="medium">Traditional Stone Cottages</Text>
                  </Stack>
                </Center>
                <Center>
                  <Stack spacing="small" align="center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="location" size="medium" className="text-gray-900" />
                    </div>
                    <Text size="small" weight="medium">Local Delph Experts</Text>
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

            <Image
              src="/images/optimized/vision-floreale-rosa-1600.jpg"
              alt="Beautiful window blinds in a Delph home"
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
                  Window Blinds for Delph Homes
                </Heading>
                <Text size="xlarge" color="light" leading="relaxed" align="center">
                  Delph is a charming Saddleworth village with a rich history and beautiful stone-built properties. From traditional weaver's cottages to modern family homes, we've been fitting blinds in Delph for over 20 years, understanding the unique character and practical needs of properties in this historic location.
                </Text>
              </Stack>
            </Center>

            {/* Property Types */}
            <Stack spacing="large">
              <Heading as="h2" size="3xl" align="center">
                Perfect Blinds for Delph Properties
              </Heading>
              
              <Grid cols={1} mdCols={2} gap="large">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="building" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Traditional Stone Cottages</Heading>
                    <Text color="light" align="center">
                      Many Delph homes are traditional stone properties with character features and original windows. We specialise in solutions that preserve the period charm while providing modern functionality.
                    </Text>
                    <Stack spacing="small" className="w-full">
                      <Text size="small" color="muted">• Wooden venetian blinds for authentic period charm</Text>
                      <Text size="small" color="muted">• Roman blinds for elegant window treatments</Text>
                      <Text size="small" color="muted">• Shutters that complement stone architecture</Text>
                      <Text size="small" color="muted">• Motorised options for hard-to-reach windows</Text>
                    </Stack>
                  </Stack>
                </Card>

                <Card variant="elevated" padding="large">
                  <Stack spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Icon name="grid" size="large" className="text-gray-900" />
                    </div>
                    <Heading as="h3" size="xl">Modern Family Homes</Heading>
                    <Text color="light" align="center">
                      Many Delph properties have been extended or modernised. We help bridge the gap between old and new with stylish, contemporary window treatments that work with large windows and open-plan spaces.
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

            {/* Village Character */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h3" size="2xl" align="center">
                  Village Character
                </Heading>
                <Text color="light" align="center">
                  Delph's village setting and community atmosphere means many homes benefit from window treatments that provide privacy while maintaining the welcoming feel of this close-knit community.
                </Text>
                <Stack spacing="small" className="max-w-2xl mx-auto">
                  <Text size="small" color="muted">• Vision blinds for privacy without blocking views</Text>
                  <Text size="small" color="muted">• Sunscreen fabrics that reduce glare</Text>
                  <Text size="small" color="muted">• Motorised options for convenience</Text>
                  <Text size="small" color="muted">• UV protection to preserve furniture and flooring</Text>
                </Stack>
              </Stack>
            </Card>

            {/* Local Expertise */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Local Expertise in Delph
                </Heading>
                <Text color="light" align="center">
                  Having fitted blinds throughout Delph for two decades, we understand the unique challenges and opportunities of local properties. From wonky stone walls to modern extensions, we've seen it all and know how to handle it perfectly.
                </Text>
              </Stack>
            </Card>

            {/* Service Info */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="medium">
                <Heading as="h2" size="2xl" align="center">
                  Our Delph Service
                </Heading>
                <Text color="light" align="center">
                  We offer completely free home consultations throughout Delph, including evenings and weekends to suit your schedule. Our experienced team will come to your home, measure your windows, show you samples, and provide honest advice with no obligation to buy.
                </Text>
              </Stack>
            </Card>

            {/* Why Choose Us */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Heading as="h2" size="2xl" align="center">
                  Why Choose Us in Delph?
                </Heading>

                <Stack spacing="medium" className="max-w-3xl mx-auto">
                  <Flex align="start" gap="medium">
                    <Icon name="check" size="small" color="gold" className="flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="medium">Local Knowledge:</Text>
                      <Text color="light">We understand Delph's unique architectural styles and property types</Text>
                    </Stack>
                  </Flex>

                  <Flex align="start" gap="medium">
                    <Icon name="check" size="small" color="gold" className="flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="medium">20+ Years Experience:</Text>
                      <Text color="light">Fitting blinds in hundreds of local homes</Text>
                    </Stack>
                  </Flex>

                  <Flex align="start" gap="medium">
                    <Icon name="check" size="small" color="gold" className="flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="medium">Professional Installation:</Text>
                      <Text color="light">Expert fitting included in every quote</Text>
                    </Stack>
                  </Flex>

                  <Flex align="start" gap="medium">
                    <Icon name="check" size="small" color="gold" className="flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="medium">Comprehensive Warranty:</Text>
                      <Text color="light">Full warranty on all products and installation</Text>
                    </Stack>
                  </Flex>

                  <Flex align="start" gap="medium">
                    <Icon name="check" size="small" color="gold" className="flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="medium">Fair Pricing:</Text>
                      <Text color="light">Competitive prices with no hidden fees</Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Stack>
            </Card>

            {/* CTA Section */}
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl">Ready to Transform Your Delph Home?</Heading>
                <Text size="xlarge" color="light" align="center">
                  Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible in your Delph home.
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
                    <Text size="small" color="muted">Covering Delph</Text>
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

export default Delph