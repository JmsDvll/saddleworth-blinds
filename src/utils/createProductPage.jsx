import React from 'react'
import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  Link,
  Image,
  Stack,
  Flex,
  Center,
  PageTitle,
  SectionTitle,
  LuxuryIcon
} from '../components/ui'

// Standard product page configuration
export const productConfigs = {
  'roller-blinds': {
    title: 'Roller Blinds',
    tagline: 'Simple Style, Perfect Function',
    description: 'The smart choice for modern homes. Clean lines, hundreds of fabrics, and perfect light control at the pull of a chain.',
    heroImage: '/images/optimized/roller-zen-kiwi-1600.jpg',
    heroAlt: 'Modern roller blinds in a Saddleworth home',
    carousel: 'RollerBlindsCarousel',
    features: [
      { icon: 'check', title: '100+ Fabric Choices' },
      { icon: 'shield', title: 'Child Safe Options' },
      { icon: 'currency', title: 'Best Value Blinds' }
    ],
    keyBenefits: [
      {
        icon: 'home',
        title: 'Perfect for Every Room',
        description: 'From sunny kitchens to cosy bedrooms, roller blinds work brilliantly throughout your home.'
      },
      {
        icon: 'currency',
        title: 'Exceptional Value',
        description: 'High-quality blinds that won\'t break the bank - perfect for updating multiple rooms.'
      },
      {
        icon: 'shield',
        title: 'Child Safe Options',
        description: 'Cordless and motorised options available for complete peace of mind.'
      },
      {
        icon: 'clock',
        title: 'Quick Installation',
        description: 'Professional fitting typically takes just 30 minutes per blind.'
      }
    ],
    types: [
      {
        name: 'Blackout Blinds',
        description: 'Perfect darkness for better sleep',
        features: [
          'Blocks 100% of light',
          'Thermal properties for insulation',
          'Ideal for bedrooms and nurseries',
          'Reduces outside noise'
        ]
      },
      {
        name: 'Sunscreen Blinds',
        description: 'Filter light while maintaining your view',
        features: [
          'UV protection for furniture',
          'Maintains outside view',
          'Reduces glare on screens',
          'Privacy during daylight'
        ]
      },
      {
        name: 'Decorative Fabrics',
        description: 'Express your style with pattern and colour',
        features: [
          'Hundreds of designs available',
          'Match any interior style',
          'Light filtering options',
          'Easy to coordinate'
        ]
      }
    ]
  },
  'venetian-blinds': {
    title: 'Venetian Blinds',
    tagline: 'Timeless Style, Perfect Control',
    description: 'The classic choice that never goes out of style. Perfect light control with a twist of the wand.',
    heroImage: '/images/optimized/venetian-wood-natural-1600.jpg',
    heroAlt: 'Premium wooden venetian blinds in a Saddleworth home',
    carousel: 'VenetianBlindsCarousel',
    features: [
      { icon: 'check', title: 'Wood & Aluminium' },
      { icon: 'sparkle', title: 'Easy to Clean' },
      { icon: 'slider', title: 'Perfect Light Control' }
    ],
    keyBenefits: [
      {
        icon: 'sparkle',
        title: 'Timeless Elegance',
        description: 'Venetian blinds have been the choice of discerning homeowners for generations.'
      },
      {
        icon: 'slider',
        title: 'Ultimate Control',
        description: 'Adjust both the height and angle of slats for perfect light and privacy.'
      },
      {
        icon: 'water',
        title: 'Easy Maintenance',
        description: 'Simple to clean and maintain - just dust or wipe with a damp cloth.'
      },
      {
        icon: 'home',
        title: 'Versatile Style',
        description: 'Available in wood, faux wood, and aluminium to suit any room.'
      }
    ],
    types: [
      {
        name: 'Wooden Venetians',
        description: 'Natural warmth and beauty',
        features: [
          'Real wood in various stains',
          'Adds warmth to any room',
          'Premium quality slats',
          'Natural insulation properties'
        ]
      },
      {
        name: 'Faux Wood Venetians',
        description: 'Practical luxury for any room',
        features: [
          'Moisture resistant',
          'Perfect for kitchens & bathrooms',
          'Looks like real wood',
          'More affordable option'
        ]
      },
      {
        name: 'Aluminium Venetians',
        description: 'Sleek and modern',
        features: [
          'Ultra-slim profile',
          'Huge range of colours',
          'Heat and moisture resistant',
          'Perfect for contemporary homes'
        ]
      }
    ]
  },
  'vertical-blinds': {
    title: 'Vertical Blinds',
    tagline: 'Perfect for Large Windows',
    description: 'The practical choice for patio doors and large windows. Excellent light control with easy operation.',
    heroImage: '/images/optimized/vertical-grey-1600.jpg',
    heroAlt: 'Modern vertical blinds on patio doors',
    carousel: 'VerticalBlindsCarousel',
    features: [
      { icon: 'check', title: 'Ideal for Patio Doors' },
      { icon: 'shield', title: 'Child Safe Wand Control' },
      { icon: 'sparkle', title: 'Easy to Maintain' }
    ],
    keyBenefits: [
      {
        icon: 'home',
        title: 'Made for Large Windows',
        description: 'Vertical blinds are the perfect solution for wide windows and sliding doors.'
      },
      {
        icon: 'slider',
        title: 'Excellent Light Control',
        description: 'Rotate slats for privacy or draw completely to one side for full access.'
      },
      {
        icon: 'shield',
        title: 'Safe & Practical',
        description: 'Wand control keeps cords away from children and pets.'
      },
      {
        icon: 'currency',
        title: 'Great Value',
        description: 'An affordable way to cover large glass areas stylishly.'
      }
    ],
    types: [
      {
        name: 'Fabric Verticals',
        description: 'Soft and stylish',
        features: [
          'Wide range of colours',
          'Light filtering options',
          'Washable fabrics available',
          'Coordinate with decor'
        ]
      },
      {
        name: 'PVC Verticals',
        description: 'Practical and durable',
        features: [
          'Wipe clean surface',
          'Moisture resistant',
          'Perfect for kitchens',
          'Long lasting'
        ]
      },
      {
        name: 'Blackout Verticals',
        description: 'Maximum privacy',
        features: [
          'Complete light blocking',
          'Thermal properties',
          'Great for bedrooms',
          'Reduces noise'
        ]
      }
    ]
  },
  'vision-blinds': {
    title: 'Vision Blinds',
    tagline: 'Innovation Meets Elegance',
    description: 'Revolutionary dual-layer design gives you the best of blinds and voiles. Simply align the stripes for privacy or offset for a gentle filtered light.',
    heroImage: '/images/optimized/vision-lusso-pebble-1600.jpg',
    heroAlt: 'Elegant Vision blinds in a modern living room',
    carousel: 'VisionBlindsCarousel',
    features: [
      { icon: 'sparkle', title: 'Dual Layer Design' },
      { icon: 'slider', title: 'Unique Light Control' },
      { icon: 'shield', title: 'Child Safe' }
    ],
    keyBenefits: [
      {
        icon: 'sparkle',
        title: 'Revolutionary Design',
        description: 'Two layers of fabric strips that slide past each other for infinite light control.'
      },
      {
        icon: 'eye',
        title: 'Privacy Without Darkness',
        description: 'Maintain your view and natural light while ensuring complete privacy.'
      },
      {
        icon: 'home',
        title: 'Contemporary Style',
        description: 'Modern, minimalist design that complements any contemporary interior.'
      },
      {
        icon: 'shield',
        title: 'Safe Operation',
        description: 'No dangling cords - perfect for homes with children and pets.'
      }
    ],
    types: [
      {
        name: 'Day & Night',
        description: 'Versatile light control',
        features: [
          'Sheer and opaque stripes',
          'Gentle light filtering',
          'Maintains outside view',
          'Popular choice'
        ]
      },
      {
        name: 'Blackout Vision',
        description: 'Complete darkness option',
        features: [
          'Total light blocking',
          'Perfect for bedrooms',
          'Enhanced privacy',
          'Thermal benefits'
        ]
      },
      {
        name: 'Fire Retardant',
        description: 'Safety certified',
        features: [
          'Meets safety standards',
          'Ideal for rentals',
          'Peace of mind',
          'Full fabric choice'
        ]
      }
    ]
  },
  'perfect-fit-blinds': {
    title: 'Perfect Fit Blinds',
    tagline: 'No Drilling, No Fuss',
    description: 'Ingenious blinds that clip directly into your UPVC windows. No drilling, no screws, just a perfect fit every time.',
    heroImage: '/images/optimized/perfectfit-blind-white-1600.jpg',
    heroAlt: 'Perfect Fit blinds installed in UPVC windows',
    carousel: 'PerfectFitCarousel',
    features: [
      { icon: 'check', title: 'No Drilling Required' },
      { icon: 'shield', title: 'Child Safe Design' },
      { icon: 'sparkle', title: 'Neat Finish' }
    ],
    keyBenefits: [
      {
        icon: 'home',
        title: 'No Drilling Needed',
        description: 'Clips directly into UPVC window frames - perfect for rentals or preserving warranties.'
      },
      {
        icon: 'sparkle',
        title: 'Neat & Tidy',
        description: 'Sits flush within the window frame for a clean, integrated look.'
      },
      {
        icon: 'shield',
        title: 'Completely Child Safe',
        description: 'No cords or chains - the safest blind option for families.'
      },
      {
        icon: 'slider',
        title: 'Move With Windows',
        description: 'Blinds tilt and turn with your windows - no catching or snagging.'
      }
    ],
    types: [
      {
        name: 'Pleated Blinds',
        description: 'Compact and stylish',
        features: [
          'Minimal stack height',
          'Wide fabric range',
          'Energy efficient',
          'Modern appearance'
        ]
      },
      {
        name: 'Roller Blinds',
        description: 'Classic simplicity',
        features: [
          'Huge fabric choice',
          'Blackout available',
          'Easy operation',
          'Great value'
        ]
      },
      {
        name: 'Venetian Blinds',
        description: 'Ultimate control',
        features: [
          'Tilt for privacy',
          'Aluminium slats',
          'Easy to clean',
          'Contemporary look'
        ]
      }
    ]
  },
  'roman-blinds': {
    title: 'Roman Blinds',
    tagline: 'Luxury Meets Function',
    description: 'The ultimate in elegant window dressing. Soft fabric folds create a sophisticated look that transforms any room.',
    heroImage: '/images/optimized/roman-blind-pattern-1600.jpg',
    heroAlt: 'Luxurious Roman blinds in an elegant setting',
    carousel: null, // Roman blinds don't have a carousel yet
    features: [
      { icon: 'sparkle', title: 'Luxurious Fabrics' },
      { icon: 'home', title: 'Made to Measure' },
      { icon: 'check', title: 'Blackout Lining' }
    ],
    keyBenefits: [
      {
        icon: 'sparkle',
        title: 'Elegant Design',
        description: 'Beautiful fabric folds create a sophisticated, luxurious appearance.'
      },
      {
        icon: 'home',
        title: 'Room Transformation',
        description: 'Instantly elevate any room with the soft, tailored look of Roman blinds.'
      },
      {
        icon: 'sun',
        title: 'Insulation Benefits',
        description: 'Lined options provide excellent thermal and acoustic insulation.'
      },
      {
        icon: 'palette',
        title: 'Endless Choice',
        description: 'Choose from hundreds of fabrics to match your exact style.'
      }
    ],
    types: [
      {
        name: 'Classic Fold',
        description: 'Traditional elegance',
        features: [
          'Neat horizontal folds',
          'Timeless design',
          'Suits all interiors',
          'Most popular style'
        ]
      },
      {
        name: 'Cascade Fold',
        description: 'Contemporary luxury',
        features: [
          'Waterfall effect',
          'Modern appearance',
          'Dramatic impact',
          'Statement windows'
        ]
      },
      {
        name: 'Relaxed Roman',
        description: 'Casual sophistication',
        features: [
          'Gentle curve at base',
          'Softer appearance',
          'Country house style',
          'Relaxed elegance'
        ]
      }
    ]
  },
  'shutters': {
    title: 'Plantation Shutters',
    tagline: 'Timeless Elegance',
    description: 'Add real value to your home with beautiful plantation shutters. The ultimate in style, privacy and light control.',
    heroImage: '/images/optimized/shutters-white-1600.jpg',
    heroAlt: 'Elegant white plantation shutters',
    carousel: 'ShuttersCarousel',
    features: [
      { icon: 'currency', title: 'Adds Property Value' },
      { icon: 'shield', title: '25 Year Guarantee' },
      { icon: 'sparkle', title: 'Premium Quality' }
    ],
    keyBenefits: [
      {
        icon: 'currency',
        title: 'Increase Home Value',
        description: 'Shutters are seen as a permanent fixture that adds real value to your property.'
      },
      {
        icon: 'sparkle',
        title: 'Timeless Appeal',
        description: 'Classic design that never goes out of style and suits any property type.'
      },
      {
        icon: 'slider',
        title: 'Perfect Control',
        description: 'Adjust louvres for precise light and privacy control throughout the day.'
      },
      {
        icon: 'shield',
        title: 'Built to Last',
        description: 'Premium materials with a 25-year guarantee for lasting beauty.'
      }
    ],
    types: [
      {
        name: 'Full Height',
        description: 'Floor to ceiling coverage',
        features: [
          'Maximum privacy',
          'Clean lines',
          'Most popular option',
          'Suits all windows'
        ]
      },
      {
        name: 'Tier on Tier',
        description: 'Independent panels',
        features: [
          'Top and bottom separate',
          'Versatile control',
          'Victorian style',
          'Great for bay windows'
        ]
      },
      {
        name: 'Café Style',
        description: 'Lower window only',
        features: [
          'Privacy with light',
          'Continental charm',
          'Perfect for kitchens',
          'Cost effective'
        ]
      }
    ]
  },
  'allusion-blinds': {
    title: 'Allusion Blinds',
    tagline: 'Where Blinds Meet Curtains',
    description: 'The innovative combination of flowing voiles and rotating vanes. Get the softness of curtains with the practicality of blinds.',
    heroImage: '/images/optimized/allusion-vista-snow-1600.jpg',
    heroAlt: 'Beautiful Allusion blinds combining curtains and blinds',
    carousel: 'AllusionCarousel',
    features: [
      { icon: 'sparkle', title: 'Unique Design' },
      { icon: 'home', title: 'Curtain Alternative' },
      { icon: 'slider', title: 'Light & Privacy' }
    ],
    keyBenefits: [
      {
        icon: 'sparkle',
        title: 'Best of Both Worlds',
        description: 'Combines the elegance of curtains with the functionality of blinds.'
      },
      {
        icon: 'eye',
        title: 'Soft Filtered Light',
        description: 'Sheer fabric creates a beautiful, diffused light effect.'
      },
      {
        icon: 'home',
        title: 'Contemporary Style',
        description: 'Perfect for modern homes seeking a softer window treatment.'
      },
      {
        icon: 'slider',
        title: 'Versatile Control',
        description: 'Walk through when open, rotate vanes for privacy when needed.'
      }
    ],
    types: [
      {
        name: 'Standard Allusion',
        description: 'Classic combination',
        features: [
          'Flowing sheer fabric',
          'Rotating fabric vanes',
          'Gentle light diffusion',
          'Modern alternative'
        ]
      },
      {
        name: 'Room Darkening',
        description: 'Enhanced privacy',
        features: [
          'Thicker vane fabric',
          'Better light blocking',
          'Improved insulation',
          'Bedroom suitable'
        ]
      },
      {
        name: 'Extra Wide',
        description: 'Large windows',
        features: [
          'Up to 4m wide',
          'Perfect for bi-folds',
          'Single blind coverage',
          'Seamless appearance'
        ]
      }
    ]
  },
  'curtains': {
    title: 'Made to Measure Curtains',
    tagline: 'Classic Elegance',
    description: 'Beautiful made-to-measure curtains in luxurious fabrics. The traditional choice for elegance and warmth.',
    heroImage: '/images/optimized/curtains-pattern-1600.jpg',
    heroAlt: 'Elegant curtains in a traditional setting',
    carousel: null, // Curtains don't have a carousel yet
    features: [
      { icon: 'sparkle', title: 'Luxury Fabrics' },
      { icon: 'home', title: 'Made to Measure' },
      { icon: 'sun', title: 'Thermal Lining' }
    ],
    keyBenefits: [
      {
        icon: 'sparkle',
        title: 'Timeless Elegance',
        description: 'Nothing beats the classic beauty and warmth of well-made curtains.'
      },
      {
        icon: 'palette',
        title: 'Unlimited Choice',
        description: 'Choose from hundreds of fabrics, patterns, and textures.'
      },
      {
        icon: 'sun',
        title: 'Excellent Insulation',
        description: 'Lined curtains provide superior thermal and acoustic insulation.'
      },
      {
        icon: 'home',
        title: 'Professional Finish',
        description: 'Expert making ensures perfect hang and beautiful drape.'
      }
    ],
    types: [
      {
        name: 'Pencil Pleat',
        description: 'Classic gathering',
        features: [
          'Traditional style',
          'Versatile heading',
          'Suits all poles/tracks',
          'Adjustable fullness'
        ]
      },
      {
        name: 'Eyelet',
        description: 'Contemporary style',
        features: [
          'Modern appearance',
          'Easy to hang',
          'Smooth operation',
          'Even fold distribution'
        ]
      },
      {
        name: 'Pinch Pleat',
        description: 'Formal elegance',
        features: [
          'Tailored appearance',
          'Professional finish',
          'Perfect drape',
          'Luxury look'
        ]
      }
    ]
  }
}

// Template component for product pages
export const createProductPage = (productSlug, CarouselComponent) => {
  const config = productConfigs[productSlug]

  if (!config) {
    throw new Error(`No configuration found for product: ${productSlug}`)
  }

  const ProductPage = () => {
    return (
      <>
        {/* Hero Section - Dark theme for products */}
        <Section background="dark" padding="large">
          <Container>
            <Grid cols={1} mdCols={2} gap="xlarge" align="center">
              <Stack spacing="large">
                <Stack spacing="medium">
                  <PageTitle title={config.title} subtitle={config.tagline} />
                  
                  <Text size="xlarge" color="light" leading="relaxed">
                    {config.description}
                  </Text>
                </Stack>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="xlarge"
                  >
                    Get Your Free Quote
                  </Button>
                  <Button 
                    as="a" 
                    href="tel:01457597091" 
                    variant="secondary" 
                    size="xlarge"
                    iconLeft={<Icon name="phone" />}
                  >
                    Call 01457 597091
                  </Button>
                </Flex>

                <Grid cols={3} gap="medium" className="pt-4">
                  {config.features.map((feature, index) => (
                    <Center key={index}>
                      <Stack spacing="small" align="center">
                        <LuxuryIcon variant="circle" size="medium">
                          <Icon name={feature.icon} />
                        </LuxuryIcon>
                        <Text size="small" weight="medium" align="center">{feature.title}</Text>
                      </Stack>
                    </Center>
                  ))}
                </Grid>
              </Stack>

              <Image
                src={config.heroImage}
                alt={config.heroAlt}
                variant="hero"
                loading="eager"
              />
            </Grid>
          </Container>
        </Section>

        {/* Key Benefits - Darker background */}
        <Section background="darker" padding="large">
          <Container>
            <Stack spacing="xlarge">
              <Center>
                <Stack spacing="medium" align="center">
                  <Heading as="h2" size="3xl" mdSize="4xl" color="gradient">
                    Why Choose {config.title}?
                  </Heading>
                  <Text size="xlarge" color="light" align="center" className="max-w-3xl">
                    Discover why thousands of Saddleworth homeowners trust us for their {config.title.toLowerCase()}
                  </Text>
                </Stack>
              </Center>

              <Grid cols={1} mdCols={2} lgCols={4} gap="large">
                {config.keyBenefits.map((benefit, index) => (
                  <Card key={index} variant="elevated" hover="lift" padding="large">
                    <Stack spacing="medium" align="center">
                      <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
                        <Icon name={benefit.icon} size="large" className="text-brand-gold" />
                      </div>
                      <Heading as="h3" size="xl" align="center">{benefit.title}</Heading>
                      <Text color="light" align="center">{benefit.description}</Text>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Product Gallery - Dark background */}
        <Section background="dark" padding="large">
          <Container>
            <Stack spacing="large">
              <Center>
                <Heading as="h2" size="3xl" mdSize="4xl" color="gradient">
                  Explore Our Collection
                </Heading>
              </Center>
              
              {CarouselComponent && <CarouselComponent />}
            </Stack>
          </Container>
        </Section>

        {/* Product Types - Darker background */}
        <Section background="darker" padding="large">
          <Container>
            <Stack spacing="xlarge">
              <Center>
                <Stack spacing="medium" align="center">
                  <Heading as="h2" size="3xl" mdSize="4xl" color="gradient">
                    Types of {config.title}
                  </Heading>
                  <Text size="xlarge" color="light" align="center" className="max-w-3xl">
                    Choose the perfect style for your home
                  </Text>
                </Stack>
              </Center>

              <Grid cols={1} mdCols={config.types.length} gap="large">
                {config.types.map((type, index) => (
                  <Card key={index} variant="elevated" padding="large">
                    <Stack spacing="medium">
                      <Heading as="h3" size="2xl" color="gold">{type.name}</Heading>
                      <Text size="large" color="light">{type.description}</Text>
                      <Stack spacing="small" className="mt-4">
                        {type.features.map((feature, fIndex) => (
                          <Flex key={fIndex} align="start" gap="small">
                            <Icon name="check" size="small" className="text-brand-gold mt-1 flex-shrink-0" />
                            <Text color="light">{feature}</Text>
                          </Flex>
                        ))}
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* How It Works - Dark background */}
        <Section background="dark" padding="large">
          <Container>
            <Stack spacing="xlarge">
              <Center>
                <Heading as="h2" size="3xl" mdSize="4xl" color="gradient">
                  How It Works
                </Heading>
              </Center>

              <Grid cols={1} mdCols={4} gap="large">
                {[
                  { number: '1', title: 'Book Consultation', description: 'Free home visit at your convenience' },
                  { number: '2', title: 'Expert Measuring', description: 'Professional measuring & advice' },
                  { number: '3', title: 'Made to Measure', description: 'Crafted to fit perfectly' },
                  { number: '4', title: 'Professional Fitting', description: 'Expert installation included' }
                ].map((step, index) => (
                  <Stack key={index} spacing="medium" align="center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl">
                      {step.number}
                    </div>
                    <Heading as="h3" size="lg" align="center">{step.title}</Heading>
                    <Text color="light" align="center">{step.description}</Text>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* CTA Section - Gradient background */}
        <Section background="gradient" padding="large">
          <Container>
            <Center>
              <Stack spacing="large" align="center">
                <Heading as="h2" size="3xl" mdSize="4xl">
                  Ready to Transform Your Windows?
                </Heading>
                <Text size="xlarge" color="light" align="center" className="max-w-2xl">
                  Join thousands of happy Saddleworth homeowners who've chosen us for their {config.title.toLowerCase()}.
                </Text>
                
                <Flex direction="column" smDirection="row" gap="medium">
                  <Button
                    as={Link}
                    to="/book-appointment"
                    variant="primary"
                    size="xlarge"
                  >
                    Book Your Free Consultation
                  </Button>
                  <Button
                    as="a"
                    href="tel:01457597091"
                    variant="secondary"
                    size="xlarge"
                    iconLeft={<Icon name="phone" />}
                  >
                    Call for Instant Quote
                  </Button>
                </Flex>

                <Grid cols={3} gap="large" className="mt-8">
                  <Stack spacing="small" align="center">
                    <Icon name="check" size="medium" className="text-brand-gold" />
                    <Text weight="medium">Free Measuring</Text>
                  </Stack>
                  <Stack spacing="small" align="center">
                    <Icon name="check" size="medium" className="text-brand-gold" />
                    <Text weight="medium">5 Year Guarantee</Text>
                  </Stack>
                  <Stack spacing="small" align="center">
                    <Icon name="check" size="medium" className="text-brand-gold" />
                    <Text weight="medium">Expert Fitting</Text>
                  </Stack>
                </Grid>
              </Stack>
            </Center>
          </Container>
        </Section>
      </>
    )
  }

  ProductPage.displayName = `${config.title}Page`
  return ProductPage
}