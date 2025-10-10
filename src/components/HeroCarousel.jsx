import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Heading, Text, Badge, Button, Icon } from './ui'
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
    <div className="relative">
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="group"
      >
        <div className={`${CAROUSEL_HEIGHTS.hero} relative overflow-hidden`}>
          {/* Background image with parallax effect */}
          <div className="absolute inset-0 scale-110">
            <CarouselImage
              src={`/images/optimized/${currentSlideData.image}`}
              alt={currentSlideData.alt}
              eager={true}
            />
            {/* Premium gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
          </div>

          {/* Content overlay with animations */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-2xl">
                <Stack spacing="large" className={`
                  transition-all duration-700 transform
                  ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                `}>
                  {/* Animated badge */}
                  <div className="inline-block">
                    <Badge variant="primary" glow className="animate-pulse-glow">
                      <Icon name="sparkle" size="tiny" className="mr-1" />
                      Saddleworth's Premium Blind Specialists
                    </Badge>
                  </div>

                  {/* Main heading with gradient */}
                  <Heading 
                    as="h1" 
                    size="5xl" 
                    mdSize="6xl"
                    color="white"
                    effect="glow"
                    className="font-display"
                  >
                    {currentSlideData.title}
                    <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                      {currentSlideData.subtitle}
                    </span>
                  </Heading>

                  {/* Description */}
                  <Text size="xlarge" color="light" className="max-w-xl">
                    {currentSlideData.description}
                  </Text>

                  {/* CTA Buttons with hover effects */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      as={Link}
                      to={currentSlideData.cta.link}
                      size="xlarge"
                      variant="primary"
                      glow
                      iconRight={<Icon name="arrowRight" />}
                      className="group"
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
                  </div>
                </Stack>
              </div>
            </div>
          </div>

          {/* Navigation arrows with premium styling */}
          <CarouselButton
            onClick={prevSlide}
            direction="left"
            className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          />
          <CarouselButton
            onClick={nextSlide}
            direction="right"
            className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          />

          {/* Enhanced slide counter */}
          <div className="absolute bottom-8 right-8 hidden md:block">
            <Badge variant="ghost" size="large" className="backdrop-blur-md bg-brand-dark/60">
              <span className="text-brand-gold font-display text-2xl">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">{String(slides.length).padStart(2, '0')}</span>
            </Badge>
          </div>

          {/* Premium dot indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <CarouselDots
              total={slides.length}
              current={currentSlide}
              onSelect={goToSlide}
            />
          </div>

          {/* Auto-play progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-dark/50">
            <div 
              className={`h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all ${isPaused ? 'pause-animation' : ''}`}
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                transition: isPaused ? 'none' : 'width 5s linear'
              }}
            />
          </div>
        </div>
      </CarouselContainer>

      {/* Quick links section below carousel */}
      <div className="absolute -bottom-16 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: 'home', text: 'Free Home Visit', href: '/book-appointment' },
              { icon: 'currency', text: 'Best Prices', href: '/roller-blinds' },
              { icon: 'shield', text: '5 Year Guarantee', href: '/about' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group bg-brand-dark/90 backdrop-blur-sm border border-brand-gold/20 rounded-lg p-4 text-center hover:bg-brand-dark hover:border-brand-gold/40 transition-all duration-300 hover:scale-105"
              >
                <Icon name={item.icon} size="large" className="text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <Text size="small" weight="medium" className="text-gray-300 group-hover:text-white">
                  {item.text}
                </Text>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel