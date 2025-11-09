/**
 * Product Page Template - [COMPLETION CHECKLIST]
 * ✅ Uses only UI components from /components/ui/
 * ✅ Zero inline Tailwind classes
 * ✅ Semantic props only (variant, size, color, align, etc.)
 * ✅ ESLint passes with custom rules
 */
import React from 'react'
import {
  Button,
  Card,
  Container,
  GlowBox,
  Grid,
  Heading,
  Icon,
  Image,
  Section,
  Stack,
  Text,
} from '../components/ui'

export const ProductPageTemplate = () => {
  return (
    <>
      <Section background="luxury" padding="xlarge">
        <Container>
          <Stack spacing="xlarge" align="center">
            <Heading size="2xl" color="gold" align="center">
              Product Title
            </Heading>
            <Text size="large" color="light" align="center">
              Short value proposition for this product family
            </Text>
          </Stack>
        </Container>
      </Section>

      <Section background="dark" padding="xlarge">
        <Container>
          <Stack spacing="xlarge">
            <Heading size="xl" color="gold">Explore Our Collection</Heading>
            <Grid cols={3} gap="large">
              {[1,2,3].map((i) => (
                <GlowBox key={i} variant="subtle">
                  <Card variant="elevated" hover="lift" padding="large">
                    <Image src="/images/optimized/example.jpg" alt="Example" />
                    <Stack spacing="small">
                      <Heading size="base" color="gold">Option {i}</Heading>
                      <Text color="light">A short description of this option.</Text>
                      <Button to="/contact" variant="primary" size="small" iconRight={<Icon name="arrowRight" />}>Enquire</Button>
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <Heading size="xl" color="gold" align="center">Ready to Transform Your Windows?</Heading>
              <Text size="large" color="light" align="center">Book a free consultation today</Text>
              <Button to="/book-appointment" variant="luxury" size="large" iconLeft={<Icon name="calendar" />}>Book Free Consultation</Button>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  )
}

export default ProductPageTemplate


