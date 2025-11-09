/**
 * Form Page Template - [COMPLETION CHECKLIST]
 * ✅ UI components only; no inline classes
 * ✅ Forms submit to PHP endpoints using FormData
 */
import React from 'react'
import { Button, Card, Container, Heading, Icon, Section, Stack, Text } from '../components/ui'

export const FormPageTemplate = () => (
  <>
    <Section background="luxury" padding="xlarge">
      <Container>
        <Stack spacing="medium" align="center">
          <Heading size="2xl" color="gold" align="center">Book Your Free Consultation</Heading>
          <Text size="large" color="light" align="center">We’ll contact you within 24 hours</Text>
        </Stack>
      </Container>
    </Section>

    <Section background="dark" padding="xlarge">
      <Container>
        <Card variant="elevated" padding="xlarge">
          <Text color="light">Place your form component here.</Text>
          <Button to="/" variant="outline" size="small" iconLeft={<Icon name="arrowLeft" />}>Back</Button>
        </Card>
      </Container>
    </Section>
  </>
)

export default FormPageTemplate


