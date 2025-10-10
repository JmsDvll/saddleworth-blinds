import React from 'react'
import {
  Section,
  Container,
  Stack,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  Image,
  Flex,
  LuxuryBadge,
  GoldDivider,
  ShimmerText,
  GlowBox,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroOverlay,
  Link,
  LuxuryIcon
} from '../components/ui'
import ContactFormLuxury from '../components/ContactFormLuxury'
import ReviewsSectionLuxury from '../components/ReviewsSectionLuxury'

const AreaPageLuxury = ({
  areaName,
  heroImage = 'area-hero-1600.jpg',
  population,
  established,
  highlights,
  description,
  whyChooseUs,
  servicesOffered,
  recentProjects,
  localReviews,
  nearbyAreas,
  localInfo
}) => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection variant="luxury" height="large">
        <HeroOverlay variant="gradient" />
        <HeroContent align="center" padding="large">
          <Container>
            <Stack spacing="large" align="center" className="max-w-3xl mx-auto">
              <HeroTitle effect="glow">
                <ShimmerText variant="luxury">
                  {areaName} Blinds & Shutters
                </ShimmerText>
              </HeroTitle>
              <HeroSubtitle>
                Your Local Window Treatment Specialists
              </HeroSubtitle>
              <Text size="xlarge" color="light" align="center">
                {description}
              </Text>
              <Flex gap="medium" wrap="wrap" justify="center">
                <Button 
                  to="/book-appointment"
                  variant="luxury"
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
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Local Stats */}
      <Section background="dark" padding="medium">
        <Container>
          <Grid cols={4} gap="large">
            <Card variant="luxury" padding="medium">
              <Stack spacing="small" align="center">
                <Icon name="home" size="large" className="text-brand-gold" />
                <Text size="2xl" weight="bold" color="gold">500+</Text>
                <Text size="small" color="light" align="center">Homes Transformed in {areaName}</Text>
              </Stack>
            </Card>
            <Card variant="luxury" padding="medium">
              <Stack spacing="small" align="center">
                <Icon name="star" size="large" className="text-brand-gold" />
                <Text size="2xl" weight="bold" color="gold">5.0</Text>
                <Text size="small" color="light" align="center">Average Rating</Text>
              </Stack>
            </Card>
            <Card variant="luxury" padding="medium">
              <Stack spacing="small" align="center">
                <Icon name="clock" size="large" className="text-brand-gold" />
                <Text size="2xl" weight="bold" color="gold">45+</Text>
                <Text size="small" color="light" align="center">Years of Service</Text>
              </Stack>
            </Card>
            <Card variant="luxury" padding="medium">
              <Stack spacing="small" align="center">
                <Icon name="truck" size="large" className="text-brand-gold" />
                <Text size="2xl" weight="bold" color="gold">Free</Text>
                <Text size="small" color="light" align="center">Home Visits</Text>
              </Stack>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* About the Area */}
      <Section background="cream" padding="xlarge">
        <Container>
          <Grid cols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Stack spacing="medium">
                <Heading size="2xl" color="dark">
                  Serving {areaName} Since 1979
                </Heading>
                <GoldDivider variant="simple" size="small" align="left" />
              </Stack>
              
              <Stack spacing="medium">
                {highlights.map((highlight, index) => (
                  <Flex key={index} gap="medium" align="start">
                    <LuxuryIcon variant="circle" size="small" className="flex-shrink-0 mt-1">
                      <Icon name="check" />
                    </LuxuryIcon>
                    <Text>{highlight}</Text>
                  </Flex>
                ))}
              </Stack>

              <Stack spacing="small">
                <Text size="small" color="muted">
                  <Flex align="center" gap="small">
                    <Icon name="mapPin" size="small" />
                    Population: {population} • Established: {established}
                  </Flex>
                </Text>
              </Stack>
            </Stack>

            <GlowBox variant="subtle" padding="none">
              <Image
                src={`/images/optimized/${areaName.toLowerCase()}-village-800.jpg`}
                alt={`${areaName} village view`}
                className="rounded-lg shadow-luxury-lg"
              />
            </GlowBox>
          </Grid>
        </Container>
      </Section>

      {/* Services Offered */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="gold" align="center">
                <ShimmerText variant="gold">
                  Our Services in {areaName}
                </ShimmerText>
              </Heading>
              <Text size="large" color="light" align="center">
                Complete window treatment solutions for your home
              </Text>
            </Stack>

            <Grid cols={3} gap="large">
              {servicesOffered.map((service, index) => (
                <GlowBox key={index} variant="subtle" intensity="low">
                  <Card variant="luxury" hover="lift" padding="large">
                    <Stack spacing="medium">
                      <LuxuryIcon variant="luxury" size="medium">
                        <Icon name={service.icon} />
                      </LuxuryIcon>
                      <Heading size="lg" color="gold">
                        {service.name}
                      </Heading>
                      <Text color="light">
                        {service.description}
                      </Text>
                      <Link
                        to={service.link}
                        variant="button"
                        size="small"
                      >
                        Learn More
                      </Link>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Recent Projects */}
      {recentProjects && recentProjects.length > 0 && (
        <Section background="cream" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="dark" align="center">
                  Recent {areaName} Projects
                </Heading>
                <Text size="large" color="muted" align="center">
                  See what we've been creating for your neighbors
                </Text>
              </Stack>

              <Grid cols={3} gap="large">
                {recentProjects.map((project, index) => (
                  <Card key={index} variant="elevated" hover="lift" padding="none">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/optimized/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Stack spacing="small" className="p-6">
                      <Heading size="base" color="dark">
                        {project.title}
                      </Heading>
                      <Text size="small" color="muted">
                        {project.product} • {project.room}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </Grid>

              <Flex justify="center">
                <Button
                  to="/gallery"
                  variant="primary"
                  iconRight={<Icon name="arrowRight" />}
                >
                  View Full Gallery
                </Button>
              </Flex>
            </Stack>
          </Container>
        </Section>
      )}

      {/* Why Choose Us */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="xlarge">
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold" align="center">
                Why {areaName} Chooses Sunshine Blinds
              </Heading>
              <Grid cols={2} gap="xlarge">
                {whyChooseUs.map((reason, index) => (
                  <Flex key={index} gap="medium" align="start">
                    <Icon name={reason.icon} size="medium" className="text-brand-gold flex-shrink-0 mt-1" />
                    <Stack spacing="small">
                      <Text weight="semibold" color="gold" size="large">
                        {reason.title}
                      </Text>
                      <Text color="light">
                        {reason.description}
                      </Text>
                    </Stack>
                  </Flex>
                ))}
              </Grid>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Local Reviews */}
      {localReviews && localReviews.length > 0 && (
        <ReviewsSectionLuxury 
          reviews={localReviews}
          title={`What ${areaName} Residents Say`}
          subtitle="Real reviews from your local community"
        />
      )}

      {/* Contact Form */}
      <Section background="dark" padding="xlarge">
        <Container className="max-w-5xl">
          <Stack spacing="large">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="gold" align="center">
                Get Your Free {areaName} Quote
              </Heading>
              <Text size="large" color="light" align="center">
                We'll visit your {areaName} home at a time that suits you
              </Text>
            </Stack>
            <ContactFormLuxury variant="luxury" showHeader={false} />
          </Stack>
        </Container>
      </Section>

      {/* Nearby Areas */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <Heading size="xl" color="dark" align="center">
              We Also Serve Nearby Areas
            </Heading>
            <Flex gap="medium" wrap="wrap" justify="center">
              {nearbyAreas.map((area) => (
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

      {/* Local Info */}
      {localInfo && (
        <Section background="dark" padding="medium">
          <Container>
            <Card variant="luxury" padding="large">
              <Stack spacing="medium" align="center">
                <Icon name="info" size="medium" className="text-brand-gold" />
                <Text size="small" color="light" align="center">
                  {localInfo}
                </Text>
              </Stack>
            </Card>
          </Container>
        </Section>
      )}
    </>
  )
}

export default AreaPageLuxury