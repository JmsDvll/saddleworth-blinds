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
  LuxuryIcon,
  LuxuryBadge,
  PageTitle
} from '../components/ui'

// Area page configuration
export const areaConfigs = {
  Greenfield: {
    description: "Beautiful window blinds for Greenfield homes. From modern new-builds to traditional stone properties, we understand what works best in this growing Saddleworth village.",
    introText: "Greenfield is one of Saddleworth's fastest-growing villages, with a mix of modern new-builds, traditional stone properties, and homes with stunning views over the countryside. We've been fitting blinds in Greenfield for over 20 years.",
    features: [
      { icon: "building", text: "Modern New-Builds" },
      { icon: "location", text: "Local Greenfield Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-lusso-pebble-1600.jpg",
    propertyTypes: [
      {
        title: "Modern New-Builds",
        icon: "building",
        description: "Many Greenfield homes are modern new-builds with large windows and contemporary styling. We specialise in solutions that complement clean, modern lines while providing excellent functionality.",
        features: [
          "Sleek roller blinds for contemporary interiors",
          "Vision blinds for open-plan living spaces", 
          "Vertical blinds for bi-fold doors and extensions",
          "Perfect Fit blinds for UPVC windows"
        ]
      },
      {
        title: "Traditional Stone Properties",
        icon: "grid",
        description: "Many Greenfield homes are traditional stone properties with character features. We help preserve the period charm while providing modern functionality.",
        features: [
          "Wooden venetian blinds for authentic period charm",
          "Roman blinds for elegant window treatments",
          "Shutters that complement stone architecture",
          "Motorised options for hard-to-reach windows"
        ]
      },
      {
        title: "Stunning Views",
        icon: "eye",
        description: "Greenfield's location offers stunning countryside views. We recommend window treatments that enhance rather than obstruct these beautiful vistas.",
        features: [
          "Vision blinds for privacy without blocking views",
          "Sunscreen fabrics that reduce glare",
          "Motorised options for convenience",
          "UV protection to preserve furniture and flooring"
        ]
      }
    ]
  },
  Diggle: {
    description: "Beautiful window blinds for Diggle homes. From converted barns to stone cottages, we understand what works best in this picturesque Saddleworth village.",
    introText: "Diggle is a charming village nestled in the Pennine hills, with a mix of traditional stone cottages, converted barns, and newer developments. We've been fitting blinds in Diggle homes for over 20 years, understanding the unique character of this historic location.",
    features: [
      { icon: "building", text: "Converted Barns" },
      { icon: "location", text: "Local Diggle Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-firenze-walnut-1600.jpg",
    propertyTypes: [
      {
        title: "Converted Barns & Mills",
        icon: "building",
        description: "Diggle has many beautiful barn conversions and mill properties with large windows and exposed beams. We specialise in solutions that complement these unique architectural features.",
        features: [
          "Wooden venetian blinds to match exposed beams",
          "Vision blinds for large feature windows",
          "Motorised options for high windows",
          "Roman blinds for period charm"
        ]
      },
      {
        title: "Stone Cottages",
        icon: "grid",
        description: "Traditional stone cottages are common in Diggle, often with smaller windows and thick walls. We provide solutions that work with these charming period features.",
        features: [
          "Perfect Fit blinds for recessed windows",
          "Shutters for authentic period styling",
          "Roman blinds for cosy cottage charm",
          "Blackout options for bedrooms"
        ]
      }
    ]
  },
  Dobcross: {
    description: "Beautiful window blinds for Dobcross homes. From Victorian terraces to modern extensions, we understand what works best in this central Saddleworth village.",
    introText: "Dobcross sits at the heart of Saddleworth, with its Victorian terraces, traditional weavers' cottages, and modern extensions. We've been fitting blinds in Dobcross for over 20 years, understanding the architectural diversity of this vibrant village.",
    features: [
      { icon: "building", text: "Victorian Terraces" },
      { icon: "location", text: "Local Dobcross Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-floreale-rosa-1600.jpg",
    propertyTypes: [
      {
        title: "Victorian Terraces",
        icon: "building",
        description: "Dobcross has many Victorian terraced houses with tall sash windows and period features. We specialise in window treatments that preserve the character while providing modern functionality.",
        features: [
          "Wooden venetian blinds for period authenticity",
          "Roman blinds for elegant window dressing",
          "Shutters to complement Victorian architecture",
          "Motorised options for tall windows"
        ]
      },
      {
        title: "Modern Extensions",
        icon: "grid",
        description: "Many Dobcross homes have been extended with contemporary additions. We help integrate modern window treatments that work with both old and new.",
        features: [
          "Roller blinds for clean modern lines",
          "Vision blinds for open-plan spaces",
          "Vertical blinds for bi-fold doors",
          "Perfect Fit blinds for UPVC windows"
        ]
      }
    ]
  },
  Lydgate: {
    description: "Beautiful window blinds for Lydgate homes. From hillside properties with stunning views to cosy cottages, we understand what works best in this elevated Saddleworth village.",
    introText: "Lydgate is perched on the hillside with spectacular views across the valley. From traditional stone cottages to modern homes designed to maximise the vistas, we've been fitting blinds in Lydgate for over 20 years.",
    features: [
      { icon: "eye", text: "Stunning Views" },
      { icon: "location", text: "Local Lydgate Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-lusso-pebble-1600.jpg",
    propertyTypes: [
      {
        title: "Hillside Properties",
        icon: "eye",
        description: "Many Lydgate homes are positioned to take advantage of stunning valley views. We recommend window treatments that preserve these vistas while providing privacy and light control.",
        features: [
          "Vision blinds for privacy without blocking views",
          "Sunscreen fabrics to reduce glare",
          "Motorised blinds for hard-to-reach windows",
          "UV protection for sun-facing windows"
        ]
      },
      {
        title: "Traditional Cottages",
        icon: "building",
        description: "Lydgate has many charming stone cottages with smaller windows and period features. We provide solutions that enhance the cosy cottage feel.",
        features: [
          "Wooden venetian blinds for warmth",
          "Roman blinds for cottage charm",
          "Perfect Fit blinds for smaller windows",
          "Blackout options for bedrooms"
        ]
      }
    ]
  },
  Grotton: {
    description: "Beautiful window blinds for Grotton homes. From traditional terraces to modern family homes, we understand what works best in this friendly Saddleworth village.",
    introText: "Grotton is a close-knit community with a mix of traditional terraced houses, semi-detached family homes, and newer developments. We've been fitting blinds in Grotton for over 20 years, understanding what local residents need.",
    features: [
      { icon: "building", text: "Family Homes" },
      { icon: "location", text: "Local Grotton Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-floreale-rosa-1600.jpg",
    propertyTypes: [
      {
        title: "Family Homes",
        icon: "users",
        description: "Grotton has many family homes where practicality is key. We provide child-safe, durable solutions that work for busy family life.",
        features: [
          "Child-safe cordless options",
          "Easy-clean roller blinds",
          "Blackout blinds for children's bedrooms",
          "Perfect Fit blinds for safety"
        ]
      },
      {
        title: "Traditional Terraces",
        icon: "building",
        description: "Traditional terraced houses are common in Grotton. We provide window treatments that maximise light and space in these charming homes.",
        features: [
          "Venetian blinds for light control",
          "Roller blinds for clean lines",
          "Vision blinds for privacy",
          "Roman blinds for elegance"
        ]
      }
    ]
  },
  Lees: {
    description: "Beautiful window blinds for Lees homes. From traditional mill workers' cottages to modern developments, we understand what works best in this historic Saddleworth area.",
    introText: "Lees has a rich industrial heritage with many converted mill properties alongside traditional terraces and modern homes. We've been fitting blinds in Lees for over 20 years, understanding the unique character of each property type.",
    features: [
      { icon: "building", text: "Mill Conversions" },
      { icon: "location", text: "Local Lees Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-firenze-walnut-1600.jpg",
    propertyTypes: [
      {
        title: "Mill Conversions",
        icon: "building",
        description: "Lees has several converted mill properties with large windows and industrial features. We provide solutions that complement the industrial aesthetic.",
        features: [
          "Wooden blinds to match exposed brick",
          "Vertical blinds for tall windows",
          "Motorised options for high windows",
          "Vision blinds for loft apartments"
        ]
      },
      {
        title: "Traditional Terraces",
        icon: "grid",
        description: "Traditional mill workers' cottages and terraces are common in Lees. We provide practical, stylish solutions for these characterful homes.",
        features: [
          "Venetian blinds for versatility",
          "Roller blinds for simplicity",
          "Perfect Fit blinds for UPVC windows",
          "Blackout options for shift workers"
        ]
      }
    ]
  },
  Springhead: {
    description: "Beautiful window blinds for Springhead homes. From hillside properties to traditional terraces, we understand what works best in this elevated Saddleworth village.",
    introText: "Springhead sits high on the hillside with panoramic views across Saddleworth. From traditional stone terraces to modern homes, we've been fitting blinds in Springhead for over 20 years.",
    features: [
      { icon: "eye", text: "Panoramic Views" },
      { icon: "location", text: "Local Springhead Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-lusso-pebble-1600.jpg",
    propertyTypes: [
      {
        title: "Hillside Properties",
        icon: "eye",
        description: "Springhead's elevated position means many homes enjoy spectacular views. We recommend window treatments that make the most of these vistas.",
        features: [
          "Vision blinds for views with privacy",
          "Sunscreen blinds to reduce glare",
          "Motorised blinds for convenience",
          "UV protective fabrics"
        ]
      },
      {
        title: "Traditional Terraces",
        icon: "building",
        description: "Traditional stone terraces line Springhead's steep streets. We provide solutions that work with smaller windows and period features.",
        features: [
          "Perfect Fit blinds for neat installation",
          "Venetian blinds for light control",
          "Roman blinds for period charm",
          "Blackout blinds for bedrooms"
        ]
      }
    ]
  },
  Grasscroft: {
    description: "Beautiful window blinds for Grasscroft homes. From traditional cottages to family homes, we understand what works best in this quiet Saddleworth village.",
    introText: "Grasscroft is a peaceful village with a mix of traditional cottages, family homes, and newer developments. We've been fitting blinds in Grasscroft for over 20 years, understanding what local residents value.",
    features: [
      { icon: "building", text: "Traditional Cottages" },
      { icon: "location", text: "Local Grasscroft Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-floreale-rosa-1600.jpg",
    propertyTypes: [
      {
        title: "Traditional Cottages",
        icon: "building",
        description: "Grasscroft has many charming cottages with period features. We provide window treatments that enhance the traditional character.",
        features: [
          "Wooden venetian blinds for warmth",
          "Roman blinds for cottage style",
          "Shutters for period authenticity",
          "Perfect Fit for modern convenience"
        ]
      },
      {
        title: "Family Homes",
        icon: "users",
        description: "Modern family homes in Grasscroft need practical, stylish solutions. We provide child-safe options that work for busy families.",
        features: [
          "Cordless blinds for safety",
          "Easy-clean fabrics",
          "Blackout blinds for bedrooms",
          "Motorised options for convenience"
        ]
      }
    ]
  },
  Friezland: {
    description: "Beautiful window blinds for Friezland homes. From canal-side properties to hillside homes, we understand what works best in this scenic Saddleworth village.",
    introText: "Friezland is uniquely positioned between the canal and the hills, with a diverse mix of properties. We've been fitting blinds in Friezland for over 20 years, understanding the specific needs of this charming location.",
    features: [
      { icon: "water", text: "Canal-side Living" },
      { icon: "location", text: "Local Friezland Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-firenze-walnut-1600.jpg",
    propertyTypes: [
      {
        title: "Canal-side Properties",
        icon: "water",
        description: "Properties near the canal need window treatments that provide privacy while enjoying waterside views. We offer solutions that balance both needs.",
        features: [
          "Vision blinds for privacy with views",
          "Moisture-resistant options",
          "Venetian blinds for light control",
          "Perfect Fit for modern windows"
        ]
      },
      {
        title: "Hillside Homes",
        icon: "eye",
        description: "Homes on the Friezland hillside enjoy wonderful views. We provide window treatments that maximise these vistas while ensuring privacy.",
        features: [
          "Sunscreen blinds for glare reduction",
          "Motorised blinds for high windows",
          "Vision blinds for versatility",
          "UV protection for furnishings"
        ]
      }
    ]
  },
  Denshaw: {
    description: "Beautiful window blinds for Denshaw homes. From rural cottages to modern family homes, we understand what works best in this peaceful Saddleworth village.",
    introText: "Denshaw is a tranquil village on the edge of the moors, with traditional stone cottages and newer family homes. We've been fitting blinds in Denshaw for over 20 years, understanding the rural character of this lovely location.",
    features: [
      { icon: "building", text: "Rural Cottages" },
      { icon: "location", text: "Local Denshaw Experts" },
      { icon: "calendar", text: "20+ Years Experience" }
    ],
    heroImage: "/images/optimized/vision-lusso-pebble-1600.jpg",
    propertyTypes: [
      {
        title: "Rural Cottages",
        icon: "building",
        description: "Denshaw's traditional cottages often have smaller windows and thick stone walls. We provide solutions that work with these charming features.",
        features: [
          "Wooden blinds for rustic charm",
          "Roman blinds for cottage style",
          "Perfect Fit for neat installation",
          "Blackout options for dark nights"
        ]
      },
      {
        title: "Modern Family Homes",
        icon: "users",
        description: "Newer developments in Denshaw feature modern family homes with larger windows. We provide contemporary solutions for modern living.",
        features: [
          "Roller blinds for clean lines",
          "Vision blinds for versatility",
          "Child-safe cordless options",
          "Easy-clean materials"
        ]
      }
    ]
  }
}

// Template component for area pages
export const createAreaPage = (areaName) => {
  const config = areaConfigs[areaName]
  
  if (!config) {
    throw new Error(`No configuration found for area: ${areaName}`)
  }

  const AreaPage = () => {
    return (
      <>
        {/* Hero Section */}
        <Section background="gradient" padding="large">
          <Container>
            <Grid cols={1} mdCols={2} gap="xlarge" align="center">
              <Stack spacing="large">
                <Heading as="h1" size="4xl" mdSize="6xl">
                  Window Blinds in
                  <Text as="span" color="gold">{areaName}</Text>
                </Heading>
                
                <Text size="xlarge" color="light" leading="relaxed">
                  {config.description}
                </Text>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button 
                    as={Link} 
                    to="/book-appointment" 
                    variant="primary" 
                    size="xlarge"
                  >
                    Book Free Quote in {areaName}
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

                <Grid cols={3} gap="medium">
                  {config.features.map((feature, index) => (
                    <Center key={index}>
                      <Stack spacing="small" align="center">
                        <LuxuryIcon variant="circle" size="medium">
                          <Icon name={feature.icon} />
                        </LuxuryIcon>
                        <Text size="small" weight="medium">{feature.text}</Text>
                      </Stack>
                    </Center>
                  ))}
                </Grid>
              </Stack>

              <Image
                src={config.heroImage}
                alt={`Beautiful window blinds in a ${areaName} home`}
                variant="hero"
                loading="eager"
              />
            </Grid>
          </Container>
        </Section>

        <Section padding="large">
          <Container maxWidth="medium">
            <Stack spacing="xlarge">
              {/* Intro Section */}
              <Center>
                <Stack spacing="medium" align="center">
                  <Heading as="h2" size="3xl" mdSize="4xl">
                    Window Blinds for {areaName} Homes
                  </Heading>
                  <Text size="xlarge" color="light" leading="relaxed" align="center">
                    {config.introText}
                  </Text>
                </Stack>
              </Center>

              {/* Property Types */}
              <Stack spacing="large">
                <Heading as="h2" size="3xl" align="center">
                  Perfect Blinds for {areaName} Properties
                </Heading>
                
                <Grid cols={1} mdCols={config.propertyTypes.length > 2 ? 3 : 2} gap="large">
                  {config.propertyTypes.map((type, index) => (
                    <Card key={index} variant="elevated" padding="large">
                      <Stack spacing="medium" align="center">
                        <LuxuryIcon variant="circle" size="large">
                          <Icon name={type.icon} />
                        </LuxuryIcon>
                        <Heading as="h3" size="xl">{type.title}</Heading>
                        <Text color="light" align="center">
                          {type.description}
                        </Text>
                        <Stack spacing="small">
                          {type.features.map((feature, fIndex) => (
                            <Text key={fIndex} size="small" color="muted">• {feature}</Text>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  ))}
                </Grid>
              </Stack>

              {/* Local Expertise */}
              <Card variant="elevated" padding="xlarge">
                <Stack spacing="medium">
                  <Heading as="h2" size="2xl" align="center">
                    Local Expertise in {areaName}
                  </Heading>
                  <Text color="light" align="center">
                    Having fitted blinds throughout {areaName} for two decades, we understand the unique challenges and opportunities of local properties. From period features to modern extensions, we've seen it all and know how to handle it perfectly.
                  </Text>
                </Stack>
              </Card>

              {/* Service Info */}
              <Card variant="elevated" padding="xlarge">
                <Stack spacing="medium">
                  <Heading as="h2" size="2xl" align="center">
                    Our {areaName} Service
                  </Heading>
                  <Text color="light" align="center">
                    We offer completely free home consultations throughout {areaName}, including evenings and weekends to suit your schedule. Our experienced team will come to your home, measure your windows, show you samples, and provide honest advice with no obligation to buy.
                  </Text>
                </Stack>
              </Card>

              {/* Why Choose Us */}
              <Card variant="elevated" padding="xlarge">
                <Stack spacing="large">
                  <Heading as="h2" size="2xl" align="center">
                    Why Choose Us in {areaName}?
                  </Heading>

                  <Grid cols={1} mdCols={3} lgCols={5} gap="medium">
                    <Center>
                      <Stack spacing="small" align="center">
                        <LuxuryBadge variant="gold" size="medium" shape="circle">
                          1
                        </LuxuryBadge>
                        <Heading as="h3" size="base" color="white">Local Knowledge</Heading>
                        <Text size="small" color="muted" align="center">We understand {areaName}'s unique architectural styles</Text>
                      </Stack>
                    </Center>

                    <Center>
                      <Stack spacing="small" align="center">
                        <LuxuryBadge variant="gold" size="medium" shape="circle">
                          2
                        </LuxuryBadge>
                        <Heading as="h3" size="base" color="white">20+ Years Experience</Heading>
                        <Text size="small" color="muted" align="center">Fitting blinds in hundreds of local homes</Text>
                      </Stack>
                    </Center>

                    <Center>
                      <Stack spacing="small" align="center">
                        <LuxuryBadge variant="gold" size="medium" shape="circle">
                          3
                        </LuxuryBadge>
                        <Heading as="h3" size="base" color="white">Professional Installation</Heading>
                        <Text size="small" color="muted" align="center">Expert fitting included in every quote</Text>
                      </Stack>
                    </Center>

                    <Center>
                      <Stack spacing="small" align="center">
                        <LuxuryBadge variant="gold" size="medium" shape="circle">
                          4
                        </LuxuryBadge>
                        <Heading as="h3" size="base" color="white">Comprehensive Warranty</Heading>
                        <Text size="small" color="muted" align="center">Full warranty on all products and installation</Text>
                      </Stack>
                    </Center>

                    <Center>
                      <Stack spacing="small" align="center">
                        <LuxuryBadge variant="gold" size="medium" shape="circle">
                          5
                        </LuxuryBadge>
                        <Heading as="h3" size="base" color="white">Fair Pricing</Heading>
                        <Text size="small" color="muted" align="center">Competitive prices with no hidden fees</Text>
                      </Stack>
                    </Center>
                  </Grid>
                </Stack>
              </Card>

              {/* CTA Section */}
              <Center>
                <Stack spacing="large" align="center">
                  <Heading as="h2" size="3xl">Ready to Transform Your {areaName} Home?</Heading>
                  <Text size="xlarge" color="light" align="center">
                    Let's make your windows beautiful together. We'll come to you, measure up, and show you exactly what's possible in your {areaName} home.
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

                  <Flex gap="large">
                    <Flex align="center" gap="small">
                      <Icon name="check" size="small" color="muted" />
                      <Text size="small" color="muted">Completely Free</Text>
                    </Flex>
                    <Flex align="center" gap="small">
                      <Icon name="lock" size="small" color="muted" />
                      <Text size="small" color="muted">No Obligation</Text>
                    </Flex>
                    <Flex align="center" gap="small">
                      <Icon name="location" size="small" color="muted" />
                      <Text size="small" color="muted">Covering {areaName}</Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Center>
            </Stack>
          </Container>
        </Section>
      </>
    )
  }

  AreaPage.displayName = `${areaName}Page`
  return AreaPage
}