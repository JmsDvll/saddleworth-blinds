import React, { useState } from 'react'
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
  HeroOverlay
} from '../components/ui'

const GalleryLuxury = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'roller', name: 'Roller Blinds', count: 12 },
    { id: 'venetian', name: 'Venetian Blinds', count: 8 },
    { id: 'vision', name: 'Vision Blinds', count: 10 },
    { id: 'perfect-fit', name: 'Perfect Fit', count: 8 },
    { id: 'shutters', name: 'Shutters', count: 6 },
    { id: 'vertical', name: 'Vertical Blinds', count: 4 }
  ]

  const galleryImages = [
    // Roller Blinds
    {
      id: 1,
      category: 'roller',
      src: 'roller-zen-kiwi-800.jpg',
      thumbnail: 'roller-zen-kiwi-400.jpg',
      title: 'Zen Kiwi Roller Blind',
      room: 'Living Room',
      location: 'Uppermill',
      features: ['Blackout', 'Modern Design']
    },
    {
      id: 2,
      category: 'roller',
      src: 'roller-petal-white-800.jpg',
      thumbnail: 'roller-petal-white-400.jpg',
      title: 'Petal White Roller Blind',
      room: 'Bedroom',
      location: 'Diggle',
      features: ['Light Filtering', 'Elegant']
    },
    {
      id: 3,
      category: 'roller',
      src: 'roller-birdsong-colour-800.jpg',
      thumbnail: 'roller-birdsong-colour-400.jpg',
      title: 'Birdsong Colour',
      room: 'Kitchen',
      location: 'Delph',
      features: ['Wipeable', 'Vibrant']
    },
    // Venetian Blinds
    {
      id: 4,
      category: 'venetian',
      src: 'venetian-starwood-800.jpg',
      thumbnail: 'venetian-starwood-400.jpg',
      title: 'Starwood Venetian',
      room: 'Study',
      location: 'Greenfield',
      features: ['Wood Effect', '50mm Slats']
    },
    {
      id: 5,
      category: 'venetian',
      src: 'venetian-white-800.jpg',
      thumbnail: 'venetian-white-400.jpg',
      title: 'Pure White Venetian',
      room: 'Bathroom',
      location: 'Dobcross',
      features: ['Moisture Resistant', '25mm Slats']
    },
    // Vision Blinds
    {
      id: 6,
      category: 'vision',
      src: 'vision-capri-concrete-800.jpg',
      thumbnail: 'vision-capri-concrete-400.jpg',
      title: 'Capri Concrete Vision',
      room: 'Living Room',
      location: 'Lydgate',
      features: ['Day & Night', 'Contemporary'],
      hot: true
    },
    {
      id: 7,
      category: 'vision',
      src: 'vision-firenze-walnut-800.jpg',
      thumbnail: 'vision-firenze-walnut-400.jpg',
      title: 'Firenze Walnut Vision',
      room: 'Dining Room',
      location: 'Uppermill',
      features: ['Wood Look', 'Privacy Control']
    },
    {
      id: 8,
      category: 'vision',
      src: 'vision-lusso-pebble-800.jpg',
      thumbnail: 'vision-lusso-pebble-400.jpg',
      title: 'Lusso Pebble Vision',
      room: 'Bedroom',
      location: 'Denshaw',
      features: ['Soft Tones', 'Light Control']
    },
    // Perfect Fit
    {
      id: 9,
      category: 'perfect-fit',
      src: 'perfectfit-monet-flower-800.jpg',
      thumbnail: 'perfectfit-monet-flower-400.jpg',
      title: 'Monet Flower Perfect Fit',
      room: 'Conservatory',
      location: 'Friezland',
      features: ['No Drilling', 'Floral Design'],
      hot: true
    },
    {
      id: 10,
      category: 'perfect-fit',
      src: 'perfectfit-white-800.jpg',
      thumbnail: 'perfectfit-white-400.jpg',
      title: 'Classic White Perfect Fit',
      room: 'Kitchen',
      location: 'Grasscroft',
      features: ['Child Safe', 'Easy Clean']
    },
    // Shutters
    {
      id: 11,
      category: 'shutters',
      src: 'shutters-cotton-89mm-800.jpg',
      thumbnail: 'shutters-cotton-89mm-400.jpg',
      title: 'Cotton White Shutters',
      room: 'Bay Window',
      location: 'Grotton',
      features: ['89mm Louvres', 'Full Height'],
      premium: true
    },
    {
      id: 12,
      category: 'shutters',
      src: 'shutters-cafe-800.jpg',
      thumbnail: 'shutters-cafe-400.jpg',
      title: 'Café Style Shutters',
      room: 'Living Room',
      location: 'Springhead',
      features: ['Half Height', 'Privacy']
    },
    // Vertical Blinds
    {
      id: 13,
      category: 'vertical',
      src: 'vertical-savanna-zebra-800.jpg',
      thumbnail: 'vertical-savanna-zebra-400.jpg',
      title: 'Savanna Zebra Vertical',
      room: 'Patio Doors',
      location: 'Lees',
      features: ['89mm Louvres', 'Pattern']
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <HeroSection variant="luxury" height="medium">
        <HeroOverlay variant="gradient" />
        <HeroContent align="center" padding="large">
          <Container>
            <Stack spacing="large" align="center" className="max-w-3xl mx-auto">
              <HeroTitle effect="glow">
                <ShimmerText variant="luxury">
                  Inspiration Gallery
                </ShimmerText>
              </HeroTitle>
              <HeroSubtitle>
                Real Homes, Real Transformations
              </HeroSubtitle>
              <Text size="xlarge" color="light" align="center">
                Browse our portfolio of stunning installations across Saddleworth 
                and discover the perfect style for your home
              </Text>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Category Filter */}
      <Section background="cream" padding="medium">
        <Container>
          <Stack spacing="large">
            <Flex gap="small" wrap="wrap" justify="center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'luxury' : 'outline'}
                  size="small"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                  <LuxuryBadge variant="outline" size="tiny" className="ml-2">
                    {category.count}
                  </LuxuryBadge>
                </Button>
              ))}
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            {/* Results Count */}
            <Flex justify="between" align="center">
              <Text color="light">
                Showing {filteredImages.length} {filteredImages.length === 1 ? 'result' : 'results'}
              </Text>
              <Button
                to="/book-appointment"
                variant="primary"
                size="small"
                iconLeft={<Icon name="calendar" />}
              >
                Book Consultation
              </Button>
            </Flex>

            {/* Image Grid */}
            <Grid cols={3} gap="large">
              {filteredImages.map((image) => (
                <GlowBox key={image.id} variant="subtle" intensity="low">
                  <Card 
                    variant="luxury" 
                    hover="lift" 
                    padding="none"
                    onClick={() => setSelectedImage(image)}
                    className="cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Image
                        src={`/images/optimized/${image.thumbnail}`}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        {image.hot && <LuxuryBadge variant="gold" size="small" icon="star">HOT</LuxuryBadge>}
                        {image.premium && <LuxuryBadge variant="luxury" size="small" icon="crown">PREMIUM</LuxuryBadge>}
                      </div>
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <Icon name="eye" size="large" className="text-white mb-2" />
                          <Text color="white" size="small">Click to view details</Text>
                        </div>
                      </div>
                    </div>
                    
                    <Stack spacing="small" className="p-4">
                      <Heading size="base" color="gold">
                        {image.title}
                      </Heading>
                      <Flex justify="between" align="center">
                        <Text size="small" color="light">
                          {image.room} • {image.location}
                        </Text>
                      </Flex>
                      <Flex gap="small" wrap="wrap">
                        {image.features.map((feature, idx) => (
                          <Text key={idx} size="small" color="muted">
                            <Flex align="center" gap="small">
                              <Icon name="check" size="tiny" />
                              {feature}
                            </Flex>
                          </Text>
                        ))}
                      </Flex>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>

            {/* Load More */}
            {filteredImages.length > 0 && (
              <Flex justify="center">
                <Button variant="outline" size="large">
                  Load More Images
                </Button>
              </Flex>
            )}
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <Heading size="2xl" color="gold" align="center">
                See Something You Love?
              </Heading>
              <Text size="large" color="light" align="center" className="max-w-2xl">
                Let us help you achieve the same stunning results in your home. 
                Book your free consultation today!
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
                  href="tel:01457597091"
                  variant="outline"
                  size="large"
                  iconLeft={<Icon name="phone" />}
                >
                  Call 01457 597091
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Container>
            <Card variant="luxury" padding="none" className="max-w-5xl mx-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-brand-dark/80 rounded-full hover:bg-brand-dark transition-colors"
                >
                  <Icon name="close" size="medium" className="text-white" />
                </button>
                
                <Grid cols={2} gap="none">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/images/optimized/${selectedImage.src}`}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <Stack spacing="large" className="p-8">
                    <Stack spacing="small">
                      <Heading size="xl" color="gold">
                        {selectedImage.title}
                      </Heading>
                      <Text color="light">
                        {selectedImage.room} • {selectedImage.location}
                      </Text>
                    </Stack>
                    
                    <GoldDivider variant="simple" size="small" align="left" />
                    
                    <Stack spacing="small">
                      <Text weight="semibold" color="gold">Features:</Text>
                      {selectedImage.features.map((feature, idx) => (
                        <Flex key={idx} align="center" gap="small">
                          <Icon name="check" size="small" className="text-brand-gold" />
                          <Text color="light">{feature}</Text>
                        </Flex>
                      ))}
                    </Stack>
                    
                    <Stack spacing="small">
                      <Button 
                        to="/book-appointment"
                        variant="luxury"
                        fullWidth
                        iconLeft={<Icon name="calendar" />}
                      >
                        Book Consultation for Similar Style
                      </Button>
                      <Button 
                        to={`/${selectedImage.category}-blinds`}
                        variant="outline"
                        fullWidth
                        iconRight={<Icon name="arrowRight" />}
                      >
                        View {categories.find(c => c.id === selectedImage.category)?.name}
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
              </div>
            </Card>
          </Container>
        </div>
      )}
    </>
  )
}

export default GalleryLuxury