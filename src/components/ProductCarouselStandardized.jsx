import React, { useState } from 'react'
import {
  CarouselContainer,
  CarouselSlide,
  CarouselNavButton,
  CarouselDots,
  CarouselOverlay,
  CarouselImageWrapper,
  CarouselContent,
  Icon,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  LuxuryBadge
} from './ui'

const ProductCarouselStandardized = ({ 
  slides = [], 
  height = 'product',
  autoPlay = true,
  autoPlayInterval = 5000,
  showBadges = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  React.useEffect(() => {
    if (autoPlay && !isPaused && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [currentSlide, isPaused, autoPlay, autoPlayInterval, slides.length])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  if (!slides || slides.length === 0) return null

  const currentSlideData = slides[currentSlide]

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      variant="luxury"
    >
      <CarouselSlide height={height}>
        <CarouselImageWrapper scale="cover">
          <Image
            src={`/images/optimized/${currentSlideData.image}`}
            alt={currentSlideData.alt || currentSlideData.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </CarouselImageWrapper>

        <CarouselOverlay variant="product" />

        {/* Content */}
        <CarouselContent position="bottom-left">
          <Stack spacing="medium">
            {showBadges && currentSlideData.badge && (
              <LuxuryBadge variant="gold" size="small">
                {currentSlideData.badge}
              </LuxuryBadge>
            )}
            <Heading size="2xl" color="white" effect="glow">
              {currentSlideData.title}
            </Heading>
            {currentSlideData.subtitle && (
              <Text size="large" color="light">
                {currentSlideData.subtitle}
              </Text>
            )}
            {currentSlideData.description && (
              <Text color="light" className="max-w-2xl">
                {currentSlideData.description}
              </Text>
            )}
            {currentSlideData.cta && (
              <Button 
                to={currentSlideData.cta.link}
                variant="luxury"
                size="medium"
                iconRight={<Icon name="arrowRight" />}
              >
                {currentSlideData.cta.text}
              </Button>
            )}
          </Stack>
        </CarouselContent>

        {/* Navigation */}
        {slides.length > 1 && (
          <>
            <CarouselNavButton direction="left" onClick={prevSlide}>
              <Icon name="chevronLeft" size="large" />
            </CarouselNavButton>
            <CarouselNavButton direction="right" onClick={nextSlide}>
              <Icon name="chevronRight" size="large" />
            </CarouselNavButton>
            <CarouselDots
              total={slides.length}
              current={currentSlide}
              onSelect={goToSlide}
            />
          </>
        )}
      </CarouselSlide>
    </CarouselContainer>
  )
}

export default ProductCarouselStandardized