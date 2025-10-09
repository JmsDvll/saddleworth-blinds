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
  Alert
} from '../components/ui'
import FAQSection from '../components/FAQSection'
import ReviewsSection from '../components/ReviewsSection'
import HeroCarousel from '../components/HeroCarousel'

const HomeStandardized = () => {
  const heroImages = [
    {
      src: 'vision-firenze-walnut-1600.jpg',
      alt: 'Beautiful Firenze Walnut vision blinds in a contemporary Saddleworth home',
      title: 'Premium Vision Blinds',
      description: 'Beautiful wood tones for modern interiors'
    },
    {
      src: 'vision-floreale-rosa-1600.jpg',
      alt: 'Elegant Floreale Rosa vision blinds showcasing floral elegance',
      title: 'Floral Inspiration',
      description: 'Soft, elegant patterns for traditional homes'
    },
    {
      src: 'vision-lusso-pebble-1600.jpg',
      alt: 'Modern Lusso Pebble vision blinds in neutral tones',
      title: 'Contemporary Style',
      description: 'Clean, modern aesthetics for urban living'
    },
    {
      src: 'vision-palermo-silver-1600.jpg',
      alt: 'Sophisticated Palermo Silver vision blinds',
      title: 'Luxury Finishes',
      description: 'Premium materials for discerning homeowners'
    }
  ]

  const services = [
    { 
      name: 'Roller Blinds', 
      description: 'Simple, stylish and practical - roller blinds work brilliantly in any room.', 
      link: '/roller-blinds', 
      image: 'roller-zen-kiwi-400.jpg' 
    },
    { 
      name: 'Venetian Blinds', 
      description: 'The classic choice that never goes out of style. Perfect light control with a twist of the wand.', 
      link: '/venetian-blinds', 
      image: 'venetian-starwood-400.jpg' 
    },
    { 
      name: 'Vertical Blinds', 
      description: 'Got big windows or patio doors? Vertical blinds are your best friend.', 
      link: '/vertical-blinds', 
      image: 'vertical-savanna-zebra-400.jpg' 
    },
    { 
      name: 'Vision Blinds', 
      description: 'The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them.', 
      link: '/vision-blinds', 
      image: 'vision-capri-concrete-400.jpg' 
    },
    { 
      name: 'Perfect Fit Blinds', 
      description: 'Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows.', 
      link: '/perfect-fit-blinds', 
      image: 'perfectfit-monet-flower-400.jpg' 
    },
    { 
      name: 'Shutters', 
      description: 'Want to add real wow factor? Plantation shutters are the ultimate luxury.', 
      link: '/shutters', 
      image: 'shutters-cotton-89mm-400.jpg' 
    },
    { 
      name: 'Roman Blinds', 
      description: 'For a touch of elegance and sophistication, Roman blinds are perfect.', 
      link: '/roman-blinds', 
      image: 'roller-petal-white-400.jpg', 
      comingSoon: true 
    },
    { 
      name: 'Curtains', 
      description: 'Sometimes nothing beats the classic look of curtains.', 
      link: '/curtains', 
      image: 'roller-birdsong-colour-400.jpg', 
      comingSoon: true 
    },
    { 
      name: 'Allusion Blinds', 
      description: 'Experience contemporary elegance with flowing fabric panels that combine curtains with blinds.', 
      link: '/allusion-blinds', 
      image: 'allusion-vista-snow-400.jpg' 
    }
  ]

  const features = [
    { icon: 'checkCircle', title: 'Free No Obligation Quotation' },
    { icon: 'star', title: '5 Star Reviewed' },
    { icon: 'pound', title: 'Fair & Honest Prices' }
  ]

  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '5★', label: 'Average Rating' },
    { value: '100%', label: 'Local Business' }
  ]

  return (
    <>
      {/* Hero Section - NO INLINE STYLES! */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading.H1>
                Beautiful Blinds for Your
                <Text as="span" color="gold" className="block">
                  Saddleworth Home
                </Text>
              </Heading.H1>
              
              <Text.Lead>
                Searching for the ideal blinds? Since 2003, we've been helping families in{' '}
                <Link to="/areas/uppermill">Uppermill</Link>,{' '}
                <Link to="/areas/greenfield">Greenfield</Link>{' '}
                and{' '}
                <Link to="/areas/diggle">Diggle</Link>{' '}
                enhance their homes. Whether it's a snug cottage or a sleek barn conversion, 
                we understand what suits the unique charm of Saddleworth.
              </Text.Lead>
              
              <Flex gap="medium">
                <Button to="/book-appointment" variant="primary" size="xlarge">
                  Get Free Quote
                </Button>
                <Button 
                  href="tel:01457597091" 
                  variant="secondary" 
                  size="xlarge"
                  iconLeft={<Icon name="phone" />}
                >
                  Call 01457 597091
                </Button>
              </Flex>
              
              {/* Feature badges */}
              <Grid cols={3} gap="large">
                {features.map((feature, index) => (
                  <Flex key={index} direction="col" align="center" gap="small">
                    <Flex
                      className="w-12 h-12 bg-brand-gold rounded-full"
                      align="center"
                      justify="center"
                    >
                      <Icon name={feature.icon} size="large" color="black" />
                    </Flex>
                    <Text size="small" weight="medium" align="center">
                      {feature.title}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Stack>
            
            <div>
              <HeroCarousel images={heroImages} autoRotate={true} interval={6000} />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="darker" padding="large">
        <Container>
          <Stack spacing="xlarge">
            {/* Section Header */}
            <Stack spacing="large" className="text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full" />
              <Heading.H2 color="gradient">
                Discover Your Dream Blinds
              </Heading.H2>
              <Text size="large" color="gold" className="italic">
                "We Put Other Companies in the Shade"
              </Text>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full" />
              <Text.Lead className="max-w-2xl mx-auto">
                From cosy cottages in Uppermill to modern homes in Greenfield, 
                we understand what suits the unique charm of Saddleworth
              </Text.Lead>
            </Stack>
            
            {/* Services Grid */}
            <Grid cols={3} gap="large">
              {services.map((service) => (
                <Link key={service.name} to={service.link} className="group">
                  <Card variant="highlight" hover="lift" padding="none">
                    <div className="relative">
                      <Image
                        src={`/images/optimized/${service.image}`}
                        alt={service.name}
                        aspectRatio="video"
                      />
                      {service.comingSoon && (
                        <div className="absolute top-4 right-4">
                          <Badge.ComingSoon />
                        </div>
                      )}
                    </div>
                    <Stack spacing="medium" className="p-6">
                      <Heading.H3>
                        {service.name}
                        {service.comingSoon && (
                          <Badge variant="warning" size="small" className="ml-2">
                            Coming Soon
                          </Badge>
                        )}
                      </Heading.H3>
                      <Text color="light">{service.description}</Text>
                      <div className="pt-4 border-t border-gray-800 group-hover:border-brand-gold/30 transition-colors">
                        <Text 
                          size="small" 
                          color="gold" 
                          weight="medium" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Explore →
                        </Text>
                      </div>
                    </Stack>
                  </Card>
                </Link>
              ))}
            </Grid>
            
            {/* CTA Card */}
            <Card variant="elevated" className="max-w-4xl mx-auto text-center">
              <Stack spacing="large">
                <Heading.H3>
                  Can't decide which blinds are right for you?
                </Heading.H3>
                <Text.Lead>
                  No worries! We'll bring samples to your home and help you choose. 
                  It's completely free and there's no pressure.
                </Text.Lead>
                <Flex gap="medium" justify="center">
                  <Button to="/book-appointment" variant="primary" size="large">
                    Book Free Consultation
                  </Button>
                  <Button 
                    href="tel:01457597091" 
                    variant="ghost" 
                    size="large"
                    iconLeft={<Icon name="phone" />}
                  >
                    Quick Question? Call Us
                  </Button>
                </Flex>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      {/* Transform Your Space Section */}
      <Section background="dark" padding="large">
        <Container>
          <Stack spacing="xlarge">
            {/* Header */}
            <Stack spacing="medium" className="text-center">
              <Heading.H2>Transform Your Space</Heading.H2>
              <Text.Lead className="max-w-3xl mx-auto">
                See how the right blinds can completely change the look and feel of your rooms
              </Text.Lead>
            </Stack>
            
            {/* Room Examples */}
            <Grid cols={2} gap="xlarge">
              {/* Living Room Card */}
              <Card variant="default" padding="none">
                <div className="relative">
                  <Image
                    src="/images/optimized/vision-lusso-pebble-800.jpg"
                    alt="Modern living room with Vision blinds"
                    aspectRatio="landscape"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">Living Rooms</Badge>
                  </div>
                </div>
                <Card.Body>
                  <Stack spacing="medium">
                    <Heading.H3>Create the Perfect Ambiance</Heading.H3>
                    <Text color="light">
                      Vision blinds offer the perfect balance of privacy and natural light, 
                      ideal for Saddleworth's variable weather.
                    </Text>
                    <Stack spacing="small">
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Control light without losing your view
                        </Text>
                      </Flex>
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Reduce glare on TV screens
                        </Text>
                      </Flex>
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Protect furniture from UV damage
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card>
              
              {/* Bedroom Card */}
              <Card variant="default" padding="none">
                <div className="relative">
                  <Image
                    src="/images/optimized/roller-carnival-bubblegum-800.jpg"
                    alt="Cozy bedroom with blackout roller blinds"
                    aspectRatio="landscape"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">Bedrooms</Badge>
                  </div>
                </div>
                <Card.Body>
                  <Stack spacing="medium">
                    <Heading.H3>Sleep Better, Wake Happier</Heading.H3>
                    <Text color="light">
                      Blackout roller blinds ensure peaceful sleep, even during those 
                      long summer evenings in Saddleworth.
                    </Text>
                    <Stack spacing="small">
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Complete darkness for better sleep
                        </Text>
                      </Flex>
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Thermal properties keep rooms cozy
                        </Text>
                      </Flex>
                      <Flex gap="small" align="start">
                        <Icon name="check" color="gold" size="small" className="mt-0.5 flex-shrink-0" />
                        <Text size="small" color="light">
                          Child-safe cordless options available
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card>
            </Grid>
            
            {/* CTA */}
            <Stack spacing="medium" className="text-center">
              <Text.Lead>
                Ready to transform your home? Let's find the perfect blinds for every room.
              </Text.Lead>
              <Button to="/gallery" variant="secondary" size="large">
                View More Transformations
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gradient" padding="medium">
        <Container>
          <Grid cols={4} gap="large">
            {stats.map((stat, index) => (
              <Card key={index} variant="default" hover="scale" className="text-center">
                <Stack spacing="small">
                  <Heading.H2 color="gold">{stat.value}</Heading.H2>
                  <Text color="light">{stat.label}</Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="gold" textColor="dark" padding="large">
        <Container size="narrow">
          <Stack spacing="large" className="text-center">
            <Heading.H2>
              Ready to Transform Your Home?
            </Heading.H2>
            <Text size="large" className="text-gray-800 max-w-3xl mx-auto">
              Let's make your windows beautiful together. We'll come to you, measure up, 
              and show you exactly what's possible. No pressure, no obligation - just 
              honest advice and a friendly chat over a cuppa.
            </Text>
            <Flex gap="medium" justify="center" align="center">
              <Button 
                to="/book-appointment" 
                variant="primary" 
                size="xlarge" 
                className="bg-gray-900 hover:bg-gray-800"
              >
                Book Your Free Visit
              </Button>
              <Button 
                href="tel:01457597091" 
                variant="secondary" 
                size="xlarge"
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                iconLeft={<Icon name="phone" effect="pulse" />}
              >
                Call for a Chat
              </Button>
            </Flex>
            
            <Grid cols={3} gap="large" className="text-gray-800">
              <Flex align="center" justify="center" gap="small">
                <Icon name="checkCircle" color="success" />
                <Text size="small" weight="medium">Completely Free</Text>
              </Flex>
              <Flex align="center" justify="center" gap="small">
                <Icon name="lock" color="info" />
                <Text size="small" weight="medium">No Obligation</Text>
              </Flex>
              <Flex align="center" justify="center" gap="small">
                <Icon name="mapPin" className="text-purple-600" />
                <Text size="small" weight="medium">Covering All Saddleworth</Text>
              </Flex>
            </Grid>
            
            <Alert variant="warning" size="small">
              ⚡ Limited availability - Book your free consultation this week!
            </Alert>
          </Stack>
        </Container>
      </Section>

      {/* Reviews Section */}
      <Section background="dark" padding="large">
        <ReviewsSection />
      </Section>

      {/* FAQ Section */}
      <Section padding="large">
        <FAQSection />
      </Section>
    </>
  )
}

export default HomeStandardized