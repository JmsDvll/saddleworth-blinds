import React, { useState, useEffect } from 'react'
import {
  Button,
  Card,
  Heading,
  Text,
  Icon,
  Image,
  Flex,
  Stack,
  LuxuryBadge,
  CarouselContainer,
  CarouselSlide,
  CarouselNavButton,
  CarouselDots,
  CarouselOverlay,
  CarouselImageWrapper,
  CarouselProgress
} from './ui'

// Base carousel component with luxury styling
export const BaseCarouselLuxury = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  showProgress = false,
  height = 'product',
  onSlideChange,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      const next = (currentSlide + 1) % slides.length
      setCurrentSlide(next)
      if (onSlideChange) onSlideChange(next)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      const prev = (currentSlide - 1 + slides.length) % slides.length
      setCurrentSlide(prev)
      if (onSlideChange) onSlideChange(prev)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true)
      setCurrentSlide(index)
      if (onSlideChange) onSlideChange(index)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused && slides.length > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [currentSlide, isPaused, autoPlay, autoPlayInterval, slides.length])

  if (!slides || slides.length === 0) return null

  const currentSlideData = slides[currentSlide]

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      effect="glow"
      className={className}
    >
      <CarouselSlide height={height}>
        {/* Image */}
        <CarouselImageWrapper scale="zoom">
          <Image
            src={`/images/optimized/${currentSlideData.image}`}
            alt={currentSlideData.alt || currentSlideData.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <CarouselOverlay variant="product" />
        </CarouselImageWrapper>

        {/* Content Overlay (if provided) */}
        {currentSlideData.title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <Stack spacing="small">
              {currentSlideData.badge && (
                <LuxuryBadge variant="gold" size="small">
                  {currentSlideData.badge}
                </LuxuryBadge>
              )}
              <Heading size="xl" color="light" effect="glow">
                {currentSlideData.title}
              </Heading>
              {currentSlideData.description && (
                <Text color="light" className="max-w-xl">
                  {currentSlideData.description}
                </Text>
              )}
            </Stack>
          </div>
        )}

        {/* Navigation */}
        {showArrows && slides.length > 1 && (
          <>
            <CarouselNavButton direction="left" onClick={prevSlide}>
              <Icon name="chevronLeft" size="medium" />
            </CarouselNavButton>
            <CarouselNavButton direction="right" onClick={nextSlide}>
              <Icon name="chevronRight" size="medium" />
            </CarouselNavButton>
          </>
        )}

        {/* Dots */}
        {showDots && slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <CarouselDots
              total={slides.length}
              current={currentSlide}
              onSelect={goToSlide}
            />
          </div>
        )}

        {/* Progress Bar */}
        {showProgress && slides.length > 1 && (
          <CarouselProgress
            value={currentSlide + 1}
            max={slides.length}
            isPaused={isPaused}
          />
        )}
      </CarouselSlide>
    </CarouselContainer>
  )
}

// Product showcase carousel with thumbnails
export const ProductCarouselLuxury = ({
  products,
  title,
  subtitle,
  showThumbnails = true,
  className = ''
}) => {
  const [currentProduct, setCurrentProduct] = useState(0)

  if (!products || products.length === 0) return null

  const current = products[currentProduct]

  return (
    <Stack spacing="large" className={className}>
      {/* Header */}
      {(title || subtitle) && (
        <Stack spacing="small" align="center">
          {title && (
            <Heading size="2xl" color="gold" align="center">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text size="large" color="light" align="center">
              {subtitle}
            </Text>
          )}
        </Stack>
      )}

      {/* Main Carousel */}
      <BaseCarouselLuxury
        slides={products.map(p => ({
          image: p.image,
          alt: p.name,
          title: p.name,
          description: p.description,
          badge: p.badge
        }))}
        onSlideChange={setCurrentProduct}
        height="product"
        showDots={!showThumbnails}
      />

      {/* Thumbnails */}
      {showThumbnails && products.length > 1 && (
        <div className="mt-4">
          <Flex gap="small" justify="center" className="overflow-x-auto pb-2">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`
                  relative w-20 h-20 rounded-lg overflow-hidden
                  transition-all duration-300
                  ${index === currentProduct 
                    ? 'ring-2 ring-brand-gold scale-110' 
                    : 'opacity-70 hover:opacity-100'
                  }
                `}
              >
                <Image
                  src={`/images/optimized/${product.thumbnail || product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </Flex>
        </div>
      )}

      {/* Product Info */}
      {current.features && (
        <Card variant="dark" padding="large">
          <Stack spacing="medium">
            <Heading size="lg" color="gold">
              Key Features
            </Heading>
            <Flex gap="large" wrap="wrap">
              {current.features.map((feature, index) => (
                <Flex key={index} gap="small" align="center">
                  <Icon name="check" size="small" className="text-brand-gold" />
                  <Text color="light">{feature}</Text>
                </Flex>
              ))}
            </Flex>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}

// Testimonial carousel
export const TestimonialCarouselLuxury = ({
  testimonials,
  className = ''
}) => {
  const [current, setCurrent] = useState(0)

  if (!testimonials || testimonials.length === 0) return null

  return (
    <BaseCarouselLuxury
      slides={testimonials.map(t => ({
        content: (
          <Card variant="luxury" padding="xlarge">
            <Stack spacing="large" align="center">
              {/* Quote Icon */}
              <Icon name="quote" size="large" className="text-brand-gold opacity-50" />
              
              {/* Testimonial Text */}
              <Text size="xlarge" color="light" align="center" leading="relaxed">
                "{t.text}"
              </Text>
              
              {/* Customer Info */}
              <Stack spacing="small" align="center">
                <Flex gap="small">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="star" 
                      size="small" 
                      className={i < t.rating ? 'text-brand-gold' : 'text-brand-grey-dark'}
                    />
                  ))}
                </Flex>
                <Text weight="semibold" color="gold">
                  {t.name}
                </Text>
                <Text size="small" color="muted">
                  {t.location} • {t.product}
                </Text>
              </Stack>
            </Stack>
          </Card>
        )
      }))}
      height="feature"
      showArrows={false}
      autoPlayInterval={7000}
      className={className}
    />
  )
}