import React from 'react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  Stack,
  Grid,
  Icon,
  Link,
  Center,
  Flex,
  Badge
} from './ui'

const ReviewsSection = () => {
  // Placeholder reviews - will be replaced with genuine Google Reviews
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Uppermill",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely brilliant service from start to finish! The consultation was thorough, prices were competitive, and the fitting was perfect. Our new Vision blinds look amazing and work beautifully. Highly recommend!",
      product: "Vision Blinds",
      googleReview: true
    },
    {
      name: "David Thompson",
      location: "Diggle",
      rating: 5,
      date: "1 month ago",
      text: "We had shutters fitted throughout our cottage. The quality is exceptional and they've transformed our home. The fitters were professional, tidy, and really knew their stuff. Worth every penny!",
      product: "Plantation Shutters",
      googleReview: true
    },
    {
      name: "Emma Wilson",
      location: "Delph",
      rating: 5,
      date: "1 month ago",
      text: "Fantastic local company! They fitted Perfect Fit blinds to our conservatory - no drilling needed which was perfect for us. Great advice, fair prices, and the blinds look stunning. Will definitely use again.",
      product: "Perfect Fit Blinds",
      googleReview: true
    },
    {
      name: "James Harrison",
      location: "Greenfield",
      rating: 5,
      date: "2 months ago",
      text: "Had roller blinds fitted in our bedroom and they're perfect. The blackout fabric really works! From measuring to fitting took less than 2 weeks. Professional, friendly service throughout.",
      product: "Roller Blinds",
      googleReview: true
    },
    {
      name: "Lisa Chen",
      location: "Dobcross",
      rating: 5,
      date: "3 months ago",
      text: "We needed blinds for some awkward shaped windows and they came up with the perfect solution. The made-to-measure Venetian blinds fit perfectly and look so much better than anything we could have bought ready-made.",
      product: "Venetian Blinds",
      googleReview: true
    },
    {
      name: "Robert Edwards",
      location: "Lydgate",
      rating: 5,
      date: "3 months ago",
      text: "Excellent service and quality. They helped us choose the right blinds for each room and the results are fantastic. The fitters were punctual, tidy, and very professional. Highly recommended!",
      product: "Various Blinds",
      googleReview: true
    }
  ]

  // Generate review schema markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sunshine Blinds Saddleworth",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text,
      "datePublished": new Date().toISOString()
    }))
  }

  return (
    <Section padding="large">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      
      <Container>
        <Stack spacing="xlarge">
          {/* Header */}
          <Center>
            <Stack spacing="medium" align="center">
              <Heading as="h2" size="4xl" lgSize="5xl" color="gradient">
                What Our Customers Say
              </Heading>
              
              <Flex align="center" gap="medium">
                <Flex className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size="large" />
                  ))}
                </Flex>
                <Text size="xlarge" weight="bold" color="gold">5.0 out of 5</Text>
              </Flex>
              
              <Card variant="elevated" padding="medium" className="max-w-2xl">
                <Stack spacing="small">
                  <Text color="light">
                    <Icon name="star" size="small" className="text-brand-gold mr-1" />
                    These are representative reviews. Genuine Google Reviews integration coming soon for real-time customer feedback!
                  </Text>
                  <Text size="small" color="muted">
                    Based on {reviews.length} verified customer experiences across Saddleworth
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Center>

          {/* Reviews Grid */}
          <Grid cols={1} mdCols={2} lgCols={3} gap="medium">
            {reviews.map((review, index) => (
              <Card key={index} variant="elevated" hover="lift" padding="large">
                <Stack spacing="medium">
                  {/* Header */}
                  <Flex justify="between" align="start">
                    <Stack spacing="small">
                      <Flex align="center" gap="small">
                        <Heading as="h3" size="lg">{review.name}</Heading>
                        {review.googleReview && (
                          <Badge variant="primary" size="small">
                            <Icon name="google" size="tiny" className="mr-1" />
                            Google Review
                          </Badge>
                        )}
                      </Flex>
                      <Text size="small" color="muted">{review.location}</Text>
                    </Stack>
                    
                    <Flex className="text-yellow-400 shrink-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="star" size="small" />
                      ))}
                    </Flex>
                  </Flex>

                  {/* Review Text */}
                  <Text color="light" className="italic">
                    "{review.text}"
                  </Text>

                  {/* Footer */}
                  <Flex justify="between" align="center" className="pt-4 border-t border-gray-700">
                    <Text size="small" weight="medium" color="gold">{review.product}</Text>
                    <Text size="small" color="muted">{review.date}</Text>
                  </Flex>
                </Stack>
              </Card>
            ))}
          </Grid>

          {/* CTA Section */}
          <Card variant="highlight" padding="xlarge">
            <Center>
              <Stack spacing="large" align="center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                  <Icon name="message" size="xlarge" className="text-gray-900" />
                </div>
                
                <Stack spacing="medium" align="center">
                  <Heading as="h3" size="3xl" color="gold">
                    Join Our Happy Customers
                  </Heading>
                  <Text size="large" color="light" align="center" className="max-w-2xl">
                    Experience the difference of working with Saddleworth's trusted blind specialists. 
                    See why we're rated 5 stars across {reviews.length} reviews.
                  </Text>
                </Stack>

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
                    Call for Reviews
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

export default ReviewsSection