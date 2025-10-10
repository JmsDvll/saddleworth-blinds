import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Heading, Text, Badge, Button, Icon, Container, Box, Flex, Grid, Center, ProgressBar, Card } from './ui'
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, CAROUSEL_HEIGHTS } from './BaseCarousel'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      id: 1,
      image: 'hero-living-room.jpg',
      alt: 'Beautiful living room with Venetian blinds',
      title: 'Transform Your Home',
      subtitle: 'With Premium Window Blinds',
      description: 'Discover our stunning collection of made-to-measure blinds, shutters & curtains',
      cta: {
        text: 'Book Free Consultation',
        link: '/book-appointment'
      }
    },
    {
      id: 2,
      image: 'hero-kitchen.jpg',
      alt: 'Modern kitchen with perfect fit blinds',
      title: 'Perfect Fit Blinds',
      subtitle: 'No Drilling Required',
      description: 'Ideal for UPVC windows - clips straight into your window frame',
      cta: {
        text: 'View Perfect Fit Range',
        link: '/perfect-fit-blinds'
      }
    },
    {
      id: 3,
      image: 'hero-bedroom.jpg',
      alt: 'Cozy bedroom with blackout roller blinds',
      title: 'Sleep Better',
      subtitle: 'With Blackout Blinds',
      description: 'Complete darkness for perfect sleep - ideal for bedrooms & nurseries',
      cta: {
        text: 'Explore Blackout Options',
        link: '/roller-blinds'
      }
    }
  ]

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  // Premium auto-play with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [currentSlide, isPaused])

  const currentSlideData = slides[currentSlide]

  return (
    <Box position="relative">
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Box 
          className={CAROUSEL_HEIGHTS.hero}
          position="relative"
          overflow="hidden"
        >
          {/* Background image with parallax effect */}
          <Box position="absolute" inset="0" scale="110">
            <CarouselImage
              src={`/images/optimized/${currentSlideData.image}`}
              alt={currentSlideData.alt}
              eager={true}
            />
            {/* Premium gradient overlays using inline styles for complex gradients */}
            <Box 
              position="absolute" 
              inset="0" 
              style={{ background: 'linear-gradient(to right, rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.5), transparent)' }}
            />
            <Box 
              position="absolute" 
              inset="0" 
              style={{ background: 'linear-gradient(to top, rgba(26, 26, 26, 0.8), transparent, transparent)' }}
            />
          </Box>

          {/* Content overlay with animations */}
          <Center className="absolute inset-0">
            <Container>
              <Box maxWidth="2xl">
                <Stack 
                  spacing="large" 
                  style={{
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isTransitioning ? 'translateY(2rem)' : 'translateY(0)',
                    opacity: isTransitioning ? 0 : 1
                  }}
                >
                  {/* Animated badge */}
                  <Box display="inlineBlock">
                    <Badge variant="primary" glow>
                      <Flex align="center" gap="small">
                        <Icon name="sparkle" size="tiny" />
                        Saddleworth's Premium Blind Specialists
                      </Flex>
                    </Badge>
                  </Box>

                  {/* Main heading with gradient */}
                  <Heading 
                    as="h1" 
                    size="5xl" 
                    mdSize="6xl"
                    color="white"
                    effect="glow"
                  >
                    {currentSlideData.title}
                    <Text 
                      as="span" 
                      className="block"
                      style={{
                        fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
                        marginTop: '0.5rem',
                        background: 'linear-gradient(to right, #D4AF37, #F4E5B2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {currentSlideData.subtitle}
                    </Text>
                  </Heading>

                  {/* Description */}
                  <Box maxWidth="xl">
                    <Text size="xlarge" color="light">
                      {currentSlideData.description}
                    </Text>
                  </Box>

                  {/* CTA Buttons */}
                  <Flex direction="column" smDirection="row" gap="medium" style={{ paddingTop: '1rem' }}>
                    <Button
                      as={Link}
                      to={currentSlideData.cta.link}
                      size="xlarge"
                      variant="primary"
                      glow
                      iconRight={<Icon name="arrowRight" />}
                    >
                      {currentSlideData.cta.text}
                    </Button>
                    <Button
                      as="a"
                      href="tel:01457597091"
                      size="xlarge"
                      variant="secondary"
                      iconLeft={<Icon name="phone" />}
                    >
                      Call Now
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </Container>
          </Center>

          {/* Navigation arrows */}
          <CarouselButton
            onClick={prevSlide}
            direction="left"
          />
          <CarouselButton
            onClick={nextSlide}
            direction="right"
          />

          {/* Enhanced slide counter */}
          <Box 
            position="absolute"
            style={{ bottom: '2rem', right: '2rem', display: 'none' }}
            className="md:block"
          >
            <Badge variant="ghost" size="large">
              <Flex align="center" gap="small">
                <Text style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                  {String(currentSlide + 1).padStart(2, '0')}
                </Text>
                <Text color="muted">/</Text>
                <Text color="mutedDark">
                  {String(slides.length).padStart(2, '0')}
                </Text>
              </Flex>
            </Badge>
          </Box>

          {/* Dot indicators */}
          <Box 
            position="absolute"
            style={{ bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
          >
            <CarouselDots
              total={slides.length}
              current={currentSlide}
              onSelect={goToSlide}
            />
          </Box>

          {/* Progress bar */}
          <Box 
            position="absolute"
            style={{ bottom: 0, left: 0, right: 0 }}
          >
            <ProgressBar
              value={currentSlide + 1}
              max={slides.length}
              size="medium"
              containerVariant="dark"
              variant="primary"
              barStyle={{
                transition: isPaused ? 'none' : 'width 5s linear'
              }}
            />
          </Box>
        </Box>
      </CarouselContainer>

      {/* Quick links section */}
      <Box 
        position="absolute"
        style={{ bottom: '-4rem', left: 0, right: 0, zIndex: 20 }}
      >
        <Container>
          <Box maxWidth="3xl" style={{ margin: '0 auto' }}>
            <Grid cols={3} gap="medium">
              {[
                { icon: 'home', text: 'Free Home Visit', href: '/book-appointment' },
                { icon: 'currency', text: 'Best Prices', href: '/roller-blinds' },
                { icon: 'shield', text: '5 Year Guarantee', href: '/about' }
              ].map((item, index) => (
                <Card
                  key={index}
                  as="a"
                  href={item.href}
                  variant="link"
                  hover="scale"
                  padding="medium"
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  <Stack spacing="small" align="center">
                    <Icon 
                      name={item.icon}
                      size="large"
                      style={{ color: '#D4AF37' }}
                    />
                    <Text size="small" weight="medium" color="light">
                      {item.text}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroCarousel