import React from 'react'
import {
  Section,
  Container,
  Grid,
  Stack,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  Link,
  Image,
  Flex,
  Badge,
  Box,
  HeroSection,
  HeroContent,
  HeroOverlay,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroCTA,
  GoldDivider,
  LuxuryBadge,
  LuxuryIcon,
  GlowBox,
  ShimmerText
} from '../components/ui'
import HeroCarouselLuxury from '../components/HeroCarouselLuxury'
import FAQSectionLuxury from '../components/FAQSectionLuxury'
import ReviewsSectionLuxury from '../components/ReviewsSectionLuxury'

const HomeLuxury = () => {
  const services = [
    { 
      name: 'Roller Blinds', 
      description: 'Simple, stylish and affordable window solutions', 
      link: '/roller-blinds', 
      image: 'roller-zen-kiwi-400.jpg',
      badge: 'Most Popular'
    },
    { 
      name: 'Venetian Blinds', 
      description: 'Classic style with precise light control', 
      link: '/venetian-blinds', 
      image: 'venetian-starwood-400.jpg' 
    },
    { 
      name: 'Vision Blinds', 
      description: 'Innovative day & night blind technology', 
      link: '/vision-blinds', 
      image: 'vision-capri-concrete-400.jpg',
      badge: 'Trending'
    },
    { 
      name: 'Perfect Fit Blinds', 
      description: 'No drilling required - ideal for UPVC windows', 
      link: '/perfect-fit-blinds', 
      image: 'perfectfit-monet-flower-400.jpg' 
    },
    { 
      name: 'Shutters', 
      description: 'Premium window shutters for lasting elegance', 
      link: '/shutters', 
      image: 'shutters-cotton-89mm-400.jpg',
      badge: 'Premium'
    },
    { 
      name: 'Vertical Blinds', 
      description: 'Perfect for large windows and patio doors', 
      link: '/vertical-blinds', 
      image: 'vertical-savanna-zebra-400.jpg' 
    }
  ]

  const features = [
    {
      icon: 'home',
      title: 'Free Home Visit',
      description: 'We bring samples to you'
    },
    {
      icon: 'ruler',
      title: 'Expert Measuring',
      description: 'Professional measuring service'
    },
    {
      icon: 'currency',
      title: 'Best Prices',
      description: 'Quality without compromise'
    },
    {
      icon: 'shield',
      title: '5 Year Guarantee',
      description: 'Complete peace of mind'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Book Consultation',
      description: 'Schedule your free home visit at a time that suits you',
      icon: 'calendar'
    },
    {
      number: '02',
      title: 'Choose Your Style',
      description: 'Browse samples and get expert advice in your home',
      icon: 'palette'
    },
    {
      number: '03',
      title: 'Professional Fitting',
      description: 'Expert installation by our experienced team',
      icon: 'tools'
    },
    {
      number: '04',
      title: 'Enjoy Your Home',
      description: 'Transform your space with beautiful new blinds',
      icon: 'home'
    }
  ]

  const faqs = [
    {
      question: 'How long does installation take?',
      answer: 'Most installations are completed within 2-3 hours, depending on the number of windows. Our expert fitters work efficiently to minimize disruption to your day.'
    },
    {
      question: 'Do you offer a guarantee?',
      answer: 'Yes! All our products come with a comprehensive 5-year guarantee covering both the product and installation. We stand behind our quality.'
    },
    {
      question: 'Can I see samples before ordering?',
      answer: 'Absolutely! We bring our entire sample collection to your home during the free consultation, so you can see exactly how they\'ll look in your space.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We serve all of Saddleworth and Greater Manchester, including Uppermill, Diggle, Delph, Greenfield, and surrounding areas.'
    },
    {
      question: 'How do I clean and maintain my blinds?',
      answer: 'We provide full care instructions with every installation. Most blinds just need regular dusting, and we\'ll show you the best techniques for your specific products.'
    }
  ]

  const reviews = [
    {
      name: 'Sarah Thompson',
      location: 'Uppermill',
      rating: 5,
      text: 'Absolutely thrilled with our new shutters! The quality is outstanding and the installation was flawless.',
      product: 'Plantation Shutters',
      verified: true
    },
    {
      name: 'James Mitchell',
      location: 'Diggle',
      rating: 5,
      text: 'Professional service from start to finish. The team were knowledgeable, punctual, and left everything spotless.',
      product: 'Vision Blinds',
      verified: true
    },
    {
      name: 'Emma Watson',
      location: 'Delph',
      rating: 5,
      text: 'Transformed our entire home! The advice on fabric selection was invaluable. Couldn\'t be happier.',
      product: 'Roller Blinds',
      verified: true
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroCarouselLuxury />

      {/* Features Bar */}
      <Section background="gold" padding="small">
        <Container>
          <Grid cols={4} gap="medium">
            {features.map((feature, index) => (
              <Flex key={index} gap="small" align="center" justify="center">
                <LuxuryIcon variant="simple" size="small">
                  <Icon name={feature.icon} />
                </LuxuryIcon>
                <Stack spacing="none">
                  <Text weight="bold" size="small" color="dark">
                    {feature.title}
                  </Text>
                  <Text size="xs" color="dark">
                    {feature.description}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Welcome Section */}
      <Section background="cream" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <LuxuryBadge variant="gold" icon="star">
                Family Business Since 1979
              </LuxuryBadge>
              <Heading size="3xl" align="center">
                <ShimmerText variant="gold">
                  Welcome to Sunshine Blinds Saddleworth
                </ShimmerText>
              </Heading>
              <Text size="xlarge" align="center" color="muted">
                Transform your windows with our stunning collection of made-to-measure blinds, 
                shutters, and curtains. Serving Saddleworth with pride for over 40 years.
              </Text>
            </Stack>

            <GoldDivider variant="luxury" />

            {/* Services Grid */}
            <Grid cols={3} gap="large">
              {services.map((service, index) => (
                <GlowBox key={index} variant="subtle" intensity="low">
                  <Card variant="elevated" hover="lift" padding="none">
                    <Box position="relative" overflow="hidden">
                      <Image
                        src={`/images/optimized/${service.image}`}
                        alt={service.name}
                        fill
                      />
                      {service.badge && (
                        <Box position="absolute" top="4" right="4">
                          <LuxuryBadge variant="gold" size="small">
                            {service.badge}
                          </LuxuryBadge>
                        </Box>
                      )}
                    </Box>
                    <Stack spacing="medium" padding="medium">
                      <Heading size="lg">
                        {service.name}
                      </Heading>
                      <Text color="muted">
                        {service.description}
                      </Text>
                      <Button 
                        to={service.link} 
                        variant="primary" 
                        size="small"
                        iconRight={<Icon name="arrowRight" />}
                      >
                        Explore Range
                      </Button>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="gold" align="center">
                <ShimmerText variant="luxury">
                  How It Works
                </ShimmerText>
              </Heading>
              <Text size="large" color="light" align="center">
                From consultation to installation in 4 simple steps
              </Text>
            </Stack>

            <Grid cols={4} gap="large">
              {processSteps.map((step, index) => (
                <Stack key={index} spacing="medium" align="center">
                  <GlowBox variant="gold" intensity="medium" padding="small">
                    <Box position="relative">
                      <LuxuryIcon variant="luxury" size="large">
                        <Icon name={step.icon} />
                      </LuxuryIcon>
                      <LuxuryBadge 
                        variant="dark" 
                        size="small" 
                        shape="circle"
                        position="absolute"
                      >
                        {step.number}
                      </LuxuryBadge>
                    </Box>
                  </GlowBox>
                  <Heading size="base" color="gold" align="center">
                    {step.title}
                  </Heading>
                  <Text size="small" color="light" align="center">
                    {step.description}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="luxury" padding="large">
        <Container>
          <GlowBox variant="luxury" padding="large">
            <Grid cols={4} gap="large">
              {[
                { value: '40+', label: 'Years Experience' },
                { value: '5000+', label: 'Happy Customers' },
                { value: '5★', label: 'Average Rating' },
                { value: '5 Year', label: 'Guarantee' }
              ].map((stat, index) => (
                <Stack key={index} spacing="small" align="center">
                  <ShimmerText variant="gold" intensity="high">
                    <Text size="4xl" weight="bold">
                      {stat.value}
                    </Text>
                  </ShimmerText>
                  <Text color="light" weight="medium">
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </GlowBox>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FAQSectionLuxury faqs={faqs} />

      {/* Reviews Section */}
      <ReviewsSectionLuxury reviews={reviews} />

      {/* Final CTA */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold" align="center">
                Ready to Transform Your Windows?
              </Heading>
              <Text size="large" color="light" align="center">
                Book your free consultation today and discover the perfect window treatments for your home
              </Text>
              <Flex gap="medium" wrap="wrap" justify="center">
                <Button 
                  to="/book-appointment"
                  variant="primary"
                  size="large"
                  iconLeft={<Icon name="calendar" />}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  href="tel:01457597091"
                  variant="outline"
                  size="large"
                  iconLeft={<Icon name="phone" />}
                >
                  Call 01457 597091
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  )
}

export default HomeLuxury