import React from 'react'
import {
  Section,
  Container,
  Stack,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  LuxuryBadge,
  GoldDivider,
  ShimmerText,
  GlowBox,
  LuxuryIcon,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroOverlay,
  Flex
} from '../components/ui'

const TestLuxury = () => {
  return (
    <>
      {/* Hero to show luxury styling */}
      <HeroSection variant="luxury" height="large">
        <HeroOverlay variant="gradient" />
        <HeroContent align="center" padding="large">
          <Container>
            <Stack spacing="large" align="center">
              <HeroTitle effect="glow">
                <ShimmerText variant="luxury">
                  Luxury Components Test
                </ShimmerText>
              </HeroTitle>
              <HeroSubtitle>
                This page demonstrates the luxury design system
              </HeroSubtitle>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Components Showcase */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Heading size="2xl" color="gold" align="center">
              All Components Working Perfectly
            </Heading>
            
            <GoldDivider variant="luxury" />
            
            <Grid cols={3} gap="large">
              <GlowBox variant="gold">
                <Card variant="luxury" padding="large">
                  <Stack spacing="medium">
                    <LuxuryIcon variant="luxury" size="large">
                      <Icon name="star" />
                    </LuxuryIcon>
                    <Heading size="lg" color="gold">Premium Quality</Heading>
                    <Text color="light">No inline styles, fully standardized</Text>
                    <Button variant="luxury" size="small">Learn More</Button>
                  </Stack>
                </Card>
              </GlowBox>
              
              <GlowBox variant="subtle">
                <Card variant="elevated" padding="large">
                  <Stack spacing="medium">
                    <LuxuryBadge variant="gold" icon="crown">EXCLUSIVE</LuxuryBadge>
                    <Heading size="lg">Elegant Design</Heading>
                    <Text>Every component follows strict standards</Text>
                    <Button variant="primary">Explore</Button>
                  </Stack>
                </Card>
              </GlowBox>
              
              <GlowBox variant="luxury">
                <Card variant="dark" padding="large">
                  <Stack spacing="medium">
                    <ShimmerText variant="gold">
                      <Heading size="lg">Shimmer Effects</Heading>
                    </ShimmerText>
                    <Text color="light">Beautiful animations and transitions</Text>
                    <Flex gap="small">
                      <Button variant="outline" size="small">View</Button>
                      <Button variant="ghost" size="small">Share</Button>
                    </Flex>
                  </Stack>
                </Card>
              </GlowBox>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default TestLuxury