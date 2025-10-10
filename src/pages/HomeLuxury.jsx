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
  GoldDivider,
  ShimmerText,
  LuxuryBadge,
  LuxuryIcon,
  GlowBox
} from '../components/ui'
import HeroCarouselLuxury from '../components/HeroCarouselLuxury'
import FAQSection from '../components/FAQSection'
import ReviewsSection from '../components/ReviewsSection'

const HomeLuxury = () => {
  const services = [
    { 
      name: 'Roller Blinds', 
      description: 'Timeless elegance meets modern functionality', 
      link: '/roller-blinds', 
      image: 'roller-zen-kiwi-400.jpg',
      features: ['Blackout Options', 'Motorized Available', '100+ Fabrics']
    },
    { 
      name: 'Venetian Blinds', 
      description: 'Classic sophistication with precise light control', 
      link: '/venetian-blinds', 
      image: 'venetian-starwood-400.jpg',
      features: ['Wood & Faux Wood', '25-50mm Slats', 'Cordless Options']
    },
    { 
      name: 'Vision Blinds', 
      description: 'Revolutionary dual-layer design for ultimate versatility', 
      link: '/vision-blinds', 
      image: 'vision-capri-concrete-400.jpg',
      features: ['Day & Night', 'Privacy Control', 'Modern Design'],
      hot: true
    },
    { 
      name: 'Perfect Fit Blinds', 
      description: 'Seamless integration without drilling', 
      link: '/perfect-fit-blinds', 
      image: 'perfectfit-monet-flower-400.jpg',
      features: ['No Drilling', 'UPVC Compatible', 'Child Safe'],
      hot: true
    },
    { 
      name: 'Shutters', 
      description: 'The pinnacle of luxury window dressing', 
      link: '/shutters', 
      image: 'shutters-cotton-89mm-400.jpg',
      features: ['Solid Wood', 'Custom Painted', 'Lifetime Quality'],
      premium: true
    },
    { 
      name: 'Vertical Blinds', 
      description: 'Perfect for large windows and sliding doors', 
      link: '/vertical-blinds', 
      image: 'vertical-savanna-zebra-400.jpg',
      features: ['Wide Windows', 'Easy Operation', 'Washable']
    }
  ]

  const processSteps = [
    {
      icon: 'phone',
      title: 'Free Consultation',
      description: 'Book your complimentary home visit with our design experts'
    },
    {
      icon: 'ruler',
      title: 'Professional Measuring',
      description: 'Precise measurements ensure perfect fit every time'
    },
    {
      icon: 'palette',
      title: 'Design & Selection',
      description: 'Choose from thousands of premium fabrics and styles'
    },
    {
      icon: 'tools',
      title: 'Expert Installation',
      description: 'Professional fitting by our certified installers'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Uppermill',
      rating: 5,
      text: 'Absolutely thrilled with our new shutters. The quality is exceptional and the service was impeccable from start to finish.',
      product: 'Plantation Shutters'
    },
    {
      name: 'James Thompson',
      location: 'Diggle',
      rating: 5,
      text: 'The Perfect Fit blinds transformed our conservatory. No more drafts and they look absolutely stunning!',
      product: 'Perfect Fit Blinds'
    },
    {
      name: 'Emma Wilson',
      location: 'Delph',
      rating: 5,
      text: 'Professional service and beautiful products. Our Vision blinds are the talking point of our living room.',
      product: 'Vision Blinds'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroCarouselLuxury />

      {/* Introduction */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="xlarge" align="center">
            <Stack spacing="medium" align="center" className="max-w-3xl mx-auto">
              <ShimmerText variant="luxury" as="h2" className="text-4xl md:text-5xl font-display font-bold text-center">
                Welcome to Luxury Living
              </ShimmerText>
              <Text size="large" align="center" color="dark">
                Transform your space with Saddleworth's premier window dressing specialists. 
                With over 40 years of excellence, we bring unparalleled craftsmanship and 
                style to homes across Greater Manchester.
              </Text>
            </Stack>

            <GoldDivider variant="ornament" size="medium">
              <Icon name="sparkle" />
            </GoldDivider>

            {/* Key Benefits */}
            <Grid cols={4} gap="medium">
              {[
                { icon: 'star', text: '5 Star Service', subtext: '1000+ Happy Customers' },
                { icon: 'shield', text: '5 Year Guarantee', subtext: 'Complete Peace of Mind' },
                { icon: 'currency', text: 'Best Price Promise', subtext: 'Guaranteed Value' },
                { icon: 'truck', text: 'Free Installation', subtext: 'Professional Fitting' }
              ].map((benefit, index) => (
                <GlowBox key={index} variant="subtle" intensity="low">
                  <Stack spacing="small" align="center">
                    <LuxuryIcon variant="glow" size="medium">
                      <Icon name={benefit.icon} />
                    </LuxuryIcon>
                    <Text weight="semibold" align="center">{benefit.text}</Text>
                    <Text size="small" color="muted" align="center">{benefit.subtext}</Text>
                  </Stack>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Products Showcase */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            {/* Section Header */}
            <Stack spacing="medium" align="center">
              <Heading size="3xl" color="gold" align="center">
                Our Premium Collection
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl mx-auto">
                Discover our carefully curated range of window solutions, 
                each designed to enhance your home's beauty and functionality
              </Text>
            </Stack>

            {/* Products Grid */}
            <Grid cols={3} gap="large">
              {services.map((service, index) => (
                <GlowBox key={service.name} variant="gold" intensity="low">
                  <Card variant="luxury" hover="lift" padding="none">
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/optimized/${service.image}`}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                      
                      {/* Badges */}
                      {(service.hot || service.premium) && (
                        <div className="absolute top-4 right-4">
                          {service.hot && <LuxuryBadge variant="gold" icon="star">HOT</LuxuryBadge>}
                          {service.premium && <LuxuryBadge variant="luxury" icon="crown">PREMIUM</LuxuryBadge>}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <Stack spacing="medium" className="p-6">
                      <Heading size="xl" color="gold">
                        {service.name}
                      </Heading>
                      <Text color="light">
                        {service.description}
                      </Text>
                      
                      {/* Features */}
                      <Stack spacing="small">
                        {service.features.map((feature, idx) => (
                          <Flex key={idx} gap="small" align="center">
                            <Icon name="check" size="small" className="text-brand-gold" />
                            <Text size="small" color="muted">{feature}</Text>
                          </Flex>
                        ))}
                      </Stack>

                      <Button 
                        to={service.link}
                        variant="outline"
                        fullWidth
                        iconRight={<Icon name="arrowRight" />}
                      >
                        Explore {service.name}
                      </Button>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>

            {/* View All CTA */}
            <Flex justify="center">
              <Button 
                to="/gallery"
                variant="luxury"
                size="large"
                iconRight={<Icon name="arrowRight" />}
              >
                View Full Collection
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="luxury" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="3xl" color="gold" align="center">
                Your Journey to Perfect Windows
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl mx-auto">
                From consultation to installation, we make the process seamless and enjoyable
              </Text>
            </Stack>

            {/* Process Steps */}
            <Grid cols={4} gap="medium">
              {processSteps.map((step, index) => (
                <Stack key={index} spacing="medium" align="center">
                  <div className="relative">
                    <LuxuryIcon variant="luxury" size="large">
                      <Icon name={step.icon} />
                    </LuxuryIcon>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-brand-gold to-transparent -translate-y-1/2" />
                    )}
                  </div>
                  <Heading size="lg" color="gold" align="center">
                    {step.title}
                  </Heading>
                  <Text size="small" color="light" align="center">
                    {step.description}
                  </Text>
                </Stack>
              ))}
            </Grid>

            <Flex justify="center">
              <Button 
                to="/book-appointment"
                variant="primary"
                size="large"
                iconLeft={<Icon name="calendar" />}
              >
                Start Your Journey
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="3xl" color="dark" align="center">
                What Our Customers Say
              </Heading>
              <Text size="large" color="muted" align="center" className="max-w-2xl mx-auto">
                Don't just take our word for it - hear from homeowners who've transformed their spaces
              </Text>
            </Stack>

            <Grid cols={3} gap="large">
              {testimonials.map((testimonial, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="large">
                  <Stack spacing="medium">
                    {/* Stars */}
                    <Flex gap="small">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="star" size="small" className="text-brand-gold" />
                      ))}
                    </Flex>

                    {/* Quote */}
                    <Text color="dark" leading="relaxed">
                      "{testimonial.text}"
                    </Text>

                    {/* Customer Info */}
                    <Stack spacing="small">
                      <Text weight="semibold" color="dark">
                        {testimonial.name}
                      </Text>
                      <Flex gap="small" align="center">
                        <Icon name="location" size="tiny" className="text-brand-gold" />
                        <Text size="small" color="muted">{testimonial.location}</Text>
                        <Text size="small" color="muted">•</Text>
                        <Text size="small" color="muted">{testimonial.product}</Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Grid>

            <Flex justify="center">
              <Button 
                to="/reviews"
                variant="secondary"
                iconRight={<Icon name="arrowRight" />}
              >
                Read More Reviews
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Special Offer */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <LuxuryBadge variant="luxury" size="medium" icon="sparkle">
                LIMITED TIME OFFER
              </LuxuryBadge>
              
              <Stack spacing="small" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Save 20% on Perfect Fit Blinds
                </Heading>
                <Text size="large" color="light" align="center">
                  Transform your UPVC windows without drilling. Offer ends soon!
                </Text>
              </Stack>

              <Flex gap="medium" wrap="wrap" justify="center">
                <Button 
                  to="/perfect-fit-blinds"
                  variant="primary"
                  size="large"
                >
                  Explore Perfect Fit
                </Button>
                <Button 
                  to="/book-appointment"
                  variant="outline"
                  size="large"
                >
                  Book Free Quote
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section background="dark" padding="large">
        <Container>
          <Stack spacing="large">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="gold" align="center">
                Proudly Serving Saddleworth & Beyond
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl mx-auto">
                Bringing premium window solutions to homes across Greater Manchester
              </Text>
            </Stack>

            <Grid cols={6} gap="small">
              {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate', 
                'Denshaw', 'Friezland', 'Grasscroft', 'Grotton', 'Springhead', 'Lees'].map((area) => (
                <Link 
                  key={area}
                  to={`/areas/${area.toLowerCase()}`}
                  variant="subtle"
                  className="text-center p-3 rounded-lg hover:bg-brand-gold/10 transition-all duration-300"
                >
                  <Text color="light">{area}</Text>
                </Link>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <Section background="luxury" padding="large">
        <Container>
          <GlowBox variant="luxury" padding="large">
            <Stack spacing="large" align="center">
              <ShimmerText variant="luxury" as="h2" className="text-4xl md:text-5xl font-display font-bold text-center">
                Ready to Transform Your Home?
              </ShimmerText>
              <Text size="large" color="light" align="center" className="max-w-2xl">
                Join thousands of satisfied customers who've discovered the perfect window solutions
              </Text>
              <Flex gap="medium" wrap="wrap" justify="center">
                <Button 
                  to="/book-appointment"
                  variant="primary"
                  size="xlarge"
                  iconLeft={<Icon name="calendar" />}
                >
                  Book Free Consultation
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
            </Stack>
          </GlowBox>
        </Container>
      </Section>
    </>
  )
}

export default HomeLuxury