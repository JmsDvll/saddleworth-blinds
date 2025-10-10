import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Section,
  Container,
  Stack,
  Grid,
  Heading,
  Text,
  Card,
  Icon,
  Button,
  Flex,
  LuxuryBadge,
  GoldDivider,
  ShimmerText,
  GlowBox
} from './ui'

const ReviewsSectionLuxury = ({ 
  reviews = [], 
  title = 'What Our Customers Say',
  subtitle = 'Real reviews from real customers across Saddleworth'
}) => {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6)

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 5.0

  return (
    <Section background="cream" padding="xlarge">
      <Container>
        <Stack spacing="xlarge">
          {/* Header */}
          <Stack spacing="medium" align="center">
            <Heading size="2xl" color="gold" align="center">
              <ShimmerText variant="gold">
                {title}
              </ShimmerText>
            </Heading>
            <Text size="large" color="dark" align="center">
              {subtitle}
            </Text>
            
            {/* Rating Summary */}
            <GlowBox variant="subtle" padding="small">
              <Card variant="elevated" padding="medium">
                <Flex gap="medium" align="center" justify="center">
                  <Text size="3xl" weight="bold" color="gold">
                    {averageRating}
                  </Text>
                  <Stack spacing="small">
                    <Flex gap="small">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="star" 
                          size="small" 
                          className={i < Math.floor(averageRating) ? 'text-brand-gold' : 'text-brand-grey-light'}
                        />
                      ))}
                    </Flex>
                    <Text size="small" color="muted">
                      Based on {reviews.length} reviews
                    </Text>
                  </Stack>
                </Flex>
              </Card>
            </GlowBox>
          </Stack>

          {/* Reviews Grid */}
          <Grid cols={3} gap="large">
            <AnimatePresence mode="popLayout">
              {displayedReviews.map((review, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" hover="lift" padding="large" className="h-full">
                    <Stack spacing="medium" className="h-full">
                      {/* Stars */}
                      <Flex gap="small">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="star" 
                            size="small" 
                            className={i < review.rating ? 'text-brand-gold' : 'text-brand-grey-light'}
                          />
                        ))}
                      </Flex>

                      {/* Review Text */}
                      <Text color="dark" leading="relaxed" className="flex-1">
                        "{review.text}"
                      </Text>

                      {/* Customer Info */}
                      <Stack spacing="small">
                        <GoldDivider variant="simple" size="small" align="left" />
                        <Text weight="semibold" color="dark">
                          {review.name}
                        </Text>
                        <Flex gap="small" align="center">
                          <Icon name="location" size="tiny" className="text-brand-grey" />
                          <Text size="small" color="muted">
                            {review.location}
                          </Text>
                        </Flex>
                        {review.product && (
                          <LuxuryBadge variant="outline" size="small">
                            {review.product}
                          </LuxuryBadge>
                        )}
                      </Stack>

                      {/* Verified Badge */}
                      {review.verified && (
                        <Flex gap="small" align="center">
                          <Icon name="checkCircle" size="tiny" className="text-green-600" />
                          <Text size="small" color="muted">
                            Verified Purchase
                          </Text>
                        </Flex>
                      )}
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid>

          {/* Load More Button */}
          {reviews.length > 6 && (
            <Stack spacing="small" align="center">
              <Button
                variant="outline"
                size="large"
                onClick={() => setShowAll(!showAll)}
                iconRight={<Icon name={showAll ? 'chevronUp' : 'chevronDown'} />}
              >
                {showAll ? 'Show Less' : `Show All ${reviews.length} Reviews`}
              </Button>
            </Stack>
          )}

          {/* CTA */}
          <Stack spacing="medium" align="center">
            <GoldDivider variant="luxury" size="medium" />
            <Heading size="xl" color="gold" align="center">
              Ready to Join Our Happy Customers?
            </Heading>
            <Flex gap="medium" wrap="wrap" justify="center">
              <Button 
                to="/book-appointment"
                variant="luxury"
                size="large"
                iconLeft={<Icon name="calendar" />}
              >
                Book Free Consultation
              </Button>
              <Button 
                to="/gallery"
                variant="outline"
                size="large"
                iconRight={<Icon name="arrowRight" />}
              >
                View Our Work
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}

export default ReviewsSectionLuxury