import React, { useState } from 'react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  Stack,
  Center,
  Flex,
  Link,
  Image
} from './ui'

const ProductImageCarousel = () => {
  const [activeTab, setActiveTab] = useState('vision')

  const productCategories = {
    vision: {
      name: 'Vision Blinds',
      description: 'The clever choice with dual layers for perfect light control',
      images: [
        'vision-albero-silver-400.jpg',
        'vision-arezzo-beige-400.jpg',
        'vision-arezzo-grey-400.jpg',
        'vision-capri-concrete-400.jpg',
        'vision-capri-jasmine-400.jpg',
        'vision-capri-pewter-400.jpg',
        'vision-cirro-cashmere-400.jpg',
        'vision-cirro-pewter-400.jpg',
        'vision-cirro-sage-400.jpg',
        'vision-cirro-seagrass-400.jpg',
        'vision-classica-duckegg-400.jpg',
        'vision-classica-hessian-400.jpg',
        'vision-classica-navy-400.jpg',
        'vision-classica-primrose-400.jpg',
        'vision-ecco-cashmere-400.jpg',
        'vision-ecco-pewter-400.jpg',
        'vision-ecco-stone-400.jpg',
        'vision-ferrara-anthracite-400.jpg',
        'vision-ferrara-gunmetal-400.jpg',
        'vision-fiore-blush-400.jpg',
        'vision-fiore-mineral-400.jpg',
        'vision-firenze-grey-400.jpg',
        'vision-firenze-natural-400.jpg',
        'vision-firenze-neutral-400.jpg',
        'vision-firenze-walnut-400.jpg'
      ]
    },
    roller: {
      name: 'Roller Blinds',
      description: 'Simple, stylish and practical for any room',
      images: [
        'roller-birdsong-colour-400.jpg',
        'roller-blind-modern-400.jpg',
        'roller-carnival-bubblegum-400.jpg',
        'roller-daisy-pink-400.jpg',
        'roller-fiji-sand-400.jpg',
        'roller-kaleidoscope-colour-400.jpg',
        'roller-montego-mushroom-400.jpg',
        'roller-paradise-palm-400.jpg',
        'roller-petal-white-400.jpg',
        'roller-pop-white-400.jpg',
        'roller-tropical-palm-400.jpg',
        'roller-vintage-palm-400.jpg',
        'roller-zen-kiwi-400.jpg'
      ]
    },
    vertical: {
      name: 'Vertical Blinds',
      description: 'Perfect for large windows and patio doors',
      images: [
        'vertical-grey-400.jpg',
        'vertical-blind-grey-400.jpg',
        'vertical-matrix-reed-400.jpg',
        'vertical-savanna-zebra-400.jpg'
      ]
    },
    shutters: {
      name: 'Plantation Shutters',
      description: 'Luxury shutters that add real value to your home',
      images: [
        'shutters-cotton-63mm-400.jpg',
        'shutters-cotton-89mm-400.jpg',
        'shutters-white-400.jpg',
        'shutters-white-classic-400.jpg'
      ]
    },
    venetian: {
      name: 'Venetian Blinds',
      description: 'Classic choice with perfect light control',
      images: [
        'venetian-starwood-400.jpg',
        'venetian-wood-natural-400.jpg'
      ]
    },
    perfectfit: {
      name: 'Perfect Fit Blinds',
      description: 'No drilling required - clips right into UPVC windows',
      images: [
        'perfectfit-blind-white-400.jpg',
        'perfectfit-monet-flower-400.jpg'
      ]
    },
    allusion: {
      name: 'Allusion Blinds',
      description: 'Contemporary elegance combining curtains with blinds',
      images: [
        'allusion-shadow-sand-400.jpg',
        'allusion-vista-snow-400.jpg'
      ]
    },
    motorised: {
      name: 'Motorised Blinds',
      description: 'Smart blinds with remote control and automation',
      images: [
        'motorised-celeste-400.jpg'
      ]
    }
  }

  return (
    <Section background="darker" padding="large">
      <Container>
        <Stack spacing="xlarge">
          {/* Header */}
          <Center>
            <Stack spacing="medium" align="center">
              <Heading as="h2" size="3xl" lgSize="4xl">Explore Our Full Range</Heading>
              <Text size="xlarge" color="light" align="center" className="max-w-3xl">
                Browse through our complete collection of blinds and shutters. Each category showcases the quality and variety we offer to help you find your perfect window treatment.
              </Text>
            </Stack>
          </Center>

          {/* Category Tabs */}
          <Flex justify="center" wrap="wrap" gap="small">
            {Object.entries(productCategories).map(([key, category]) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                variant={activeTab === key ? 'primary' : 'secondary'}
                size="medium"
              >
                {category.name} ({category.images.length})
              </Button>
            ))}
          </Flex>

          {/* Active Category Display */}
          <Center>
            <Stack spacing="small" align="center">
              <Heading as="h3" size="2xl" color="gold">
                {productCategories[activeTab].name}
              </Heading>
              <Text color="light">
                {productCategories[activeTab].description}
              </Text>
            </Stack>
          </Center>

          {/* Image Grid */}
          <Grid cols={2} mdCols={3} lgCols={4} xlCols={5} gap="medium">
            {productCategories[activeTab].images.map((image, index) => (
              <Stack key={index} spacing="small">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden group">
                  <Image
                    src={`/images/optimized/${image}`}
                    alt={`${productCategories[activeTab].name} option ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Text size="small" color="muted" align="center">
                  Style #{index + 1}
                </Text>
              </Stack>
            ))}
          </Grid>

          {/* Call to Action */}
          <Center>
            <Stack spacing="medium" align="center">
              <Text color="light">
                See something you like? We'd love to help you find the perfect blinds for your home.
              </Text>
              <Flex direction="column" smDirection="row" gap="medium">
                <Button
                  as={Link}
                  to="/book-appointment"
                  variant="primary"
                  size="xlarge"
                >
                  Book Free Consultation
                </Button>
                <Button
                  as={Link}
                  to="/gallery"
                  variant="secondary"
                  size="xlarge"
                >
                  View Full Gallery
                </Button>
              </Flex>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </Section>
  )
}

export default ProductImageCarousel