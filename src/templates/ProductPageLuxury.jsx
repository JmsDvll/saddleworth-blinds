import React from 'react'
import {
  Section,
  Container,
  Grid,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  Image,
  LuxuryBadge,
  GoldDivider,
  ShimmerText,
  LuxuryIcon,
  GlowBox,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroOverlay
} from '../components/ui'
import FAQSection from '../components/FAQSection'

const ProductPageLuxury = ({
  name,
  tagline,
  description,
  heroImage,
  features,
  benefits,
  specifications,
  gallery,
  faqs,
  relatedProducts
}) => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection variant="image" height="medium">
        <div className="absolute inset-0">
          <Image
            src={`/images/optimized/${heroImage}`}
            alt={`${name} - Premium Window Solutions`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <HeroOverlay variant="luxury" />
        </div>
        <HeroContent align="center" padding="large">
          <Container>
            <Stack spacing="large" align="center" className="max-w-4xl mx-auto">
              <LuxuryBadge variant="luxury" size="medium" icon="sparkle">
                Premium Collection
              </LuxuryBadge>
              <HeroTitle effect="glow">
                <ShimmerText variant="luxury" speed="slow">
                  {name}
                </ShimmerText>
              </HeroTitle>
              <HeroSubtitle>
                {tagline}
              </HeroSubtitle>
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
                  to="/gallery"
                  variant="outline"
                  size="large"
                  iconLeft={<Icon name="image" />}
                >
                  View Gallery
                </Button>
              </Flex>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Introduction */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center" className="max-w-3xl mx-auto">
              <Text size="xlarge" align="center" leading="relaxed">
                {description}
              </Text>
            </Stack>
            
            <GoldDivider variant="ornament" size="medium">
              <Icon name="sparkle" />
            </GoldDivider>

            {/* Key Stats */}
            <Grid cols={4} gap="medium">
              {[
                { number: '1000+', label: 'Happy Customers' },
                { number: '5★', label: 'Average Rating' },
                { number: '5yr', label: 'Warranty' },
                { number: '100+', label: 'Style Options' }
              ].map((stat, index) => (
                <Stack key={index} spacing="small" align="center">
                  <ShimmerText variant="gold" className="text-4xl font-display font-bold">
                    {stat.number}
                  </ShimmerText>
                  <Text size="small" color="muted" align="center">
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="3xl" color="gold" align="center">
                Premium Features
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl mx-auto">
                Discover what makes our {name} the perfect choice for your home
              </Text>
            </Stack>

            <Grid cols={3} gap="large">
              {features.map((feature, index) => (
                <GlowBox key={index} variant="gold" intensity="low">
                  <Card variant="luxury" hover="lift" padding="large">
                    <Stack spacing="medium">
                      <LuxuryIcon variant="luxury" size="large">
                        <Icon name={feature.icon} />
                      </LuxuryIcon>
                      <Heading size="xl" color="gold">
                        {feature.title}
                      </Heading>
                      <Text color="light">
                        {feature.description}
                      </Text>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Product Gallery */}
      <Section background="luxury" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="3xl" color="gold" align="center">
                Stunning Transformations
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl mx-auto">
                See how our {name} have transformed homes across Saddleworth
              </Text>
            </Stack>

            <Grid cols={2} gap="large">
              {gallery.slice(0, 4).map((image, index) => (
                <GlowBox key={index} variant="subtle">
                  <Card variant="glass" hover="scale" padding="none">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/optimized/${image.src}`}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {image.caption && (
                      <div className="p-4">
                        <Text size="small" color="light" align="center">
                          {image.caption}
                        </Text>
                      </div>
                    )}
                  </Card>
                </GlowBox>
              ))}
            </Grid>

            <Flex justify="center">
              <Button 
                to="/gallery"
                variant="primary"
                size="large"
                iconRight={<Icon name="arrowRight" />}
              >
                View Full Gallery
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="cream" padding="large">
        <Container>
          <Grid cols={2} gap="xlarge" align="center">
            <Stack spacing="large">
              <Heading size="2xl" color="dark">
                Why Choose Our {name}?
              </Heading>
              <Stack spacing="medium">
                {benefits.map((benefit, index) => (
                  <Flex key={index} gap="medium" align="start">
                    <LuxuryIcon variant="glow" size="small" className="mt-1">
                      <Icon name="check" />
                    </LuxuryIcon>
                    <Stack spacing="small">
                      <Text weight="semibold" color="dark">
                        {benefit.title}
                      </Text>
                      <Text color="muted">
                        {benefit.description}
                      </Text>
                    </Stack>
                  </Flex>
                ))}
              </Stack>
              <Button 
                to="/book-appointment"
                variant="primary"
                size="large"
                iconLeft={<Icon name="calendar" />}
              >
                Schedule Your Consultation
              </Button>
            </Stack>

            <GlowBox variant="luxury" padding="medium">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={`/images/optimized/${gallery[0].src}`}
                  alt="Premium quality showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </GlowBox>
          </Grid>
        </Container>
      </Section>

      {/* Specifications */}
      <Section background="dark" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="gold" align="center">
                Technical Specifications
              </Heading>
            </Stack>

            <Grid cols={2} gap="large">
              {Object.entries(specifications).map(([category, specs], index) => (
                <Card key={index} variant="dark" padding="large">
                  <Stack spacing="medium">
                    <Heading size="lg" color="gold">
                      {category}
                    </Heading>
                    <GoldDivider variant="simple" size="small" align="left" />
                    <Stack spacing="small">
                      {specs.map((spec, idx) => (
                        <Flex key={idx} justify="between" align="center">
                          <Text color="light">{spec.label}</Text>
                          <Text color="gold" weight="semibold">{spec.value}</Text>
                        </Flex>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold" align="center">
                Your Journey to Perfect {name}
              </Heading>
              
              <Grid cols={4} gap="medium">
                {[
                  { icon: 'phone', title: 'Contact Us', desc: 'Get in touch for your free consultation' },
                  { icon: 'ruler', title: 'Measure', desc: 'Professional measuring service' },
                  { icon: 'palette', title: 'Design', desc: 'Choose your perfect style' },
                  { icon: 'tools', title: 'Install', desc: 'Expert fitting by our team' }
                ].map((step, index) => (
                  <Stack key={index} spacing="small" align="center">
                    <LuxuryIcon variant="circle" size="medium">
                      <Icon name={step.icon} />
                    </LuxuryIcon>
                    <Text weight="semibold" color="gold" align="center">
                      {step.title}
                    </Text>
                    <Text size="small" color="light" align="center">
                      {step.desc}
                    </Text>
                  </Stack>
                ))}
              </Grid>

              <Button 
                to="/book-appointment"
                variant="primary"
                size="large"
                iconLeft={<Icon name="calendar" />}
              >
                Start Your Journey Today
              </Button>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <FAQSection
          title={`${name} FAQs`}
          subtitle="Everything you need to know"
          faqs={faqs}
        />
      )}

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <Section background="dark" padding="large">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="gold" align="center">
                  You May Also Like
                </Heading>
              </Stack>

              <Grid cols={3} gap="large">
                {relatedProducts.map((product, index) => (
                  <Card key={index} variant="luxury" hover="lift" padding="none">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/optimized/${product.image}`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Stack spacing="small" className="p-6">
                      <Heading size="lg" color="gold">
                        {product.name}
                      </Heading>
                      <Text size="small" color="light">
                        {product.description}
                      </Text>
                      <Button 
                        to={product.link}
                        variant="outline"
                        size="small"
                        fullWidth
                        iconRight={<Icon name="arrowRight" />}
                      >
                        Explore
                      </Button>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      )}

      {/* Final CTA */}
      <Section background="luxury" padding="large">
        <Container>
          <GlowBox variant="luxury" padding="large">
            <Stack spacing="large" align="center">
              <ShimmerText variant="luxury" as="h2" className="text-4xl md:text-5xl font-display font-bold text-center">
                Ready to Transform Your Windows?
              </ShimmerText>
              <Text size="large" color="light" align="center" className="max-w-2xl">
                Join thousands of satisfied customers who've discovered the perfect {name} for their homes
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

export default ProductPageLuxury