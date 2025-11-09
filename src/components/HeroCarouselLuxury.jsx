import React, { useCallback, useEffect, useState } from 'react'
import {
  Button,
  Card,
  CarouselContainer,
  CarouselContent,
  CarouselCounter,
  CarouselDots,
  CarouselImageWrapper,
  CarouselNavButton,
  CarouselOverlay,
  CarouselProgress,
  CarouselSlide,
  Container,
  Flex,
  GlowBox,
  Grid,
  HeroBadge,
  HeroContent,
  HeroCTA,
  HeroDescription,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  Icon,
  Image,
  LuxuryIcon,
  ShimmerText,
  Stack,
  Text,
} from './ui'

const HeroCarouselLuxury = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      id: 1,
      image: 'hero-living-room.jpg',
      alt: 'Luxurious living room with premium Venetian blinds',
      title: 'Transform Your Space',
      subtitle: 'With Luxury Window Solutions',
      description: 'Discover our exquisite collection of made-to-measure blinds, shutters & curtains',
      badge: 'Premium Quality',
      cta: {
        primary: {
          text: 'Book Free Design Consultation',
          link: '/book-appointment',
          icon: 'calendar',
        },
        secondary: {
          text: 'View Collection',
          link: '/gallery',
          icon: 'image',
        },
      },
    },
    {
      id: 2,
      image: 'hero-kitchen.jpg',
      alt: 'Modern kitchen with Perfect Fit blinds',
      title: 'Perfect Fit Excellence',
      subtitle: 'No Drilling, Pure Elegance',
      description: 'Revolutionary clip-in blinds for UPVC windows - pristine installation guaranteed',
      badge: 'Innovation',
      cta: {
        primary: {
          text: 'Explore Perfect Fit',
          link: '/perfect-fit-blinds',
          icon: 'sparkle',
        },
        secondary: {
          text: 'Get Quote',
          link: '/contact',
          icon: 'currency',
        },
      },
    },
    {
      id: 3,
      image: 'hero-bedroom.jpg',
      alt: 'Serene bedroom with blackout roller blinds',
      title: 'Ultimate Comfort',
      subtitle: 'Blackout Perfection',
      description: 'Experience complete darkness and tranquility with our premium blackout solutions',
      badge: 'Sleep Better',
      cta: {
        primary: {
          text: 'Discover Blackout Range',
          link: '/roller-blinds',
          icon: 'moon',
        },
        secondary: {
          text: 'Call Us',
          link: 'tel:01457597091',
          icon: 'phone',
        },
      },
    },
  ]

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }, [isTransitioning, slides.length])

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }, [isTransitioning, slides.length])

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  // Auto-play with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  const currentSlideData = slides[currentSlide]

  return (
    <HeroSection variant="image" height="large">
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        effect="glow"
      >
        <CarouselSlide height="hero">
          {/* Background Image */}
          <CarouselImageWrapper scale="zoom">
            <Image
              src={`/images/optimized/${currentSlideData.image}`}
              alt={currentSlideData.alt}
              loading="eager"
              objectFit="cover"
            />
            <CarouselOverlay variant="hero" />
            <CarouselOverlay variant="heroBottom" />
          </CarouselImageWrapper>

          {/* Content */}
          <CarouselContent align="left">
            <Container>
              <HeroContent align="left" padding="large">
                <Stack spacing="large">
                  {/* Badge */}
                  <HeroBadge>
                    <LuxuryIcon variant="simple" size="tiny">
                      <Icon name="sparkle" />
                    </LuxuryIcon>
                    <Text variant="small" weight="semibold">
                      {currentSlideData.badge}
                    </Text>
                  </HeroBadge>

                  {/* Title */}
                  <Stack spacing="small">
                    <HeroTitle effect="glow">
                      {currentSlideData.title}
                    </HeroTitle>
                    <HeroSubtitle>
                      <ShimmerText variant="luxury" speed="slow">
                        {currentSlideData.subtitle}
                      </ShimmerText>
                    </HeroSubtitle>
                  </Stack>

                  {/* Description */}
                  <HeroDescription>
                    {currentSlideData.description}
                  </HeroDescription>

                  {/* CTAs */}
                  <HeroCTA>
                    <Button
                      to={currentSlideData.cta.primary.link}
                      variant="luxury"
                      size="large"
                      iconLeft={<Icon name={currentSlideData.cta.primary.icon} />}
                    >
                      {currentSlideData.cta.primary.text}
                    </Button>
                    <Button
                      to={currentSlideData.cta.secondary.link}
                      variant="outline"
                      size="large"
                      iconLeft={<Icon name={currentSlideData.cta.secondary.icon} />}
                    >
                      {currentSlideData.cta.secondary.text}
                    </Button>
                  </HeroCTA>
                </Stack>
              </HeroContent>
            </Container>
          </CarouselContent>

          {/* Navigation */}
          <CarouselNavButton direction="left" onClick={prevSlide}>
            <Icon name="chevronLeft" size="medium" />
          </CarouselNavButton>
          <CarouselNavButton direction="right" onClick={nextSlide}>
            <Icon name="chevronRight" size="medium" />
          </CarouselNavButton>

          {/* Slide Counter */}
          <Container>
            <Flex justify="between" align="end">
              {/* Dots */}
              <CarouselDots
                total={slides.length}
                current={currentSlide}
                onSelect={goToSlide}
              />

              {/* Counter */}
              <CarouselCounter
                current={currentSlide + 1}
                total={slides.length}
              />
            </Flex>
          </Container>

          {/* Progress Bar */}
          <CarouselProgress
            value={currentSlide + 1}
            max={slides.length}
            isPaused={isPaused}
          />
        </CarouselSlide>
      </CarouselContainer>

      {/* Quick Features Below Hero */}
      <Container>
        <Grid cols={3} gap="medium">
          <GlowBox variant="luxury" padding="medium">
            <Card variant="glass" hover="glow" padding="medium">
              <Stack spacing="small" align="center">
                <LuxuryIcon variant="circle" size="large">
                  <Icon name="home" />
                </LuxuryIcon>
                <Text variant="heading" size="medium" align="center">
                  Free Home Visit
                </Text>
                <Text variant="small" color="muted" align="center">
                  Professional consultation at your convenience
                </Text>
              </Stack>
            </Card>
          </GlowBox>

          <GlowBox variant="luxury" padding="medium">
            <Card variant="glass" hover="glow" padding="medium">
              <Stack spacing="small" align="center">
                <LuxuryIcon variant="circle" size="large">
                  <Icon name="currency" />
                </LuxuryIcon>
                <Text variant="heading" size="medium" align="center">
                  Best Price Guarantee
                </Text>
                <Text variant="small" color="muted" align="center">
                  Unbeatable value without compromise
                </Text>
              </Stack>
            </Card>
          </GlowBox>

          <GlowBox variant="luxury" padding="medium">
            <Card variant="glass" hover="glow" padding="medium">
              <Stack spacing="small" align="center">
                <LuxuryIcon variant="circle" size="large">
                  <Icon name="shield" />
                </LuxuryIcon>
                <Text variant="heading" size="medium" align="center">
                  5 Year Warranty
                </Text>
                <Text variant="small" color="muted" align="center">
                  Complete peace of mind guaranteed
                </Text>
              </Stack>
            </Card>
          </GlowBox>
        </Grid>
      </Container>
    </HeroSection>
  )
}

export default HeroCarouselLuxury