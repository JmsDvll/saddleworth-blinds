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
  Badge
} from '../components/ui'
import RollerBlindsCarousel from '../components/RollerBlindsCarousel'

const RollerBlindsStandardized = () => {
  const features = [
    { icon: 'checkCircle', title: '5 Year Guarantee' },
    { icon: 'mapPin', title: 'Local Saddleworth Experts' },
    { icon: 'calendar', title: 'Free Home Consultation' }
  ]

  const benefits = [
    {
      icon: 'home',
      title: 'Perfect for Every Room',
      description: 'From sunny kitchens to cosy bedrooms, roller blinds work brilliantly throughout your home.'
    },
    {
      icon: 'currency',
      title: 'Exceptional Value',
      description: 'High-quality blinds that won\'t break the bank - perfect for updating multiple rooms.'
    },
    {
      icon: 'shield',
      title: 'Child Safe Options',
      description: 'Cordless and motorised options available for complete peace of mind.'
    },
    {
      icon: 'clock',
      title: 'Quick Installation',
      description: 'Professional fitting typically takes just 30 minutes per blind.'
    }
  ]

  const blindTypes = [
    {
      name: 'Blackout Blinds',
      description: 'Perfect darkness for better sleep',
      features: [
        'Blocks 100% of light',
        'Thermal properties for insulation',
        'Ideal for bedrooms and nurseries',
        'Reduces outside noise'
      ],
      recommended: 'Bedrooms, Nurseries, Media Rooms'
    },
    {
      name: 'Sunscreen Blinds',
      description: 'Filter light while maintaining your view',
      features: [
        'UV protection for furniture',
        'Maintains outside view',
        'Reduces glare on screens',
        'Privacy during daylight'
      ],
      recommended: 'Living Rooms, Offices, Conservatories'
    },
    {
      name: 'Decorative Fabrics',
      description: 'Express your style with pattern and colour',
      features: [
        'Hundreds of designs available',
        'Match any interior style',
        'Light filtering options',
        'Easy to coordinate'
      ],
      recommended: 'Any Room, Feature Windows'
    }
  ]

  const processSteps = [
    {
      number: '1',
      title: 'Book Your Free Consultation',
      description: 'Call us or book online - we\'ll visit at a time that suits you'
    },
    {
      number: '2',
      title: 'Expert Measuring & Advice',
      description: 'We\'ll measure your windows and show you samples in your home'
    },
    {
      number: '3',
      title: 'Made to Measure',
      description: 'Your blinds are crafted to fit your windows perfectly'
    },
    {
      number: '4',
      title: 'Professional Installation',
      description: 'Our fitters install your blinds with minimal disruption'
    }
  ]

  const localAreas = [
    'Uppermill', 'Diggle', 'Delph', 'Greenfield', 
    'Dobcross', 'Lydgate', 'Springhead'
  ]

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Grid cols={2} gap="xlarge" align="center">
            <Stack spacing="xlarge">
              <Heading.H1>
                Premium Roller Blinds for
                <Text as="span" color="gold" className="block">
                  Saddleworth Homes
                </Text>
              </Heading.H1>
              
              <Text.Lead>
                Transform your windows with our stunning made-to-measure roller blinds. 
                From cosy cottages in Uppermill to modern homes in Greenfield, we've got 
                the perfect solution for every room in your house.
              </Text.Lead>
              
              <Flex gap="medium">
                <Button to="/book-appointment" variant="primary" size="xlarge">
                  Get Your Free Quote
                </Button>
                <Button 
                  href="tel:01457597091" 
                  variant="secondary" 
                  size="xlarge"
                  iconLeft={<Icon name="phone" />}
                >
                  01457 597091
                </Button>
              </Flex>
              
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
              <RollerBlindsCarousel showTitle={false} showDescription={false} />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Why Roller Blinds Section */}
      <Section background="dark" padding="large">
        <Container size="medium">
          <Stack spacing="xlarge">
            {/* Header with decorative elements */}
            <Stack spacing="large" className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 rounded-3xl -mx-8" />
              <div className="relative z-10">
                <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full" />
                <Heading.H2 color="gradient" marginBottom="large">
                  Why Roller Blinds Are Perfect for Saddleworth Homes
                </Heading.H2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full" />
              </div>
            </Stack>
            
            <Grid cols={2} gap="large" align="center">
              <Stack spacing="medium">
                <Text size="large" color="light">
                  Simple, stylish and incredibly practical - discover why roller blinds 
                  have become the go-to choice for homeowners across Saddleworth.
                </Text>
                <Text size="large" color="light">
                  Whether you're looking to control the morning sun streaming into your 
                  Diggle kitchen or create the perfect sleep environment in your Delph 
                  bedroom, our made-to-measure roller blinds offer the ideal solution.
                </Text>
              </Stack>
              
              <Card variant="elevated" className="bg-gray-800/50 border border-brand-gold/20">
                <Stack spacing="medium">
                  <Flex gap="medium" align="center">
                    <Flex
                      className="w-12 h-12 bg-brand-gold rounded-full flex-shrink-0"
                      align="center"
                      justify="center"
                    >
                      <Icon name="checkCircle" size="large" color="black" />
                    </Flex>
                    <Text size="large" weight="semibold">
                      Why Choose Roller Blinds?
                    </Text>
                  </Flex>
                  <Text color="light" className="italic">
                    "The simplicity of roller blinds makes them perfect for the varied 
                    window styles found in Saddleworth homes - from traditional sash 
                    windows to modern bi-folds."
                  </Text>
                  <Text size="small" color="muted" align="right">
                    - Sarah, Lead Designer
                  </Text>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Benefits Grid */}
      <Section background="darker" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" className="text-center">
              <Heading.H2>The Benefits You'll Love</Heading.H2>
              <Text.Lead>
                Discover why thousands of Saddleworth homeowners choose roller blinds
              </Text.Lead>
            </Stack>
            
            <Grid cols={4} gap="large">
              {benefits.map((benefit, index) => (
                <Card key={index} variant="default" hover="lift" className="text-center">
                  <Stack spacing="medium">
                    <Flex justify="center">
                      <Flex
                        className="w-16 h-16 bg-brand-gold/20 rounded-full"
                        align="center"
                        justify="center"
                      >
                        <Icon name={benefit.icon} size="xlarge" color="gold" />
                      </Flex>
                    </Flex>
                    <Heading.H4>{benefit.title}</Heading.H4>
                    <Text color="light" size="small">
                      {benefit.description}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Blind Types Section */}
      <Section background="gradient" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" className="text-center">
              <Heading.H2>Choose Your Perfect Style</Heading.H2>
              <Text.Lead>
                From complete darkness to gentle light filtering, we have options for every need
              </Text.Lead>
            </Stack>
            
            <Grid cols={3} gap="large">
              {blindTypes.map((type, index) => (
                <Card key={index} variant="elevated" hover="glow">
                  <Stack spacing="large">
                    <Stack spacing="small">
                      <Heading.H3>{type.name}</Heading.H3>
                      <Text color="gold" weight="medium">
                        {type.description}
                      </Text>
                    </Stack>
                    
                    <Stack spacing="small">
                      {type.features.map((feature, idx) => (
                        <Flex key={idx} gap="small" align="start">
                          <Icon name="check" size="small" color="gold" className="mt-0.5 flex-shrink-0" />
                          <Text size="small" color="light">{feature}</Text>
                        </Flex>
                      ))}
                    </Stack>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <Text size="small" weight="medium" color="muted">
                        Recommended for:
                      </Text>
                      <Text size="small" color="light">
                        {type.recommended}
                      </Text>
                    </div>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Local Expertise Section */}
      <Section background="dark" padding="large">
        <Container size="medium">
          <Grid cols={2} gap="xlarge" align="center">
            <Image
              src="/images/optimized/roller-carnival-bubblegum-1600.jpg"
              alt="Beautiful roller blinds in a Saddleworth home"
              aspectRatio="landscape"
              className="rounded-lg shadow-2xl"
            />
            
            <Stack spacing="large">
              <Heading.H2>
                Your Local Roller Blind
                <Text as="span" color="gold" className="block">
                  Experts Since 2003
                </Text>
              </Heading.H2>
              
              <Text.Lead>
                We've been fitting roller blinds throughout Saddleworth for over 20 years. 
                We know the unique challenges of local properties - from stone cottages 
                with deep window reveals to modern extensions with bi-fold doors.
              </Text.Lead>
              
              <Stack spacing="small">
                <Text weight="semibold">Proudly serving all Saddleworth villages:</Text>
                <Flex gap="small" wrap={true}>
                  {localAreas.map((area) => (
                    <Link key={area} to={`/areas/${area.toLowerCase()}`}>
                      <Badge variant="ghost">{area}</Badge>
                    </Link>
                  ))}
                </Flex>
              </Stack>
              
              <Button to="/about" variant="secondary" size="large">
                Learn More About Us
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="darker" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" className="text-center">
              <Heading.H2 color="gradient">
                How It Works
              </Heading.H2>
              <Text.Lead>
                From first contact to perfect installation - we make it easy
              </Text.Lead>
            </Stack>
            
            <Grid cols={4} gap="large">
              {processSteps.map((step, index) => (
                <Stack key={index} spacing="medium" className="text-center">
                  <Flex justify="center">
                    <Flex
                      className="w-16 h-16 bg-brand-gold rounded-full"
                      align="center"
                      justify="center"
                    >
                      <Text size="xlarge" weight="bold" color="black">
                        {step.number}
                      </Text>
                    </Flex>
                  </Flex>
                  <Heading.H4>{step.title}</Heading.H4>
                  <Text color="light" size="small">
                    {step.description}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Product Showcase */}
      <Section padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" className="text-center">
              <Heading.H2>Browse Our Roller Blind Collection</Heading.H2>
              <Text.Lead>
                Hundreds of fabrics and patterns to choose from
              </Text.Lead>
            </Stack>
            
            <RollerBlindsCarousel />
          </Stack>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="gold" textColor="dark" padding="large">
        <Container size="narrow">
          <Stack spacing="large" className="text-center">
            <Heading.H2>
              Ready to Transform Your Windows?
            </Heading.H2>
            <Text size="large" className="text-gray-800">
              Join hundreds of happy Saddleworth customers who've discovered the perfect 
              roller blinds for their homes. Book your free consultation today and let's 
              find the ideal solution for you.
            </Text>
            
            <Flex gap="medium" justify="center">
              <Button 
                to="/book-appointment" 
                size="xlarge"
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Book Free Consultation
              </Button>
              <Button 
                href="tel:01457597091" 
                size="xlarge"
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                iconLeft={<Icon name="phone" />}
              >
                Call Now
              </Button>
            </Flex>
            
            <Flex justify="center" gap="large">
              <Flex align="center" gap="small">
                <Icon name="checkCircle" color="success" />
                <Text weight="medium">Free Measuring</Text>
              </Flex>
              <Flex align="center" gap="small">
                <Icon name="star" className="text-yellow-600" />
                <Text weight="medium">5 Year Guarantee</Text>
              </Flex>
              <Flex align="center" gap="small">
                <Icon name="shield" className="text-blue-600" />
                <Text weight="medium">Fully Insured</Text>
              </Flex>
            </Flex>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default RollerBlindsStandardized