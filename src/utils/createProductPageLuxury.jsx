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
  ShimmerText,
  HeroImage,
  ImageContainer
} from '../components/ui'
import FAQSectionLuxury from '../components/FAQSectionLuxury'
import ReviewsSectionLuxury from '../components/ReviewsSectionLuxury'

// Import all product configurations
import { productConfigs } from './createProductPage'
import { carouselData } from './carouselData'
import ProductCarouselStandardized from '../components/ProductCarouselStandardized'

// Create a luxury product page using the existing configs
export const createProductPageLuxury = (productSlug, CarouselComponent) => {
  const ProductPage = () => {
    const config = productConfigs[productSlug]
    
    if (!config) {
      return (
        <Section background="dark" padding="xlarge">
          <Container>
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold">Product Not Found</Heading>
              <Button to="/" variant="primary">Return Home</Button>
            </Stack>
          </Container>
        </Section>
      )
    }

    return (
      <>
        {/* Hero Section */}
        <HeroSection variant="luxury" height="large">
          <HeroOverlay variant="gradient" />
          {config.heroImage && (
            <HeroImage
              src={config.heroImage}
              alt={config.heroAlt || config.title}
            />
          )}
          <HeroContent align="left" padding="large">
            <Container>
              <Grid cols={2} gap="xlarge" align="center">
                <Stack spacing="large">
                  <HeroTitle>
                    <ShimmerText variant="luxury">
                      {config.title}
                    </ShimmerText>
                  </HeroTitle>
                  <HeroSubtitle>
                    {config.tagline}
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
                  </HeroCTA>
                </Stack>
                
                {/* Quick Features */}
                <Stack spacing="medium">
                  {config.features.map((feature, index) => (
                    <GlowBox key={index} variant="subtle" padding="small">
                      <Flex gap="small" align="center">
                        <LuxuryIcon variant="circle" size="small">
                          <Icon name={feature.icon} />
                        </LuxuryIcon>
                        <Text size="large" weight="semibold" color="light">
                          {feature.title}
                        </Text>
                      </Flex>
                    </GlowBox>
                  ))}
                </Stack>
              </Grid>
            </Container>
          </HeroContent>
        </HeroSection>

        {/* Product Carousel */}
        {(CarouselComponent || carouselData[productSlug]) && (
          <Section background="dark" padding="large">
            <Container>
              <Stack spacing="large">
                <Heading size="2xl" color="gold" align="center">
                  <ShimmerText variant="gold">
                    Explore Our Collection
                  </ShimmerText>
                </Heading>
                {CarouselComponent ? (
                  <CarouselComponent />
                ) : (
                  <ProductCarouselStandardized slides={carouselData[productSlug]} />
                )}
              </Stack>
            </Container>
          </Section>
        )}

        {/* Key Benefits */}
        <Section background="cream" padding="xlarge">
          <Container>
            <Stack spacing="xlarge">
              <Stack spacing="medium" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Why Choose {config.title}?
                </Heading>
                <Text size="large" color="dark" align="center">
                  Discover the perfect solution for your windows
                </Text>
              </Stack>

              <Grid cols={2} gap="large">
                {config.keyBenefits.map((benefit, index) => (
                  <GlowBox key={index} variant="subtle" intensity="low">
                    <Card variant="elevated" hover="lift" padding="large">
                      <Stack spacing="medium">
                        <LuxuryIcon variant="luxury" size="medium">
                          <Icon name={benefit.icon} />
                        </LuxuryIcon>
                        <Heading size="lg" color="dark">
                          {benefit.title}
                        </Heading>
                        <Text color="muted">
                          {benefit.description}
                        </Text>
                      </Stack>
                    </Card>
                  </GlowBox>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Product Options */}
        {config.options && (
          <Section background="dark" padding="xlarge">
            <Container>
              <Stack spacing="xlarge">
                <Heading size="2xl" color="gold" align="center">
                  Available Options
                </Heading>
                
                <Grid cols={3} gap="large">
                  {config.options.map((option, index) => (
                    <Card key={index} variant="luxury" hover="glow" padding="large">
                      <Stack spacing="medium">
                        {option.badge && (
                          <LuxuryBadge variant="gold" size="small">
                            {option.badge}
                          </LuxuryBadge>
                        )}
                        <Heading size="base" color="gold">
                          {option.title}
                        </Heading>
                        <Text color="light">
                          {option.description}
                        </Text>
                        {option.features && (
                          <Stack spacing="small">
                            <GoldDivider variant="simple" size="small" align="left" />
                            {option.features.map((feature, idx) => (
                              <Flex key={idx} gap="small" align="center">
                                <Icon name="check" size="small" />
                                <Text size="small" color="light">{feature}</Text>
                              </Flex>
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </Card>
                  ))}
                </Grid>
              </Stack>
            </Container>
          </Section>
        )}

        {/* Specifications */}
        {config.specifications && (
          <Section background="luxury" padding="large">
            <Container>
              <GlowBox variant="luxury" padding="large">
                <Card variant="dark" padding="xlarge">
                  <Stack spacing="large">
                    <Heading size="xl" color="gold" align="center">
                      Technical Specifications
                    </Heading>
                    <Grid cols={2} gap="xlarge">
                      {Object.entries(config.specifications).map(([category, specs]) => (
                        <Stack key={category} spacing="medium">
                          <Heading size="base" color="gold">
                            {category}
                          </Heading>
                          <Stack spacing="small">
                            {specs.map((spec, index) => (
                              <Flex key={index} justify="between" gap="medium">
                                <Text color="light">{spec.label}:</Text>
                                <Text color="muted" weight="semibold">{spec.value}</Text>
                              </Flex>
                            ))}
                          </Stack>
                        </Stack>
                      ))}
                    </Grid>
                  </Stack>
                </Card>
              </GlowBox>
            </Container>
          </Section>
        )}

        {/* Gallery */}
        {config.gallery && (
          <Section background="cream" padding="xlarge">
            <Container>
              <Stack spacing="xlarge">
                <Heading size="2xl" color="gold" align="center">
                  Gallery
                </Heading>
                <Grid cols={3} gap="large">
                  {config.gallery.map((item, index) => (
                    <Card key={index} variant="elevated" hover="lift" padding="none">
                      <ImageContainer aspectRatio="4:3">
                        <Image
                          src={item.src}
                          alt={item.alt}
                        />
                      </ImageContainer>
                      {item.caption && (
                        <Container padding="small">
                          <Text size="small" color="muted" align="center">
                            {item.caption}
                          </Text>
                        </Container>
                      )}
                    </Card>
                  ))}
                </Grid>
              </Stack>
            </Container>
          </Section>
        )}

        {/* FAQ Section */}
        {config.faqs && <FAQSectionLuxury faqs={config.faqs} />}

        {/* Reviews */}
        {config.reviews && <ReviewsSectionLuxury reviews={config.reviews} />}

        {/* CTA Section */}
        <Section background="gold" padding="medium">
          <Container>
            <Card variant="dark" padding="large">
              <Stack spacing="large" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Ready to Transform Your Windows?
                </Heading>
                <Text size="large" color="light" align="center">
                  Book your free consultation today and discover the perfect {config.title.toLowerCase()} for your home
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
                    to="/contact"
                    variant="outline"
                    size="large"
                    iconRight={<Icon name="arrowRight" />}
                  >
                    Get in Touch
                  </Button>
                </Flex>
              </Stack>
            </Card>
          </Container>
        </Section>
      </>
    )
  }

  ProductPage.displayName = `ProductPage(${productSlug})`
  
  return ProductPage
}