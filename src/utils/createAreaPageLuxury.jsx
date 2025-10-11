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
import ContactFormLuxury from '../components/ContactFormLuxury'
import ReviewsSectionLuxury from '../components/ReviewsSectionLuxury'

// Import area configurations
import { areaConfigs } from './areaConfigs'

export const createAreaPageLuxury = (areaName) => {
  const AreaPage = () => {
    const config = areaConfigs[areaName.toLowerCase()]
    
    if (!config) {
      return (
        <Section background="dark" padding="xlarge">
          <Container>
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold">Area Not Found</Heading>
              <Button to="/" variant="primary">Return Home</Button>
            </Stack>
          </Container>
        </Section>
      )
    }

    // Area-specific reviews
    const areaReviews = [
      {
        name: config.testimonial?.name || 'Local Customer',
        location: areaName,
        rating: 5,
        text: config.testimonial?.quote || 'Excellent service and beautiful blinds!',
        product: config.testimonial?.product || 'Roller Blinds',
        verified: true
      }
    ]

    return (
      <>
        {/* Hero Section */}
        <HeroSection variant="luxury" height="large">
          <HeroOverlay variant="gradient" />
          {config.heroImage && (
            <Image
              src={config.heroImage}
              alt={`${areaName} window blinds and shutters`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <HeroContent align="center" padding="large">
            <Container>
              <Stack spacing="large" align="center" className="max-w-4xl mx-auto">
                <HeroTitle>
                  <ShimmerText variant="luxury">
                    Window Blinds {areaName}
                  </ShimmerText>
                </HeroTitle>
                <HeroSubtitle>
                  Your Local Window Treatment Specialists
                </HeroSubtitle>
                <HeroDescription>
                  {config.description}
                </HeroDescription>
                <HeroCTA>
                  <Button 
                    to="/book-appointment" 
                    variant="luxury" 
                    size="large"
                    iconLeft={<Icon name="calendar" />}
                  >
                    Book Free Home Visit
                  </Button>
                  <Button 
                    href="tel:01457597091" 
                    variant="outline" 
                    size="large"
                    iconLeft={<Icon name="phone" />}
                  >
                    Call 01457 597091
                  </Button>
                </HeroCTA>
              </Stack>
            </Container>
          </HeroContent>
        </HeroSection>

        {/* Local Service Benefits */}
        <Section background="cream" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Your Trusted {areaName} Blind Specialists
                </Heading>
                <Text size="large" color="dark" align="center">
                  Serving {areaName} and surrounding areas since 1979
                </Text>
              </Stack>

              <Grid cols={4} gap="medium">
                {[
                  {
                    icon: 'truck',
                    title: 'Free Home Visit',
                    description: `We come to you in ${areaName}`
                  },
                  {
                    icon: 'ruler',
                    title: 'Free Measuring',
                    description: 'Professional measuring service'
                  },
                  {
                    icon: 'currency',
                    title: 'Free Quote',
                    description: 'No obligation pricing'
                  },
                  {
                    icon: 'tools',
                    title: 'Expert Fitting',
                    description: 'Professional installation'
                  }
                ].map((benefit, index) => (
                  <Card key={index} variant="elevated" hover="lift" padding="medium">
                    <Stack spacing="small" align="center">
                      <LuxuryIcon variant="circle" size="medium">
                        <Icon name={benefit.icon} />
                      </LuxuryIcon>
                      <Heading size="base" align="center">
                        {benefit.title}
                      </Heading>
                      <Text size="small" color="muted" align="center">
                        {benefit.description}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Popular Products */}
        <Section background="dark" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="gold" align="center">
                  <ShimmerText variant="gold">
                    Popular in {areaName}
                  </ShimmerText>
                </Heading>
                <Text size="large" color="light" align="center">
                  The window treatments {areaName} homeowners love
                </Text>
              </Stack>

              <Grid cols={3} gap="large">
                {config.popularProducts.map((product, index) => (
                  <GlowBox key={index} variant="subtle" intensity="low">
                    <Card variant="luxury" hover="glow" padding="none">
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Stack spacing="medium" className="p-6">
                        <Heading size="lg" color="gold">
                          {product.title}
                        </Heading>
                        <Text color="light">
                          {product.description}
                        </Text>
                        <Button 
                          to={product.link}
                          variant="primary"
                          size="small"
                          iconRight={<Icon name="arrowRight" />}
                        >
                          Learn More
                        </Button>
                      </Stack>
                    </Card>
                  </GlowBox>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Testimonial */}
        {config.testimonial && (
          <Section background="luxury" padding="large">
            <Container>
              <GlowBox variant="luxury" padding="large">
                <Card variant="dark" padding="xlarge">
                  <Stack spacing="large" align="center">
                    <Icon name="quote" size="large" className="text-brand-gold opacity-50" />
                    <Text size="xlarge" color="light" align="center" leading="relaxed">
                      "{config.testimonial.quote}"
                    </Text>
                    <Stack spacing="small" align="center">
                      <Flex gap="small">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="star" size="small" className="text-brand-gold" />
                        ))}
                      </Flex>
                      <Text weight="semibold" color="gold">
                        {config.testimonial.name}
                      </Text>
                      <Text size="small" color="muted">
                        {areaName} • {config.testimonial.product}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              </GlowBox>
            </Container>
          </Section>
        )}

        {/* Nearby Areas */}
        <Section background="cream" padding="large">
          <Container>
            <Stack spacing="large">
              <Heading size="xl" color="dark" align="center">
                We Also Cover Nearby Areas
              </Heading>
              <Flex gap="medium" wrap="wrap" justify="center">
                {config.nearbyAreas.map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    variant="button"
                    size="small"
                  >
                    {area}
                  </Link>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Section>

        {/* Contact Form */}
        <Section background="dark" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Get Your Free {areaName} Quote
                </Heading>
                <Text size="large" color="light" align="center">
                  Tell us about your windows and we'll provide a no-obligation quote
                </Text>
              </Stack>
              
              <div className="max-w-4xl mx-auto">
                <ContactFormLuxury variant="luxury" showHeader={false} />
              </div>
            </Stack>
          </Container>
        </Section>

        {/* Local Info */}
        <Section background="gold" padding="medium">
          <Container>
            <Card variant="dark" padding="large">
              <Grid cols={2} gap="xlarge" align="center">
                <Stack spacing="medium">
                  <Heading size="xl" color="gold">
                    Why Choose Sunshine Blinds in {areaName}?
                  </Heading>
                  <Stack spacing="small">
                    <Flex gap="small" align="center">
                      <Icon name="check" className="text-brand-gold" />
                      <Text color="light">Family business serving {areaName} since 1979</Text>
                    </Flex>
                    <Flex gap="small" align="center">
                      <Icon name="check" className="text-brand-gold" />
                      <Text color="light">Expert knowledge of {areaName} homes</Text>
                    </Flex>
                    <Flex gap="small" align="center">
                      <Icon name="check" className="text-brand-gold" />
                      <Text color="light">5 year guarantee on all products</Text>
                    </Flex>
                    <Flex gap="small" align="center">
                      <Icon name="check" className="text-brand-gold" />
                      <Text color="light">Competitive local pricing</Text>
                    </Flex>
                  </Stack>
                </Stack>
                
                <Stack spacing="medium" align="center">
                  <LuxuryIcon variant="luxury" size="large">
                    <Icon name="location" />
                  </LuxuryIcon>
                  <Text size="large" weight="semibold" color="gold">
                    Covering All of {areaName}
                  </Text>
                  <Text color="light" align="center">
                    {config.additionalInfo || `Professional blind fitting throughout ${areaName} and surrounding villages`}
                  </Text>
                </Stack>
              </Grid>
            </Card>
          </Container>
        </Section>
      </>
    )
  }

  AreaPage.displayName = `AreaPage(${areaName})`
  
  return AreaPage
}