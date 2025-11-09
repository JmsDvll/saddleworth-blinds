import React from 'react'
/**
 * [STANDARDIZATION CHECKLIST]
 * ✅ Uses UI components only (no raw HTML for layout/content)
 * ✅ Zero inline Tailwind classes
 * ✅ SEO handled via route meta/Seo component
 * ✅ ESLint clean
 */
import { 
  Button, 
  Card, 
  Center, 
  Container, 
  Flex, 
  Grid, 
  Heading, 
  Image, 
  Link,
  Section,
  Stack,
  Text,
} from '../components/ui'

const Gallery = () => {
  const galleryImages = [
    {
      category: 'Vision Blinds',
      images: [
        { src: '/images/optimized/vision-lusso-pebble-400.jpg', alt: 'Vision Lusso Pebble blinds in bedroom', title: 'Vision Lusso Pebble' },
        { src: '/images/optimized/vision-setosa-ivory-400.jpg', alt: 'Vision Setosa Ivory blinds', title: 'Vision Setosa Ivory' },
        { src: '/images/optimized/vision-ferrara-anthracite-400.jpg', alt: 'Vision Ferrara Anthracite blinds', title: 'Vision Ferrara Anthracite' },
      ],
    },
    {
      category: 'Shutters',
      images: [
        { src: '/images/optimized/shutters-cotton-89mm-400.jpg', alt: 'Cotton plantation shutters with 89mm louvres', title: 'Cotton 89mm Shutters' },
        { src: '/images/optimized/shutters-cotton-63mm-400.jpg', alt: 'Cotton plantation shutters with 63mm louvres', title: 'Cotton 63mm Shutters' },
        { src: '/images/optimized/shutters-white-classic-400.jpg', alt: 'Classic white plantation shutters', title: 'Classic White Shutters' },
      ],
    },
    {
      category: 'Roller Blinds',
      images: [
        { src: '/images/optimized/roller-zen-kiwi-400.jpg', alt: 'Zen Kiwi roller blind', title: 'Zen Kiwi Roller' },
        { src: '/images/optimized/roller-blind-modern-400.jpg', alt: 'Modern roller blind', title: 'Modern Roller' },
        { src: '/images/optimized/roller-carnival-bubblegum-400.jpg', alt: 'Carnival Bubblegum roller blind', title: 'Carnival Bubblegum' },
      ],
    },
  ]

  return (
    <Section padding="large">
      <Container maxWidth="medium">
        <Stack spacing="xlarge">
          {/* Hero Section */}
          <Center>
            <Stack spacing="medium" align="center">
              <Heading as="h1" size="4xl" mdSize="5xl">Our Gallery</Heading>
              <Text size="xlarge" color="light" leading="relaxed" align="center">
                See our beautiful blinds installed in real Saddleworth homes. From cosy cottages in Uppermill to modern conversions in Diggle, discover how the right blinds can transform any space.
              </Text>
            </Stack>
          </Center>

          {/* Gallery Sections */}
          {galleryImages.map((category) => (
            <Stack key={category.category} spacing="large">
              <Heading as="h2" size="3xl" align="center">
                {category.category} Gallery
              </Heading>
              
              <Grid cols={1} mdCols={2} lgCols={3} gap="medium">
                {category.images.map((image, index) => (
                  <Card key={index} variant="elevated" hover="lift" padding="none">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      aspectRatio="16/9"
                    />
                    <Card.Body>
                      <Heading as="h3" size="base" color="white">{image.title}</Heading>
                      <Text size="small" color="muted">{image.alt}</Text>
                    </Card.Body>
                  </Card>
                ))}
              </Grid>
            </Stack>
          ))}

          {/* CTA Section */}
          <Card variant="elevated" padding="xlarge">
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="2xl">Love What You See?</Heading>
                  <Text color="light" align="center">
                  Get the same beautiful results in your own Saddleworth home. Book your free consultation today and let&apos;s discuss how we can transform your windows.
                  </Text>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="xlarge"
                  >
                    Book Your Free Visit
                  </Button>
                  <Button 
                    as="a" 
                    href="tel:01457597091" 
                    variant="secondary" 
                    size="xlarge"
                  >
                    Call for a Chat
                  </Button>
                </Flex>
              </Stack>
            </Center>
          </Card>
        </Stack>
      </Container>
    </Section>
  )
}

export default Gallery