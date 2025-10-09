import React from 'react'
import { Button, Card, Heading, Text, Icon, Image, Flex, Center } from './ui'

// Base carousel component for consistent styling
export const CarouselContainer = ({
  children,
  className = '',
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg shadow-2xl ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

export const CarouselImage = ({ src, alt, className = '', eager = false }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-opacity duration-500 ${className}`}
      loading={eager ? 'eager' : 'lazy'}
    />
  )
}

export const CarouselButton = ({ onClick, direction, className = '' }) => {
  const isLeft = direction === 'left'
  
  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold ${className}`}
      aria-label={`${isLeft ? 'Previous' : 'Next'} slide`}
    >
      <Icon 
        name={isLeft ? "chevronLeft" : "chevronRight"} 
        size="medium"
      />
    </button>
  )
}

export const CarouselDots = ({ total, current, onSelect }) => {
  return (
    <Flex justify="center" className="absolute bottom-4 left-1/2 -translate-x-1/2" gap="small">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === current 
              ? 'bg-brand-gold w-8' 
              : 'bg-white/50 hover:bg-white/70 w-2'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </Flex>
  )
}

export const CarouselThumbnail = ({ src, alt, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
        isActive 
          ? 'ring-2 ring-brand-gold scale-105' 
          : 'hover:scale-105 opacity-70 hover:opacity-100'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
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

// Inspiration Card Component for breaking up text-heavy content
export const InspirationCard = ({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  className = ''
}) => {
  return (
    <Card variant="elevated" hover="lift" padding="none" className={className}>
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={`/images/optimized/${image}`}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <Card.Body>
        <Heading as="h3" size="xl">{title}</Heading>
        <Text color="light" className="mb-4">{description}</Text>
        {ctaText && ctaLink && (
          <Flex align="center" className="text-brand-gold hover:text-yellow-400 font-semibold transition-colors">
            <a href={ctaLink}>
              {ctaText}
            </a>
            <Icon name="chevronRight" size="small" className="ml-2" />
          </Flex>
        )}
      </Card.Body>
    </Card>
  )
}

// Section Break Component for visual separation
export const SectionBreak = ({ className = '' }) => {
  return (
    <Center className={`py-16 ${className}`}>
      <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
    </Center>
  )
}