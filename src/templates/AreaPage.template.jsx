/**
 * Area Page Template - [COMPLETION CHECKLIST]
 * ✅ UI components only; no inline classes
 * ✅ Semantic props
 */
import React from 'react'
import { Button, Card, Container, GlowBox, Grid, Heading, Icon, Section, Stack, Text } from '../components/ui'

export const AreaPageTemplate = () => (
  <>
    <Section background="luxury" padding="xlarge">
      <Container>
        <Stack spacing="medium" align="center">
          <Heading size="2xl" color="gold" align="center">Window Blinds [Area]</Heading>
          <Text size="large" color="light" align="center">Local experts serving [Area] and nearby</Text>
        </Stack>
      </Container>
    </Section>

    <Section background="cream" padding="xlarge">
      <Container>
        <Grid cols={3} gap="large">
          {[1,2,3].map((i) => (
            <GlowBox key={i} variant="subtle">
              <Card variant="elevated" hover="lift" padding="large">
                <Stack spacing="small" align="center">
                  <Icon name="star" />
                  <Heading size="base">Benefit {i}</Heading>
                  <Text color="muted" align="center">Short description.</Text>
                </Stack>
              </Card>
            </GlowBox>
          ))}
        </Grid>
      </Container>
    </Section>

    <Section background="gold" padding="medium">
      <Container>
        <Card variant="dark" padding="large">
          <Stack spacing="large" align="center">
            <Heading size="xl" color="gold" align="center">Get Your Free [Area] Quote</Heading>
            <Button to="/book-appointment" variant="luxury" size="large" iconLeft={<Icon name="calendar" />}>Book Free Home Visit</Button>
          </Stack>
        </Card>
      </Container>
    </Section>
  </>
)

export default AreaPageTemplate


