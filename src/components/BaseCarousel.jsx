import React from 'react'
import { Button, Card, Heading, Text, Icon, Image, Flex, Center } from './ui'

// Enhanced base carousel component with premium styling
export const CarouselContainer = ({
  children,
  className = '',
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div
      className={`
        relative w-full overflow-hidden rounded-sm
        shadow-luxury
        bg-gradient-to-br from-brand-dark to-brand-dark-light
        border border-brand-gold/20
        group
        ${className}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {children}
    </div>
  )
}

export const CarouselImage = ({ src, alt, className = '', eager = false }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading={eager ? 'eager' : 'lazy'}
      />
      {/* Premium image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  )
}

export const CarouselButton = ({ onClick, direction, className = '' }) => {
  const isLeft = direction === 'left'
  
  return (
    <button
      onClick={onClick}
      className={`
        absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2
        bg-brand-dark/80 backdrop-blur-md
        text-brand-gold hover:text-brand-gold-light
        p-3 rounded-full
        border border-brand-gold/30 hover:border-brand-gold/60
        shadow-lg hover:shadow-gold
        transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark
        group/btn
        ${className}
      `}
      aria-label={`${isLeft ? 'Previous' : 'Next'} slide`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
      
      <Icon 
        name={isLeft ? "chevronLeft" : "chevronRight"} 
        size="medium"
        className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110"
      />
    </button>
  )
}

export const CarouselDots = ({ total, current, onSelect }) => {
  return (
    <Flex justify="center" gap="small" className="p-2 bg-brand-dark/60 backdrop-blur-sm rounded-full">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`
            relative h-2 rounded-full
            transition-all duration-500 ease-out
            ${i === current 
              ? 'w-8 bg-gradient-to-r from-brand-gold to-brand-gold-light shadow-gold' 
              : 'w-2 bg-gray-600 hover:bg-gray-500'
            }
          `}
          aria-label={`Go to slide ${i + 1}`}
        >
          {/* Pulse effect for active dot */}
          {i === current && (
            <span className="absolute inset-0 rounded-full bg-brand-gold animate-ping opacity-75"></span>
          )}
        </button>
      ))}
    </Flex>
  )
}

export const CarouselThumbnail = ({ src, alt, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg
        transition-all duration-500
        ${isActive 
          ? 'ring-2 ring-brand-gold scale-105 shadow-gold' 
          : 'ring-1 ring-gray-700 hover:ring-gray-600 opacity-70 hover:opacity-100 hover:scale-105'
        }
      `}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Active indicator */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/30 to-transparent"></div>
        )}
      </div>
    </button>
  )
}

// Standard carousel heights
export const CAROUSEL_HEIGHTS = {
  hero: 'h-[400px] md:h-[500px] lg:h-[600px]',
  product: 'h-[300px] md:h-[400px] lg:h-[500px]',
  thumbnail: 'h-[80px] md:h-[100px]'
}

// Standard aspect ratios
export const ASPECT_RATIOS = {
  wide: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  square: 'aspect-square',
  product: 'aspect-[16/10]'
}

// Enhanced Inspiration Card Component
export const InspirationCard = ({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  className = ''
}) => {
  return (
    <Card variant="elevated" hover="shine" padding="none" className={className}>
      <div className="aspect-[16/10] overflow-hidden relative group">
        <Image
          src={`/images/optimized/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      
      <Card.Body>
        <Stack spacing="medium">
          <Heading as="h3" size="xl" effect="glow">{title}</Heading>
          <Text color="light">{description}</Text>
          
          {ctaText && ctaLink && (
            <Flex align="center" className="group/link">
              <a 
                href={ctaLink}
                className="text-brand-gold hover:text-brand-gold-light font-semibold transition-colors duration-300"
              >
                {ctaText}
              </a>
              <Icon 
                name="chevronRight" 
                size="small" 
                className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Flex>
          )}
        </Stack>
      </Card.Body>
    </Card>
  )
}

// Premium Section Break Component
export const SectionBreak = ({ className = '' }) => {
  return (
    <Center className={`py-16 ${className}`}>
      <div className="relative">
        <div className="w-24 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
      </div>
    </Center>
  )
}